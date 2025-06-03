import type { BoardState } from '@/app/types';
import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './slices/boardSlice';

export const makeStore = (preloadedState?: {
  board: BoardState;
}) => {
  return configureStore({
    reducer: {
      board: boardReducer,
    },
    preloadedState,
  });
};
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
