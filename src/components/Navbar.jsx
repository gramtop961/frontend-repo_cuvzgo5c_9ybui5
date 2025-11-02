import { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'New Arrivals', href: '#new' },
  { label: 'Women', href: '#women' },
  { label: 'Men', href: '#men' },
  { label: 'Sale', href: '#sale' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Mobile menu button */}
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Logo */}
          <a href="#" className="text-xl font-semibold tracking-tight">
            Aura Apparel
          </a>

          {/* Center: Nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50">
              <Search className="h-4 w-4" />
              <span className="hidden lg:inline">Search</span>
            </button>
            <button className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-full" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-gray-900 px-1.5 text-xs font-semibold text-white">2</span>
            </button>
            <button className="p-2 text-gray-700 hover:bg-gray-100 rounded-full" aria-label="Account">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <nav className="space-y-2 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
