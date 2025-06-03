import type { JSX, ReactElement, ReactNode } from 'react';

interface OverlayProps {
  children: ReactNode;
}
interface CloseButtonProps {
  onClick: () => void;
}
interface ModalContextType {
  openName: string;
  open: (name: string) => void;
  close: () => void;
}
interface ModalProps {
  children: ReactNode;
}
interface OpenProps {
  children?: ReactNode;
  iconButton?: ReactNode;
  opens: string;
}
interface WindowProps {
  children:
    | ReactElement<{ onCloseModal?: () => void }>
    | ((props: { onCloseModal: () => void }) => JSX.Element);
  name: string;
}
export type {
  OverlayProps,
  CloseButtonProps,
  ModalContextType,
  ModalProps,
  OpenProps,
  WindowProps,
};
