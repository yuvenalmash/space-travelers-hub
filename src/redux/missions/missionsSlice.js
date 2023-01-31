// import { createReducer } from '@reduxjs/toolkit';

// const JOIN_MISSION = 'React-Bookstore/missions/missions';
// const LEAVE_MISSION = 'React-Bookstore/missions/missions';

// export const joinMission = (mission) => ({
//   type: JOIN_MISSION,
//   payload: mission,
// });
// export const leaveMission = (mission) => ({
//   type: LEAVE_MISSION,
//   payload: mission,
// });

// // reducer.js

// const initialState = [];

// const missionsReducer = createReducer(initialState, {
//   [JOIN_MISSION]: (state, action) => {
//     state.push(action.payload);
//   },
//   [LEAVE_MISSION]: (state, action) => {
//     state.filter((mission) => mission.id !== action.payload);
//   },
// });

// export default missionsReducer;

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
    joinMission: () => console.log('join mission'),

    leaveMission: () => console.log('leave mission'),
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => ({
      ...state,
      status: 'loading',
    }.addCase(fetchMissions.fulfilled, (state, action) => {
      const data = action.payload;

      const missionsList = [];
      data.forEach((element) => {
        const { id, name, description } = element;
        missionsList.push({
          id,
          name,
          description,
        });
      });
      return { ...state, contents: missionsList };
    })));
  },
});

export const selectAllMissions = (state) => state.missions.contents;
export const selectState = (state) => state.missions.status;

export default missionsSlice.reducer;
