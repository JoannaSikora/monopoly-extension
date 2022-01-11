import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const initialState = {
  currentRound: 1
};

const RoundCounterSlice = createSlice({
  name: 'RoundCounter',
  initialState,
  reducers: {
    nextRound: (state) => {
      state.currentRound++;
    }
  }
});

export const { nextRound } = RoundCounterSlice.actions;

export const selectCurrentRound = (state: RootState) => state.RoundCounter.currentRound;

export default RoundCounterSlice.reducer;
