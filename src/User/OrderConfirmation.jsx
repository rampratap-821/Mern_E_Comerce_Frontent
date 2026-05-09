// import React, { useContext, useEffect, useState } from 'react'
// import AppContext from '../Context/AppContext'

// const OrderConfirmation = () => {
//   const { userOrders } = useContext(AppContext)
//   const [price, setPrice] = useState(0)
//   const [qty, setQty] = useState(0)

//   console.log("babita", userOrders);

//   useEffect(() => {
//     let price = 0;
//     let qty = 0;
//     if (userOrders?.orders?.orderItem) {
//       for (let i = 0; i < userOrders?.orders?.orderItem?.length; i++) {
//         price += userOrders?.orders?.orderItem[i].price
//         qty += userOrders?.orders?.orderItem[i].qty
//       }
//     }
//     setPrice(price)
//     setQty(qty)
//   })

//   return (
//     <div className='text-white'>
//       <h1 className='text-white text-center'>Order has been confirm</h1>
//       <h1 className='text-white text-center'>it will  delivered soon</h1>

//       <div className='px-10'>
//         <table className='w-full border border-white '>
//           <thead>
//             <tr>
//               <th className='w-[60%] border border-white '  >OrderItems</th>
//               <th className=' border border-white '>Order Details & Shipping Address</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className='w-[60%] border border-white '>
//                 <div className='p-3'>
//                   <table className='w-full border border-white '>
//                     <tr>
//                       <th className=' border border-white text-center '>Product</th>
//                       <th className=' border border-white text-center'>Tiltle</th>
//                       <th className=' border border-white text-center '>Price</th>
//                       <th className=' border border-white text-center'>Qty</th>
//                     </tr>
//                     {
//                       userOrders?.orders?.orderItem?.map((item) =>
//                         <tr key={item._id}>
//                           <td className=' border border-white text-center'>
//                             <div className='flex justify-center items-center p-2'>
//                               <img src={item?.imgSrc} width={50} height={50} />
//                             </div>
//                           </td>
//                           <td className=' border border-white text-center'>{item?.title}</td>
//                           <td className=' border border-white text-center'>{item?.price}</td>
//                           <td className=' border border-white text-center'>{item?.qty}</td>
//                         </tr>
//                       )
//                     }
//                     <tr>
//                       <td className=' border border-white text-center'></td>
//                       <td className=' border border-white text-center'>
//                         <h1 className='  text-center'>Total</h1>
//                       </td>
//                       <td className=' border border-white text-center'>
//                         <h1 className='  text-center'>{price}</h1>
//                       </td>
//                       <td className=' border border-white text-center'>
//                         <h1 className='  text-center'>{qty}</h1>
//                       </td>

//                     </tr>
//                   </table>
//                 </div>
//               </td>







//               <td className=' border border-white '>
//                 <div className='p-5'>
//                 <ul>
//                   <li>UserId : {userOrders?.orders?.orderId}</li>
//                   <li>PaymentId : {userOrders?.orders?.paymentId}</li>
//                   <li>PaymentStatus : {userOrders?.orders?.payStatus}</li>
//                   <li>Name :{userOrders?.orders?.userShipping?.fullName}</li>
//                   <li>Phone No :{userOrders?.orders?.userShipping?.phoneNumber}</li>
//                   <li>Country :{userOrders?.orders?.userShipping?.country}</li>
//                   <li>State :{userOrders?.orders?.userShipping?.state}</li>
//                   <li>Pincode :{userOrders?.orders?.userShipping?.pincode}</li>

//                 </ul>
//                 </div>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//     </div>
//   )
// }

// export default OrderConfirmation




import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../Context/AppContext'

