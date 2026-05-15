// import React, { useContext, useEffect, useState } from 'react'
// import AppContext from '../Context/AppContext'
// import { Link } from 'react-router-dom'

// const Cart = () => {
//     const { cart, decreaseQty, addToCart, removeFromCart, clearCart } = useContext(AppContext)
//     const [qty, setQty] = useState(0)
//     const [price, setPrice] = useState(0)
//     console.log("cart", cart)

//     useEffect(() => {
//         let qty = 0
//         let price = 0
//         if (cart?.items) {
//             for (let i = 0; i < cart?.items?.length; i++) {
//                 qty += cart.items[i].qty
//                 price += cart.items[i].price

//             }
//         }
//         setQty(qty)
//         setPrice(price)
//     }, [cart])

//     return (
//         <>
//           <div className='text-center mt-5'>
//     {cart?.items?.length === 0 ? (
//         <Link to ={"/"} className='px-2 py-2 mx-2 rounded bg-green-600'>
//            Continue Shopping
//         </Link>
//     ) : (
//         <>
//             <button className='px-2 py-2 mx-2 rounded bg-yellow-600'>
//                 total qty {qty}
//             </button>
//             <button className='px-2 py-2 mx-2 rounded bg-green-600'>
//                 total price {price}
//             </button>
//         </>
//     )}
// </div>

//             <div>
//                 {
//                     cart?.items?.map((product) =>
//                         <div key={product._id} className='flex justify-between bg-gray-900 m-2 items-center text-center'>
//                             <div>
//                                 <img src={product.imgSrc} className='size-[150px] m-2 rounded' />
//                             </div>

//                             <div>
//                                 <h1>{product.title}</h1>
//                                 <h4>{product.price}</h4>
//                                 <h4>{product.qty}</h4>
//                             </div>

//                             <div>
//                                 <button className='px-2 py-2 mx-2 rounded bg-red-600' onClick={() => decreaseQty(product.productId, 1)}> Decrease qty --{"-"}</button>
//                                 <button className='px-2 py-2 mx-2 rounded bg-red-600'
//                                     onClick={() => addToCart(
//                                         product?.productId,
//                                         product.title,
//                                         product.price / product.qty,
//                                         1,
//                                         product.imgSrc)}
//                                 >Increase qty --{"+"}</button>
//                                 <button className='px-2 py-2 mx-2 rounded bg-red-600'
//                                     onClick={() => {
//                                         if (confirm("are you sure ,want to from cart")) {
//                                             removeFromCart(product?.productId,)
//                                         }
//                                     }
//                                     }
//                                 >Remove</button>

//                             </div>

//                         </div>
//                     )
//                 }
//             </div>
//             {
//                 cart?.items?.length > 0 && (
//                     <div className='text-center'>
//                         <Link to={"/shipping_Address"} className='px-2 py-2 mx-2 rounded bg-yellow-600'>checkout</Link>
//                         <button className='px-4 py-2 mx-2 rounded bg-red-600 m-10'
//                             onClick={() => {
//                                 if (confirm("are you sure want to clear cart")) {
//                                     clearCart()
//                                 }
//                             }}
//                         >clear</button>

//                     </div>
//                 )
//             }
//         </>
//     )
// }

// export default Cart

import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../Context/AppContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, decreaseQty, addToCart, removeFromCart, clearCart } = useContext(AppContext);
    const [qty, setQty] = useState(0);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        let qty = 0;
        let price = 0;
        if (cart?.items) {
            for (let i = 0; i < cart?.items?.length; i++) {
                qty += cart.items[i].qty;
                price += cart.items[i].price;
            }
        }
        setQty(qty);
        setPrice(price);
    }, [cart]);

    // Blue Gradient Utility Classes
    const blueGradient = "bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-700 shadow-lg shadow-blue-500/30 transition-all duration-300";

    // 1. EMPTY WISHLIST UI (Matching your image)
    if (!cart?.items || cart.items.length === 0) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center">
                <div className="bg-white p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] text-center max-w-sm w-full border border-gray-100">
                    <div className="flex justify-center mb-4">
                        <svg width="70" height="70" viewBox="0 0 24 24" fill="#3c1bb3">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-1">Wishlist is Empty</h2>
                    <p className="text-gray-500 mb-8">Start adding products you love</p>
                    <Link to="/" className="inline-block w-full py-3 rounded-lg text-white font-bold bg-gradient-to-br from-blue-950 via-blue-700 to-cyan-500 shadow-lg">
                        Start Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className='min-h-screen text-white px-3 md:px-10 py-6'>

            {/* Top Section - Blue Gradient Buttons */}
            <div className='text-center mb-8'>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
                    <button className={`px-8 py-3 rounded-xl font-bold border border-blue-400/30 ${blueGradient} w-full sm:w-auto`}>
                        Total Qty : {qty}
                    </button>

                    <button className={`px-8 py-3 rounded-xl font-bold border border-blue-400/30 ${blueGradient} w-full sm:w-auto`}>
                        Total Price : ₹ {price}
                    </button>
                </div>
            </div>

            {/* Cart Items */}
            <div className='space-y-6'>
                {cart?.items?.map((product) => (
                    <div
                        key={product._id}
                        className=' text-black border border-blue-500/20 rounded-2xl p-4 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl hover:border-blue-500/50 transition-all duration-300'
                    >
                        {/* Image */}
                        <div className='w-full lg:w-[20%] flex justify-center'>
                            <img
                                src={product.imgSrc}
                                alt="product"
                                className='w-[160px] h-[160px] object-cover rounded-xl border-2 border-blue-500/20'
                            />
                        </div>

                        {/* Product Info */}
                        <div className='text-center lg:text-left flex-1'>
                            <h1 className='text-xl md:text-2xl font-bold mb-2'>{product.title}</h1>
                            <h4 className='text-lg text-blue-400 font-semibold mb-1'>Price : ₹ {product.price}</h4>
                            <h4 className='text-md text-gray-400'>Qty : {product.qty}</h4>
                        </div>

                        {/* Buttons with Blue Gradient */}
                        <div className='flex flex-wrap justify-center gap-3'>
                            <button
                                className='px-5 py-2 rounded-lg bg-red-800 hover:bg-red-900 transition-colors duration-300 font-semibold border border-slate-600'
                                onClick={() => decreaseQty(product.productId, 1)}
                            >
                                - Decrease
                            </button>

                            <button
                                className={`px-5 py-2 rounded-lg font-semibold ${blueGradient}`}
                                onClick={() => addToCart(product.productId, product.title, product.price / product.qty, 1, product.imgSrc)}
                            >
                                + Increase
                            </button>

                            <button
                                className='px-5 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 font-semibold'
                                onClick={() => {
                                    if (confirm("Are you sure?")) removeFromCart(product.productId);
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Actions */}
            <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-12'>
                <Link
                    to={"/shipping_Address"}
                    className={`w-full sm:w-72 text-center px-8 py-4 rounded-xl font-bold text-xl ${blueGradient}`}
                >
                    Checkout Now
                </Link>

                <button
                    className='w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 font-bold'
                    onClick={() => {
                        if (confirm("Clear your cart?")) clearCart();
                    }}
                >
                    Clear Cart
                </button>
            </div>

        </div>
    );
};

export default Cart;