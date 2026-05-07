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


import React, { useContext, useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaTags, FaMobileAlt, FaLaptop, FaCamera, FaHeadphones, FaRupeeSign } from 'react-icons/fa'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import AppContext from '../Context/AppContext'

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()
  const Location = useLocation()
  const { setFilterData, products, Logout, isAuthenticated, cart } = useContext(AppContext)

  const summitHandler = (e) => {
    e.preventDefault();
    navigate(`/product/search/${searchTerm.trim()}`)
    setSearchTerm("")
  }

  const filterByCategory = (cat) => {
    setFilterData(products.filter((item) => item?.category?.toLowerCase() === cat.toLowerCase()))
  }

  const filterByPrice = (price) => {
    setFilterData(products.filter((item) => item.price >= price))
  }

  return (
    <>
      {/* Premium Navbar */}
      <div className='bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow-xl sticky top-0 z-50'>
        <div className='container mx-auto px-4 md:px-8 py-4'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            
            {/* Logo */}
            <Link to={"/"} className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent hover:scale-105 transition-transform'>
              🛍️ MERN E-Commerce
            </Link>
            
            {/* Search Bar */}
            <form onSubmit={summitHandler} className='w-full md:w-auto flex-1 max-w-md'>
              <div className='relative group'>
                <FaSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-400 transition-colors' />
                <input 
                  type='text' 
                  className='w-full py-3 pl-11 pr-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 focus:bg-white focus:text-gray-900 focus:border-blue-400 outline-none transition-all duration-300 placeholder:text-gray-300' 
                  placeholder='Search products...' 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </form>
            
            {/* Action Buttons */}
            <div className='flex items-center gap-3'>
              {isAuthenticated && (
                <>
                  <Link to={"/cart"} className='relative group'>
                    <button className='relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/30'>
                      <FaShoppingCart />
                      <span className='hidden sm:inline'>Cart</span>
                      {cart?.items?.length > 0 && (
                        <span className='absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-xs font-bold bg-red-500 text-white rounded-full animate-pulse'>
                          {cart?.items?.length}
                        </span>
                      )}
                    </button>
                  </Link>
                  <Link to={"/profile"}>
                    <button className='flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg'>
                      <FaUser />
                      <span className='hidden sm:inline'>Profile</span>
                    </button>
                  </Link>
                  <button 
                    className='flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg'
                    onClick={() => {
                      Logout()
                      navigate("/")
                    }}
                  >
                    <FaSignOutAlt />
                    <span className='hidden sm:inline'>Logout</span>
                  </button>
                </>
              )}
              {!isAuthenticated && (
                <>
                  <button 
                    className='flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg font-semibold'
                    onClick={() => navigate("/login")}
                  >
                    <FaSignInAlt />
                    Login
                  </button>
                  <button 
                    className='flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg font-semibold'
                    onClick={() => navigate("/register")}
                  >
                    <FaUserPlus />
                    Register
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Premium Filter Bar - Only on Homepage */}
      {Location.pathname === "/" && (
        <div className='bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 shadow-md sticky top-[72px] z-40'>
          <div className='container mx-auto px-4 py-3'>
            <div className='flex flex-nowrap overflow-x-auto gap-2 pb-2 scrollbar-thin scrollbar-thumb-gray-400'>
              <button 
                onClick={() => setFilterData(products)} 
                className='flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-md whitespace-nowrap'
              >
                <FaTags /> All
              </button>
              <button 
                onClick={() => filterByCategory("Mobiles")} 
                className='flex items-center gap-2 px-4 py-2 rounded-full bg-white text-gray-700 border border-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm whitespace-nowrap'
              >
                <FaMobileAlt /> Mobiles
              </button>
              <button 
                onClick={() => filterByCategory("Laptops")} 
                className='flex items-center gap-2 px-4 py-2 rounded-full bg-white text-gray-700 border border-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm whitespace-nowrap'
              >
                <FaLaptop /> Laptops
              </button>
              <button 
                onClick={() => filterByCategory("Cameras")} 
                className='flex items-center gap-2 px-4 py-2 rounded-full bg-white text-gray-700 border border-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm whitespace-nowrap'
              >
                <FaCamera /> Cameras
              </button>
              <button 
                onClick={() => filterByCategory("Headphones")} 
                className='flex items-center gap-2 px-4 py-2 rounded-full bg-white text-gray-700 border border-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm whitespace-nowrap'
              >
                <FaHeadphones /> Headphones
              </button>
              <div className='w-px h-8 bg-gray-300 mx-1'></div>
              <button 
                onClick={() => filterByPrice(15999)} 
                className='px-4 py-2 rounded-full bg-white text-gray-700 border border-gray-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 shadow-sm whitespace-nowrap'
              >
                <FaRupeeSign className='inline mr-1' /> 15,999+
              </button>
              <button 
                onClick={() => filterByPrice(25999)} 
                className='px-4 py-2 rounded-full bg-white text-gray-700 border border-gray-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 shadow-sm whitespace-nowrap'
              >
                <FaRupeeSign className='inline mr-1' /> 25,999+
              </button>
              <button 
                onClick={() => filterByPrice(49999)} 
                className='px-4 py-2 rounded-full bg-white text-gray-700 border border-gray-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 shadow-sm whitespace-nowrap'
              >
                <FaRupeeSign className='inline mr-1' /> 49,999+
              </button>
              <button 
                onClick={() => filterByPrice(69999)} 
                className='px-4 py-2 rounded-full bg-white text-gray-700 border border-gray-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 shadow-sm whitespace-nowrap'
              >
                <FaRupeeSign className='inline mr-1' /> 69,999+
              </button>
              <button 
                onClick={() => filterByPrice(89999)} 
                className='px-4 py-2 rounded-full bg-white text-gray-700 border border-gray-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 shadow-sm whitespace-nowrap'
              >
                <FaRupeeSign className='inline mr-1' /> 89,999+
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
