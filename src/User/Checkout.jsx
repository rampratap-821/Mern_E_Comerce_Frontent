// import React, { useContext, useEffect, useState } from 'react'
// import AppContext from '../Context/AppContext'
// import { Link, useNavigate } from 'react-router-dom'
// import { GrAddCircle, GrSubtractCircle } from 'react-icons/gr'
// import { MdDeleteForever } from 'react-icons/md'
// import axios from 'axios'

// const Chekout = () => {
//   const { cart, decreaseQty, addToCart, removeFromCart, userAddress, url, user, clearCart } = useContext(AppContext)
//   console.log("useraddress ji ", userAddress)
//   const [qty, setQty] = useState(0)
//   const [price, setPrice] = useState(0)
//   const navigate = useNavigate()

//   useEffect(() => {
//     let qty = 0
//     let price = 0
//     if (cart?.items) {
//       for (let i = 0; i < cart?.items?.length; i++) {
//         qty += cart.items[i].qty
//         price += cart.items[i].price

//       }
//     }
//     setQty(qty)
//     setPrice(price)
//   }, [cart])

//   const handlePayment = async () => {
//     try {
//       const orderResponse = await axios.post(`${url}/payment/checkout`, {
//         amount: price,
//         qty: qty,
//         cartItem: cart?.items,
//         userShipping: userAddress,
//         userId: user?._id
//       });

//       console.log("order Response", orderResponse)
//       const { orderId, amount: orderAmount } = orderResponse.data

//       var options = {
//         "key": "rzp_test_SltMNlPol4tWXt", // Enter the Key ID generated from the Dashboard
//         "amount": orderAmount * 100, // Amount is in currency subunits. 
//         "currency": "INR",
//         "name": "Rampratap",
//         "description": "Rampratap",
//         "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//         "handler": async function (response) {
//           const paymentData = {
//             orderId: response.razorpay_order_id,
//             paymentId: response.razorpay_payment_id,
//             signature: response.razorpay_signature,
//             amount: orderAmount,
//             orderItem: cart?.items,
//             userId: user?._id,
//             userShipping: userAddress
//           }

//           const api = await axios.post(`${url}/payment/variefy-payment`, paymentData)
//           console.log("razorpay res", api.data)
//           if (api.data.success) {

//             clearCart()
//             navigate("/orderConfirmation");

//           }

//         },
//         "prefill": {
//           "name": "Rampratap",
//           "email": "rampratap@example.com",
//           "contact": "+919876543210"
//         },
//         "notes": {
//           "address": "Bahadurpur Rajpoot Distrct Moradabad"
//         },
//         "theme": {
//           "color": "#3399cc"
//         }
//       };
//       const rzp = new window.Razorpay(options);
//       rzp.open();


//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <>
//       <div >
//         <h1 className='text-center'>Order Sumary</h1>

//         <div className='  '>
//           <table className='border border-yellow-600 w-full'>
//             <thead>
//               <tr>
//                 <th className='border border-yellow-600 w-[70%]'>Product Details</th>
//                 <th className='border border-yellow-600 '> Shipping Address</th>
//               </tr>
//             </thead>

