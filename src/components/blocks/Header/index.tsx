import { DrawerPreview as BaseDrawer } from '@base-ui/react/drawer';
import { ScrollArea } from '@base-ui/react/scroll-area';
import { Separator } from '@base-ui/react/separator';
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
          <Separator orientation="vertical" className="bg-border mr-4 ml-3 h-4 w-px shrink-0" />
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

/** Render the mobile navigation drawer with solution links and CTA */
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
      <BaseDrawer.Portal>
        <Drawer.Backdrop />
        <BaseDrawer.Viewport className="group fixed inset-0 z-50">
          <ScrollArea.Root className="box-border h-full overscroll-contain group-data-ending-style:pointer-events-none group-data-starting-style:translate-y-[100dvh]">
            <ScrollArea.Viewport className="box-border h-full touch-auto overscroll-contain pb-4">
              <ScrollArea.Content className="flex min-h-full items-end justify-center pt-8">
                <BaseDrawer.Popup className="pointer-events-none flex w-full max-w-2xl transform-[translateY(var(--drawer-swipe-movement-y))] flex-col gap-3 px-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] transition-transform duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] outline-none data-ending-style:transform-[translateY(calc(100%+1rem))] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-starting-style:transform-[translateY(calc(100%+1rem))] data-swiping:select-none">
                  <nav aria-label="Mobile" className="bg-background pointer-events-auto rounded-xl">
                    <div className="mb-3 grid grid-cols-[1fr_auto_1fr] items-center px-6 pt-6">
                      <div aria-hidden className="size-10" />
                      <div className="bg-muted-foreground/30 h-1 w-12 justify-self-center rounded-full" />
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Close menu"
                        className="justify-self-end rounded-full"
                        render={<BaseDrawer.Close />}>
                        <HamburgerIcon open={open} />
                      </Button>
                    </div>

                    <BaseDrawer.Content>
                      <div className="flex flex-col gap-1 px-6">
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

                      <div className="p-6">
                        <ButtonLink
                          to="/contact/sales"
                          onClick={() => setOpen(false)}
                          className="w-full">
                          Book a Demo
                        </ButtonLink>
                      </div>
                    </BaseDrawer.Content>
                  </nav>
                </BaseDrawer.Popup>
              </ScrollArea.Content>
            </ScrollArea.Viewport>
          </ScrollArea.Root>
        </BaseDrawer.Viewport>
      </BaseDrawer.Portal>
    </Drawer.Root>
  );
}
