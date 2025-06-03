'use client';

import { useAppDispatch, useAppSelector } from '@/app/lib/store/hooks';
import { addColumn, moveTask } from '@/app/lib/store/slices/boardSlice';
import Column from '@/app/ui/components/Column';
import AddColumnIcon from '@/app/ui/components/Icons/AddColumnIcon';
import Modal from '@/app/ui/components/Modal';
import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { useState } from 'react';
import ModalButton from '../Buttons/ModalButton';
import Task from '../Task';
import clsx from "clsx";

export default function Board({className}: Readonly<BoardProps>) {
  const columns = useAppSelector((state) => state.board.columns);
  const tasks = useAppSelector((state) => state.board.tasks);
  const dispatch = useAppDispatch();
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  function handleAddColumn(
    title: string,
    clear: () => void,
    close: () => void
  ) {
    dispatch(addColumn({ title }));
    clear();
    close();
  }

  function handleDragStart(e: DragStartEvent) {
    const id = String(e.active.id);
    setActiveId(id);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveId(null);

    if (!over || !active) {
      return;
    }

    const taskId = active.id as string;
    const sourceColumnId = active.data.current?.columnId;
    const destinationColumnId = String(over.id);

    if (
      sourceColumnId &&
      destinationColumnId &&
      sourceColumnId !== destinationColumnId
    ) {
      dispatch(
        moveTask({
          sourceColumnId,
          destinationColumnId,
          destinationIndex: 0,
          taskId,
        })
      );
    }
  }

  return (
    <Modal>
      <main
        className={clsx("flex h-[calc(100dvh-5rem)] flex-col-reverse flex-nowrap items-center gap-4 overflow-x-auto overflow-y-auto rounded-lg border-1 border-londonsquare-500 bg-freespeechblue-500 px-4 py-4 sm:flex-row sm:flex-wrap sm:px-20 sm:py-10 ", className)}
        aria-label="Scrum board"
      >
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {columns.map((column) => (
            <Column key={column.id} column={column} />
          ))}
          <DragOverlay>
            {activeId ? (
              <Task task={tasks[activeId]} columnId={''} isOverlay />
            ) : null}
          </DragOverlay>
        </DndContext>
        <div className="flex">
          <ModalButton
            modalName="add-column"
            iconButton={
              <button
                type="button"
                title="Add Column"
                aria-label="Add a new column"
                className="rounded-lg bg-gray-100/10 px-4 py-2 text-sm hover:bg-gray-100/30"
              >
                <AddColumnIcon color="#FFF" width={26} height={26} />
              </button>
            }
            placeholder="Type Your Column Title"
            submitLabel="Create Column"
            onSubmitAction={handleAddColumn}
          />
        </div>
      </main>
    </Modal>
  );
}
