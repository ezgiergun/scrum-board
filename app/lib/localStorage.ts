'use client';
import type { BoardState } from '@/app/types';

const KEY = 'scrum-board';
export function saveState(state: BoardState) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
  } catch (e) {
    console.error(e, 'Error saving state to local storage');
  }
}
