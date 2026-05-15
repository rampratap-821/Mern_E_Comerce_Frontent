

import React, { useContext, useState } from 'react';
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaSignOutAlt,
  FaSignInAlt,
  FaUserPlus,
  FaMobileAlt,
  FaLaptop,
  FaCamera,
  FaHeadphones,
  FaRupeeSign,
  FaHome,
  FaLess
} from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AppContext from '../Context/AppContext';
import Lottie from "lottie-react"
import shopping from '../assets/Run cycle recreated in Lottie Creator.json'

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [admin, setAdmin] = useState(false)

  const {
    setFilterData,
    products,
    Logout,
    isAuthenticated,
    cart
  } = useContext(AppContext);

  const summitHandler = (e) => {
    e.preventDefault();
    navigate(`/product/search/${searchTerm.trim()}`);
    setSearchTerm("");
  };

  const filterByCategory = (cat) => {
    setFilterData(
      products.filter(
        (item) =>
          item?.category?.toLowerCase() === cat.toLowerCase()
      )
    );
  };

  const filterByPrice = (price) => {
    setFilterData(
      products.filter((item) => item.price >= price)
    );
  };


  // admin
  const adminHandler = () => {
    setAdmin(true)
    navigate("/goToHome")
  }

  const adminBackHandler = () => {
    setAdmin(false)
    navigate("/")
  }


  return (
    <>




      {/* Main Navbar */}
      <nav className="bg-gradient-to-br from-blue-950 via-blue-700 to-cyan-500 shadow-lg sticky top-0 z-50 backdrop-blur-sm border-b border-orange-300/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">




            {/* Logo */}
            {
              admin === false ?
                <Link to="/" className="flex items-center space-x-2 group">
                  <div className="w-9 h-9  rounded-lg flex items-center justify-center  group-hover:scale-105 transition-transform duration-200">
                    <span className="text-white font-bold text-lg">
                      <Lottie
                        animationData={shopping}
                        loop={true}
                        className="w-[50px] h-[50px]"

                      />
                    </span>
                  </div>

                  <span className="text-white font-bold text-xl tracking-tight">
                   Mern-Ecomerce
                  </span>
                </Link>
                :
                <Link to={"/goToHome"} className="flex items-center space-x-2 group">

                  <span className="text-white font-bold text-xl tracking-tight">
                    Admin
                  </span>
                </Link>

            }



            {/* Desktop Search */}
            <form
              onSubmit={summitHandler}
              className="hidden md:flex items-center flex-1 max-w-md mx-8"
            >
              <div className="relative w-full">

                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-orange-100 text-sm" />
                </div>

                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white/20 border border-white/30 rounded-xl text-white placeholder-orange-100 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                />
              </div>
            </form>

            {/* Right Buttons */}
            <div className="flex items-center space-x-3">

              {isAuthenticated && (
                <>
                  {/* Cart */}
                  <div>
                    {
                      admin === false ?
                        <Link to="/cart" className="relative group">
                          <div className="p-2.5 rounded-xl bg-black/20 hover:bg-black/30 transition-all duration-200">

                            <FaShoppingCart className="text-white text-lg" />

                            {cart?.items?.length > 0 && (
                              <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full shadow-lg animate-pulse">
                                {cart?.items?.length}
                              </span>
                            )}
                          </div>
                        </Link>
                        :
                        <button onClick={adminBackHandler} className="relative group">
                          <div className="p-2.5 rounded-xl bg-black/20 hover:bg-black/30 transition-all duration-200">
                            Go To Home
                          </div>
                        </button>
                    }

                  </div>






                  {/* Profile */}
                  <div>
                    {
                      admin === false ?
                        <Link
                          to="/profile"
                          className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-slate-900 to-black hover:from-black hover:to-slate-900 transition-all duration-200 shadow-md"
                        >
                          <FaUser className="text-white text-sm" />

                          <span className="text-white font-medium hidden sm:inline">
                            Profile
                          </span>
                        </Link>
                        :
                        <Link
                          to="addToProduct"
                          className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-slate-900 to-black hover:from-black hover:to-slate-900 transition-all duration-200 shadow-md"
                        >
                          <FaUser className="text-white text-sm" />

                          <span className="text-white font-medium hidden sm:inline">
                            AddTOProduct
                          </span>
                        </Link>
                    }

                  </div>






                  {/* Logout */}
                  <div>
                    {
                      admin === false ?
                        <button
                          onClick={() => {
                            Logout();
                            navigate("/");
                          }}
                          className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-red-500/90 hover:bg-red-600 transition-all duration-200 border border-red-400/20"
                        >
                          <FaSignOutAlt className="text-white text-sm" />

                          <span className="text-white font-medium hidden sm:inline">
                            Logout
                          </span>
                        </button>
                        :
                        <Link
                          to={"/allOrders"}

                          className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-red-500/90 hover:bg-red-600 transition-all duration-200 border border-red-400/20"
                        >
                          <FaSignOutAlt className="text-white text-sm" />

                          <span className="text-white font-medium hidden sm:inline">
                            AllOrders
                          </span>
                        </Link>
                    }

                  </div>




                  {/* admin */}
                  <div>
                    {
                      admin === false ?
                        <button onClick={adminHandler}
                          className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-slate-900 to-black hover:from-black hover:to-slate-900 transition-all duration-200 shadow-md"
                        >
                          <FaUser className="text-white text-sm" />

                          <span className="text-white font-medium hidden sm:inline">
                            Admin
                          </span>
                        </button>
                        :
                        <Link
                          to={"/allUers"}
                          className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-slate-900 to-black hover:from-black hover:to-slate-900 transition-all duration-200 shadow-md"
                        >
                          <FaUser className="text-white text-sm" />

                          <span className="text-white font-medium hidden sm:inline">
                            GetAllUsers
                          </span>
                        </Link>
                    }

                  </div>

                </>
              )}

              {!isAuthenticated && (
                <>
                  {/* Login */}
                  <button
                    onClick={() => navigate("/login")}
                    className="flex items-center space-x-2 px-5 py-2 rounded-xl bg-black hover:bg-gray-900 transition-all duration-200 shadow-md"
                  >
                    <FaSignInAlt className="text-white text-sm" />

                    <span className="text-white font-medium">
                      Login
                    </span>
                  </button>

                  {/* Register */}
                  <button
                    onClick={() => navigate("/register")}
                    className="flex items-center space-x-2 px-5 py-2 rounded-xl bg-white/20 hover:bg-white/30 transition-all duration-200 border border-white/30"
                  >
                    <FaUserPlus className="text-white text-sm" />

                    <span className="text-white font-medium hidden sm:inline">
                      Register
                    </span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobile Search */}
          <form
            onSubmit={summitHandler}
            className="md:hidden pb-3"
          >
            <div className="relative w-full">

              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-orange-100 text-sm" />
              </div>

              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-xl text-white placeholder-orange-100 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
          </form>
        </div>
      </nav>

      {/* Filter Bar */}
      {location.pathname === "/" && (
        <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-16 md:top-20 z-40 shadow-sm">

          <div className="px-4 sm:px-6 lg:px-8">

            <div className="py-3 overflow-x-auto overflow-y-hidden scrollbar-hide">

              <div className="flex items-center justify-between gap-3 min-w-max">

                {/* All */}
                <button
                  onClick={() => setFilterData(products)}
                  className="flex items-center space-x-1 px-4 py-2 rounded-full bg-black  transition-all duration-200 text-sm font-medium text-white whitespace-nowrap"
                >
                  <FaHome className="text-xs" />
                  <span>All</span>
                </button>

                {/* Mobiles */}
                <button
                  onClick={() => filterByCategory("Mobiles")}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-black  transition-all duration-200 text-sm font-medium text-white whitespace-nowrap"
                >
                  <FaMobileAlt className="text-xs" />
                  <span>Mobiles</span>
                </button>

                {/* Laptops */}
                <button
                  onClick={() => filterByCategory("Laptops")}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-black  transition-all duration-200 text-sm font-medium text-white whitespace-nowrap"
                >
                  <FaLaptop className="text-xs" />
                  <span>Laptops</span>
                </button>

                {/* Cameras */}
                <button
                  onClick={() => filterByCategory("Cameras")}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-black  transition-all duration-200 text-sm font-medium text-white whitespace-nowrap"
                >
                  <FaCamera className="text-xs" />
                  <span>Cameras</span>
                </button>

                {/* Headphones */}
                <button
                  onClick={() => filterByCategory("Headphones")}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-black  transition-all duration-200 text-sm font-medium text-white whitespace-nowrap"
                >
                  <FaHeadphones className="text-xs" />
                  <span>Headphones</span>
                </button>

                {/* Divider */}
                <div className="w-px h-6 bg-orange-300 mx-1"></div>

                {/* Price Filters */}
                {[15999, 25999, 49999, 69999, 89999].map((price) => (
                  <button
                    key={price}
                    onClick={() => filterByPrice(price)}
                    className="flex items-center space-x-1 px-4 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition-all duration-200 text-sm font-medium whitespace-nowrap"
                  >
                    <FaRupeeSign className="text-xs" />

                    <span>{price.toLocaleString()}+</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hide Scrollbar */}
      <style >{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>


    </>
  );
};

export default Navbar;