//             <tbody>
//               <tr>
//                 <td className='border border-yellow-600 w-[70%]'>
//                   <table className='w-full text-center '>
//                     <thead className='m-4'>
//                       <tr >
//                         <th className='border border-yellow-600'>Product img</th>
//                         <th className='border border-yellow-600'>title</th>
//                         <th className='border border-yellow-600'>price</th>
//                         <th className='border border-yellow-600'>Qty</th>
//                         <th className='border border-yellow-600'>Qty--</th>
//                         <th className='border border-yellow-600'>Qty++</th>
//                         <th className='border border-yellow-600'>remove</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {
//                         cart?.items?.map((product) =>
//                           <tr key={product._id} className='border border-yellow-600 '   >
//                             <td className='border border-yellow-600 flex justify-center py-2  '>
//                               <img src={product.imgSrc} className='w-[100px] h-[100px]  rounded' />
//                             </td>
//                             <td className='border border-yellow-600 '>{product.title}</td>
//                             <td className='border border-yellow-600 '>{product.price}</td>
//                             <td className='border border-yellow-600 '>{product.qty}</td>
//                             <td className='border border-yellow-600 '>
//                               <button className='px-2 py-2 mx-2 rounded bg-red-600' onClick={() => decreaseQty(product.productId, 1)}><GrSubtractCircle></GrSubtractCircle></button>
//                             </td>
//                             <td className='border border-yellow-600 '>
//                               <button className='px-2 py-2 mx-2 rounded bg-red-600'
//                                 onClick={() => addToCart(
//                                   product?.productId,
//                                   product.title,
//                                   product.price / product.qty,
//                                   1,
//                                   product.imgSrc)}
//                               ><GrAddCircle></GrAddCircle></button>
//                             </td>
//                             <td className='border border-yellow-600 '>
//                               <button className='px-2 py-2 mx-2 rounded bg-red-600'
//                                 onClick={() => {
//                                   if (confirm("are you sure ,want to from cart")) {
//                                     removeFromCart(product?.productId,)
//                                   }
//                                 }
//                                 }
//                               ><MdDeleteForever></MdDeleteForever></button>
//                             </td>

//                           </tr>
//                         )
//                       }
//                       <tr>
//                         <td className='border border-yellow-600 '>Total</td>
//                         <td></td>
//                         <td>{price}</td>
//                         <td>{qty}</td>
//                         <td></td>
//                         <td></td>

//                       </tr>
//                     </tbody>
//                   </table>
//                 </td>
//                 <td className='border border-yellow-600 '>
//                   <ul>
//                     <li>Name : {userAddress.fullName}</li>
//                     <li>Address : {userAddress.address}</li>
//                     <li>City : {userAddress.city}</li>
//                     <li>State : {userAddress.state}</li>
//                     <li>Country : {userAddress.country}</li>
//                     <li>PhoneNumber : {userAddress.phoneNumber}</li>
//                     <li>Pincode : {userAddress.pincode}</li>

//                   </ul>
//                 </td>

//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className='text-center  m-5 '>
//         <button className='bg-blue-600 px-7 py-2 rounded' onClick={handlePayment}>Procced pay</button>
//       </div>
//     </>
//   )
// }

// export default Chekout;



import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import { GrAddCircle, GrSubtractCircle } from 'react-icons/gr'
import { MdDeleteForever } from 'react-icons/md'
import axios from 'axios'

