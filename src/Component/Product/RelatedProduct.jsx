// import React, { useContext, useEffect, useState } from 'react'
// import AppContext from '../../Context/AppContext'
// import { Link } from 'react-router-dom'

// const RelatedProduct = ({category}) => {
//     const{products,addToCart} = useContext(AppContext)
//     const[relatedProduct,setRelatedProduct] = useState([])

//    useEffect(() => {
//   if (!products || !category) return;

//   const filtered = products.filter(
//     (data) =>
//       data?.category?.toLowerCase() === category?.toLowerCase()
//   );

//   setRelatedProduct(filtered);

// }, [category, products]);



//   return (
//     <>
//     <div>
//         <h1 className='text-center text-4xl text-black pb-10'>Related Product</h1>
//     </div>
//         <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center px-5 container mx-auto'> 
//             {
//                 relatedProduct.map((data) =>
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
//                             <button 
//                               onClick={() =>
//                                                         addToCart(
//                                                             data._id,
//                                                             data.title,
//                                                             data.price,
//                                                             data.qty,
//                                                             data.imgSrc
//                                                         )
//                                                     }
//                             className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none bg-yellow-800 rounded">
//                             Add to Cart
//                            </button>
//                            </div>
//                         </div>
//                     </div>
//                       </div>
//                 )
//             }
//         </div>
//         </>
//   )
// }

// export default RelatedProduct

import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../Context/AppContext'
import { Link } from 'react-router-dom'

const RelatedProduct = ({ category }) => {

    const { products, addToCart } = useContext(AppContext)

    const [relatedProduct, setRelatedProduct] = useState([])

    useEffect(() => {

        if (!products || !category) return;

        const filtered = products.filter(
            (data) =>
                data?.category?.toLowerCase() === category?.toLowerCase()
        );

        setRelatedProduct(filtered);

    }, [category, products]);

    return (
        <>

            {/* Heading */}
            <div className='text-center mb-14 mt-10'>

                <h1 className='text-4xl md:text-5xl font-bold text-black'>
                    Related Products
                </h1>

                <div className='w-40 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 mx-auto mt-4 rounded-full'></div>

            </div>

            {/* Product Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-4 md:px-6 container mx-auto'>

                {
                    relatedProduct.map((data) => (

                        <div
                            key={data._id}
                            className='group'
                        >

                            {/* Card */}
                            <div className='bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl overflow-hidden border border-cyan-400/20 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-2 shadow-2xl hover:shadow-cyan-400/30'>

                                {/* Image Section */}
                                <Link to={`/product/${data._id}`}>

                                    <div className='relative bg-black overflow-hidden'>

                                        <img
                                            className="w-full h-[240px] object-cover group-hover:scale-110 transition duration-700"
                                            src={data.imgSrc}
                                            alt="product"
                                        />

                                        {/* Badge */}
                                        <div className="absolute top-3 left-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg tracking-wide">
                                            TRENDING
                                        </div>

                                    </div>

                                </Link>

                                {/* Content */}
                                <div className='p-4'>

                                    {/* Category */}
                                    <p className='text-cyan-300 text-xs mb-2 uppercase tracking-[2px] font-semibold'>
                                        {data.category}
                                    </p>

                                    {/* Title */}
                                    <h2 className='text-[18px] font-bold text-white mb-4 line-clamp-1 hover:text-cyan-300 transition duration-300'>
                                        {data.title}
                                    </h2>

                                    {/* Rating */}
                                    <div className="flex items-center justify-between mb-4">

                                        <div className="flex items-center gap-1">

                                            <span className="text-cyan-300 text-sm">★</span>
                                            <span className="text-cyan-300 text-sm">★</span>
                                            <span className="text-cyan-300 text-sm">★</span>
                                            <span className="text-cyan-300 text-sm">★</span>
                                            <span className="text-cyan-300 text-sm">★</span>

                                        </div>

                                        <span className="text-cyan-200 text-xs font-semibold">
                                            In Stock
                                        </span>

                                    </div>

                                    {/* Price + Button */}
                                    <div className='flex items-center justify-between gap-3'>

                                        <div>

                                            <p className='text-gray-400 text-xs'>
                                                Price
                                            </p>

                                            <h1 className='text-2xl font-bold text-white'>
                                                ₹ {data.price}
                                            </h1>

                                        </div>

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
                                            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 hover:scale-105 px-5 py-2.5 rounded-xl transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-cyan-400/40"
                                        >

                                            Add To Cart

                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))
                }

            </div>

            {/* Clamp */}
            <style jsx>{`
                .line-clamp-1 {
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>

        </>
    )
}

export default RelatedProduct