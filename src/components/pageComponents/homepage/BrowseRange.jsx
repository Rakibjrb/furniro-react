import { Link } from "react-router";
import diningImg from "../../../assets/images/image-dining.png";
import livingImg from "../../../assets/images/Image-living.png";
import bedroomImg from "../../../assets/images/image-bed.png";

const categories = [
  {
    name: "Dining",
    image: diningImg,
    path: "/shop?category=dining",
  },
  {
    name: "Living",
    image: livingImg,
    path: "/shop?category=living",
  },
  {
    name: "Bedroom",
    image: bedroomImg,
    path: "/shop?category=bedroom",
  },
];

const BrowseRange = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#333333] tracking-tight">
            Browse The Range
          </h2>
          <p className="text-[#666666] text-sm sm:text-base mt-1 md:mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="group flex flex-col items-center text-center focus:outline-none"
            >
              <div className="w-full aspect-[381/480] overflow-hidden rounded-[10px] bg-[#F4F5F7]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-6 text-xl sm:text-2xl font-semibold text-[#333333] group-hover:text-[#B88E2F] transition-colors">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseRange;
