import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge class values into a single class string
 */
export const cn = function (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
};
