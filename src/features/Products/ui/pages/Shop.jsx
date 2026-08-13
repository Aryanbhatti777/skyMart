import React from 'react'
import Products from './Products';

const Shop = () => {
  return (
      <>
          <div className="pl-9 pt-10">
              <h1 className="text-4xl ">All Products</h1>
              <p className="text-gray-500">100 products found</p>
          </div>
          <div className="pt-20 px-5" >
              <Products />
          </div>
          
      </>
  )
}

export default Shop;