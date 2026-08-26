import React, { useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/Assets' 
import { ShopContext } from '../context/Shopcontext' 

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  
  
  const { 
    setShowSearch, 
    showSearch, 
    getCartCount, 
    token, 
    navigate, 
    logout 
  } = useContext(ShopContext);

  const handleLogout = async () => {
      logout();
      setShowDropdown(false); 
  }

  const handleProfileClick = () => {
    if (token) {
      
      setShowDropdown(!showDropdown)
    } else {
      navigate('/login')
    }
  }

  return (
    <div className='bg-white shadow-md py-4 px-6 flex items-center justify-between relative z-50'>
      
      {/* Logo Branding */}
      <div onClick={() => navigate('/')} className='text-2xl font-bold text-gray-800 cursor-pointer'>
        E-Commerce
      </div>

      {/* Desktop Navigation Links */}
      <nav>
        <ul className="space-x-4 hidden sm:flex">
          <li>
            <NavLink to="/" className="text-gray-600 hover:text-blue-500 flex flex-col items-center">
              {({ isActive }) => (
                <>
                  <span>HOME</span>
                  <hr className={`border-t-2 border-blue-500 w-4/5 mt-0.5 ${isActive ? 'block' : 'hidden'}`} />
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/collection" className="text-gray-600 hover:text-blue-500 flex flex-col items-center">
              {({ isActive }) => (
                <>
                  <span>COLLECTION</span>
                  <hr className={`border-t-2 border-blue-500 w-4/5 mt-0.5 ${isActive ? 'block' : 'hidden'}`} />
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-gray-600 hover:text-blue-500 flex flex-col items-center">
              {({ isActive }) => (
                <>
                  <span>ABOUT</span>
                  <hr className={`border-t-2 border-blue-500 w-4/5 mt-0.5 ${isActive ? 'block' : 'hidden'}`} />
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-gray-600 hover:text-blue-500 flex flex-col items-center">
              {({ isActive }) => (
                <>
                  <span>CONTACT</span>
                  <hr className={`border-t-2 border-blue-500 w-4/5 mt-0.5 ${isActive ? 'block' : 'hidden'}`} />
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
      
      {/* Right Side Icons Controller Section */}
      <div className='flex items-center space-x-4'>
        
        {/* Search Toggle Icon */}
        <img 
          src={assets.search_icon} 
          alt="Search Icon" 
          className='w-6 h-6 cursor-pointer' 
          onClick={() => { setShowSearch(!showSearch); navigate('/collection') }} 
        />
        
        {/* Profile Dropdown Logic (Fixed Wrapper Leak) */}
        <div className='relative group'>
          <img 
            src={assets.user_icon} 
            alt="User Icon" 
            className='w-6 h-6 cursor-pointer' 
            onClick={handleProfileClick} 
          />
          
          {showDropdown && (
            <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded shadow-lg py-2 z-50  group-hover:block'>
              <NavLink to="/profile" className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>My Profile</NavLink>
              <NavLink to="/orders" className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>My Orders</NavLink>
              <p onClick={handleLogout} className='block px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer'>Logout</p>
            </div>
          )}
        </div>

        {/* Cart Icon & Live Badge */}
   
        <div>
          <NavLink to={token ? '/cart' : '/login'} className="text-gray-600 relative hover:text-blue-500">
            <img src={assets.cart_icon} alt="Cart Icon" className='w-6 h-6' />
            <span className='absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
              {getCartCount()}
            </span>
          </NavLink>
        </div>
   
        
        {/* Mobile Responsive Hamburger Side Drawer */}
        <div className='sm:hidden cursor-pointer relative'>
          <img src={assets.menu_icon} alt="Menu Icon" className='w-6 h-6' onClick={() => setShowMenu(true)} />
          
          {/* Side Drawer Panel Overlay */}
          <div className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white z-50 transition-all ${showMenu ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600 h-full'>
              <div onClick={() => setShowMenu(false)} className='flex items-center gap-4 p-4 cursor-pointer border-b border-gray-100'>
                <img src={assets.dropdown_icon || assets.back_icon} alt="Back" className='w-4 h-4 rotate-185' />
                <p className='text-gray-500 text-sm'>Back</p>
              </div>
              <NavLink onClick={() => setShowMenu(false)} to='/' className='py-2 pl-6 border-b hover:bg-gray-50 font-medium'>HOME</NavLink>
              <NavLink onClick={() => setShowMenu(false)} to='/collection' className='py-2 pl-6 border-b hover:bg-gray-50 font-medium'>COLLECTION</NavLink>
              <NavLink onClick={() => setShowMenu(false)} to='/about' className='py-2 pl-6 border-b hover:bg-gray-50 font-medium'>ABOUT</NavLink>
              <NavLink onClick={() => setShowMenu(false)} to='/contact' className='py-2 pl-6 border-b hover:bg-gray-50 font-medium'>CONTACT</NavLink>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar;