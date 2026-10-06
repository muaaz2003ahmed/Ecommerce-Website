import CategoryCard from "./CategoryCard";

const categories = [
  {
    name: "Electronics",
    description: "Laptops, phones, accessories and more.",
  },
  {
    name: "Fashion",
    description: "Discover modern clothing and fashion items.",
  },
  {
    name: "Shoes",
    description: "Find stylish and comfortable footwear.",
  },
  {
    name: "Watches",
    description: "Explore classic and modern watches.",
  },
];

function Categories() {
  return (
    <section
      id="categories"
      className="scroll-mt-20 bg-white px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Browse Collection
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Shop By{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Category
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Explore our popular categories and discover products
            that match your style and needs.
          </p>
        </div>

        {/* Category Cards */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;