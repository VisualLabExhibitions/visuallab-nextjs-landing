// components/ImageSlider.js

"use client";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';


export default function ImageSlider() {
  return (
    <section>
        <div className="max-w-6xl mx-auto">
            <div className="grid">
                 <Splide
                    options={{
                        type: 'loop',
                        interval: 3000,       // 3 seconds per slide
                        perPage: 3,
                        gap: '1rem',
                        autoplay: true,
                        pauseOnHover: false,
                    }}
                    >
                    <SplideSlide>
                        <img src="/images/slide1.jpg" alt="Slide 1" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="/images/slide2.jpg" alt="Slide 2" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="/images/slide3.jpg" alt="Slide 3" />
                    </SplideSlide>
                    </Splide>
            </div>
        </div>
    </section>
   
  );
}
