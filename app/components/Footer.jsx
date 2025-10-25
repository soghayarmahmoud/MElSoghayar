import React from 'react'
import OptimizedImage from './OptimizedImage';
import Link from 'next/link';

const currentDate = new Date();
const Footer = () => {
  return (
    <footer className='footer border-2 select-none border-t-[#76cfffa4] border-r-transparent border-l-transparent text-black'>
        <div className=' container p-12 flex justify-between align-middle '>
            <Link href='#' className='md:-ml-4' >
            <OptimizedImage 
              src='/images/logo.png' 
              height={75} 
              width={75} 
              alt='This is the logo of the website'
            />
            </Link>
            
            <p className='text-[#ddd] text-base mx-6'> <span className='font-bold text-blue-300 text-2xl'> &copy;</span> All rights reserved in { currentDate.getFullYear()  } </p>
        </div>
    </footer>
  )
}

export default Footer