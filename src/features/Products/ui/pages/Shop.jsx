import React, { useEffect } from 'react'
import Products from './Products';
import { useAllProducts } from '../../hooks/productsHook';
import Filter from '../components/Filter';



const Shop = () => {

    const { search, setSearch, length } = useAllProducts()

  return (
      <>
          <div className="pl-9 pt-10">
              <h1 className="text-4xl ">All Products</h1>
              <p className="text-gray-500">{length} products found</p>
          </div>

          <div className="pt-20 px-5" >
              <Products />
          </div>
          
      </>
  )
}

export default Shop;