import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  ssr: true,
  component: App,
});

function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
          Full-stack framework powered by TanStack Router
        </p>
      </section>
    </div>
  );
}
