import { IoShareSocialSharp } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa6";

const ProductCard = ({ product }) => {
    return (
        <div className="group relative bg-[#F4F5F7] overflow-hidden flex flex-col transition-shadow hover:shadow-lg">
            {/* Product Image Container */}
            <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badges (Discount / New) */}
                {product.discountBadge && (
                    <span className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E97171] text-white text-xs sm:text-sm font-medium flex items-center justify-center z-10">
                        {product.discountBadge}
                    </span>
                )}
                {product.isNew && (
                    <span className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2EC1AC] text-white text-xs sm:text-sm font-medium flex items-center justify-center z-10">
                        New
                    </span>
                )}

                {/* Hover Overlay with Action Buttons */}
                <div className="absolute inset-0 bg-[#3A3A3A]/70 flex flex-col items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <button
                        type="button"
                        className="w-48 max-w-full py-3 bg-white text-[#B88E2F] font-semibold text-sm hover:bg-[#B88E2F] hover:text-white transition-colors cursor-pointer shadow-sm"
                    >
                        Add to cart
                    </button>

                    <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 text-white text-sm font-semibold">
                        <button
                            type="button"
                            className="flex items-center gap-1.5 hover:text-[#B88E2F] transition-colors cursor-pointer"
                        >
                            <IoShareSocialSharp className="w-4 h-4" />
                            <span>Share</span>
                        </button>

                        <button
                            type="button"
                            className="flex items-center gap-1.5 hover:text-[#B88E2F] transition-colors cursor-pointer"
                        >
                            <GoArrowSwitch className="w-4 h-4" />
                            <span>Compare</span>
                        </button>

                        <button
                            type="button"
                            className="flex items-center gap-1.5 hover:text-[#B88E2F] transition-colors cursor-pointer"
                        >
                            <FaRegHeart className="w-4 h-4" />
                            <span>Like</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Details Content */}
            <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
                <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#3A3A3A] truncate">
                        {product.name}
                    </h3>
                    <p className="text-sm sm:text-base text-[#898989] font-medium mt-1">
                        {product.subtitle}
                    </p>
                </div>

                <div className="flex items-center justify-between gap-2 mt-3 flex-wrap">
                    <span className="text-base sm:text-xl font-semibold text-[#3A3A3A]">
                        {product.price}
                    </span>
                    {product.originalPrice && (
                        <span className="text-xs sm:text-sm text-[#B0B0B0] line-through font-normal">
                            {product.originalPrice}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
