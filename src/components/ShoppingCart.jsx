import React from 'react'
import { LuShoppingCart } from "react-icons/lu";
import { useCount } from './ProductContext';
const ShoppingCart = () => {
    const {count} = useCount();
  return (
    <div className='h-full flex items-center relative'>
        <span className='absolute -top-3 right-0 text-sm text-white'>{count}</span>
        <LuShoppingCart size={24} className='text-white hover:text-purple-500 transition-all ease-in-out' />
    </div>
  )
}

export default ShoppingCart