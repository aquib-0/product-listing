import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { CountProvider } from './components/ProductContext.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Shopping from './components/Shopping.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CountProvider>
  </StrictMode>,
  // <BrowserRouter>
  //   <Routes>
  //     <Route path='/' element={<App />} />
  //     <CountProvider>
  //       <Route path='/shopping' element={<Shopping />} />
  //     </CountProvider>
  //   </Routes>
  // </BrowserRouter>
)
