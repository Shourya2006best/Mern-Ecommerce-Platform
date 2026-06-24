import React from 'react'

const NewsletterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    alert("Thank you for subscribing!");
  }

  return (
    <div className='text-center py-16 px-4 max-w-4xl mx-auto'>
      {/* Main Heading */}
      <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 tracking-tight'>
        Subscribe now & get 20% off
      </h2>
      
      
      <p className='text-gray-400 mt-3 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center mx-auto my-6 border border-gray-200 rounded-sm overflow-hidden focus-within:border-gray-400 transition-colors duration-200 shadow-sm'>
        <input 
          type="email" 
          placeholder="Enter your email" 
          required
          className='w-full sm:flex-1 outline-none px-4 py-3 text-sm text-gray-700 placeholder-gray-400'
        />
        <button 
          type="submit" 
          className='bg-black text-white text-xs font-semibold uppercase tracking-wider px-8 py-4 active:bg-gray-800 transition-colors duration-150'
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  )
}

export default NewsletterBox;