import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/solutions/home-installation')({
  component: Page,
});

function Page() {
  return (
    <div>
      <h1>Home Installation</h1>
    </div>
  );
}
