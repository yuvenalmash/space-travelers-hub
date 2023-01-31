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
    makeReservation: () => (
      // eslint-disable-next-line
      console.log('make reservation')
    ),
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
          const img = flickr_images[0];
          rocketsList.push({
            id, name, description, img,
          });
        });
        return { ...state, contents: rocketsList };
      });
  },
});

export const selectAllRockets = (state) => state.rockets.contents;
export const selectState = (state) => state.rockets.status;

export default rocketsSlice.reducer;
