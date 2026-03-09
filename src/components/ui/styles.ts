import { tv } from 'tailwind-variants';
import type { ComponentProps, ElementType } from 'react';

/**
 * Extracts a component's props and narrows "className" to "string"
 * Many headless libraries (Base UI, Radix, etc.) type className as a
 * callback union — this ensures our wrappers only accept plain strings
 * since we resolve classes at definition time via "tv()"
 */
export type UIProps<T extends ElementType> = Omit<ComponentProps<T>, 'className'> & {
  className?: string;
};

/**
 * Shared style primitives for all UI components
 *
 * Inheritance chain (leaf nodes defined in their own component files):
 *   base (transition + focus + disabled)
 *   ├── field (+ invalid + hover-border)
 *   │   ├── Input (+ border, bg, text, rounded-md)
 *   │   └── checkControl (+ size, border, cursor, checked)
 *   │       ├── Checkbox (+ rounded-sm, indeterminate)
 *   │       └── Radio (+ rounded-full)
 *   ├── Button (+ rounded-md, flex, font, scale, variants)
 *   └── Link (+ cursor, flex, text, hover-underline, scale)
 */

export const base = tv({
  base: [
    'transition-colors duration-300',
    'focus-visible:outline-ring focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    'data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50',
  ],
});

export const field = tv({
  extend: base,
  base: ['data-invalid:border-destructive', 'hover:not-data-disabled:border-border-hover'],
});

export const checkControl = tv({
  extend: field,
  base: [
    'border-border bg-background size-5 shrink-0 cursor-pointer border-2',
    'flex items-center justify-center',
    'data-checked:border-primary data-checked:bg-primary',
  ],
});
