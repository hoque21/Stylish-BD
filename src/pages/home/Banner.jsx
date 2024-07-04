// eslint-disable-next-line no-unused-vars
import React from 'react'
import BannerImg from '/banner.png'
import { FaBagShopping } from "react-icons/fa6";

const Banner = () => {
  return (
    
    
    <div className='bg-primaryBG py-12 xl:px-28 px-4'>
        <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14'>
        <div className='md:w-1/2'>
                <img src={BannerImg} alt=' ' />
                </div>
            <div className='md:w-1/2'>
                <h1 className='text-5xl font-light mb-5'>Collections</h1>
                <p className='text-xl mb-7'>Buy Our product</p>
                <button className='bg-black hover:bg-gray-400 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2'><FaBagShopping className='inline-flex '/>Shop Now</button>
                </div>
                
                
                
         </div>
      </div>
      
    
  )
}

export default Banner
