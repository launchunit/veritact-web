import { Radio as BaseUiRadio } from '@base-ui/react/radio';
import { RadioGroup as BaseUiRadioGroup } from '@base-ui/react/radio-group';
import { checkControlStyles } from '@/ui/styles';
import { cn } from 'tailwind-variants';
import type { ComponentProps } from 'react';

/**
 * RadioGroup
 */
type RadioGroupProps = ComponentProps<typeof BaseUiRadioGroup>;

function RadioGroup({ className, ...props }: Readonly<RadioGroupProps>) {
  return <BaseUiRadioGroup className={cn('flex flex-col gap-2', className)} {...props} />;
}

/**
 * RadioItem
 */
const radioBaseStyles = cn(checkControlStyles, 'rounded-full');

type RadioItemProps = ComponentProps<typeof BaseUiRadio.Root>;

function RadioItem({ className, ...props }: Readonly<RadioItemProps>) {
  return (
    <BaseUiRadio.Root className={cn(radioBaseStyles, className)} {...props}>
      <BaseUiRadio.Indicator className="bg-primary-foreground size-2 rounded-full data-unchecked:hidden" />
    </BaseUiRadio.Root>
  );
}

/**
 * @example
 * <RadioGroup defaultValue="a">
 *   <label className="flex items-center gap-2">
 *     <RadioItem value="a" /> Option A
 *   </label>
 *   <label className="flex items-center gap-2">
 *     <RadioItem value="b" /> Option B
 *   </label>
 * </RadioGroup>
 */
export { RadioGroup, RadioItem };
