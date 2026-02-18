
import Service from "@/components/home/servicesection";
import Aboutsection from "@/components/home/Aboutsection";
import HowWeWork from  "@/components/home/HowWeWork";
import ClientTestimonials from "@/components/home/ClientTestimonials";
import Hero from "@/components/home/Hero";


export default function HomePage(){
  return(
    <div>
      <Hero />
      <Aboutsection />
      <Service />
      <HowWeWork />
      <ClientTestimonials />
    </div>
  );
}