const OrderConfirmation = () => {

  const { userOrders } = useContext(AppContext)

  const [price, setPrice] = useState(0)
  const [qty, setQty] = useState(0)

  console.log("babita", userOrders);

  useEffect(() => {

    let price = 0;
    let qty = 0;

    if (userOrders?.orders?.orderItem) {

      for (let i = 0; i < userOrders?.orders?.orderItem?.length; i++) {

        price += userOrders?.orders?.orderItem[i].price
        qty += userOrders?.orders?.orderItem[i].qty

      }
    }

    setPrice(price)
    setQty(qty)

  }, [userOrders])

  return (

    <div className='min-h-screen bg-black text-white px-2 md:px-6 py-6'>

      {/* Heading */}
      <h1 className='text-3xl md:text-5xl font-bold text-center mb-3'>
        Order has been confirm
      </h1>

      <h1 className='text-lg md:text-2xl text-center text-gray-300 mb-8'>
        it will delivered soon 
      </h1>

      {/* Table Section */}
      <div className='overflow-x-auto'>

        <table className='w-full min-w-[950px] border border-white text-sm md:text-lg'>

          <thead>

            <tr>

              <th className='w-[60%] border border-white py-4 px-3 text-xl md:text-2xl'>
                OrderItems
              </th>

              <th className='border border-white py-4 px-3 text-xl md:text-2xl'>
                Order Details & Shipping Address
              </th>

            </tr>

          </thead>

          <tbody>

            <tr>

              {/* Left Side */}
              <td className='w-[60%] border border-white align-top'>

                <div className='p-3 md:p-5'>

                  <table className='w-full border border-white'>

                    <thead>

                      <tr>

                        <th className='border border-white text-center py-4 text-lg md:text-xl'>
                          Product
                        </th>

                        <th className='border border-white text-center py-4 text-lg md:text-xl'>
                          Title
                        </th>

                        <th className='border border-white text-center py-4 text-lg md:text-xl'>
                          Price
                        </th>

                        <th className='border border-white text-center py-4 text-lg md:text-xl'>
                          Qty
                        </th>

                      </tr>

                    </thead>

                    <tbody>

                      {
                        userOrders?.orders?.orderItem?.map((item) => (

                          <tr key={item._id}>

                            <td className='border border-white text-center'>

                              <div className='flex justify-center items-center p-4'>

                                <img
                                  src={item?.imgSrc}
                                  alt="product"
                                  className='w-[80px] h-[80px] md:w-[110px] md:h-[110px] rounded-lg object-cover'
                                />

                              </div>

                            </td>

                            <td className='border border-white text-center px-3 font-semibold text-base md:text-xl'>
                              {item?.title}
                            </td>

                            <td className='border border-white text-center text-base md:text-xl'>
                              ₹ {item?.price}
                            </td>

                            <td className='border border-white text-center text-base md:text-xl'>
                              {item?.qty}
                            </td>

                          </tr>

                        ))
                      }

                      {/* Total */}
                      <tr>

                        <td className='border border-white text-center py-4'></td>

                        <td className='border border-white text-center py-4 text-lg md:text-2xl font-bold'>
                          Total
                        </td>

                        <td className='border border-white text-center py-4 text-lg md:text-2xl font-bold'>
                          ₹ {price}
                        </td>

                        <td className='border border-white text-center py-4 text-lg md:text-2xl font-bold'>
                          {qty}
                        </td>

                      </tr>

                    </tbody>

                  </table>

                </div>

              </td>

              {/* Right Side */}
              <td className='border border-white align-top'>

                <div className='p-5 md:p-8'>

                  <ul className='space-y-5 text-base md:text-xl break-words'>

                    <li>
                      <span className='font-bold'>
                        UserId :
                      </span>{" "}
                      {userOrders?.orders?.orderId}
                    </li>

                    <li>
                      <span className='font-bold'>
                        PaymentId :
                      </span>{" "}
                      {userOrders?.orders?.paymentId}
                    </li>

                    <li>
                      <span className='font-bold'>
                        PaymentStatus :
                      </span>{" "}
                      {userOrders?.orders?.payStatus}
                    </li>

                    <li>
                      <span className='font-bold'>
                        Name :
                      </span>{" "}
                      {userOrders?.orders?.userShipping?.fullName}
                    </li>

                    <li>
                      <span className='font-bold'>
                        Phone No :
                      </span>{" "}
                      {userOrders?.orders?.userShipping?.phoneNumber}
                    </li>

                    <li>
                      <span className='font-bold'>
                        Country :
                      </span>{" "}
                      {userOrders?.orders?.userShipping?.country}
                    </li>

                    <li>
                      <span className='font-bold'>
                        State :
                      </span>{" "}
                      {userOrders?.orders?.userShipping?.state}
                    </li>

                    <li>
                      <span className='font-bold'>
                        Pincode :
                      </span>{" "}
                      {userOrders?.orders?.userShipping?.pincode}
                    </li>

                  </ul>

                </div>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  )
}

export default OrderConfirmation