const Chekout = () => {

  const {
    cart,
    decreaseQty,
    addToCart,
    removeFromCart,
    userAddress,
    url,
    user,
    clearCart
  } = useContext(AppContext)

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

      const { orderId, amount: orderAmount } = orderResponse.data

      var options = {
        key: "rzp_test_SltMNlPol4tWXt",
        amount: orderAmount * 100,
        currency: "INR",
        name: "Rampratap",
        description: "Rampratap",
        order_id: orderId,

        handler: async function (response) {

          const paymentData = {
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
            amount: orderAmount,
            orderItem: cart?.items,
            userId: user?._id,
            userShipping: userAddress
          }

          const api = await axios.post(
            `${url}/payment/variefy-payment`,
            paymentData
          )

          if (api.data.success) {
            clearCart()
            navigate("/orderConfirmation");
          }
        },

        prefill: {
          name: "Rampratap",
          email: "rampratap@example.com",
          contact: "+919876543210"
        },

        notes: {
          address: "Bahadurpur Rajpoot Distrct Moradabad"
        },

        theme: {
          color: "#facc15"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='min-h-screen  text-white px-3 md:px-8 py-6'>

      {/* Heading */}
      <h1 className='text-3xl md:text-5xl font-bold text-center mb-10'>
        Order Summary
      </h1>

      {/* Main Section */}
      <div className='grid lg:grid-cols-3 gap-8'>

        {/* Product Section */}
        <div className='lg:col-span-2  border border-gray-700 rounded-3xl p-4 md:p-6 shadow-2xl'>

          <h2 className='text-2xl font-bold mb-6 text-yellow-400'>
            Product Details
          </h2>

          <div className='space-y-6'>

            {
              cart?.items?.map((product) => (

                <div
                  key={product._id}
                  className='bg-black border border-gray-700 rounded-2xl p-4 flex flex-col md:flex-row gap-5 items-center justify-between'
                >

                  {/* Image */}
                  <div className='flex justify-center'>
                    <img
                      src={product.imgSrc}
                      alt="product"
                      className='w-[140px] h-[140px] object-cover rounded-xl'
                    />
                  </div>

                  {/* Product Info */}
                  <div className='flex-1 text-center md:text-left'>

                    <h2 className='text-xl font-bold mb-3'>
                      {product.title}
                    </h2>

                    <p className='text-green-400 text-lg mb-2'>
                      ₹ {product.price}
                    </p>

                    <p className='text-yellow-400 font-semibold'>
                      Qty : {product.qty}
                    </p>

                  </div>

                  {/* Buttons */}
                  <div className='flex flex-wrap justify-center gap-3'>

                    <button
                      className='bg-red-600 hover:bg-red-700 p-3 rounded-xl transition'
                      onClick={() => decreaseQty(product.productId, 1)}
                    >
                      <GrSubtractCircle />
                    </button>

                    <button
                      className='bg-green-600 hover:bg-green-700 p-3 rounded-xl transition'
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
                      <GrAddCircle />
                    </button>

                    <button
                      className='bg-red-500 hover:bg-red-600 p-3 rounded-xl transition'
                      onClick={() => {
                        if (confirm("are you sure ,want to from cart")) {
                          removeFromCart(product?.productId)
                        }
                      }}
                    >
                      <MdDeleteForever size={22} />
                    </button>

                  </div>

                </div>
              ))
            }

          </div>

          {/* Total */}
          <div className='mt-8 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4'>

            <div className='bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold w-full sm:w-auto text-center'>
              Total Qty : {qty}
            </div>

            <div className='bg-green-600 px-6 py-3 rounded-xl font-bold w-full sm:w-auto text-center'>
              Total Price : ₹ {price}
            </div>

          </div>

        </div>

        {/* Shipping Address */}
        <div className=' border border-gray-700 rounded-3xl p-5 md:p-6 shadow-2xl h-fit'>

          <h2 className='text-2xl font-bold text-yellow-400 mb-6'>
            Shipping Address
          </h2>

          <div className='space-y-4 text-gray-300'>

            <div className='bg-black p-4 rounded-xl border border-gray-700'>
              <span className='font-bold text-white'>Name :</span>{" "}
              {userAddress.fullName}
            </div>

            <div className='bg-black p-4 rounded-xl border border-gray-700'>
              <span className='font-bold text-white'>Address :</span>{" "}
              {userAddress.address}
            </div>

            <div className='bg-black p-4 rounded-xl border border-gray-700'>
              <span className='font-bold text-white'>City :</span>{" "}
              {userAddress.city}
            </div>

            <div className='bg-black p-4 rounded-xl border border-gray-700'>
              <span className='font-bold text-white'>State :</span>{" "}
              {userAddress.state}
            </div>

            <div className='bg-black p-4 rounded-xl border border-gray-700'>
              <span className='font-bold text-white'>Country :</span>{" "}
              {userAddress.country}
            </div>

            <div className='bg-black p-4 rounded-xl border border-gray-700'>
              <span className='font-bold text-white'>Phone :</span>{" "}
              {userAddress.phoneNumber}
            </div>

            <div className='bg-black p-4 rounded-xl border border-gray-700'>
              <span className='font-bold text-white'>Pincode :</span>{" "}
              {userAddress.pincode}
            </div>

          </div>

        </div>

      </div>

      {/* Payment Button */}
      <div className='flex justify-center mt-10'>

        <button
          className='w-full md:w-80 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-2xl text-lg transition duration-300 shadow-xl'
          onClick={handlePayment}
        >
          Proceed To Pay
        </button>

      </div>

    </div>
  )
}

export default Chekout