import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/Shopcontext';
import { assets } from '../assets/Assets';

import RelatedProducts from '../components/RelatedProducts'; 

const Product = () => {
  const { productid } = useParams();
  const { products, currency, addToCart, token, navigate } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [activeTab, setActiveTab] = useState('description');


  const fetchProductData = async () => {
    if (!products || products.length === 0) return;


    const foundProduct = products.find(
      (item) =>  String(item._id) === String(productid)
    );

    if (foundProduct) {
      setProductData(foundProduct);
   
      if (foundProduct.image && foundProduct.image.length > 0) {
        setImage(foundProduct.image[0]);
      } else {
        setImage(foundProduct.image || '');
      }
    } else {
      console.error(`Product with ID ${productid} not found in the products array.`);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productid, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 px-4 max-w-7xl mx-auto'>
      
      
      <div className='flex flex-col sm:flex-row gap-12'>
        
       
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
        
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-start sm:w-[18.7%] w-full gap-2 scrollbar-none'>
            {productData.image.map((item, index) => (
              <img 
                onClick={() => setImage(item)} 
                src={item} 
                key={index} 
                className={`w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer border rounded p-1 transition-all ${image === item ? 'border-orange-500 scale-[1.02]' : 'border-gray-200'}`} 
                alt="" 
              />
            ))}
          </div>
          
        
          <div className='w-full sm:w-[80%] bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center border border-gray-100'>
            <img className='w-full h-auto object-cover max-h-125' src={image} alt={productData.name} />
          </div>
        </div>

       
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2 text-gray-900'>{productData.name}</h1>
          
        
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className='w-3.5 h-3.5' />
            <img src={assets.star_icon} alt="" className='w-3.5 h-3.5' />
            <img src={assets.star_icon} alt="" className='w-3.5 h-3.5' />
            <img src={assets.star_icon} alt="" className='w-3.5 h-3.5' />
            <img src={assets.star_dull_icon} alt="" className='w-3.5 h-3.5' />
            <p className='pl-2 text-sm font-medium text-gray-500'>(122)</p>
          </div>

          <p className='mt-5 text-3xl font-medium text-gray-900'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5 leading-relaxed text-sm'>{productData.description}</p>
          
          
          <div className='flex flex-col gap-4 my-8'>
            <p className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button 
                  onClick={() => setSize(item)} 
                  key={index} 
                  className={`border py-2 px-4 text-sm font-medium transition-colors bg-gray-50 hover:bg-gray-100 rounded-sm ${item === size ? 'border-orange-500 bg-white ring-1 ring-orange-500 text-orange-600' : 'border-gray-300'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

        
          <button 
            onClick={token ? () => addToCart(productData._id, size) : () => navigate('/login')}
            className='bg-black text-white px-8 py-3 text-xs font-bold uppercase tracking-wider active:bg-gray-800 transition-colors rounded-sm hover:opacity-90'
          >
            ADD TO CART
          </button>
          
          <hr className='mt-8 sm:w-4/5 border-gray-200' />
          
       
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1.5 font-medium'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

     
      <div className='mt-20'>
        <div className='flex'>
          <b 
            onClick={() => setActiveTab('description')}
            className={`px-5 py-3 text-sm tracking-wide uppercase cursor-pointer border border-b-0 ${activeTab === 'description' ? 'border-gray-300 bg-white text-black' : 'border-transparent text-gray-400 bg-gray-50/50'}`}
          >
            Description
          </b>
          <p 
            onClick={() => setActiveTab('reviews')}
            className={`px-5 py-3 text-sm tracking-wide uppercase cursor-pointer border border-b-0 ${activeTab === 'reviews' ? 'border-gray-300 bg-white text-black font-bold' : 'border-transparent text-gray-400 bg-gray-50/50'}`}
          >
            Reviews (122)
          </p>
        </div>
        
      
        <div className='border border-gray-300 p-6 md:p-8 text-sm text-gray-500 flex flex-col gap-4 bg-white rounded-r-md rounded-b-md leading-relaxed'>
          {activeTab === 'description' ? (
            <>
              <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
              <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
            </>
          ) : (
            <div className='flex flex-col gap-4 py-2'>
              <div className='border-b pb-3 border-gray-100'>
                <div className='flex items-center gap-2 mb-1'><span className='font-semibold text-gray-800 text-xs'>John D.</span> <span className='text-[10px] text-gray-400'>★ ★ ★ ★ ★</span></div>
                <p className='text-xs'>Excellent fitting! The pure cotton material feels very comfortable for daily wear.</p>
              </div>
              <div>
                <div className='flex items-center gap-2 mb-1'><span className='font-semibold text-gray-800 text-xs'>Sarah M.</span> <span className='text-[10px] text-gray-400'>★ ★ ★ ★ ☆</span></div>
                <p className='text-xs'>Great style and presentation. Delivery took an extra day but product is top notch.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : (
    <div className='min-h-[60vh] flex items-center justify-center text-gray-400 text-sm tracking-widest uppercase animate-pulse'>
      Loading Product...
    </div>
  );
};

export default Product;
