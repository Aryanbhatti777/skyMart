import React from "react";
import { ArrowRight, Box, TrendingUp, Star, Tag } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-6">
      {/* HERO */}
      <div
        className="
          relative overflow-hidden
          max-w-[1520px] mx-auto
          min-h-[450px]
          rounded-[28px]
          border border-white/20
          bg-[#101111]
          px-8 sm:px-12 lg:px-16
          py-12
          flex items-center 
        "
      >
        {/* Grid Background */}
        <div
          className="
            absolute inset-0 pointer-events-none opacity-[0.7]
            bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)]
            bg-[size:50px_50px]
          "
        />

        {/* Glow */}
        <div
          className="
          absolute
          w-[450px] h-[450px]
          rounded-full
          bg-[#c8ff00]/5
          blur-[120px]
          -left-40
          top-[-150px]
          pointer-events-none
        "
        />

        <div className="relative z-10 w-full flex justify-between items-center gap-10">
          {/* LEFT CONTENT */}
          <div className="max-w-[700px]">
            <p
              className="
              text-violet-600
              text-sm sm:text-base
              font-medium
              tracking-[0.12em]
              uppercase
              mb-5 rotate
            "
            >
              Good Evening 👋
            </p>

            <h1
              className="
              text-white
              text-5xl sm:text-6xl lg:text-[58px]
              leading-[1.02]
              font-semibold
              tracking-[-0.04em]
            "
            >
              Welcome back,
              <br />
              <span className="text-violet-600">Aryan!</span>
            </h1>

            <p
              className="
              mt-6
              text-gray-500
              text-base sm:text-lg
              leading-7
              max-w-[600px]
            "
            >
              Discover today's picks — hand-curated products across electronics,
              fashion, and more.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-8">
              <button
                className="
                  h-14
                  px-7
                  rounded-2xl
                  bg-violet-600
                  text-black
                  font-semibold
                  flex items-center gap-3
                  hover:bg-[#d5ff3b]
                  transition-all duration-200
                  hover:scale-[1.02]
                "
              >
                Shop Now
                <ArrowRight size={19} />
              </button>

              <button
                className="
                  h-14
                  px-7
                  rounded-2xl
                  border border-white/15
                  bg-white/[0.01]
                  text-gray-300
                  font-medium
                  hover:bg-white/[0.05]
                  hover:border-white/25
                  transition-all duration-200
                "
              >
                View All Products
              </button>
            </div>
          </div>

          {/* RIGHT OFFER CARDS */}
          <div className="hidden md:flex flex-col gap-4 w-[190px] shrink-0">
            {/* Products */}
            <div
              className="
              h-[116px]
              rounded-[20px]
              border border-[#c8ff00]/30
              bg-violet-400
              flex flex-col items-center justify-center
              text-center
            "
            >
              <h3 className="text-3xl font-bold">20+</h3>

              <p className="text-white text-sm mt-1">Products Available</p>
            </div>

            {/* Delivery */}
            <div
              className="
              h-[108px]
              rounded-[20px]
              border border-white/20
              bg-white/[0.01]
              flex flex-col items-center justify-center
              text-center
            "
            >
              <h3 className="text-white text-3xl font-semibold">Free</h3>

              <p className="text-gray-500 text-sm mt-1">Delivery on ₹999+</p>
            </div>
          </div>
        </div>
      </div>

      {/* STAT CARDS */}
      <div
        className="
        max-w-[1520px]
        mx-auto
        mt-12
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-4
      "
      >
        {/* Cart Items */}
        <StatCard
          icon={<Box size={24} />}
          iconStyle="bg-violet-300 text-violet-800"
          value="0"
          title="Cart Items"
          subtitle="In your bag"
        />

        {/* Cart Value */}
        <StatCard
          icon={<TrendingUp size={24} />}
          iconStyle="bg-blue-500/10 text-blue-400"
          value="₹0.00"
          title="Cart Value"
          subtitle="Ready to checkout"
        />

        {/* Top Products */}
        <StatCard
          icon={<Star size={24} />}
          iconStyle="bg-yellow-500/10 text-yellow-400"
          value="5"
          title="Top Products"
          subtitle="Highly rated"
        />

        {/* Categories */}
        <StatCard
          icon={<Tag size={24} />}
          iconStyle="bg-purple-500/10 text-purple-400"
          value="6"
          title="Categories"
          subtitle="To explore"
        />
      </div>
    </section>
  );
};

/* ---------------- STAT CARD ---------------- */

const StatCard = ({ icon, iconStyle, value, title, subtitle }) => {
  return (
    <div
      className="
      min-h-[150px]
      rounded-[25px]
      border border-white/20
      bg-[#101111]
      px-7
      flex items-center
      gap-5
      hover:border-white/30
      transition-all duration-200
    "
    >
      <div
        className={`
        w-14 h-14
        rounded-[18px]
        flex items-center justify-center
        shrink-0
        ${iconStyle}
      `}
      >
        {icon}
      </div>

      <div>
        <h3
          className="
          text-white
          text-2xl
          font-semibold
          tracking-tight
        "
        >
          {value}
        </h3>

        <p
          className="
          text-gray-400
          text-base
          mt-0.5
        "
        >
          {title}
        </p>

        <p
          className="
          text-gray-600
          text-sm
          mt-1
        "
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Hero;
