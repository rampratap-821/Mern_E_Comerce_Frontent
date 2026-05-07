import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../Context/AppContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, decreaseQty, addToCart, removeFromCart, clearCart } = useContext(AppContext)
    const [qty, setQty] = useState(0)
    const [price, setPrice] = useState(0)
    console.log("cart", cart)

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
        <>
          <div className='text-center mt-5'>
    {cart?.items?.length === 0 ? (
        <Link to ={"/"} className='px-2 py-2 mx-2 rounded bg-green-600'>
           Continue Shopping
        </Link>
    ) : (
        <>
            <button className='px-2 py-2 mx-2 rounded bg-yellow-600'>
                total qty {qty}
            </button>
            <button className='px-2 py-2 mx-2 rounded bg-green-600'>
                total price {price}
            </button>
        </>
    )}
</div>

            <div>
                {
                    cart?.items?.map((product) =>
                        <div key={product._id} className='flex justify-between bg-gray-900 m-2 items-center text-center'>
                            <div>
                                <img src={product.imgSrc} className='size-[150px] m-2 rounded' />
                            </div>

                            <div>
                                <h1>{product.title}</h1>
                                <h4>{product.price}</h4>
                                <h4>{product.qty}</h4>
                            </div>

                            <div>
                                <button className='px-2 py-2 mx-2 rounded bg-red-600' onClick={() => decreaseQty(product.productId, 1)}> Decrease qty --{"-"}</button>
                                <button className='px-2 py-2 mx-2 rounded bg-red-600'
                                    onClick={() => addToCart(
                                        product?.productId,
                                        product.title,
                                        product.price / product.qty,
                                        1,
                                        product.imgSrc)}
                                >Increase qty --{"+"}</button>
                                <button className='px-2 py-2 mx-2 rounded bg-red-600'
                                    onClick={() => {
                                        if (confirm("are you sure ,want to from cart")) {
                                            removeFromCart(product?.productId,)
                                        }
                                    }
                                    }
                                >Remove</button>

                            </div>

                        </div>
                    )
                }
            </div>
            {
                cart?.items?.length > 0 && (
                    <div className='text-center'>
                        <Link to={"/shipping_Address"} className='px-2 py-2 mx-2 rounded bg-yellow-600'>checkout</Link>
                        <button className='px-4 py-2 mx-2 rounded bg-red-600 m-10'
                            onClick={() => {
                                if (confirm("are you sure want to clear cart")) {
                                    clearCart()
                                }
                            }}
                        >clear</button>

                    </div>
                )
            }
        </>
    )
}

export default Cart
