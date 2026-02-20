import { FaStar } from "react-icons/fa";

export default function ClientTestimonials(){
    return(

        <section style={{backgroundImage:"url('/images/section-bg.jpg')", backgroundSize:'cover', backgroundPosition:'center'}}>
            <div className="bg-black/40 py-16">
                <div className="max-w-6xl mx-auto">
                <h2 className="pb-7 font-bold text-center text-3xl text-white bg-u">What our Client Says</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 text-center">

                    <div className="mb-4 shadow-lg rounded-lg bg-black/10 text-white mx-2 p-4 border border-white-100">
                        <h2 className="text-2xl font-medium pb-4">Sarah J.</h2>
                        <p className="text-lg reading">Visual Lab transformed our exhibition stand beyond our expectations. Professional, fast, and creative!</p> 
                          <div className="flex justify-center text-yellow-400 gap-1 mt-3">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <FaStar key={i} />
                            ))}
                            </div>
                    </div>
                     <div className="mb-4 shadow-lg rounded-lg bg-black/10 text-white mx-2 p-4 border border-white-300">
                        <h2 className="text-2xl font-medium pb-4">Ahmed K.</h2>
                        <p className="text-lg reading">The team delivered exactly what we envisioned. Installation was smooth, and attention to detail was excellent</p> 
                          <div className="flex justify-center text-yellow-400 gap-1 mt-3">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <FaStar key={i} />
                            ))}
                            </div>
                    </div>
                     <div className="mb-4 shadow-lg rounded-lg bg-black/10 text-white mx-2 p-4 border border-white-300">
                        <h2 className="text-2xl font-medium pb-4 text-white">Daniel Roberts</h2>
                        <p className="text-lg reading">Highly recommend! From design to finishing, everything was handled professionally and on time. </p> 
                            <div className="flex justify-center text-yellow-400 gap-1 mt-3">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                    </div>

                </div>
            </div>
            </div>
            
        </section>


    );
}