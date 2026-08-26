import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';
import Title from '../components/Title';
import { toast } from 'react-toastify';
import api from '../api/api.js'; 

const Orders = () => {
  const { token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await api.post('order/userorders', {});
      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse()); // Show newest orders first
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className='border-t pt-16 max-w-7xl mx-auto px-4 min-h-[70vh]'>
      <div className='text-2xl'>
        <Title title1={'MY '} title2={'ORDERS'} />
      </div>

      <div className='mt-8'>
        {orderData.length === 0 ? (
          <p className='text-center text-gray-500 py-12 text-sm uppercase tracking-widest'>You have placed no orders yet</p>
        ) : (
          orderData.map((item, index) => (
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm'>
              <div className='flex items-start gap-6'>
                <img className='w-16 sm:w-20 rounded border object-cover' src={item.image[0]} alt="" />
                <div>
                  <p className='sm:text-base font-medium text-gray-800'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-xs text-gray-600'>
                    <p className='text-sm font-semibold text-gray-900'>{currency}{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p className='px-1.5 py-0.5 border bg-slate-50 font-mono rounded-sm'>Size: {item.size}</p>
                  </div>
                  <p className='mt-2 text-xs text-gray-500'>Date: <span className='text-gray-400 font-medium'>{new Date(item.date).toDateString()}</span></p>
                  <p className='mt-1 text-xs text-gray-500'>Payment: <span className='text-gray-400 font-medium uppercase tracking-wider'>{item.paymentMethod} ({item.payment ? "Done" : "Pending"})</span></p>
                </div>
              </div>
              
          
              <div className='md:w-1/3 flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                  <p className={`w-2 h-2 rounded-full ${item.status === 'Delivered' ? 'bg-green-500' : 'bg-orange-400'}`}></p>
                  <p className='text-xs sm:text-sm font-medium tracking-wide'>{item.status}</p>
                </div>
                <button onClick={loadOrderData} className='border border-gray-200 shadow-sm px-4 py-2 text-xs font-semibold rounded-sm hover:bg-slate-50 transition-colors'>Track Order</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;