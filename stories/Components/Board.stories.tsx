import { makeStore } from '@/app/lib/store/store';
import type { BoardState } from '@/app/types';
import Board from '@/app/ui/components/Board';
import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';

function withStore(preloadedState: { board: BoardState }) {
  const store = makeStore(preloadedState);
  return (Story: any) => (
    <Provider store={store}>
      <div className="min-h-screen bg-[#f1f2f6] p-4">
        <Story />
      </div>
    </Provider>
  );
}

const meta: Meta<typeof Board> = {
  title: 'Board/MainBoard',
  component: Board,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Main Scrum Board component with full drag-and-drop functionality.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Board>;

export const Default: Story = {
  name: 'Default Board View',
  decorators: [
    withStore({
      board: {
        columns: [
          { id: 'todo', title: 'To Do', columnType: 'default', taskIds: ['1'] },
          {
            id: 'in-progress',
            title: 'In Progress',
            columnType: 'default',
            taskIds: [],
          },
        ],
        tasks: {
          '1': { id: '1', title: 'Storybook integration task' },
        },
        highlightedTaskId: '',
      },
    }),
  ],
  args: {
    className: '',
  },
};

export const EmptyBoard: Story = {
  name: 'Empty Board',
  decorators: [
    withStore({
      board: {
        columns: [],
        tasks: {},
        highlightedTaskId: '',
      },
    }),
  ],
  args: {
    className: '',
  },
};

export const DnDBoard: Story = {
  name: 'Drag & Drop Demo',
  decorators: [
    withStore({
      board: {
        columns: [
          {
            id: 'todo',
            title: 'To Do',
            columnType: 'default',
            taskIds: ['1', '2'],
          },
          {
            id: 'in-progress',
            title: 'In Progress',
            columnType: 'default',
            taskIds: ['3'],
          },
          { id: 'done', title: 'Done', columnType: 'default', taskIds: [] },
        ],
        tasks: {
          '1': { id: '1', title: 'Write unit tests' },
          '2': { id: '2', title: 'Update docs' },
          '3': { id: '3', title: 'Fix reducer bug' },
        },
        highlightedTaskId: '',
      },
    }),
  ],
  args: {
    className: '',
  },
};

export const HighlightedTaskBoard: Story = {
  name: 'Highlighted Task',
  decorators: [
    withStore({
      board: {
        columns: [
          { id: 'todo', title: 'To Do', columnType: 'default', taskIds: ['1'] },
        ],
        tasks: {
          '1': { id: '1', title: 'Review pull request' },
        },
        highlightedTaskId: '1',
      },
    }),
  ],
  args: {
    className: '',
  },
};
