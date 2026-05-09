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
//         <h1 className='text-center text-4xl text-white pb-10'>Related Product</h1>
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
import { FaCartPlus } from "react-icons/fa";

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
            <div className='text-center mb-14'>

                <h1 className='text-4xl md:text-5xl font-bold text-white'>
                    Related Products
                </h1>

                <div className='w-40 h-1 bg-orange-500 mx-auto mt-4 rounded-full'></div>

            </div>

            {/* Product Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 container mx-auto'>

                {
                    relatedProduct.map((data) => (

                        <div
                            key={data._id}
                            className='group bg-[#161616] rounded-[10px] overflow-hidden border border-gray-800 hover:border-orange-500 transition duration-300'
                        >

                            {/* Image Section */}
                            <Link to={`/product/${data._id}`}>

                                <div className='bg-white p-6 flex justify-center items-center overflow-hidden'>

                                    <img
                                        className="w-full h-[260px] object-contain group-hover:scale-110 transition duration-500"
                                        src={data.imgSrc}
                                        alt="product"
                                    />

                                </div>

                            </Link>

                            {/* Content */}
                            <div className='p-6'>

                                {/* Category */}
                                <p className='text-orange-400 text-sm mb-2 uppercase tracking-wider'>
                                    {data.category}
                                </p>

                                {/* Title */}
                                <h2 className='text-2xl font-bold text-white mb-4 line-clamp-1'>
                                    {data.title}
                                </h2>

                                {/* Price + Button */}
                                <div className='flex items-center justify-between gap-4'>

                                    <div>

                                        <p className='text-gray-400 text-sm'>
                                            Price
                                        </p>

                                        <h1 className='text-3xl font-bold text-orange-400'>
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
                                        className="bg-orange-500 hover:bg-orange-600 p-4 rounded-2xl transition duration-300 font-bold"
                                    >

                                        Add to cart

                                    </button>

                                </div>

                            </div>

                        </div>

                    ))
                }

            </div>

        </>
    )
}

export default RelatedProduct