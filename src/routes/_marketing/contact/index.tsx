import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_marketing/contact/')({
  component: Page,
});

function Page() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}
