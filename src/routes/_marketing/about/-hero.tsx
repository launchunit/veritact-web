import { GridBand, GridSection } from '@/blocks/GridSection';

/** About page hero with mission statement, image collage, and stats. */
export default function Hero() {
  return (
    <GridSection>
      <GridBand columns={9} rows={1} className="border-border border-b border-dashed" />

      {/* Mission + Images */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left — mission text */}
        <div className="min-w-0 p-8 lg:p-12">
          <h2 className="text-xl">Our mission</h2>
          <p className="text-muted-foreground mt-6 text-base leading-7">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
            semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
            viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat.
            Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.
          </p>
          <p className="text-muted-foreground mt-6 text-base leading-7">
            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit
            molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
            varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut.
            Ac lorem vel integer orci.
          </p>
        </div>

        {/* Right — image collage */}
        <div className="border-border min-w-0 border-t border-dashed p-8 lg:border-t-0 lg:border-l lg:p-12">
          <div className="grid grid-cols-2 gap-4">
            {/* Top-right tall image — offset down */}
            <div className="col-start-2 row-span-1 pt-12">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt=""
                className="aspect-[3/2] w-full rounded-xl object-cover"
              />
            </div>

            {/* Middle-left tall image */}
            <div className="row-span-2">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop"
                alt=""
                className="aspect-[2/3] w-full rounded-xl object-cover"
              />
            </div>

            {/* Middle-right image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop"
                alt=""
                className="aspect-[3/2] w-full rounded-xl object-cover"
              />
            </div>

            {/* Bottom-center tall image */}
            <div className="col-span-1">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=800&fit=crop"
                alt=""
                className="aspect-[2/3] w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="divide-border border-border grid grid-cols-2 divide-x divide-dashed border-t border-dashed sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="p-6">
            <dd className="text-3xl tracking-tight sm:text-4xl">{stat.value}</dd>
            <dt className="text-muted-foreground mt-1 text-sm">{stat.label}</dt>
          </div>
        ))}
      </div>

      <GridBand columns={9} rows={1} className="border-border border-t border-dashed" />
    </GridSection>
  );
}

const stats = [
  { value: '$150M', label: 'Raised' },
  { value: '30K', label: 'Companies' },
  { value: '1.5M', label: 'Deals Closed' },
  { value: '200M', label: 'Leads Generated' },
];
