import boardReducer, {
  boardInitialState,
} from '@/app/lib/store/slices/boardSlice';
import Search from '@/app/ui/components/Search';
import { configureStore } from '@reduxjs/toolkit';
import type { Meta, StoryObj } from '@storybook/react';
import type React from 'react';
import { Provider } from 'react-redux';

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  tags: ['autodocs'],

  decorators: [
    (Story) => (
        <MockProvider>
        <div style={{ padding: '1rem', backgroundColor: '#f5f5f5', width:'20%' }}>
          <Story />
        </div>
        </MockProvider>

    ),
  ],
};

export default meta;

function MockProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const store = configureStore({
    reducer: { board: boardReducer },
    preloadedState: {
      board: {
        ...boardInitialState,
        tasks: {
          task1: { id: 'task1', title: 'Write docs' },
          task2: { id: 'task2', title: 'Build UI' },
        },
        columns: [
          {
            id: 'col-1',
            title: 'To Do',
            columnType: 'default' as const,
            taskIds: ['task1'],
          },
          {
            id: 'col-2',
            title: 'Done',
            columnType: 'default' as const,
            taskIds: ['task2'],
          },
        ],
        highlightedTaskId: null,
      },
    },
  });

  return <Provider store={store}>{children}</Provider>;
}

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  name: 'Search Input',
  parameters: {
    docs: {
      description: {
        story:
          'Basic usage of the search input showing task filtering and highlighting.',
      },
    },
  },
};
