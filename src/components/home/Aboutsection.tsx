import Image from "next/image";

export default function AboutSection(){
    return(
        <div>
            <section>
            <div className="py-10 bg-gray-100">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-span-2 gap-8 item-center">
                          <h2 className="text-2xl text-left font-bold pb-5">At Visual Lab, our expert management team creates innovative, impactful exhibition solutions globally.</h2>
                         <p className="text-left pb-3">
                            Visual Lab is a full-service exhibition and event stand builder based in Dubai, UAE, serving clients worldwide. With over a decade of experience, our expert team designs and constructs innovative, eye-catching exhibition stands tailored to every client’s unique vision.</p>

                            <p className="text-left">Our multi-disciplinary team of architects, designers, fabricators, and project managers ensures seamless execution from concept to installation. We create custom stands that enhance brand visibility, attract visitors, and maximize ROI, understanding the importance of time, investment, and exceptional results for every exhibition.
                        </p>
                    </div>
       
                    <div className="relative h-7 hidden md:block">
                        <Image 
                            src="/images/about.png"
                            alt="stand building"
                            height={400}
                            width={300}
                            className="object-cover rounded-lg overflow-hidden"
                         />
                    </div>
                </div>
            </div>
            </section>
        </div>
    );
}