// components/AppCard.jsx

"use client";
import React from "react";
import ImageSlider from "./ImageSlider"; // <--- Import the ImageSlider
import Link from "next/link";

// Refactor AppCard to accept an array of slides
const AppCard = ({ title, description, appLink, images , isDownload }) => {
    // The images prop will now be the 'slides' prop for the ImageSlider

    return (
        <div className="bg-[#222] m-2 p-4 rounded-2xl shadow-2xs select-none ">

            {images && images.length > 0 && (
                <ImageSlider slides={images} />
            )}
            
            <div className="text-white">
                <h5 className="text-xl text-center text-white py-4 font-bold">{title}</h5>
                <p className="text-base text-[#ddd] p-4 font-semibold mb-2">{description}</p>
            </div>

        <div className="flex w-full justify-center align-middle ">

        <Link  href={appLink} download={isDownload} target={isDownload==false ? '_blank' :''} className='w-full bg-blue-500 hover:bg-blue-400 text-white font-bold text-center my-2 p-4 rounded-2xl'>
            <button className="cursor-pointer">{isDownload ==true ? 'Download' :'Visit Website'}</button>
        </Link>
        </div>

        </div>
    );
}

export default AppCard;














//! the generated code with the AI in to change the project section section

// // Example: A parent component like AppsSection.jsx

// "use client";
// import React from "react";
// import AppCard from "./AppCard";

// // Define your app data with an array of image objects
// const appsData = [
//     {
//         id: 1,
//         title: "Photo Editor Pro",
//         description: "An amazing app for editing photos on the go.",
//         appLink: "https://example.com/photo-editor.apk",
//         images: [
//             { url: "/images/app1-screenshot1.jpg", title: "App 1 Screenshot 1" },
//             { url: "/images/app1-screenshot2.jpg", title: "App 1 Screenshot 2" },
//             { url: "/images/app1-screenshot3.jpg", title: "App 1 Screenshot 3" },
//         ],
//     },
//     {
//         id: 2,
//         title: "Music Player",
//         description: "Listen to your favorite songs offline.",
//         appLink: "https://example.com/music-player.apk",
//         images: [
//             { url: "/images/app2-screenshot1.jpg", title: "App 2 Screenshot 1" },
//             { url: "/images/app2-screenshot2.jpg", title: "App 2 Screenshot 2" },
//         ],
//     },
//     // Add more apps with their own image arrays
// ];

// const AppsSection = () => {
//     return (
//         <section className="container mx-auto px-4 py-16">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {appsData.map((app) => (
//                     <AppCard
//                         key={app.id}
//                         title={app.title}
//                         description={app.description}
//                         appLink={app.appLink}
//                         images={app.images} // Pass the array of image objects here
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default AppsSection;