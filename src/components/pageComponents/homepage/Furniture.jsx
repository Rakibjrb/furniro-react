import bedroomImg from "../../../assets/images/image-bed.png";
import diningImg from "../../../assets/images/image-dining.png";
import livingImg from "../../../assets/images/image-living.png";

const Furniture = () => {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      {/* Section Header */}
      <div className="text-center px-4 mb-6 md:mb-10">
        <p className="text-sm sm:text-base md:text-lg font-semibold text-[#616161]">
          Share your setup with
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3A3A3A] mt-1">
          #FuniroFurniture
        </h2>
      </div>

      {/* Masonry / Collage Gallery Grid */}
      <div className="w-full max-w-[1780px] mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
          {/* Left Column Group */}
          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4">
            {/* Top row of left side */}
            <div className="grid grid-cols-12 gap-3 sm:gap-4 items-end">
              <div className="col-span-3 sm:col-span-4 overflow-hidden group">
                <img
                  src={bedroomImg}
                  alt="Furniture setup"
                  className="w-full h-48 sm:h-64 md:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-sm"
                />
              </div>
              <div className="col-span-9 sm:col-span-8 overflow-hidden group">
                <img
                  src={diningImg}
                  alt="Furniture workspace setup"
                  className="w-full h-40 sm:h-52 md:h-60 object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-sm"
                />
              </div>
            </div>

            {/* Bottom row of left side */}
            <div className="grid grid-cols-12 gap-3 sm:gap-4 items-start">
              <div className="col-span-4 sm:col-span-5 overflow-hidden group">
                <img
                  src={livingImg}
                  alt="Furniture chair setup"
                  className="w-full h-48 sm:h-60 md:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-sm"
                />
              </div>
              <div className="col-span-8 sm:col-span-7 overflow-hidden group">
                <img
                  src={bedroomImg}
                  alt="Furniture stool and decor"
                  className="w-full h-40 sm:h-48 md:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-sm"
                />
              </div>
            </div>
          </div>

          {/* Center Feature Column */}
          <div className="md:col-span-2 overflow-hidden group flex justify-center">
            <img
              src={diningImg}
              alt="Dining room centerpiece"
              className="w-full h-64 sm:h-80 md:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-sm shadow-xs"
            />
          </div>

          {/* Right Column Group */}
          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4">
            {/* Top row of right side */}
            <div className="grid grid-cols-12 gap-3 sm:gap-4 items-end">
              <div className="col-span-7 overflow-hidden group">
                <img
                  src={livingImg}
                  alt="Bedroom furniture setup"
                  className="w-full h-48 sm:h-64 md:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-sm"
                />
              </div>
              <div className="col-span-5 overflow-hidden group">
                <img
                  src={bedroomImg}
                  alt="Dining table brick wall setup"
                  className="w-full h-56 sm:h-72 md:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-sm"
                />
              </div>
            </div>

            {/* Bottom row of right side */}
            <div className="grid grid-cols-12 gap-3 sm:gap-4 items-start">
              <div className="col-span-5 sm:col-span-6 overflow-hidden group">
                <img
                  src={diningImg}
                  alt="Framed wall art setup"
                  className="w-full h-40 sm:h-48 md:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-sm"
                />
              </div>
              <div className="col-span-7 sm:col-span-6 overflow-hidden group">
                <img
                  src={livingImg}
                  alt="Kitchen rack setup"
                  className="w-full h-40 sm:h-48 md:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Furniture;
