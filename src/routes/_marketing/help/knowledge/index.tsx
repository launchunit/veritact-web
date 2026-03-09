import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_marketing/help/knowledge/')({
  component: Page,
});

function Page() {
  return (
    <div>
      <h1>Knowledge Base</h1>
    </div>
  );
}
