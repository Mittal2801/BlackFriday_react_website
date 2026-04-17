import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";

const Nav = () => {

  const location = useLocation();

  const isDarkNav =
    location.pathname.includes("/more") ||
    location.pathname.includes("/cat") ||
    location.pathname.includes("/homecat");

  return (
    <div
      className={`py-3 transition-all duration-500 ${
        isDarkNav
          ? "bg-black"
          : "bg-[url(https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/bg-01-b.jpg)] bg-cover"
      }` }
    >
      <div className='flex px-20'>
        <div>
          <img
            src="https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/logo-me.svg"
            alt=""
          />
        </div>

        <div className='grid grid-cols-4 ps-120 text-white font-bold'>
          <Link to='/' className='px-7'>HOME</Link>
          <Link to='/shop' className='px-7'>SHOP</Link>
          <Link to='/about' className='px-7'>ABOUT</Link>
          <Link to='/contact' className='px-7'>CONTACT</Link>
        </div>

        <Link to='/cart'>
          <div className='text-white ms-100 text-2xl'>
            <CiShoppingCart />
          </div>
        </Link> 
      </div>
    </div>
  )
}

export default Nav