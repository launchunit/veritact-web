import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/help/')({
  component: Page,
});

function Page() {
  return (
    <div>
      <h1>Help</h1>
    </div>
  );
}
