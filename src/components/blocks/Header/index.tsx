import { Link } from '@tanstack/react-router';
import { ButtonLink } from '@/ui/Button';
import { Logo } from '@/ui/Logo';

const solutions = [
  { to: '/solutions/claims-integrity', label: 'Claims Integrity' },
  { to: '/solutions/fleet-maintenance', label: 'Fleet Maintenance' },
  { to: '/solutions/home-installation', label: 'Home Installation' },
] as const;

/** Site header with logo, solution links, and primary CTA. */
export default function Header() {
  return (
    <header className="bg-background/60 sticky top-0 z-50 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-1">
            <Logo className="h-7" />
            <span className="text-2xl leading-none font-semibold tracking-tight">Veritact</span>
          </Link>

          <nav className="flex items-center gap-3">
            {solutions.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-full px-4 py-1.5 text-sm font-medium transition-colors [&.active]:bg-muted [&.active]:text-foreground">
                {s.label}
              </Link>
            ))}
            <div className="bg-border mr-2 h-4 w-px shrink-0" />
            <ButtonLink to="/demos" size="sm">
              Book a Demo
            </ButtonLink>
          </nav>
        </div>
      </div>
      <div className="via-border absolute right-0 bottom-0 left-0 h-px bg-linear-to-r from-transparent to-transparent" />
    </header>
  );
}
