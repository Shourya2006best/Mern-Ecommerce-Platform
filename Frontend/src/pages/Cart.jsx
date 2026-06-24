import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';



const Cart = () => {
  const { products, currency, cartItems, updateQuantity, getCartAmount,navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  

  
  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14 px-4 max-w-7xl mx-auto min-h-[60vh]'>
      
      <div className='text-2xl mb-3'>
        <Title title1="YOUR " title2="CART" />
      </div>

      <div className='mt-8'>
       
        {cartData.length === 0 || !products || products.length === 0 ? (
          <p className='text-center text-gray-500 py-12 text-sm uppercase tracking-widest'>Your shopping cart is empty</p>
        ) : (
          cartData.map((item, index) => {
           
            const productData = products.find(
              (product) => String(product.id) === String(item._id) || String(product.id) === String(item._id)
            );

          
            if (!productData) {
              return (
                <div key={index} className='py-4 border-b text-xs text-gray-400 italic'>
                  Loading item details...
                </div>
              );
            }

            return (
              <div 
                key={index} 
                className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_2fr_0.5fr] sm:grid-cols-[4fr_1.5fr_0.5fr] items-center gap-4'
              >
             
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20 rounded border object-cover' src={productData.image?.[0] || productData.image} alt="" />
                  <div>
                    <p className='text-xs sm:text-lg font-medium text-gray-800'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p className='text-sm font-semibold text-gray-900'>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50 text-xs rounded-sm font-mono'>
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>

              
                <div>
                  <input 
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === '' || value === '0') return;
                      updateQuantity(item._id, item.size, Number(value));
                    }}
                    className='border max-w-10 sm:max-w-16 px-1.5 sm:px-2 py-1 text-center outline-none rounded-sm bg-white focus:border-black text-sm' 
                    type="number" 
                    min={1} 
                    defaultValue={item.quantity} 
                  />
                </div>

                
                <div className='text-right'>
                  <img 
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className='w-4 sm:w-5 cursor-pointer opacity-60 hover:opacity-100 transition-opacity mx-auto md:mr-0' 
                    src={assets.bin_icon || 'https://cdn-icons-png.flaticon.com/512/3096/3096673.png'} 
                    alt="Remove Item" 
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
   
<div className='flex justify-end my-12 px-4 sm:px-6 lg:px-8'>
  <div className='w-full sm:w-2/3 flex flex-col gap-6 text-right'>
    
   
    <CartTotal />
    
   
    <div className='w-full text-end'>
      <button 
        onClick={() => navigate('/placeorder')} 
        className='bg-black text-white text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-sm active:bg-gray-800 hover:opacity-90 transition-all duration-200 shadow-sm'
      >
        Proceed to Checkout
      </button>
    </div>

  </div>
</div>
      
    </div>
  );
};

export default Cart;