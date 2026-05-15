// import React, { useContext, useEffect, useState } from 'react';
// import AppContext from '../Context/AppContext'

// const OrderConfirmation = () => {

//   const { userOrders } = useContext(AppContext)

//   const [price, setPrice] = useState(0)
//   const [qty, setQty] = useState(0)
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

//   }, [userOrders])

//   return (

//     <div className='min-h-screen bg-black text-white px-2 md:px-6 py-6'>

//       {/* Heading */}
//       <h1 className='text-3xl md:text-5xl font-bold text-center mb-3'>
//         Order has been confirm
//       </h1>

//       <h1 className='text-lg md:text-2xl text-center text-gray-300 mb-8'>
//         it will delivered soon 
//       </h1>

//       {/* Table Section */}
//       <div className='overflow-x-auto'>

//         <table className='w-full min-w-[950px] border border-white text-sm md:text-lg'>

//           <thead>

//             <tr>

//               <th className='w-[60%] border border-white py-4 px-3 text-xl md:text-2xl'>
//                 OrderItems
//               </th>

//               <th className='border border-white py-4 px-3 text-xl md:text-2xl'>
//                 Order Details & Shipping Address
//               </th>

//             </tr>

//           </thead>

//           <tbody>

//             <tr>

//               {/* Left Side */}
//               <td className='w-[60%] border border-white align-top'>

//                 <div className='p-3 md:p-5'>

//                   <table className='w-full border border-white'>

//                     <thead>

//                       <tr>

//                         <th className='border border-white text-center py-4 text-lg md:text-xl'>
//                           Product
//                         </th>

//                         <th className='border border-white text-center py-4 text-lg md:text-xl'>
//                           Title
//                         </th>

//                         <th className='border border-white text-center py-4 text-lg md:text-xl'>
//                           Price
//                         </th>

//                         <th className='border border-white text-center py-4 text-lg md:text-xl'>
//                           Qty
//                         </th>

//                       </tr>

//                     </thead>

//                     <tbody>

//                       {
//                         userOrders?.orders?.orderItem?.map((item) => (

//                           <tr key={item._id}>

//                             <td className='border border-white text-center'>

//                               <div className='flex justify-center items-center p-4'>

//                                 <img
//                                   src={item?.imgSrc}
//                                   alt="product"
//                                   className='w-[80px] h-[80px] md:w-[110px] md:h-[110px] rounded-lg object-cover'
//                                 />

//                               </div>

//                             </td>

//                             <td className='border border-white text-center px-3 font-semibold text-base md:text-xl'>
//                               {item?.title}
//                             </td>

//                             <td className='border border-white text-center text-base md:text-xl'>
//                               ₹ {item?.price}
//                             </td>

//                             <td className='border border-white text-center text-base md:text-xl'>
//                               {item?.qty}
//                             </td>

//                           </tr>

//                         ))
//                       }

//                       {/* Total */}
//                       <tr>

//                         <td className='border border-white text-center py-4'></td>

//                         <td className='border border-white text-center py-4 text-lg md:text-2xl font-bold'>
//                           Total
//                         </td>

//                         <td className='border border-white text-center py-4 text-lg md:text-2xl font-bold'>
//                           ₹ {price}
//                         </td>

//                         <td className='border border-white text-center py-4 text-lg md:text-2xl font-bold'>
//                           {qty}
//                         </td>

//                       </tr>

//                     </tbody>

//                   </table>

//                 </div>

//               </td>

//               {/* Right Side */}
//               <td className='border border-white align-top'>

//                 <div className='p-5 md:p-8'>

//                   <ul className='space-y-5 text-base md:text-xl break-words'>

//                     <li>
//                       <span className='font-bold'>
//                         UserId :
//                       </span>{" "}
//                       {userOrders?.orders?.orderId}
//                     </li>

//                     <li>
//                       <span className='font-bold'>
//                         PaymentId :
//                       </span>{" "}
//                       {userOrders?.orders?.paymentId}
//                     </li>

//                     <li>
//                       <span className='font-bold'>
//                         PaymentStatus :
//                       </span>{" "}
//                       {userOrders?.orders?.payStatus}
//                     </li>

//                     <li>
//                       <span className='font-bold'>
//                         Name :
//                       </span>{" "}
//                       {userOrders?.orders?.userShipping?.fullName}
//                     </li>

//                     <li>
//                       <span className='font-bold'>
//                         Phone No :
//                       </span>{" "}
//                       {userOrders?.orders?.userShipping?.phoneNumber}
//                     </li>

//                     <li>
//                       <span className='font-bold'>
//                         Country :
//                       </span>{" "}
//                       {userOrders?.orders?.userShipping?.country}
//                     </li>

//                     <li>
//                       <span className='font-bold'>
//                         State :
//                       </span>{" "}
//                       {userOrders?.orders?.userShipping?.state}
//                     </li>

//                     <li>
//                       <span className='font-bold'>
//                         Pincode :
//                       </span>{" "}
//                       {userOrders?.orders?.userShipping?.pincode}
//                     </li>

