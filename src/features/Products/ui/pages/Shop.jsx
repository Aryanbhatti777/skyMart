import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import Products from "./Products";

const Shop = () => {
    return (
        <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-9 lg:py-10">
            <div className="mx-auto max-w-[1520px]">
                <Link
                    to="/main"
                    className="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-violet-500"
                >
                    <ArrowLeft size={17} />
                    Back to Home
                </Link>

                <div>
                    <h1 className="text-3xl font-semibold text-white sm:text-4xl">
                        All Products
                    </h1>

                    <p className="mt-2 text-sm text-gray-500 sm:text-base">
                        Discover products you'll love.
                    </p>
                </div>

                <div className="mt-8 px-0 sm:mt-10 lg:mt-16">
                    <Products />
                </div>
            </div>
        </main>
    );
};

export default Shop;