import {
  FaLaptop,
  FaTshirt,
  FaShoePrints,
  FaClock,
} from "react-icons/fa";

const categoryIcons = {
  Electronics: FaLaptop,
  Fashion: FaTshirt,
  Shoes: FaShoePrints,
  Watches: FaClock,
};

function CategoryCard({ name, description }) {
  const Icon = categoryIcons[name];

  return (
    <a
      href="#products"
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 text-2xl text-blue-600 transition-all duration-300 group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white">
        <Icon />
      </div>

      <h3 className="text-lg font-bold text-slate-900">
        {name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <span className="mt-4 inline-block text-sm font-semibold text-blue-600">
        Explore →
      </span>
    </a>
  );
}

export default CategoryCard;