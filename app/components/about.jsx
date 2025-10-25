"use client";

import React,{useTransition, useState} from "react";
import OptimizedImage from "./OptimizedImage";
import TabButton from "./TabButton";


const TAB_DATA= [
    {
    title:"Web",
    id:"web",
    content:[
        <ul  className="font-bold text-base text-[#ddd] " key={"sk"}>
            <li key={'VFX'}>HTML</li>
            <li key={"Audio"}>CSS</li>
            <li key={"Sound2"}>JS</li>
            <li key={"Sound1"}>TS</li>
            <li key={"Sounds"}>Sass</li>
            <li key={"Adobe"}>React.JS</li>
            <li key={"nx"}>Next.JS</li>
            <li key={"ex"}>Express.JS</li>
            <li key={"nd"}>Node.JS</li>
        </ul>
    ]
    },
    {
    title:"Mobile",
    id:"mobile",
    content:[
        <ul className="font-bold text-base text-[#ddd] " key={'edu'}>
            <li key={"HIET"}>Flutter</li>
            <li key={"Civil"} >Firebase</li>
            <li key={"Yanfaa"} dir="rtl">FireAuth</li>
            <li key={"EGFWD"}>Hive</li>
            <li key={"CS50"}>SQFlite</li>

        </ul>
    ]
    },
    {
    title:"Others",
    id:"others",
    content:[
        <ul className="font-bold text-base text-[#ddd] " key={'edu'}>
            <li key={"UI"}>C++</li>
            <li key={"UI1"}>C#</li>
            <li key={"UI2"}>Java</li>
            <li key={"3D"} >Github</li>
            <li key={"DevinJatho"}>Python</li>
            <li key={"MotionGraphic"}>Machine Learning</li>
        </ul>
    ]
    },
    {
    title:"Languages",
    id:"langs",
    content:[
        <ul className="font-bold text-base text-[#ddd] " key={'langs'}>
            <li key={"en"}>German</li>
            <li key={"de"} >English</li>
            <li key={"ar"}>Arabic</li>
        </ul>
    ]
    },



]


function About({ children, initialClass = '', animateClass = '', threshold = 0.5, ...props }){
    
    const [tab, setTab] = useState("web");
    const [isPending, startTransision] = useTransition();

    const handleTabChange = (id)=>{
        startTransision(
            ()=>{
                setTab(id)
            }
        )
    }

    return(
    <section id="about" className="z-10 my-10 container px-12" >
        
      <div className="text-center w-full block lg:text-4xl text-2xl text-blue-500 font-bold  my-4 mb-22" > <p>A B O U T - M E </p> </div>
    
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="col-span-7 place-self-center text-center sm:text-left">
            <OptimizedImage 
              src='/images/about.jpg' 
              alt="About Me Image" 
              width={300} 
              height={450} 
              className="rounded-2xl select-none"
              objectFit="cover"
            />
        </div> 
    
        <div className="col-span-5 mt-10 lg:mt-0 place-self-center font-bold">
            
            <div className="my-4">
                <p className="text-[#ddd] text-base leading-6">
                    I'm Mahmoud Elsoghayar, a passionate Flutter and Web Developer with a background in Electrical and Electronic Engineering. My expertise lies in building dynamic applications using modern technologies like React, Next.js, and Node.js for the web, and Flutter with Firebase for mobile.
                    My journey since 2022 has given me proficiency in a wide range of languages, including C++, Java, Python, and TypeScript. I am also skilled in key tools like Git, Sass, and Tailwind CSS. Fluent in Arabic, English, and German, I am dedicated to creating impactful digital solutions.
                   <span className="text-blue-500 font-bold text-xl block"> Zukunft gestalten, Code schreiben.</span>
                </p>
            </div>


            <div className="flex flex-row mt-8  ">
                   
                   <TabButton key="web-TAB" selectTab={()=> {handleTabChange("web")} } active={(tab==="web")} children={"Web"}/>
                    <TabButton  key="mobile-TAB" selectTab={()=>handleTabChange("mobile")} active={(tab==="mobile")} children={"Mobile"}/>
                    <TabButton  key="others-TAB" selectTab={()=>handleTabChange("others")} active={(tab==="others")} children={"Others"}/>
                    <TabButton  key="langs-TAB" selectTab={()=>handleTabChange("langs")} active={(tab==="langs")} children={"Languages"}/>
                   
                </div>
                <div className="mt-8">{TAB_DATA.find((t)=> t.id=== tab).content}</div>

        </div>
    
      </div>
    </section>)
}
export default About;