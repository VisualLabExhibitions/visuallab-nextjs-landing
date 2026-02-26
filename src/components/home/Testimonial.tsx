"use client"; 

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Image from "next/image";
 

export default function Testimonial() {

    const testimonials = [
    { 
        title: "Sarah J.",
        description: "Visual Lab transformed our exhibition stand beyond our expectations. Professional, fast, and creative!",
    },
    { title: "Ahmed K.", description: "The team delivered exactly what we envisioned. Installation was smooth, and attention to detail was excellent",},
    { title:"Daniel Roberts", description: "Highly recommend! From design to finishing, everything was handled professionally and on time.",},
    {title:"Daniel Roberts", description: "Highly recommend! From design to finishing, everything was handled professionally and on time.",},
    {title:"Daniel Roberts", description: "Highly recommend! From design to finishing, everything was handled professionally and on time.",},
];

  return (
    <section style={{backgroundImage:"url('/images/section-bg.jpg')", backgroundSize:'cover', backgroundPosition:'center'}}>
        <div className="bg-black/40 py-16">
            <div className="max-w-6xl mx-auto">

                <h2 className="pb-7 font-bold text-center text-2xl md:text-3xl text-white">What our Client Says</h2>
                
                 <Swiper
                 modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={5}
                    slidesPerView={4}
                    navigation
                    // pagination={{ clickable:true}}
                    autoplay={{delay:3000}}
                    loop={true}
                    breakpoints={{
                    0: { slidesPerView: 1 },
                    776: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                    }}
                    >

                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="border border-white rounded-lg m-2 text-white p-4 bg-black/10 hover:bg-black/40 trasition-all duration-300">                                        
                                <div className="items-center justify-center">
                                    <h3 className='text-xl md:text-2xl font-medium pb-4'>{item.title}</h3>
                                    <p className='md:text-lg reading'>{item.description}</p>
                                    <div className="flex justify-center text-yellow-400 gap-1 mt-3">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                                    </div>
                                    
                                </div>
                            </div>       
                    </SwiperSlide>

                    ))}

                
                </Swiper>
            </div>
        </div>
    </section>
   
  );
};