import { useNavigate } from "react-router";
import { useCart } from "../../../Cart/hooks/cartHook";

const ProductCard = ({ product }) => {
    const { title, description, price, discountPercentage, rating, stock, brand, thumbnail,category, id
    } = product;

    const navigate = useNavigate()
    const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(2);
    
    const { useAddCart } = useCart()
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl"
        >

            <div className="relative flex h-60 items-center justify-center overflow-hidden bg-gray-50 p-6">
        
                <span className="absolute left-4 top-4 z-10 rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
                    -{Math.round(discountPercentage)}%
                </span>

               
                <span
                    className={`absolute right-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-medium ${stock > 0
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                >
                    {stock > 0 ? "In Stock" : "Out of Stock"}
                </span>

                <img
                    src={thumbnail}
                    loading="lazy"
                    alt={title}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110  cursor-pointer"
                    onClick={() => navigate(`/main/productdetails/${id}`)}
                />
            </div>

        
            <div className="flex flex-1 flex-col p-5">

             
                <div className="mb-2 flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-violet-50 px-2.5 py-1 font-medium capitalize text-violet-600">
                        {category}
                    </span>

                    {brand && (
                        <span className="text-gray-400">
                            {brand}
                        </span>
                    )}
                </div>

               
                <h2 className="line-clamp-1 text-lg font-semibold text-gray-900">
                    {title}
                </h2>

             
                <p className="mt-2 line-clamp-2 text-sm leading-5 text-gray-500">
                    {description}
                </p>

             
                <div className="mt-3 flex items-center gap-2">
                    <div className="flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1">
                        <span className="text-sm">★</span>
                        <span className="text-sm font-semibold text-amber-700">
                            {rating}
                        </span>
                    </div>

                    <span className="text-xs text-gray-400">
                        {stock} available
                    </span>
                </div>

           
                <div className="mt-auto pt-5">
                    <div className="flex items-end gap-2">
                        <span className="text-2xl font-bold text-gray-900">
                            ${discountedPrice}
                        </span>

                        <span className="mb-1 text-sm text-gray-400 line-through">
                            ${price.toFixed(2)}
                        </span>
                    </div>

                
                    <button
                        disabled={stock === 0}
                        className="mt-4 w-full rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-gray-300  cursor-pointer"
                        onClick={() => useAddCart(product)}
                    >
                        {stock > 0 ? "Add to Cart" : "Out of Stock"}
                    </button>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;