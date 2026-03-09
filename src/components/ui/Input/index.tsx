import { Input as BaseUiInput } from '@base-ui/react/input';
import { tv } from 'tailwind-variants';
import { field } from '@/ui/styles';
import type { UIProps } from '@/ui/styles';

const inputStyles = tv({
  extend: field,
  base: [
    'rounded-md',
    'border-border bg-background text-foreground w-full border px-3 py-2 text-sm',
    'placeholder:text-muted-foreground',
    'transition-[border-color,box-shadow] duration-200 ease-in-out',
    'focus:border-ring! focus:ring-ring/20 focus:ring-[3px] focus:outline-none',
  ],
});

type InputProps = UIProps<typeof BaseUiInput>;

function Input({ className, ...props }: Readonly<InputProps>) {
  return <BaseUiInput className={inputStyles({ class: className })} {...props} />;
}

/**
 * @example
 * <Input placeholder="Email" />
 * <Input disabled placeholder="Disabled" />
 */
export { Input };
