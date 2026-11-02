import { useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { BsGridFill, BsViewList } from "react-icons/bs";
import ProductCard from "../../ui/ProductCard";
import { PRODUCTS } from "../../../products.data";

const ProductsSection = () => {
  const [itemsPerPage, setItemsPerPage] = useState("16");
  const [sortBy, setSortBy] = useState("Default");
  const [activePage, setActivePage] = useState(1);

  return (
    <section className="w-full bg-white pb-16">
      {/* Top Filter and Controls Bar */}
      <div className="w-full bg-[#F9F1E7] py-6 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Left Controls: Filter, View Toggles & Result Count */}
          <div className="flex items-center flex-wrap gap-4 sm:gap-6 text-black">
            <button
              type="button"
              className="flex items-center gap-2 text-base md:text-xl font-normal hover:text-[#B88E2F] transition-colors cursor-pointer"
            >
              <HiOutlineAdjustmentsHorizontal className="w-5 h-5 md:w-6 md:h-6" />
              <span>Filter</span>
            </button>

            <div className="flex items-center gap-4">
              <button
                type="button"
                aria-label="Grid View"
                className="text-black hover:text-[#B88E2F] transition-colors cursor-pointer"
              >
                <BsGridFill className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                type="button"
                aria-label="List View"
                className="text-black hover:text-[#B88E2F] transition-colors cursor-pointer"
              >
                <BsViewList className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            <div className="h-7 w-[1px] bg-[#9F9F9F] hidden sm:block" />

            <span className="text-sm md:text-base text-black font-normal">
              Showing 1–16 of 32 results
            </span>
          </div>

          {/* Right Controls: Show count & Sort By */}
          <div className="flex items-center gap-4 sm:gap-6 text-black">
            <div className="flex items-center gap-3">
              <span className="text-base md:text-xl font-normal">Show</span>
              <input
                type="text"
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(e.target.value)}
                className="w-12 h-12 bg-white text-center text-sm md:text-base font-normal text-[#9F9F9F] focus:outline-none focus:ring-1 focus:ring-[#B88E2F]"
              />
            </div>

            <div className="flex items-center gap-3">
              <span className="text-base md:text-xl font-normal">Short by</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-12 bg-white px-4 text-sm md:text-base font-normal text-[#9F9F9F] focus:outline-none focus:ring-1 focus:ring-[#B88E2F] cursor-pointer"
              >
                <option value="Default">Default</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Newest">Newest</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-14 md:mt-16">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setActivePage(page)}
              className={`w-12 h-12 rounded-[10px] text-base md:text-xl font-normal transition-colors cursor-pointer ${
                activePage === page
                  ? "bg-[#B88E2F] text-white"
                  : "bg-[#F9F1E7] text-black hover:bg-[#B88E2F] hover:text-white"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setActivePage((prev) => (prev < 3 ? prev + 1 : 1))}
            className="h-12 px-6 sm:px-7 rounded-[10px] bg-[#F9F1E7] text-black text-base md:text-xl font-light hover:bg-[#B88E2F] hover:text-white transition-colors cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
