import React, { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard";

const Categories = () => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  if (categories.length === 0) return <div>Categories not found</div>;

  return (
      <FeatureCard cards={categories}/>
    // <div></div>
  )
};

export default Categories;
