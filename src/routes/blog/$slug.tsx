import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/blog/$slug')({
  component: Page,
});

function Page() {
  const { slug } = Route.useParams();
  return (
    <div>
      <h1>Blog: {slug}</h1>
    </div>
  );
}
