'use client';

import { useAppDispatch, useAppSelector } from '@/app/lib/store/hooks';
import {
  addTask,
  deleteColumn,
  editColumn,
} from '@/app/lib/store/slices/boardSlice';
import ConfirmModalButton from '@/app/ui/components/Buttons/ConfirmModalButton';
import type { ColumnProps } from '@/app/ui/components/Column/types';
import AddIcon from '@/app/ui/components/Icons/AddIcon';
import DeleteIcon from '@/app/ui/components/Icons/DeleteIcon';
import EditIcon from '@/app/ui/components/Icons/EditIcon';
import { useDroppable } from '@dnd-kit/core';
import ModalButton from '../Buttons/ModalButton';
import Task from '../Task';
import clsx from "clsx";

export default function Column({ column, className }: Readonly<ColumnProps>) {
  const tasks = useAppSelector((state) => state.board.tasks);
  const dispatch = useAppDispatch();

  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  function handleAddTask(title: string, clear: () => void, close: () => void) {
    dispatch(
      addTask({
        columnId: column.id,
        task: {
          id: crypto.randomUUID(),
          title,
        },
      })
    );
    clear();
    close();
  }

  function handleEditColumn(
    newTitle: string,
    clear: () => void,
    close: () => void
  ) {
    dispatch(editColumn({ columnId: column.id, title: newTitle }));
    clear();
    close();
  }

  function handleDeleteColumn(close: () => void) {
    dispatch(deleteColumn({ columnId: column.id }));
    close();
  }

  return (
    <section
      ref={setNodeRef}
      className={clsx("max-h-screen min-h-[100px] w-full flex-shrink-0 rounded-lg bg-elusive-500 p-4 shadow sm:w-72", className)}
      aria-labelledby={`column-title-${column.title}`}
    >
      <div
        className="mb-4 flex items-center justify-between"
        aria-label="Column title and controls"
      >
        <h2 className="font-bold text-lg">{column.title}</h2>
        <div className="flex">
          <ModalButton
            modalName={`edit-column-${column.id}`}
            iconButton={
              <button
                type="button"
                title="Edit Column Name"
                aria-label={`Edit column ${column.title}`}
                className="rounded-lg p-2 hover:bg-elusive-500"
              >
                <EditIcon width={20} height={20} color="#3c40c6" />
              </button>
            }
            placeholder={column.title}
            submitLabel="Save"
            onSubmitAction={handleEditColumn}
          />

          {column.columnType === 'custom' && (
            <ConfirmModalButton
              modalName={`delete-column-${column.id}`}
              iconButton={
                <button
                  type="button"
                  title="Delete Column"
                  aria-label={`Delete column ${column.title}`}
                  className="rounded-lg p-2 hover:bg-elusive-500"
                >
                  <DeleteIcon width={20} height={20} color="#3c40c6" />
                </button>
              }
              confirmText="Are you sure you want to delete this column?"
              description="*Tasks will be moved to the 'To Do' column."
              onConfirmAction={handleDeleteColumn}
            />
          )}
        </div>
      </div>

      <div
        className="h-auto max-h-72 space-y-2 overflow-y-auto overflow-x-hidden scroll-smooth sm:h-[62dvh] sm:max-h-80"
        aria-label={`Tasks in column ${column.title}`}
      >
        {column.taskIds.map((taskId) => {
          const task = tasks[taskId];
          if (!task) {
            return null;
          }
          return <Task key={taskId} task={task} columnId={column.id} />;
        })}
      </div>

      <div className="order-1 flex w-full items-center justify-center p-2 sm:order-3">
        <ModalButton
          modalName={`add-task-${column.id}`}
          iconButton={
            <button
              type="button"
              title="Add Task"
              aria-label={`Add task to column ${column.title}`}
              className="flex justify-center rounded-lg bg-gray-100 p-2 text-sm hover:bg-gray-200"
            >
              <AddIcon color="#3c40c6" width={26} height={26} />
            </button>
          }
          placeholder="Type a task title"
          submitLabel="Add Task"
          onSubmitAction={handleAddTask}
        />
      </div>
    </section>
  );
}
