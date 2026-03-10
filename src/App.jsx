import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import Home from './sections/home'
import Loader from "./components/Loader"
import CartPage from './sections/cart'
import Navbar from './components/navbar'

const App = () => {

  const [appLoading, setAppLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {appLoading && <Loader />}
      </AnimatePresence>

      {!appLoading && (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      )}
    </>
  )
}

export default App