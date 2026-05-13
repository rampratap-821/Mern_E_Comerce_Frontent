import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'

const AllOrders = () => {

  const { allOrders } = useContext(AppContext)

  return (

    <div className='min-h-screen  text-black px-2 md:px-6 py-6'>

      {/* Heading */}
      <h1 className='text-3xl md:text-5xl font-bold text-center mb-8'>
        Total Orders = {allOrders?.length}
      </h1>

      {
        allOrders?.map((item) => {

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
              className='border border-orange-500 rounded-2xl mb-10 overflow-hidden shadow-lg shadow-orange-500/20'
            >

              <div className='overflow-x-auto'>

                <table className='w-full min-w-[900px]'>

                  <thead className='bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-black'>

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
                      <td className='align-top border-r border-orange-500'>

                        <div className='p-4'>

                          <table className='w-full'>

                            <thead>

                              <tr className='border-b border-orange-500'>

                                <th className='py-3'>
                                  Product
                                </th>

                                <th className='py-3'>
                                  Title
                                </th>

                                <th className='py-3'>
                                  Price
                                </th>

                                <th className='py-3'>
                                  Qty
                                </th>

                              </tr>

                            </thead>

                            <tbody>

                              {
                                item?.orderItem?.map((order) => (

                                  <tr
                                    key={order._id}
                                    className='border-b border-gray-700'
                                  >

                                    {/* IMAGE */}
                                    <td className='py-4 text-center'>

                                      <div className='flex justify-center'>

                                        <img
                                          src={order?.imgSrc}
                                          alt={order?.title}
                                          className='w-20 h-20 object-cover rounded-lg border border-orange-500'
                                        />

                                      </div>

                                    </td>

                                    {/* TITLE */}
                                    <td className='text-center px-2 font-semibold'>
                                      {order?.title}
                                    </td>

                                    {/* PRICE */}
                                    <td className='text-center'>
                                      ₹ {order?.price}
                                    </td>

                                    {/* QTY */}
                                    <td className='text-center'>
                                      {order?.qty}
                                    </td>

                                  </tr>

                                ))
                              }

                              {/* TOTAL ROW */}
                              <tr className='bg-orange-500/10'>

                                <td></td>

                                <td className='text-center py-4 font-bold text-xl'>
                                  Total
                                </td>

                                <td className='text-center font-bold text-xl text-orange-400'>
                                  ₹ {totalPrice}
                                </td>

                                <td className='text-center font-bold text-xl text-orange-400'>
                                  {totalQty}
                                </td>

                              </tr>

                            </tbody>

                          </table>

                        </div>

                      </td>

                      {/* RIGHT SIDE */}
                      <td className='align-top'>

                        <div className='p-5 md:p-8'>

                          <ul className='space-y-4 text-base md:text-lg'>

                            <li>
                              <span className='font-bold text-orange-400'>
                                OrderId :
                              </span>{" "}
                              {item?.orderId}
                            </li>

                            <li>
                              <span className='font-bold text-orange-400'>
                                PaymentId :
                              </span>{" "}
                              {item?.paymentId}
                            </li>

                            <li>
                              <span className='font-bold text-orange-400'>
                                Payment Status :
                              </span>{" "}
                              {item?.payStatus}
                            </li>

                            <li>
                              <span className='font-bold text-orange-400'>
                                Name :
                              </span>{" "}
                              {item?.userShipping?.fullName}
                            </li>

                            <li>
                              <span className='font-bold text-orange-400'>
                                Phone :
                              </span>{" "}
                              {item?.userShipping?.phoneNumber}
                            </li>

                            <li>
                              <span className='font-bold text-orange-400'>
                                Country :
                              </span>{" "}
                              {item?.userShipping?.country}
                            </li>

                            <li>
                              <span className='font-bold text-orange-400'>
                                State :
                              </span>{" "}
                              {item?.userShipping?.state}
                            </li>

                            <li>
                              <span className='font-bold text-orange-400'>
                                Pincode :
                              </span>{" "}
                              {item?.userShipping?.pincode}
                            </li>

                            <li>
                              <span className='font-bold text-orange-400'>
                                Address :
                              </span>{" "}
                              {item?.userShipping?.address}
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

  )
}

export default AllOrders