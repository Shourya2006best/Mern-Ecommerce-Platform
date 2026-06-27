import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/Shopcontext.jsx'; // Fixed case sensitivity
import axios from 'axios'; // 1. Added missing axios import
import { toast } from 'react-toastify'; // 1. Added missing toast import

const Login = () => {
  const [currentState, setCurrentState] = useState('LOGIN'); 
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentState === 'SIGN UP') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success("Account created successfully!");
        } else {
          toast.error(response.data.message); // 2. Fixed variable reference from 'error' to 'response.data'
        }
        
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
        
        if (response.data.success) {
          setToken(response.data.token); // 3. Set the state token upon login
          localStorage.setItem('token', response.data.token); // 3. Saved token locally on login
          toast.success("Logged in successfully!");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  // 4. Added programmatic redirect hook once authenticated
  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <form 
      onSubmit={handleSubmit} 
      className='flex flex-col items-center w-[90%] sm:max-w-md m-auto mt-24 gap-4 text-gray-800 bg-white p-8 rounded-md shadow-sm border border-gray-100'
    >
      <div className='inline-flex items-center gap-2 mb-2 mt-4'>
        <p className='text-3xl font-serif tracking-wide text-gray-900'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {currentState === 'LOGIN' ? null : (
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Username' 
          className='w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-black text-sm transition-colors'
          required 
        />
      )}

      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email' 
        className='w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-black text-sm transition-colors'
        required
      />
      
      <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password' 
        className='w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-black text-sm transition-colors'
        required
      />

      <div className='w-full flex justify-between text-xs text-gray-500 mt-1 px-0.5'>
        <p className='cursor-pointer hover:text-black transition-colors'>Forgot your password?</p>
        
        {currentState === 'LOGIN' ? (
          <p 
            onClick={() => { setCurrentState('SIGN UP'); setPassword(''); }} 
            className='cursor-pointer hover:text-black font-semibold text-gray-700 transition-colors'
          >
            Create account
          </p>
        ) : (
          <p 
            onClick={() => { setCurrentState('LOGIN'); setPassword(''); }} 
            className='cursor-pointer hover:text-black font-semibold text-gray-700 transition-colors'
          >
            Login Here
          </p>
        )}
      </div>

      <button 
        type='submit' 
        className='bg-black text-white font-medium text-sm py-2.5 px-8 rounded mt-4 active:bg-gray-800 transition-colors w-full tracking-wider uppercase'
      >
        {currentState === 'LOGIN' ? 'Sign In' : 'Sign Up'}
      </button>

    </form>
  );
};

export default Login;