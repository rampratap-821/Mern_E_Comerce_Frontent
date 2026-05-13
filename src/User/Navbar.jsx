

// import React, { useContext, useState } from 'react';
// import {
//   FaSearch,
//   FaShoppingCart,
//   FaUser,
//   FaSignOutAlt,
//   FaSignInAlt,
//   FaUserPlus,
//   FaMobileAlt,
//   FaLaptop,
//   FaCamera,
//   FaHeadphones,
//   FaRupeeSign,
//   FaHome,
//   FaLess
// } from 'react-icons/fa';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import AppContext from '../Context/AppContext';
// import Lottie from "lottie-react"
// import shopping from '../assets/Shopping Cart Loader.json'

// const Navbar = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [admin, setAdmin] = useState(false)

//   const {
//     setFilterData,
//     products,
//     Logout,
//     isAuthenticated,
//     cart
//   } = useContext(AppContext);

//   const summitHandler = (e) => {
//     e.preventDefault();
//     navigate(`/product/search/${searchTerm.trim()}`);
//     setSearchTerm("");
//   };

//   const filterByCategory = (cat) => {
//     setFilterData(
//       products.filter(
//         (item) =>
//           item?.category?.toLowerCase() === cat.toLowerCase()
//       )
//     );
//   };

//   const filterByPrice = (price) => {
//     setFilterData(
//       products.filter((item) => item.price >= price)
//     );
//   };


//   // admin
//   const adminHandler = () => {
//     setAdmin(true)
//     navigate("/goToHome")
//   }

//   const adminBackHandler = () => {
//     setAdmin(false)
//     navigate("/")
//   }


//   return (
//     <>




//       {/* Main Navbar */}
//       <nav className="bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-600 shadow-lg sticky top-0 z-50 backdrop-blur-sm border-b border-orange-300/20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16 md:h-20">




//             {/* Logo */}
//             {
//               admin === false ?
//                 <Link to="/" className="flex items-center space-x-2 group">
//                   <div className="w-9 h-9  rounded-lg flex items-center justify-center  group-hover:scale-105 transition-transform duration-200">
//                     <span className="text-white font-bold text-lg">
//                       <Lottie
//                         animationData={shopping}
//                         loop={true}
//                         className="w-[50px] h-[50px]"

//                       />
//                     </span>
//                   </div>

//                   <span className="text-white font-bold text-xl tracking-tight">
//                    Mern-Ecomerce
//                   </span>
//                 </Link>
//                 :
//                 <Link to={"/goToHome"} className="flex items-center space-x-2 group">

//                   <span className="text-white font-bold text-xl tracking-tight">
//                     Admin
//                   </span>
//                 </Link>

//             }



//             {/* Desktop Search */}
//             <form
//               onSubmit={summitHandler}
//               className="hidden md:flex items-center flex-1 max-w-md mx-8"
//             >
//               <div className="relative w-full">

//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaSearch className="text-orange-100 text-sm" />
//                 </div>

//                 <input
//                   type="text"
//                   placeholder="Search products..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2.5 bg-white/20 border border-white/30 rounded-xl text-white placeholder-orange-100 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
//                 />
//               </div>
//             </form>

//             {/* Right Buttons */}
//             <div className="flex items-center space-x-3">

//               {isAuthenticated && (
//                 <>
//                   {/* Cart */}
//                   <div>
//                     {
//                       admin === false ?
//                         <Link to="/cart" className="relative group">
//                           <div className="p-2.5 rounded-xl bg-black/20 hover:bg-black/30 transition-all duration-200">

//                             <FaShoppingCart className="text-white text-lg" />

//                             {cart?.items?.length > 0 && (
//                               <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full shadow-lg animate-pulse">
//                                 {cart?.items?.length}
//                               </span>
//                             )}
//                           </div>
//                         </Link>
//                         :
//                         <button onClick={adminBackHandler} className="relative group">
//                           <div className="p-2.5 rounded-xl bg-black/20 hover:bg-black/30 transition-all duration-200">
//                             Go To Home
//                           </div>
//                         </button>
//                     }

