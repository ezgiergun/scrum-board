'use client';

import { useAppDispatch, useAppSelector } from '@/app/lib/store/hooks';
import { deleteTask, editTask } from '@/app/lib/store/slices/boardSlice';
import ConfirmModalButton from '@/app/ui/components/Buttons/ConfirmModalButton';
import DeleteIcon from '@/app/ui/components/Icons/DeleteIcon/DeleteIcon';
import EditIcon from '@/app/ui/components/Icons/EditIcon/EditIcon';
import type { TaskProps } from '@/app/ui/components/Task/types';
import { useDraggable } from '@dnd-kit/core';
import cx from 'clsx';
import { useMemo } from 'react';
import ModalButton from '../Buttons/ModalButton';
export default function Task({
  task,
  columnId,
  isOverlay,
}: Readonly<TaskProps>) {
  const dispatch = useAppDispatch();
  const highlightedTaskId = useAppSelector(
    (state) => state.board.highlightedTaskId
  );
  const isHighlighted = highlightedTaskId === task.id;

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
    data: {
      columnId,
    },
  });

  function handleTaskEdit(value: string, clear: () => void, close: () => void) {
    dispatch(editTask({ taskId: task.id, title: value }));
    clear();
    close();
  }

  function handleTaskDelete(close: () => void) {
    dispatch(deleteTask({ taskId: task.id, columnId }));
    close();
  }
  const style = useMemo(() => {
    if (!transform) {
      return undefined;
    }
    return {
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    };
  }, [transform]);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cx(
        'relative z-20 w-[95%] rounded border bg-gray-100 p-2 shadow-sm',
        isHighlighted && 'border-orange-500',
        isOverlay && 'pointer-events-none scale-105 opacity-90 shadow-lg'
      )}
      aria-label={`Task: ${task.title}`}
    >
      <p
        {...listeners}
        {...attributes}
        className="wrap-break-word cursor-grab text-earl-500 text-sm"
      >
        {task.title}
      </p>
      <div className="mt-2 flex">
        <ModalButton
          modalName={`edit-task-${task.id}`}
          iconButton={
            <button
              type="button"
              title="Edit Task"
              className="rounded-full p-1 hover:bg-elusive-500"
              aria-label={`Edit task: ${task.title}`}
            >
              <EditIcon width={16} height={16} color="#3c40c6" />
            </button>
          }
          placeholder={task.title}
          submitLabel="Save"
          onSubmitAction={handleTaskEdit}
        />

        <ConfirmModalButton
          modalName={`delete-task-${task.id}`}
          iconButton={
            <button
              type="button"
              title="Delete Task"
              className="rounded-full p-1 hover:bg-elusive-500"
              aria-label={`Delete task: ${task.title}`}
            >
              <DeleteIcon width={16} height={16} color="#3c40c6" />
            </button>
          }
          confirmText="Are you sure you want to delete this task?"
          confirmLabel="Delete"
          cancelLabel="Cancel"
          onConfirmAction={handleTaskDelete}
        />
      </div>
    </div>
  );
}
