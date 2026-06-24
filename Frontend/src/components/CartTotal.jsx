import React, { useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  
  const subtotal = getCartAmount();

  return (
    <div className=' w-full sm:w-2/3 bg-white p-4 m-3 rounded shadow-md'>
      <div className='text-lg font-semibold p-3 text-left w-full'>
  CART TOTALS
</div>
<hr className="border-gray-500" />

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        
     
        <div className='flex justify-between'>
          <p>Subtotal</p>
          
          <p>{currency}{subtotal.toFixed(2)}</p>
        </div>
        <hr className="border-gray-200" />

     
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency}{(subtotal === 0 ? 0 : Number(delivery_fee)).toFixed(2)}</p>
        </div>
        <hr className="border-gray-200" />

   
        <div className='flex justify-between'>
          <b>Total</b>
          <b>
            {currency}
            
            {(subtotal === 0 ? 0 : subtotal + Number(delivery_fee)).toFixed(2)}
          </b>
        </div>

      </div>
    </div>
  );
};

export default CartTotal;