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
  })

  return (
    <div className='text-white'>
      <h1 className='text-white text-center'>Order has been confirm</h1>
      <h1 className='text-white text-center'>it will  delivered soon</h1>

      <div className='px-10'>
        <table className='w-full border border-white '>
          <thead>
            <tr>
              <th className='w-[60%] border border-white '  >OrderItems</th>
              <th className=' border border-white '>Order Details & Shipping Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='w-[60%] border border-white '>
                <div className='p-3'>
                  <table className='w-full border border-white '>
                    <tr>
                      <th className=' border border-white text-center '>Product</th>
                      <th className=' border border-white text-center'>Tiltle</th>
                      <th className=' border border-white text-center '>Price</th>
                      <th className=' border border-white text-center'>Qty</th>
                    </tr>
                    {
                      userOrders?.orders?.orderItem?.map((item) =>
                        <tr key={item._id}>
                          <td className=' border border-white text-center'>
                            <div className='flex justify-center items-center p-2'>
                              <img src={item?.imgSrc} width={50} height={50} />
                            </div>
                          </td>
                          <td className=' border border-white text-center'>{item?.title}</td>
                          <td className=' border border-white text-center'>{item?.price}</td>
                          <td className=' border border-white text-center'>{item?.qty}</td>
                        </tr>
                      )
                    }
                    <tr>
                      <td className=' border border-white text-center'></td>
                      <td className=' border border-white text-center'>
                        <h1 className='  text-center'>Total</h1>
                      </td>
                      <td className=' border border-white text-center'>
                        <h1 className='  text-center'>{price}</h1>
                      </td>
                      <td className=' border border-white text-center'>
                        <h1 className='  text-center'>{qty}</h1>
                      </td>

                    </tr>
                  </table>
                </div>
              </td>







              <td className=' border border-white '>
                <div className='p-5'>
                <ul>
                  <li>UserId : {userOrders?.orders?.orderId}</li>
                  <li>PaymentId : {userOrders?.orders?.paymentId}</li>
                  <li>PaymentStatus : {userOrders?.orders?.payStatus}</li>
                  <li>Name :{userOrders?.orders?.userShipping?.fullName}</li>
                  <li>Phone No :{userOrders?.orders?.userShipping?.phoneNumber}</li>
                  <li>Country :{userOrders?.orders?.userShipping?.country}</li>
                  <li>State :{userOrders?.orders?.userShipping?.state}</li>
                  <li>Pincode :{userOrders?.orders?.userShipping?.pincode}</li>

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



