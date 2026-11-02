import { Link } from "react-router";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-12 pb-9">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col space-y-8">
            <h2 className="text-2xl font-bold text-black tracking-tight">Funiro.</h2>
            <address className="not-italic text-[#9F9F9F] text-base leading-6 max-w-[285px]">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </address>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 flex flex-col space-y-8">
            <span className="text-[#9F9F9F] font-medium text-base">Links</span>
            <ul className="flex flex-col space-y-6">
              <li>
                <Link to="/" className="text-black font-medium text-base hover:text-[#B88E2F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-black font-medium text-base hover:text-[#B88E2F] transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-black font-medium text-base hover:text-[#B88E2F] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-black font-medium text-base hover:text-[#B88E2F] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="lg:col-span-2 flex flex-col space-y-8">
            <span className="text-[#9F9F9F] font-medium text-base">Help</span>
            <ul className="flex flex-col space-y-6">
              <li>
                <Link to="#" className="text-black font-medium text-base hover:text-[#B88E2F] transition-colors">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link to="#" className="text-black font-medium text-base hover:text-[#B88E2F] transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="#" className="text-black font-medium text-base hover:text-[#B88E2F] transition-colors">
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 flex flex-col space-y-8">
            <span className="text-[#9F9F9F] font-medium text-base">Newsletter</span>
            <form onSubmit={handleSubmit} className="flex flex-wrap sm:flex-nowrap items-center gap-3">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full sm:w-auto text-sm text-black placeholder-[#9F9F9F] border-b border-black pb-1 focus:outline-none focus:border-[#B88E2F] transition-colors"
                required
              />
              <button
                type="submit"
                className="text-sm font-semibold text-black uppercase border-b border-black pb-1 hover:text-[#B88E2F] hover:border-[#B88E2F] transition-colors cursor-pointer shrink-0"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-[#D9D9D9]">
          <p className="text-black text-base">
            2023 furino. All rights reverved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
