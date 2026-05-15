// import React, { useContext, useState } from "react";
// import AppContext from "../Context/AppContext";
// import { useNavigate } from "react-router-dom";

// const Shipping_Address = () => {
//     const { shippingAddress, userAddress } = useContext(AppContext)
//     const navigate = useNavigate()
//     const [formData, setFormData] = useState({
//         fullName: '',
//         address: '',  // यहाँ addressLine रखें, address नहीं
//         city: '',
//         state: '',
//         country: '',
//         pincode: '',
//         phoneNumber: ''    // name="phoneNumber" रखें
//     });

//     const onchangeHandler = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const { fullName, address, city, state, country, pincode, phoneNumber } = formData;

//     const submitForm = async (e) => {
//         e.preventDefault();
//         const result = await shippingAddress(fullName, address, city, state, country, pincode, phoneNumber)
//         if (result.sucess) {
//             navigate("/checkout")
//         }

//         setFormData({
//             fullName: '',
//             address: '',  // यहाँ addressLine रखें, address नहीं
//             city: '',
//             state: '',
//             country: '',
//             pincode: '',
//             phoneNumber: ''
//         })
//     };



//     return (
//         <>
//             <form onSubmit={submitForm} className="min-h-screen bg-black flex items-center justify-center px-4">
//                 <div className="w-full max-w-5xl border border-yellow-400 rounded-xl p-8">

//                     <h1 className="text-4xl font-semibold text-center text-white mb-10">
//                         Shipping Address
//                     </h1>

//                     {/* Form Grid */}
//                     <div className="grid md:grid-cols-3 gap-6">

//                         {/* Full Name */}
//                         <div>
//                             <label className="text-white block mb-2">Full Name</label>
//                             <input
//                                 type="text"
//                                 name="fullName"
//                                 value={formData.fullName}
//                                 onChange={onchangeHandler}
//                                 className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 required
//                             />
//                         </div>

//                         {/* Country */}
//                         <div>
//                             <label className="text-white block mb-2">Country</label>
//                             <input
//                                 type="text"
//                                 name="country"
//                                 value={formData.country}
//                                 onChange={onchangeHandler}
//                                 className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 required
//                             />
//                         </div>

//                         {/* State */}
//                         <div>
//                             <label className="text-white block mb-2">State</label>
//                             <input
//                                 type="text"
//                                 name="state"
//                                 value={formData.state}
//                                 onChange={onchangeHandler}
//                                 className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 required
//                             />
//                         </div>

//                         {/* City */}
//                         <div>
//                             <label className="text-white block mb-2">City</label>
//                             <input
//                                 type="text"
//                                 name="city"
//                                 value={formData.city}
//                                 onChange={onchangeHandler}
//                                 className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 required
//                             />
//                         </div>

//                         {/* Pincode */}
//                         <div>
//                             <label className="text-white block mb-2">Pincode</label>
//                             <input
//                                 type="text"
//                                 name="pincode"
//                                 value={formData.pincode}
//                                 onChange={onchangeHandler}
//                                 className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 required
//                             />
//                         </div>

//                         {/* Phone Number */}
//                         <div>
//                             <label className="text-white block mb-2">Phone Number</label>
//                             <input
//                                 type="tel"
//                                 name="phoneNumber"  // यहाँ phoneNumber रखें
//                                 value={formData.phoneNumber}
//                                 onChange={onchangeHandler}
//                                 className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 required
//                             />
//                         </div>
//                     </div>

//                     {/* Address Line */}
//                     <div className="mt-6">
//                         <label className="text-white block mb-2">
//                             AddressLine/Nearby
//                         </label>
//                         <textarea
//                             name="address"  // यहाँ addressLine रखें
//                             value={formData.address}
//                             onChange={onchangeHandler}
//                             className="w-full bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             rows="3"
//                             required
//                         ></textarea>
//                     </div>

//                     {/* Buttons */}
//                     <div className="flex flex-col items-center mt-8 gap-4">
//                         <button
//                             type="submit"
//                             className="w-72 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
//                         >
//                             Submit
//                         </button>


