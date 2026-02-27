import { DrawerPreview as BaseDrawer } from '@base-ui/react/drawer';
import { ScrollArea } from '@base-ui/react/scroll-area';
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

/**
 * Site header with logo, solution links, and primary CTA
 */
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

/**
 * Animated hamburger icon that morphs into an X via SVG rect transforms
 */
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
          open ? 'translate-x-0 translate-y-0 rotate-315' : 'translate-x-[7px] -translate-y-[5px]'
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
          open ? 'translate-y-0 -rotate-225' : 'translate-y-[5px]'
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
        <BaseDrawer.Viewport className="group fixed inset-0 z-50">
          <ScrollArea.Root
            style={{ position: undefined }}
            className="box-border h-full overscroll-contain transition-[transform,translate] duration-[600ms] ease-[cubic-bezier(0.45,1.005,0,1.005)] group-data-[ending-style]:pointer-events-none group-data-[starting-style]:translate-y-[100dvh]">
            <ScrollArea.Viewport className="box-border h-full touch-auto overscroll-contain">
              <ScrollArea.Content className="flex min-h-full items-end justify-center pt-8">
                <BaseDrawer.Popup className="group box-border w-full max-w-2xl [transform:translateY(var(--drawer-swipe-movement-y))] transition-transform duration-[600ms] ease-[cubic-bezier(0.45,1.005,0,1.005)] outline-none data-[ending-style]:[transform:translateY(max(100dvh,100%))] data-[ending-style]:duration-[350ms] data-[ending-style]:ease-[cubic-bezier(0.375,0.015,0.545,0.455)] data-[swiping]:select-none">
                  <nav
                    aria-label="Mobile"
                    className="bg-background text-foreground outline-border relative flex flex-col rounded-t-2xl px-6 pt-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))] shadow-[0_10px_64px_-10px_rgb(36_40_52/20%)] outline outline-1 transition-shadow duration-[350ms] ease-[cubic-bezier(0.375,0.015,0.545,0.455)] group-data-[ending-style]:shadow-[0_10px_64px_-10px_rgb(36_40_52/0%)]">
                    <div className="mb-3 grid grid-cols-[1fr_auto_1fr] items-center">
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

                    <Drawer.Content className="w-full">
                      <div className="flex flex-col gap-1">
                        {solutions.map((s) => (
                          <Link
                            key={s.to}
                            to={s.to}
                            onClick={() => setOpen(false)}
                            className="text-foreground hover:bg-muted [&.active]:bg-muted rounded-xl px-4 py-3 text-base font-medium hover:no-underline">
                            {s.label}
                          </Link>
                        ))}
                      </div>

                      <div className="py-8">
                        <ButtonLink to="/contact/sales" onClick={() => setOpen(false)} className="w-full">
                          Book a Demo
                        </ButtonLink>
                      </div>
                    </Drawer.Content>
                  </nav>
                </BaseDrawer.Popup>
              </ScrollArea.Content>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar className="pointer-events-none absolute m-[0.4rem] flex w-[0.25rem] justify-center rounded-[1rem] opacity-0 transition-opacity duration-[250ms] hover:pointer-events-auto hover:opacity-100 hover:delay-0 hover:duration-[75ms] data-[ending-style]:opacity-0 data-[ending-style]:duration-[250ms] data-[scrolling]:pointer-events-auto data-[scrolling]:opacity-100 data-[scrolling]:delay-0 data-[scrolling]:duration-[75ms] md:w-[0.4375rem]">
              <ScrollArea.Thumb className="bg-muted-foreground/50 w-full rounded-[inherit] before:absolute before:top-1/2 before:left-1/2 before:h-[calc(100%+1rem)] before:w-[calc(100%+1rem)] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </BaseDrawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
