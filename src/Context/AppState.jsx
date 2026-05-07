import React, { useEffect, useState, } from 'react'
import AppContext from './AppContext'
import axios from 'axios'
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppState = (props) => {
    const [products, setProducts] = useState([])
    const url = "https://mern-e-comerce-api.onrender.com/api"
    const [token, setToken] = useState()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [filterData, setFilterData] = useState([])
    const [user, setUser] = useState()
    const [cart, setCart] = useState([])
    const [reload, setReload] = useState(false)
    const[userAddress,setUserAddress] = useState([])
    const[userOrders,setUserOrders] = useState([])




    useEffect(() => {
        const fetchProduct = async () => {
            const api = await axios.get(`${url}/product/all`, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            setProducts(api.data.product)
            setFilterData(api.data.product)
            // console.log("Prodcts", products)
            if (token) {
                userProfile()

            }
        }
        if (token) {

            getUserCart()
             getUserAddress()
             getUserOrders()
        }

        fetchProduct()
       

    }, [token, reload])

    useEffect(() => {
        const LsToken = localStorage.getItem("token")

        //console.log("token",LsToken)
        if (LsToken) {
            setToken(LsToken)
            setIsAuthenticated(true)
        }
    }, [])

    // User Register
    const userRegister = async (name, email, password) => {
        const api = await axios.post(`${url}/user/register`, { name, email, password }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        })
        //  alert(api.data.message)
        toast.success(api.data.message, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
        console.log("user Register", api)
        return api.data

    }

    // User Login
    const userLogin = async (email, password) => {
        const api = await axios.post(`${url}/user/login`, { email, password }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        })
        //  alert(api.data.message)
        toast.success(api.data.message, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
        setToken(api.data.token)
        setIsAuthenticated(true)
        localStorage.setItem("token", api.data.token)
        return api.data

    }

    // User Logout
    const Logout = () => {
        setToken("")
        setIsAuthenticated(false)
        localStorage.removeItem("token")
        toast.success("Logout sucessfully ...!", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    }

    // user profile
    const userProfile = async () => {
        const api = await axios.get(`${url}/user/profile`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            withCredentials: true
        })
        setUser(api.data.user)
    }

    // add to cart 
    const addToCart = async (productId, title, price, qty, imgSrc) => {
        const api = await axios.post(`${url}/cart/add`, { productId, title, price, qty, imgSrc }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            withCredentials: true
        })
        setReload(!reload)
        toast.success(api.data.message, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });

    }

    // get user cart
    const getUserCart = async () => {
        const api = await axios.get(`${url}/cart/user`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            withCredentials: true
        })
        //console.log("getUser", api.data.cart)
        setCart(api.data.cart)
    }

    // decrease cart qty
    const decreaseQty = async (productId, qty) => {
        const api = await axios.post(`${url}/cart/--qty`, { productId, qty }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            withCredentials: true
        })
        toast.success(api.data.message, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
        setReload(!reload)

        //console.log("qty..",api.data)
    }


    // decrease cart qty
    const removeFromCart = async (productId) => {
        const api = await axios.delete(`${url}/cart/remove/${productId}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            withCredentials: true
        })
        toast.success(api.data.message, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
        setReload(!reload)

    }


    // clearCart
    const clearCart = async () => {
        const api = await axios.delete(`${url}/cart/clear`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            withCredentials: true
        })
        toast.success(api.data.message, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
        setReload(!reload)
       
    }

    // shippingAddress
    const shippingAddress = async (fullName, address, city, state, country, pincode, phoneNumber) => {
        const api = await axios.post(`${url}/address/add`, { fullName, address, city, state, country, pincode, phoneNumber }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            withCredentials: true
        })
        toast.success(api.data.message, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
        setReload(!reload)

        return api.data
    }

    // getUserAddress
    const getUserAddress = async () => {
        const api = await axios.get(`${url}/address/get`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            withCredentials: true
        })

        setUserAddress(api.data.address)


    }


     // getUserOrders
    const getUserOrders = async () => {
        const api = await axios.get(`${url}/payment/userOrder`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            withCredentials: true
        })

        // console.log("user Orders",api.data)
       
        setUserOrders(api.data)


    }

    console.log("Orders", userOrders)
    return (
        <AppContext.Provider value={{
            products,
            userRegister,
            userLogin,
            url,
            token,
            isAuthenticated,
            filterData,
            setFilterData,
            Logout,
            user,
            addToCart,
            cart,
            decreaseQty,
            removeFromCart,
            clearCart,
            shippingAddress,
            userAddress,
            userOrders
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState
