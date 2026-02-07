import { main } from "framer-motion/client";
import Service from "@/components/home/servicesection";
import Testimonials from "@/components/home/testimonials";
import Aboutsection from "@/components/home/Aboutsection";

export default function HomePage(){
  return(
    <div>
      <Aboutsection />
      <Service />
      <Testimonials/>
    </div>
  );
}


