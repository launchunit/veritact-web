import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/solutions/fleet-maintenance')({
  component: Page,
});

function Page() {
  return (
    <div>
      <h1>Fleet Maintenance</h1>
    </div>
  );
}
