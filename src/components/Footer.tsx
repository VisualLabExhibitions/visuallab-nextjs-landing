"use client";

import Image from "next/image";

export default function Footer(){
    return(
        <div>
            <section className="bg-black text-white pt-16 p-3">
                <footer className="flex max-w-6xl mx-auto gap-10">
                    <div className="flex gap-12 flex-col md:flex-row">

                        <div className="flex-1">
                        <Image
                        src={"/images/logo-white.png"}
                        width={150}
                        height={150}
                        alt="Visual Lab"
                        className="mt-0"
                        />
                        <p>Visual Lab, based in Dubai, creates custom, innovative exhibition stands worldwide. With expert designers and project managers, we deliver unique, eye-catching environments that boost brand visibility, engagement, and sales.</p>
                    </div>               
                    <div className="flex-1">
                        <h2 className="text-2xl pb-6">Userful Links</h2>      
                        <ul>
                            <li className="leading-relaxed py-2">Home</li>
                            <li className="leading-relaxed py-2">Contact Us</li>
                            <li className="leading-relaxed py-2">Our Works</li>
                            <li className="leading-relaxed py-2">Exhibition Stands</li>
                            <li className="leading-relaxed py-2">Stans</li>
                        </ul>                  
                        
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl pb-6">Contact Us</h2>
                        <ul>
                            <li className="leading-relaxed p-2 ">Call Us +971 55 109 6009</li>
                            <li className="leading-relaxed p-2 ">Address Al Karama, Dubai, United Arab Emirates.</li>
                            <li className="leading-relaxed p-2 ">Email susmit@eim.ae</li> 
                        </ul>           
                    </div>
                    <div className="">
                        <h2 className="text-2xl pb-6">Our Location</h2>
                         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7217.693034413815!2d55.297377!3d25.242094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f432075aeb0cf%3A0x53270e6ae7ba35cd!2sVisual%20Lab!5e0!3m2!1sen!2sae!4v1770897843173!5m2!1sen!2sae"
                         width={320} 
                         height={250} 
                         style={{border:0}} 
                         allowFullScreen 
                         loading="lazy" 
                         referrerPolicy="no-referrer-when-downgrade"
                         ></iframe>                
                    </div>

                    </div>
                    
                </footer>
                 <div className="text-white text-center leading-relaxed py-4">
                        &copy; All Copyright 2026 - Visuall Lab
                    </div>
            </section>

           
        </div>
    );
}