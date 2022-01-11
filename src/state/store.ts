import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import Game from './GamaSlice';

export const store = configureStore({
  reducer: {
    Game
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