//                   </div>






//                   {/* Profile */}
//                   <div>
//                     {
//                       admin === false ?
//                         <Link
//                           to="/profile"
//                           className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-slate-900 to-black hover:from-black hover:to-slate-900 transition-all duration-200 shadow-md"
//                         >
//                           <FaUser className="text-white text-sm" />

//                           <span className="text-white font-medium hidden sm:inline">
//                             Profile
//                           </span>
//                         </Link>
//                         :
//                         <Link
//                           to="addToProduct"
//                           className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-slate-900 to-black hover:from-black hover:to-slate-900 transition-all duration-200 shadow-md"
//                         >
//                           <FaUser className="text-white text-sm" />

//                           <span className="text-white font-medium hidden sm:inline">
//                             AddTOProduct
//                           </span>
//                         </Link>
//                     }

//                   </div>






//                   {/* Logout */}
//                   <div>
//                     {
//                       admin === false ?
//                         <button
//                           onClick={() => {
//                             Logout();
//                             navigate("/");
//                           }}
//                           className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-red-500/90 hover:bg-red-600 transition-all duration-200 border border-red-400/20"
//                         >
//                           <FaSignOutAlt className="text-white text-sm" />

//                           <span className="text-white font-medium hidden sm:inline">
//                             Logout
//                           </span>
//                         </button>
//                         :
//                         <Link
//                           to={"/allOrders"}

//                           className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-red-500/90 hover:bg-red-600 transition-all duration-200 border border-red-400/20"
//                         >
//                           <FaSignOutAlt className="text-white text-sm" />

//                           <span className="text-white font-medium hidden sm:inline">
//                             AllOrders
//                           </span>
//                         </Link>
//                     }

//                   </div>




//                   {/* admin */}
//                   <div>
//                     {
//                       admin === false ?
//                         <button onClick={adminHandler}
//                           className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-slate-900 to-black hover:from-black hover:to-slate-900 transition-all duration-200 shadow-md"
//                         >
//                           <FaUser className="text-white text-sm" />

//                           <span className="text-white font-medium hidden sm:inline">
//                             Admin
//                           </span>
//                         </button>
//                         :
//                         <Link
//                           to={"/allUers"}
//                           className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-slate-900 to-black hover:from-black hover:to-slate-900 transition-all duration-200 shadow-md"
//                         >
//                           <FaUser className="text-white text-sm" />

//                           <span className="text-white font-medium hidden sm:inline">
//                             GetAllUsers
//                           </span>
//                         </Link>
//                     }

//                   </div>

//                 </>
//               )}

//               {!isAuthenticated && (
//                 <>
//                   {/* Login */}
//                   <button
//                     onClick={() => navigate("/login")}
//                     className="flex items-center space-x-2 px-5 py-2 rounded-xl bg-black hover:bg-gray-900 transition-all duration-200 shadow-md"
//                   >
//                     <FaSignInAlt className="text-white text-sm" />

//                     <span className="text-white font-medium">
//                       Login
//                     </span>
//                   </button>

//                   {/* Register */}
//                   <button
//                     onClick={() => navigate("/register")}
//                     className="flex items-center space-x-2 px-5 py-2 rounded-xl bg-white/20 hover:bg-white/30 transition-all duration-200 border border-white/30"
//                   >
//                     <FaUserPlus className="text-white text-sm" />

//                     <span className="text-white font-medium hidden sm:inline">
//                       Register
//                     </span>
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Mobile Search */}
//           <form
//             onSubmit={summitHandler}
//             className="md:hidden pb-3"
//           >
//             <div className="relative w-full">

//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaSearch className="text-orange-100 text-sm" />
//               </div>

//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-xl text-white placeholder-orange-100 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
//               />
//             </div>
//           </form>
//         </div>
//       </nav>

