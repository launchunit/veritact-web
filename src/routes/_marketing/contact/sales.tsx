import { IconClock, IconPhone } from '@tabler/icons-react';
import { createFileRoute } from '@tanstack/react-router';
import { GridBand, GridSection } from '@/blocks/GridSection';
import { Button } from '@/ui/Button';
import { Input } from '@/ui/Input';
import { Link } from '@/ui/Link';
import { Switch } from '@/ui/Switch';

export const Route = createFileRoute('/_marketing/contact/sales')({
  component: Page,
});

function Page() {
  return (
    <div className="bg-background min-h-screen px-6 py-16 lg:py-24">
      <GridSection>
        {/* Top decoration band */}
        <GridBand columns={9} rows={2} className="border-border border-b border-dashed" />

        {/* Content area */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr]">
          {/* Left column — value props & social proof */}
          <div className="flex flex-col gap-10 p-8 lg:p-12">
            <div>
              <h1 className="text-3xl tracking-tight sm:text-4xl">Talk to our Sales team.</h1>

              <div className="mt-8 flex flex-col gap-6">
                <div className="flex gap-3">
                  <IconPhone className="text-foreground mt-0.5 size-5 shrink-0" />
                  <div>
                    <p className="text-sm">Get a custom demo.</p>
                    <p className="text-muted-foreground mt-1 text-sm">
                      Discover the value of Veritact for your enterprise and explore our custom
                      plans and pricing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <IconClock className="text-foreground mt-0.5 size-5 shrink-0" />
                  <div>
                    <p className="text-sm">Set up your Enterprise trial.</p>
                    <p className="text-muted-foreground mt-1 text-sm">
                      See for yourself how Veritact Enterprise speeds up your workflow &amp; impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stat cards */}
            <div className="divide-border border-border grid grid-cols-2 divide-x divide-dashed border-y border-dashed">
              <StatCard stat="6x" description="faster to build and deploy." logo="eBay" />
              <StatCard stat="98%" description="faster time to market." logo="Tripadvisor" />
            </div>

            {/* Testimonial */}
            <blockquote>
              <p className="text-foreground text-sm leading-relaxed">
                &ldquo;Veritact makes our developers happier and lets us go to market
                quicker.&rdquo;
              </p>
              <cite className="mt-3 block text-sm tracking-wider uppercase not-italic">Sonos</cite>
            </blockquote>
          </div>

          {/* Right column — contact form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="border-border flex flex-col gap-5 border-t border-dashed p-8 lg:border-t-0 lg:border-l lg:p-12"
            autoComplete="off">
            <Field label="Company email">
              <Input type="email" placeholder="Email address" required />
            </Field>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Your name">
                <Input placeholder="Jody Smith" required />
              </Field>
              <Field label="Phone number" optional>
                <Input type="tel" placeholder="(201) 555-0123" />
              </Field>
            </div>

            <Field label="Company website">
              <Input type="url" placeholder="http://address.com" />
            </Field>

            <Field label="How can we help?">
              <textarea
                rows={5}
                placeholder="Your company needs"
                className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-ring/20 w-full rounded-md border px-3 py-2 text-sm transition-colors duration-200 focus:ring-[3px] focus:outline-none"
              />
            </Field>

            {/* Privacy consent */}
            <div className="border-border flex items-start gap-4 rounded-lg border p-4">
              <div className="flex-1">
                <p className="text-sm">Privacy Policy</p>
                <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                  Yes, I agree to receive marketing communications from Veritact as described in
                  your{' '}
                  <Link to="/legal/privacy-policy" className="text-foreground underline">
                    Privacy Policy
                  </Link>
                  . I can withdraw my consent at any time by clicking the unsubscribe link in the
                  emails.
                </p>
              </div>
              <Switch />
            </div>

            <Button type="submit" size="lg" className="mt-2 w-full">
              Talk to Veritact
            </Button>
          </form>
        </div>

        {/* Bottom decoration band */}
        <GridBand columns={9} rows={2} className="border-border border-t border-dashed" />
      </GridSection>
    </div>
  );
}

/* ─── Local helpers ────────────────────────────────── */

/** Render a labeled form field with an optional "(Optional)" suffix */
function Field({
  label,
  optional,
  children,
}: {
  label: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: children contain the input control
    <label className="flex flex-col gap-1.5">
      <span className="text-sm">
        {label}
        {optional && <span className="text-muted-foreground ml-1">(Optional)</span>}
      </span>
      {children}
    </label>
  );
}

/** Display a social-proof stat with a description and company logo */
function StatCard({
  stat,
  description,
  logo,
}: {
  stat: string;
  description: string;
  logo: string;
}) {
  return (
    <div className="flex flex-col justify-between gap-4 p-5">
      <p className="text-foreground text-sm">
        <span>{stat}</span> {description}
      </p>
      <p className="text-muted-foreground text-sm tracking-wide">{logo}</p>
    </div>
  );
}
