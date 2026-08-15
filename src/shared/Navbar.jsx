import React, { useState } from "react";
import { Zap, ShoppingCart, LogOut, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../features/Auth/hooks/AuthHook";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartLength } = useSelector(state => state.cart)
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const initialLetter = user?.slice(0, 1);
  const navigate = useNavigate()

  const { logOut } = useAuth();

  return (
    <>
      <nav className="relative z-40 h-[72px] w-full border-b border-white/[0.06] bg-[#09090b]">
        <div className="mx-auto flex h-full max-w-[1520px] items-center justify-between px-6 lg:px-8">

          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 shadow-lg shadow-violet-600/20">
              <Zap
                size={21}
                strokeWidth={3}
                className="fill-white text-white"
              />
            </div>

            <h1 className="text-[23px] font-semibold tracking-tight text-white">
              Sky<span className="text-violet-500">Mart</span>
            </h1>
          </div>

          <div className="hidden items-center gap-9 md:flex">
            <NavLink
              to="/main"
              end
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-violet-500"
                    : "text-gray-500 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/main/shop"
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-violet-500"
                    : "text-gray-500 hover:text-white"
                }`
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/main/about"
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-violet-500"
                    : "text-gray-500 hover:text-white"
                }`
              }
            >
              About
            </NavLink>
          </div>

          <div className="flex items-center gap-2.5">
   
            <button
              className="
                flex h-12 items-center gap-2.5 rounded-2xl
                border border-white/10 bg-[#111113] px-3
                transition hover:border-violet-500/40
              "
            >
              <span
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-xl bg-violet-600 text-sm font-semibold text-white
                "
              >
                {initialLetter}
              </span>

              <span className="hidden font-medium text-gray-400 sm:block">
                {user}
              </span>
            </button>

     
            <button
              onClick={() => navigate("/main/cart")}
              className="
                relative flex h-12 w-12 items-center justify-center
                rounded-2xl border border-white/10 bg-[#111113]
                text-gray-400 transition
                hover:border-violet-500/40 hover:text-white
              "
            >
              <ShoppingCart size={20} strokeWidth={1.8} />

  
              <span
                className="
                  absolute -right-1 -top-1 flex h-5 min-w-5
                  items-center justify-center rounded-full
                  bg-violet-600 px-1 text-[10px] font-bold text-white
                "
              >
                {cartLength}
              </span>
            </button>


            <button
              onClick={logOut}
              className="
                flex h-12 w-12 items-center justify-center
                rounded-2xl border border-white/10 bg-[#111113]
                text-gray-400 transition
                hover:border-violet-500/40 hover:text-violet-400
              "
            >
              <LogOut size={20} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
