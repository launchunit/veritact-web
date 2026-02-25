import { type LinkComponent, createLink } from '@tanstack/react-router';
import { focusStyles, transitionStyles } from '@/ui/styles';
import { cn } from '@/utils/style-utils';
import type { ComponentProps, Ref } from 'react';

const linkStyles = cn(
  transitionStyles,
  focusStyles,
  'shrink-0 cursor-pointer',
  'inline-flex items-center justify-center',
  'text-primary no-underline focus-visible:rounded-sm',
  'hover:underline hover:underline-offset-2',
  'active:not-data-disabled:scale-[0.96]'
);

function BaseLink({
  className,
  ref,
  ...props
}: Readonly<Omit<ComponentProps<'a'>, 'ref'> & { ref?: Ref<HTMLAnchorElement> }>) {
  return <a ref={ref} className={cn(linkStyles, className)} {...props} />;
}

const CreatedLink = createLink(BaseLink);

const Link: LinkComponent<typeof BaseLink> = (props) => {
  return <CreatedLink preload="intent" {...props} />;
};

function ExternalLink({ className, ...props }: Readonly<ComponentProps<'a'>>) {
  return (
    <a className={cn(linkStyles, className)} rel="noopener noreferrer" target="_blank" {...props} />
  );
}

/**
 * @example
 * <Link to="/dashboard">Dashboard</Link>
 * <Link to="/posts/$postId" params={{ postId: '42' }} preload="intent">View Post</Link>
 * <ExternalLink href="https://example.com">External</ExternalLink>
 */
export { Link, ExternalLink };
