import React from 'react'

const Title = ({ title1, title2 }) => {
  return (
  
    <div className="text-center max-w-3xl mx-auto my-10 px-4 sm:px-6">
      <h1 className="font-extrabold tracking-tight text-inherit">
        <span className="inline-block">{title1}</span>
        <span className="inline-block text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-500 ml-2">
           {title2}
        </span>
      </h1>
      <hr className="my-3 border-gray-500" />
    </div>
  )
}

export default Title