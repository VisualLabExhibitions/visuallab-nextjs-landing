
import ServiceSection  from "@/components/home/ServiceSection";
import AboutSection from "@/components/home/AboutSection"
import HowWeWork from  "@/components/home/HowWeWork";
import ClientTestimonials from "@/components/home/ClientTestimonials";
import Testimonial from "@/components/home/Testimonial";
import OurWorks from "@/components/home/OurWorks";
import HomePageSlider from "@/components/home/Banner";
import HomeContact from "@/components/home/ContactUs";

export default function HomePage(){
  return(
    <div>
      <HomePageSlider />
      <AboutSection />
      <ServiceSection />
      <HowWeWork />
      <Testimonial />
      <OurWorks />
      <HomeContact />
    </div>
  ); 
}


