/* eslint-disable camelcase */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const res = await fetch('https://api.spacexdata.com/v3/missions');
    return res.json();
  },
);

const initialState = {
  contents: [],
  status: 'idle',
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    // eslint-disable-next-line
    joinMission: () => console.log("join mission"),
    // eslint-disable-next-line
    leaveMission: () => console.log("leave mission"),
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchMissions.fulfilled, (state, action) => {
        const data = action.payload;

        const missionsList = [];
        data.forEach((element) => {
          const { mission_id, mission_name, description } = element;
          missionsList.push({
            mission_id,
            mission_name,
            description,
          });
        });
        return { ...state, contents: missionsList };
      });
  },
});

export const selectAllMissions = (state) => state.missions.contents;
export const selectState = (state) => state.missions.status;

export default missionsSlice.reducer;
