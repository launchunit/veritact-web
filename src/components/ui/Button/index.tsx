import { Button as BaseUiButton } from '@base-ui/react/button';
import { type LinkComponent, createLink } from '@tanstack/react-router';
import { tv } from 'tailwind-variants';
import { type UIProps, base } from '@/ui/styles';
import type { Ref } from 'react';
import type { VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
  extend: base,
  base: [
    'cursor-pointer', // Tailwind-v4 switched to "cursor: default" for disabled states so we set to "cursor-pointer"
    'inline-flex shrink-0 items-center justify-center gap-x-2 whitespace-nowrap no-underline select-none',
    'active:not-data-disabled:scale-[0.96]', // Scale down on click
    // Also show outline on mouse click (not just keyboard)
    // 'focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-ring',
    'font-medium', // Design styles
  ],
  variants: {
    variant: {
      default:
        'border-primary bg-primary text-primary-foreground hover:not-data-disabled:border-primary/90 hover:not-data-disabled:bg-primary/90 border',
      destructive:
        'border-destructive bg-destructive text-destructive-foreground hover:not-data-disabled:border-destructive/90 hover:not-data-disabled:bg-destructive/90 border',
      outline:
        'border-border bg-background hover:not-data-disabled:bg-accent hover:not-data-disabled:text-accent-foreground border',
      ghost: 'hover:not-data-disabled:bg-accent hover:not-data-disabled:text-accent-foreground',
      secondary:
        'border-secondary bg-secondary text-secondary-foreground hover:not-data-disabled:border-secondary/80 hover:not-data-disabled:bg-secondary/80 border',
      link: 'text-primary border-transparent bg-transparent px-0.5 py-0 font-normal hover:not-data-disabled:underline hover:not-data-disabled:underline-offset-2',
    },
    size: {
      default: 'h-10 rounded-md px-4 py-2',
      sm: 'h-9 rounded-sm px-3',
      lg: 'h-11 rounded-lg px-8',
      icon: 'size-10',
      none: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type ButtonProps = UIProps<typeof BaseUiButton> & VariantProps<typeof buttonVariants>;

/** Resolve the button class string from variant, size, and optional overrides */
function buttonClassName({
  variant,
  size,
  className,
}: Readonly<Pick<ButtonProps, 'variant' | 'size'> & { className?: string | undefined }>) {
  const resolvedSize = size ?? (variant === 'link' ? 'none' : undefined);
  return buttonVariants({ variant, size: resolvedSize, class: className });
}

function Button({ className, variant, size, ...props }: Readonly<ButtonProps>) {
  return <BaseUiButton className={buttonClassName({ variant, size, className })} {...props} />;
}

/** Render a Base UI button as an anchor element for use with TanStack Router's `createLink` */
function BaseUiButtonLink({
  className,
  variant,
  size,
  ref,
  ...props
}: Readonly<ButtonProps & { ref?: Ref<HTMLAnchorElement> }>) {
  return (
    <BaseUiButton
      ref={ref}
      nativeButton={false}
      // biome-ignore lint/a11y/useValidAnchor: render prop template (href is injected by TanStack Router's createLink)
      // biome-ignore lint/a11y/useAnchorContent: render prop template (children are injected by TanStack Router's createLink)
      render={<a />}
      className={buttonClassName({ variant, size, className })}
      {...props}
    />
  );
}

const TanStackButtonLink = createLink(BaseUiButtonLink);

const ButtonLink: LinkComponent<typeof BaseUiButtonLink> = function (props) {
  return <TanStackButtonLink preload="intent" {...props} />;
};

/**
 * @example
 * <Button variant="default" size="sm">Click me</Button>
 * <Button variant="outline" disabled>Disabled</Button>
 * <Button variant="link">Inline link (defaults to size="none")</Button>
 * <Button variant="link" size="sm">Link with button sizing</Button>
 * <ButtonLink to="/dashboard" variant="secondary">Dashboard</ButtonLink>
 * <ButtonLink to="/posts/$postId" params={{ postId: '42' }} preload="intent">View Post</ButtonLink>
 */
export { Button, ButtonLink, buttonVariants };
