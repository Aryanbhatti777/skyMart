import React, { useState } from "react";
import { useAllProducts, useProductByCategory } from "../../hooks/productsHook";
import ProductCard from "../components/ProductCard";
import { Search } from "lucide-react";
import Filter from "../components/Filter";
import Loader from "../../../../shared/Loader";
import { toast } from "react-toastify";

const Products = () => {
  const { data, isPending, error, search, setSearch, sortItem, setSortItem} = useAllProducts();

  const {
    category,
    setCategory,
    data: productsByCategory,
    isPending: pending,
    error: errors,
  } = useProductByCategory(sortItem);

  if (error || errors) {
    return <p>Something went wrong.</p>;
  }

  const products = category
    ? productsByCategory?.products || []
    : data?.products || [];

  const loading = isPending || pending;

  return (
    <>
      <Filter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sortItem={sortItem}
        setSortItem={setSortItem}
      />

      <div className="relative min-h-[400px]">
        {loading ? (
          <Loader />
        ) : products.length === 0 ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <p className="text-gray-500">
              No Products found
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
