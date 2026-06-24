import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';
import Titlesmall from '../components/Titlesmall';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { navigate } = useContext(ShopContext); 
  const [method, setMethod] = useState('cod'); 


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
   
    alert(`Order placed successfully using ${method.toUpperCase()}!`);
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-12 pt-14 min-h-[80vh] border-t px-4 max-w-7xl mx-auto'>
      
     
      <div className='flex flex-col bg-white p-3 m-3 gap-4 w-full sm:w-120'>
        <div className='text-xl sm:text-2xl my-3'>
          <Titlesmall title1={'DELIVERY '} title2={'INFORMATION'} />
        </div>
        
        
        <div className='flex gap-3'>
          <input required name='firstName' onChange={onChangeHandler} value={formData.firstName} className='border border-gray-300 rounded py-2 px-3.5 w-full outline-none focus:border-black text-sm' type="text" placeholder='First name' />
          <input required name='lastName' onChange={onChangeHandler} value={formData.lastName} className='border border-gray-300 rounded py-2 px-3.5 w-full outline-none focus:border-black text-sm' type="text" placeholder='Last name' />
        </div>

      
        <input required name='email' onChange={onChangeHandler} value={formData.email} className='border border-gray-300 rounded py-2 px-3.5 w-full outline-none focus:border-black text-sm' type="email" placeholder='Email address' />
        
    
        <input required name='street' onChange={onChangeHandler} value={formData.street} className='border border-gray-300 rounded py-2 px-3.5 w-full outline-none focus:border-black text-sm' type="text" placeholder='Street' />
        
  
        <div className='flex gap-3'>
          <input required name='city' onChange={onChangeHandler} value={formData.city} className='border border-gray-300 rounded py-2 px-3.5 w-full outline-none focus:border-black text-sm' type="text" placeholder='City' />
          <input required name='state' onChange={onChangeHandler} value={formData.state} className='border border-gray-300 rounded py-2 px-3.5 w-full outline-none focus:border-black text-sm' type="text" placeholder='State' />
        </div>

        
        <div className='flex gap-3'>
          <input required name='zipcode' onChange={onChangeHandler} value={formData.zipcode} className='border border-gray-300 rounded py-2 px-3.5 w-full outline-none focus:border-black text-sm' type="number" placeholder='Zipcode' />
          <input required name='country' onChange={onChangeHandler} value={formData.country} className='border border-gray-300 rounded py-2 px-3.5 w-full outline-none focus:border-black text-sm' type="text" placeholder='Country' />
        </div>

       
        <input required name='phone' onChange={onChangeHandler} value={formData.phone} className='border border-gray-300 rounded py-2 px-3.5 w-full outline-none focus:border-black text-sm' type="tel" placeholder='Phone Number' />
      </div>

     
      <div className='mt-1 flex-1 sm:max-w-112.5'>
        
     
        <div className='mt-4'>
          <CartTotal />
        </div>

    
        <div className=' bg-white p-3 m-3'>
          <div className='my-3'>
            <Titlesmall title1={'PAYMENT '} title2={'METHOD'} />
          </div>
          
       
          <div className='flex gap-3 flex-col lg:flex-row flex-wrap'>
            
           
            <div onClick={() => setMethod('stripe')} className={`flex items-center gap-3 border p-2 px-4 rounded-sm cursor-pointer hover:bg-gray-50 transition-colors ${method === 'stripe' ? 'border-green-500 bg-green-50/20' : 'border-gray-200'}`}>
              <span className={`min-w-4 h-4 border rounded-full flex items-center justify-center ${method === 'stripe' ? 'bg-green-500' : ''}`}>
                {method === 'stripe' && <span className='w-1.5 h-1.5 bg-white rounded-full'></span>}
              </span>
              <img className='h-5 mx-4' src={assets.stripe_logo || 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg'} alt="Stripe" />
            </div>

            
            <div onClick={() => setMethod('razorpay')} className={`flex items-center gap-3 border p-2 px-4 rounded-sm cursor-pointer hover:bg-gray-50 transition-colors ${method === 'razorpay' ? 'border-green-500 bg-green-50/20' : 'border-gray-200'}`}>
              <span className={`min-w-4 h-4 border rounded-full flex items-center justify-center ${method === 'razorpay' ? 'bg-green-500' : ''}`}>
                {method === 'razorpay' && <span className='w-1.5 h-1.5 bg-white rounded-full'></span>}
              </span>
              <img className='h-5 mx-4' src={assets.razorpay_logo || 'https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg'} alt="Razorpay" />
            </div>

          
            <div onClick={() => setMethod('cod')} className={`flex items-center gap-3 border p-2 px-4 rounded-sm cursor-pointer hover:bg-gray-50 transition-colors ${method === 'cod' ? 'border-green-500 bg-green-50/20' : 'border-gray-200'}`}>
              <span className={`min-w-4 h-4 border rounded-full flex items-center justify-center ${method === 'cod' ? 'bg-green-500' : ''}`}>
                {method === 'cod' && <span className='w-1.5 h-1.5 bg-white rounded-full'></span>}
              </span>
              <p className='text-gray-500 text-xs font-bold uppercase tracking-wider mx-4'>Cash on Delivery</p>
            </div>

          </div>

       
          <div className='w-full text-end mt-8'>
            <button type='submit' onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-xs font-bold uppercase tracking-widest active:bg-gray-800 transition-colors rounded-sm hover:opacity-90'>
              Place Order
            </button>
          </div>

        </div>

      </div>

    </form>
  );
};

export default PlaceOrder;