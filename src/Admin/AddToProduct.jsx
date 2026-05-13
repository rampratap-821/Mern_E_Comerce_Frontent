

import React, { useContext, useState } from "react";
import AppContext from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

const AddToCart = () => {
  const { addToProduct } = useContext(AppContext)
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

  const { title, description, price, category, qty, imgSrc } = addProduct

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToProduct(title, description, price, category, qty, imgSrc)
    // console.log("success", result?.sucess)
    if (result?.sucess) {
      navigate("/goToHome")
    }

  };

  return (

    <div className="min-h-screen  flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-3xl border border-yellow-400 rounded-2xl p-8 bg-black shadow-[0_0_20px_rgba(255,255,0,0.2)]">

        {/* Heading */}
        <h1 className="text-white text-5xl font-bold text-center mb-10">
          Add Product
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

            <select
              required
              name="category"
              value={addProduct.category}
              onChange={handleChange}
              className="w-full bg-[#1c2128] border border-gray-500 rounded-lg px-4 py-3 text-gray-300 outline-none focus:border-yellow-400"
            >
              <option value="">--Select Category--</option>
              <option value="Laptop">Laptop</option>
              <option value="Mobile">Mobile</option>
              <option value="Watch">Camera</option>
              <option value="Headphone">Headphone</option>
            </select>
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
              Add Product
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddToCart;