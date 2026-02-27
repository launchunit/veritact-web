import { ButtonLink } from '@/ui/Button';
import { Link } from '@/ui/Link';
import { Logo } from '@/ui/Logo';

const solutions = [
  { to: '/solutions/home-installation', label: 'Home Installation' },
  { to: '/solutions/fleet-maintenance', label: 'Fleet Maintenance' },
  { to: '/solutions/claims-integrity', label: 'Claims Integrity' },
] as const;

/** Site header with logo, solution links, and primary CTA. */
export default function Header() {
  return (
    <header className="bg-background/80 sticky top-0 z-50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-foreground gap-1 hover:no-underline">
          <Logo className="h-7" />
          <span className="text-2xl leading-none font-semibold">Veritact</span>
        </Link>

        <nav aria-label="Main" className="flex items-center gap-3">
          {solutions.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="text-foreground hover:bg-muted [&.active]:bg-muted rounded-full px-4 py-1.5 text-sm font-medium transition-colors hover:no-underline">
              {s.label}
            </Link>
          ))}
          <div
            role="separator"
            aria-orientation="vertical"
            className="bg-border mr-4 h-4 w-px shrink-0"
          />
          <ButtonLink to="/contact/sales" size="sm">
            Book a Demo
          </ButtonLink>
        </nav>
      </div>

      {/* Bottom border */}
      <div className="via-border absolute right-0 bottom-0 left-0 h-px bg-linear-to-r from-transparent to-transparent" />
    </header>
  );
}
