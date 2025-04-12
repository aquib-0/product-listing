import React from 'react'
import "./navbar.css"
import ShoppingCart from './ShoppingCart';

const NavBar = () => {
  return (
    <div className='w-full h-[10vh] border border-white rounded-md flex justify-between px-2'>
      <div className='h-full flex items-center'>
        <span className='text-white font-extrabold text-2xl'>The Indian Store!</span>
      </div>

      {/* <div className='h-full flex items-center'>
        <LuShoppingCart size={24} className='text-white' />
      </div> */}
      <ShoppingCart />
    </div>
  )
}

export default NavBar
