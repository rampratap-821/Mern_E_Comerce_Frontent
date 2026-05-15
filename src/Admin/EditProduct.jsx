// import React from 'react'

// const EditProduct = () => {
//   return (
//     <div className='text-white'>
//       EditProduct
//     </div>
//   )
// }

// export default EditProduct



import React, { useContext, useState } from "react";
import AppContext from "../Context/AppContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const EditProduct = () => {
  const {url,reload, setReload} = useContext(AppContext)
  const{id} = useParams()
  console.log("edit",id)
  const navigate = useNavigate()

  const [addProduct, setAddProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    qty: "",
    imgSrc: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target
    setAddProduct({ ...addProduct, [name]: value })
  };



  const handleSubmit = async (e) => {
    e.preventDefault()
    const updateProduct = await axios.put(`${url}/product/${id}`,addProduct,{
         headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
    })
    console.log("edit to product",updateProduct)
    setReload(!reload)
    if(updateProduct.data.sucess){
        navigate("/goToHome")
    }

  };



  return (

    <div className="min-h-screen  flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-3xl border border-yellow-400 rounded-2xl p-8 bg-gradient-to-br from-blue-950 via-blue-700 to-cyan-500 shadow-[0_0_20px_rgba(255,255,0,0.2)]">

        {/* Heading */}
        <h1 className="text-white text-5xl font-bold text-center mb-10">
         Edit Product
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-7">

          {/* Title */}
          <div>
            <label className="block text-white text-xl font-semibold mb-2">
              Title
            </label>

            <input
              required
              type="text"
              name="title"
              value={addProduct.title}
              onChange={handleChange}
              placeholder="Enter product title"
              className="w-full bg-[#1c2128] border border-gray-500 rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-400"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-white text-xl font-semibold mb-2">
              Description
            </label>

            <textarea
              required
              rows="4"
              name="description"
              value={addProduct.description}
              onChange={handleChange}
              placeholder="Enter product description"
              className="w-full bg-[#1c2128] border border-gray-500 rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-400 resize-none"
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label className="block text-white text-xl font-semibold mb-2">
              Price
            </label>

            <input
              required
              type="number"
              name="price"
              value={addProduct.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full bg-[#1c2128] border border-gray-500 rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-400"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-white text-xl font-semibold mb-2">
              Category
            </label>

            <input
              required
              name="category"
              value={addProduct.category}
              onChange={handleChange}
              className="w-full bg-[#1c2128] border border-gray-500 rounded-lg px-4 py-3 text-gray-300 outline-none focus:border-yellow-400"
            >
             
            </input>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-white text-xl font-semibold mb-2">
              imgSrc
            </label>

            <input
              required
              type="text"
              name="imgSrc"
              value={addProduct.imgUrl}
              onChange={handleChange}
              placeholder="Enter image url"
              className="w-full bg-[#1c2128] border border-gray-500 rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-400"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-white text-xl font-semibold mb-2">
              product quantity
            </label>

            <input
              required
              type="number"
              name="qty"
              value={addProduct.qty}
              onChange={handleChange}
              placeholder="Enter quantity"
              className="w-full bg-[#1c2128] border border-gray-500 rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-400"
            />
          </div>

          {/* Button */}
          <div className="flex justify-center pt-4">

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold px-20 py-3 rounded-lg text-lg shadow-lg"
            >
             Edit Product
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditProduct;