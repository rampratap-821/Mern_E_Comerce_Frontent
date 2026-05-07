import React, { useContext, useState } from "react";
import AppContext from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

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
  const summitForm = async(e) => {
    e.preventDefault()
   const result = await userLogin( email, password)
   console.log("result",result.sucess)
   if(result.sucess){
   navigate("/")
   }

  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          User Login
        </h2>

        <form className="space-y-4" onSubmit={summitForm}>

          {/* Email */}
          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChangeHandler}
              placeholder="Enter your email"
              className="w-full mt-1 p-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 text-sm">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={onChangeHandler}
              placeholder="Enter your password"
              className="w-full mt-1 p-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition p-2 rounded-lg text-white font-semibold"
          >
         Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;