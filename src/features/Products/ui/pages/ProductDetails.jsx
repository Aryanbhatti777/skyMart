import React, { useState } from "react";
import { useProductDetails } from "../../hooks/productsHook";
import { useParams, Link } from "react-router";
import { ArrowLeft, ChevronLeft, ChevronRight, Minus, Plus, RotateCcw, ShieldCheck, ShoppingBag, Star, Truck } from "lucide-react";
import Loader from "../../../../shared/Loader";

const ProductDetails = () => {
    const { id } = useParams();

    const { data, isPending, error, isFetching } = useProductDetails(id);

    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(0);

    if (isPending || isFetching) return <Loader />

    if (error || !data) {
        return (
            <div className="flex min-h-[70vh] flex-col items-center justify-center">
                <p className="text-zinc-500">Something went wrong.</p>

                <Link
                    to="/main/shop"
                    className="mt-4 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-violet-500"
                >
                    Back to Shop
                </Link>
            </div>
        );
    }

    const product = data;

    const originalPrice =
        product.price / (1 - product.discountPercentage / 100);

    const discount = Math.round(product.discountPercentage);

    const images =
        product.images?.length > 0
            ? product.images
            : [product.thumbnail];

    return (
        <main className="min-h-screen bg-[#080808] px-4 py-8 text-white sm:px-6 lg:px-10">
            <div className="mx-auto max-w-7xl">

                {/* Back Button */}
                <Link
                    to="/shop"
                    className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-violet-400"
                >
                    <ArrowLeft size={17} />
                    Back to Shop
                </Link>

                {/* ================= PRODUCT SECTION ================= */}
                <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">

                    {/* ================= IMAGE SECTION ================= */}
                    <div>
                        <div className="relative flex h-[400px] items-center justify-center overflow-hidden rounded-3xl border border-zinc-800 bg-[#101010] sm:h-[500px]">

                            {/* Discount Badge */}
                            {discount > 0 && (
                                <span className="absolute left-5 top-5 z-10 rounded-full bg-violet-600 px-3 py-1.5 text-xs font-semibold">
                                    -{discount}%
                                </span>
                            )}

                            {/* Product Image */}
                            <img
                                src={images[activeImage]}
                                alt={product.title}
                                className="h-[80%] w-[80%] object-contain transition-transform duration-500 hover:scale-105"
                            />

                            {/* Previous Button */}
                            {images.length > 1 && (
                                <button
                                    onClick={() =>
                                        setActiveImage((prev) =>
                                            prev === 0 ? images.length - 1 : prev - 1
                                        )
                                    }
                                    className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-700 bg-[#151515] text-zinc-300 transition hover:border-violet-500 hover:text-violet-400"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                            )}

                            {/* Next Button */}
                            {images.length > 1 && (
                                <button
                                    onClick={() =>
                                        setActiveImage((prev) =>
                                            prev === images.length - 1 ? 0 : prev + 1
                                        )
                                    }
                                    className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-700 bg-[#151515] text-zinc-300 transition hover:border-violet-500 hover:text-violet-400"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            )}
                        </div>

                        {/* Thumbnails */}
                        <div className="mt-4 flex gap-3 overflow-x-auto">
                            {images.map((image, index) => (
                                <button
                                    key={image}
                                    onClick={() => setActiveImage(index)}
                                    className={`h-20 w-20 shrink-0 overflow-hidden rounded-xl border bg-[#101010] transition ${activeImage === index
                                            ? "border-violet-500"
                                            : "border-zinc-800 hover:border-zinc-600"
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${product.title} ${index + 1}`}
                                        className="h-full w-full object-contain"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* ================= PRODUCT INFO ================= */}
                    <div className="flex flex-col">

                        {/* Category + Brand */}
                        <div className="flex items-center gap-3">
                            <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium capitalize text-violet-400">
                                {product.category}
                            </span>

                            {product.brand && (
                                <span className="text-sm text-zinc-500">
                                    {product.brand}
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                            {product.title}
                        </h1>

                        {/* Rating */}
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                            <div className="flex items-center gap-1 rounded-lg bg-yellow-500/10 px-2.5 py-1.5">
                                <Star
                                    size={16}
                                    className="fill-yellow-400 text-yellow-400"
                                />

                                <span className="text-sm font-semibold text-yellow-400">
                                    {product.rating}
                                </span>
                            </div>

                            <span className="text-sm text-zinc-500">
                                {product.reviews?.length || 0} Reviews
                            </span>

                            <span className="text-zinc-700">•</span>

                            <span className="text-sm text-zinc-500">
                                SKU: {product.sku}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="mt-6 text-sm leading-7 text-zinc-500 sm:text-base">
                            {product.description}
                        </p>

                        {/* Price */}
                        <div className="mt-7 border-y border-zinc-800 py-6">
                            <div className="flex flex-wrap items-end gap-3">
                                <span className="text-4xl font-bold">
                                    ${product.price.toFixed(2)}
                                </span>

                                {product.discountPercentage > 0 && (
                                    <>
                                        <span className="mb-1 text-lg text-zinc-600 line-through">
                                            ${originalPrice.toFixed(2)}
                                        </span>

                                        <span className="mb-1 rounded-md bg-violet-500/10 px-2 py-1 text-xs font-semibold text-violet-400">
                                            Save {discount}%
                                        </span>
                                    </>
                                )}
                            </div>

                            <p className="mt-2 text-xs text-zinc-600">
                                Inclusive of all applicable taxes
                            </p>
                        </div>

                        {/* Stock */}
                        <div className="mt-6 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />

                            <span className="text-sm font-medium text-emerald-400">
                                {product.availabilityStatus}
                            </span>

                            <span className="text-sm text-zinc-600">
                                ({product.stock} available)
                            </span>
                        </div>

                        {/* Quantity */}
                        <div className="mt-7">
                            <p className="mb-3 text-sm font-medium text-zinc-300">
                                Quantity
                            </p>

                            <div className="flex h-11 w-fit items-center rounded-lg border border-zinc-700 bg-[#111111]">
                                <button
                                    disabled={quantity <= 1}
                                    onClick={() =>
                                        setQuantity((prev) => Math.max(1, prev - 1))
                                    }
                                    className="flex h-full w-11 items-center justify-center text-zinc-400 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                                >
                                    <Minus size={16} />
                                </button>

                                <span className="flex w-10 justify-center text-sm font-semibold">
                                    {quantity}
                                </span>

                                <button
                                    disabled={quantity >= product.stock}
                                    onClick={() =>
                                        setQuantity((prev) =>
                                            Math.min(product.stock, prev + 1)
                                        )
                                    }
                                    className="flex h-full w-11 items-center justify-center text-zinc-400 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-violet-600 font-semibold text-white transition hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-600/20">
                                <ShoppingBag size={19} />
                                Add to Cart
                            </button>

                            <button className="flex h-12 items-center justify-center gap-2 rounded-xl border border-violet-500/40 bg-violet-500/10 font-semibold text-violet-400 transition hover:bg-violet-500/20">
                                Buy Now
                            </button>
                        </div>

                        {/* Product Benefits */}
                        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">

                            <div className="rounded-xl border border-zinc-800 bg-[#101010] p-4">
                                <Truck
                                    size={20}
                                    className="text-violet-500"
                                />

                                <p className="mt-3 text-xs font-semibold">
                                    Fast Shipping
                                </p>

                                <p className="mt-1 text-[11px] leading-5 text-zinc-600">
                                    {product.shippingInformation}
                                </p>
                            </div>

                            <div className="rounded-xl border border-zinc-800 bg-[#101010] p-4">
                                <ShieldCheck
                                    size={20}
                                    className="text-violet-500"
                                />

                                <p className="mt-3 text-xs font-semibold">
                                    Warranty
                                </p>

                                <p className="mt-1 text-[11px] leading-5 text-zinc-600">
                                    {product.warrantyInformation}
                                </p>
                            </div>

                            <div className="rounded-xl border border-zinc-800 bg-[#101010] p-4">
                                <RotateCcw
                                    size={20}
                                    className="text-violet-500"
                                />

                                <p className="mt-3 text-xs font-semibold">
                                    Returns
                                </p>

                                <p className="mt-1 text-[11px] leading-5 text-zinc-600">
                                    {product.returnPolicy}
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ================= DETAILS ================= */}
                <section className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">

                    {/* Product Details */}
                    <div className="rounded-2xl border border-zinc-800 bg-[#101010] p-6 sm:p-8">
                        <h2 className="text-xl font-bold">
                            Product Details
                        </h2>

                        <div className="mt-5 divide-y divide-zinc-800">
                            <Detail
                                label="Brand"
                                value={product.brand}
                            />

                            <Detail
                                label="SKU"
                                value={product.sku}
                            />

                            <Detail
                                label="Weight"
                                value={`${product.weight} g`}
                            />

                            <Detail
                                label="Availability"
                                value={product.availabilityStatus}
                            />

                            <Detail
                                label="Shipping"
                                value={product.shippingInformation}
                            />

                            <Detail
                                label="Warranty"
                                value={product.warrantyInformation}
                            />

                            <Detail
                                label="Return Policy"
                                value={product.returnPolicy}
                            />
                        </div>
                    </div>

                    {/* Specifications */}
                    <div className="rounded-2xl border border-zinc-800 bg-[#101010] p-6 sm:p-8">
                        <h2 className="text-xl font-bold">
                            Specifications
                        </h2>

                        <div className="mt-6 grid grid-cols-3 gap-3">
                            <Spec
                                label="Width"
                                value={`${product.dimensions.width} cm`}
                            />

                            <Spec
                                label="Height"
                                value={`${product.dimensions.height} cm`}
                            />

                            <Spec
                                label="Depth"
                                value={`${product.dimensions.depth} cm`}
                            />
                        </div>

                        <h3 className="mt-8 text-sm font-semibold">
                            Tags
                        </h3>

                        <div className="mt-3 flex flex-wrap gap-2">
                            {product.tags?.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-zinc-800 bg-[#151515] px-3 py-1.5 text-xs capitalize text-zinc-500"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ================= REVIEWS ================= */}
                <section className="mt-16 pb-16">
                    <div>
                        <h2 className="text-2xl font-bold">
                            Customer Reviews
                        </h2>

                        <p className="mt-2 text-sm text-zinc-600">
                            What customers are saying about this product.
                        </p>
                    </div>

                    <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
                        {product.reviews?.map((review, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-zinc-800 bg-[#101010] p-6"
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <h3 className="text-sm font-semibold">
                                            {review.reviewerName}
                                        </h3>

                                        <p className="mt-1 text-xs text-zinc-600">
                                            Verified customer
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-1 rounded-md bg-yellow-500/10 px-2 py-1">
                                        <Star
                                            size={13}
                                            className="fill-yellow-400 text-yellow-400"
                                        />

                                        <span className="text-xs font-semibold text-yellow-400">
                                            {review.rating}
                                        </span>
                                    </div>
                                </div>

                                <p className="mt-5 text-sm leading-6 text-zinc-500">
                                    "{review.comment}"
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

const Detail = ({ label, value }) => {
    return (
        <div className="flex items-start justify-between gap-5 py-4">
            <span className="text-sm text-zinc-600">
                {label}
            </span>

            <span className="max-w-[60%] text-right text-sm font-medium text-zinc-300">
                {value}
            </span>
        </div>
    );
};

const Spec = ({ label, value }) => {
    return (
        <div className="rounded-xl border border-zinc-800 bg-[#151515] p-4 text-center">
            <p className="text-xs text-zinc-600">
                {label}
            </p>

            <p className="mt-2 text-sm font-semibold text-zinc-300">
                {value}
            </p>
        </div>
    );
};

export default ProductDetails;