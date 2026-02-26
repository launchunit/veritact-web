import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/help/knowledge/$topic')({
  component: Page,
});

function Page() {
  const { topic } = Route.useParams();
  return (
    <div>
      <h1>Knowledge: {topic}</h1>
    </div>
  );
}
