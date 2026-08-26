import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { useSearchParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import api from '../api/api.js'; 

const Verify = () => {
    const { navigate, token, setCartItems } = useContext(ShopContext);
    const [searchParams] = useSearchParams();

    
    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');

    const verifyPayment = async () => {
        try {
            if (!token) return null;

            
            const response = await api.post(
                '/order/verifyStripe', 
                { success, orderId }
            );

            if (response.data.success) {
                setCartItems({}); 
                toast.success(response.data.message || "Payment Successful!");
                navigate('/orders'); 
            } else {
                toast.error(response.data.message || "Payment Failed.");
                navigate('/cart'); 
            }

        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || error.message);
            navigate('/cart');
        }
    };

    useEffect(() => {
        verifyPayment();
    }, [token]);

    return (
        <div className='min-h-[60vh] flex flex-col items-center justify-center gap-4 border-t pt-24'>
            {/* Spinning Status Loader Graphic Element Matrix */}
            <div className='w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin'></div>
            <p className='text-gray-500 font-medium text-sm tracking-widest uppercase animate-pulse mt-2'>
                Verifying Payment Status...
            </p>
        </div>
    );
};

export default Verify;