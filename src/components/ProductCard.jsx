import {
  FaHeart,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/70">
      {/* Product Image */}

      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Discount */}

        <div className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
          Sale
        </div>

        {/* Wishlist */}

        <button
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-500 shadow-md backdrop-blur-sm transition hover:bg-white hover:text-red-500"
        >
          <FaHeart />
        </button>
      </div>

      {/* Product Information */}

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
          {product.category}
        </p>

        <h3 className="mt-2 truncate text-lg font-bold text-slate-900">
          {product.name}
        </h3>

        {/* Rating */}

        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1 text-amber-400">
            <FaStar className="text-xs" />
            <span className="text-sm font-semibold">
              {product.rating}
            </span>
          </div>

          <span className="text-xs text-slate-400">
            Customer rating
          </span>
        </div>

        {/* Price */}

        <div className="mt-4 flex items-center gap-3">
          <span className="text-xl font-bold text-slate-900">
            ${product.price.toFixed(2)}
          </span>

          <span className="text-sm text-slate-400 line-through">
            ${product.oldPrice.toFixed(2)}
          </span>
        </div>

        {/* Add To Cart */}

        <button
          type="button"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600"
        >
          <FaShoppingCart />

          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;