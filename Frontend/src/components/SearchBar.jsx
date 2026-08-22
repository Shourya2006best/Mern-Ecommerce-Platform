import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { assets } from '../assets/Assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    
    if (location.pathname.includes('collection') && showSearch) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location, showSearch]);

  
  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center py-4 relative z-40'>
      <div className='inline-flex items-center justify-center border border-gray-300 px-5 py-2 my-2 mx-3 rounded-full w-3/4 sm:w-1/2 bg-white focus-within:border-gray-500 transition-colors'>
        <input 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          className='grow outline-none bg-inherit text-sm text-gray-700 placeholder-gray-400' 
          type="text" 
          placeholder='Search your favorite apparel...' 
        />
        <img className='w-4 h-4 text-gray-400' src={assets.search_icon} alt="Search" />
      </div>
      
      <img 
        onClick={() => setShowSearch(false)} 
        className='inline w-3 cursor-pointer ml-3 opacity-60 hover:opacity-100 transition-opacity' 
        src={assets.cross_icon || 'https://cdn-icons-png.flaticon.com/512/2997/2997911.png'} 
        alt="Close Search" 
      />
    </div>
  ) : null;
};

export default SearchBar;
