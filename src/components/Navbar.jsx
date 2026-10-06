import { FaShoppingCart, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <a
          href="/"
          className="text-2xl font-bold tracking-tight text-slate-900"
        >
          Shop<span className="text-blue-600">ly</span>
        </a>

        {/* Search */}

        <div className="hidden w-full max-w-md items-center rounded-xl border border-slate-200 bg-slate-50 px-4 md:flex">
          <FaSearch className="text-sm text-slate-400" />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-transparent px-3 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>

        {/* Cart */}

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 transition hover:bg-slate-100 hover:text-blue-600"
        >
          <FaShoppingCart />

          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
            0
          </span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;