//       {/* Filter Bar */}
//       {location.pathname === "/" && (
//         <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-16 md:top-20 z-40 shadow-sm">

//           <div className="px-4 sm:px-6 lg:px-8">

//             <div className="py-3 overflow-x-auto overflow-y-hidden scrollbar-hide">

//               <div className="flex items-center justify-between gap-3 min-w-max">

//                 {/* All */}
//                 <button
//                   onClick={() => setFilterData(products)}
//                   className="flex items-center space-x-1 px-4 py-2 rounded-full bg-orange-100 hover:bg-orange-200 transition-all duration-200 text-sm font-medium text-orange-700 whitespace-nowrap"
//                 >
//                   <FaHome className="text-xs" />
//                   <span>All</span>
//                 </button>

//                 {/* Mobiles */}
//                 <button
//                   onClick={() => filterByCategory("Mobiles")}
//                   className="flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-100 hover:bg-orange-200 transition-all duration-200 text-sm font-medium text-orange-700 whitespace-nowrap"
//                 >
//                   <FaMobileAlt className="text-xs" />
//                   <span>Mobiles</span>
//                 </button>

//                 {/* Laptops */}
//                 <button
//                   onClick={() => filterByCategory("Laptops")}
//                   className="flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-100 hover:bg-orange-200 transition-all duration-200 text-sm font-medium text-orange-700 whitespace-nowrap"
//                 >
//                   <FaLaptop className="text-xs" />
//                   <span>Laptops</span>
//                 </button>

//                 {/* Cameras */}
//                 <button
//                   onClick={() => filterByCategory("Cameras")}
//                   className="flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-100 hover:bg-orange-200 transition-all duration-200 text-sm font-medium text-orange-700 whitespace-nowrap"
//                 >
//                   <FaCamera className="text-xs" />
//                   <span>Cameras</span>
//                 </button>

//                 {/* Headphones */}
//                 <button
//                   onClick={() => filterByCategory("Headphones")}
//                   className="flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-100 hover:bg-orange-200 transition-all duration-200 text-sm font-medium text-orange-700 whitespace-nowrap"
//                 >
//                   <FaHeadphones className="text-xs" />
//                   <span>Headphones</span>
//                 </button>

//                 {/* Divider */}
//                 <div className="w-px h-6 bg-orange-300 mx-1"></div>

//                 {/* Price Filters */}
//                 {[15999, 25999, 49999, 69999, 89999].map((price) => (
//                   <button
//                     key={price}
//                     onClick={() => filterByPrice(price)}
//                     className="flex items-center space-x-1 px-4 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition-all duration-200 text-sm font-medium whitespace-nowrap"
//                   >
//                     <FaRupeeSign className="text-xs" />

//                     <span>{price.toLocaleString()}+</span>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Hide Scrollbar */}
//       <style >{`
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }

//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>


//     </>
//   );
// };

// export default Navbar;


