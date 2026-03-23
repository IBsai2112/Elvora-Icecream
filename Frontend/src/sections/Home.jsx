import React from 'react'
import CoverVideo from '../components/coverVideo';
import Navbar from '../components/navbar';
import Trending from '../sections/Trending';
import Trending2 from '../sections/Trending2';
import Sign_in from '../Authentication/sign_in';
import Sign_up from '../Authentication/sign_up';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='bg-[#b7b2ad] w-full overflow-x-hidden relative'>
        <Navbar />
        <CoverVideo />
        <Trending />
        <Trending2 />
        <Footer />

        {/* <Sign_in />
        <Sign_up /> */}
    </div>
  )
}

export default Home;