import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/demos/$customer/')({
  component: Page,
});

function Page() {
  const { customer } = Route.useParams();
  return (
    <div>
      <h1>Demo: {customer}</h1>
    </div>
  );
}
