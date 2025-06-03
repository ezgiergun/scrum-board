import { makeStore } from '@/app/lib/store/store';
import type { BoardState, Task as TaskType } from '@/app/types';
import Modal from '@/app/ui/components/Modal';
import Task from '@/app/ui/components/Task';
import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';

const sampleTask: TaskType = {
  id: 'task-1',
  title: 'Sample task for story',
};

const preloadedState: { board: BoardState } = {
  board: {
    columns: [
      {
        id: 'todo',
        title: 'To Do',
        columnType: 'custom',
        taskIds: ['task-1'],
      },
    ],
    tasks: {
      'task-1': sampleTask,
    },
    highlightedTaskId: '',
  },
};

const store = makeStore(preloadedState);

const meta: Meta<typeof Task> = {
  title: 'Board/Task',
  component: Task,
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
  parameters: {
    docs: {
      description: {
        component:
          'A draggable task inside a column. Allows editing and deletion via modal interactions.',
      },
    },
  },
  argTypes: {
    isOverlay: {
      control: 'boolean',
      description: 'If true, renders task with overlay styling during drag.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Task>;

export const Default: Story = {
  name: 'Default Task',
  args: {
    task: sampleTask,
    columnId: 'todo',
    isOverlay: false,
  },
};

export const Highlighted: Story = {
  name: 'Highlighted Task',
  args: {
    task: sampleTask,
    columnId: 'todo',
    isOverlay: false,
  },
  decorators: [
    (Story) => {
      const highlightedState: BoardState = {
        ...preloadedState.board,
        highlightedTaskId: 'task-1',
      };
      const customStore = makeStore({ board: highlightedState });

      return (
        <Provider store={customStore}>
          <Modal>
            <div className="min-h-screen bg-[#f1f2f6] p-4">
              <Story />
            </div>
          </Modal>
        </Provider>
      );
    },
  ],
};
