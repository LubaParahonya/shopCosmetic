import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigate from './component/Navigate/Navigate'
import AboutAs from './component/AboutAs/AboutAs'
import ContactUs from './component/ContactUs/ContactUs'
import Home from './component/Home/Home'
import Products from './component/Products/Products'
import Profile from './component/Profile/Profile'
import Menu from './component/Menu/Menu'
import Cart from './component/Cart/Cart'
import Layout from './component/Layout/Layout'
import Main from './component/MainPage/Main'
import { Routes, Route } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { getProducts } from "./features/products/productsSlice";


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProducts())
  }, [dispatch])
  

  return (
    <>
    <Routes>
     <Route path='/' element={<Layout />} >
      <Route path='/' element={<Main />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<AboutAs />} />
      <Route path='/products' element={<Products />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/cart' element={<Cart />} />
      </Route>
    </Routes>

   
    </>
  )
}

export default App
