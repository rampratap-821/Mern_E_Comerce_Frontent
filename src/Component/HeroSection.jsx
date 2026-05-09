import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaShoppingBag,
  FaStar
} from 'react-icons/fa'

const HeroSection = () => {

  return (

    <section className="relative w-full h-[90vh] overflow-hidden">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop"
        alt="Banner"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Orange Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/70 via-orange-500/40 to-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">

          <div className="max-w-3xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full">

              <FaStar className="text-yellow-400" />

              <span className="text-white font-medium text-sm">
                Biggest Sale Of The Year
              </span>

            </div>

            {/* Heading */}
            <h1 className="mt-7 text-5xl md:text-7xl font-extrabold leading-tight text-white">

              Upgrade Your
              <br />

              <span className="text-orange-300">
                Digital Lifestyle
              </span>

            </h1>

            {/* Description */}
            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-8 max-w-2xl">

              Shop premium mobiles, laptops, headphones,
              cameras, and trending gadgets with amazing
              deals and lightning-fast delivery.

            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5">

              {/* Shop Button */}
              <Link
                to="/"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105"
              >

                <FaShoppingBag />

                Shop Now

                <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />

              </Link>

              {/* Explore Button */}
              <Link
                to="/cart"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300"
              >

                Explore Deals

              </Link>

            </div>

            {/* Bottom Stats */}
            <div className="mt-12 flex flex-wrap gap-8">

              <div>

                <h2 className="text-4xl font-extrabold text-white">
                  10K+
                </h2>

                <p className="text-gray-300 mt-1">
                  Happy Customers
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-extrabold text-white">
                  500+
                </h2>

                <p className="text-gray-300 mt-1">
                  Premium Products
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-extrabold text-white">
                  4.9★
                </h2>

                <p className="text-gray-300 mt-1">
                  Customer Rating
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default HeroSection