import { Button as BaseUiButton } from '@base-ui/react/button';
import { type LinkComponent, createLink } from '@tanstack/react-router';
import { type VariantProps, cva } from 'class-variance-authority';
import { disabledStyles, focusStyles, formDesignStyles, transitionStyles } from '@/ui/styles';
import { cn } from '@/utils/style-utils';
import type { ComponentProps, Ref } from 'react';

/**
 * Base styles
 */
const baseStyles = cn(
  transitionStyles,
  formDesignStyles,
  focusStyles,
  // Also show outline on mouse click (not just keyboard)
  // 'focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-ring',
  disabledStyles,
  'cursor-pointer', // Tailwind-v4 switched to "cursor: default" for disabled states so we set to "cursor-pointer"
  'shrink-0 inline-flex select-none items-center justify-center gap-x-2 whitespace-nowrap no-underline',
  'font-medium', // Design styles
  'active:not-data-disabled:scale-[0.96]' // Scale down on click
);

const buttonVariants = cva(baseStyles, {
  variants: {
    variant: {
      default:
        'border border-primary bg-primary text-primary-foreground hover:not-data-disabled:border-primary/90 hover:not-data-disabled:bg-primary/90',
      destructive:
        'border border-destructive bg-destructive text-destructive-foreground hover:not-data-disabled:border-destructive/90 hover:not-data-disabled:bg-destructive/90',
      outline:
        'border border-border bg-background hover:not-data-disabled:bg-accent hover:not-data-disabled:text-accent-foreground',
      secondary:
        'border border-secondary bg-secondary text-secondary-foreground hover:not-data-disabled:border-secondary/80 hover:not-data-disabled:bg-secondary/80',
      link: 'border-transparent bg-transparent font-normal text-primary rounded-sm px-0.5 py-0 hover:not-data-disabled:underline hover:not-data-disabled:underline-offset-2',
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 px-3',
      lg: 'h-11 px-8',
      icon: 'size-10',
      none: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type ButtonProps = ComponentProps<typeof BaseUiButton> & VariantProps<typeof buttonVariants>;

function buttonClassName({
  variant,
  size,
  className,
}: Readonly<Pick<ButtonProps, 'variant' | 'size' | 'className'>>) {
  const resolvedSize = size ?? (variant === 'link' ? 'none' : undefined);
  return cn(buttonVariants({ variant, size: resolvedSize }), className);
}

function Button({ className, variant, size, ...props }: Readonly<ButtonProps>) {
  return <BaseUiButton className={buttonClassName({ variant, size, className })} {...props} />;
}

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
      // biome-ignore lint/a11y/useValidAnchor: render prop template (href is injected by TanStack Router's createLink)
      // biome-ignore lint/a11y/useAnchorContent: render prop template (children are injected by TanStack Router's createLink)
      render={<a />}
      className={buttonClassName({ variant, size, className })}
      {...props}
    />
  );
}

const CreatedButtonLink = createLink(BaseUiButtonLink);

const ButtonLink: LinkComponent<typeof BaseUiButtonLink> = (props) => {
  return <CreatedButtonLink preload="intent" {...props} />;
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
