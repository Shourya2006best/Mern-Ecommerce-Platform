import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Collection from './pages/Collection' 
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import About from './pages/About'



const App = () => {
  return (
   <div className='bg-gray-100 min-h-screen'>
    <ToastContainer />
    <Navbar />
    <SearchBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/collection' element={<Collection />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/contact' element={<Contact />} />
      <Route path= '/login' element={<Login />} />
      <Route path= '/placeorder' element={<PlaceOrder />} />
      <Route path= '/orders' element={<Orders />} />
      <Route path= '/about' element={<About />} />
      <Route path= '/product/:productid' element={<Product />} />
    </Routes>
    <Footer />
   </div>
  )
}

export default App
