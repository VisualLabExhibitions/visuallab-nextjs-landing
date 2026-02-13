
import Service from "@/components/home/servicesection";
import Aboutsection from "@/components/home/Aboutsection";
import HowWeWork from  "@/components/home/HowWeWork";
import ClientTestimonials from "@/components/home/ClientTestimonials";
import Testimonialslide from "@/components/home/Testimonialslide";


export default function HomePage(){
  return(
    <div>
      <Aboutsection />
      <Service />
      <HowWeWork />
      <ClientTestimonials />
      <Testimonialslide />

    </div>
  );
}


