import Link from "next/link";
import Image from "next/image";
import {FaHome} from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


export default function Navbar() {
  return (
    <div>
    
      <section className="bg-red-200">
  <div className="max-w-6xl mx-auto">
    <div className="flex justify-between items-center p-3">
      {/* Left side */}
      <div className="flex items-center space-x-2">
        <FaPhoneAlt size={20} /> 
        <span>Phone: +971 55 109 6009</span>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-2">
        <FaHome size={20} className="text-red-500" /> 
        <span>All Karama, Dubai</span>
      </div>
    </div>            
  </div>  
</section>


    <nav className="bg-white shadow-md text-black">
      <div className="max-w-6xl mx-auto py-6 px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Image
          src="/images/logo.png"
          width={120}
          height={110}
          alt="Exhibition Stand Buliding"
          className="object-cover"/>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 mt-2 md:mt-0 font-medium">
          <Link href="/" className="hover:text-red-500 transition">Home</Link>
          <Link href="/about" className="hover:text-red-500 transition">About Us</Link>
          <Link href="/services/exhibition-building" className="hover:text-red-500 transition">Exhibition Building</Link>
          <Link href="/services/modular-design" className="hover:text-red-500 transition">Modular Design</Link>
          <Link href="/services/custom-stands" className="hover:text-red-500 transition">Custom Stands Solutions</Link>
        </div>
      </div>
    </nav>
    </div>
  );
}


