'use client';

import type {
  ModalButtonProps,
  ModelFormContentProps,
} from '@/app/ui/components/Buttons/ModalButton/types';
import SubmitButton from '@/app/ui/components/Buttons/SubmitButton';
import Form from '@/app/ui/components/Form';
import Input, { type InputRef } from '@/app/ui/components/Input';
import Modal from '@/app/ui/components/Modal';
import type React from 'react';
import { type FormEvent, useEffect, useRef } from 'react';

export default function ModalButton({
  modalName,
  iconButton,
  placeholder = 'Enter value',
  submitLabel,
  onSubmitAction,
}: Readonly<ModalButtonProps>) {
  const inputRef = useRef<InputRef | null>(null);

  const handleSubmit = (e: FormEvent, close: () => void) => {
    e.preventDefault();
    const value = inputRef.current?.getValue().trim();
    if (!value) {
      return;
    }

    const clear = () => inputRef.current?.setValue('');
    onSubmitAction(value, clear, close);
  };

  return (
    <>
      <Modal.Open opens={modalName}>{iconButton}</Modal.Open>

      <Modal.Window name={modalName}>
        {({ onCloseModal }: { onCloseModal: () => void }) => (
          <ModalFormContent
            inputRef={inputRef}
            onCloseModal={onCloseModal}
            placeholder={placeholder}
            submitLabel={submitLabel}
            handleSubmit={handleSubmit}
            modalName={modalName}
          />
        )}
      </Modal.Window>
    </>
  );
}
function ModalFormContent({
  inputRef,
  onCloseModal,
  placeholder,
  submitLabel,
  handleSubmit,
  modalName,
}: Readonly<ModelFormContentProps>) {
  useEffect(() => {
    inputRef?.current?.focus();
  }, [inputRef.current]);

  return (
    <Form
      modalName={modalName}
      onSubmitAction={(e: React.FormEvent) => handleSubmit(e, onCloseModal)}
    >
      <Input
        ref={inputRef}
        placeholder={placeholder}
        className="border-freespeechblue-500"
      />
      <SubmitButton title={submitLabel} />
    </Form>
  );
}
