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


import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../Context/AppContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, decreaseQty, addToCart, removeFromCart, clearCart } = useContext(AppContext)

    const [qty, setQty] = useState(0)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        let qty = 0
        let price = 0

        if (cart?.items) {
            for (let i = 0; i < cart?.items?.length; i++) {
                qty += cart.items[i].qty
                price += cart.items[i].price
            }
        }

        setQty(qty)
        setPrice(price)
    }, [cart])

    return (
        <div className='min-h-screen bg-black text-white px-3 md:px-10 py-6'>

            {/* Top Section */}
            <div className='text-center mb-8'>
                {cart?.items?.length === 0 ? (
                    <Link
                        to={"/"}
                        className='inline-block px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 duration-300 font-semibold'
                    >
                        Continue Shopping
                    </Link>
                ) : (
                    <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
                        <button className='px-6 py-3 rounded-lg bg-yellow-500 text-black font-bold shadow-lg w-full sm:w-auto'>
                            Total Qty : {qty}
                        </button>

                        <button className='px-6 py-3 rounded-lg bg-green-600 font-bold shadow-lg w-full sm:w-auto'>
                            Total Price : ₹ {price}
                        </button>
                    </div>
                )}
            </div>

            {/* Cart Items */}
            <div className='space-y-6'>
                {
                    cart?.items?.map((product) =>

                        <div
                            key={product._id}
                            className='bg-gray-900 border border-gray-700 rounded-2xl p-4 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl hover:scale-[1.01] duration-300'
                        >

                            {/* Image */}
                            <div className='w-full lg:w-[20%] flex justify-center'>
                                <img
                                    src={product.imgSrc}
                                    alt="product"
                                    className='w-[180px] h-[180px] object-cover rounded-xl'
                                />
                            </div>

                            {/* Product Info */}
                            <div className='text-center lg:text-left flex-1'>
                                <h1 className='text-xl md:text-2xl font-bold mb-3'>
                                    {product.title}
                                </h1>

                                <h4 className='text-lg text-green-400 mb-2'>
                                    Price : ₹ {product.price}
                                </h4>

                                <h4 className='text-md text-yellow-400 font-semibold'>
                                    Qty : {product.qty}
                                </h4>
                            </div>

                            {/* Buttons */}
                            <div className='flex flex-wrap justify-center gap-3'>

                                <button
                                    className='px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 duration-300 font-semibold'
                                    onClick={() => decreaseQty(product.productId, 1)}
                                >
                                    - Decrease
                                </button>

                                <button
                                    className='px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 duration-300 font-semibold'
                                    onClick={() =>
                                        addToCart(
                                            product?.productId,
                                            product.title,
                                            product.price / product.qty,
                                            1,
                                            product.imgSrc
                                        )
                                    }
                                >
                                    + Increase
                                </button>

                                <button
                                    className='px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 duration-300 font-semibold'
                                    onClick={() => {
                                        if (confirm("are you sure ,want to from cart")) {
                                            removeFromCart(product?.productId)
                                        }
                                    }}
                                >
                                    Remove
                                </button>

                            </div>

                        </div>
                    )
                }
            </div>

            {/* Bottom Buttons */}
            {
                cart?.items?.length > 0 && (
                    <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-10'>

                        <Link
                            to={"/shipping_Address"}
                            className='w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-yellow-500 text-black font-bold hover:bg-yellow-400 duration-300'
                        >
                            Checkout
                        </Link>

                        <button
                            className='w-full sm:w-auto px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 duration-300 font-bold'
                            onClick={() => {
                                if (confirm("are you sure want to clear cart")) {
                                    clearCart()
                                }
                            }}
                        >
                            Clear Cart
                        </button>

                    </div>
                )
            }

        </div>
    )
}

export default Cart
