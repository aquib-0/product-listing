import React from 'react'
import { useCount } from './ProductContext';

const Products = () => {
  const {setCount} = useCount();
  const myproducts = [
    {
      name: 'Prod1',
      description: 'My first product',
      isAddedToCart: false
    },
    {
      name: 'Prod2',
      description: 'My second product',
      isAddedToCart: false
    },
    {
      name: 'Prod3',
      description: 'My third product',
      isAddedToCart: false
    },
    {
      name: 'Prod4',
      description: 'My fourth product',
      isAddedToCart: false
    },
    {
      name: 'Prod5',
      description: 'My fifth product',
      isAddedToCart: false
    },
  ];
  return (
    myproducts.map((product, key)=>(
      <div key={key} className='w-[45%] h-[30vh] rounded-md border border-white flex p-5'>
        <div className='w-[70%] flex flex-col gap-y-3'>
          <h6 className='font-bold text-2xl'>{product.name}</h6>
          <p>{product.description}</p>
        </div>
        <div className='w-[30%] flex items-center justify-center'>
          {product.isAddedToCart ? <button disabled onClick={()=> {setCount(prev => prev + 1); product.isAddedToCart = true;}} className='border border-white p-3 rounded-md hover:cursor-pointer'>Add to cart</button>: <button onClick={()=> {setCount(prev => prev + 1); product.isAddedToCart = true;}} className='border border-white p-3 rounded-md hover:cursor-pointer hover:text-purple-500 hover:border-purple-500 transition-all ease-in-out'>Add to cart</button>}
        </div>
      </div>
      ))
  )
}

export default Products