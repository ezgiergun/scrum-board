'use client';

import cx from 'clsx';
import type { FormProps } from './types';

export default function Form({
  children,
  onSubmitAction,
  modalName,
  className,
}: Readonly<FormProps>) {
  return (
    <form
      onSubmit={onSubmitAction}
      className={cx(
        'space-y-4 rounded-lg bg-elusive-500/80 p-4 text-black',
        className
      )}
      aria-labelledby={modalName}
      aria-describedby={`modal-${modalName}-desc`}
    >
      <h2 id={modalName} className="sr-only">
        {modalName}
      </h2>
      <p id={`${modalName}-desc`} className="sr-only">
        Please enter a value to submit.
      </p>
      {children}
    </form>
  );
}
