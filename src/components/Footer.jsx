import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Aura Apparel</h3>
            <p className="mt-2 text-sm text-gray-600 max-w-xs">
              Modern clothing crafted with elevated materials and responsible production.
            </p>
            <div className="mt-4 flex items-center gap-3 text-gray-600">
              <a href="#" aria-label="Instagram" className="hover:text-gray-900"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-900"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-gray-900"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#women" className="hover:text-gray-900">Women</a></li>
              <li><a href="#men" className="hover:text-gray-900">Men</a></li>
              <li><a href="#new" className="hover:text-gray-900">New Arrivals</a></li>
              <li><a href="#sale" className="hover:text-gray-900">Sale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Sustainability</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Stay in the loop</h4>
            <p className="mt-3 text-sm text-gray-600">Get 10% off your first order.</p>
            <form
              className="mt-3 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks for subscribing!');
              }}
            >
              <input
                type="email"
                required
                aria-label="Email address"
                placeholder="you@example.com"
                className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-gray-300"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white hover:bg-black"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 py-6 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Aura Apparel. All rights reserved.</p>
          <div className="mt-2 sm:mt-0 flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
