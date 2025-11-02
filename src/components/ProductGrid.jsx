const products = [
  {
    id: 1,
    title: 'Relaxed Linen Shirt',
    price: 69,
    tag: 'New',
    image:
      'https://images.unsplash.com/photo-1516642499105-492ff3ac5211?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Everyday Denim Jacket',
    price: 98,
    tag: 'Bestseller',
    image:
      'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Essential Crew Tee',
    price: 29,
    tag: 'Eco',
    image:
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Tailored Wide Pants',
    price: 85,
    tag: 'Limited',
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Ribbed Knit Dress',
    price: 79,
    tag: 'New',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Utility Overshirt',
    price: 89,
    tag: 'Bestseller',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1600&auto=format&fit=crop',
  },
];

function ProductCard({ product }) {
  return (
    <a
      href={`#product-${product.id}`}
      className="group relative block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
    >
      <div className="aspect-[4/5] overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-900">{product.title}</h3>
          <span className="text-sm font-semibold text-gray-900">${product.price}</span>
        </div>
        <div className="mt-2 text-xs text-gray-600">
          <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 font-medium text-gray-700">
            {product.tag}
          </span>
        </div>
        <div className="mt-4">
          <button className="w-full rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-black">
            Quick Add
          </button>
        </div>
      </div>
    </a>
  );
}

export default function ProductGrid() {
  return (
    <section id="new" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">New Arrivals</h2>
            <p className="mt-2 text-gray-600">Fresh picks curated for the season.</p>
          </div>
          <a href="#" className="text-sm font-semibold text-gray-900 hover:underline">View all</a>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
