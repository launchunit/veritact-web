import {
  IconCalendarEvent,
  IconCheck,
  IconCircleCheckFilled,
  IconFileText,
  IconTrendingDown,
  IconVolume,
  IconX,
} from '@tabler/icons-react';
import { createFileRoute } from '@tanstack/react-router';
import { ButtonLink } from '@/ui/Button';

export const Route = createFileRoute('/_marketing/')({
  ssr: true,
  component() {
    return (
      <main>
        <Hero />
        <StandardSection />
        <VerificationPipelineSection />
        <ComplianceSection />
      </main>
    );
  },
});

function Hero() {
  return (
    <section className="border-border min-h-[calc(100dvh-3.25rem)] border-b py-14 md:pt-18 lg:items-center">
      <div className="mx-auto max-w-6xl px-4">
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

            <h1 className="text-foreground text-4xl leading-tight text-pretty sm:text-5xl lg:text-6xl">
              Operational verification layer for <span className="text-primary">physical work</span>
            </h1>

            <p className="text-muted-foreground text-lg">
              Closing the gap at the moment of work. The last frontier of unverified data and
              uncontrolled risk in field operations.
            </p>

            <ButtonLink to="/contact/sales" size="lg">
              <IconCalendarEvent className="size-5" aria-hidden="true" />
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
                  <IconCircleCheckFilled className="size-3.5" aria-hidden="true" />
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
                src="/landing-page/hero-field-install.png"
                alt="Field technician installing smart washing machine in modern laundry room with AR overlays"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.05]"
              />

              {/* Scan line animation */}
              <style>{`
                @keyframes scan {
                  0% { top: -20%; opacity: 0; }
                  50% { opacity: 1; }
                  100% { top: 120%; opacity: 0; }
                }
              `}</style>
              <div
                aria-hidden="true"
                className="via-primary/50 pointer-events-none absolute inset-x-0 z-10 h-[25%] animate-[scan_3s_ease-in-out_infinite] bg-linear-to-b from-transparent to-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StandardSection() {
  return (
    <section className="bg-muted border-border border-b py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Full-width heading */}
        <h2 className="text-foreground mb-10 text-center text-3xl leading-tight text-pretty sm:text-4xl">
          Converting decades of experience into a{' '}
          <span className="text-primary">repeatable standard</span>
        </h2>

        {/* Bento grid */}
        <div className="grid gap-6 lg:grid-cols-10">
          {/* Left — two stacked cards */}
          <div className="flex flex-col gap-4 lg:col-span-6">
            {/* Card 1 — Guided AR Workflows */}
            <div className="border-border/60 bg-background flex flex-col rounded-2xl border p-6 shadow-sm">
              <p className="text-foreground mb-5 text-sm font-bold tracking-widest uppercase">
                Guided AR Workflows
              </p>
              <div className="mb-6 flex flex-col gap-6">
                <div className="flex gap-3">
                  <div className="border-primary/30 bg-primary/10 text-primary mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold">
                    1
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-bold">
                      Step-by-Step Overlay & AI Voice Assistant
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Technicians see exactly what to do, overlaid on the physical world with
                      real-time validation against your Golden Standard SOPs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="border-primary/30 bg-primary/10 text-primary mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold">
                    2
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-bold">Real-time Validation</p>
                    <p className="text-muted-foreground text-sm">
                      The system prevents moving to the test cycle until the leveling and
                      connections are verified.
                    </p>
                  </div>
                </div>
              </div>

              {/* Veritact Field Agent window */}
              <div className="border-border bg-muted rounded-2xl border p-1.5 shadow-xl">
                <div className="overflow-hidden rounded-xl">
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
                  <div className="relative aspect-4/3">
                    <img
                      src="/landing-page/hero-hose-connection.png"
                      alt="Close-up of water hose connection during washer installation"
                      loading="lazy"
                      className="size-full object-cover"
                    />

                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                      <div className="flex items-start justify-between">
                        <div className="border-border bg-background/90 flex items-center gap-3 rounded-lg border p-3 shadow-sm backdrop-blur">
                          <div className="bg-primary h-8 w-1 shrink-0 rounded-full" />
                          <div>
                            <div className="text-muted-foreground text-[10px] tracking-widest uppercase">
                              Current Step
                            </div>
                            <div className="text-foreground font-bold">Connect Water Inlet B</div>
                          </div>
                        </div>
                        <div className="border-primary bg-background/90 text-primary rounded border px-2 py-1 font-mono text-xs font-semibold backdrop-blur">
                          Scanning…
                        </div>
                      </div>

                      {/* <div className="border-primary absolute top-1/2 left-1/2 flex size-48 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border-2">
                        <div className="border-primary absolute top-0 left-0 -mt-1 -ml-1 h-3 w-3 border-t-2 border-l-2" />
                        <div className="border-primary absolute top-0 right-0 -mt-1 -mr-1 h-3 w-3 border-t-2 border-r-2" />
                        <div className="border-primary absolute bottom-0 left-0 -mb-1 -ml-1 h-3 w-3 border-b-2 border-l-2" />
                        <div className="border-primary absolute right-0 bottom-0 -mr-1 -mb-1 h-3 w-3 border-r-2 border-b-2" />
                        <IconFocusCentered className="text-primary/50 size-9" aria-hidden="true" />
                      </div> */}

                      <div className="bg-background/90 flex items-center gap-3 rounded-lg p-3 shadow-lg backdrop-blur">
                        <div className="flex-1">
                          <div className="text-muted-foreground mb-1.5 flex justify-between text-xs font-semibold">
                            <span>Step 3 of 8</span>
                            <span>34% Complete</span>
                          </div>
                          <div className="bg-muted h-1 w-full rounded-full">
                            <div className="bg-primary h-1 rounded-full" style={{ width: '34%' }} />
                          </div>
                        </div>
                        <div className="bg-border h-8 w-px shrink-0" />
                        <div className="flex shrink-0 items-center gap-1">
                          <IconVolume className="text-primary size-4" aria-hidden="true" />
                          <span className="text-primary text-[10px] font-bold tracking-wide uppercase">
                            AI Voice
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — 3 stacked cards */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            {/* Card 1 — Avg Rework Cost */}
            <div className="border-border/60 bg-background flex flex-col gap-3 rounded-2xl border p-6 shadow-sm">
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
            <div className="border-border/60 bg-background flex flex-1 flex-col gap-4 rounded-2xl border p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-red-100">
                  <IconTrendingDown className="size-4 text-red-500" aria-hidden="true" />
                </div>
                <p className="text-foreground text-sm font-bold tracking-widest uppercase">
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

            {/* Card 3 — Eliminate Blind Spots */}
            <div className="border-border/60 bg-background flex flex-col gap-4 rounded-2xl border p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-foreground mb-1 text-sm font-bold tracking-widest uppercase">
                    Eliminate Blind Spots
                  </p>
                  <p className="text-muted-foreground text-sm">SOP Adherence Coverage</p>
                </div>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  100% VERIFIED
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Standard Industry */}
                <div>
                  <p className="text-muted-foreground mb-2 font-mono text-xs">Standard Industry</p>
                  <div className="border-border grid grid-cols-4 gap-1.5 rounded-lg border p-2">
                    <div className="h-5 rounded bg-red-200" />
                    <div className="bg-muted-foreground/20 h-5 rounded" />
                    <div className="bg-muted-foreground/20 h-5 rounded" />
                    <div className="bg-muted-foreground/20 h-5 rounded" />
                    <div className="bg-muted-foreground/20 h-5 rounded" />
                    <div className="h-5 rounded bg-red-200" />
                    <div className="bg-muted-foreground/20 h-5 rounded" />
                    <div className="h-5 rounded bg-red-200" />
                    <div className="bg-muted-foreground/30 h-5 rounded" />
                    <div className="bg-muted-foreground/30 h-5 rounded" />
                    <div className="bg-muted-foreground/30 h-5 rounded" />
                    <div className="bg-muted-foreground/30 h-5 rounded" />
                    <div className="h-5 rounded bg-red-200" />
                    <div className="bg-muted-foreground/20 h-5 rounded" />
                    <div className="h-5 rounded bg-red-200" />
                    <div className="bg-muted-foreground/20 h-5 rounded" />
                  </div>
                  <p className="mt-2 text-xs font-semibold text-red-600">~35% Unverified Data</p>
                </div>

                {/* With Veritact */}
                <div>
                  <p className="text-primary mb-2 font-mono text-xs">With Veritact</p>
                  <div className="border-border grid grid-cols-4 gap-1.5 rounded-lg border p-2">
                    <div className="bg-primary/70 h-5 rounded" />
                    <div className="bg-primary/70 h-5 rounded" />
                    <div className="bg-primary/70 h-5 rounded" />
                    <div className="bg-primary/70 h-5 rounded" />
                    <div className="bg-primary/70 h-5 rounded" />
                    <div className="bg-primary/70 h-5 rounded" />
                    <div className="bg-primary/70 h-5 rounded" />
                    <div className="bg-primary/70 h-5 rounded" />
                    <div className="bg-primary/70 h-5 rounded" />
                    <div className="bg-primary/70 h-5 rounded" />
                    <div className="bg-primary/70 h-5 rounded" />
                    <div className="bg-primary/70 h-5 rounded" />
                    <div className="bg-primary/70 h-5 rounded" />
                    <div className="bg-primary/70 h-5 rounded" />
                    <div className="bg-primary/70 h-5 rounded" />
                    <div className="bg-primary/70 h-5 rounded" />
                  </div>
                  <p className="text-primary mt-2 text-xs font-semibold">Full Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VerificationPipelineSection() {
  return (
    <section className="bg-background border-border border-b py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Hero-style row: video left, heading right */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — Video */}
          <div className="border-border/60 bg-background order-2 flex flex-col rounded-2xl border shadow-sm lg:order-0">
            {/* Video player mockup */}
            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src="/landing-page/hero-washer-install.png"
                alt="Technician POV of washing machine installation with AR verification overlay"
                loading="lazy"
                className="aspect-video w-full object-cover"
              />
              {/* Video controls overlay */}
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-linear-to-t from-black/70 to-transparent px-4 pt-10 pb-4">
                <div className="bg-primary flex size-8 items-center justify-center rounded-full">
                  <div className="ml-0.5 size-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-muted-foreground/40 h-1 w-full rounded-full">
                    <div className="bg-primary relative h-1 rounded-full" style={{ width: '42%' }}>
                      <div className="bg-background absolute -top-0.5 right-0 size-2 rounded-full shadow" />
                    </div>
                  </div>
                </div>
                <span className="font-mono text-[10px] font-bold text-white/80">01:24 / 03:12</span>
              </div>
            </div>

            {/* Timestamped AI analysis entries */}
            <div className="divide-border flex flex-1 flex-col gap-0 divide-y p-0">
              <div className="bg-primary/5 border-primary/20 border-l-2 px-5 py-4">
                <div className="text-primary mb-1 flex items-center gap-2 font-mono text-xs font-semibold">
                  <IconCircleCheckFilled className="size-3.5" aria-hidden="true" />
                  00:42.1 — 00:44.8
                </div>
                <p className="text-foreground text-sm">
                  Inlet hose connected to cold water valve. Torque within spec — thread alignment
                  confirmed at 99.9%.
                </p>
              </div>

              <div className="px-5 py-4">
                <div className="text-muted-foreground mb-1 font-mono text-xs">
                  00:58.3 — 01:02.1
                </div>
                <p className="text-muted-foreground text-sm">
                  Hot water inlet positioned. Rubber washer seated correctly inside fitting.
                  Hand-tightened, awaiting quarter-turn verification.
                </p>
              </div>

              <div className="px-5 py-4">
                <div className="text-muted-foreground mb-1 font-mono text-xs">
                  01:15.0 — 01:24.6
                </div>
                <p className="text-muted-foreground text-sm">
                  Drain hose height measured at 34". Within manufacturer spec (30"–36"). No kink
                  detected. Connection secure.
                </p>
              </div>
            </div>
          </div>

          {/* Right — heading */}
          <div className="flex flex-col gap-6">
            <div className="border-primary/30 bg-primary/10 text-primary inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase">
              The Verification Pipeline
            </div>

            <h2 className="text-foreground text-3xl leading-tight text-pretty sm:text-4xl">
              Our Multimodal AI understands everything.{' '}
              <span className="text-primary">Find anything.</span>
            </h2>

            <p className="text-muted-foreground text-lg">
              Pinpoint precise moments to conduct investigations and manage evidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComplianceSection() {
  return (
    <section className="bg-muted border-border border-b py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="border-primary/30 bg-primary/10 text-primary mx-auto mb-6 inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase">
            Compliance & Warranty
          </div>
          <h2 className="text-foreground text-3xl leading-tight text-pretty sm:text-4xl">
            Instant documentation. <span className="text-primary">Audit-proof by default.</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Every action is automatically logged into tamper-proof compliance records for warranty
            protection.
          </p>
        </div>

        <div className="border-border/60 bg-background mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl border shadow-sm">
          {/* Header */}
          <div className="border-border flex items-center justify-between border-b px-6 py-4">
            <span className="text-foreground flex items-center gap-2 text-sm font-bold">
              <IconFileText className="text-muted-foreground size-4" aria-hidden="true" />
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
          <table className="w-full font-mono text-xs">
            <thead>
              <tr className="border-border border-b">
                <th className="text-muted-foreground px-6 py-3 text-left text-[10px] font-semibold tracking-widest uppercase">
                  Timestamp
                </th>
                <th className="text-muted-foreground px-6 py-3 text-left text-[10px] font-semibold tracking-widest uppercase">
                  Action
                </th>
                <th className="text-muted-foreground px-6 py-3 text-right text-[10px] font-semibold tracking-widest uppercase">
                  Score
                </th>
                <th className="text-muted-foreground px-6 py-3 text-right text-[10px] font-semibold tracking-widest uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-border divide-y">
              <tr>
                <td className="text-muted-foreground px-6 py-4">10:42:05 AM</td>
                <td className="text-foreground px-6 py-4">Level_Check_Horizontal</td>
                <td className="text-muted-foreground px-6 py-4 text-right">99.92%</td>
                <td className="px-6 py-4 text-right">
                  <span className="inline-flex items-center gap-1 text-green-700">
                    <IconCheck className="size-3.5" aria-hidden="true" />
                    OK
                  </span>
                </td>
              </tr>
              <tr>
                <td className="text-muted-foreground px-6 py-4">10:43:12 AM</td>
                <td className="text-foreground px-6 py-4">Cold_Water_Inlet_Tight</td>
                <td className="text-muted-foreground px-6 py-4 text-right">99.85%</td>
                <td className="px-6 py-4 text-right">
                  <span className="inline-flex items-center gap-1 text-green-700">
                    <IconCheck className="size-3.5" aria-hidden="true" />
                    OK
                  </span>
                </td>
              </tr>
              <tr>
                <td className="text-muted-foreground px-6 py-4">10:44:01 AM</td>
                <td className="text-foreground px-6 py-4">Drain_Hose_Height</td>
                <td className="px-6 py-4 text-right text-red-600">42.10%</td>
                <td className="px-6 py-4 text-right">
                  <span className="inline-flex items-center gap-1 text-red-600">
                    <IconX className="size-3.5" aria-hidden="true" />
                    RETRY
                  </span>
                </td>
              </tr>
              <tr>
                <td className="text-muted-foreground px-6 py-4">10:44:45 AM</td>
                <td className="text-foreground px-6 py-4">Drain_Hose_Height</td>
                <td className="text-muted-foreground px-6 py-4 text-right">99.98%</td>
                <td className="px-6 py-4 text-right">
                  <span className="inline-flex items-center gap-1 text-green-700">
                    <IconCheck className="size-3.5" aria-hidden="true" />
                    OK
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
