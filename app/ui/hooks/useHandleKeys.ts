import type React from 'react';
import { useEffect } from 'react';

interface UseHandleKeysProps {
  onEscape: () => void;
  autoFocusFirst?: boolean;
}

export function useHandleKeys(
  ref: React.RefObject<HTMLElement | null>,
  { onEscape, autoFocusFirst = false }: UseHandleKeysProps
) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onEscape();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    if (autoFocusFirst && ref.current) {
      const first = ref.current.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      first?.focus();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [ref, onEscape, autoFocusFirst]);
}
