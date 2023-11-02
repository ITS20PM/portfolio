import React from 'react'

const Nav = () => {
  return (
    <header className="bg-gradient-to-r from-green-400 to-blue-900">
        <div className="shadow-md w-full fixed top-0 left-0">
        <div className='md:flex  py-4'>
            <h1>Nav</h1>
        </div>

        <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Resume</li>
        </ul>
        </div>
    </header>
    
    
  )
}

export default Nav