import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    makeReservation: () => (
      console.log('make reservation')
    ),
    cancelReservation: () => (
      console.log('cancel reservation')
    ),
  },
});

export default rocketsSlice;
