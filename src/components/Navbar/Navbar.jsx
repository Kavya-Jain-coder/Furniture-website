import React, { useState, useRef, useEffect } from "react";
import { FaCaretDown, FaCartShopping, FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useCart } from "../../Context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

const Navbar = () => {
  const { cartItems } = useCart();
  const { user } = useAuth();
  const dropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-gray-900 text-white fixed w-full z-[10000] shadow-md">
      <div className="flex justify-between items-center py-4 px-4 sm:px-[10.2rem]">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-[50px]" />
          <Link
            to="/"
            className="text-[#f42c37] font-semibold tracking-widest text-2xl sm:text-3xl hover:text-white duration-200"
          >
            FurnX
          </Link>
        </div>

        <ul className="hidden lg:flex gap-6 lg:gap-15 items-center text-xl font-semibold text-gray-500">
          <li>
            <NavLink to="/" className={(e)=>{return e.isActive? "text-white underline text-[1.5rem]" : "hover:text-white"}}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/furnitures" className={(e)=>{return e.isActive? "text-white underline text-[1.5rem]" : "hover:text-white"}}>
              Furnitures
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={(e)=>{return e.isActive? "text-white underline text-[1.5rem]" : "hover:text-white"}}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs2" className={(e)=>{return e.isActive? "text-white underline text-[1.5rem]" : "hover:text-white"}}>
              Blogs
            </NavLink>
          </li>

          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1 hover:text-white"
            >
              Quick Links
              <FaCaretDown
                className={`transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full mt-2 left-0 w-48 bg-gray-900 rounded-md z-50 py-2">
                {[
                  ["Trending Products", "/products"],
                  ["Chairs", "/chairs"],
                  ["Beds", "/bed"],
                  ["Sofas", "/sofaset"],
                  ["Tables", "/table"],
                  ["TV Units", "/TvUnit"],
                ].map(([label, path]) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setDropdownOpen(false)}
                    className={(e)=>{return e.isActive?"block px-2 py-3 text-[18px] bg-[#f42c37]/20 text-white rounded-md":"block px-2 py-3 text-[18px] text-gray-500 hover:text-white rounded-md transition duration-300"}}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            )}
          </li>
        </ul>

        <div className="flex items-center gap-1 md:gap-4 ">
          <NavLink to="/cart" className={(e)=>{return e.isActive? "relative p-3 text-white  text-2xl":"relative p-2 text-gray-400 text-xl "}}>
            <FaCartShopping className=" hover:text-white cursor-pointer" />
            {totalQuantity > 0 && (
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                {totalQuantity}
              </div>
            )}
          </NavLink>

          {user ? (
            <button
              onClick={() => signOut(auth)}
              className="bg-[#f42c37] text-white px-4 py-2 rounded-full text-sm hover:bg-red-600 duration-300"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm px-4 py-2 border border-white rounded-full hover:bg-white hover:text-gray-900 duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-sm px-4 py-2 bg-[#f42c37] text-white rounded-full hover:bg-red-600 duration-300"
              >
                Signup
              </Link>
            </>
          )}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white text-2xl lg:hidden"
          >
            {mobileOpen ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-gray-800 px-6 py-4 space-y-4 font-medium text-gray-300">
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className={(e)=>{return e.isActive? "block px-3 py-2 bg-[#f42c37]/20 text-white":"block px-3 py-2 hover:text-white"}}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/furnitures" className={(e)=>{return e.isActive? "block px-3 py-2 bg-[#f42c37]/20 text-white":"block px-3 py-2 hover:text-white"}}>
                Furnitures
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={(e)=>{return e.isActive? "block px-3 py-2 bg-[#f42c37]/20 text-white":"block px-3 py-2 hover:text-white"}}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs2" className={(e)=>{return e.isActive? "block px-3 py-2 bg-[#f42c37]/20 text-white":"block px-3 py-2 hover:text-white"}}>
                Blogs
              </NavLink>
            </li>
            <li className="pt-2 border-t border-gray-700">Quick Links</li>
            {[
              ["Trending Products", "/products"],
              ["Chairs", "/chairs"],
              ["Beds", "/bed"],
              ["Sofas", "/sofaset"],
              ["Tables", "/table"],
              ["TV Units", "/TvUnit"],
            ].map(([label, path]) => (
              <li key={path}>
                <NavLink to={path} className={(e)=>{return e.isActive? "block px-3 py-2 bg-[#f42c37]/20 text-white":"block px-3 py-2 hover:text-white"}}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t border-gray-700">
            {user ? (
              <button
                onClick={() => signOut(auth)}
                className="bg-[#f42c37] text-white w-full py-2 rounded-full hover:bg-red-600 duration-300"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block text-center border border-white py-2 rounded-full hover:bg-white hover:text-gray-900 duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block text-center bg-[#f42c37] py-2 rounded-full hover:bg-red-600 duration-300 mt-2"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
