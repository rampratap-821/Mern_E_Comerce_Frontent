import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../Context/AppContext'
import { Link, useNavigate } from 'react-router-dom'
import { GrAddCircle, GrSubtractCircle } from 'react-icons/gr'
import { MdDeleteForever } from 'react-icons/md'
import axios from 'axios'

const Chekout = () => {
  const { cart, decreaseQty, addToCart, removeFromCart, userAddress, url, user, clearCart } = useContext(AppContext)
  console.log("useraddress ji ", userAddress)
  const [qty, setQty] = useState(0)
  const [price, setPrice] = useState(0)
  const navigate = useNavigate()

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

  const handlePayment = async () => {
    try {
      const orderResponse = await axios.post(`${url}/payment/checkout`, {
        amount: price,
        qty: qty,
        cartItem: cart?.items,
        userShipping: userAddress,
        userId: user?._id
      });

      console.log("order Response", orderResponse)
      const { orderId, amount: orderAmount } = orderResponse.data

      var options = {
        "key": "rzp_test_SltMNlPol4tWXt", // Enter the Key ID generated from the Dashboard
        "amount": orderAmount * 100, // Amount is in currency subunits. 
        "currency": "INR",
        "name": "Rampratap",
        "description": "Rampratap",
        "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": async function (response) {
          const paymentData = {
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
            amount: orderAmount,
            orderItem: cart?.items,
            userId: user?._id,
            userShipping: userAddress
          }

          const api = await axios.post(`${url}/payment/variefy-payment`, paymentData)
          console.log("razorpay res", api.data)
          if (api.data.success) {

            clearCart()
            navigate("/orderConfirmation");

          }

        },
        "prefill": {
          "name": "Rampratap",
          "email": "rampratap@example.com",
          "contact": "+919876543210"
        },
        "notes": {
          "address": "Bahadurpur Rajpoot Distrct Moradabad"
        },
        "theme": {
          "color": "#3399cc"
        }
      };
      const rzp = new window.Razorpay(options);
      rzp.open();


    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div >
        <h1 className='text-center'>Order Sumary</h1>

        <div className='  '>
          <table className='border border-yellow-600 w-full'>
            <thead>
              <tr>
                <th className='border border-yellow-600 w-[70%]'>Product Details</th>
                <th className='border border-yellow-600 '> Shipping Address</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className='border border-yellow-600 w-[70%]'>
                  <table className='w-full text-center '>
                    <thead className='m-4'>
                      <tr >
                        <th className='border border-yellow-600'>Product img</th>
                        <th className='border border-yellow-600'>title</th>
                        <th className='border border-yellow-600'>price</th>
                        <th className='border border-yellow-600'>Qty</th>
                        <th className='border border-yellow-600'>Qty--</th>
                        <th className='border border-yellow-600'>Qty++</th>
                        <th className='border border-yellow-600'>remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cart?.items?.map((product) =>
                          <tr key={product._id} className='border border-yellow-600 '   >
                            <td className='border border-yellow-600 flex justify-center py-2  '>
                              <img src={product.imgSrc} className='w-[100px] h-[100px]  rounded' />
                            </td>
                            <td className='border border-yellow-600 '>{product.title}</td>
                            <td className='border border-yellow-600 '>{product.price}</td>
                            <td className='border border-yellow-600 '>{product.qty}</td>
                            <td className='border border-yellow-600 '>
                              <button className='px-2 py-2 mx-2 rounded bg-red-600' onClick={() => decreaseQty(product.productId, 1)}><GrSubtractCircle></GrSubtractCircle></button>
                            </td>
                            <td className='border border-yellow-600 '>
                              <button className='px-2 py-2 mx-2 rounded bg-red-600'
                                onClick={() => addToCart(
                                  product?.productId,
                                  product.title,
                                  product.price / product.qty,
                                  1,
                                  product.imgSrc)}
                              ><GrAddCircle></GrAddCircle></button>
                            </td>
                            <td className='border border-yellow-600 '>
                              <button className='px-2 py-2 mx-2 rounded bg-red-600'
                                onClick={() => {
                                  if (confirm("are you sure ,want to from cart")) {
                                    removeFromCart(product?.productId,)
                                  }
                                }
                                }
                              ><MdDeleteForever></MdDeleteForever></button>
                            </td>

                          </tr>
                        )
                      }
                      <tr>
                        <td className='border border-yellow-600 '>Total</td>
                        <td></td>
                        <td>{price}</td>
                        <td>{qty}</td>
                        <td></td>
                        <td></td>

                      </tr>
                    </tbody>
                  </table>
                </td>
                <td className='border border-yellow-600 '>
                  <ul>
                    <li>Name : {userAddress.fullName}</li>
                    <li>Address : {userAddress.address}</li>
                    <li>City : {userAddress.city}</li>
                    <li>State : {userAddress.state}</li>
                    <li>Country : {userAddress.country}</li>
                    <li>PhoneNumber : {userAddress.phoneNumber}</li>
                    <li>Pincode : {userAddress.pincode}</li>

                  </ul>
                </td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='text-center  m-5 '>
        <button className='bg-blue-600 px-7 py-2 rounded' onClick={handlePayment}>Procced pay</button>
      </div>
    </>
  )
}

export default Chekout;
