import { IconHome, IconMenu2, IconX } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen]);

  return (
    <>
      <header className="bg-primary text-primary-foreground flex items-center p-4 shadow-lg">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="hover:bg-primary/80 rounded-lg p-2 transition-colors"
          aria-label="Open menu">
          <IconMenu2 size={24} />
        </button>
        <h1 className="ml-4 text-xl font-semibold">
          <Link to="/">Veritact</Link>
        </h1>
      </header>

      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`bg-primary text-primary-foreground fixed top-0 left-0 z-50 flex h-full w-80 flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className="border-primary-foreground/20 flex items-center justify-between border-b p-4">
          <h2 className="text-xl font-bold">Navigation</h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="hover:bg-primary/80 rounded-lg p-2 transition-colors"
            aria-label="Close menu">
            <IconX size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:bg-primary/80 data-[status=active]:bg-accent data-[status=active]:text-accent-foreground data-[status=active]:hover:bg-accent/80 mb-2 flex items-center gap-3 rounded-lg p-3 transition-colors">
            <IconHome size={20} />
            <span className="font-medium">Home</span>
          </Link>

          {/* Demo Links Start */}

          {/* Demo Links End */}
        </nav>
      </aside>
    </>
  );
}
