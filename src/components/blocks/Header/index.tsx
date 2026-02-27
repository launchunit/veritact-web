import { useState } from 'react';
import { cn } from 'tailwind-variants';
import { Button, ButtonLink } from '@/ui/Button';
import { Drawer } from '@/ui/Drawer';
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

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-2 md:flex">
          {solutions.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="text-foreground hover:bg-muted [&.active]:bg-muted rounded-full px-3 py-1.5 text-sm font-medium transition-colors hover:no-underline">
              {s.label}
            </Link>
          ))}
          <div className="bg-border mr-4 ml-3 h-4 w-px shrink-0" />
          <ButtonLink to="/contact/sales" size="sm">
            Book a Demo
          </ButtonLink>
        </nav>

        {/* Mobile nav */}
        <MobileNav />
      </div>

      {/* Bottom border */}
      <div className="via-border absolute right-0 bottom-0 left-0 h-px bg-linear-to-r from-transparent to-transparent" />
    </header>
  );
}

/** Animated hamburger icon that morphs into an X via SVG rect transforms. */
function HamburgerIcon({ open }: Readonly<{ open: boolean }>) {
  return (
    <svg
      aria-hidden="true"
      role="presentation"
      className="pointer-events-none size-4 fill-current"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        className={cn(
          'origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]',
          open
            ? 'translate-x-0 translate-y-0 rotate-[315deg]'
            : 'translate-x-[7px] -translate-y-[5px]'
        )}
        y="7"
        width="9"
        height="2"
        rx="1"
      />
      <rect
        className={cn(
          'origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]',
          open && 'rotate-45'
        )}
        y="7"
        width="16"
        height="2"
        rx="1"
      />
      <rect
        className={cn(
          'origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]',
          open ? 'translate-y-0 -rotate-[225deg]' : 'translate-y-[5px]'
        )}
        y="7"
        width="9"
        height="2"
        rx="1"
      />
    </svg>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <Button
        variant="ghost"
        size="icon"
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="rounded-full md:hidden"
        render={<Drawer.Trigger />}>
        <HamburgerIcon open={open} />
      </Button>
      <Drawer.Portal>
        <Drawer.Backdrop />
        <Drawer.Viewport>
          <Drawer.Popup className="bg-background flex w-full max-w-[42rem] flex-col rounded-t-2xl px-6 pt-4 pb-6">
            <div className="mb-4 grid grid-cols-[1fr_auto_1fr] items-center">
              <div aria-hidden className="size-10" />
              <div className="bg-muted-foreground/30 h-1 w-12 justify-self-center rounded-full" />
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close menu"
                className="justify-self-end rounded-full"
                render={<Drawer.CloseBase />}>
                <HamburgerIcon open={open} />
              </Button>
            </div>

            <Drawer.Content>
              <nav aria-label="Mobile" className="flex flex-col gap-1">
                {solutions.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="text-foreground hover:bg-muted [&.active]:bg-muted rounded-xl px-4 py-3 text-base font-medium hover:no-underline">
                    {s.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6">
                <ButtonLink to="/contact/sales" className="w-full">
                  Book a Demo
                </ButtonLink>
              </div>
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
