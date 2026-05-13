// import React, { useContext } from 'react';
// import AppContext from '../../Context/AppContext'
// import { Link } from 'react-router-dom';

// const ShowProduct = () => {

//     const { filterData, addToCart } = useContext(AppContext)

//     return (
// <>
//      <div className="min-h-screen  py-12">

//             <div className="container mx-auto px-4">

//                 {/* Product Grid */}
//                 {
//                     filterData?.length > 0 ? (

//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

//                             {
//                                 filterData.map((data) => (

//                                     <div
//                                         key={data._id}
//                                         className="group"
//                                     >

//                                         {/* Card */}
//                                         <div className="bg-white rounded-[10px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-orange-100">

//                                             {/* Image */}
//                                             <Link to={`/product/${data._id}`}>

//                                                 <div className="relative overflow-hidden bg-orange-50">

//                                                     <img
//                                                         src={data.imgSrc}
//                                                         alt={data.title}
//                                                         className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-700"
//                                                     />

//                                                     {/* Badge */}
//                                                     <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
//                                                         TRENDING
//                                                     </div>

//                                                 </div>

//                                             </Link>

//                                             {/* Content */}
//                                             <div className="p-5">

//                                                 {/* Title */}
//                                                 <Link to={`/product/${data._id}`}>

//                                                     <h2 className="text-[20px] font-bold text-gray-900 leading-snug line-clamp-2 hover:text-orange-600 transition duration-300">
//                                                         {data.title}
//                                                     </h2>

//                                                 </Link>

//                                                 {/* Rating */}
//                                                 <div className="flex items-center justify-between mt-4">

//                                                     <div className="flex items-center gap-1">

//                                                         <span className="text-orange-400 text-lg">★</span>
//                                                         <span className="text-orange-400 text-lg">★</span>
//                                                         <span className="text-orange-400 text-lg">★</span>
//                                                         <span className="text-orange-400 text-lg">★</span>
//                                                         <span className="text-orange-400 text-lg">★</span>

//                                                     </div>

//                                                     <span className="text-orange-500 text-sm font-semibold">
//                                                         In Stock
//                                                     </span>

//                                                 </div>

//                                                 {/* Price */}
//                                                 <div className="mt-5 flex items-end gap-3">

//                                                     <h3 className="text-3xl font-extrabold text-gray-900">
//                                                         ₹{data.price}
//                                                     </h3>

//                                                     <span className="text-lg text-gray-400 line-through">
//                                                         ₹{data.price + 500}
//                                                     </span>

//                                                 </div>

//                                                 {/* Button */}
//                                                 <button
//                                                     onClick={() =>
//                                                         addToCart(
//                                                             data._id,
//                                                             data.title,
//                                                             data.price,
//                                                             data.qty,
//                                                             data.imgSrc
//                                                         )
//                                                     }
//                                                     className="w-full mt-6 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-black hover:to-gray-900 text-white py-3.5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-orange-300"
//                                                 >
//                                                     Add To Cart
//                                                 </button>

//                                             </div>

//                                         </div>

//                                     </div>

//                                 ))
//                             }

//                         </div>

//                     ) : (

//                         <div className="flex flex-col items-center justify-center py-24">

//                             <div className="w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center border border-orange-100">

//                                 <svg
//                                     className="w-14 h-14 text-orange-400"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={1.5}
//                                         d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5"
//                                     />
//                                 </svg>

//                             </div>

//                             <h2 className="text-3xl font-bold text-gray-700 mt-6">
//                                 No Products Found
//                             </h2>

//                             <p className="text-orange-500 mt-2 text-lg">
//                                 Try another search
//                             </p>

//                         </div>

//                     )
//                 }

//             </div>

//             {/* Clamp */}
//             <style jsx>{`
//                 .line-clamp-2 {
//                     display: -webkit-box;
//                     -webkit-line-clamp: 2;
//                     -webkit-box-orient: vertical;
//                     overflow: hidden;
//                 }
//             `}</style>

//         </div>
// </>
//     )
// }

// export default ShowProduct


import React, { useContext, useState } from 'react';
import AppContext from '../../Context/AppContext';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingCart, FaEye, FaHeart, FaTag, FaBoxOpen } from 'react-icons/fa';