//                     </div>

//                 </div>
//             </form>
//            {
//             userAddress && (
//                  <div className="flex flex-col items-center mb-8 gap-4">
//                 <button
//                 onClick={()=>navigate("/checkout")}
//                     className="w-72 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-md transition"
//                 >
//                     Use Old Address
//                 </button>
//             </div>
//             )
//            }
//         </>
//     );
// };

// export default Shipping_Address;


import React, { useContext, useState } from "react";
import AppContext from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

const Shipping_Address = () => {

    const { shippingAddress, userAddress } = useContext(AppContext)

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
        phoneNumber: ''
    });

    const onchangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const { fullName, address, city, state, country, pincode, phoneNumber } = formData;

    const submitForm = async (e) => {
        e.preventDefault();

        const result = await shippingAddress(
            fullName,
            address,
            city,
            state,
            country,
            pincode,
            phoneNumber
        )

        if (result.sucess) {
            navigate("/checkout")
        }

        setFormData({
            fullName: '',
            address: '',
            city: '',
            state: '',
            country: '',
            pincode: '',
            phoneNumber: ''
        })
    };

    return (
        /* Changed bg-black/text-white to bg-white/text-gray-900 */
        <div className="min-h-screen bg-white text-gray-900 px-4 py-8">

            {/* Form Section - Added light border and soft shadow */}
            <form
                onSubmit={submitForm}
                className="max-w-6xl mx-auto border border-gray-200 rounded-3xl p-5 md:p-10 shadow-xl bg-white"
            >

                {/* Heading - Changed to dark for contrast on white */}
                <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 text-gray-800">
                    Shipping Address
                </h1>

                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Full Name */}
                    <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-600">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={onchangeHandler}
                            placeholder="Enter your full name"
                            /* Changed input bg to white and border to light gray */
                            className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-yellow-500 transition"
                            required
                        />
                    </div>

                    {/* Country */}
                    <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-600">
                            Country
                        </label>

                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={onchangeHandler}
                            placeholder="Enter country"
                            className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-yellow-500 transition"
                            required
                        />
                    </div>

                    {/* State */}
                    <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-600">
                            State
                        </label>

                        <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={onchangeHandler}
                            placeholder="Enter state"
                            className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-yellow-500 transition"
                            required
                        />
                    </div>

                    {/* City */}
                    <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-600">
                            City
                        </label>

                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={onchangeHandler}
                            placeholder="Enter city"
                            className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-yellow-500 transition"
                            required
                        />
                    </div>

                    {/* Pincode */}
                    <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-600">
                            Pincode
                        </label>

                        <input
                            type="text"
                            name="pincode"
                            value={formData.pincode}
                            onChange={onchangeHandler}
                            placeholder="Enter pincode"
                            className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-yellow-500 transition"
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-600">
                            Phone Number
                        </label>

                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={onchangeHandler}
                            placeholder="Enter phone number"
                            className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 outline-none focus:border-yellow-500 transition"
                            required
                        />
                    </div>

                </div>

                {/* Address */}
                <div className="mt-7">
                    <label className="block mb-2 text-sm font-semibold text-gray-600">
                        AddressLine / Nearby
                    </label>

                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={onchangeHandler}
                        rows="4"
                        placeholder="Enter full address"
                        className="w-full bg-white border border-gray-300 rounded-2xl px-4 py-3 text-gray-900 outline-none focus:border-yellow-500 transition resize-none"
                        required
                    ></textarea>
                </div>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-10">

                    <button
                        type="submit"
                        className="w-full md:w-72 bg-gradient-to-br from-blue-950 via-blue-700 to-cyan-500  text-black font-bold py-3 rounded-xl transition duration-300 shadow-md"
                    >
                        Save & Continue
                    </button>

                    {
                        userAddress && (
                            <button
                                type="button"
                                onClick={() => navigate("/checkout")}
                                className="w-full md:w-72 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition duration-300 shadow-md"
                            >
                                Use Old Address
                            </button>
                        )
                    }

                </div>

            </form>

        </div>
    );
};

export default Shipping_Address;