
"use client";
import React,{useState} from "react";
import AppCard from "./AppCard";
import Link from "next/link";

// Define your app data with an array of image objects
const appsData = [

    {
    id: 1,
    title: "Simple Notes App",
    description: "An amazing app for taking notes.",
    appLink: "/documents/notes.apk",
    images: [

        { url: "/images/notes/1.jpg", title: "Notes App First Screenshot" },
        { url: "/images/notes/2.jpg", title: "Notes App Second Screenshot" },
        { url: "/images/notes/3.jpg", title: "Notes App Third Screenshot" },
        { url: "/images/notes/4.jpg", title: "Notes App 4th Screenshot" },
        { url: "/images/notes/5.jpg", title: "Notes App 5th Screenshot" },
        { url: "/images/notes/6.jpg", title: "Notes App 6th Screenshot" },
        { url: "/images/notes/7.jpg", title: "Notes App 7th Screenshot" },

    ],
    down:true,
    tags: ['mobile', 'all']
    },


    {
    id: 2,
    title: "Al-Minshawy - المنشاوي",
    description: "",
    appLink: "/documents/minsh.apk",
    images: [
        { url: "/images/minsh/1.jpg", title: "Al-Minshawy App  Screenshot 1" },
        { url: "/images/minsh/2.jpg", title: "Al-Minshawy App  Screenshot 2" },
        { url: "/images/minsh/3.jpg", title: "Al-Minshawy App  Screenshot 3" },
        { url: "/images/minsh/4.jpg", title: "Al-Minshawy App  Screenshot 4" },
        { url: "/images/minsh/5.jpg", title: "Al-Minshawy App  Screenshot 5" },
        { url: "/images/minsh/6.jpg", title: "Al-Minshawy App  Screenshot 6" },
        { url: "/images/minsh/7.jpg", title: "Al-Minshawy App  Screenshot 7" },
    
    ],
    down:true,
    tags: ['mobile', 'all'],
    },


    {
    id: 3,
    title: "Sahih Al Buckary - صحيح البخاري ",
    description: "",
    appLink: "/documents/buck.apk",
    images: [

        { url: "/images/buck/1.jpg", title: "Al-Buckary App  Screenshot 1" },
        { url: "/images/buck/2.jpg", title: "Al-Buckary App  Screenshot 2" },
        { url: "/images/buck/3.jpg", title: "Al-Buckary App  Screenshot 3" },
        { url: "/images/buck/4.jpg", title: "Al-Buckary App  Screenshot 4" },
        { url: "/images/buck/5.jpg", title: "Al-Buckary App  Screenshot 5" },
        { url: "/images/buck/6.jpg", title: "Al-Buckary App  Screenshot 6" },
        { url: "/images/buck/7.jpg", title: "Al-Buckary App  Screenshot 7" },
        { url: "/images/buck/8.jpg", title: "Al-Buckary App  Screenshot 8" },
        { url: "/images/buck/9.jpg", title: "Al-Buckary App  Screenshot 9" },
        { url: "/images/buck/10.jpg", title: "Al-Buckary App  Screenshot 10" },
        { url: "/images/buck/11.jpg", title: "Al-Buckary App  Screenshot 11" },
        { url: "/images/buck/12.jpg", title: "Al-Buckary App  Screenshot 12" },

    
    ],
    down:true,
    tags: ['mobile', 'all']
    },   
    {
    id: 4,
    title: "Portfolio Website",
    description: "",
    appLink: "https://nextjs-beautiful-portfo-git-fde4c1-mahmoud-elsoghayars-projects.vercel.app?_vercel_share=OUM6Mrg5AINXZatalg7FuagpZVZXbZvz ",
    images: [

        { url: "/images/vfx/1.jpg", title: "Screenshot 1" },
        { url: "/images/vfx/2.jpg", title: "Screenshot 2" },
        { url: "/images/vfx/3.jpg", title: "Screenshot 3" },
        { url: "/images/vfx/4.jpg", title: "Screenshot 4" },
        { url: "/images/vfx/5.jpg", title: "Screenshot 5" },
        { url: "/images/vfx/6.jpg", title: "Screenshot 6" },
        

    
    ],
    down:false,
    tags: ['web', 'all']
    },   
    {
    id: 5,
    title: "Portfolio Website",
    description: "",
    appLink: "https://www.elsoghayar.netlify.app",
    images: [

        { url: "/images/my/1.jpg", title: "Screenshot 1" },
        { url: "/images/my/2.jpg", title: "Screenshot 2" },
        { url: "/images/my/3.jpg", title: "Screenshot 3" },
        { url: "/images/my/4.jpg", title: "Screenshot 4" },
        { url: "/images/my/5.jpg", title: "Screenshot 5" },
        { url: "/images/my/6.jpg", title: "Screenshot 6" },
        { url: "/images/my/7.jpg", title: "Screenshot 7" },
        { url: "/images/my/8.jpg", title: "Screenshot 8" },
        { url: "/images/my/9.jpg", title: "Screenshot 9" },
        { url: "/images/my/10.jpg", title: "Screenshot 10" },
        { url: "/images/my/11.jpg", title: "Screenshot 11" },
        { url: "/images/my/12.jpg", title: "Screenshot 12" },

    
    ],
    down: false,
    tags: ['web', 'all']
    },

];

    

      

const ProjectSection = () => {
    const [filteredApartments, setFilteredApartments] = useState(appsData);
    const [activeTag, setActiveTag] = useState('all');

const handleFilter = (tag) => {
            setActiveTag(tag);
            if (tag === 'all') {
            setFilteredApartments(appsData);
         } else {
            const filtered = appsData.filter(app => app.tags.includes(tag));
            setFilteredApartments(filtered);
        }
  };


    return (
        <section id="projects" className=" px-12 container mx-auto py-8 flex flex-col">
            <h1 className="text-center w-full block lg:text-4xl text-2xl text-blue-500 font-bold  my-4 mb-22"> P R O J E C T S </h1>
            <div className='flex flex-row justify-center items-center p-2 my-16'>
                {/* 3. Use an arrow function in the onClick handler */}
                <button
                    onClick={() => handleFilter('all')}
                    className={`mx-1 border-2 cursor-pointer outline-0 text-white border-blue-500 p-2 font-bold text-xl transition-all duration-500 px-4 rounded-xl ${activeTag === 'all' ? 'bg-blue-500 text-white' : 'bg-[#222] text-blue-500 '}`}
                >
                    All
                </button>
                <button
                    onClick={() => handleFilter('web')}
                    className={`mx-1  outline-0 border-2 cursor-pointer border-blue-500 text-white p-2 font-bold text-xl transition-all duration-500 px-4 rounded-xl ${activeTag === 'web' ? 'bg-blue-500 text-white' : 'bg-[#222] text-blue-500 '}`}
                >
                    Web
                </button>
                <button
                    onClick={() => handleFilter('mobile')}
                    className={`mx-1 border-2 outline-0 cursor-pointer border-blue-500 text-white p-2 font-bold text-xl transition-all duration-500 px-4 rounded-xl ${activeTag === 'mobile' ? 'bg-blue-500 text-white' : 'bg-[#222] text-blue-500 '}`}
                >
                    Mobile
                </button>
            </div>            

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredApartments.map((app) => (
                  <AppCard
                    key={app.id}
                    title={app.title}
                    description={app.description}
                    appLink={app.appLink}
                    images={app.images}
                    isDownload={app.down}
                  />
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;