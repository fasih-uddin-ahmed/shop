import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import Categories from '../../components/Categories'

function Products() {

    const [products, setProducts] = useState([]);
      
        useEffect(() => {
          const fetchProducts = async () => {

            try {
              const res = await fetch('https://fakestoreapi.com/products?limit=12');
              const data = await res.json();
              setProducts(data);  

            } catch (error) {
              console.error("Error fetching products:", error);
            }
        };
    
        fetchProducts();
      }, []);


  return (
    <div>
    <Categories/>
    <div className="bg-gray-900 flex flex-col text-center w-full pt-20">
      <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">Products</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">All Products</h1>
    </div>
    {
        products.length > 0 ? 
        <ProductCard products={products}/>
        :
        <div>Loading...</div>
    }
    </div>
  )
}

export default Products