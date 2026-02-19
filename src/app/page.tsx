
import ServiceSection  from "@/components/home/ServiceSection";
import AboutSection from "@/components/home/AboutSection"
import HowWeWork from  "@/components/home/HowWeWork";
import ClientTestimonials from "@/components/home/ClientTestimonials";
import Hero from "@/components/home/Hero";


export default function HomePage(){
  return(
    <div>
      <Hero />
      <AboutSection />
      <ServiceSection />
      <HowWeWork />
      <ClientTestimonials />
    </div>
  ); 
}


