import React, { useState } from "react";
import { useAllProducts, useProductByCategory } from "../../hooks/productsHook";
import ProductCard from "../components/ProductCard";
import { Search } from "lucide-react";
import Filter from "../components/Filter";
import Loader from "../../../../shared/Loader";
import { toast } from "react-toastify";

const Products = () => {
  const { data, isPending, error, search, setSearch } = useAllProducts();
  const { category, setCategory, data: productsByCategory, isPending: pending, error: errors} = useProductByCategory()

  if (isPending) return <Loader/>;
  if (pending) return <Loader/>
  if(errors) return toast.error("Some error occured")
  if (error) return toast.error("Some error occured")

  return (
    <>
      <Filter search={search} setSearch={setSearch} category={category } setCategory={setCategory} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.products.length === 0 ? (
          <p>No Products found</p>
        ) : (
            productsByCategory?.products.length ? (
              productsByCategory.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ): (
              data.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
          )
        )}
      </div>
    </>
  );
};

export default Products;
