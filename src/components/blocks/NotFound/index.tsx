import { ButtonLink } from '@/ui/Button';

/** Render the global 404 page */
export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center px-6 py-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start lg:flex-row lg:items-center lg:gap-12">
        <div className="w-full lg:w-1/2">
          <p className="text-destructive text-sm font-medium">404 error</p>
          <h1 className="text-foreground mt-3 text-2xl font-semibold md:text-3xl">
            Page not found
          </h1>
          <div className="mt-6">
            <ButtonLink to="/">Take me home</ButtonLink>
          </div>
        </div>

        <div className="relative mt-12 w-full lg:mt-0 lg:w-1/2">
          <img className="w-full max-w-lg lg:mx-auto" src="/not-found.svg" alt="404 illustration" />
        </div>
      </div>
    </section>
  );
}
