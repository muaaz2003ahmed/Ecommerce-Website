import { FaArrowRight, FaShoppingBag } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Background Decorations */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-200/40 blur-3xl" />

      {/* Hero Container */}

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-20">
        {/* Left Content */}

        <div>
          {/* Small Badge */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
            <FaShoppingBag className="text-xs" />

            New Collection Available
          </div>

          {/* Heading */}

          <h1 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Shop Your
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Favorite Products
            </span>
          </h1>

          {/* Description */}

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Discover high-quality products at great prices. Explore our
            collection and find everything you need in one place.
          </p>

          {/* Buttons */}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="group flex items-center justify-center gap-3 rounded-xl bg-slate-900 px-6 py-3.5 font-semibold text-white shadow-lg shadow-slate-900/10 transition duration-300 hover:-translate-y-1 hover:bg-blue-600"
            >
              Shop Now

              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#categories"
              className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600"
            >
              Explore Categories
            </a>
          </div>

          {/* Small Stats */}

          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <p className="text-2xl font-bold text-slate-900">1000+</p>

              <p className="text-sm text-slate-500">
                Products
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-slate-900">500+</p>

              <p className="text-sm text-slate-500">
                Happy Customers
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-slate-900">24/7</p>

              <p className="text-sm text-slate-500">
                Support
              </p>
            </div>
          </div>
        </div>

        {/* Right Visual */}

        <div className="relative mx-auto w-full max-w-xl">
          {/* Main Card */}

          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-8 shadow-2xl shadow-blue-500/20">
            {/* Decorative Circles */}

            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />

            <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-white/10" />

            {/* Product Display */}

            <div className="relative flex h-full items-center justify-center">
              <div className="flex h-64 w-64 items-center justify-center rounded-full bg-white/10 shadow-2xl backdrop-blur-sm sm:h-80 sm:w-80">
                <FaShoppingBag className="text-[8rem] text-white/90 sm:text-[10rem]" />
              </div>
            </div>

            {/* Floating Badge */}

            <div className="absolute left-6 top-8 rounded-2xl border border-white/20 bg-white/15 px-4 py-3 text-white shadow-xl backdrop-blur-md">
              <p className="text-xs text-white/70">
                Special Offer
              </p>

              <p className="text-lg font-bold">
                Up to 50% OFF
              </p>
            </div>

            {/* Floating Rating */}

            <div className="absolute bottom-8 right-6 rounded-2xl border border-white/20 bg-white/15 px-4 py-3 text-white shadow-xl backdrop-blur-md">
              <p className="text-xs text-white/70">
                Customer Rating
              </p>

              <p className="text-lg font-bold">
                ★ 4.9 / 5
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;