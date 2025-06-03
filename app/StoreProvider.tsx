'use client';

import type { BoardState } from '@/app/types';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Provider } from 'react-redux';
import { boardInitialState } from './lib/store/slices/boardSlice';
import { type AppStore, makeStore } from './lib/store/store';

export default function StoreProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const storeRef = useRef<AppStore>(undefined);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const savedState = loadState();
    storeRef.current = makeStore({
      board: savedState ?? boardInitialState,
    });
    setIsClient(true);
  }, []);

  if (!isClient || !storeRef.current) {
    return null;
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}

const KEY = 'scrum-board';

function loadState(): BoardState | undefined {
  if (typeof window === 'undefined') {
    return undefined;
  }
  try {
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error(e, 'Error loading state from local storage');
    return undefined;
  }
}
