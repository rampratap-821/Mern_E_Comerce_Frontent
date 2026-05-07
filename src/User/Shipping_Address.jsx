import React, { useContext, useState } from "react";
import AppContext from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

const Shipping_Address = () => {
    const { shippingAddress, userAddress } = useContext(AppContext)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',  // यहाँ addressLine रखें, address नहीं
        city: '',
        state: '',
        country: '',
        pincode: '',
        phoneNumber: ''    // name="phoneNumber" रखें
    });

    const onchangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const { fullName, address, city, state, country, pincode, phoneNumber } = formData;

    const submitForm = async (e) => {
        e.preventDefault();
        const result = await shippingAddress(fullName, address, city, state, country, pincode, phoneNumber)
        if (result.sucess) {
            navigate("/checkout")
        }

        setFormData({
            fullName: '',
            address: '',  // यहाँ addressLine रखें, address नहीं
            city: '',
            state: '',
            country: '',
            pincode: '',
            phoneNumber: ''
        })
    };



    return (
        <>
            <form onSubmit={submitForm} className="min-h-screen bg-black flex items-center justify-center px-4">
                <div className="w-full max-w-5xl border border-yellow-400 rounded-xl p-8">

                    <h1 className="text-4xl font-semibold text-center text-white mb-10">
                        Shipping Address
                    </h1>

                    {/* Form Grid */}
                    <div className="grid md:grid-cols-3 gap-6">

                        {/* Full Name */}
                        <div>
                            <label className="text-white block mb-2">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={onchangeHandler}
                                className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Country */}
                        <div>
                            <label className="text-white block mb-2">Country</label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={onchangeHandler}
                                className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* State */}
                        <div>
                            <label className="text-white block mb-2">State</label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={onchangeHandler}
                                className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* City */}
                        <div>
                            <label className="text-white block mb-2">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={onchangeHandler}
                                className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Pincode */}
                        <div>
                            <label className="text-white block mb-2">Pincode</label>
                            <input
                                type="text"
                                name="pincode"
                                value={formData.pincode}
                                onChange={onchangeHandler}
                                className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="text-white block mb-2">Phone Number</label>
                            <input
                                type="tel"
                                name="phoneNumber"  // यहाँ phoneNumber रखें
                                value={formData.phoneNumber}
                                onChange={onchangeHandler}
                                className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Address Line */}
                    <div className="mt-6">
                        <label className="text-white block mb-2">
                            AddressLine/Nearby
                        </label>
                        <textarea
                            name="address"  // यहाँ addressLine रखें
                            value={formData.address}
                            onChange={onchangeHandler}
                            className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="3"
                            required
                        ></textarea>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col items-center mt-8 gap-4">
                        <button
                            type="submit"
                            className="w-72 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
                        >
                            Submit
                        </button>


                    </div>

                </div>
            </form>
           {
            userAddress && (
                 <div className="flex flex-col items-center mb-8 gap-4">
                <button
                onClick={()=>navigate("/checkout")}
                    className="w-72 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-md transition"
                >
                    Use Old Address
                </button>
            </div>
            )
           }
        </>
    );
};

export default Shipping_Address;