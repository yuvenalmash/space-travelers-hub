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
    joinMission: (state, action) => {
      const id = action.payload;

      const newContents = state.contents.map((mission) => {
        if (mission.mission_id !== id) return mission;

        return { ...mission, joined: true };
      });

      return { ...state, contents: newContents };
    },
    leaveMission: (state, action) => {
      const id = action.payload;

      const newContents = state.contents.map((mission) => {
        if (mission.mission_id !== id) return mission;

        return { ...mission, joined: false };
      });

      return { ...state, contents: newContents };
    },
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
            joined: false,
          });
        });
        return { ...state, contents: missionsList, status: 'idle' };
      });
  },
});
export const { joinMission, leaveMission } = missionsSlice.actions;
export const selectAllMissions = (state) => state.missions.contents;
export const selectState = (state) => state.missions.status;

export default missionsSlice.reducer;
