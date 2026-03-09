import { Avatar as BaseUiAvatar } from '@base-ui/react/avatar';
import { cn, tv } from 'tailwind-variants';
import { base } from '@/ui/styles';
import type { VariantProps } from 'tailwind-variants';
import type { UIProps } from '@/ui/styles';

const avatarVariants = tv({
  extend: base,
  base: 'bg-muted relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full',
  variants: {
    size: {
      sm: 'size-8 text-xs',
      default: 'size-10 text-sm',
      lg: 'size-14 text-base',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

type AvatarProps = UIProps<typeof BaseUiAvatar.Root> & VariantProps<typeof avatarVariants>;

/** Compose Avatar.Root with size variants. */
function Avatar({ className, size, ...props }: Readonly<AvatarProps>) {
  return <BaseUiAvatar.Root className={avatarVariants({ size, class: className })} {...props} />;
}

type AvatarImageProps = UIProps<typeof BaseUiAvatar.Image>;

/** Display the user's profile image inside an Avatar. */
function AvatarImage({ className, ...props }: Readonly<AvatarImageProps>) {
  return <BaseUiAvatar.Image className={cn('size-full object-cover', className)} {...props} />;
}

type AvatarFallbackProps = UIProps<typeof BaseUiAvatar.Fallback>;

/** Render initials or an icon when the image is unavailable. */
function AvatarFallback({ className, ...props }: Readonly<AvatarFallbackProps>) {
  return (
    <BaseUiAvatar.Fallback
      className={cn(
        'text-muted-foreground flex size-full items-center justify-center font-medium',
        className
      )}
      {...props}
    />
  );
}

/**
 * @example
 * <Avatar>
 *   <AvatarImage src="/avatar.jpg" alt="Jane Doe" />
 *   <AvatarFallback>JD</AvatarFallback>
 * </Avatar>
 *
 * <Avatar size="lg">
 *   <AvatarImage src="/avatar.jpg" alt="Jane Doe" />
 *   <AvatarFallback>JD</AvatarFallback>
 * </Avatar>
 *
 * <Avatar size="sm">
 *   <AvatarFallback>AB</AvatarFallback>
 * </Avatar>
 */
export { Avatar, AvatarImage, AvatarFallback, avatarVariants };
