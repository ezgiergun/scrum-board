import ConfirmModalButton from '@/app/ui/components/Buttons/ConfirmModalButton';
import Modal from '@/app/ui/components/Modal';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ConfirmModalButton> = {
  title: 'Buttons/ConfirmModalButton',
  component: ConfirmModalButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A modal-triggering button used to confirm critical user actions. Includes cancel and confirm buttons with customizable labels.',
      },
    },
  },
  args: {
    modalName: 'delete-modal',
    confirmText: 'Are you sure you want to delete this item?',
    description: 'This action cannot be undone.',
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel',
  },
  argTypes: {
    iconButton: {
      control: false,
      description: 'The button element that triggers the modal',
    },
    onConfirmAction: {
      action: 'confirmed',
      description: 'Callback executed when confirm is clicked',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-1/4 bg-white p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ConfirmModalButton>;

export const Default: Story = {
  render: (args) => (
    <Modal>
      <ConfirmModalButton
        {...args}
        iconButton={
          <button
            type="button"
            className="rounded bg-red-600 px-3 py-1 text-white"
          >
            Open Modal
          </button>
        }
      />
    </Modal>
  ),
};
