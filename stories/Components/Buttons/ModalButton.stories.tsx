import ModalButton from '@/app/ui/components/Buttons/ModalButton';
import Modal from '@/app/ui/components/Modal';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ModalButton> = {
  title: 'Buttons/ModalButton',
  component: ModalButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'ModalButton opens a form modal where users can enter a value and submit. It supports customizable placeholder text and submit label.',
      },
    },
  },
  args: {
    modalName: 'example-modal',
    placeholder: 'Enter task name...',
    submitLabel: 'Add Task',
  },
  argTypes: {
    iconButton: {
      control: false,
      description: 'Button element that triggers the modal',
    },
    onSubmitAction: {
      action: 'submitted',
      description:
        'Callback function receiving (value: string, clear: () => void, close: () => void)',
    },
  },
  decorators: [
    (Story) => (
        <div style={{ padding: '1rem', backgroundColor: '#f5f5f5', width:'25%' }}>
          <Story />
        </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ModalButton>;

export const Default: Story = {
  render: (args) => (
    <Modal>
      <ModalButton
        {...args}
        iconButton={
          <button
            type="button"
            className="rounded bg-freespeechblue-500 px-4 py-2 text-white"
          >
            Open Modal
          </button>
        }
      />
    </Modal>
  ),
};
