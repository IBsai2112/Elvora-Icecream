import React from 'react'
import CoverVideo from '../components/coverVideo';
import Navbar from '../components/navbar';

const home = () => {
  return (
    <div>
        <div className='h-screen w-screen bg-red-500'>
            <CoverVideo />
            <Navbar />
        </div>
    </div>
  )
}

export default home;