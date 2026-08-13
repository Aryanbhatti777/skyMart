import React from 'react'
import { useAllProducts } from '../../hooks/productsHook';
import ProductCard from '../components/ProductCard';

const Products = () => {

    const { data, isPending, error } = useAllProducts();

    if (isPending) return <p>Loading...</p>;

    if (error) return <p>Something went wrong.</p>;

    return (
        <>
            <div>
                
            </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
            </div>
        </>
    );
}

export default Products;