// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const companyLogo = [
  { id: 1, img: "/images/company/brand1.png" },
  { id: 2, img: "/images/company/brand2.png" },
  { id: 3, img: "/images/company/brand3.png" },
  { id: 4, img: "/images/company/brand4.png" },
  { id: 5, img: "/images/company/brand5.png" },
];

const Category = () => {
  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28'>
      <div className='flex items-center justify-around flex-wrap gap-4 py-5'>
        {companyLogo.map(({ id, img }) => (
          <div key={id}><img src={img} alt='' /></div>
        ))}
      </div>

      <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
        <p className='font-semibold uppercase text-center bg-black text-white p-2 rounded-sm inline-flex -rotate-90 md:w-24'>
          Explore New One
        </p>
        <div>
          <Link to="/">
            <img src='/images/category/image1.png' alt='' className='w-full hover:scale-105 transition-all duration-200' />
          </Link>
        </div>
        <div className='md:w-1/2'>
          <div className='grid grid-cols-2 gap-2'>
            <Link to="/">
              <img src='/images/category/image2.png' alt='' className='w-full hover:scale-105 transition-all duration-200' />
            </Link>
            <Link to="/">
              <img src='/images/category/image3.png' alt='' className='w-full hover:scale-105 transition-all duration-200' />
            </Link>
            <Link to="/">
              <img src='/images/category/image4.png' alt='' className='w-full hover:scale-105 transition-all duration-200' />
            </Link>
            <Link to="/">
              <img src='/images/category/image5.png' alt='' className='w-full hover:scale-105 transition-all duration-200' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