const ShowProduct = () => {
    const { filterData, addToCart } = useContext(AppContext);
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [likedProducts, setLikedProducts] = useState([]);

    // Calculate rating (random for demo, you can replace with actual rating)
    const getRating = () => {
        const rating = 4 + Math.random();
        return rating > 5 ? 5 : rating;
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        
        return (
            <div className="flex items-center gap-0.5">
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={`full-${i}`} className="text-yellow-400 text-sm" />
                ))}
                {hasHalfStar && <FaStarHalfAlt className="text-yellow-400 text-sm" />}
                {[...Array(emptyStars)].map((_, i) => (
                    <FaRegStar key={`empty-${i}`} className="text-yellow-400 text-sm" />
                ))}
            </div>
        );
    };

    const toggleLike = (productId) => {
        if (likedProducts.includes(productId)) {
            setLikedProducts(likedProducts.filter(id => id !== productId));
        } else {
            setLikedProducts([...likedProducts, productId]);
        }
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                

                {/* Product Grid */}
                {filterData?.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {filterData.map((data, index) => {
                            const rating = getRating();
                            const isLiked = likedProducts.includes(data._id);
                            
                            return (
                                <div
                                    key={data._id}
                                    className="group relative animate-fadeIn"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    onMouseEnter={() => setHoveredProduct(data._id)}
                                    onMouseLeave={() => setHoveredProduct(null)}
                                >
                                    {/* Card */}
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-orange-100 relative">
                                        
                                        {/* Image Section */}
                                        <Link to={`/product/${data._id}`}>
                                            <div className="relative overflow-hidden bg-gradient-to-br from-orange-100 to-amber-100">
                                                <img
                                                    src={data.imgSrc}
                                                    alt={data.title}
                                                    className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                                />
                                                
                                                {/* Overlay on hover */}
                                                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${hoveredProduct === data._id ? 'opacity-100' : 'opacity-0'}`}>
                                                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                                                        <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110">
                                                            <FaEye className="text-orange-600 text-lg" />
                                                        </button>
                                                        <button 
                                                            onClick={() => toggleLike(data._id)}
                                                            className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-110"
                                                        >
                                                            <FaHeart className={`text-lg transition-colors duration-300 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Badges */}
                                                <div className="absolute top-4 left-4 flex flex-col gap-2">
                                                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                                                        <FaTag className="inline mr-1 text-xs" />
                                                        TRENDING
                                                    </div>
                                                </div>

                                                {/* Discount Badge */}
                                                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                                    -{Math.floor(Math.random() * 30 + 10)}%
                                                </div>

                                                {/* Stock Status */}
                                                {data.qty > 0 ? (
                                                    <div className="absolute bottom-4 left-4 bg-green-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                                                        <FaBoxOpen className="inline mr-1 text-xs" />
                                                        In Stock
                                                    </div>
                                                ) : (
                                                    <div className="absolute bottom-4 left-4 bg-red-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                                                        Out of Stock
                                                    </div>
                                                )}
                                            </div>
                                        </Link>

                                        {/* Content Section */}
                                        <div className="p-5">
                                            {/* Category Tag */}
                                            <div className="mb-2">
                                                <span className="text-xs font-semibold text-orange-500 bg-orange-100 px-2 py-1 rounded-full">
                                                    {data.category || 'Electronics'}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <Link to={`/product/${data._id}`}>
                                                <h2 className="text-lg font-bold text-gray-900 leading-tight line-clamp-2 hover:text-orange-600 transition-colors duration-300 min-h-[56px]">
                                                    {data.title}
                                                </h2>
                                            </Link>

                                            {/* Rating Section */}
                                            <div className="flex items-center justify-between mt-3">
                                                <div className="flex items-center gap-2">
                                                    {renderStars(rating)}
                                                    <span className="text-xs text-gray-500">({Math.floor(Math.random() * 500 + 50)})</span>
                                                </div>
                                                
                                                {data.qty > 0 ? (
                                                    <span className="text-green-600 text-xs font-semibold bg-green-50 px-2 py-1 rounded-full">
                                                        Ready to Ship
                                                    </span>
                                                ) : (
                                                    <span className="text-red-600 text-xs font-semibold bg-red-50 px-2 py-1 rounded-full">
                                                        Sold Out
                                                    </span>
                                                )}
                                            </div>

                                            {/* Price Section */}
                                            <div className="mt-4 flex items-end gap-2">
                                                <div className="flex flex-col">
                                                    <h3 className="text-2xl font-extrabold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                                                        ₹{data.price}
                                                    </h3>
                                                    {data.originalPrice && (
                                                        <span className="text-xs text-gray-400 line-through">
                                                            ₹{data.originalPrice}
                                                        </span>
                                                    )}
                                                </div>
                                                {!data.originalPrice && (
                                                    <span className="text-sm text-gray-400 line-through">
                                                        ₹{data.price + Math.floor(data.price * 0.3)}
                                                    </span>
                                                )}
                                                <div className="ml-auto">
                                                    <div className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                                                        Save ₹{Math.floor(data.price * 0.2)}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Add to Cart Button */}
                                            <button
                                                onClick={() => addToCart(
                                                    data._id,
                                                    data.title,
                                                    data.price,
                                                    data.qty,
                                                    data.imgSrc
                                                )}
                                                disabled={data.qty === 0}
                                                className={`w-full mt-5 py-3 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                                                    data.qty > 0
                                                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg hover:shadow-orange-300 transform hover:scale-105'
                                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                                }`}
                                            >
                                                <FaShoppingCart className="text-lg" />
                                                {data.qty > 0 ? 'Add to Cart' : 'Out of Stock'}
                                            </button>
                                        </div>

                                        {/* Hover Border Effect */}
                                        <div className="absolute inset-0 rounded-2xl pointer-events-none">
                                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                                                background: 'linear-gradient(135deg, rgba(249,115,22,0.1) 0%, rgba(245,158,11,0.1) 100%)'
                                            }}></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    // Empty State
                    <div className="flex flex-col items-center justify-center py-32 px-4">
                        <div className="relative">
                            <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full shadow-xl flex items-center justify-center animate-bounce">
                                <svg
                                    className="w-16 h-16 text-orange-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.5a2.5 2.5 0 00-2.5 2.5v.5a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 016 16v-.5A2.5 2.5 0 013.5 13H2"
                                    />
                                </svg>
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full animate-ping"></div>
                        </div>

                        <h2 className="text-4xl font-bold text-gray-800 mt-8 text-center">
                            No Products Found
                        </h2>
                        <p className="text-orange-500 mt-3 text-lg font-medium">
                            Oops! We couldn't find any products
                        </p>
                        <div className="mt-8 flex gap-3">
                            <button 
                                onClick={() => window.location.reload()}
                                className="px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full hover:shadow-lg transition-all duration-300"
                            >
                                Refresh Page
                            </button>
                            <Link to="/">
                                <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-all duration-300">
                                    Go Home
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.6s ease-out forwards;
                }
                
                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
                
                .animate-bounce {
                    animation: bounce 2s ease-in-out infinite;
                }
                
                .animate-ping {
                    animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                
                @keyframes ping {
                    75%, 100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default ShowProduct;