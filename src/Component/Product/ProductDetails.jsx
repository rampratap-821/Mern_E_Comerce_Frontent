import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import RelatedProduct from './RelatedProduct'

const ProductDetails = () => {
    const { id } = useParams()

    const [products, setProducts] = useState([])
    const url ="https://mern-e-comerce-api.onrender.com/api"

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
        <div className='text-white  m-10 flex justify-around '>
            <div>
                <img src={products.imgSrc} className='size-[250px] rounded border border-lg border-yellow-400' />
            </div>
            <div className='text-center'>
                <h1 className='text-4xl '>{products.title}</h1>
                <p className='py-2'>{products.description}</p>
                <h1 className='text-4xl py-2'> {products.price} {" ₹"}</h1>
                <h1 className='text-xl py-2'> {products.category} {" ₹"}</h1>

                <div className='py-2'>
                    <button className='py-2 px-3 mr-5 bg-red-600 rounded'>Buy Now</button>
                    <button className='py-2 px-3  bg-yellow-600 rounded'>Add to cart</button>

                </div>
            </div>
        </div>
        <RelatedProduct category ={products.category}/>
        </>
    )
}

export default ProductDetails
