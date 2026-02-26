import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/blog/')({
  component: Page,
});

function Page() {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
}
