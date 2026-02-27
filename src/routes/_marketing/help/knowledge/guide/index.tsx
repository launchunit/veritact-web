import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_marketing/help/knowledge/guide/')({
  component: Page,
});

function Page() {
  return (
    <div>
      <h1>Guide</h1>
    </div>
  );
}
