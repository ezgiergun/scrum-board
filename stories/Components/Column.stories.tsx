import { makeStore } from '@/app/lib/store/store';
import type { BoardState, Column as ColumnType } from '@/app/types';
import Column from '@/app/ui/components/Column';
import Modal from '@/app/ui/components/Modal';
import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';

const sampleColumn: ColumnType = {
  id: 'todo',
  title: 'To Do',
  columnType: 'custom',
  taskIds: ['1', '2'],
};

const preloadedState: { board: BoardState } = {
  board: {
    columns: [sampleColumn],
    tasks: {
      '1': { id: '1', title: 'Set up Storybook' },
      '2': { id: '2', title: 'Create Column story' },
    },
    highlightedTaskId: '',
  },
};

const store = makeStore(preloadedState);

const meta: Meta<typeof Column> = {
  title: 'Board/Column',
  component: Column,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Modal>
          <div className="min-h-screen bg-[#f1f2f6] p-4">
            <Story />
          </div>
        </Modal>
      </Provider>
    ),
  ],
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom class to override or extend styles.',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A column in the Scrum board. Contains tasks and supports editing, deleting (if custom), and adding new tasks.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Column>;

export const Default: Story = {
  name: 'Default Column',
  args: {
    column: sampleColumn,
    className: 'bg-red-400',
  },
};

export const WithCustomClass: Story = {
  name: 'Column with Custom Class',
  args: {
    column: sampleColumn,
    className: 'border-4 border-red-500',
  },
};
