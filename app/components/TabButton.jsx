"use client";
import React from 'react';

const TabButton = ({ active, selectTab, children} ) => {
    
    const buttonClasses = active ?
    "font-semibold text-white  border-b-2  border-blue-500 "
    :"text-[#bbb]  cursor-pointer";

return(
<button onClick={selectTab} >
    <p className= {`mr-3 font-semibold ${buttonClasses}`}>  
    {children}
    </p>
</button>
);


}


export default TabButton;