import type { CancelButtonProps } from '@/app/ui/components/Buttons/CancelButton/types';
import clsx from 'clsx';

export default function CancelButton({
  title = 'Cancel',
  onClickAction,
  className,
}: Readonly<CancelButtonProps>) {
  return (
    <button
      type="button"
      onClick={onClickAction}
      className={clsx(
        'min-h-10 w-full rounded-lg bg-periwinkle-500 px-4 py-2 text-white hover:bg-freespeechblue-500',
        className
      )}
      aria-label="Cancel action"
    >
      {title}
    </button>
  );
}
