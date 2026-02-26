import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/careers/$slug')({
  component: Page,
});

function Page() {
  const { slug } = Route.useParams();
  return (
    <div>
      <h1>Career: {slug}</h1>
    </div>
  );
}
