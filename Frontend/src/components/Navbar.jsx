import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import { assets } from '../assets/Assets'
import { useState, useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const { setShowSearch ,showSearch, getCartCount} = useContext(ShopContext);

  return (
    
    <div className='bg-white shadow-md py-4 px-6 flex items-center justify-between relative z-50'>
        <div className='text-2xl font-bold text-gray-800'>E-Commerce</div>
      <nav>
        <ul className="space-x-4 hidden sm:flex">
          <li>
            <NavLink to="/" className="text-gray-600 hover:text-blue-500">
              <span>HOME</span>
              <hr className='border-t-2 border-blue-500 mt-1 hidden' />
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-gray-600 hover:text-blue-500">
              <span>CONTACT</span>
              <hr className='border-t-2 border-blue-500 mt-1 hidden' />
            </NavLink>
          </li>
          <li>
            <NavLink to="/collection" className="text-gray-600 hover:text-blue-500">
              <span>COLLECTION</span>
              <hr className='border-t-2 border-blue-500 mt-1 hidden' />
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-gray-600 hover:text-blue-500">
              <span>ABOUT US</span>
              <hr className='border-t-2 border-blue-500 mt-1 hidden' />
            </NavLink>
          </li>
        </ul>
      </nav>
      
      <div className='flex items-center space-x-4'>
        <img src={assets.search_icon} alt="Search Icon" className='w-6 h-6 cursor-pointer' onClick={() => setShowSearch(!showSearch)} />
        
    
        <div className='relative' onClick={() => setShowDropdown(!showDropdown)}>
          <Link to={'/login'}>  <img src={assets.user_icon} alt="User Icon" className='w-6 h-6 cursor-pointer' /></Link>
          
          
          {showDropdown && (
            <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded shadow-lg py-2 z-50'>
              <NavLink to="/profile" className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>My Profile</NavLink>
              <NavLink to="/orders" className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>My Orders</NavLink>
              <NavLink to="/logout" className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>Logout</NavLink>
            </div>
          )}
        </div>

        <div>
          <NavLink to="/cart" className="text-gray-600 relative hover:text-blue-500">
            <img src={assets.cart_icon} alt="Cart Icon" className='w-6 h-6' />
            <span className='absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
              {getCartCount()}
            </span>
          </NavLink>
        </div>
        
    
        <div className='sm:hidden cursor-pointer relative' onClick={() => setShowMenu(!showMenu)}>
          <img src={assets.menu_icon} alt="Menu Icon" className='w-6 h-6' />
          
          
          {showMenu && (
            <div className='absolute top-10 right-0 w-64 bg-white shadow-xl border border-gray-100 rounded-lg py-4 px-6 z-50' onClick={(e) => e.stopPropagation()}>
              <div onClick={() => setShowMenu(false)} className='flex items-center mb-4 pb-2 border-b border-gray-100'>
                <img src={assets.back_icon} alt="Back Icon" className='w-5 h-5 cursor-pointer' />
                <span className='text-sm font-bold text-gray-800 ml-2'>Close Menu</span>
              </div>
              <NavLink onClick={() => setShowMenu(false)} to='/' className='block text-gray-600 hover:text-blue-500 py-2 font-medium'>HOME</NavLink>
              <NavLink onClick={() => setShowMenu(false)} to='/contact' className='block text-gray-600 hover:text-blue-500 py-2 font-medium'>CONTACT</NavLink>
              <NavLink onClick={() => setShowMenu(false)} to='/collection' className='block text-gray-600 hover:text-blue-500 py-2 font-medium'>COLLECTION</NavLink>
              <NavLink onClick={() => setShowMenu(false)} to='/about' className='block text-gray-600 hover:text-blue-500 py-2 font-medium'>ABOUT</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar;