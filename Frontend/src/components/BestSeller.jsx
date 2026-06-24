import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';
import Title from './Title';
import Productitem from './Productitem';

const BestSeller = () => {
    
    const { products } = useContext(ShopContext);
    const [bestSellerProducts, setBestSellerProducts] = useState([]);

    useEffect(() => {
        if (products && products.length > 0) {
            
            const popularItems = products.filter((item) => item.bestSeller);
            setBestSellerProducts(popularItems.slice(0, 5));
        }
    }, [products]); 

    return (
        <div className="my-10 px-4 sm:px-6 lg:px-8">
            
            <div className="text-center text-2xl sm:text-4xl py-8">
                <Title title1="BEST SELLER " title2="TRENDS" />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500 mt-2">
                    Check out our absolute top-selling outfits loved by thousands this season.
                </p>
            </div>

            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-6">
                {
                    bestSellerProducts.map((item) => (
                        <Productitem 
                            key={item.id} 
                            id={item.id} 
                            image={item.image} 
                            name={item.name} 
                            price={item.price} 
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default BestSeller;