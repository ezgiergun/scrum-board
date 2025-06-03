'use client';

import { useAppDispatch, useAppSelector } from '@/app/lib/store/hooks';
import { setHighlightedTaskId } from '@/app/lib/store/slices/boardSlice';
import type { Column, Task } from '@/app/types';
import type { SearchProps } from '@/app/ui/components/Search/types';
import useOutsideClick from '@/app/ui/hooks/useOutsideClick';
import clsx from 'clsx';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export default function Search({
  className,
  inputClassName,
  dropdownClassName,
}: Readonly<SearchProps>) {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClose = useCallback(() => {
    setOpen(false);
    setQuery('');
    setResults([]);
  }, []);
  const containerRef = useOutsideClick<HTMLDivElement>(handleClose);

  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState<Array<{ task: Task; column: Column }>>(
    []
  );

  const tasks = useAppSelector((state) => state.board.tasks);
  const columns = useAppSelector((state) => state.board.columns);

  const taskList = useMemo(() => {
    return columns
      .flatMap((column) =>
        column.taskIds.map((id) => ({
          task: tasks[id],
          column,
        }))
      )
      .filter(({ task }) => task);
  }, [tasks, columns]);

  function handleSelect(taskId: string) {
    dispatch(setHighlightedTaskId(taskId));
    setTimeout(() => dispatch(setHighlightedTaskId(null)), 5000);
    handleClose();
  }

  useEffect(() => {
    const trimmed = query.trim().toLowerCase();

    if (!trimmed) {
      return handleClose();
    }

    const filtered = taskList.filter(({ task }) =>
      task.title.toLowerCase().includes(trimmed)
    );

    setResults(filtered);
    setOpen(true);
  }, [query, taskList, handleClose]);

  return (
    <div
      ref={containerRef}
      className={clsx(
        'relative flex h-8 rounded-sm border-1 border-gray-600',
        className
      )}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Search tasks..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search tasks"
        className={clsx(
          'flex max-w-16 rounded border border-gray-300 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-freespeechblue-500 sm:max-w-full sm:text-sm',
          inputClassName
        )}
      />

      {open && (
        <ul
          className={clsx(
            'absolute z-50 mt-8 max-h-60 w-full overflow-y-auto rounded border border-gray-300 bg-white dark:bg-elusive-700  shadow-lg',
            dropdownClassName
          )}
        >
          {results.length > 0 ? (
            results.map(({ task, column }) => (
              <li key={task.id}>
                <button
                  type="button"
                  onClick={() => handleSelect(task.id)}
                  className="w-full px-3 py-2 text-left text-sm hover:bg-blue-100"
                >
                  <strong>{task.title}</strong>
                  <span className="ml-2 text-gray-500 text-xs">
                    ({column.title})
                  </span>
                </button>
              </li>
            ))
          ) : (
            <li className="px-3 py-2 text-gray-500 text-sm">
              No results found
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
