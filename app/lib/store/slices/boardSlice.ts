import { saveState } from '@/app/lib/localStorage';
import type { BoardState, Column, Task } from '@/app/types';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState: BoardState = {
  columns: [
    {
      id: 'todo',
      title: 'To Do',
      columnType: 'default',
      taskIds: [],
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      columnType: 'default',
      taskIds: [],
    },
    {
      id: 'done',
      title: 'Done',
      columnType: 'default',
      taskIds: [],
    },
  ],
  tasks: {},
  highlightedTaskId: '',
};

export const fetchAndFillTasks = createAsyncThunk(
  'board/fetchAndFillTasks',
  async () => {
    const res = await fetch('https://dummyjson.com/todos?limit=15');
    const data = await res.json();
    return data.todos;
  }
);

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setHighlightedTaskId: (state, action: PayloadAction<string | null>) => {
      state.highlightedTaskId = action.payload;
    },

    addColumn: (state, action: PayloadAction<{ title: string }>) => {
      const id = crypto.randomUUID();
      state.columns.push({
        id,
        title: action.payload.title,
        columnType: 'custom',
        taskIds: [],
      });
      saveState(state);
    },
    editColumn: (
      state,
      action: PayloadAction<{ columnId: string; title: string }>
    ) => {
      const { columnId, title } = action.payload;
      const column = state.columns.find((col) => col.id === columnId);
      if (column) {
        column.title = title;
      }
      saveState(state);
    },

    deleteColumn: (state, action: PayloadAction<{ columnId: string }>) => {
      const { columnId } = action.payload;

      const columnIndex = state.columns.findIndex((col) => col.id === columnId);
      if (columnIndex === -1) {
        return;
      }

      const columnToDelete = state.columns[columnIndex];

      if (
        columnToDelete.columnType === 'custom' &&
        columnToDelete.taskIds.length > 0
      ) {
        const todoColumn = state.columns.find(
          (col) => col.columnType === 'default' && col.title === 'To Do'
        );

        if (todoColumn) {
          todoColumn.taskIds.push(...columnToDelete.taskIds);
        }
      }

      state.columns.splice(columnIndex, 1);
      saveState(state);
    },

    addTask: (
      state,
      action: PayloadAction<{ columnId: string; task: Task }>
    ) => {
      const { columnId, task } = action.payload;
      state.tasks[task.id] = task;
      const column = state.columns.find(
        (column: Column) => column.id === columnId
      );
      if (column) {
        column.taskIds.push(task.id);
      }
      saveState(state);
    },
    editTask: (
      state,
      action: PayloadAction<{ taskId: string; title: string }>
    ) => {
      const { taskId, title } = action.payload;
      const task = state.tasks[taskId];
      if (task) {
        task.title = title;
      }
      saveState(state);
    },
    deleteTask: (
      state,
      action: PayloadAction<{ taskId: string; columnId: string }>
    ) => {
      const { taskId, columnId } = action.payload;
      const column = state.columns.find(
        (column: Column) => column.id === columnId
      );
      if (column) {
        column.taskIds = column.taskIds.filter((id: string) => id !== taskId);
      }
      delete state.tasks[taskId];
      saveState(state);
    },
    moveTask: (
      state,
      action: PayloadAction<{
        sourceColumnId: string;
        destinationColumnId: string;
        destinationIndex: number;
        taskId: string;
      }>
    ) => {
      const { sourceColumnId, destinationColumnId, destinationIndex, taskId } =
        action.payload;
      const sourceColumn = state.columns.find(
        (column: Column) => column.id === sourceColumnId
      );
      const destinationColumn = state.columns.find(
        (column: Column) => column.id === destinationColumnId
      );
      if (!sourceColumn || !destinationColumn) {
        return;
      }
      const task = state.tasks[taskId];
      if (task) {
        sourceColumn.taskIds = sourceColumn.taskIds.filter(
          (id: string) => id !== taskId
        );
        destinationColumn.taskIds.splice(destinationIndex, 0, taskId);
      }
      saveState(state);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAndFillTasks.fulfilled, (state, action) => {
      const todos = action.payload;
      const allColumnIds = state.columns.map((col) => col.id);

      state.tasks = {};
      state.columns.forEach((col) => {
        col.taskIds = [];
      });

      for (const todo of todos) {
        const taskId = crypto.randomUUID();
        const task = {
          id: taskId,
          title: todo.todo,
        };

        state.tasks[taskId] = task;

        const randomColumnId =
          allColumnIds[Math.floor(Math.random() * allColumnIds.length)];
        const targetColumn = state.columns.find(
          (col) => col.id === randomColumnId
        );
        if (targetColumn) {
          targetColumn.taskIds.push(taskId);
        }
      }
    });
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  moveTask,
  addColumn,
  editColumn,
  deleteColumn,
  setHighlightedTaskId,
} = boardSlice.actions;
export default boardSlice.reducer;
export const boardInitialState = initialState;
