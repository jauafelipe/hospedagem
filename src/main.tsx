import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { NavBar } from './component/navbar/navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter >
      <header className='font-semibold underline flex justify-center items-center text-center bg-green-500 text-white h-10 text'>Seja Muito Bem Vindo</header>
      <NavBar />
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
