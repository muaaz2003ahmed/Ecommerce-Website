import ProductCard from "./ProductCard";
import products from "../data/products";

function Products() {
  return (
    <section
      id="products"
      className="scroll-mt-20 bg-slate-50 px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Our Collection
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Products
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-slate-500">
              Explore some of our most popular products and
              discover something you will love.
            </p>
          </div>

          <button
            type="button"
            className="w-fit rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
          >
            View All Products →
          </button>
        </div>

        {/* Products Grid */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;