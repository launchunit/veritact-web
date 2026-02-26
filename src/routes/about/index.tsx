import { createFileRoute } from '@tanstack/react-router';
import Hero from './-hero';
import Team from './-team';

export const Route = createFileRoute('/about/')({
  component: Page,
});

function Page() {
  return (
    <div className="bg-background min-h-screen space-y-16 px-6 py-16 lg:space-y-24 lg:py-24">
      <Hero />
      <Team />
    </div>
  );
}
