'use client';

import type { SubmitButtonProps } from '@/app/ui/components/Buttons/SubmitButton/types';
import clsx from 'clsx';

export default function SubmitButton({
  title,
  onClickAction,
  className,
}: Readonly<SubmitButtonProps>) {
  return (
    <button
      type="submit"
      onClick={onClickAction}
      className={clsx(
        'min-h-10 w-full rounded-lg bg-sunset-500 px-4 py-2 text-white hover:bg-redorange-500',
        className
      )}
      aria-label="Confirm action"
    >
      {title}
    </button>
  );
}
