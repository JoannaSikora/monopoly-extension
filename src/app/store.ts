import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import RoundCounter from '../features/RoundCounter/RoundCounterSlice';

export const store = configureStore({
  reducer: {
    RoundCounter
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
