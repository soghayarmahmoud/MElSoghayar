import React from "react";
import OptimizedImage from "./OptimizedImage";
import Link from "next/link";
function Header(){
   return(
    <header className="w-full h-20 bg-transparent backdrop-blur-2xl flex flex-row z-40  select-none p-4 justify-between align-middle fixed top-0 left-0">
        <div className="logo -mt-2">
            <OptimizedImage 
              src='/images/logo.png' 
              alt="Logo image" 
              width={100} 
              height={50}
              priority={true}
            />
        </div>
        <div className="menu ">
            <ul className="flex flex-row py-6 lg:font-bold md:font-bold lg:text-xl md:text-xl  sm:text-base sm:font-normal ">
                <Link href='#about'>
                <li className="mx-1  hover:text-blue-500 hover:border-t hover:border-blue-500 transition-all duration-300">About</li>
                </Link>
                
                <Link href='#projects'>
                <li className="mx-1  hover:text-blue-500 hover:border-t hover:border-blue-500 transition-all duration-300">Projects</li>
                </Link>
                
                <Link href='#contact'>
                <li className="mx-1  hover:text-blue-500 hover:border-t hover:border-blue-500 transition-all duration-300">Contact</li>
                </Link>
            </ul>
        </div>
    </header>
   ) 
}
export default Header
