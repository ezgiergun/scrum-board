import type { Task as TaskType } from '@/app/types';

interface TaskProps {
  task: TaskType;
  columnId: string;
  isOverlay?: boolean;
  className?: string;
}

export type { TaskProps };
