import React from 'react'
import Products from './Products'
import './home.css'

const Shopping = () => {
  return (
  <>
    <div className='w-full h-[90vh] flex flex-wrap justify-between p-4 gap-y-12 homediv overflow-y-scroll'>
      <Products />
    </div>
  </>
  )
}

export default Shopping
