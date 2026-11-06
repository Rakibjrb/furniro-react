import { useState, useMemo } from "react";
import ProductCard from "../../ui/ProductCard";
import { PRODUCTS } from "../../../products.data";

// Helper to convert formatted price strings (e.g., "Rp 2.500.000") into numeric values
const parsePrice = (priceStr) => {
  if (!priceStr) return 0;
  const numericStr = String(priceStr).replace(/[^\d]/g, "");
  return Number(numericStr) || 0;
};

const ProductsSection = () => {
  const [itemsPerPage, setItemsPerPage] = useState("16");
  const [sortBy, setSortBy] = useState("Default");
  const [activePage, setActivePage] = useState(1);

  // Sort products based on selected criteria
  const sortedProducts = useMemo(() => {
    const list = [...PRODUCTS];

    switch (sortBy) {
      case "Price: Low to High":
        return list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      case "Price: High to Low":
        return list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      case "Newest":
        // Prioritize items with isNew: true, then by ID descending
        return list.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return b.id - a.id;
        });
      case "Name: A to Z":
        return list.sort((a, b) => a.name.localeCompare(b.name));
      case "Name: Z to A":
        return list.sort((a, b) => b.name.localeCompare(a.name));
      case "Default":
      default:
        return list.sort((a, b) => a.id - b.id);
    }
  }, [sortBy]);

  const perPageNumber = Math.max(1, Number(itemsPerPage) || sortedProducts.length);
  const totalProducts = sortedProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalProducts / perPageNumber));

  // Ensure active page stays valid when filters/page size change
  const currentPage = Math.min(activePage, totalPages);

  const startIndex = (currentPage - 1) * perPageNumber;
  const endIndex = Math.min(startIndex + perPageNumber, totalProducts);
  const showProducts = sortedProducts.slice(startIndex, endIndex);

  return (
    <section className="w-full bg-white pb-16">
      {/* Top Filter and Controls Bar */}
      <div className="w-full bg-[#F9F1E7] py-6 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Left Controls: Filter, View Toggles & Result Count */}
          <div className="flex items-center flex-wrap gap-4 sm:gap-6 text-black">
            <span className="text-sm md:text-base text-black font-normal">
              Showing {totalProducts === 0 ? 0 : startIndex + 1}–{endIndex} of {totalProducts} results
            </span>
          </div>

          {/* Right Controls: Show count & Sort By */}
          <div className="flex items-center gap-4 sm:gap-6 text-black">
            <div className="flex items-center gap-3">
              <span className="text-base md:text-xl font-normal">Show</span>
              <input
                type="text"
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(e.target.value);
                  setActivePage(1);
                }}
                className="w-12 h-12 bg-white text-center text-sm md:text-base font-normal text-[#9F9F9F] focus:outline-none focus:ring-1 focus:ring-[#B88E2F]"
              />
            </div>

            <div className="flex items-center gap-3">
              <span className="text-base md:text-xl font-normal">Short by</span>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setActivePage(1);
                }}
                className="h-12 bg-white px-4 text-sm md:text-base font-normal text-[#9F9F9F] focus:outline-none focus:ring-1 focus:ring-[#B88E2F] cursor-pointer"
              >
                <option value="Default">Default</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Newest">Newest</option>
                <option value="Name: A to Z">Name: A to Z</option>
                <option value="Name: Z to A">Name: Z to A</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {!showProducts.length ? (
          <div className="w-full h-[300px] flex justify-center items-center text-gray-500 text-lg">
            No Products Found
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {showProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-14 md:mt-16">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setActivePage(page)}
                className={`w-12 h-12 rounded-[10px] text-base md:text-xl font-normal transition-colors cursor-pointer ${
                  currentPage === page
                    ? "bg-[#B88E2F] text-white"
                    : "bg-[#F9F1E7] text-black hover:bg-[#B88E2F] hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}
            {currentPage < totalPages && (
              <button
                type="button"
                onClick={() => setActivePage((prev) => Math.min(prev + 1, totalPages))}
                className="h-12 px-6 sm:px-7 rounded-[10px] bg-[#F9F1E7] text-black text-base md:text-xl font-light hover:bg-[#B88E2F] hover:text-white transition-colors cursor-pointer"
              >
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
