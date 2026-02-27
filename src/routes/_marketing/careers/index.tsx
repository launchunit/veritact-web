import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_marketing/careers/')({
  component: Page,
});

function Page() {
  return (
    <div>
      <h1>Careers</h1>
    </div>
  );
}
