// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import logo from '../../public/logo.png';
import { FaTimes, FaUserCheck } from 'react-icons/fa';
import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { title: 'Jewelry & Accessories', path: '/' },
    { title: 'Clothing And Shoes', path: '/' },
    { title: 'Home & Living', path: '/' },
    { title: 'Toys & Entertainment', path: '/' },
    { title: 'Craft and Tools', path: '/' },
    { title: 'Both', path: '/' },
  ];

  return (
    <header className="max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <IoIosSearch className='text-black w-5 h-5 cursor-pointer' />
        <a href="/">
          <img src={logo} alt="" />
        </a>

        <div className="text-lg text-black sm:flex items-center gap-4 hidden">
          <a href='/' className='flex items-center gap-2'><FaUserCheck />Account</a>
          <a href='/' className='flex items-center gap-2'><GiShoppingCart />Shopping</a>
        </div>

        <div className='sm:hidden'>
        <button onClick={toggleMenu} className="focus:outline-none">
          {isMenuOpen ? <FaTimes className='w-5 h-5 text-black' /> : <FaBars className='w-5 h-5 text-black' />}
        </button>
      </div>

      </nav>
      <hr />

      <div className='pt-4'>
        <ul className='lg:flex items-center justify-between text-black hidden'>
            {
                navItems.map(({title}) =>(
                    <li key={title} className='hover:text-orange-600'>
                       <Link to='/'>{title}</Link> 

                    </li>
                ))
            }
            

        </ul>

      </div>


      
      
{/*
<div>
  <ul className={'bg-black text-white px-4 py-2 rounded ${isMenuOpen ? "": "hidden"}'}>
    {
      navItems.map(({title}) => (
        <li key={title} className='hover:text-orange-800 my-3 cursor-pointer'>
          <Link to='/'>{title}</Link>
        </li>
      ))
    }
  </ul>
</div>
*/}





      </header>
      
          
  );
};



export default Navbar;
