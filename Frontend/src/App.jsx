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
// Import your Authentication components
import SignIn from './Authentication/sign_in'
import SignUp from './Authentication/sign_up'

const App = () => {
  const [appLoading, setAppLoading] = useState(true)
  const [cart, setCart] = useState([]) 
  const [token, setToken] = useState("") // Global state for Database Token
  const location = useLocation()

  // Central Backend URL for easy connection
  const url = "http://localhost:4000"

  const addToCart = (product) => {
    setCart((prev) => [...prev, { ...product, cartId: Date.now() }]);
  };

  const removeFromCart = (cartId) => {
    setCart((prev) => prev.filter(item => item.cartId !== cartId));
  };

  // Check if user is already logged in on page refresh
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
    
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
          {/* Pass token/setToken so Navbar can show "Logout" if logged in */}
          <Navbar cartCount={cart.length} token={token} setToken={setToken} />
          
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Home />} />
              <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
              <Route path="/flavors" element={<Flavors addToCart={addToCart} url={url} />} />
              <Route path="/about" element={<About />} />
              <Route path="/account" element={<Account />} />
              
              {/* Added Authentication Routes */}
              <Route path="/signin" element={<SignIn url={url} setToken={setToken} />} />
              <Route path="/signup" element={<SignUp url={url} setToken={setToken} />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </div>
  )
}

export default App