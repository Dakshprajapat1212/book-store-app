import React, { useState } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart, setSearchQuery } from "../redux/uiSlice";
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaSearch } from "react-icons/fa";

/**
 * Professional Navbar Component
 * 
 * FEATURES:
 * - Glass morphism effect with backdrop blur
 * - Sticky positioning with smooth transitions
 * - Cart badge with item count from Redux
 * - Active link highlighting
 * - Mobile responsive with slide-in menu
 * - Search functionality integration
 * 
 * WHY THIS DESIGN?
 * - Glass effect adds premium feel
 * - Sticky nav improves UX (always accessible)
 * - Cart badge provides immediate feedback
 * - Clean typography hierarchy
 */

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Redux selectors for cart count
  const itemCount = useSelector((state) => state.cart.itemCount);
  const reduxSearchQuery = useSelector((state) => state.ui.searchQuery);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/books", label: "Books" },
    { path: "/contact", label: "Contact" },
    { path: "/orders", label: "Orders" },
  ];

  const isActive = (path) => location.pathname === path;

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      // Update Redux state
      dispatch(setSearchQuery(searchInput.trim()));
      // Update URL search params
      setSearchParams({ search: searchInput.trim() });
      // Navigate to books page
      navigate('/books');
      // Close search bar
      setSearchOpen(false);
    }
  };

  // Sync local input with Redux state on mount and when reduxSearchQuery changes
  React.useEffect(() => {
    setSearchInput(reduxSearchQuery);
  }, [reduxSearchQuery]);

  return (
    <>
      {/* ================= PREMIUM NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 group transition-transform hover:scale-105"
          >
            <span className="text-2xl">📚</span>
            <span className="font-bold text-xl text-teal-600 tracking-tight">
              BOOKSHELL
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-teal-600"
                    : "text-gray-600 hover:text-teal-600"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-teal-500 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors text-gray-600 hover:text-teal-600"
            >
              <FaSearch size={18} />
            </button>

            {/* Cart Button */}
            <button
              onClick={() => dispatch(toggleCart())}
              className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors text-gray-600 hover:text-teal-600"
            >
              <FaShoppingCart size={18} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              )}
            </button>

            {/* User Button */}
            <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors text-gray-600 hover:text-teal-600">
              <FaUser size={18} />
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors text-gray-600"
            >
              <FaBars size={20} />
            </button>
          </div>
        </div>

        {/* Search Bar (Expandable) */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            searchOpen ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <form onSubmit={handleSearch}>
            <div className="max-w-7xl mx-auto px-6 py-3">
              <div className="relative">
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search books, authors, genres..."
                  className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-600 hover:text-teal-700"
                >
                  <FaSearch size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-80 h-full bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <span className="font-bold text-lg text-teal-600">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center text-gray-600"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-teal-50 text-teal-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-teal-600"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <hr className="my-4 border-gray-100" />

            {/* Cart & Profile */}
            <button
              onClick={() => {
                setMenuOpen(false);
                dispatch(toggleCart());
              }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-gray-600 hover:bg-gray-50 hover:text-teal-600 transition-all"
            >
              <FaShoppingCart size={18} />
              <span>Cart</span>
              {itemCount > 0 && (
                <span className="ml-auto bg-teal-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {itemCount}
                </span>
              )}
            </button>

            <button className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-gray-600 hover:bg-gray-50 hover:text-teal-600 transition-all">
              <FaUser size={18} />
              <span>Profile</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;