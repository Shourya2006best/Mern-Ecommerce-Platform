import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-600 pt-16 pb-8 px-4 mt-6 sm:px-6 lg:px-8">
      {/* Top Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        
        <div className="flex flex-col space-y-4">
          <div className="text-2xl font-bold text-gray-900 tracking-tight">E-Commerce</div>
          <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
            Discover the latest trends in modern fashion. Built to bring premium clothing right to your doorstep with unrivaled care and service.
          </p>
        </div>

        
        <div>
          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Shop</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/" className="hover:text-black transition-colors duration-200">Home</Link>
            </li>
            <li>
              <Link to="/collection" className="hover:text-black transition-colors duration-200">Collection</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-black transition-colors duration-200">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-black transition-colors duration-200">Contact Page</Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/orders" className="hover:text-black transition-colors duration-200">Track Orders</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-black transition-colors duration-200">Privacy Policy</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-black transition-colors duration-200">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-black transition-colors duration-200">Return Policy</Link>
            </li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Get In Touch</h4>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li className="flex items-center space-x-2">
              <span>📞</span>
              <span className="text-gray-600">+1-202-555-0143</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✉️</span>
              <span className="text-gray-600">support@ecommerce.com</span>
            </li>
            <li className="pt-2 text-xs text-gray-400 italic">
              Response time: Under 24 hours
            </li>
          </ul>
        </div>

      </div>

      
      <div className="max-w-7xl mx-auto pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
        <p>© 2026 E-Commerce. All rights reserved.</p>
        <div className="flex space-x-6">
          <span className="hover:text-gray-600 cursor-pointer">Visa</span>
          <span className="hover:text-gray-600 cursor-pointer">Mastercard</span>
          <span className="hover:text-gray-600 cursor-pointer">PayPal</span>
          <span className="hover:text-gray-600 cursor-pointer">Apple Pay</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer