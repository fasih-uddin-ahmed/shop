import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard';

function CategoryProducts() {
    const { name } = useParams()

    const [categoryProducts, setCategoryProducts] = useState([]);
      
        useEffect(() => {
          const fetchCategoryProducts = async () => {

            try {
              console.log(name);
              const res = await fetch(`https://fakestoreapi.com/products/category/${name}`);
              const data = await res.json();
              setCategoryProducts(data);  

            } catch (error) {
              console.error("Error fetching products:", error);
            }
        };
    
        fetchCategoryProducts();

      }, []);

      if (categoryProducts.length === 0) return <div>Loading....</div>
  return (
    <ProductCard products={categoryProducts} />
  )
}

export default CategoryProducts