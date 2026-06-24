import React from 'react';
import { Link } from 'react-router-dom'; 

const Productitem = ({ id, image, name, price }) => {
  return (
    
    <Link 
      to={`/product/${id}`} 
      className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
     
      <div className="aspect-square w-full overflow-hidden bg-gray-100 relative">
        <img 
          src={image && image[0] ? image[0] : image} 
          alt={name} 
          className=" transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      
      <div className="flex flex-1 flex-col p-4">
        
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-10 group-hover:text-indigo-600 transition-colors duration-200">
          {name}
        </h3>
        
        
        <div className="mt-3 flex items-center justify-between pt-2 border-t border-gray-50">
          <span className="text-base font-extrabold text-gray-900">
            ${price}
          </span>
          
          
          <span className="text-gray-400 group-hover:text-indigo-600 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Productitem;