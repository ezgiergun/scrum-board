'use client';

import clsx from 'clsx';
import type { ChangeEvent } from 'react';
import type React from 'react';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import type { InputProps, InputRef } from './types';

function InputComponent(
  { className, initialValue = '', ...props }: InputProps,
  ref: React.Ref<InputRef | null>
) {
  const [value, setValue] = useState(initialValue);
  const inputElementRef = useRef<HTMLInputElement>(null);
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  useImperativeHandle(
    ref,
    () => ({
      getValue: () => inputElementRef.current?.value ?? '',
      setValue: (v: string) => {
        setValue(v);
        if (inputElementRef.current) {
          inputElementRef.current.value = v;
        }
      },
      focus: () => inputElementRef.current?.focus(),
    }),
    []
  );

  return (
    <input
      {...props}
      ref={inputElementRef}
      value={value}
      maxLength={props.maxLength ?? 200}
      onChange={handleChange}
      className={clsx(
        'w-[18rem] rounded-lg border px-3 py-2 sm:w-full',
        className
      )}
      aria-label="Input Field"
      aria-required={false}
      aria-describedby="type a value"
    />
  );
}

const Input = forwardRef(InputComponent);
Input.displayName = 'Input';

export default Input;
export type { InputRef };
