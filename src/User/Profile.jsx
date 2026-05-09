// import React, { useContext } from 'react'
// import AppContext from '../Context/AppContext'

// const Profile = () => {
//     const{user} = useContext(AppContext)
//   return (
//     <div className='text-center  text-4xl pt-10'>
//       <h1>Welcome to you {" "}{user?.name}</h1>
//       <h1> {user?.email}</h1>

//     </div>
//   )
// }

// export default Profile


import React, { useContext, useState } from 'react'
import AppContext from '../Context/AppContext'
import { FaCamera } from "react-icons/fa";

const Profile = () => {

    const { user } = useContext(AppContext)

    const [profileImage, setProfileImage] = useState(null)

    const imageHandler = (e) => {

        const file = e.target.files[0]

        if (file) {
            setProfileImage(URL.createObjectURL(file))
        }

    }

    return (

        <div className='min-h-screen bg-black text-white flex justify-center items-center px-4'>

            <div className='w-full max-w-md   p-8 text-center shadow-lg'>

                {/* Profile Image */}
                <div className='relative w-fit mx-auto mb-8'>

                    <img
                        src={
                            profileImage
                                ? profileImage
                                : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        }
                        alt="profile"
                        className='w-[160px] h-[160px] rounded-full object-cover border-4 border-orange-500'
                    />

                    {/* Upload Button */}
                    <label
                        htmlFor="profileInput"
                        className='absolute bottom-2 right-2 bg-orange-500 hover:bg-orange-600 p-3 rounded-full cursor-pointer transition'
                    >

                        <FaCamera className='text-white text-lg' />

                    </label>

                    <input
                        type="file"
                        accept='image/*'
                        id='profileInput'
                        hidden
                        onChange={imageHandler}
                    />

                </div>

                {/* User Details */}
                <h1 className='text-3xl font-bold text-orange-400 mb-4'>
                    Welcome {user?.name}
                </h1>

                <p className='text-gray-300 text-lg break-words'>
                    {user?.email}
                </p>

            </div>

        </div>

    )
}

export default Profile