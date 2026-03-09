import { IconBrandLinkedin } from '@tabler/icons-react';
import { GridBand, GridSection } from '@/blocks/GridSection';

const team = [
  {
    name: 'Bonnie Green',
    role: 'CEO / Co-founder',
    bio: 'Bonnie drives the technical strategy of the Veritact platform and brand.',
    image:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=faces',
    linkedin: '#',
  },
  {
    name: 'Roberta Casas',
    role: 'CTO / Co-founder',
    bio: 'Roberta drives the technical strategy of the Veritact platform and brand.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces',
    linkedin: '#',
  },
];

/** Team members section for the About page. */
export default function Team() {
  return (
    <GridSection>
      <GridBand columns={9} rows={1} className="border-border border-b border-dashed" />

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left — section intro */}
        <div className="p-8 lg:p-12">
          <h2 className="text-3xl tracking-tight sm:text-4xl">Our leadership team</h2>
          <p className="text-muted-foreground mt-6 text-base leading-7">
            We&rsquo;re a dynamic group of individuals who are passionate about what we do and
            dedicated to delivering the best results for our clients.
          </p>
        </div>

        {/* Right — team members */}
        <div className="divide-border border-border divide-y divide-dashed border-t border-dashed lg:border-t-0 lg:border-l">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col gap-6 p-8 sm:flex-row lg:px-10 lg:py-10">
              <img
                src={member.image}
                alt={member.name}
                className="size-36 shrink-0 rounded-full object-cover"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-lg">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
                <p className="text-muted-foreground mt-4 text-sm leading-6">{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground mt-4 inline-block transition-colors"
                  aria-label={`${member.name} on LinkedIn`}>
                  <IconBrandLinkedin className="size-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <GridBand columns={9} rows={1} className="border-border border-t border-dashed" />
    </GridSection>
  );
}
