import type { InputHTMLAttributes } from 'react';

interface InputRef {
  getValue: () => string;
  setValue: (value: string) => void;
  focus(): void;
}

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  className?: string;
  initialValue?: string;
}
export type { InputProps, InputRef };
