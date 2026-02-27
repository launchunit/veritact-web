import { DrawerPreview as BaseUiDrawer } from '@base-ui/react/drawer';
import { tv } from 'tailwind-variants';
import type { ComponentProps } from 'react';
import type { UIProps } from '@/ui/styles';

const backdropStyles = tv({
  base: [
    '[--backdrop-opacity:0.2] dark:[--backdrop-opacity:0.7]',
    'fixed inset-0 z-50 min-h-dvh bg-black',
    'opacity-[calc(var(--backdrop-opacity)*(1-var(--drawer-swipe-progress)))]',
    'backdrop-blur-sm',
    'transition-[opacity,backdrop-filter] duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)]',
    'data-[swiping]:duration-0',
    'data-[starting-style]:backdrop-blur-0 data-[starting-style]:opacity-0',
    'data-[ending-style]:backdrop-blur-0 data-[ending-style]:opacity-0',
    'data-[ending-style]:duration-[calc(var(--drawer-swipe-strength)*400ms)]',
    'supports-[-webkit-touch-callout:none]:absolute',
  ],
});

const viewportStyles = tv({
  base: [
    'fixed inset-0 z-50 flex',
    '[--viewport-padding:0px] supports-[-webkit-touch-callout:none]:[--viewport-padding:0.625rem]',
    'p-[var(--viewport-padding)]',
  ],
  variants: {
    position: {
      right: 'items-stretch justify-end',
      left: 'items-stretch justify-start',
      bottom: 'items-end justify-center',
    },
  },
  defaultVariants: {
    position: 'bottom',
  },
});

const popupStyles = tv({
  base: [
    'bg-background text-foreground outline-border outline outline-1',
    'touch-auto overflow-y-auto overscroll-contain',
    'data-[swiping]:select-none',
  ],
  variants: {
    position: {
      right: [
        '[--bleed:3rem] supports-[-webkit-touch-callout:none]:[--bleed:0px]',
        'h-full w-[calc(20rem+var(--bleed))] max-w-[calc(100vw-3rem+var(--bleed))]',
        '-mr-[var(--bleed)] p-6 pr-[calc(1.5rem+var(--bleed))]',
        '[transform:translateX(var(--drawer-swipe-movement-x))]',
        'transition-transform duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)]',
        'data-[starting-style]:[transform:translateX(calc(100%-var(--bleed)+var(--viewport-padding)))]',
        'data-[ending-style]:[transform:translateX(calc(100%-var(--bleed)+var(--viewport-padding)))]',
        'data-[ending-style]:duration-[calc(var(--drawer-swipe-strength)*400ms)]',
        'supports-[-webkit-touch-callout:none]:mr-0 supports-[-webkit-touch-callout:none]:w-80',
        'supports-[-webkit-touch-callout:none]:max-w-[calc(100vw-20px)] supports-[-webkit-touch-callout:none]:rounded-[10px] supports-[-webkit-touch-callout:none]:pr-6',
      ],
      left: [
        '[--bleed:3rem] supports-[-webkit-touch-callout:none]:[--bleed:0px]',
        'h-full w-[calc(20rem+var(--bleed))] max-w-[calc(100vw-3rem+var(--bleed))]',
        '-ml-[var(--bleed)] p-6 pl-[calc(1.5rem+var(--bleed))]',
        '[transform:translateX(var(--drawer-swipe-movement-x))]',
        'transition-transform duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)]',
        'data-[starting-style]:[transform:translateX(calc(-100%+var(--bleed)-var(--viewport-padding)))]',
        'data-[ending-style]:[transform:translateX(calc(-100%+var(--bleed)-var(--viewport-padding)))]',
        'data-[ending-style]:duration-[calc(var(--drawer-swipe-strength)*400ms)]',
        'supports-[-webkit-touch-callout:none]:ml-0 supports-[-webkit-touch-callout:none]:w-80',
        'supports-[-webkit-touch-callout:none]:max-w-[calc(100vw-20px)] supports-[-webkit-touch-callout:none]:rounded-[10px] supports-[-webkit-touch-callout:none]:pl-6',
      ],
      bottom: [
        'w-full max-w-[42rem] rounded-t-2xl p-6 pt-4',
        'shadow-[0_10px_64px_-10px_rgb(36_40_52/20%)]',
        '[transform:translateY(var(--drawer-swipe-movement-y))]',
        'transition-transform duration-[600ms] ease-[cubic-bezier(0.45,1.005,0,1.005)]',
        'data-[ending-style]:[transform:translateY(max(100dvh,100%))]',
        'data-[ending-style]:duration-[350ms] data-[ending-style]:ease-[cubic-bezier(0.375,0.015,0.545,0.455)]',
      ],
    },
  },
  defaultVariants: {
    position: 'bottom',
  },
});

const titleStyles = tv({
  base: '-mt-1.5 mb-1 text-lg font-medium',
});

const descriptionStyles = tv({
  base: 'text-muted-foreground mb-6 text-base',
});

const closeStyles = tv({
  base: [
    'border-border bg-background text-foreground hover:bg-accent active:bg-accent',
    'flex h-10 items-center justify-center rounded-md border px-3.5 text-base font-medium select-none',
    'focus-visible:outline-ring focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1',
  ],
});

