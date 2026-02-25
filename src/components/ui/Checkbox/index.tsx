import { Checkbox as BaseUiCheckbox } from '@base-ui/react/checkbox';
import { CheckboxGroup as BaseUiCheckboxGroup } from '@base-ui/react/checkbox-group';
import { checkControlStyles } from '@/ui/styles';
import { cn } from '@/utils/style-utils';
import type { ComponentProps } from 'react';

/**
 * CheckboxGroup
 */
type CheckboxGroupProps = ComponentProps<typeof BaseUiCheckboxGroup>;

function CheckboxGroup({ className, ...props }: Readonly<CheckboxGroupProps>) {
  return <BaseUiCheckboxGroup className={cn('flex flex-col gap-2', className)} {...props} />;
}

/**
 * Checkbox
 */
const checkboxBaseStyles = cn(
  checkControlStyles,
  'rounded-sm',
  'data-indeterminate:border-primary data-indeterminate:bg-primary'
);

const indeterminateIcon = (
  <svg
    aria-hidden="true"
    className="size-3"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round">
    <path d="M5 12h14" />
  </svg>
);

const checkIcon = (
  <svg
    aria-hidden="true"
    className="size-3"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

type CheckboxProps = ComponentProps<typeof BaseUiCheckbox.Root>;

function Checkbox({ className, ...props }: Readonly<CheckboxProps>) {
  return (
    <BaseUiCheckbox.Root className={cn(checkboxBaseStyles, className)} {...props}>
      <BaseUiCheckbox.Indicator
        className="text-primary-foreground flex data-unchecked:hidden"
        keepMounted
        render={(renderProps, state) => (
          <span {...renderProps}>{state.indeterminate ? indeterminateIcon : checkIcon}</span>
        )}
      />
    </BaseUiCheckbox.Root>
  );
}

/**
 * @example
 * <Checkbox defaultChecked />
 * <Checkbox disabled />
 * <Checkbox indeterminate />
 *
 * <label className="flex items-center gap-2">
 *   <Checkbox /> Accept terms
 * </label>
 *
 * <CheckboxGroup defaultValue={["a"]}>
 *   <label className="flex items-center gap-2">
 *     <Checkbox value="a" /> Option A
 *   </label>
 *   <label className="flex items-center gap-2">
 *     <Checkbox value="b" /> Option B
 *   </label>
 * </CheckboxGroup>
 */
export { Checkbox, CheckboxGroup };
