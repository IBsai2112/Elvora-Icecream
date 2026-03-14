import React from 'react'
import CoverVideo from '../components/coverVideo';
import Navbar from '../components/navbar';
import Trending from '../sections/Trending'; // Ensure this is imported

const home = () => {
  return (
    // REMOVE h-screen w-screen here
    <div className="relative bg-[#b7b2ad]">
        <Navbar />
        <CoverVideo />
        {/* The page will now naturally grow to show Trending below the video */}
        <Trending />
    </div>
  )
}

export default home;