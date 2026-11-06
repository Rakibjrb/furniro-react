import { Link } from "react-router";
import { FaLeaf, FaAward, FaUsers, FaArrowRight } from "react-icons/fa";
import ShopPageHeader from "../components/pageComponents/shoppage/ShopPageHeader";
import InfoSection from "../components/pageComponents/shoppage/InfoSection";
import livingImg from "../assets/images/Image-living.png";
import diningImg from "../assets/images/image-dining.png";
import bedroomImg from "../assets/images/image-bed.png";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50k+", label: "Happy Customers" },
  { value: "150+", label: "Award Nominations" },
  { value: "100%", label: "Sustainable Wood" },
];

const values = [
  {
    icon: FaAward,
    title: "Artisanal Craftsmanship",
    desc: "Every piece of furniture is handcrafted by skilled artisans who blend traditional joinery with clean contemporary ergonomics.",
  },
  {
    icon: FaLeaf,
    title: "Eco-Conscious Materials",
    desc: "We ethically source certified timber, recycled fabrics, and non-toxic coatings to protect nature while elevating your home.",
  },
  {
    icon: FaUsers,
    title: "Customer-Centric Care",
    desc: "From complimentary styling advice to lifetime customer service, our passionate team is dedicated to exceeding expectations.",
  },
];

const teamMembers = [
  {
    name: "Elena Rostova",
    role: "Lead Interior Architect",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Marcus Vance",
    role: "Master Woodcraft Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Amina Yusuf",
    role: "Head of Product Design",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
];

const AboutPage = () => {
  return (
    <main className="bg-white">
      {/* Header */}
      <ShopPageHeader title="About" />

      {/* Brand Story Section */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Story Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-[#B88E2F] font-semibold text-sm sm:text-base tracking-widest uppercase mb-2">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#333333] leading-tight mb-6">
                Designing Comfort, Crafting Timeless Homes
              </h2>
              <p className="text-[#666666] text-base sm:text-lg leading-relaxed mb-4">
                Founded with a mission to bring refined aesthetics and
                uncompromised quality into modern living spaces, Furniro has
                blossomed from a boutique design atelier into an international
                destination for premium interior furnishings.
              </p>
              <p className="text-[#898989] text-sm sm:text-base leading-relaxed mb-8">
                We believe your surroundings shape how you live, think, and
                recharge. That is why each collection is thoughtfully engineered
                for warmth, functionality, and durability that endures across
                generations.
              </p>

              <div>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 bg-[#B88E2F] hover:bg-[#9c7724] text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded transition-colors duration-200"
                >
                  Explore Collections <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </div>

            {/* Story Visuals / Collage */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="rounded-[10px] overflow-hidden aspect-[4/5] shadow-sm">
                  <img
                    src={livingImg}
                    alt="Warm living room"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="rounded-[10px] overflow-hidden aspect-square shadow-sm">
                    <img
                      src={diningImg}
                      alt="Modern dining space"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-[10px] overflow-hidden aspect-square shadow-sm">
                    <img
                      src={bedroomImg}
                      alt="Cozy bedroom retreat"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-[#FAF3EA] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#B88E2F] mb-1">
                  {item.value}
                </span>
                <span className="text-sm sm:text-base font-medium text-[#333333]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[#B88E2F] font-semibold text-sm sm:text-base tracking-widest uppercase mb-2 block">
              Core Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black tracking-tight mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-[#9F9F9F] text-sm sm:text-base leading-relaxed">
              We uphold uncompromising standards for design, materials, and
              ethical craftsmanship every step of the journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {values.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FFF3E3]/40 border border-[#F4E4D4] rounded-[10px] p-8 flex flex-col items-start hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-full bg-[#B88E2F]/10 text-[#B88E2F] flex items-center justify-center text-2xl mb-6">
                    <IconComponent />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {val.title}
                  </h3>
                  <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Creative Team Section */}
      <section className="pb-16 sm:pb-24 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
            <span className="text-[#B88E2F] font-semibold text-sm sm:text-base tracking-widest uppercase mb-2 block">
              Meet The Team
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black tracking-tight mb-4">
              Minds Behind The Craft
            </h2>
            <p className="text-[#9F9F9F] text-sm sm:text-base leading-relaxed">
              Passionate designers, builders, and specialists who turn living
              concepts into harmonious realities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center text-center bg-[#FCF8F3] rounded-[10px] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden mb-5 border-4 border-white shadow-sm">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-semibold text-[#333333]">
                  {member.name}
                </h4>
                <p className="text-sm font-medium text-[#B88E2F] mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <InfoSection />
    </main>
  );
};

export default AboutPage;
