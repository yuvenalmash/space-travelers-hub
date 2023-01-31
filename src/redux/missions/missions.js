import { createReducer } from '@reduxjs/toolkit';

const JOIN_MISSION = 'React-Bookstore/missions/missions';
const LEAVE_MISSION = 'React-Bookstore/missions/missions';

export const joinMission = (mission) => ({
  type: JOIN_MISSION,
  payload: mission,
});
export const leaveMission = (mission) => ({
  type: LEAVE_MISSION,
  payload: mission,
});

// reducer.js

const initialState = [];

const missionsReducer = createReducer(initialState, {
  [JOIN_MISSION]: (state, action) => {
    state.push(action.payload);
  },
  [LEAVE_MISSION]: (state, action) => {
    state.filter((mission) => mission.id !== action.payload);
  },
});

export default missionsReducer;
