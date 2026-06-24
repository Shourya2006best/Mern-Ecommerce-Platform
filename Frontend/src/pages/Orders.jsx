import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';
import Title from '../components/Title';

const Orders = () => {
  const { products, currency, cartItems } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    if (!products || products.length === 0) return;

    const tempOrderData = [];

    
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          const productInfo = products.find(
            (product) => String(product._id) === String(items) || String(product.id) === String(items)
          );
          
          if (productInfo) {
            
            tempOrderData.push({
              ...productInfo,
              size: item,
              quantity: cartItems[items][item],
              status: 'Ready to ship',
              paymentMethod: 'COD',
              date: new Date().toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })
            });
          }
        }
      }
    }
    setOrderData(tempOrderData);
  }, [cartItems, products]);

  return (
    <div className='border-t pt-16 px-4 max-w-7xl mx-auto min-h-[70vh]'>
      
     
      <div className='text-2xl mb-6'>
        <Title title1={'MY '} title2={'ORDERS'} />
      </div>

     
      <div className='flex flex-col gap-4'>
        {orderData.length === 0 ? (
          <p className='text-center text-gray-500 py-16 text-sm uppercase tracking-widest'>
            You haven't placed any orders yet.
          </p>
        ) : (
          orderData.map((item, index) => (
            <div 
              key={index} 
              className='py-6 border-t border-b border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-gray-700'
            >
              
            
              <div className='flex items-start gap-6 text-sm'>
                <img 
                  className='w-16 sm:w-20 rounded border object-cover bg-gray-50' 
                  src={item.image?.[0] || item.image} 
                  alt={item.name} 
                />
                <div className='flex flex-col gap-1'>
                  <p className='sm:text-base font-medium text-gray-900'>{item.name}</p>
                  
                 
                  <div className='flex items-center gap-3 mt-1 text-xs text-gray-500 font-medium'>
                    <p>{currency}{item.price}</p>
                    <span>|</span>
                    <p>Quantity: {item.quantity}</p>
                    <span>|</span>
                    <p className='px-1.5 py-0.5 border bg-slate-50 rounded-sm font-mono text-[11px]'>{item.size}</p>
                  </div>
                  
                  <p className='mt-2 text-xs text-gray-400'>
                    Date: <span className='text-gray-600 font-medium'>{item.date}</span>
                  </p>
                  <p className='text-xs text-gray-400'>
                    Payment: <span className='text-gray-600 font-medium'>{item.paymentMethod}</span>
                  </p>
                </div>
              </div>

              
              <div className='md:w-1/3 flex items-center justify-between md:justify-center gap-2 text-sm'>
                <div className='flex items-center gap-2.5'>
                  {/* Small animated pulse green indicator dot */}
                  <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse'></span>
                  <p className='text-sm text-gray-700 font-medium'>{item.status}</p>
                </div>
              </div>

           
              <div className='flex justify-between md:justify-end gap-4 items-center'>
                <button 
                  onClick={() => alert(`Tracking updates: Your package is currently "${item.status.toLowerCase()}".`)}
                  className='border border-gray-300 px-4 py-2 text-xs font-semibold rounded-sm text-gray-700 bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors tracking-wide'
                >
                  Track Order
                </button>
              </div>

            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default Orders;