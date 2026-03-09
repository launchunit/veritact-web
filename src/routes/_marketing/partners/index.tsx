import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_marketing/partners/')({
  component: Page,
});

function Page() {
  return (
    <div>
      <h1>Partners</h1>
    </div>
  );
}
