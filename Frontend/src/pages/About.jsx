import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/Assets';
import NewsletterBox from '../components/NewsletterBox'; 

const About = () => {
  return (
    <div className='px-4 max-w-7xl mx-auto pt-10 border-t border-gray-100'>
      
    
      <div className='text-2xl text-center pt-8 border-t border-gray-100'>
        <Title title1={'ABOUT '} title2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 items-center'>
        {/* Left Side: Brand Image Visual */}
        <div className='w-full md:w-[45%] max-h-125 overflow-hidden rounded shadow-sm border border-gray-100'>
          <img 
            className='w-full h-auto object-cover' 
            src={assets.about_img || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'} 
            alt="About Us Visual Storefront" 
          />
        </div>

     
        <div className='flex-1 flex flex-col justify-center gap-6 text-gray-600 text-sm sm:text-base leading-relaxed'>
          <p>
            Forever was born out of a passion for innovation and a relentless desire to revolutionize the modern digital shopping landscape. Our journey began with a simple yet powerful realization: shopping for your favorite trends should be an effortless, inspiring, and completely transparent experience.
          </p>
          <p>
            Since our inception, we have painstakingly curated an extensive collection of premium clothing and lifestyle essentials tailored to celebrate your unique individuality. From meticulous material sourcing to clean logistics handling, we ensure that premium craftsmanship remains accessible right at your doorstep.
          </p>
          
         
          <b className='text-gray-900 font-bold uppercase tracking-wide text-xs mt-2 border-l-2 border-black pl-3'>
            Our Mission
          </b>
          <p>
            Our core mission is to empower global shoppers with choices that inspire confidence. We don't just sell apparel; we construct seamless digital ecosystems driven by technological security, design excellence, and an absolute obsession with unmatched consumer satisfaction.
          </p>
        </div>
      </div>

     
      <div className='text-xl py-4 mt-16 border-t border-gray-100'>
        <Title title1={'WHY '} title2={'CHOOSE US'} />
      </div>

     
      <div className='grid grid-cols-1 md:grid-cols-3 text-sm mb-20 border border-gray-200 rounded overflow-hidden shadow-sm divide-y md:divide-y-0 md:divide-x divide-gray-200'>
        
       
        <div className='px-10 md:px-14 py-16 flex flex-col gap-5 bg-white hover:bg-gray-50/50 transition-colors'>
          <b className='text-gray-900 font-bold uppercase tracking-wider text-xs'>Quality Assurance:</b>
          <p className='text-gray-600 leading-relaxed text-xs sm:text-sm'>
            We meticulously select, inspect, and evaluate every single product line against uncompromising manufacturing metrics to guarantee that your wardrobe investments endure beautiful daily wear.
          </p>
        </div>

        <div className='px-10 md:px-14 py-16 flex flex-col gap-5 bg-white hover:bg-gray-50/50 transition-colors'>
          <b className='text-gray-900 font-bold uppercase tracking-wider text-xs'>Convenience:</b>
          <p className='text-gray-600 leading-relaxed text-xs sm:text-sm'>
            With our smooth responsive interface models, intuitive dynamic checkout structures, and optimized local carrier routing platforms, upgrading your seasonal rotation is a click away.
          </p>
        </div>

     
        <div className='px-10 md:px-14 py-16 flex flex-col gap-5 bg-white hover:bg-gray-50/50 transition-colors'>
          <b className='text-gray-900 font-bold uppercase tracking-wider text-xs'>Exceptional Customer Service:</b>
          <p className='text-gray-600 leading-relaxed text-xs sm:text-sm'>
            Our dedicated client lifecycle support teams operate around the clock with empathetic, technical care to handle questions, processing routines, and dynamic exchange cycles.
          </p>
        </div>

      </div>

     
      <div className='my-10'>
        <NewsletterBox />
      </div>

    </div>
  );
};

export default About;