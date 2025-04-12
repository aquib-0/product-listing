import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ShoppingCart from './components/ShoppingCart'
import Shopping from './components/Shopping'
import ShoppingCartPage from './components/ShoppingCartPage'

function App() {
  return (
    <>
    <div className='w-[100vw] h-[100vh] flex flex-col overflow-y-scroll'>
      <div className='w-full h-[10vh] border border-white rounded-md flex justify-between px-2'>
        <div className='h-full flex items-center'>
          <span className='text-white font-extrabold text-2xl'>The Indian Store!</span>
        </div>
        <div className='h-full flex items-center gap-x-6'>
          <Link to='/' className='hover:text-purple-500 transition-all ease-in-out'>Home</Link>
          <Link to='/shopping' className='hover:text-purple-500 transition-all ease-in-out'>Shopping</Link>
          <Link to='/cart'><ShoppingCart /></Link>
        </div>
      </div>
      <div className='w-full h-[90vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shopping' element={<Shopping />} />
          <Route path='/cart' element={<ShoppingCartPage />} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
