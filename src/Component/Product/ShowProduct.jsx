import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'
import { Link } from 'react-router-dom'

const ShowProduct = () => {
    const { products,filterData, addToCart } = useContext(AppContext)
    console.log("products",products)
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center px-5 container mx-auto mt-5'> 
            {
                filterData?.map((data) =>
                    <div key={data._id} className=''>
                   
                   
                    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-lg bg-white ">
                        <Link to = {`/product/${data._id}`}>
                            <img className="rounded-base" src={data.imgSrc} alt="" />
                        </Link>
                        <div className='text-center text-black '>
                        <a href="#">
                            <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{data.title}</h5>
                        </a>
                     <div className='flex justify-center gap-5 '>
                        <button className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none bg-green-800 rounded">
                            {data.price} {" ₹"}
                           </button>
                            <button onClick={()=> addToCart(data._id,data.title, data.price, data.qty, data.imgSrc)} className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none bg-yellow-800 rounded">
                            Add to Cart
                           </button>s
                           </div>
                        </div>
                    </div>
                      </div>
                )
            }
        </div>
    )
}

export default ShowProduct




// import React, { useContext } from 'react'
// import AppContext from '../../Context/AppContext'
// import { Link } from 'react-router-dom'
// import { FaRupeeSign, FaShoppingCart, FaEye, FaStar, FaStarHalfAlt } from 'react-icons/fa'

// const ShowProduct = () => {
//     const { products, filterData, addToCart } = useContext(AppContext)
//     console.log("products", products)
    
//     return (
//         <div className='bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-8'>
//             <div className='container mx-auto px-4 md:px-6'>
                
//                 {/* Header Section */}
//                 {filterData?.length > 0 && (
//                     <div className='mb-8 text-center'>
//                         <h2 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
//                             Our Premium Collection
//                         </h2>
//                         <p className='text-gray-500 mt-2'>Discover the best products tailored for you</p>
//                         <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full'></div>
//                     </div>
//                 )}
                
//                 {/* Products Grid */}
//                 {filterData?.length > 0 ? (
//                     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8'>
//                         {filterData?.map((data) => (
//                             <div key={data._id} className='group'>
//                                 <div className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
                                    
//                                     {/* Product Image Section */}
//                                     <Link to={`/product/${data._id}`} className='block relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200'>
//                                         <img 
//                                             className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110' 
//                                             src={data.imgSrc} 
//                                             alt={data.title}
//                                         />
//                                         {/* Overlay on hover */}
//                                         <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
//                                             <span className='bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full font-semibold flex items-center gap-2'>
//                                                 <FaEye /> Quick View
//                                             </span>
//                                         </div>
//                                         {/* Badge (Optional - if you have stock or sale) */}
//                                         {data.qty > 0 ? (
//                                             <span className='absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full'>
//                                                 In Stock
//                                             </span>
//                                         ) : (
//                                             <span className='absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full'>
//                                                 Out of Stock
//                                             </span>
//                                         )}
//                                     </Link>
                                    
//                                     {/* Product Details */}
//                                     <div className='p-5'>
//                                         {/* Rating Stars (Mock - can be dynamic) */}
//                                         <div className='flex items-center gap-1 mb-2'>
//                                             {[...Array(4)].map((_, i) => (
//                                                 <FaStar key={i} className='text-yellow-400 text-sm' />
//                                             ))}
//                                             <FaStarHalfAlt className='text-yellow-400 text-sm' />
//                                             <span className='text-gray-400 text-xs ml-2'>(128 reviews)</span>
//                                         </div>
                                        
//                                         {/* Product Title */}
//                                         <Link to={`/product/${data._id}`}>
//                                             <h3 className='text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors line-clamp-1'>
//                                                 {data.title}
//                                             </h3>
//                                         </Link>
                                        
//                                         {/* Description Placeholder (if you have description field) */}
//                                         <p className='text-gray-500 text-sm mb-4 line-clamp-2'>
//                                             Premium quality product with amazing features and durability. Best in class.
//                                         </p>
                                        
//                                         {/* Price and Action Buttons */}
//                                         <div className='flex items-center justify-between gap-3 mt-4'>
//                                             {/* Price */}
//                                             <div className='flex items-baseline gap-1'>
//                                                 <FaRupeeSign className='text-gray-600 text-sm' />
//                                                 <span className='text-2xl font-bold text-gray-900'>
//                                                     {data.price.toLocaleString()}
//                                                 </span>
//                                                 <span className='text-gray-400 text-xs'>/-</span>
//                                             </div>
                                            
//                                             {/* Add to Cart Button */}
//                                             <button 
//                                                 onClick={() => addToCart(data._id, data.title, data.price, data.qty, data.imgSrc)} 
//                                                 className='relative overflow-hidden group/btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-2 font-semibold'
//                                             >
//                                                 <FaShoppingCart className='text-sm group-hover/btn:scale-110 transition-transform' />
//                                                 <span>Add to Cart</span>
//                                                 {/* Ripple effect on hover */}
//                                                 <span className='absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700'></span>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     // Empty State
//                     <div className='flex flex-col items-center justify-center py-20 text-center'>
//                         <div className='bg-gray-100 rounded-full p-8 mb-4'>
//                             <svg className='w-20 h-20 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
//                                 <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4' />
//                             </svg>
//                         </div>
//                         <h3 className='text-2xl font-bold text-gray-700 mb-2'>No Products Found</h3>
//                         <p className='text-gray-500'>Try adjusting your filters or search criteria</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default ShowProduct
