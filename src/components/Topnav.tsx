"use client";

import {FaHome} from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


export default function Topnav(){
    return(

                <section className="bg-[var(--theme-primary)]">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex justify-between items-center p-2 text-white">
                        {/* Left side */}
                        <div className="flex items-center space-x-2">
                            <FaPhoneAlt size={20} /> 
                            <span>Phone: +971 55 109 6009</span>
                        </div>

                        {/* Right side */}
                        <div className="flex hidden md:flex items-center space-x-2">
                            <FaHome size={20} className="text-black-500" /> 
                            <span>Al Karama, Dubai</span>
                        </div>
                        </div>            
                    </div>  
                </section>


    );
}