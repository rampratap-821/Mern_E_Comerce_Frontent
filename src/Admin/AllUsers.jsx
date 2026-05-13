import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'

const AllUsers = () => {

    const { register } = useContext(AppContext)

    // console.log("register",register?.user)

    return (

        <div className='min-h-screen  text-white px-4 py-8'>

            {/* Top Button */}
            <div className='flex justify-center mb-10'>

                <button className='bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-bold px-7 py-3 rounded-lg shadow-lg shadow-orange-500/30 hover:scale-105 transition-all duration-300'>
                    Register User = {register?.user?.length}
                </button>

            </div>

            {/* User Cards */}
            <div className='space-y-6'>

                {
                    register?.user?.map((item) => (

                        <div
                            key={item._id}
                            className='relative overflow-hidden rounded-2xl border border-orange-500/20 bg-gradient-to-r from-[#1a1a1a] via-[#222] to-[#1a1a1a] p-8 shadow-xl hover:shadow-orange-500/20 hover:border-orange-400 transition-all duration-300 group'
                        >

                            {/* Glow Effect */}
                            <div className='absolute top-0 right-0 w-52 h-52 bg-orange-500/10 blur-3xl rounded-full group-hover:bg-orange-500/20 transition-all duration-500'></div>

                            {/* Content */}
                            <div className='relative z-10 flex flex-col items-center text-center'>

                                {/* Avatar */}
                                <div className='w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-3xl font-bold text-black shadow-lg shadow-orange-500/30 mb-5'>
                                    {item?.name?.charAt(0).toUpperCase()}
                                </div>

                                {/* Name */}
                                <h1 className='text-4xl font-extrabold uppercase tracking-wide'>
                                    {item?.name}
                                </h1>

                                {/* Email */}
                                <h2 className='text-xl text-gray-300 font-medium mt-3'>
                                    {item?.email}
                                </h2>

                                {/* Date */}
                                <p className='text-gray-500 mt-4 text-sm'>
                                    {
                                        new Date(item?.createdAt)
                                            .toLocaleString()
                                    }
                                </p>

                                {/* Bottom Line */}
                                <div className='w-40 h-[3px] bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mt-6'></div>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>
    )
}

export default AllUsers