// import React, { useContext } from 'react'
// import AppContext from '../Context/AppContext';

// const Profile = () => {

//   const { allUsers, user } = useContext(AppContext)

//   return (
//     <>

//       <div className='text-center  text-4xl pt-10 text-black'>
//         <h1>Welcome to you {" "}{user?.name}</h1>
//         <h1> {user?.email}</h1>

//       </div>

//       <div className='min-h-screen  text-black px-2 md:px-6 py-6'>

//         {/* Heading */}
//         <h1 className='text-3xl md:text-5xl font-bold text-center mb-8'>
//           Total Orders = {allUsers?.length}
//         </h1>

//         {
//           allUsers?.map((item) => {

//             // Total Price
//             const totalPrice = item?.orderItem?.reduce(
//               (acc, curr) => acc + curr.price * curr.qty,
//               0
//             )

//             // Total Qty
//             const totalQty = item?.orderItem?.reduce(
//               (acc, curr) => acc + curr.qty,
//               0
//             )

//             return (

//               <div
//                 key={item._id}
//                 className='border border-orange-500 rounded-2xl mb-10 overflow-hidden shadow-lg shadow-orange-500/20'
//               >

//                 <div className='overflow-x-auto'>

//                   <table className='w-full min-w-[900px]'>

//                     <thead className='bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-black'>

//                       <tr>

//                         <th className='w-[60%] py-4 text-xl'>
//                           Order Items
//                         </th>

//                         <th className='py-4 text-xl'>
//                           Shipping Details
//                         </th>

//                       </tr>

//                     </thead>

//                     <tbody>

//                       <tr>

//                         {/* LEFT SIDE */}
//                         <td className='align-top border-r border-orange-500'>

//                           <div className='p-4'>

//                             <table className='w-full'>

//                               <thead>

//                                 <tr className='border-b border-orange-500'>

//                                   <th className='py-3'>
//                                     Product
//                                   </th>

//                                   <th className='py-3'>
//                                     Title
//                                   </th>

//                                   <th className='py-3'>
//                                     Price
//                                   </th>

//                                   <th className='py-3'>
//                                     Qty
//                                   </th>

//                                 </tr>

//                               </thead>

//                               <tbody>

//                                 {
//                                   item?.orderItem?.map((order) => (

//                                     <tr
//                                       key={order._id}
//                                       className='border-b border-gray-700'
//                                     >

//                                       {/* IMAGE */}
//                                       <td className='py-4 text-center'>

//                                         <div className='flex justify-center'>

//                                           <img
//                                             src={order?.imgSrc}
//                                             alt={order?.title}
//                                             className='w-20 h-20 object-cover rounded-lg border border-orange-500'
//                                           />

//                                         </div>

//                                       </td>

//                                       {/* TITLE */}
//                                       <td className='text-center px-2 font-semibold'>
//                                         {order?.title}
//                                       </td>

//                                       {/* PRICE */}
//                                       <td className='text-center'>
//                                         ₹ {order?.price}
//                                       </td>

//                                       {/* QTY */}
//                                       <td className='text-center'>
//                                         {order?.qty}
//                                       </td>

//                                     </tr>

//                                   ))
//                                 }

//                                 {/* TOTAL ROW */}
//                                 <tr className='bg-orange-500/10'>

//                                   <td></td>

//                                   <td className='text-center py-4 font-bold text-xl'>
//                                     Total
//                                   </td>

//                                   <td className='text-center font-bold text-xl text-orange-400'>
//                                     ₹ {totalPrice}
//                                   </td>

//                                   <td className='text-center font-bold text-xl text-orange-400'>
//                                     {totalQty}
//                                   </td>

//                                 </tr>

//                               </tbody>

//                             </table>

//                           </div>

//                         </td>

//                         {/* RIGHT SIDE */}
//                         <td className='align-top'>

//                           <div className='p-5 md:p-8'>

//                             <ul className='space-y-4 text-base md:text-lg'>

//                               <li>
//                                 <span className='font-bold text-orange-400'>
//                                   OrderId :
//                                 </span>{" "}
//                                 {item?.orderId}
//                               </li>

//                               <li>
//                                 <span className='font-bold text-orange-400'>
//                                   PaymentId :
//                                 </span>{" "}
//                                 {item?.paymentId}
//                               </li>

//                               <li>
//                                 <span className='font-bold text-orange-400'>
//                                   Payment Status :
//                                 </span>{" "}
//                                 {item?.payStatus}
//                               </li>

//                               <li>
//                                 <span className='font-bold text-orange-400'>
//                                   Name :
//                                 </span>{" "}
//                                 {item?.userShipping?.fullName}
//                               </li>

//                               <li>
//                                 <span className='font-bold text-orange-400'>
//                                   Phone :
//                                 </span>{" "}
//                                 {item?.userShipping?.phoneNumber}
//                               </li>

//                               <li>
//                                 <span className='font-bold text-orange-400'>
//                                   Country :
//                                 </span>{" "}
//                                 {item?.userShipping?.country}
//                               </li>

//                               <li>
//                                 <span className='font-bold text-orange-400'>
//                                   State :
//                                 </span>{" "}
//                                 {item?.userShipping?.state}
//                               </li>

//                               <li>
//                                 <span className='font-bold text-orange-400'>
//                                   Pincode :
//                                 </span>{" "}
//                                 {item?.userShipping?.pincode}
//                               </li>

//                               <li>
//                                 <span className='font-bold text-orange-400'>
//                                   Address :
//                                 </span>{" "}
//                                 {item?.userShipping?.address}
//                               </li>

//                             </ul>

//                           </div>

//                         </td>

//                       </tr>

//                     </tbody>

