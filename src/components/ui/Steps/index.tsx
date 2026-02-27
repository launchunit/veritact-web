import { Children, isValidElement } from 'react';
import { tv } from 'tailwind-variants';
import type { ComponentProps, ReactNode } from 'react';
import type { VariantProps } from 'tailwind-variants';

const stepsStyles = tv({
  base: 'border-primary/20 relative border-l',
  variants: {
    size: {
      default: 'ml-4',
      sm: 'ml-3',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const stepItemStyles = tv({
  base: 'relative',
  variants: {
    size: {
      default: 'mb-10 ml-8 last:mb-0',
      sm: 'mb-8 ml-6 last:mb-0',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const stepBadgeStyles = tv({
  base: 'bg-background text-primary ring-background border-primary/30 before:bg-primary/10 absolute flex items-center justify-center rounded-full border font-semibold before:absolute before:inset-0 before:rounded-full',
  variants: {
    size: {
      default: '-left-12 size-8 text-sm ring-8',
      sm: '-left-9 size-6 text-xs ring-[6px]',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const stepTitleStyles = tv({
  base: 'text-foreground font-bold',
  variants: {
    size: {
      default: 'text-base',
      sm: 'text-sm',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const stepContentStyles = tv({
  base: 'text-muted-foreground mt-1',
  variants: {
    size: {
      default: 'text-sm',
      sm: 'text-xs',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

type StepProps = ComponentProps<'div'> & {
  title: string;
};

/** Render a single step with a title and description content */
function Step({ title, className, children, ...props }: Readonly<StepProps>) {
  return (
    <div className={className} {...props}>
      <p className={stepTitleStyles()}>{title}</p>
      <p className={stepContentStyles()}>{children}</p>
    </div>
  );
}

type StepsProps = Omit<ComponentProps<'ol'>, 'children'> &
  VariantProps<typeof stepsStyles> & {
    children: ReactNode;
  };

/** Render a numbered step list with a vertical connector line and badge indicators */
function Steps({ className, size, children, ...props }: Readonly<StepsProps>) {
  const steps = Children.toArray(children).filter(isValidElement<StepProps>);

  return (
    <ol className={stepsStyles({ size, class: className })} {...props}>
      {steps.map((child, index) => (
        <li key={child.props.title} className={stepItemStyles({ size })}>
          <div className={stepBadgeStyles({ size })}>
            <span className="relative">{index + 1}</span>
          </div>
          {child}
        </li>
      ))}
    </ol>
  );
}

/**
 * @example
 * <Steps>
 *   <Step title="Create account">Sign up with your email address</Step>
 *   <Step title="Verify email">Check your inbox for a verification link</Step>
 *   <Step title="Get started">Start using the platform</Step>
 * </Steps>
 *
 * <Steps size="sm">
 *   <Step title="Install">Run the install command</Step>
 *   <Step title="Configure">Add your settings</Step>
 * </Steps>
 */
export {
  Step,
  Steps,
  stepsStyles,
  stepItemStyles,
  stepBadgeStyles,
  stepTitleStyles,
  stepContentStyles,
};
