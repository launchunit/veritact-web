import {
  IconCalendarEvent,
  IconCheck,
  IconCircleCheckFilled,
  IconFileText,
  IconFocusCentered,
  IconTerminal2,
  IconTrendingDown,
  IconX,
} from '@tabler/icons-react';
import { createFileRoute } from '@tanstack/react-router';
import { ButtonLink } from '@/ui/Button';
import { Link } from '@/ui/Link';
import { Logo } from '@/ui/Logo';

export const Route = createFileRoute('/_marketing/')({
  ssr: true,
  component: Page,
});

function Page() {
  return (
    <main>
      <Hero />
      <SolutionSection />
      <ProcessSection />
      <DirectorySection />
    </main>
  );
}

function Hero() {
  return (
    <section className="flex min-h-[calc(100dvh-3.25rem)] items-center">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — headline */}
          <div className="flex flex-col gap-6">
            <div className="border-primary/30 bg-primary/10 text-primary inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase">
              <span className="relative flex size-2">
                <span className="bg-primary absolute inline-flex size-full animate-ping rounded-full opacity-75" />
                <span className="bg-primary relative inline-flex size-2 rounded-full" />
              </span>
              Frontier Physical Vision AI
            </div>

            <h1 className="text-foreground text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Operational verification layer for <span className="text-primary">physical work</span>
            </h1>

            <p className="text-muted-foreground text-lg">
              Closing the gap at the moment of work. The last frontier of unverified data and
              uncontrolled risk in field operations.
            </p>

            <ButtonLink to="/contact/sales" size="lg">
              <IconCalendarEvent className="size-5" />
              Book a Demo
            </ButtonLink>
          </div>

          {/* Right — AR image mockup */}
          <div className="border-border bg-muted group relative rounded-2xl border p-1.5 shadow-xl">
            {/* Image wrapper — overlays are positioned relative to this */}
            <div className="relative overflow-hidden rounded-xl">
              {/* Status badges */}
              <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-2">
                <div className="border-primary bg-background/90 text-primary rounded border px-2 py-1 font-mono text-xs font-semibold backdrop-blur">
                  PRECISION: 99.8%
                </div>
                <div className="flex items-center gap-1 rounded border border-green-600 bg-green-50/90 px-2 py-1 font-mono text-xs font-semibold text-green-700 backdrop-blur">
                  <IconCircleCheckFilled className="size-3.5" />
                  VERIFIED
                </div>
              </div>

              {/* Bounding box overlays */}
              <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
                <div className="border-primary/60 bg-primary/10 absolute top-[30%] left-[20%] flex h-20 w-[120px] items-start rounded border border-dashed">
                  <span className="bg-primary text-primary-foreground px-1 font-mono text-[9px]">
                    Connector_A
                  </span>
                </div>
                <div className="absolute right-[30%] bottom-[25%] flex h-[100px] w-40 items-start rounded border border-green-600/60 bg-green-500/10">
                  <span className="bg-green-600 px-1 font-mono text-[9px] text-white">
                    Safety_Valve_OK
                  </span>
                </div>
              </div>

              {/* AR corner brackets */}
              <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
                <div className="border-primary/80 absolute top-2 left-2 h-5 w-5 border-t-2 border-l-2" />
                <div className="border-primary/80 absolute top-2 right-2 h-5 w-5 border-t-2 border-r-2" />
                <div className="border-primary/80 absolute bottom-2 left-2 h-5 w-5 border-b-2 border-l-2" />
                <div className="border-primary/80 absolute right-2 bottom-2 h-5 w-5 border-r-2 border-b-2" />
              </div>

              <img
                src="/illustrations/hero-technician.png"
                alt="Technician working on industrial equipment with AR overlay"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.05]"
              />

              {/* Scan line animation */}
              <div
                aria-hidden="true"
                className="via-primary/50 animate-scan pointer-events-none absolute inset-x-0 z-10 h-[25%] bg-gradient-to-b from-transparent to-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="bg-muted py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Full-width heading */}
        <h2 className="text-foreground mb-10 text-center text-4xl leading-tight sm:text-5xl">
          Converting decades of experience into a{' '}
          <span className="text-primary">repeatable standard</span>
        </h2>

        {/* Bento grid */}
        <div className="grid gap-4 lg:grid-cols-10">
          {/* Left — text + Field Agent window */}
          <div className="border-border bg-background flex flex-col rounded-2xl border p-6 shadow-sm lg:col-span-6">
            <p className="text-foreground mb-2 text-sm font-bold tracking-widest uppercase">
              Guided AR Workflows
            </p>
            <p className="text-muted-foreground mb-6 text-lg">
              Technicians see exactly what to do, overlaid on the physical world with real-time
              validation against your Golden Standard SOPs.
            </p>

            {/* Veritact Field Agent window */}
            <div className="border-border overflow-hidden rounded-xl border shadow-lg">
              {/* Window chrome */}
              <div className="border-border bg-muted flex items-center justify-between border-b px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <div className="size-2.5 rounded-full bg-red-400" />
                  <div className="size-2.5 rounded-full bg-yellow-400" />
                  <div className="size-2.5 rounded-full bg-green-400" />
                </div>
                <div className="text-muted-foreground font-mono text-xs">
                  Veritact Field Agent v2.4
                </div>
              </div>

              {/* Mockup body */}
              <div className="relative aspect-[4/3]">
                <img
                  src="/illustrations/hero-circuit.png"
                  alt="Hands working on circuit board with colored wires"
                  className="size-full object-cover"
                />

                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex items-start justify-between">
                    <div className="border-border bg-background/90 rounded border p-3 backdrop-blur">
                      <div className="text-muted-foreground text-[10px] tracking-widest uppercase">
                        Current Step
                      </div>
                      <div className="text-foreground font-bold">Connect Water Inlet B</div>
                    </div>
                    <div className="border-primary bg-primary/10 text-primary animate-pulse rounded border px-3 py-1 text-xs font-bold backdrop-blur">
                      Scanning...
                    </div>
                  </div>

                  <div className="border-primary absolute top-1/2 left-1/2 flex size-48 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border-2">
                    <div className="border-primary absolute top-0 left-0 -mt-1 -ml-1 h-3 w-3 border-t-2 border-l-2" />
                    <div className="border-primary absolute top-0 right-0 -mt-1 -mr-1 h-3 w-3 border-t-2 border-r-2" />
                    <div className="border-primary absolute bottom-0 left-0 -mb-1 -ml-1 h-3 w-3 border-b-2 border-l-2" />
                    <div className="border-primary absolute right-0 bottom-0 -mr-1 -mb-1 h-3 w-3 border-r-2 border-b-2" />
                    <IconFocusCentered className="text-primary/50 size-9" />
                  </div>

                  <div className="border-border bg-background/90 rounded-lg border p-4 backdrop-blur">
                    <div className="text-muted-foreground mb-2 flex justify-between text-xs">
                      <span>Step 3 of 8</span>
                      <span>34% Complete</span>
                    </div>
                    <div className="bg-muted h-1.5 w-full rounded-full">
                      <div className="bg-primary h-1.5 rounded-full" style={{ width: '34%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — 3 stacked cards */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            {/* Card 1 — Avg Rework Cost */}
            <div className="border-border bg-background flex flex-col gap-3 rounded-2xl border p-6 shadow-sm">
              <p className="text-foreground text-sm font-bold tracking-widest uppercase">
                Avg Rework Cost
              </p>
              <p className="text-foreground text-4xl font-black">
                $300<span className="text-muted-foreground text-lg font-normal">/roll</span>
              </p>
              <p className="text-muted-foreground text-sm">
                Failed installations result in expensive truck rolls and irreparably damaged
                customer trust.
              </p>
            </div>

            {/* Card 2 — The Cost of Blind Spots */}
            <div className="border-border bg-background flex flex-col gap-4 rounded-2xl border p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-red-100">
                  <IconTrendingDown className="size-4 text-red-500" />
                </div>
                <p className="text-foreground text-xs font-bold tracking-widest uppercase">
                  The Cost of Blind Spots
                </p>
              </div>

              <div>
                <p className="text-muted-foreground text-sm">Average Rework Cost</p>
                <p className="text-foreground text-4xl font-black">
                  $840 <span className="text-primary text-lg font-medium">per incident</span>
                </p>
              </div>

              <div>
                <div className="text-muted-foreground mb-2 flex items-center justify-between text-sm">
                  <span>With Veritact</span>
                  <span className="text-primary font-semibold">-92%</span>
                </div>
                <div className="flex items-end gap-1.5">
                  <div className="bg-muted-foreground/20 h-10 w-full rounded" />
                  <div className="bg-muted-foreground/20 h-14 w-full rounded" />
                  <div className="bg-muted-foreground/20 h-12 w-full rounded" />
                  <div className="bg-primary/60 h-5 w-full rounded" />
                  <div className="bg-primary/50 h-3 w-full rounded" />
                  <div className="bg-primary/40 h-2 w-full rounded" />
                </div>
              </div>
            </div>

            {/* Card 3 — No More Guesswork (dark) */}
            <div className="flex flex-col gap-4 rounded-2xl bg-neutral-900 p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">No More Guesswork</h3>
                <IconTerminal2 className="size-5 text-neutral-400" />
              </div>
              <p className="text-sm text-neutral-400">
                Agentic Workflow Engine replaces subjective review with code.
              </p>

              <div className="rounded-lg bg-neutral-800 p-4 font-mono text-sm leading-relaxed">
                <p className="text-neutral-500"># Audit Log Initiation</p>
                <p>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-white">verify</span>{' '}
                  <span className="text-neutral-500">=</span>{' '}
                  <span className="text-yellow-400">await</span>{' '}
                  <span className="text-white">agent.scan</span>
                  <span className="text-neutral-400">{'({'}</span>
                </p>
                <p className="pl-4">
                  <span className="text-neutral-400">target:</span>{' '}
                  <span className="text-green-400">'valve_seal'</span>
                  <span className="text-neutral-400">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-neutral-400">confidence:</span>{' '}
                  <span className="text-orange-300">0.99</span>
                  <span className="text-neutral-400">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-neutral-400">timestamp:</span>{' '}
                  <span className="text-white">Date.now()</span>
                </p>
                <p>
                  <span className="text-neutral-400">{'})'}</span>
                  <span className="text-neutral-400">;</span>
                </p>
                <p className="mt-2">
                  <span className="text-neutral-500">{'>'}</span>{' '}
                  <span className="text-green-400">Verification_Minted</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Process & Compliance                                                      */
/* -------------------------------------------------------------------------- */

const timelineSteps = [
  {
    title: 'Job Submission',
    description: 'Work order is received and translated into AR tasks.',
    active: false,
  },
  {
    title: 'Live Verification',
    description: 'Technician performs work. AI verifies each step.',
    active: true,
  },
  {
    title: 'Audit Log Minted',
    description: 'Tamper-proof record stored for compliance.',
    active: false,
  },
];

const auditRows = [
  { time: '10:42:05 AM', action: 'Device_Mount_Check', score: '99.92%', ok: true },
  { time: '10:43:12 AM', action: 'Wiring_Configuration', score: '99.85%', ok: true },
  { time: '10:44:01 AM', action: 'Safety_Seal_Check', score: '42.10%', ok: false },
  { time: '10:44:45 AM', action: 'Safety_Seal_Check (Retry)', score: '99.98%', ok: true },
];

function ProcessSection() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Left — timeline */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <h2 className="text-foreground mb-8 text-2xl font-bold">
              From Request to Immutable Record
            </h2>

            <div className="border-border relative ml-4 space-y-10 border-l-2 pl-8">
              {timelineSteps.map((step) => (
                <div key={step.title} className="relative">
                  <div className="bg-background absolute top-0 -left-[41px] p-1">
                    <div
                      className={
                        step.active
                          ? 'bg-primary border-primary size-6 rounded-full border-2'
                          : 'border-border bg-muted size-6 rounded-full border-2'
                      }
                    />
                  </div>
                  <h3
                    className={`text-lg font-bold ${step.active ? 'text-primary' : 'text-foreground'}`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — compliance log mockup */}
          <div className="mt-12 lg:col-span-7 lg:mt-0">
            <div className="border-border bg-background overflow-hidden rounded-lg border shadow-lg">
              {/* Header */}
              <div className="border-border flex items-center justify-between border-b px-4 py-3">
                <span className="text-foreground flex items-center gap-2 text-sm font-bold">
                  <IconFileText className="text-muted-foreground size-4" />
                  Compliance Log #8821-X
                </span>
                <div className="flex gap-2">
                  <span className="rounded border border-green-600 px-2 py-0.5 text-[10px] font-medium text-green-700">
                    PASSED
                  </span>
                  <span className="border-border text-muted-foreground rounded border px-2 py-0.5 text-[10px] font-medium">
                    IMMUTABLE
                  </span>
                </div>
              </div>

              {/* Table */}
              <table className="w-full text-left text-sm">
                <thead className="border-border text-muted-foreground border-b text-xs font-medium uppercase">
                  <tr>
                    <th className="px-4 py-3">Timestamp</th>
                    <th className="px-4 py-3">Action</th>
                    <th className="px-4 py-3">Score</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-border divide-y font-mono text-xs">
                  {auditRows.map((row) => (
                    <tr
                      key={row.action}
                      className={`hover:bg-muted/50 transition-colors ${!row.ok ? 'bg-red-50' : ''}`}>
                      <td className="text-muted-foreground px-4 py-3">{row.time}</td>
                      <td className="text-foreground px-4 py-3">{row.action}</td>
                      <td
                        className={`px-4 py-3 ${row.ok ? 'text-muted-foreground' : 'text-green-700'}`}>
                        {row.score}
                      </td>
                      <td className="px-4 py-3">
                        {row.ok ? (
                          <span className="flex items-center gap-1 text-green-700">
                            <IconCheck className="size-3.5" /> OK
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-red-600">
                            <IconX className="size-3.5" /> RETRY
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Directory (original links section)                                        */
/* -------------------------------------------------------------------------- */

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

function DirectorySection() {
  return (
    <div className="bg-background">
      <section className="mx-auto max-w-6xl px-4 py-16">
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
