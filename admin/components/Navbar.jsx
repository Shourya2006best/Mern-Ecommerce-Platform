import React from 'react'
import { assets } from '../src/assets/assets'
import api,{ setAccessToken } from '../api/api.js';
import { useNavigate } from 'react-router-dom';



const Navbar = ({ setToken }) => {
  const navigate = useNavigate();

   const logout = async () => {
  
          try {
  
              await api.post(
                  "/admin/logout"
              );
  
          } catch (error) {
  
              console.error(
                  "Logout error:",
                  error
              );
  
          } finally {
  
              // Clear Axios token
              setAccessToken(null);
  
              // Clear React token
              setToken("");
               
              navigate("/login");
          }
      };

  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <img className='w-[max(10%,80px)]' src={assets.logo} alt="Logo" />
        <button onClick={() => logout()} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Log Out</button>
    </div>
  )
}

export default Navbar