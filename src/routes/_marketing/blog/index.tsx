import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_marketing/blog/')({
  component: Page,
});

function Page() {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
}
