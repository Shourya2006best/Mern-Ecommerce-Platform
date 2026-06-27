import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';
import Title from './Title';
import ProductItem from './ProductItem'; 

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      let productsCopy = [...products];

      
      productsCopy = productsCopy.filter((item) => category === item.category);

      
      productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

      
      setRelated(productsCopy.slice(0, 4));
    }
  }, [products, category, subCategory]); // Re-runs perfectly if the user switches to a different product page

  return (
    <div className="my-24">
      
      <div className="text-center text-3xl py-2">
        <Title title1="RELATED " title2="PRODUCTS" />
      </div>

   
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6 mt-8">
        {related.length > 0 ? (
          related.map((item) => (
            <ProductItem
              key={item._id}
              _id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-sm text-gray-400 italic py-4">
            No similar products found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;