//                   </table>

//                 </div>

//               </div>

//             )

//           })
//         }

//       </div>
//     </>
//   )
// }

// export default Profile


import React, { useContext } from 'react'
import AppContext from '../Context/AppContext';

const Profile = () => {

  const { allUsers, user } = useContext(AppContext)

  return (
    <>

      <div className='text-center text-4xl pt-10'>
        <h1 className='bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent font-bold'>
          Welcome to you {user?.name}
        </h1>
        <h1 className='text-gray-600 text-2xl mt-2'> {user?.email}</h1>

      </div>

      <div className='min-h-screen bg-gray-100 px-2 md:px-6 py-6'>

        {/* Heading */}
        <h1 className='text-3xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>
          Total Orders = {allUsers?.length}
        </h1>

        {
          allUsers?.map((item) => {

            // Total Price
            const totalPrice = item?.orderItem?.reduce(
              (acc, curr) => acc + curr.price * curr.qty,
              0
            )

            // Total Qty
            const totalQty = item?.orderItem?.reduce(
              (acc, curr) => acc + curr.qty,
              0
            )

            return (

              <div
                key={item._id}
                className='border border-blue-500 rounded-2xl mb-10 overflow-hidden shadow-lg shadow-blue-500/20 bg-white'
              >

                <div className='overflow-x-auto'>

                  <table className='w-full min-w-[900px]'>

                    <thead className='bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 text-white'>

                      <tr>

                        <th className='w-[60%] py-4 text-xl'>
                          Order Items
                        </th>

                        <th className='py-4 text-xl'>
                          Shipping Details
                        </th>

                      </tr>

                    </thead>

                    <tbody>

                      <tr>

                        {/* LEFT SIDE */}
                        <td className='align-top border-r border-blue-500'>

                          <div className='p-4'>

                            <table className='w-full'>

                              <thead>

                                <tr className='border-b border-blue-500'>

                                  <th className='py-3 text-blue-700'>
                                    Product
                                  </th>

                                  <th className='py-3 text-blue-700'>
                                    Title
                                  </th>

                                  <th className='py-3 text-blue-700'>
                                    Price
                                  </th>

                                  <th className='py-3 text-blue-700'>
                                    Qty
                                  </th>

                                </tr>

                              </thead>

                              <tbody>

                                {
                                  item?.orderItem?.map((order) => (

                                    <tr
                                      key={order._id}
                                      className='border-b border-gray-200'
                                    >

                                      {/* IMAGE */}
                                      <td className='py-4 text-center'>

                                        <div className='flex justify-center'>

                                          <img
                                            src={order?.imgSrc}
                                            alt={order?.title}
                                            className='w-20 h-20 object-cover rounded-lg border border-blue-400'
                                          />

                                        </div>

                                      </td>

                                      {/* TITLE */}
                                      <td className='text-center px-2 font-semibold text-gray-800'>
                                        {order?.title}
                                      </td>

                                      {/* PRICE */}
                                      <td className='text-center text-gray-800'>
                                        ₹ {order?.price}
                                      </td>

                                      {/* QTY */}
                                      <td className='text-center text-gray-800'>
                                        {order?.qty}
                                      </td>

                                    </tr>

                                  ))
                                }

                                {/* TOTAL ROW */}
                                <tr className='bg-blue-50'>

                                  <td></td>

                                  <td className='text-center py-4 font-bold text-xl text-blue-700'>
                                    Total
                                  </td>

                                  <td className='text-center font-bold text-xl bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>
                                    ₹ {totalPrice}
                                  </td>

                                  <td className='text-center font-bold text-xl bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>
                                    {totalQty}
                                  </td>

                                </tr>

                              </tbody>

                            </table>

                          </div>

                        </td>

                        {/* RIGHT SIDE */}
                        <td className='align-top bg-gray-50'>

                          <div className='p-5 md:p-8'>

                            <ul className='space-y-4 text-base md:text-lg'>

                              <li>
                                <span className='font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>
                                  OrderId :
                                </span>{" "}
                                <span className='text-gray-700'>{item?.orderId}</span>
                              </li>

                              <li>
                                <span className='font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>
                                  PaymentId :
                                </span>{" "}
                                <span className='text-gray-700'>{item?.paymentId}</span>
                              </li>

                              <li>
                                <span className='font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>
                                  Payment Status :
                                </span>{" "}
                                <span className={`font-semibold ${item?.payStatus === 'Success' ? 'text-green-600' : 'text-red-600'}`}>
                                  {item?.payStatus}
                                </span>
                              </li>

                              <li>
                                <span className='font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>
                                  Name :
                                </span>{" "}
                                <span className='text-gray-700'>{item?.userShipping?.fullName}</span>
                              </li>

                              <li>
                                <span className='font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>
                                  Phone :
                                </span>{" "}
                                <span className='text-gray-700'>{item?.userShipping?.phoneNumber}</span>
                              </li>

                              <li>
                                <span className='font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>
                                  Country :
                                </span>{" "}
                                <span className='text-gray-700'>{item?.userShipping?.country}</span>
                              </li>

                              <li>
                                <span className='font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>
                                  State :
                                </span>{" "}
                                <span className='text-gray-700'>{item?.userShipping?.state}</span>
                              </li>

                              <li>
                                <span className='font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>
                                  Pincode :
                                </span>{" "}
                                <span className='text-gray-700'>{item?.userShipping?.pincode}</span>
                              </li>

                              <li>
                                <span className='font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>
                                  Address :
                                </span>{" "}
                                <span className='text-gray-700'>{item?.userShipping?.address}</span>
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

          })
        }

      </div>
    </>
  )
}

export default Profile