//                   </ul>

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

import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../Context/AppContext';

const OrderConfirmation = () => {
  const { userOrders } = useContext(AppContext);

  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    let price = 0;
    let qty = 0;

    if (userOrders?.orders?.orderItem) {
      for (let i = 0; i < userOrders?.orders?.orderItem?.length; i++) {
        price += userOrders?.orders?.orderItem[i].price;
        qty += userOrders?.orders?.orderItem[i].qty;
      }
    }

    setPrice(price);
    setQty(qty);
  }, [userOrders]);

  return (
    <div className='min-h-screen bg-gray-100 px-2 md:px-6 py-6'>
      
      {/* Heading - Blue Gradient */}
      <h1 className='text-3xl md:text-5xl font-bold text-center mb-3 bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>
        Order has been confirm
      </h1>

      <h1 className='text-lg md:text-2xl text-center text-gray-500 mb-8'>
        it will delivered soon 
      </h1>

      {/* Main Container */}
      <div className='max-w-[1150px] mx-auto border-2 border-blue-500 rounded-xl overflow-hidden bg-white shadow-2xl'>
        
        {/* Table Header Section - Blue Gradient */}
        <div className='grid grid-cols-1 md:grid-cols-[60%_40%] bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 text-white font-bold text-xl md:text-2xl'>
          <div className='py-4 text-center border-b md:border-b-0 md:border-r border-blue-600'>
            Order Items
          </div>
          <div className='py-4 text-center'>
            Shipping Details
          </div>
        </div>

        <div className='flex flex-col md:flex-row'>
          
          {/* Left Side: Order Items Table */}
          <div className='w-full md:w-[60%] border-r-0 md:border-r border-blue-500'>
            <table className='w-full text-base md:text-lg'>
              <thead>
                <tr className='border-b border-blue-500'>
                  <th className='py-4 font-bold text-blue-700'>Product</th>
                  <th className='py-4 font-bold text-blue-700'>Title</th>
                  <th className='py-4 font-bold text-blue-700'>Price</th>
                  <th className='py-4 font-bold text-blue-700'>Qty</th>
                 </tr>
              </thead>
              <tbody>
                {userOrders?.orders?.orderItem?.map((item) => (
                  <tr key={item._id} className='border-b border-gray-200'>
                    <td className='py-4'>
                      <div className='flex justify-center'>
                        <img
                          src={item?.imgSrc}
                          alt="product"
                          className='w-16 h-16 md:w-24 md:h-24 rounded-lg border border-blue-400 object-contain p-1'
                        />
                      </div>
                    </td>
                    <td className='text-center font-medium text-gray-800'>{item?.title}</td>
                    <td className='text-center text-gray-800'>₹ {item?.price}</td>
                    <td className='text-center text-gray-800'>{item?.qty}</td>
                   </tr>
                ))}
                
                {/* Total Row - Blue Gradient */}
                <tr className='bg-blue-50'>
                  <td colSpan="2" className='py-5 text-center text-xl md:text-2xl font-bold text-blue-700'>Total</td>
                  <td className='text-center text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>₹ {price}</td>
                  <td className='text-center text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>{qty}</td>
                 </tr>
              </tbody>
            </table>
          </div>

          {/* Right Side: Shipping Details */}
          <div className='w-full md:w-[40%] p-6 md:p-10 bg-gray-50'>
            <ul className='space-y-4 text-base md:text-lg'>
              <li>
                <span className='font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>OrderId :</span> <span className='text-gray-700'>{userOrders?.orders?.orderId}</span>
              </li>
              <li>
                <span className='font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>PaymentId :</span> <span className='text-gray-700'>{userOrders?.orders?.paymentId}</span>
              </li>
              <li>
                <span className='font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>Payment Status :</span> 
                <span className={`ml-2 font-semibold ${userOrders?.orders?.payStatus === 'Success' ? 'text-green-600' : 'text-red-600'}`}>
                  {userOrders?.orders?.payStatus}
                </span>
              </li>
              <li>
                <span className='font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>Name :</span> <span className='text-gray-700'>{userOrders?.orders?.userShipping?.fullName}</span>
              </li>
              <li>
                <span className='font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>Phone :</span> <span className='text-gray-700'>{userOrders?.orders?.userShipping?.phoneNumber}</span>
              </li>
              <li>
                <span className='font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>Country :</span> <span className='text-gray-700'>{userOrders?.orders?.userShipping?.country}</span>
              </li>
              <li>
                <span className='font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>State :</span> <span className='text-gray-700'>{userOrders?.orders?.userShipping?.state}</span>
              </li>
              <li>
                <span className='font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>Pincode :</span> <span className='text-gray-700'>{userOrders?.orders?.userShipping?.pincode}</span>
              </li>
              <li>
                <span className='font-bold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent'>Address :</span> <span className='text-gray-700'>{userOrders?.orders?.userShipping?.address || 'N/A'}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;