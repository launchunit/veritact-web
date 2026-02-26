import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/demos/$slug/$appSlug')({
  component: Page,
});

function Page() {
  const { slug, appSlug } = Route.useParams();
  return (
    <div>
      <h1>
        {slug} / {appSlug}
      </h1>
    </div>
  );
}
