import React, { useState, useEffect } from 'react';
import { assets } from '../assets/Assets';

const heroData = [
  {
    id: 1,
    title: "Summer Collection 2026",
    subtitle: "Up to 50% off on all trending styles.",
    btnText: "Shop Now",
    btnLink: "/collection",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: 2,
    title: "Elevate Your Look",
    subtitle: "Discover premium, classy clothes for every occasion.",
    btnText: "New Arrivals",
    btnLink: "/collection",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: 3,
    title: "Trendy Fashion",
    subtitle: "baggy jeans and baggy t-shirt .",
    btnText: "Explore More",
    btnLink: "/collection",
    image: assets.hero2
  }
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <section className="relative w-full h-[80vh] overflow-hidden bg-black z-0">
      {heroData.map((slide, index) => {
        const isActive = index === activeIndex;
        
        return (
          <div 
            key={slide.id}
            className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            
            <div className="text-center text-white p-6 md:p-8 bg-black/40 backdrop-blur-sm rounded-lg max-w-xl mx-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
                {slide.title}
              </h1>
              <p className="text-base md:text-lg mb-6 text-gray-200">
                {slide.subtitle}
              </p>
              <a
                href={slide.btnLink}
                className="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors duration-300"
              >
                {slide.btnText}
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Hero;