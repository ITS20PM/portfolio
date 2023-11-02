import React from 'react';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import { Link } from "react-scroll";

const links = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "about",
  },
  {
    id: 3,
    link: "projects",
  },
];

const Nav = () => {
  return (
    <div  className="flex justify-between items-center w-full h-20 
    px-4  bg-gradient-to-r from-green-400 to-blue-900 fixed">
      <div>
        <h1 className='text-5xl text-zinc-600'>Patrick Website</h1>
      </div>

      
      <ul className="flex">
        {links.map(({id, link}) => 
          <li className="px-6 text-white text-xl cursor-pointer 
          hover:underline duration-150">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        )}
      </ul>


    </div>
  )
}

export default Nav