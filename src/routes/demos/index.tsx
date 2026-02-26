import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/demos/')({
  component: Page,
});

function Page() {
  return (
    <div>
      <h1>Demos</h1>
    </div>
  );
}
