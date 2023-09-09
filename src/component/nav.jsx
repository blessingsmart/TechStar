import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import {BsArrowRight} from 'react-icons/bs'
import logo from "../assets/logo.svg";



export const Nav = () => {

  const [nav, setNav] = useState(false);
  
const links = [
  {
      id: 1,
      link: "Home",
  },
  {
      id: 2,
      link: "About Us",
  },
  {
      id: 3,
      link: "Communities",
  },
  {
      id: 4,
      link: "Event",
  },
  {
      id: 5,   
      link: "Blog",
  },
];

  return (
    <div className='flex justify-between sm:px-20 px-10 items-center w-full h-16 bg-white fixed shadow-md z-50'>
      <div className='flex items-center'>
        <img src={logo} alt="mainlogo" className="h-10 mr-2" />
      </div>
      <ul className="hidden md:flex">
            {links.map(({id, link}) => (
                <li 
                    key={id} className='px-4 cursor-pointer capitalize font-medium hover:text-blue-950 text-black hover:scale-105 duration-200'>
                    <>{link} </>
                </li>
            ))}      
      </ul>
      <button className='hidden md:flex items-center bg-blue-950 hover:bg-blue-800 rounded-lg w-fit py-2 px-6 text-white'>
        Join our community <BsArrowRight size={20} className='mx-2'/>
      </button>

      <div onClick={() => setNav(!nav)}className='cursor-pointer z-20 text-black md:hidden'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-br from-emerald-400 via-teal-400 to-blue-400">

                {links.map(({id, link}) => (
                    <li 
                        key={id} className='px-4 cursor-pointer text-white capitalize py-6 text-4xl'>
                        <>{link}</>
                    </li>
                ))} 
            </ul>
        )}
    </div>
  );
};

export default Nav;