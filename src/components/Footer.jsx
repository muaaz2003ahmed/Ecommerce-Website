import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a
              href="/"
              className="text-2xl font-bold tracking-tight"
            >
              Shop<span className="text-blue-500">ly</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Discover quality products, modern styles, and great
              deals all in one place. Shop your favorite products
              with ease.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-400 transition hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-400 transition hover:bg-pink-600 hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-400 transition hover:bg-sky-500 hover:text-white"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-400 transition hover:bg-slate-700 hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-400 transition hover:bg-blue-700 hover:text-white"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Shop
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#products"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  All Products
                </a>
              </li>

              <li>
                <a
                  href="#categories"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Categories
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  New Arrivals
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Best Sellers
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Support
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Help Center
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Shipping Information
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Returns & Refunds
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Stay Updated
            </h3>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              Subscribe to our newsletter for the latest products
              and special offers.
            </p>

            <form className="mt-5 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
              />

              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Shoply. All rights
              reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="transition hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="transition hover:text-white"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;