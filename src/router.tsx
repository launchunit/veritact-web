import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

/** Create and configure the TanStack Router instance with app-wide defaults */
export function getRouter() {
  return createTanStackRouter({
    routeTree,

    // --- Navigation & Preloading ---
    scrollRestoration: true,
    defaultPreload: 'intent',
    defaultPreloadDelay: 50,
    defaultPreloadStaleTime: 0,
    defaultPreloadGcTime: 30 * 60 * 1000, // 30 minutes
    defaultStaleTime: 0,
    defaultGcTime: 30 * 60 * 1000, // 30 minutes

    // --- Pending/Loading UI ---
    defaultPendingMs: 1000,
    defaultPendingMinMs: 500,

    // --- URL Behavior ---
    caseSensitive: false,
    trailingSlash: 'never',
    // basepath: '/',
    // pathParamsAllowedCharacters: [],

    // --- Search Params ---
    search: { strict: false },
    // stringifySearch: defaultStringifySearch,
    // parseSearch: defaultParseSearch,

    // --- Not Found ---
    notFoundMode: 'fuzzy',

    // --- Error Handling ---
    // defaultOnCatch: (error, errorInfo) => {},
    // disableGlobalCatchBoundary: false,

    // --- View Transitions ---
    // defaultViewTransition: false,

    // --- Hash Scrolling ---
    defaultHashScrollIntoView: true,

    // --- Performance ---
    defaultStructuralSharing: false,
  });
}

declare module '@tanstack/react-router' {
  // biome-ignore lint/style/useConsistentTypeDefinitions: Interface required here
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
