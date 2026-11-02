import { useState } from "react";
import { NavLink, Link } from "react-router";
import logo from "../../../assets/images/Logo.png";
import userIcon from "../../../assets/icons/mdi_account-alert-outline.png";
import searchIcon from "../../../assets/icons/akar-icons_search.png";
import heartIcon from "../../../assets/icons/akar-icons_heart.png";
import cartIcon from "../../../assets/icons/ant-design_shopping-cart-outlined.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className="w-full bg-white sticky top-0 z-40 border-b border-gray-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 md:h-24 flex items-center justify-between">
          {/* Brand / Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Furniro Logo" className="h-7 sm:h-8 md:h-9 object-contain" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors hover:text-black ${isActive ? "text-black font-semibold" : "text-[#333333]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Action Icons */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <button
              type="button"
              aria-label="Account"
              className="p-1 cursor-pointer hover:opacity-75 transition-opacity"
            >
              <img src={userIcon} alt="Account" className="w-6 h-6 object-contain" />
            </button>
            <button
              type="button"
              aria-label="Search"
              className="p-1 cursor-pointer hover:opacity-75 transition-opacity"
            >
              <img src={searchIcon} alt="Search" className="w-6 h-6 object-contain" />
            </button>
            <button
              type="button"
              aria-label="Wishlist"
              className="p-1 cursor-pointer hover:opacity-75 transition-opacity"
            >
              <img src={heartIcon} alt="Wishlist" className="w-6 h-6 object-contain" />
            </button>
            <button
              type="button"
              aria-label="Cart"
              className="p-1 cursor-pointer hover:opacity-75 transition-opacity"
            >
              <img src={cartIcon} alt="Cart" className="w-6 h-6 object-contain" />
            </button>
          </div>

          {/* Mobile & Tablet Right Controls */}
          <div className="flex lg:hidden items-center gap-3 sm:gap-4">
            {/* Quick-access Cart Icon on mobile/tablet */}
            <button
              type="button"
              aria-label="Cart"
              className="p-2 cursor-pointer hover:opacity-75 transition-opacity"
            >
              <img src={cartIcon} alt="Cart" className="w-6 h-6 object-contain" />
            </button>

            {/* Three Dot Menu Toggle Button */}
            <button
              type="button"
              onClick={toggleSidebar}
              aria-label="Open menu"
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="12" cy="19" r="2" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop for Mobile / Tablet Sidebar */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-xs z-50 transition-opacity duration-300 lg:hidden ${isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        aria-label="Mobile Navigation"
      >
        <div>
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <Link to="/" onClick={closeSidebar}>
              <img src={logo} alt="Furniro Logo" className="h-7 object-contain" />
            </Link>
            <button
              type="button"
              onClick={closeSidebar}
              aria-label="Close menu"
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-black transition-colors cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col p-5 gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive
                    ? "bg-[#FAF3EA] text-[#B88E2F] font-semibold"
                    : "text-gray-700 hover:bg-gray-50 hover:text-black"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer with Action Icons */}
        <div className="hidden p-5 border-t border-gray-100 bg-gray-50/50">
          <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
            Quick Actions
          </p>
          <div className="grid grid-cols-4 gap-2 text-center">
            <button
              type="button"
              aria-label="Account"
              className="flex flex-col items-center justify-center p-3 rounded-lg bg-white border border-gray-100 shadow-2xs hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <img src={userIcon} alt="Account" className="w-5 h-5 object-contain" />
              <span className="text-[11px] text-gray-600 mt-1">Profile</span>
            </button>
            <button
              type="button"
              aria-label="Search"
              className="flex flex-col items-center justify-center p-3 rounded-lg bg-white border border-gray-100 shadow-2xs hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <img src={searchIcon} alt="Search" className="w-5 h-5 object-contain" />
              <span className="text-[11px] text-gray-600 mt-1">Search</span>
            </button>
            <button
              type="button"
              aria-label="Wishlist"
              className="flex flex-col items-center justify-center p-3 rounded-lg bg-white border border-gray-100 shadow-2xs hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <img src={heartIcon} alt="Wishlist" className="w-5 h-5 object-contain" />
              <span className="text-[11px] text-gray-600 mt-1">Saved</span>
            </button>
            <button
              type="button"
              aria-label="Cart"
              className="flex flex-col items-center justify-center p-3 rounded-lg bg-white border border-gray-100 shadow-2xs hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <img src={cartIcon} alt="Cart" className="w-5 h-5 object-contain" />
              <span className="text-[11px] text-gray-600 mt-1">Cart</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
