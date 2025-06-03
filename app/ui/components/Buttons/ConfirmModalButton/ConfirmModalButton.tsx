'use client';

import CancelButton from '@/app/ui/components/Buttons/CancelButton';
import type { ConfirmModalButtonProps } from '@/app/ui/components/Buttons/ConfirmModalButton/types';
import SubmitButton from '@/app/ui/components/Buttons/SubmitButton';
import Modal from '@/app/ui/components/Modal';

export default function ConfirmModalButton({
  modalName,
  iconButton,
  confirmText = 'Do you want to perform this action?',
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirmAction,
}: Readonly<ConfirmModalButtonProps>) {
  return (
    <>
      <Modal.Open opens={modalName}>{iconButton}</Modal.Open>

      <Modal.Window name={modalName}>
        {({ onCloseModal }: { onCloseModal: () => void }) => {
          return (
            <section
              className="m-1 space-y-4 rounded-lg bg-elusive-500 p-6"
              role="alertdialog"
              aria-labelledby={`confirm-${modalName}-title`}
              aria-describedby={`confirm-${modalName}-desc`}
            >
              <h2 id={`confirm-${modalName}-title`} className="sr-only">
                Confirmation Required
              </h2>
              <p className="text-base">{confirmText}</p>
              {description && <p className="text-sm">{description}</p>}
              <div className="flex justify-end gap-2">
                <CancelButton
                  title={cancelLabel}
                  onClickAction={onCloseModal}
                />
                <SubmitButton
                  title={confirmLabel}
                  onClickAction={() => onConfirmAction(onCloseModal)}
                />
              </div>
            </section>
          );
        }}
      </Modal.Window>
    </>
  );
}
