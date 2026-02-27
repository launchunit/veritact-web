import { Link } from '@/ui/Link';
import { Logo } from '@/ui/Logo';

const footerLinks = [
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact Sales', to: '/contact/sales' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Claims Integrity', to: '/solutions/claims-integrity' },
      { label: 'Fleet Maintenance', to: '/solutions/fleet-maintenance' },
      { label: 'Home Installation', to: '/solutions/home-installation' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Terms', to: '/legal/terms' },
      { label: 'Privacy Policy', to: '/legal/privacy-policy' },
    ],
  },
] as const;

/** Site footer with logo, tagline, and navigation links. */
export default function Footer() {
  return (
    <footer className="bg-background relative">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:flex-row md:justify-between">
        <div className="flex flex-col gap-3">
          <Link to="/" className="text-foreground gap-1 self-start hover:no-underline">
            <Logo className="h-7" />
            <span className="text-2xl leading-none font-semibold">Veritact</span>
          </Link>
          <p className="text-muted-foreground text-sm font-medium">
            Operational verification for <span className="text-primary">physical work.</span>
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-16">
          {footerLinks.map((group) => (
            <div key={group.heading} className="flex flex-col gap-3">
              <p className="text-xs font-bold tracking-wide uppercase">{group.heading}</p>
              <ul className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="via-border absolute top-0 right-0 left-0 h-px bg-linear-to-r from-transparent to-transparent" />
    </footer>
  );
}
