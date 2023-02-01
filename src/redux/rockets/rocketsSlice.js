/* eslint-disable camelcase */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v4/rockets');
    return response.json();
  },
);

const initialState = {
  contents: [],
  status: 'idle',
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    makeReservation: (state, action) => {
      const id = action.payload;
      const newContents = state.contents.map((rocket) => {
        if (rocket.id !== id) return rocket;
        return { ...rocket, reserved: true };
      });
      return { ...state, contents: newContents };
    },
    cancelReservation: () => (
      // eslint-disable-next-line
      console.log('cancel reservation')
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => (
        { ...state, status: 'loading' }
      ))
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const data = action.payload;
        const rocketsList = [];
        data.forEach((element) => {
          const {
            id, name, description, flickr_images,
          } = element;
          rocketsList.push({
            id, name, description, flickr_images, reserved: false,
          });
        });
        return { ...state, contents: rocketsList, status: 'idle' };
      });
  },
});

export const selectAllRockets = (state) => state.rockets.contents;
export const selectState = (state) => state.rockets.status;
export const { makeReservation, cancelReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
