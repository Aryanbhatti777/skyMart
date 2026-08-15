import React from "react";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { Link, useNavigate } from "react-router";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { useCart } from "../hooks/cartHook";
import { toast } from "react-toastify";

const Cart = () => {

  const { grandTotal, cartItems } = useSelector(state => state.cart)
  const { clearCart, placeOrder } = useCart()
  const navigate = useNavigate()
 
  return (
    <main className="min-h-screen bg-[#080808] px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mb-8">
          <Link
            to="/main/shop"
            className="mb-5 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-violet-400"
          >
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>

          <div className="flex items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Shopping Cart
              </h1>

              <p className="mt-2 text-sm text-zinc-500">
                Review your items before checkout.
              </p>
            </div>

            <span className="hidden rounded-full bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-400 sm:block">
              3 Items
            </span>
          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">

          {/* ================= CART ITEMS ================= */}
          <section className="space-y-3">

            <CartItems/>

            {/* Clear Cart */}
            <div className="flex justify-end pt-2">
              <button className="flex items-center gap-2 text-xs font-medium text-zinc-600 transition hover:text-red-400"
              onClick={clearCart}
              >
                <Trash2 size={14} />
                Clear Cart
              </button>
            </div>

          </section>

          {/* ================= ORDER SUMMARY ================= */}
          <aside className="h-fit rounded-2xl border border-zinc-800 bg-[#101010] p-6 lg:sticky lg:top-6">

            <h2 className="text-lg font-semibold">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4 border-b border-zinc-800 pb-6">

              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">
                  Subtotal
                </span>

                <span className="font-medium">
                  ${grandTotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">
                  Shipping
                </span>

                <span className="font-medium text-emerald-400">
                  Free
                </span>
              </div>


            </div>

            {/* Total */}
            <div className="flex items-center justify-between py-5">
              <span className="font-semibold">
                Total
              </span>

              <span className="text-2xl font-bold">
                ${grandTotal.toFixed(2)}
              </span>
            </div>

            {/* Checkout */}
            <button className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-violet-600 font-semibold text-white transition hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-600/20"
              onClick={() => {
                if (cartItems?.length === 0) {
                  toast.error("Please add items in cart first ")
                  return 
                }
                placeOrder(),
                  navigate("/main/shop")
              }}
            >
              <ShoppingBag size={18} />
              Proceed to Checkout
            </button>

            {/* Benefits */}
            <div className="mt-6 space-y-4 border-t border-zinc-800 pt-5">

              <div className="flex gap-3">
                <Truck
                  size={18}
                  className="shrink-0 text-violet-500"
                />

                <div>
                  <p className="text-xs font-medium">
                    Free Shipping
                  </p>

                  <p className="mt-1 text-[11px] text-zinc-600">
                    Don't worry about extra charges.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <ShieldCheck
                  size={18}
                  className="shrink-0 text-violet-500"
                />

                <div>
                  <p className="text-xs font-medium">
                    Secure Checkout
                  </p>

                  <p className="mt-1 text-[11px] text-zinc-600">
                    Your payment information is protected
                  </p>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Cart;