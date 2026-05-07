import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'

const Profile = () => {
    const{user} = useContext(AppContext)
  return (
    <div className='text-center  text-4xl pt-10'>
      <h1>Welcome to you {" "}{user?.name}</h1>
      <h1> {user?.email}</h1>

    </div>
  )
}

export default Profile
