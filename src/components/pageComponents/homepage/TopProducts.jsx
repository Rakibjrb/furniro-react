import { useState } from "react";
import ProductCard from "../../ui/ProductCard";
import { PRODUCTS } from "../../../products.data";

const INITIAL_COUNT = 8;

const TopProducts = () => {
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

    const handleToggleShow = () => {
        if (visibleCount >= PRODUCTS.length) {
            setVisibleCount(INITIAL_COUNT);
        } else {
            setVisibleCount(PRODUCTS.length);
        }
    };

    const displayedProducts = PRODUCTS.slice(0, visibleCount);
    const hasMore = visibleCount < PRODUCTS.length;

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                {/* Section Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#3A3A3A] mb-8 md:mb-12">
                    Our Products
                </h2>

                {/* Products Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {displayedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Show More / Show Less Action */}
                <div className="mt-8 md:mt-12 text-center">
                    <button
                        type="button"
                        onClick={handleToggleShow}
                        className="px-12 sm:px-16 py-3 border border-[#B88E2F] text-[#B88E2F] font-semibold text-sm sm:text-base hover:bg-[#B88E2F] hover:text-white transition-all cursor-pointer"
                    >
                        {hasMore ? "Show More" : "Show Less"}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TopProducts;
