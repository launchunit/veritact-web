import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_marketing/help/knowledge/guide/$slug')({
  component: Page,
});

function Page() {
  const { slug } = Route.useParams();
  return (
    <div>
      <h1>Guide: {slug}</h1>
    </div>
  );
}
