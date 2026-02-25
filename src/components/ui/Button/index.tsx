import { Button as BaseButton } from '@base-ui/react/button';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:not-data-[disabled]:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:not-data-[disabled]:bg-destructive/90',
        outline:
          'border border-border bg-background hover:not-data-[disabled]:bg-accent hover:not-data-[disabled]:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:not-data-[disabled]:bg-secondary/80',
        ghost:
          'hover:not-data-[disabled]:bg-accent hover:not-data-[disabled]:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:not-data-[disabled]:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  ...props
}: ComponentProps<typeof BaseButton> & VariantProps<typeof buttonVariants>) {
  return <BaseButton className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { Button, buttonVariants };
