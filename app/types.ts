export type columnTypes = 'default' | 'custom';

export interface Column {
  id: string;
  title: string;
  columnType: columnTypes;
  taskIds: string[];
}
export interface Task {
  id: string;
  title: string;
}
export interface BoardState {
  columns: Column[];
  tasks: Record<string, Task>;
}
