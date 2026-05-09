import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaShoppingBag,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight
} from 'react-icons/fa'

import { Link } from 'react-router-dom'
import Lottie from "lottie-react"
import OnlineShopping from "../assets/OnlineShopping.json"

const Footer = () => {

  return (

    <footer className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 text-white mt-16 border-t border-orange-300/20">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shadow-lg">

                <span className="text-white font-bold text-xl">
                  M
                </span>

              </div>

              <h2 className="text-2xl font-bold">
                Mern Commerce
              </h2>

            </div>

            <p className="mt-5 text-orange-100 leading-7">
              Discover premium gadgets, fashion, and accessories
              with modern shopping experience and fast delivery.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">

              <a
                href="/"
                className="w-10 h-10 rounded-full bg-black/20 hover:bg-black transition duration-300 flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="/"
                className="w-10 h-10 rounded-full bg-black/20 hover:bg-black transition duration-300 flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="/"
                className="w-10 h-10 rounded-full bg-black/20 hover:bg-black transition duration-300 flex items-center justify-center"
              >
                <FaTwitter />
              </a>

              <a
                href="/"
                className="w-10 h-10 rounded-full bg-black/20 hover:bg-black transition duration-300 flex items-center justify-center"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              <Link
                to="/"
                className="flex items-center gap-2 text-orange-100 hover:text-white transition duration-300"
              >
                <FaArrowRight className="text-xs" />
                Home
              </Link>

              <Link
                to="/cart"
                className="flex items-center gap-2 text-orange-100 hover:text-white transition duration-300"
              >
                <FaArrowRight className="text-xs" />
                Cart
              </Link>

              <Link
                to="/profile"
                className="flex items-center gap-2 text-orange-100 hover:text-white transition duration-300"
              >
                <FaArrowRight className="text-xs" />
                Profile
              </Link>

              <Link
                to="/login"
                className="flex items-center gap-2 text-orange-100 hover:text-white transition duration-300"
              >
                <FaArrowRight className="text-xs" />
                Login
              </Link>

            </div>

          </div>

         

          {/* Contact + Lottie */}
          <div>

            <h3 className="text-xl font-bold mb-5">
              Contact Us
            </h3>

           

            <div className="flex flex-col gap-5">

              <div className="flex items-start gap-3">

                <FaMapMarkerAlt className="mt-1" />

                <p className="text-orange-100">
                  Meerut, Uttar Pradesh, India
                </p>

              </div>

              <div className="flex items-center gap-3">

                <FaPhoneAlt />

                <p className="text-orange-100">
                  +91 9876543210
                </p>

              </div>

              <div className="flex items-center gap-3">

                <FaEnvelope />

                <p className="text-orange-100">
                  support@merncommerce.com
                </p>

              </div>

            </div>

          </div>
          <div>
             {/* Lottie Animation */}
            <div className="w-full flex justify-center mb-4">

              <Lottie
                animationData={OnlineShopping}
                loop={true}
                className="w-[220px] h-[220px]"
              />

            </div>
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-orange-300/20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-orange-100 text-sm text-center md:text-left">
            © 2026 Mern Commerce. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">

            <Link
              to="/"
              className="text-orange-100 hover:text-white transition duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/"
              className="text-orange-100 hover:text-white transition duration-300"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>

  )
}

export default Footer