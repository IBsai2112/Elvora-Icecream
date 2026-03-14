import React from 'react'
import CoverVideo from '../components/coverVideo';
import Navbar from '../components/navbar';
import Trending from '../sections/Trending';
import Trending2 from '../sections/Trending2';
import Footer from '../sections/Footer';

const Home = () => {
  return (
    <div className='bg-[#b7b2ad]'>
        <Navbar />
        <CoverVideo />
        <Trending />
        <Trending2 />
        <Footer />
    </div>
  )
}

export default Home;