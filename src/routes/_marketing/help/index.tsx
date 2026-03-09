import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_marketing/help/')({
  component: Page,
});

function Page() {
  return (
    <div>
      <h1>Help</h1>
    </div>
  );
}
