import type { FormEvent, ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
  onSubmitAction: (e: FormEvent) => void;
  modalName: string;
  className?: string;
}
export type { FormProps };
