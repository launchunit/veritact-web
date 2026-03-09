import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/demos/$customer/$slug')({
  component: Page,
});

function Page() {
  const { customer, slug } = Route.useParams();
  return (
    <div>
      <h1>
        {customer} / {slug}
      </h1>
    </div>
  );
}
