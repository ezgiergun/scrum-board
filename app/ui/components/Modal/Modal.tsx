'use client';

import CloseIcon from '@/app/ui/components/Icons/CloseIcon';
import { useHandleKeys } from '@/app/ui/hooks/useHandleKeys';
import useOutsideClick from '@/app/ui/hooks/useOutsideClick';
import {
  cloneElement,
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import type {
  CloseButtonProps,
  ModalContextType,
  ModalProps,
  OpenProps,
  OverlayProps,
  WindowProps,
} from './types';

const Overlay = memo(function Overlay({ children }: Readonly<OverlayProps>) {
  return (
    <div
      className="fixed top-0 left-0 z-20 h-full w-full bg-black/10 backdrop-blur-xs transition-all duration-500"
      aria-hidden="true"
    >
      {children}
    </div>
  );
});

const CloseButton = memo(function CloseButton({
  onClick,
}: Readonly<CloseButtonProps>) {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="Close modal"
      title="Close"
      className="absolute top-2 right-3 translate-x-1.5 rounded-lg border-none bg-none p-[0.15rem] transition-all duration-200 hover:bg-elusive-500"
    >
      <CloseIcon size={18} color="#ff3b30" />
    </button>
  );
});
function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Must be used inside <Modal>');
  }
  return context;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

function Modal({ children }: Readonly<ModalProps>) {
  const [openName, setOpenName] = useState('');

  const _open = useCallback((name: string) => setOpenName(name), []);
  const _close = useCallback(() => setOpenName(''), []);

  const value = useMemo(
    () => ({ openName, open: _open, close: _close }),
    [openName, _open, _close]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

function Open({ children, iconButton, opens }: Readonly<OpenProps>) {
  const { open } = useModalContext();
  const handleOpen = useCallback(() => open(opens), [open, opens]);

  return (
    <span
      onClick={handleOpen}
      className="cursor-pointer"
      onKeyDown={() => open(opens)}
    >
      {iconButton ?? children}
    </span>
  );
}

function Window({ children, name }: WindowProps) {
  const context = useModalContext();

  const { openName, close } = context;
  const ref = useOutsideClick<HTMLDivElement>(close);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useHandleKeys(modalRef, {
    autoFocusFirst: true,
    onEscape: close,
  });

  useEffect(() => {
    if (openName !== name) {
      return;
    }

    const container = modalRef.current;
    if (!container) {
      return;
    }

    const handleCloseModal = () => close();
    container.addEventListener('closeModal', handleCloseModal);
    return () => {
      container.removeEventListener('closeModal', handleCloseModal);
    };
  }, [name, openName, close]);

  if (name !== openName) {
    return null;
  }

  return createPortal(
    <Overlay>
      <div
        ref={(node) => {
          ref.current = node;
          modalRef.current = node;
        }}
        aria-modal="true"
        tabIndex={-1}
        className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 transform rounded-lg bg-narenjiorange-500 p-5 shadow-md outline-none transition-all duration-500"
      >
        <CloseButton onClick={close} />
        {typeof children === 'function'
          ? children({ onCloseModal: close })
          : cloneElement(children, { onCloseModal: close })}
      </div>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
