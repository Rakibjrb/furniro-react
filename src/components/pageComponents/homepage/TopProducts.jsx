import { useState } from "react";
import diningImg from "../../../assets/images/image-dining.png";
import ProductCard from "../../ui/ProductCard";

// Sample product data based on the design reference
const PRODUCTS = [
    {
        id: 1,
        name: "Syltherine",
        subtitle: "Stylish cafe chair",
        price: "Rp 2.500.000",
        originalPrice: "Rp 3.500.000",
        discountBadge: "-30%",
        image: diningImg,
    },
    {
        id: 2,
        name: "Leviosa",
        subtitle: "Stylish cafe chair",
        price: "Rp 2.500.000",
        image: diningImg,
    },
    {
        id: 3,
        name: "Lolito",
        subtitle: "Luxury big sofa",
        price: "Rp 7.000.000",
        originalPrice: "Rp 14.000.000",
        discountBadge: "-50%",
        image: diningImg,
    },
    {
        id: 4,
        name: "Respira",
        subtitle: "Outdoor bar table and stool",
        price: "Rp 500.000",
        isNew: true,
        image: diningImg,
    },
    {
        id: 5,
        name: "Grifo",
        subtitle: "Night lamp",
        price: "Rp 1.500.000",
        image: diningImg,
    },
    {
        id: 6,
        name: "Muggo",
        subtitle: "Small mug",
        price: "Rp 150.000",
        isNew: true,
        image: diningImg,
    },
    {
        id: 7,
        name: "Pingky",
        subtitle: "Cute bed set",
        price: "Rp 7.000.000",
        originalPrice: "Rp 14.000.000",
        discountBadge: "-50%",
        image: diningImg,
    },
    {
        id: 8,
        name: "Potty",
        subtitle: "Minimalist flower pot",
        price: "Rp 500.000",
        isNew: true,
        image: diningImg,
    },
    {
        id: 9,
        name: "Grifo",
        subtitle: "Night lamp",
        price: "Rp 1.500.000",
        image: diningImg,
    },
    {
        id: 10,
        name: "Muggo",
        subtitle: "Small mug",
        price: "Rp 150.000",
        isNew: true,
        image: diningImg,
    },
    {
        id: 11,
        name: "Pingky",
        subtitle: "Cute bed set",
        price: "Rp 7.000.000",
        originalPrice: "Rp 14.000.000",
        discountBadge: "-50%",
        image: diningImg,
    },
    {
        id: 12,
        name: "Potty",
        subtitle: "Minimalist flower pot",
        price: "Rp 500.000",
        isNew: true,
        image: diningImg,
    },
];

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
