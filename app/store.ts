import { configureStore } from '@reduxjs/toolkit'
import boardReducer, {boardInitialState}  from './boardSlice'
import loadFromLS from "@/app/lib/loadFromLS";
import saveToLS from "@/app/lib/saveToLS";

const PERSIST_KEY = 'scrumboard'

const preloadedState = {
    board: loadFromLS<typeof boardInitialState>(PERSIST_KEY) ?? boardInitialState,
}

export const store = configureStore({
    reducer: {
        board: boardReducer,
    },
    preloadedState,
})

store.subscribe(() => {
    saveToLS(PERSIST_KEY, store.getState().board)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
