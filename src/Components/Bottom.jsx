import React from 'react';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

const Bottom = () => {
  return (
    <div className='absolute bottom-0 left-0 w-full h-20 bg-gradient-to-r from-cyan-400 to-green-900'>
      <div className='flex items-center'>
        <ul className='flex'>
          <a href="https://www.linkedin.com/in/patrick-meng-5a072914b/"
          className='px-40 mt-8 text-2xl'><AiFillLinkedin /></a>

          <a href="https://github.com/ITS20PM"
          className='px-40 mt-8 text-2xl'><AiFillGithub /></a>
        </ul>
      </div>
      
    </div>
  )
}

export default Bottom