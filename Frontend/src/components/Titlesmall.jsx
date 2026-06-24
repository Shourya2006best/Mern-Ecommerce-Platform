import React from 'react'

const Titlesmall = ({title1 ,title2}) => {
  return (
    
      <div className="">
  <h1 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
    <span className="text-lg">{title1}</span>
    <span className=" text-lg block text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-500 xl:inline">
       {title2}
    </span>
  </h1>
  <hr className="my-5" />
</div>

    
  )
}

export default Titlesmall
