import React, { useState } from "react";
import { Zap, ShoppingCart, LogOut, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../features/Auth/hooks/AuthHook";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const initialLetter = user?.slice(0, 1);
  const navigate = useNavigate()

  const { logOut } = useAuth();

  return (
    <>
      <nav className="relative z-40 h-[72px] w-full border-b border-white/[0.06] bg-[#09090b]">
        <div className="mx-auto flex h-full max-w-[1520px] items-center justify-between px-6 lg:px-8">
          {/* ================= LOGO ================= */}
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

          {/* ================= NAVIGATION ================= */}
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

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center gap-2.5">
            {/* User */}
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

            {/* ================= CART ================= */}
            <button
              onClick={() => setCartOpen(true)}
              className="
                relative flex h-12 w-12 items-center justify-center
                rounded-2xl border border-white/10 bg-[#111113]
                text-gray-400 transition
                hover:border-violet-500/40 hover:text-white
              "
            >
              <ShoppingCart size={20} strokeWidth={1.8} />

              {/* Cart count */}
              <span
                className="
                  absolute -right-1 -top-1 flex h-5 min-w-5
                  items-center justify-center rounded-full
                  bg-violet-600 px-1 text-[10px] font-bold text-white
                "
              >
                0
              </span>
            </button>

            {/* Logout */}
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

      {/* ================================================= */}
      {/* CART OVERLAY */}
      {/* ================================================= */}

      {cartOpen && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/60 backdrop-blur-sm
          "
          onClick={() => setCartOpen(false)}
        >
          {/* ================= CART DRAWER ================= */}
          <aside
            onClick={(e) => e.stopPropagation()}
            className="
              absolute right-0 top-0
              flex h-full w-[35vw] min-w-[380px]
              flex-col
              border-l border-white/[0.08]
              bg-[#0c0c0f]
              shadow-2xl shadow-black/50

              animate-[cartSlideIn_0.35s_cubic-bezier(0.16,1,0.3,1)]
            "
          >
            {/* ================= CART HEADER ================= */}
            <div
              className="
                flex h-[72px] shrink-0 items-center justify-between
                border-b border-white/[0.06] px-6
              "
            >
              <div>
                <h2 className="text-lg font-semibold text-white">Your Cart</h2>

                <p className="mt-0.5 text-xs text-zinc-600">0 items</p>
              </div>

              <button
                onClick={() => setCartOpen(false)}
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-xl border border-white/10
                  bg-[#151518] text-zinc-500
                  transition
                  hover:border-violet-500/40
                  hover:text-white
                "
              >
                <X size={18} />
              </button>
            </div>

            {/* ================= EMPTY CART ================= */}
            <div className="flex flex-1 items-center justify-center px-6">
              <div className="text-center">
                <div
                  className="
                    mx-auto flex h-20 w-20 items-center justify-center
                    rounded-2xl border border-violet-500/10
                    bg-violet-500/10
                  "
                >
                  <ShoppingCart
                    size={32}
                    strokeWidth={1.5}
                    className="text-violet-500"
                  />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  Your cart is empty
                </h3>

                <p className="mx-auto mt-2 max-w-[280px] text-sm leading-6 text-zinc-600">
                  Looks like you haven't added anything to your cart yet.
                </p>

                <button
                  onClick={() => {
                    setCartOpen(false)
                    navigate("/main/shop")
                  }}
                  className="
                    mt-6 rounded-xl
                    bg-violet-600 px-6 py-3
                    text-sm font-semibold text-white
                    transition
                    hover:bg-violet-500
                    hover:shadow-lg hover:shadow-violet-600/20
                  "
                >
                  Continue Shopping
                </button>
              </div>
            </div>

            {/* ================= CART FOOTER ================= */}
            <div className="shrink-0 border-t border-white/[0.06] p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-zinc-500">Subtotal</span>

                <span className="text-lg font-semibold text-white">$0.00</span>
              </div>

              <button
                disabled
                className="
                  h-12 w-full rounded-xl
                  bg-violet-600
                  text-sm font-semibold text-white
                  opacity-40
                  cursor-not-allowed
                "
              >
                Checkout
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Drawer animation */}
      <style>
        {`
          @keyframes cartSlideIn {
            from {
              transform: translateX(100%);
            }

            to {
              transform: translateX(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
