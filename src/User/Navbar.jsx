// import React, { useContext, useState } from 'react'
// import { FaSearch } from 'react-icons/fa'
// import { Link, useNavigate, useLocation } from 'react-router-dom'
// import AppContext from '../Context/AppContext'

// const Navbar = () => {
//   const [searchTerm, setSearchTerm] = useState("")
//   const navigate = useNavigate()
//   const Location = useLocation()
//   const { setFilterData, products, Logout, isAuthenticated, cart } = useContext(AppContext)


//   const summitHandler = (e) => {
//     e.preventDefault();
//     navigate(`/product/search/${searchTerm.trim()}`)
//     setSearchTerm("")
//   }

//   const filterByCategory = (cat) => {
//     setFilterData(products.filter((item) => item?.category?.toLowerCase() === cat.toLowerCase()))
//   }

//   const filterByPrice = (price) => {
//     setFilterData(products.filter((item) => item.price >= price))
//   }

//   return (
//     <>
//       <div className='text-white flex justify-between px-10 bg-blue-600 p-5  sticky top-0 '>

//         <Link to={"/"}>
//           Mern-E Comerce
//         </Link>
//         <form className='flex items-center bg-white rounded pl-2 ' onSubmit={summitHandler}>
//           <FaSearch className='text-black '></FaSearch>
//           <input type='text' className='w-[400px] py-1  pl-2  text-black outline-none rounded' placeholder='Search Products....'
//             value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </form>
//         <div>
//           {
//             isAuthenticated && (
//               <>

//                 <Link to={"/cart"} type="button" className="relative inline-flex justify-center items-center size-11 text-sm font-semibold rounded-lg bg-layer border border-layer-line text-layer-foreground shadow-2xs hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus disabled:opacity-50 disabled:pointer-events-none">
//                   cart
//                   {
//                     cart?.items?.length > 0 && (
//                       <span className="absolute top-0 end-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-red-500 text-foreground-inverse">{cart?.items?.length}</span>
//                     )
//                   }

//                 </Link>
//                 <Link to={"/profile"} className='px-3 py-1  bg-yellow-600 rounded mx-2'>profile</Link>
//                 <button className='px-3 py-1  bg-yellow-600 rounded mx-2' onClick={() => {
//                   Logout()
//                   navigate("/")
//                 }}>logout</button>
//               </>
//             )
//           }
//           {
//             !isAuthenticated && (
//               <>
//                 <button className='px-3 py-1  bg-yellow-600 rounded mx-2' onClick={() => navigate("/login")}>login</button>
//                 <button className='px-3 py-1  bg-yellow-600 rounded mx-2' onClick={() => navigate("/register")}>register</button>
//               </>
//             )
//           }


//         </div>

//       </div>

//       {
//         Location.pathname == "/" && (
//           <div className='flex justify-between px-10 bg-blue-400 py-2'>
//             <button onClick={() => setFilterData(products)}>No filter</button>
//             <button onClick={() => filterByCategory("Mobiles")}> Mobiles</button>
//             <button onClick={() => filterByCategory("Laptops")}>Laptops</button>
//             <button onClick={() => filterByCategory("Cameras")}>Cameras</button>
//             <button onClick={() => filterByCategory("Headphones")}>Headphones</button>
//             <button onClick={() => filterByPrice(15999)}>15999</button>
//             <button onClick={() => filterByPrice(25999)}>25999</button>
//             <button onClick={() => filterByPrice(49999)}>49999</button>
//             <button onClick={() => filterByPrice(69999)}>69999</button>
//             <button onClick={() => filterByPrice(89999)}>89999</button>

//           </div>
//         )
//       }
//     </>
//   )
// }

// export default Navbar

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
  FaHome
} from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AppContext from '../Context/AppContext';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

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

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-gradient-to-r from-orange-800 via-orange-700 to-amber-500 shadow-lg sticky top-0 z-50 backdrop-blur-sm border-b border-orange-300/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-lg">
                  M
                </span>
              </div>

              <span className="text-white font-bold text-xl tracking-tight">
                Mern Commerce
              </span>
            </Link>

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

                  {/* Profile */}
                  <Link
                    to="/profile"
                    className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-slate-900 to-black hover:from-black hover:to-slate-900 transition-all duration-200 shadow-md"
                  >
                    <FaUser className="text-white text-sm" />

                    <span className="text-white font-medium hidden sm:inline">
                      Profile
                    </span>
                  </Link>

                  {/* Logout */}
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
                  className="flex items-center space-x-1 px-4 py-2 rounded-full bg-orange-100 hover:bg-orange-200 transition-all duration-200 text-sm font-medium text-orange-700 whitespace-nowrap"
                >
                  <FaHome className="text-xs" />
                  <span>All</span>
                </button>

                {/* Mobiles */}
                <button
                  onClick={() => filterByCategory("Mobiles")}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-100 hover:bg-orange-200 transition-all duration-200 text-sm font-medium text-orange-700 whitespace-nowrap"
                >
                  <FaMobileAlt className="text-xs" />
                  <span>Mobiles</span>
                </button>

                {/* Laptops */}
                <button
                  onClick={() => filterByCategory("Laptops")}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-100 hover:bg-orange-200 transition-all duration-200 text-sm font-medium text-orange-700 whitespace-nowrap"
                >
                  <FaLaptop className="text-xs" />
                  <span>Laptops</span>
                </button>

                {/* Cameras */}
                <button
                  onClick={() => filterByCategory("Cameras")}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-100 hover:bg-orange-200 transition-all duration-200 text-sm font-medium text-orange-700 whitespace-nowrap"
                >
                  <FaCamera className="text-xs" />
                  <span>Cameras</span>
                </button>

                {/* Headphones */}
                <button
                  onClick={() => filterByCategory("Headphones")}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-100 hover:bg-orange-200 transition-all duration-200 text-sm font-medium text-orange-700 whitespace-nowrap"
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
      <style jsx>{`
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