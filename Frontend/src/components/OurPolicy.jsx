import React from 'react'
import { assets } from '../assets/Assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 px-4 max-w-7xl mx-auto'>
      
      
      <div className='flex flex-col items-center'>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="Exchange Icon" />
        <p className='font-semibold text-gray-800'>Easy Exchange Policy</p>
        <p className='text-gray-400 text-sm mt-1'>We offer hassle free exchange policy</p>
      </div>

      
      <div className='flex flex-col items-center'>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="Quality Icon" />
        <p className='font-semibold text-gray-800'>7 Days Return Policy</p>
        <p className='text-gray-400 text-sm mt-1'>We provide a 7-day free return policy</p>
      </div>

      
      <div className='flex flex-col items-center'>
        
        <img src={assets.support_icon || assets.exchange_icon} className='w-12 m-auto mb-5' alt="Support Icon" />
        <p className='font-semibold text-gray-800'>Best Customer Support</p>
        <p className='text-gray-400 text-sm mt-1'>We offer 24/7 dedicated customer care support</p>
      </div>

    </div>
  )
}

export default OurPolicy;