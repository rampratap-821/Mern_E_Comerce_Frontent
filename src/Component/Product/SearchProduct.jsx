// import React, { useContext, useEffect, useState } from 'react'
// import AppContext from '../../Context/AppContext'
// import { Link, useParams } from 'react-router-dom'

// const SearchProduct = () => {
//     const{products} = useContext(AppContext)
//     const[searchProduct,setSearchProduct] = useState([])
//     const {term} = useParams()

//    useEffect(() => {
//   if (!products || !term) return;

//   const filtered = products.filter(
//     (data) =>
//       data?.title?.toLowerCase().includes(term?.toLowerCase()) 
//   );

//   setSearchProduct(filtered);

// }, [term, products]);



//   return (
//     <>
//     <div>
//         <h1 className='text-center text-4xl text-white pb-10'>Related Product</h1>
//     </div>
//         <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center px-5 container mx-auto'> 
//             {
//                 searchProduct.map((data) =>
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
//                             <button className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none bg-yellow-800 rounded">
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

// export default SearchProduct;


import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../Context/AppContext'
import { Link, useParams } from 'react-router-dom'

const SearchProduct = () => {

    const { products } = useContext(AppContext)

    const [searchProduct, setSearchProduct] = useState([])

    const { term } = useParams()

    useEffect(() => {

        if (!products || !term) return;

        const filtered = products.filter(
            (data) =>
                data?.title?.toLowerCase().includes(term?.toLowerCase())
        );

        setSearchProduct(filtered);

    }, [term, products]);



    return (
        <>

            <div className='min-h-screen bg-gray-100 py-10'>

                

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5 container mx-auto'>

                    {
                        searchProduct.map((data) =>

                            <div
                                key={data._id}
                                className='bg-[#07111f] rounded-3xl overflow-hidden border border-cyan-500/40 shadow-2xl hover:scale-105 transition duration-300'
                            >

                                {/* Image Section */}
                                <div className='relative bg-white'>

                                    <span className='absolute top-4 left-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-[10px] font-bold px-4 py-1 rounded-full z-10'>
                                        TRENDING
                                    </span>

                                    <Link to={`/product/${data._id}`}>

                                        <img
                                            className="w-full h-[230px] object-cover"
                                            src={data.imgSrc}
                                            alt=""
                                        />

                                    </Link>

                                </div>

                                {/* Content */}
                                <div className='p-5'>

                                    <h2 className='text-white text-2xl font-bold mb-3'>
                                        {data.title}
                                    </h2>

                                    {/* Rating */}
                                    <div className='flex justify-between items-center mb-5'>

                                        <div className='flex text-cyan-400 text-sm gap-1'>
                                            ★ ★ ★ ★ ★
                                        </div>

                                        <span className='text-cyan-300 text-sm font-semibold'>
                                            In Stock
                                        </span>

                                    </div>

                                    {/* Price */}
                                    <div className='flex items-center gap-3 mb-6'>

                                        <h1 className='text-white text-4xl font-extrabold'>
                                            ₹{data.price}
                                        </h1>

                                        <span className='text-gray-400 line-through text-lg'>
                                            ₹{data.price + 500}
                                        </span>

                                    </div>

                                    {/* Button */}
                                    <button className='w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold text-lg hover:opacity-90 transition duration-300'>
                                        Add To Cart
                                    </button>

                                </div>

                            </div>

                        )
                    }

                </div>

            </div>

        </>
    )
}

export default SearchProduct