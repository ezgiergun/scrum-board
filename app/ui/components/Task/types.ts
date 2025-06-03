import type { Task as TaskType } from '@/app/types';

interface TaskProps {
  task: TaskType;
  columnId: string;
  isOverlay?: boolean;
}

export type { TaskProps };
