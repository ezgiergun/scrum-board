'use client';
import { useAppDispatch } from '@/app/lib/store/hooks';
import { fetchAndFillTasks } from '@/app/lib/store/slices/boardSlice';
import ConfirmModalButton from '@/app/ui/components/Buttons/ConfirmModalButton';
import BrandIcon from '@/app/ui/components/Icons/BrandIcon/BrandIcon';
import MagicWandIcon from '@/app/ui/components/Icons/MagicWandIcon';
import Modal from '@/app/ui/components/Modal';
import Search from '@/app/ui/components/Search';

export default function Header() {
  return (
    <header className="flex h-18 items-center gap-2 px-4 py-4 sm:px-8 ">
      <div className="flex items-center gap-1 ps-0 sm:ps-18">
        <BrandIcon width="2.35em" height="2.35em" color={'#05c46b'} />
        <h2
          className=" text-nowrap font-bold text-lg text-sunset-500 sm:text-2xl"
          aria-label="App title"
        >
          Scrum Board
        </h2>
      </div>
      <Modal>
        <div className="flex w-full items-center justify-end gap-2">
          <FillButton />
          <Search />
        </div>
      </Modal>
    </header>
  );
}

function FillButton() {
  const dispatch = useAppDispatch();
  return (
    <ConfirmModalButton
      modalName="fill-tasks-modal"
      confirmText="Do you want to fill currently existing columns with dummy data?"
      description="You will lose your current task data!"
      confirmLabel="Fill"
      cancelLabel="Cancel"
      iconButton={
        <button
          className="rounded-lg bg-sunset-500 px-2 py-1 text-white hover:bg-redorange-500"
          aria-label="Fill columns with dummy tasks"
          type="button"
          title="Fill Board with Dummy Tasks"
        >
          <MagicWandIcon width="1.35em" height="1.35em" color="#FFF" />
        </button>
      }
      onConfirmAction={(close) => {
        dispatch(fetchAndFillTasks());
        close();
      }}
    />
  );
}
