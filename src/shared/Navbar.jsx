import React from "react";
import { Zap, ShoppingCart, LogOut } from "lucide-react";
import { NavLink } from "react-router";
import { useAuth } from "../features/Auth/hooks/AuthHook";

const Navbar = () => {

  const user = JSON.parse(localStorage.getItem("loggedInUser"))
  const initialLetter = user?.slice(0, 1)
  
  const { logOut } = useAuth()
  return (
    <nav className="w-full h-[72px] bg-[#09090b] border-b border-white/[0.06]">
      <div className="max-w-[1520px] h-full mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            className="
            w-10 h-10
            rounded-xl
            bg-violet-600
            flex items-center justify-center
            shadow-lg shadow-violet-600/20
          "
          >
            <Zap size={21} strokeWidth={3} className="text-white fill-white" />
          </div>

          <h1 className="text-[23px] font-semibold tracking-tight text-white">
            Sky<span className="text-violet-500">Mart</span>
          </h1>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-9">
                  <NavLink
                      to="/main"
                      className="
              text-violet-500
              font-semibold
              transition
            "
                      className={({ isActive }) => {
                        return  isActive ? "text-violet-600" : "text-white"
                      }}
                      end
          >
            Home
          </NavLink>

          <NavLink
            to="/main/shop"
            className="
              text-gray-500
              hover:text-white
              font-medium
              transition
            "
            className={({ isActive }) => {
                        return  isActive ? "text-violet-600" : "text-white"
                      }}
          >
            Shop
          </NavLink>

          <NavLink
            to="/main/about"
            className="
              text-gray-500
              hover:text-white
              font-medium
              transition
            "
                      className={({ isActive }) => {
                        return  isActive ? "text-violet-600" : "text-white"
                      }}
          >
            About
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2.5">
          {/* User */}
          <button
            className="
              h-12
              px-3
              rounded-2xl
              border border-white/10
              bg-[#111113]
              flex items-center gap-2.5
              hover:border-violet-500/40
              transition
            "
          >
            <span
              className="
              w-8 h-8
              rounded-xl
              bg-violet-600
              text-white
              flex items-center justify-center
              font-semibold
              text-sm
            "
            >
              {initialLetter}
            </span>

            <span className="hidden sm:block text-gray-400 font-medium">
              {user}
            </span>
          </button>

          {/* Cart */}
          <button
            className="
              w-12 h-12
              rounded-2xl
              border border-white/10
              bg-[#111113]
              text-gray-400
              flex items-center justify-center
              hover:text-white
              hover:border-violet-500/40
              transition
            "
          >
            <ShoppingCart size={20} strokeWidth={1.8} />
          </button>

          {/* Logout */}
          <button
            className="
              w-12 h-12
              rounded-2xl
              border border-white/10
              bg-[#111113]
              text-gray-400
              flex items-center justify-center
              hover:text-violet-400
              hover:border-violet-500/40
              transition
            "
            onClick={logOut}
          >
            <LogOut size={20} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
