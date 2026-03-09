import { Switch as BaseUiSwitch } from '@base-ui/react/switch';
import { tv } from 'tailwind-variants';
import type { UIProps } from '@/ui/styles';

const switchStyles = tv({
  base: [
    'relative flex h-6 w-10 cursor-pointer rounded-full p-px',
    'from-primary to-muted bg-gradient-to-r from-35% to-65% bg-[length:6.5rem_100%] bg-[100%_0%] bg-no-repeat',
    'shadow-border shadow-[inset_0_1.5px_2px]',
    'outline-border outline outline-1 -outline-offset-1',
    'transition-[background-position,box-shadow] duration-[125ms] ease-[cubic-bezier(0.26,0.75,0.38,0.45)]',
    'before:outline-ring before:absolute before:rounded-full before:outline-offset-2',
    'focus-visible:before:inset-0 focus-visible:before:outline focus-visible:before:outline-2',
    'active:bg-muted data-checked:active:bg-primary/80 data-checked:bg-[0%_0%]',
    'dark:from-muted-foreground dark:shadow-foreground/75 dark:outline-background/15 dark:data-checked:shadow-none',
    'data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50',
  ],
});

const thumbStyles = tv({
  base: [
    'bg-background pointer-events-none block aspect-square h-full shrink-0 rounded-full',
    'shadow-muted shadow-[0_0_1px_1px,0_1px_1px,1px_2px_4px_-1px]',
    'transition-transform duration-150',
    'data-checked:translate-x-4',
    'dark:shadow-foreground/25',
  ],
});

type SwitchProps = UIProps<typeof BaseUiSwitch.Root>;

/** Toggle a setting on or off. Pair with a `<label>` for accessibility */
function Switch({ className, ...props }: Readonly<SwitchProps>) {
  return (
    <BaseUiSwitch.Root className={switchStyles({ class: className })} {...props}>
      <BaseUiSwitch.Thumb className={thumbStyles()} />
    </BaseUiSwitch.Root>
  );
}

/**
 * @example
 * <label className="flex cursor-pointer items-center gap-2">
 *   <Switch /> Notifications
 * </label>
 *
 * <label className="flex cursor-pointer items-center gap-2">
 *   <Switch defaultChecked /> Dark mode
 * </label>
 *
 * <label className="flex cursor-pointer items-center gap-2">
 *   <Switch disabled /> Unavailable
 * </label>
 */
export { Switch, switchStyles, thumbStyles };
