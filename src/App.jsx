import React from 'react'
import Bg_Img from './components/Bg_Img'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Shop from './components/Shop'
import SingleProduct from './components/SingleProduct'
import CategoryProduct from './components/CategoryProduct'
import CategorySinglePage from './components/CategorySinglePage'
import AddToCart from './components/AddToCart'
import { UserProvider } from './context/UserContext'
import About from './components/About'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    <UserProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/shop' element={<Shop/>} />
            <Route path='/more/:id/:category' element={<SingleProduct/>} />
            <Route path='/cat/:category' element={<CategoryProduct />} />
            <Route path='/homecat/:id/:category' element={<CategorySinglePage />} />
            <Route path='/cart' element={<AddToCart />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
       
      </BrowserRouter>
      <Toaster>
        
      </Toaster>
      </UserProvider>
    </>
  )
}

export default App
