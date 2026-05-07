import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../Context/AppContext'
import { Link, useParams } from 'react-router-dom'

const SearchProduct = () => {
    const{products} = useContext(AppContext)
    const[searchProduct,setSearchProduct] = useState([])
    const {term} = useParams()

   useEffect(() => {
  if (!products || !term) return;

  const filtered = products.filter(
    (data) =>
      data?.title?.toLowerCase().includes(term?.toLowerCase()) 
  );

  setSearchProduct(filtered);

}, [term, products]);



  return (
    <>
    <div>
        <h1 className='text-center text-4xl text-white pb-10'>Related Product</h1>
    </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center px-5 container mx-auto'> 
            {
                searchProduct.map((data) =>
                    <div key={data._id} className=''>
                   
                   
                    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-lg bg-white ">
                        <Link to = {`/product/${data._id}`}>
                            <img className="rounded-base" src={data.imgSrc} alt="" />
                        </Link>
                        <div className='text-center text-black '>
                        <a href="#">
                            <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{data.title}</h5>
                        </a>
                     <div className='flex justify-center gap-5 '>
                        <button className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none bg-green-800 rounded">
                            {data.price} {" ₹"}
                           </button>
                            <button className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none bg-yellow-800 rounded">
                            Add to Cart
                           </button>
                           </div>
                        </div>
                    </div>
                      </div>
                )
            }
        </div>
        </>
  )
}

export default SearchProduct;
