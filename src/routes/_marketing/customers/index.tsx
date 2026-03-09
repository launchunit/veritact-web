import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_marketing/customers/')({
  component: Page,
});

function Page() {
  return (
    <div>
      <h1>Customers</h1>
    </div>
  );
}
