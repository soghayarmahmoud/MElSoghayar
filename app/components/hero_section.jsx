"use client";
import React from "react";
import Download from "./download";
import OptimizedImage from "./OptimizedImage";
import { TypeAnimation } from 'react-type-animation';
import Galaxy from "./Galaxy";

function HeroSection(){
    return(
        <section className="px-8 lg:py-42 py-32  bg-[url('/images/b3.jpg')] bg-no-repeat bg-center bg-cover">

           
        <div className="grid grid-cols-1 lg:grid-cols-12">


            <div className="logo w-[250px] h-[250px] rounded-full border-8 border-blue-600 border-dotted col-span-7 place-self-center text-center sm:text-left animate-fade-in-slide-up select-none overflow-hidden">
                <OptimizedImage 
                  src='/images/main.png' 
                  alt="Main - profile image for mahmoud elsoghayar" 
                  width={250} 
                  height={250} 
                  className="rounded-full w-full h-full" 
                  objectFit="cover"
                  priority={true}
                />
            </div>
            <div className="col-span-5 mt-10 lg:mt-0 place-self-center font-bold" >
                <h1 className="text-white font-bold text-3xl sm:text-2xl lg:text-4xl text-center my-4">

                
                <p className="text-2xl">Hi I'm </p>
                
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Mahmoud ElSoghayar',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Flutter Developer',
                            1000,
                            'Web Developer',
                            1000,
                            'Online Instructor',
                            1000
                            ]}
                            wrapper="span"
                            speed={50}
                            // style={{ fontSize: '1.4em', display: 'block' , backgroundImage:'linear-gradient(to right, #1347D6, #2B9DCC)', backgroundClip:'text', WebkitTextFillColor:'transparent', color:'transparent', marginTop:'20px', marginBottom:'20px' }}
                            style={{fontSize:'1em', display:'block', color:'#3B82F6',  marginTop:'20px', marginBottom:'20px',padding:'5px', letterSpacing:'2px', fontWeight:'bold' }}
                            repeat={Infinity}
                            cursor={true}
                    />
                <p className="text-[#ddd] text-base"> Building beautiful apps, teaching others to do the same 😊  </p>
                
                </h1>
                <div className="flex flex-col sm:flex-col justify-center select-none  md:flex-col lg:flex-row gap-4">
                    <Download text='Download C.V'  link='/documents/cv1.pdf' className='sm:w-full md:w-full h-12 bg-blue-500 hover:bg-blue-400 transition duration-300 text-white lg:w-40 cursor-pointer rounded-xl py-2.5   text-center lg:mx-2 sm:block md:block'/>
                    <Download text='Show Projects'  link='#projects' className='sm:w-full md:w-full h-12 border-blue-500 border-2 backdrop-blur-3xl  transition duration-300 text-white lg:w-40 cursor-pointer rounded-xl py-2.5   text-center lg:mx-2   sm:block  md:block'/>
                </div>
            </div>
        </div>
        </section>
    )
}
export default HeroSection