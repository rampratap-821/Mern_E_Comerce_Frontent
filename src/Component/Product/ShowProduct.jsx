// import React, { useContext } from 'react'
// import AppContext from '../../Context/AppContext'
// import { Link } from 'react-router-dom'
// import HeroSection from '../HeroSection'

// const ShowProduct = () => {
//     const { products,filterData, addToCart } = useContext(AppContext)
//     console.log("products",products)
//     return (
//         <>
     
//         <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center px-5 container mx-auto mt-5'> 
//             {
//                 filterData?.map((data) =>
//                     <div key={data._id} className=''>
                   
                   
//                     <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-lg bg-white ">
//                         <Link to = {`/product/${data._id}`}>
//                             <img className="rounded-base" src={data.imgSrc} alt="" />
//                         </Link>
//                         <div className='text-center text-black '>
//                         <a href="#">
//                             <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{data.title}</h5>
//                         </a>
//                      <div className='flex justify-center gap-5 '>
//                         <button className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none bg-green-800 rounded">
//                             {data.price} {" ₹"}
//                            </button>
//                             <button onClick={()=> addToCart(data._id,data.title, data.price, data.qty, data.imgSrc)} className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none bg-yellow-800 rounded">
//                             Add to Cart
//                            </button>s
//                            </div>
//                         </div>
//                     </div>
//                       </div>
//                 )
//             }
           
//         </div>\
//          </>
//     )
// }

// export default ShowProduct



import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'
import { Link } from 'react-router-dom'
import HeroSection from '../HeroSection'

const ShowProduct = () => {

    const { filterData, addToCart } = useContext(AppContext)

    return (
<>
{/* <HeroSection/> */}

        <div className="min-h-screen  py-12">

            <div className="container mx-auto px-4">

                {/* Product Grid */}
                {
                    filterData?.length > 0 ? (

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                            {
                                filterData.map((data) => (

                                    <div
                                        key={data._id}
                                        className="group"
                                    >

                                        {/* Card */}
                                        <div className="bg-white rounded-[10px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-orange-100">

                                            {/* Image */}
                                            <Link to={`/product/${data._id}`}>

                                                <div className="relative overflow-hidden bg-orange-50">

                                                    <img
                                                        src={data.imgSrc}
                                                        alt={data.title}
                                                        className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-700"
                                                    />

                                                    {/* Badge */}
                                                    <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                                                        TRENDING
                                                    </div>

                                                </div>

                                            </Link>

                                            {/* Content */}
                                            <div className="p-5">

                                                {/* Title */}
                                                <Link to={`/product/${data._id}`}>

                                                    <h2 className="text-[20px] font-bold text-gray-900 leading-snug line-clamp-2 hover:text-orange-600 transition duration-300">
                                                        {data.title}
                                                    </h2>

                                                </Link>

                                                {/* Rating */}
                                                <div className="flex items-center justify-between mt-4">

                                                    <div className="flex items-center gap-1">

                                                        <span className="text-orange-400 text-lg">★</span>
                                                        <span className="text-orange-400 text-lg">★</span>
                                                        <span className="text-orange-400 text-lg">★</span>
                                                        <span className="text-orange-400 text-lg">★</span>
                                                        <span className="text-orange-400 text-lg">★</span>

                                                    </div>

                                                    <span className="text-orange-500 text-sm font-semibold">
                                                        In Stock
                                                    </span>

                                                </div>

                                                {/* Price */}
                                                <div className="mt-5 flex items-end gap-3">

                                                    <h3 className="text-3xl font-extrabold text-gray-900">
                                                        ₹{data.price}
                                                    </h3>

                                                    <span className="text-lg text-gray-400 line-through">
                                                        ₹{data.price + 500}
                                                    </span>

                                                </div>

                                                {/* Button */}
                                                <button
                                                    onClick={() =>
                                                        addToCart(
                                                            data._id,
                                                            data.title,
                                                            data.price,
                                                            data.qty,
                                                            data.imgSrc
                                                        )
                                                    }
                                                    className="w-full mt-6 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-black hover:to-gray-900 text-white py-3.5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-orange-300"
                                                >
                                                    Add To Cart
                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                ))
                            }

                        </div>

                    ) : (

                        <div className="flex flex-col items-center justify-center py-24">

                            <div className="w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center border border-orange-100">

                                <svg
                                    className="w-14 h-14 text-orange-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5"
                                    />
                                </svg>

                            </div>

                            <h2 className="text-3xl font-bold text-gray-700 mt-6">
                                No Products Found
                            </h2>

                            <p className="text-orange-500 mt-2 text-lg">
                                Try another search
                            </p>

                        </div>

                    )
                }

            </div>

            {/* Clamp */}
            <style jsx>{`
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>

        </div>
</>
    )
}

export default ShowProduct