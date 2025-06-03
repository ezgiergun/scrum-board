import type { Column as ColumnType } from '@/app/types';

interface ColumnProps {
  column: ColumnType;
  highlightedTaskId?: string;
  className?: string;
}
export type { ColumnProps };
