import { cn } from '@/utils/style-utils';

/**
 * Shared style primitives for all UI components
 */

/**
 * Focus outline
 */
export const focusStyles =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring';

/**
 * Disabled
 */
export const disabledStyles =
  'data-disabled:cursor-not-allowed data-disabled:pointer-events-none data-disabled:opacity-50';

/**
 * Transitions
 */
export const transitionStyles = 'transition-colors duration-300';

/**
 * Form element design (inputs, selects, buttons)
 */
export const formDesignStyles = 'rounded-md';

/**
 * Invalid state — form fields with validation (inputs, selects, radio, checkbox)
 */
export const invalidStyles = 'data-invalid:border-destructive';

/**
 * Hover border — form fields with borders (inputs, selects, radio, checkbox)
 */
export const hoverBorderStyles = 'hover:not-data-disabled:border-border-hover';

/**
 * Form field base — common styles for Input, Radio, Checkbox
 */
export const fieldStyles = cn(
  transitionStyles,
  focusStyles,
  disabledStyles,
  invalidStyles,
  hoverBorderStyles
);

/**
 * Check control base — common styles for Radio and Checkbox
 */
export const checkControlStyles = cn(
  fieldStyles,
  'size-5 shrink-0 cursor-pointer border-2 border-border bg-background',
  'flex items-center justify-center',
  'data-checked:border-primary data-checked:bg-primary'
);
