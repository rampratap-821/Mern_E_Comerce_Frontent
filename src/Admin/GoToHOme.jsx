// import React, { useContext } from 'react'
// import AppContext from '../Context/AppContext'
// import { Link } from 'react-router-dom'

// const GoToHOme = () => {

//     const { products,DeleteProduct } = useContext(AppContext)

//     return (
//         <div className="min-h-screen  py-10 px-4">

//             <div className="max-w-7xl mx-auto space-y-8">

//                 {
//                     products.map((data) => (

//                         <div
//                             key={data._id}
//                             className=" rounded-2xl px-6 py-6 flex flex-col md:flex-row items-center justify-between shadow-lg border border-gray-700 hover:scale-[1.01] transition duration-300"
//                         >

//                             {/* Left Side */}
//                             <div className="flex flex-col md:flex-row items-center gap-6 w-full">

//                                 {/* Image */}
//                                 <Link to={`/product/${data._id}`}>

//                                     <div className="bg-white p-2 rounded-xl border-4 border-yellow-400 shadow-md">

//                                         <img
//                                             src={data.imgSrc}
//                                             alt={data.title}
//                                             className="w-[110px] h-[110px] object-contain"
//                                         />

//                                     </div>

//                                 </Link>

//                                 {/* Product Info */}
//                                 <div className="text-center md:text-left flex-1">

//                                     <Link to={`/product/${data._id}`}>

//                                         <h1 className="text-white text-3xl font-bold hover:text-yellow-400 transition duration-300">
//                                             {data.title}
//                                         </h1>

//                                     </Link>

//                                     <p className="text-gray-600 mt-3 text-sm md:text-lg leading-relaxed max-w-3xl">
//                                         {data.description}
//                                     </p>

//                                     <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">

//                                         <span className="text-yellow-400 text-2xl font-bold">
//                                             ₹{data.price}
//                                         </span>

//                                         <span className="text-gray-400 line-through">
//                                             ₹{data.price + 500}
//                                         </span>

//                                     </div>

//                                     <p className="text-gray-500 text-sm mt-3">
//                                         {new Date(data.createdAt).toLocaleString()}
//                                     </p>

//                                 </div>

//                             </div>

//                             {/* Buttons */}
//                             <div className="flex items-center gap-4 mt-6 md:mt-0">

//                                 <Link 
//                                 to={`/editProduct/${data._id}`}
//                                 className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg transition duration-300">
//                                     Edit
//                                 </Link>

//                                 <button onClick={()=>DeleteProduct(data._id)} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg transition duration-300">
//                                     Delete
//                                 </button>

//                             </div>

//                         </div>

//                     ))
//                 }

//             </div>

//         </div>
//     )
// }

// export default GoToHOme


import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'
import { Link } from 'react-router-dom'

const GoToHOme = () => {

    const { products, DeleteProduct } = useContext(AppContext)

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">

            <div className="max-w-7xl mx-auto space-y-8">

                {
                    products.map((data) => (

                        <div
                            key={data._id}
                            className="bg-white rounded-2xl px-6 py-6 flex flex-col md:flex-row items-center justify-between shadow-lg border border-blue-300 hover:scale-[1.01] transition duration-300"
                        >

                            {/* Left Side */}
                            <div className="flex flex-col md:flex-row items-center gap-6 w-full">

                                {/* Image */}
                                <Link to={`/product/${data._id}`}>

                                    <div className=" p-2 rounded-xl shadow-md">

                                        <img
                                            src={data.imgSrc}
                                            alt={data.title}
                                            className="w-[110px] h-[110px] object-contain"
                                        />

                                    </div>

                                </Link>

                                {/* Product Info */}
                                <div className="text-center md:text-left flex-1">

                                    <Link to={`/product/${data._id}`}>

                                        <h1 className="text-gray-800 text-3xl font-bold hover:bg-gradient-to-r hover:from-blue-700 hover:via-blue-500 hover:to-sky-400 hover:bg-clip-text hover:text-transparent transition duration-300">
                                            {data.title}
                                        </h1>

                                    </Link>

                                    <p className="text-gray-600 mt-3 text-sm md:text-lg leading-relaxed max-w-3xl">
                                        {data.description}
                                    </p>

                                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">

                                        <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent text-2xl font-bold">
                                            ₹{data.price}
                                        </span>

                                        <span className="text-gray-400 line-through">
                                            ₹{data.price + 500}
                                        </span>

                                    </div>

                                    <p className="text-gray-500 text-sm mt-3">
                                        {new Date(data.createdAt).toLocaleString()}
                                    </p>

                                </div>

                            </div>

                            {/* Buttons */}
                            <div className="flex items-center gap-4 mt-6 md:mt-0">

                                <Link
                                    to={`/editProduct/${data._id}`}
                                    className="bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 hover:from-blue-800 hover:via-blue-600 hover:to-sky-500 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
                                >
                                    Edit
                                </Link>

                                <button
                                    onClick={() => DeleteProduct(data._id)}
                                    className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>
    )
}

export default GoToHOme