import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import Home from './sections/Home'
import Loader from "./components/Loader"
import CartPage from './sections/cart'
import Navbar from './components/navbar'
import Flavors from './sections/flavors'
import About from './sections/About'
import Account from './sections/account'

const App = () => {
  const [appLoading, setAppLoading] = useState(true)
  const [cart, setCart] = useState([]) 
  const location = useLocation()

  const addToCart = (product) => {
    setCart((prev) => [...prev, { ...product, cartId: Date.now() }]);
  };

  const removeFromCart = (cartId) => {
    setCart((prev) => prev.filter(item => item.cartId !== cartId));
  };

  useEffect(() => {
    const timer = setTimeout(() => setAppLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-[#b7b2ad] min-h-screen">
      <AnimatePresence mode="wait">
        {appLoading && <Loader key="loader" />}
      </AnimatePresence>

      {!appLoading && (
        <>
          <Navbar cartCount={cart.length} />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Home />} />
              <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
              <Route path="/flavors" element={<Flavors addToCart={addToCart} />} />
              <Route path="/about" element={<About />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </div>
  )
}

export default App