import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from './Title'
import Productitem from './Productitem'

const LatestCollection = () => {

    
    const { products } = useContext(ShopContext);

    const [prodvalue, setprodvalue] = useState([]);

    useEffect(() => {
        
        if (products && products.length > 0) {
            setprodvalue(products.slice(0, 10));
        }
    }, [products]); 

    return (
        <div className="my-10 px-4 sm:px-6 lg:px-8">
           
             <div className='text-2xl sm:text-4xl'>
             <Title title1="Latest Collection " title2="2026" />
             </div>
             
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-6">
                {
                    prodvalue.map((item) => (
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
    )
}

export default LatestCollection;