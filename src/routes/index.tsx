import { createFileRoute } from '@tanstack/react-router';
import { Link } from '@/ui/Link';
import { Logo } from '@/ui/Logo';

export const Route = createFileRoute('/')({
  ssr: true,
  component: Page,
});

const sections = [
  {
    title: 'Solutions',
    links: [
      { to: '/solutions/claims-integrity', label: 'Claims Integrity' },
      { to: '/solutions/fleet-maintenance', label: 'Fleet Maintenance' },
      { to: '/solutions/home-installation', label: 'Home Installation' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About' },
      { to: '/careers', label: 'Careers' },
      { to: '/partners', label: 'Partners' },
      { to: '/customers', label: 'Customers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { to: '/blog', label: 'Blog' },
      { to: '/demos', label: 'Demos' },
      { to: '/help', label: 'Help Center' },
      { to: '/help/knowledge', label: 'Knowledge Base' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { to: '/contact', label: 'Contact' },
      { to: '/contact/sales', label: 'Contact Sales' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { to: '/legal/terms', label: 'Terms' },
      { to: '/legal/privacy-policy', label: 'Privacy Policy' },
    ],
  },
] as const;

function Page() {
  return (
    <div className="bg-background min-h-screen">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-12 text-center">
          <Logo className="text-primary mx-auto h-20" />
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-foreground mb-3 text-sm font-semibold tracking-wider uppercase">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
