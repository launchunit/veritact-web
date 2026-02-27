import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_marketing/solutions/claims-integrity')({
  component: Page,
});

function Page() {
  return (
    <div>
      <h1>Claims Integrity</h1>
    </div>
  );
}
