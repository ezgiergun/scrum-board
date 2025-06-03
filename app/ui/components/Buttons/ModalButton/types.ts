import type { InputRef } from '@/app/ui/components/Input';
import type React from 'react';
import type { FormEvent, ReactNode } from 'react';

interface ModalButtonProps {
  modalName: string;
  iconButton: ReactNode;
  placeholder?: string;
  submitLabel: string;
  onSubmitAction: (
    inputValue: string,
    clear: () => void,
    close: () => void
  ) => void;
}
interface ModelFormContentProps {
  inputRef: React.RefObject<InputRef | null>;
  onCloseModal: () => void;
  placeholder: string;
  submitLabel: string;
  handleSubmit: (e: FormEvent, close: () => void) => void;
  modalName: string;
}
export type { ModalButtonProps, ModelFormContentProps };
