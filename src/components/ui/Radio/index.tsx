import { Radio as BaseUiRadio } from '@base-ui/react/radio';
import { RadioGroup as BaseUiRadioGroup } from '@base-ui/react/radio-group';
import { cn, tv } from 'tailwind-variants';
import { checkControl } from '@/ui/styles';
import type { UIProps } from '@/ui/styles';

/**
 * Group a set of radio items into a single-selection control
 */
type RadioGroupProps = UIProps<typeof BaseUiRadioGroup>;

function RadioGroup({ className, ...props }: Readonly<RadioGroupProps>) {
  return <BaseUiRadioGroup className={cn('flex flex-col gap-2', className)} {...props} />;
}

/**
 * Render a single radio option within a RadioGroup
 */
const radioStyles = tv({
  extend: checkControl,
  base: 'rounded-full',
});

type RadioItemProps = UIProps<typeof BaseUiRadio.Root>;

function RadioItem({ className, ...props }: Readonly<RadioItemProps>) {
  return (
    <BaseUiRadio.Root className={radioStyles({ class: className })} {...props}>
      <BaseUiRadio.Indicator className="bg-primary-foreground size-2 rounded-full data-unchecked:hidden" />
    </BaseUiRadio.Root>
  );
}

/**
 * @example
 * <RadioGroup defaultValue="a">
 *   <label className="flex cursor-pointer items-center gap-2">
 *     <RadioItem value="a" /> Option A
 *   </label>
 *   <label className="flex cursor-pointer items-center gap-2">
 *     <RadioItem value="b" /> Option B
 *   </label>
 * </RadioGroup>
 */
export { RadioGroup, RadioItem };
