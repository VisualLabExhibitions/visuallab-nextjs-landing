import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function AboutSection(){
    return(
        <div>
            <section className="bg-gray-100 py-15">
                <div className="max-w-6xl mx-auto">
                    <div className=" grid grid-cols-3 px-4">

                        <div className="col-span-2">
                            <h2 className="text-4xl font-bold pb-4">
                                At Visual Lab, our expert management team creates innovative, impactful exhibition solutions globally.
                            </h2>
                            <p className="pb-4">
                                Visual Lab is a full-service exhibition and event stand builder based in Dubai, UAE, serving clients worldwide. With over a decade of experience, our expert team designs and constructs innovative, eye-catching exhibition stands tailored to every client’s unique vision.
                            </p>
                            <p>
                                Our multi-disciplinary team of architects, designers, fabricators, and project managers ensures seamless execution from concept to installation. We create custom stands that enhance brand visibility, attract visitors, and maximize ROI, understanding the importance of time, investment, and exceptional results for every exhibition.
                            </p>

                              
     
                        </div>

                        <div className="relative w-full h-96"> 
                            <Image 
                            src="/images/about.png"
                            alt="Visual Lab"
                            fill                         
                            className="object-contain"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );    
}