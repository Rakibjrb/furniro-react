import { Link } from "react-router";
import headerBg from "../../../assets/images/page-header-bg.png";

const ShopPageHeader = ({ title = "Shop" }) => {
  return (
    <section className="relative w-full h-64 sm:h-72 md:h-80 flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur / Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${headerBg})` }}
      />
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black tracking-tight mb-2">
          {title}
        </h1>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-sm sm:text-base">
          <Link
            to="/"
            className="font-medium text-black hover:text-[#B88E2F] transition-colors"
          >
            Home
          </Link>
          <span className="text-gray-400 font-semibold select-none">
            &gt;
          </span>
          <span className="font-light text-gray-700">
            {title}
          </span>
        </nav>
      </div>
    </section>
  );
};

export default ShopPageHeader;
