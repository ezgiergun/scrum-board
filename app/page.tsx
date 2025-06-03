import Board from '@/app/ui/components/Board';

export default function Home() {
  return (
    <main
      className="px-2 sm:px-8"
      id="main-content"
      aria-label="Scrum Board main content"
    >
      <Board />
    </main>
  );
}