type DrawerPosition = 'right' | 'left' | 'bottom';

type DrawerRootProps = ComponentProps<typeof BaseUiDrawer.Root>;
type DrawerTriggerProps = UIProps<typeof BaseUiDrawer.Trigger>;
type DrawerPortalProps = ComponentProps<typeof BaseUiDrawer.Portal>;
type DrawerBackdropProps = UIProps<typeof BaseUiDrawer.Backdrop>;
type DrawerViewportProps = UIProps<typeof BaseUiDrawer.Viewport> & { position?: DrawerPosition };
type DrawerPopupProps = UIProps<typeof BaseUiDrawer.Popup> & { position?: DrawerPosition };
type DrawerContentProps = UIProps<typeof BaseUiDrawer.Content>;
type DrawerTitleProps = UIProps<typeof BaseUiDrawer.Title>;
type DrawerDescriptionProps = UIProps<typeof BaseUiDrawer.Description>;
type DrawerCloseProps = UIProps<typeof BaseUiDrawer.Close>;

function DrawerRoot(props: Readonly<DrawerRootProps>) {
  return <BaseUiDrawer.Root {...props} />;
}

function DrawerTrigger({ className, ...props }: Readonly<DrawerTriggerProps>) {
  return <BaseUiDrawer.Trigger className={className} {...props} />;
}

function DrawerPortal(props: Readonly<DrawerPortalProps>) {
  return <BaseUiDrawer.Portal {...props} />;
}

function DrawerBackdrop({ className, ...props }: Readonly<DrawerBackdropProps>) {
  return <BaseUiDrawer.Backdrop className={backdropStyles({ class: className })} {...props} />;
}

function DrawerViewport({ className, position, ...props }: Readonly<DrawerViewportProps>) {
  return (
    <BaseUiDrawer.Viewport className={viewportStyles({ position, class: className })} {...props} />
  );
}

function DrawerPopup({ className, position, ...props }: Readonly<DrawerPopupProps>) {
  return <BaseUiDrawer.Popup className={popupStyles({ position, class: className })} {...props} />;
}

function DrawerContent({ className, ...props }: Readonly<DrawerContentProps>) {
  return <BaseUiDrawer.Content className={className} {...props} />;
}

function DrawerTitle({ className, ...props }: Readonly<DrawerTitleProps>) {
  return <BaseUiDrawer.Title className={titleStyles({ class: className })} {...props} />;
}

function DrawerDescription({ className, ...props }: Readonly<DrawerDescriptionProps>) {
  return (
    <BaseUiDrawer.Description className={descriptionStyles({ class: className })} {...props} />
  );
}

function DrawerClose({ className, ...props }: Readonly<DrawerCloseProps>) {
  return <BaseUiDrawer.Close className={closeStyles({ class: className })} {...props} />;
}

/**
 * Slide-in panel with swipe-to-dismiss gestures. Extends Dialog with gesture support,
 * snap points, and indent effects. Use Dialog instead if you don't need gestures.
 *
 * Note: Drawer is in preview — `DrawerPreview` will be renamed to `Drawer` when it exits preview.
 *
 * @example
 * <Drawer.Root>
 *   <Drawer.Trigger>Open</Drawer.Trigger>
 *   <Drawer.Portal>
 *     <Drawer.Backdrop />
 *     <Drawer.Viewport>
 *       <Drawer.Popup>
 *         <Drawer.Content>
 *           <Drawer.Title>Title</Drawer.Title>
 *           <Drawer.Description>Description</Drawer.Description>
 *           <Drawer.Close>Close</Drawer.Close>
 *         </Drawer.Content>
 *       </Drawer.Popup>
 *     </Drawer.Viewport>
 *   </Drawer.Portal>
 * </Drawer.Root>
 *
 * @example
 * // Side drawer (right)
 * <Drawer.Root swipeDirection="right">
 *   <Drawer.Trigger>Open</Drawer.Trigger>
 *   <Drawer.Portal>
 *     <Drawer.Backdrop />
 *     <Drawer.Viewport position="right">
 *       <Drawer.Popup position="right">
 *         <Drawer.Content>
 *           <Drawer.Title>Side panel</Drawer.Title>
 *           <Drawer.Close>Close</Drawer.Close>
 *         </Drawer.Content>
 *       </Drawer.Popup>
 *     </Drawer.Viewport>
 *   </Drawer.Portal>
 * </Drawer.Root>
 */
const Drawer = {
  Root: DrawerRoot,
  Trigger: DrawerTrigger,
  Portal: DrawerPortal,
  Backdrop: DrawerBackdrop,
  Viewport: DrawerViewport,
  Popup: DrawerPopup,
  Content: DrawerContent,
  Title: DrawerTitle,
  Description: DrawerDescription,
  Close: DrawerClose,
  /** Unstyled close primitive for composing with other components via `render` */
  CloseBase: BaseUiDrawer.Close,
  /** Create a handle for detached triggers */
  createHandle: BaseUiDrawer.createHandle,
} as const;

export {
  Drawer,
  backdropStyles,
  viewportStyles,
  popupStyles,
  titleStyles,
  descriptionStyles,
  closeStyles,
};
