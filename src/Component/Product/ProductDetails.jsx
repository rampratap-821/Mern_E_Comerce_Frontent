// import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import RelatedProduct from './RelatedProduct'

// const ProductDetails = () => {
//     const { id } = useParams()

//     const [products, setProducts] = useState([])
//     const url ="http://localhost:1000/api"

//     useEffect(() => {
//         const fetchProduct = async () => {
//             const api = await axios.get(`${url}/product/${id}`, {
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 withCredentials: true
//             })
//             setProducts(api.data.product)

//         }
//         fetchProduct()
//     }, [id])

//     console.log(products)
//     return (
//         <>
//         <div className='text-white  m-10 flex justify-around '>
//             <div>
//                 <img src={products.imgSrc} className='size-[250px] rounded border border-lg border-yellow-400' />
//             </div>
//             <div className='text-center'>
//                 <h1 className='text-4xl '>{products.title}</h1>
//                 <p className='py-2'>{products.description}</p>
//                 <h1 className='text-4xl py-2'> {products.price} {" ₹"}</h1>
//                 <h1 className='text-xl py-2'> {products.category} {" ₹"}</h1>

//                 <div className='py-2'>
//                     <button className='py-2 px-3 mr-5 bg-red-600 rounded'>Buy Now</button>
//                     <button className='py-2 px-3  bg-yellow-600 rounded'>Add to cart</button>

//                 </div>
//             </div>
//         </div>
//         <RelatedProduct category ={products.category}/>
//         </>
//     )
// }

// export default ProductDetails

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import RelatedProduct from './RelatedProduct'

const ProductDetails = () => {

    const { id } = useParams()

    const [products, setProducts] = useState([])

    const url = "https://mern-e-comerce-api.onrender.com/api"

    useEffect(() => {

        const fetchProduct = async () => {

            const api = await axios.get(`${url}/product/${id}`, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })

            setProducts(api.data.product)

        }

        fetchProduct()

    }, [id])

    console.log(products)

    return (
        <>

            <div className='min-h-screen bg-white text-black px-4 md:px-10 py-10'>

                {/* Main Section */}
                <div className='bg-gray-100 border border-black/10 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-10 shadow-2xl'>

                    {/* Product Image */}
                    <div className='w-full md:w-1/2 flex justify-center'>

                        <img
                            src={products.imgSrc}
                            alt="product"
                            className='w-full max-w-[350px] h-[350px] object-cover rounded-2xl p-2 bg-white shadow-lg'
                        />

                    </div>

                    {/* Product Details */}
                    <div className='w-full md:w-1/2 text-center md:text-left'>

                        <h1 className='text-3xl md:text-5xl font-extrabold text-black mb-5'>
                            {products.title}
                        </h1>

                        <p className='text-gray-700 text-base md:text-lg leading-7 mb-5 font-medium'>
                            {products.description}
                        </p>

                        <h1 className='text-3xl font-extrabold text-black mb-4'>
                            ₹ {products.price}
                        </h1>

                        <h1 className='text-lg md:text-xl text-black font-bold mb-8'>
                            Category : <span className='text-orange-500'>{products.category}</span>
                        </h1>

                        {/* Buttons */}
                        <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>

                            <button className='py-3 px-8 bg-black hover:bg-gray-900 rounded-lg text-white font-semibold transition duration-300'>
                                Buy Now
                            </button>

                            <button className='py-3 px-8 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-semibold transition duration-300'>
                                Add to cart
                            </button>

                        </div>

                    </div>

                </div>

                {/* Related Product */}
                <div className='mt-12'>

                    <RelatedProduct category={products.category} />

                </div>

            </div>

        </>
    )
}

export default ProductDetails