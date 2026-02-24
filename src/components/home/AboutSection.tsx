"use client";

import Image from "next/image";
import { motion } from "framer-motion";


export default function AboutSection(){
    return(
        <div>

            <section className="bg-[var(--theme-bg)] py-8 md:py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 px-4">

                        <div className="md:col-span-2" id="about">
                            <motion.section initial= {{opacity:0, x:20}} whileInView= {{opacity:1, x:0}} transition={{duration:0.6, }} viewport = {{once:true}}>                            
                            <h2 className="text-2xl md:text-4xl font-bold pb-4">
                                At Visual Lab, our expert management team creates innovative, impactful exhibition solutions globally.
                            </h2>
                            </motion.section>

                            <p className="pb-4">
                                Visual Lab is a full-service exhibition and event stand builder based in Dubai, UAE, serving clients worldwide. With over a decade of experience, our expert team designs and constructs innovative, eye-catching exhibition stands tailored to every client’s unique vision.
                            </p>
                            <p>
                                Our multi-disciplinary team of architects, designers, fabricators, and project managers ensures seamless execution from concept to installation. We create custom stands that enhance brand visibility, attract visitors, and maximize ROI, understanding the importance of time, investment, and exceptional results for every exhibition.
                            </p>
                             
                            
                        </div>

                        <div className="relative"> 
                            <Image 
                            src="/images/about.png"
                            alt="Visual Lab"
                            width={800}
                            height={900}                         
                            className="w-full h-[350] w-[auto] object-contain "/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );    
}


