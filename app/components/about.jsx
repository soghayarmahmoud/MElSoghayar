"use client";

import React,{useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";


const TAB_DATA= [
    {
    title:"Web",
    id:"web",
    content:[
        <ul  className="font-bold text-base text-[#ddd] " key={"sk"}>
            <li key={'VFX'}>HTML</li>
            <li key={"Audio"}>CSS</li>
            <li key={"Sound"}>JS</li>
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
            <Image src='/images/about.jpg' alt="About Me Image" width={300} height={450} className="rounded-2xl select-none"></Image>
        </div> 
    
        <div className="col-span-5 mt-10 lg:mt-0 place-self-center font-bold">
            
            <div className="my-4">
                <p className="text-[#ddd] text-base ">I'm Mahmoud Elsoghayar, a passionate Flutter and Web Developer with a unique fusion of engineering principles and a drive to build exceptional digital experiences. My academic journey in Electrical and Electronic Engineering at HIET in Sohag provides a strong foundation in logic and problem-solving, which I directly apply to every line of code.
                                                          My programming journey began in 2022, and since then, I have been dedicated to mastering a diverse range of technologies. My expertise spans a wide array of languages, including C++, C#, Java, Python, and the versatile duo of JavaScript and TypeScript.
                                                          In the world of web development, I build modern, responsive applications using the powerful combination of Next.js, React, Node.js, and MongoDB. For mobile applications, I specialize in Flutter, creating seamless cross-platform experiences and leveraging services like Firebase (Fireauth, Firestore) for robust backend functionality.
                                                          Beyond core development, I am proficient in essential skills like Git and GitHub for version control, and I use modern styling frameworks such as Sass and Tailwind CSS to craft elegant user interfaces. I am a trilingual communicator, fluent in Arabic, English, and German, enabling me to collaborate effectively in a global environment.
                                                          I am a creator, a problem-solver, and a lifelong learner committed to shaping the future of technology.
                                                          \nZukunft gestalten, Code schreiben.\n</p>
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