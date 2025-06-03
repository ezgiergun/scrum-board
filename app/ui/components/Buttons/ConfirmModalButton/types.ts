import type { ReactNode } from 'react';

interface ConfirmModalButtonProps {
  modalName: string;
  iconButton: ReactNode;
  confirmText: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirmAction: (close: () => void) => void;
}
export type { ConfirmModalButtonProps };
