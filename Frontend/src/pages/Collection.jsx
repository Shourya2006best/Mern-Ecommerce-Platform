import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import Productitem from '../components/Productitem';

const Collection = () => {
  const { products , search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

 

  
  const applyFilter = () => {
    let productsCopy = products ? [...products] : [];

     if (showSearch && search) {
    productsCopy = productsCopy.filter((item) => 
      item.name.toLowerCase().includes(search.toLowerCase().trim())
    );
  }

    
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subcategory));
    }

    setFilterProducts(productsCopy);
  };

  
  const sortProducts = () => {
    let fpCopy = [...filterProducts];

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, products, search, showSearch]);

  
  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-200 px-4 max-w-7xl mx-auto">
      
      
      <div className="min-w-60">
        
        <p 
          onClick={() => setShowFilter(!showFilter)} 
          className="my-2 text-xl font-medium flex items-center gap-2 cursor-pointer sm:cursor-default uppercase tracking-wide text-gray-800"
        >
          FILTERS
          
          <span className={`h-3 sm:hidden transition-transform duration-300 ${showFilter ? 'rotate-90' : ''}`}>▶</span>
        </p>

        
        <div className={`border border-gray-300 pl-5 py-3 mt-6 rounded-md ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-bold text-gray-700 uppercase">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-medium text-gray-600">
            <p className="flex gap-2 items-center">
              <input className="w-4 h-4 accent-black cursor-pointer" type="checkbox" value="Men" onChange={toggleCategory} /> Men
            </p>
            <p className="flex gap-2 items-center">
              <input className="w-4 h-4 accent-black cursor-pointer" type="checkbox" value="Women" onChange={toggleCategory} /> Women
            </p>
            <p className="flex gap-2 items-center">
              <input className="w-4 h-4 accent-black cursor-pointer" type="checkbox" value="Kids" onChange={toggleCategory} /> Kids
            </p>
          </div>
        </div>

        
        <div className={`border border-gray-300 pl-5 py-3 my-5 rounded-md ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-bold text-gray-700 uppercase">Type</p>
          <div className="flex flex-col gap-2 text-sm font-medium text-gray-600">
            <p className="flex gap-2 items-center">
              <input className="w-4 h-4 accent-black cursor-pointer" type="checkbox" value="Topwear" onChange={toggleSubCategory} /> Topwear
            </p>
            <p className="flex gap-2 items-center">
              <input className="w-4 h-4 accent-black cursor-pointer" type="checkbox" value="Bottomwear" onChange={toggleSubCategory} /> Bottomwear
            </p>
            <p className="flex gap-2 items-center">
              <input className="w-4 h-4 accent-black cursor-pointer" type="checkbox" value="Winterwear" onChange={toggleSubCategory} /> Winterwear
            </p>
          </div>
        </div>
      </div>

    
      <div className="flex-1">
        <div className="flex justify-between items-center text-base sm:text-2xl mb-4">
          <div className='text-2xl sm:text-4xl'>
          <Title title1="ALL " title2="COLLECTIONS" />
          </div>
        
          <select 
            onChange={(e) => setSortType(e.target.value)} 
            className="border-2 border-gray-300 text-sm font-medium px-2 py-2 rounded bg-white outline-none cursor-pointer focus:border-black text-gray-700"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item) => (
            <Productitem 
              key={item._id} 
              _id={item._id} 
              name={item.name} 
              image={item.image} 
              price={item.price} 
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Collection;