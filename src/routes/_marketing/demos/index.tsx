import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_marketing/demos/')({
  component: Page,
});

function Page() {
  return (
    <div>
      <h1>Demos</h1>
    </div>
  );
}
