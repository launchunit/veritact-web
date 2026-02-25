import { createFileRoute } from '@tanstack/react-router';
import { Button, ButtonLink } from '@/ui/Button';
import { Input } from '@/ui/Input';
import { Link } from '@/ui/Link';

export const Route = createFileRoute('/')({
  ssr: true,
  component: App,
});

function App() {
  return (
    <div className="bg-background min-h-screen">
      <section className="relative overflow-hidden px-6 py-20 text-center">
        <ButtonLink variant="link" to="/">
          Button Link
        </ButtonLink>
        <br />
        <Link to="/">Link</Link>
        <br />
        <br />
        <Button>Button</Button>
        <br />
        <br />
        <Button disabled>Button</Button>
        <br />
        <br />
        <Input placeholder="Input" />
        <br />
      </section>
    </div>
  );
}
