import { type LinkComponent, createLink } from '@tanstack/react-router';
import { tv } from 'tailwind-variants';
import { base } from '@/ui/styles';
import type { ComponentProps, Ref } from 'react';

const linkStyles = tv({
  extend: base,
  base: [
    'shrink-0 cursor-pointer',
    'inline-flex items-center justify-center',
    'text-primary no-underline focus-visible:rounded-sm',
    'hover:underline hover:underline-offset-2',
    'active:not-data-disabled:scale-[0.96]',
  ],
});

/** Render a styled anchor element for use with TanStack Router's `createLink` */
function BaseLink({
  className,
  ref,
  ...props
}: Readonly<Omit<ComponentProps<'a'>, 'ref'> & { ref?: Ref<HTMLAnchorElement> }>) {
  return <a ref={ref} className={linkStyles({ class: className })} {...props} />;
}

const CreatedLink = createLink(BaseLink);

const Link: LinkComponent<typeof BaseLink> = (props) => {
  return <CreatedLink preload="intent" {...props} />;
};

function ExternalLink({ className, ...props }: Readonly<ComponentProps<'a'>>) {
  return (
    <a
      className={linkStyles({ class: className })}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    />
  );
}

/**
 * @example
 * <Link to="/dashboard">Dashboard</Link>
 * <Link to="/posts/$postId" params={{ postId: '42' }} preload="intent">View Post</Link>
 * <ExternalLink href="https://example.com">External</ExternalLink>
 */
export { Link, ExternalLink };
