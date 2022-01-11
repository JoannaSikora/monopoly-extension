import { createSlice } from '@reduxjs/toolkit';
import { CurrentRule } from '../models/Rules.types';
import { RootState } from './store';

interface GameInitialState {
  currentRound: number;
  currentRules: CurrentRule[];
}

const initialState: GameInitialState = {
  currentRound: 1,
  currentRules: []
};

const GameSlice = createSlice({
  name: 'Game',
  initialState,
  reducers: {
    nextRound: (state) => {
      state.currentRound++;
      state.currentRules = state.currentRules.filter(
        (rule) => rule.lastRound !== state.currentRound
      );
    },
    newRuleAdded: (state, { payload }) => {
      state.currentRules.push(payload);
    },
    ruleRemoved: (state, { payload: id }) => {
      state.currentRules = state.currentRules.filter((rule) => rule.id !== id);
    }
  }
});

export const { nextRound, newRuleAdded, ruleRemoved } = GameSlice.actions;

export const selectCurrentRound = (state: RootState) => state.Game.currentRound;
export const selectCurrentRules = (state: RootState) => state.Game.currentRules;

export default GameSlice.reducer;
