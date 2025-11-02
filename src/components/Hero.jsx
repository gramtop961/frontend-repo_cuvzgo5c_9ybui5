import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 sm:py-24">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
              SS25 COLLECTION
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Elevate your everyday style
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-prose">
              Discover thoughtfully crafted essentials and standout pieces designed for comfort, durability, and modern silhouettes.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#new"
                className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Shop New Arrivals
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#sale"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Explore Sale
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div>
                <span className="font-semibold text-gray-900">Free shipping</span> over $99
              </div>
              <div>
                30-day easy returns
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="absolute -inset-10 -z-0 opacity-20 blur-3xl bg-gradient-to-tr from-gray-200 via-gray-100 to-white rounded-full" />
            <img
              src="https://images.unsplash.com/photo-1548883354-7622d2b3d4eb?q=80&w=1600&auto=format&fit=crop"
              alt="Minimal fashion editorial"
              className="relative z-10 w-full rounded-2xl object-cover shadow-xl aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
