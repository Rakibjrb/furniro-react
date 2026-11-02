import heroBg from "../../../assets/images/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[716px] flex items-center justify-end overflow-hidden">
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Furniro Interior Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Hero Content Card */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-end">
        <div className="bg-[#FFF3E3] rounded-[10px] p-6 sm:p-10 lg:pt-[62px] lg:pb-[37px] lg:px-[39px] max-w-[643px] shadow-sm">
          <span className="text-[#333333] font-semibold tracking-[3px] text-sm sm:text-base uppercase mb-1 sm:mb-2 block">
            New Arrival
          </span>
          <h1 className="text-[#B88E2F] font-bold text-3xl sm:text-4xl lg:text-[52px] leading-tight lg:leading-[65px] mb-3 sm:mb-4">
            Discover Our <br /> New Collection
          </h1>
          <p className="text-[#333333] font-medium text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-10 lg:mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button
            type="button"
            className="bg-[#B88E2F] hover:bg-[#967424] text-white font-bold text-sm sm:text-base uppercase tracking-wider py-4 sm:py-5 px-10 sm:px-16 transition-colors duration-200 cursor-pointer"
          >
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
