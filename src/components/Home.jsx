import React from 'react'
import './home.css'

const Home = () => {
  return (
    <>
      <div className='w-full h-full flex flex-col homediv' id='homediv'>
        {/* <NavBar /> */}
        <div className='w-full h-[90vh] flex flex-col justify-center items-center gap-y-12'>
          <h1 className='text-4xl font-bold'>Landing page</h1>
          <a href="/shopping" className='border border-white rounded-md p-4 hover:bg-white hover:text-black transition-all ease-in-out'>Getting started</a>
        </div>
      </div>
    </>
  )
}

export default Home
