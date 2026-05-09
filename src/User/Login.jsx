// import React, { useContext, useState } from "react";
// import AppContext from "../Context/AppContext";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate()
//   const { userLogin } = useContext(AppContext)
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   })

//   const { email, password } = formData
//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//   };
//   const summitForm = async(e) => {
//     e.preventDefault()
//    const result = await userLogin( email, password)
//    console.log("result",result.sucess)
//    if(result.sucess){
//    navigate("/")
//    }

//   }


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-white text-center mb-6">
//           User Login
//         </h2>

//         <form className="space-y-4" onSubmit={summitForm}>

//           {/* Email */}
//           <div>
//             <label className="text-gray-300 text-sm">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={onChangeHandler}
//               placeholder="Enter your email"
//               className="w-full mt-1 p-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="text-gray-300 text-sm">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={onChangeHandler}
//               placeholder="Enter your password"
//               className="w-full mt-1 p-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 transition p-2 rounded-lg text-white font-semibold"
//           >
//          Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useContext, useState } from "react";
import AppContext from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {

  const navigate = useNavigate()

  const { userLogin } = useContext(AppContext)

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const { email, password } = formData

  const onChangeHandler = (e) => {

    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

  };

  const summitForm = async (e) => {

    e.preventDefault()

    const result = await userLogin(email, password)

    console.log("result", result.sucess)

    if (result.sucess) {
      navigate("/")
    }

  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-black px-4">

      <div className="w-full max-w-md border border-orange-500 rounded-2xl p-8 shadow-lg">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-orange-400 mb-8">
          User Login
        </h2>

        {/* Form */}
        <form className="space-y-5" onSubmit={summitForm}>

          {/* Email */}
          <div>

            <label className="text-gray-300 text-sm block mb-2">
              Email
            </label>

            <div className="flex items-center bg-black border border-gray-700 rounded-lg px-3 focus-within:border-orange-500">

              <MdEmail className="text-orange-400 text-xl" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={onChangeHandler}
                placeholder="Enter your email"
                className="w-full p-3 bg-transparent text-white outline-none"
              />

            </div>

          </div>

          {/* Password */}
          <div>

            <label className="text-gray-300 text-sm block mb-2">
              Password
            </label>

            <div className="flex items-center bg-black border border-gray-700 rounded-lg px-3 focus-within:border-orange-500">

              <RiLockPasswordFill className="text-orange-400 text-lg" />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={onChangeHandler}
                placeholder="Enter your password"
                className="w-full p-3 bg-transparent text-white outline-none"
              />

            </div>

          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition py-3 rounded-lg text-white font-semibold"
          >
            Login
          </button>

        </form>

      </div>

    </div>

  );
};

export default Login;