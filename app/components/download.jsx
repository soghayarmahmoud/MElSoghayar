import React from "react";
import Link from "next/link";

function Download({text, link, className}){
    return(
        <Link  href={link} download={link[0]!=='#'} className={className}>
            <button className="cursor-pointer">{text}</button>
        </Link>
    )
}

export default Download