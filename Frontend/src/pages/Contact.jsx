import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div className='px-4 max-w-7xl mx-auto pt-10 border-t border-gray-100'>
      
     
      <div className='text-2xl text-center pt-8 border-t border-gray-100'>
        <Title title1={'CONTACT '} title2={'US'} />
      </div>

  
      <div className='my-10 flex flex-col justify-center md:flex-row gap-12 sm:gap-16 mb-28 items-center'>
        
     
        <div className='w-full md:max-w-120 overflow-hidden rounded shadow-sm border border-gray-100'>
          <img 
            className='w-full h-auto object-cover' 
            src={assets.contact_img || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'} 
            alt="Corporate Office Environment" 
          />
        </div>

      
        <div className='flex flex-col justify-center items-start gap-6 text-sm text-gray-600 leading-relaxed'>
          
        
          <b className='text-gray-800 font-bold uppercase tracking-wider text-base'>Our Store</b>
          <p className='text-gray-500'>
            54709 Willms Station <br /> 
            Suite 350, Washington, USA
          </p>
          <p className='text-gray-500'>
            Tel: <span className='text-gray-700 font-medium'>(415) 555-0132</span> <br />
            Email: <span className='text-gray-700 font-medium'>admin@forever.com</span>
          </p>

       
          <b className='text-gray-800 font-bold uppercase tracking-wider text-base'>Careers at Forever</b>
          <p className='text-gray-500'>
            Learn more about our teams and job openings worldwide.
          </p>
          
     
          <button 
            onClick={() => alert("Our hiring portal is clearing updates. Please check back shortly!")}
            className='border border-black px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-sm text-black bg-white hover:bg-black hover:text-white active:bg-gray-900 transition-all duration-300'
          >
            Explore Jobs
          </button>

        </div>

      </div>

      
      <div className='my-10'>
        <NewsletterBox />
      </div>

    </div>
  );
};

export default Contact;