import React, { useContext, useState, useEffect } from 'react';
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
  FaHeart,
  FaBolt,
  FaStore,
  FaClipboardList,
  FaUsers,
  FaArrowRight
} from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AppContext from '../Context/AppContext';
import Lottie from "lottie-react";
import shopping from '../assets/Shopping Cart Loader.json';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [admin, setAdmin] = useState(false);

  const {
    setFilterData,
    products,
    Logout,
    isAuthenticated,
    cart
  } = useContext(AppContext);

  const summitHandler = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/product/search/${searchTerm.trim()}`);
      setSearchTerm("");
    }
  };

  const filterByCategory = (cat) => {
    setFilterData(
      products.filter(
        (item) => item?.category?.toLowerCase() === cat.toLowerCase()
      )
    );
    setTimeout(() => {
      document.getElementById('products-section')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 100);
  };

  const filterByPrice = (price) => {
    setFilterData(
      products.filter((item) => item.price >= price)
    );
    setTimeout(() => {
      document.getElementById('products-section')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 100);
  };

  const adminHandler = () => {
    setAdmin(true);
    navigate("/goToHome");
  };

  const adminBackHandler = () => {
    setAdmin(false);
    navigate("/");
  };

  return (
    <>
      {/* Main Navbar - Fixed gradient, no change on scroll */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* Logo */}
            {admin === false ? (
              <Link to="/" className="flex items-center space-x-2 group perspective">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Lottie
                      animationData={shopping}
                      loop={true}
                      className="w-[45px] h-[45px]"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xl tracking-tight">
                    RamProduct
                  </span>
                  <span className="text-[10px] text-white/70 hidden sm:block">Premium Store</span>
                </div>
              </Link>
            ) : (
              <Link to="/goToHome" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaStore className="text-white text-xl" />
                </div>
                <span className="text-white font-bold text-xl tracking-tight">
                  Admin Panel
                </span>
              </Link>
            )}

            {/* Desktop Search - Icon outside the input field */}
            <form onSubmit={summitHandler} className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full flex items-center">
                {/* Search Icon outside - on the left side */}
                <button 
                  type="submit"
                  className="absolute left-0 z-10 p-2 rounded-l-xl pl-8 transition-all duration-300 backdrop-blur-sm"
                >
                  <FaSearch className={`text-white text-sm transition-all duration-300 ${
                    isSearchFocused ? 'scale-110' : 'scale-100'
                  }`} />
                </button>
                
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-12 py-2.5 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all duration-300"
                />
                
                {/* Optional: Arrow icon on the right side */}
                {searchTerm && (
                  <button 
                    type="submit"
                    className="absolute right-3 p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300"
                  >
                    <FaArrowRight className="text-white text-xs" />
                  </button>
                )}
              </div>
            </form>

            {/* Right Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {isAuthenticated && (
                <>
                  {/* Cart */}
                  <div>
                    {admin === false ? (
                      <Link to="/cart" className="relative group">
                        <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                          <FaShoppingCart className="text-white text-lg" />
                          {cart?.items?.length > 0 && (
                            <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1 text-xs font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-lg animate-bounce">
                              {cart?.items?.length}
                            </span>
                          )}
                        </div>
                      </Link>
                    ) : (
                      <button onClick={adminBackHandler} className="relative group">
                        <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
                          <span className="text-white font-medium text-sm">Go Home</span>
                        </div>
                      </button>
                    )}
                  </div>

                  {/* Profile */}
                  <div>
                    {admin === false ? (
                      <Link
                        to="/profile"
                        className="flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-xl group"
                      >
                        <FaUser className="text-white text-sm group-hover:rotate-12 transition-transform duration-300" />
                        <span className="text-white font-medium hidden sm:inline">
                          Profile
                        </span>
                      </Link>
                    ) : (
                      <Link
                        to="addToProduct"
                        className="flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-md"
                      >
                        <FaBolt className="text-white text-sm" />
                        <span className="text-white font-medium hidden sm:inline">
                          Add Product
                        </span>
                      </Link>
                    )}
                  </div>

                  {/* Logout */}
                  <div>
                    {admin === false ? (
                      <button
                        onClick={() => {
                          Logout();
                          navigate("/");
                        }}
                        className="flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 transition-all duration-300 shadow-md group"
                      >
                        <FaSignOutAlt className="text-white text-sm group-hover:translate-x-1 transition-transform duration-300" />
                        <span className="text-white font-medium hidden sm:inline">
                          Logout
                        </span>
                      </button>
                    ) : (
                      <Link
                        to="/allOrders"
                        className="flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-md"
                      >
                        <FaClipboardList className="text-white text-sm" />
                        <span className="text-white font-medium hidden sm:inline">
                          All Orders
                        </span>
                      </Link>
                    )}
                  </div>

                  {/* Admin Toggle */}
                  <div>
                    {admin === false ? (
                      <button onClick={adminHandler}
                        className="flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md group"
                      >
                        <FaStore className="text-white text-sm group-hover:rotate-3 transition-transform duration-300" />
                        <span className="text-white font-medium hidden sm:inline">
                          Admin Mode
                        </span>
                      </button>
                    ) : (
                      <Link
                        to="/allUers"
                        className="flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-md"
                      >
                        <FaUsers className="text-white text-sm" />
                        <span className="text-white font-medium hidden sm:inline">
                          All Users
                        </span>
                      </Link>
                    )}
                  </div>
                </>
              )}

              {!isAuthenticated && (
                <>
                  <button
                    onClick={() => navigate("/login")}
                    className="flex items-center space-x-2 px-4 sm:px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <FaSignInAlt className="text-white text-sm group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-white font-medium">Login</span>
                  </button>
                  <button
                    onClick={() => navigate("/register")}
                    className="flex items-center space-x-2 px-4 sm:px-5 py-2 rounded-xl bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 border border-white/30 hover:border-white/50 group"
                  >
                    <FaUserPlus className="text-white text-sm group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white font-medium hidden sm:inline">Register</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobile Search - Icon outside */}
          <form onSubmit={summitHandler} className="md:hidden pb-3 animate-slideDown">
            <div className="relative w-full flex items-center">
              <button 
                type="submit"
                className="absolute left-0 z-10 p-2 pl-8 rounded-l-xl  transition-all duration-300"
              >
                <FaSearch className="text-white text-sm" />
              </button>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
              />
            </div>
          </form>
        </div>

        {/* Animated gradient line */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
      </nav>

      {/* Filter Bar - Fixed position below navbar */}
      {location.pathname === "/" && (
        <div className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200/20 shadow-md">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="py-3 overflow-x-auto overflow-y-hidden scrollbar-hide">
              <div className="flex items-center gap-2 md:gap-3 min-w-max">
                {/* All Button */}
                <button
                  onClick={() => setFilterData(products)}
                  className="flex items-center space-x-1 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md text-sm font-medium whitespace-nowrap group"
                >
                  <FaHome className="text-xs group-hover:rotate-12 transition-transform duration-300" />
                  <span>All Products</span>
                </button>

                {/* Category Filters */}
                {[
                  { icon: FaMobileAlt, name: "Mobiles", color: "from-blue-500 to-cyan-500" },
                  { icon: FaLaptop, name: "Laptops", color: "from-green-500 to-emerald-500" },
                  { icon: FaCamera, name: "Cameras", color: "from-yellow-500 to-orange-500" },
                  { icon: FaHeadphones, name: "Headphones", color: "from-red-500 to-pink-500" }
                ].map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => filterByCategory(cat.name)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${cat.color} text-white hover:shadow-lg transition-all duration-300 text-sm font-medium whitespace-nowrap group`}
                  >
                    <cat.icon className="text-xs group-hover:scale-110 transition-transform duration-300" />
                    <span>{cat.name}</span>
                  </button>
                ))}

                {/* Divider */}
                <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-1"></div>

                {/* Price Filters */}
                {[999, 2999, 4999, 9999, 19999, 49999].map((price, index) => (
                  <button
                    key={price}
                    onClick={() => filterByPrice(price)}
                    className="flex items-center space-x-1 px-4 py-2 rounded-full bg-gradient-to-r from-slate-700 to-gray-800 hover:from-slate-800 hover:to-gray-900 text-white transition-all duration-300 shadow-md text-sm font-medium whitespace-nowrap group transform hover:scale-105"
                  >
                    <FaRupeeSign className="text-xs group-hover:rotate-12 transition-transform duration-300" />
                    <span>{price.toLocaleString()}+</span>
                  </button>
                ))}

               
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add spacing for fixed navbar */}
      <div className="h-16 md:h-20"></div>
      {location.pathname === "/" && <div className="h-16"></div>}

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .perspective {
          perspective: 1000px;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        .animate-bounce {
          animation: bounce 0.5s infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;