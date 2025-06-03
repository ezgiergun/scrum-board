import { type RefObject, useEffect, useRef } from 'react';

export default function useOutsideClick<T extends HTMLElement = HTMLElement>(
  handler: () => void,
  listenCapturing = true
): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    }

    document.addEventListener('mousedown', handleClick, listenCapturing);
    document.addEventListener('touchstart', handleClick, listenCapturing);

    return () => {
      document.removeEventListener('mousedown', handleClick, listenCapturing);
      document.removeEventListener('touchstart', handleClick, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return ref;
}
