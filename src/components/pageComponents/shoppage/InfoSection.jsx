import trophyIcon from "../../../assets/icons/trophy.png";
import guaranteeIcon from "../../../assets/icons/guarantee.png";
import shippingIcon from "../../../assets/icons/shipping.png";
import customerSupportIcon from "../../../assets/icons/customer-support.png";

const features = [
  {
    icon: trophyIcon,
    title: "High Quality",
    subtitle: "crafted from top materials",
  },
  {
    icon: guaranteeIcon,
    title: "Warranty Protection",
    subtitle: "Over 2 years",
  },
  {
    icon: shippingIcon,
    title: "Free Shipping",
    subtitle: "Order over 150 $",
  },
  {
    icon: customerSupportIcon,
    title: "24 / 7 Support",
    subtitle: "Dedicated support",
  },
];

const InfoSection = () => {
  return (
    <section className="w-full bg-[#FAF3EA] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-12 h-12 md:w-14 md:h-14 object-contain shrink-0"
              />
              <div className="flex flex-col">
                <h4 className="text-[#242424] text-lg sm:text-xl lg:text-[25px] font-semibold leading-tight">
                  {feature.title}
                </h4>
                <p className="text-[#898989] text-sm sm:text-base lg:text-lg font-medium mt-1">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
