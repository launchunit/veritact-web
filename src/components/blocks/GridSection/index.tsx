import { cn } from 'tailwind-variants';

type GridSectionProps = {
  className?: string;
  children?: React.ReactNode;
};

/** Decorative grid wrapper with dashed guide lines and corner cross marks. */
function GridSection({ className, children }: Readonly<GridSectionProps>) {
  return (
    <section className={cn('relative mx-auto max-w-[1080px]', className)}>
      <div className="relative">
        <GridCross className="-top-[7px] -left-[7px]" />
        <GridCross className="-right-[7px] -bottom-[7px]" />
        {children}
      </div>
    </section>
  );
}

type GridBandProps = {
  /** Number of columns in the band (should match the parent GridSection) */
  columns: number;
  /** Number of rows in the band */
  rows?: number;
  className?: string;
};

/** A horizontal band of decorative grid cells. Place at the top/bottom of a GridSection. */
function GridBand({ columns, rows = 1, className }: Readonly<GridBandProps>) {
  return (
    <div
      aria-hidden
      className={cn('grid', className)}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}>
      {Array.from({ length: columns * rows }, (_, i) => {
        const x = (i % columns) + 1;
        const y = Math.floor(i / columns) + 1;
        return (
          <div
            key={`${x}-${y}`}
            className={cn(
              'h-8 sm:h-10 lg:h-12',
              x < columns && 'border-border border-r border-dashed',
              y < rows && 'border-border border-b border-dashed'
            )}
          />
        );
      })}
    </div>
  );
}

function GridCross({ className }: Readonly<{ className?: string }>) {
  return (
    <div className={cn('absolute z-10 size-3.5', className)} aria-hidden>
      <div className="bg-border absolute top-0 left-1/2 h-full w-px -translate-x-1/2" />
      <div className="bg-border absolute top-1/2 left-0 h-px w-full -translate-y-1/2" />
    </div>
  );
}

export { GridSection, GridBand, GridCross };
