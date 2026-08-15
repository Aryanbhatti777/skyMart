import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../hooks/cartHook";

const CartItemCard = ({ item }) => {

    const { increaseQuantity } = useCart()
    return (
        <div className="rounded-2xl border border-zinc-800 bg-[#101010] p-4 transition hover:border-violet-500/20 sm:p-5">
            <div className="flex gap-4">

                {/* Product Image */}
                <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#18181b] sm:h-32 sm:w-32">
                    <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-full w-full object-contain p-3 transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Product Content */}
                <div className="flex min-w-0 flex-1 flex-col justify-between">

                    {/* Top */}
                    <div className="flex items-start justify-between gap-3">

                        <div className="min-w-0">
                            <span className="text-xs font-medium capitalize text-violet-400">
                                {item.category}
                            </span>

                            <h2 className="mt-1 line-clamp-2 text-sm font-semibold text-white sm:text-base">
                                {item.title}
                            </h2>

                            <p className="mt-1 text-xs text-zinc-600">
                                ${item.price.toFixed(2)} each
                            </p>
                        </div>

                        {/* Remove */}
                        <button
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-zinc-600 transition hover:bg-red-500/10 hover:text-red-400"
                            aria-label="Remove item"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>

                    {/* Bottom */}
                    <div className="mt-5 flex items-center justify-between gap-4">

                        {/* Quantity */}
                        <div className="flex h-9 items-center rounded-lg border border-zinc-800 bg-[#151515]">

                            <button
                                className="flex h-full w-9 items-center justify-center text-zinc-500 transition hover:text-white"
                                aria-label="Decrease quantity"
                                
                            >
                                <Minus size={14} />
                            </button>

                            <span className="flex w-9 justify-center text-sm font-medium text-white">
                                {item.quantity}
                            </span>

                            <button
                                className="flex h-full w-9 items-center justify-center text-zinc-500 transition hover:text-white"
                                aria-label="Increase quantity"
                                onClick={() => increaseQuantity(item.id)}
                            >
                                <Plus size={14} />
                            </button>

                        </div>

                        {/* Total Price */}
                        <div className="text-right">
                            <p className="text-base font-bold text-white sm:text-lg">
                                ${(item.price * item.quantity).toFixed(2)}
                            </p>

                            {item.quantity > 1 && (
                                <p className="text-[10px] text-zinc-600">
                                    {item.quantity} * ${item.price.toFixed(2)}
                                </p>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItemCard;