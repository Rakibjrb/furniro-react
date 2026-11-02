import { useState } from "react";
import { NavLink, Link } from "react-router";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import logo from "../../../assets/images/Logo.png";
import userIcon from "../../../assets/icons/mdi_account-alert-outline.png";
import searchIcon from "../../../assets/icons/akar-icons_search.png";
import heartIcon from "../../../assets/icons/akar-icons_heart.png";
import cartIcon from "../../../assets/icons/ant-design_shopping-cart-outlined.png";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const ACTION_ITEMS = [
  { label: "Profile", icon: userIcon, ariaLabel: "Account" },
  { label: "Search", icon: searchIcon, ariaLabel: "Search" },
  { label: "Saved", icon: heartIcon, ariaLabel: "Wishlist" },
  { label: "Cart", icon: cartIcon, ariaLabel: "Cart" },
];

// Reusable action button for Desktop header
const NavIconButton = ({ icon, ariaLabel, onClick, className = "" }) => (
  <button
    type="button"
    aria-label={ariaLabel}
    onClick={onClick}
    className={`p-1 cursor-pointer hover:opacity-75 transition-opacity ${className}`}
  >
    <img src={icon} alt={ariaLabel} className="w-6 h-6 object-contain" />
  </button>
);

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

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
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors hover:text-black ${
                    isActive ? "text-black font-semibold" : "text-[#333333]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Action Icons */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {ACTION_ITEMS.map((item) => (
              <NavIconButton
                key={item.label}
                icon={item.icon}
                ariaLabel={item.ariaLabel}
              />
            ))}
          </div>

          {/* Mobile & Tablet Right Controls */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            {/* Quick Cart button for mobile header */}
            <NavIconButton
              icon={cartIcon}
              ariaLabel="Cart"
              className="p-2"
            />

            {/* Three-Dot Menu Trigger */}
            <button
              type="button"
              onClick={toggleSidebar}
              aria-label="Open menu"
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <HiOutlineDotsVertical className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop for Mobile / Tablet Sidebar */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-xs z-50 transition-opacity duration-300 lg:hidden ${
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
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
              <IoClose className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col p-5 gap-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
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
      </aside>
    </>
  );
};

export default Navbar;
