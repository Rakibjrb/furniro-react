import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import ShopPageHeader from "../components/pageComponents/shoppage/ShopPageHeader";
import InfoSection from "../components/pageComponents/shoppage/InfoSection";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <main className="bg-white">
      {/* Page Header */}
      <ShopPageHeader title="Contact" />

      {/* Contact Content Section */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header intro */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black tracking-tight mb-3 sm:mb-4">
              Get In Touch With Us
            </h2>
            <p className="text-[#9F9F9F] text-sm sm:text-base leading-relaxed">
              For more information about our products & services, please feel
              free to drop us an email. Our staff is always here to help you
              out. Do not hesitate!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
            {/* Left Column: Contact Information */}
            <div className="lg:col-span-5 flex flex-col gap-8 sm:gap-10 sm:px-6">
              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="mt-1 text-black text-xl sm:text-2xl shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-black mb-1">
                    Address
                  </h3>
                  <p className="text-black text-sm sm:text-base leading-relaxed">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="mt-1 text-black text-xl sm:text-2xl shrink-0">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-black mb-1">
                    Phone
                  </h3>
                  <p className="text-black text-sm sm:text-base">
                    Mobile: +(84) 546-6789
                  </p>
                  <p className="text-black text-sm sm:text-base">
                    Hotline: +(84) 456-6789
                  </p>
                </div>
              </div>

              {/* Working Time */}
              <div className="flex items-start gap-5">
                <div className="mt-1 text-black text-xl sm:text-2xl shrink-0">
                  <FaClock />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-black mb-1">
                    Working Time
                  </h3>
                  <p className="text-black text-sm sm:text-base">
                    Monday-Friday: 9:00 - 22:00
                  </p>
                  <p className="text-black text-sm sm:text-base">
                    Saturday-Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 sm:gap-8"
              >
                {submitted && (
                  <div className="p-4 rounded-md bg-[#FFF3E3] border border-[#B88E2F] text-[#B88E2F] font-medium text-sm sm:text-base">
                    Thank you! Your message has been sent successfully. We will
                    get back to you shortly.
                  </div>
                )}

                {/* Name */}
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="name"
                    className="text-black font-semibold text-base"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Abc"
                    className="w-full h-16 sm:h-[75px] px-6 rounded-[10px] border border-[#9F9F9F] text-black placeholder:text-[#9F9F9F] focus:outline-none focus:border-[#B88E2F] transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="email"
                    className="text-black font-semibold text-base"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Abc@def.com"
                    className="w-full h-16 sm:h-[75px] px-6 rounded-[10px] border border-[#9F9F9F] text-black placeholder:text-[#9F9F9F] focus:outline-none focus:border-[#B88E2F] transition-colors"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="subject"
                    className="text-black font-semibold text-base"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="This is an optional"
                    className="w-full h-16 sm:h-[75px] px-6 rounded-[10px] border border-[#9F9F9F] text-black placeholder:text-[#9F9F9F] focus:outline-none focus:border-[#B88E2F] transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="message"
                    className="text-black font-semibold text-base"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi! I'd like to ask about"
                    className="w-full p-6 rounded-[10px] border border-[#9F9F9F] text-black placeholder:text-[#9F9F9F] focus:outline-none focus:border-[#B88E2F] transition-colors resize-none min-h-[120px]"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#B88E2F] hover:bg-[#9c7724] text-white font-medium text-base px-16 sm:px-20 py-3.5 sm:py-4 rounded-md transition-colors duration-200 cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <InfoSection />
    </main>
  );
};

export default ContactPage;
