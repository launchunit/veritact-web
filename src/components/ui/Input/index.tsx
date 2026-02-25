import { Input as BaseUiInput } from '@base-ui/react/input';
import { fieldStyles, formDesignStyles } from '@/ui/styles';
import { cn } from 'tailwind-variants';
import type { ComponentProps } from 'react';

/**
 * Base styles
 */
const baseStyles = cn(
  fieldStyles,
  formDesignStyles,
  'w-full border border-border bg-background text-foreground text-sm px-3 py-2',
  'placeholder:text-muted-foreground'
);

type InputProps = ComponentProps<typeof BaseUiInput>;

function Input({ className, ...props }: Readonly<InputProps>) {
  return <BaseUiInput className={cn(baseStyles, className)} {...props} />;
}

/**
 * @example
 * <Input placeholder="Email" />
 * <Input disabled placeholder="Disabled" />
 */
export { Input };
