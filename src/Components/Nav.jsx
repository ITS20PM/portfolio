import React from 'react';

const Nav = () => {
  return <div className="flex justify-between items-center w-full h-20 
  px-4  bg-gradient-to-r from-green-400 to-blue-900 fixed">
    <div>
      <h1 className='text-5xl text-zinc-600'>Patrick Website</h1>
    </div>

    <ul className="flex">
      <li className="px-6 text-white text-xl cursor-pointer 
      hover:underline duration-150">Home</li>
      <li className="px-6 text-white text-xl cursor-pointer 
      hover:underline duration-150">About</li>
      <li className="px-6 text-white text-xl cursor-pointer 
      hover:underline duration-150">Projects</li>
    </ul>
  </div>
}

export default Nav