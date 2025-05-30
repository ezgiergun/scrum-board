import loadState from '@/app/lib/loadState';
import saveState from '@/app/lib/saveState';
import { configureStore } from '@reduxjs/toolkit';
import boardReducer, { boardInitialState } from './boardSlice';

const PERSIST_KEY = 'scrumboard';

const preloadedState = {
  board: loadState<typeof boardInitialState>(PERSIST_KEY) ?? boardInitialState,
};

export const store = configureStore({
  reducer: {
    board: boardReducer,
  },

  preloadedState,
});

store.subscribe(() => {
  saveState(PERSIST_KEY, store.getState().board);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
