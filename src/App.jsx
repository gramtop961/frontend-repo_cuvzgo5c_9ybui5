import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function Banner() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 py-2 text-sm">
          <p className="text-center">
            Mid-Season Sale: Up to 40% off selected styles
          </p>
          <a href="#sale" className="underline underline-offset-4">Shop the sale</a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Banner />
      <Navbar />
      <main>
        <Hero />
        <CategoryRow />
        <ProductGrid />
        <HighlightCTA />
      </main>
      <Footer />
    </div>
  );
}

function CategoryCard({ title, image, href }) {
  return (
    <a href={href} className="group block overflow-hidden rounded-2xl border border-gray-200">
      <div className="relative aspect-[2/1]">
        <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/0" />
        <div className="absolute bottom-3 left-3">
          <h3 className="text-white text-lg font-semibold drop-shadow">{title}</h3>
        </div>
      </div>
    </a>
  );
}

function CategoryRow() {
  const categories = [
    {
      title: 'Women',
      href: '#women',
      image:
        'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Men',
      href: '#men',
      image:
        'https://images.unsplash.com/photo-1490111718993-d98654ce6cf7?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Accessories',
      href: '#accessories',
      image:
        'https://images.unsplash.com/photo-1483986675744-c824cb1ee9db?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Shop by Category</h2>
            <p className="mt-2 text-gray-600">Find your next staple piece.</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((c) => (
            <CategoryCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HighlightCTA() {
  return (
    <section className="relative overflow-hidden rounded-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-12 sm:py-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Crafted responsibly</h3>
            <p className="mt-3 text-gray-600 max-w-prose">
              We prioritize natural fibers, low-impact dyes, and ethical manufacturing partners. Wear better, feel better.
            </p>
            <div className="mt-6">
              <a href="#" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                Learn more
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1542213493895-edf5b94f5a2b?q=80&w=1600&auto=format&fit=crop"
              alt="Sustainable materials"
              className="w-full rounded-2xl object-cover shadow-xl aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
