import React, { useState } from 'react'
import { logo } from '../assets';


const NavBar = () => {

    const [toggle, setToggle]= useState(false);

  return (
 
    <div className='flex justify-between'>
        <img src={logo} className="h-5"/>
        <div className='hidden md:flex'>
            <ul className='flex flex-row'>
                <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>
                <a href="/#home">Home</a>
                </li>
                <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>
                <a href="/#aboutme">About Me</a>
                </li>
                <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>
                <a href="/#skills">Skills</a>
                </li>
                <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>
                <a href="/#portfolio">Portfolio</a>
                    </li>
                <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>
                <a href="/#companies">Companies</a>
                    </li>
                <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>
                <a href="/#contact">Contact Us</a>
                    </li>
            </ul>
        </div>
        <div className='md:hidden lg:hidden'>
            {!toggle ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={()=>setToggle(!toggle)}
            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="w-6 h-6 cursor-pointer md:hidden">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
    </svg>:<svg onClick={()=>setToggle(!toggle)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 cursor-pointer md:hidden h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    
          }
          {toggle?
          <ul className='flex flex-col mt-8 bg-gray-300 p-2'>
          <li className="menuItem p-3 hover:scale-110 hover:z-50 transition-all duration-300 ease-in-out">
            <a href="/#home">Home</a>
          </li>
          <li className="menuItem  p-3 hover:scale-110">
            <a href="/#aboutme">About Me</a>
          </li>
          <li className="menuItem p-3 hover:scale-110">
            <a href="/#skills">Skills</a>
          </li>
          <li className='menuItem p-3 hover:scale-110'><a href="/#portfolio">Portfolio</a></li>
          <li className="menuItem p-3 hover:scale-110">
            <a href="/#companies">Companies</a>
          </li>
          <li className="menuItem p-3 hover:scale-110">
            <a href="/#contact">Contact Us</a>
          </li>

      </ul>
       : null}
        </div>
    </div>
    
  )
}

export default NavBar