import React, { useState } from "react";
import { useAllProducts } from "../../hooks/productsHook";
import ProductCard from "../components/ProductCard";
import { Search } from "lucide-react";
import Filter from "../components/Filter";

const Products = () => {
  const { data, isPending, error, search, setSearch } = useAllProducts();

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>Something went wrong.</p>;

  return (
    <>
      <Filter search={search} setSearch={setSearch} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.products.length === 0 ? (
          <p>No Products found</p>
        ) : (
          data.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </>
  );
};

export default Products;
