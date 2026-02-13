import Link from "next/link";
import Image from "next/image";
import {FaHome} from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";



export default function Navbar() {
  return (
    <div>
      <section className="max-w-6xl mx-auto flex ">
        <div className="flex">
            <FaPhoneAlt /> 
            <span> Phone: +971 55 109 6009 </span>
          </div>
        <div className="flex-1 ">
          <FaHome size={24} className="text-red-500 text-xl"/> <FaPhone />
        </div>
      </section>
    <nav className="bg-white shadow-md text-black">
      <div className="max-w-6xl mx-auto py-3 px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Image
          src="/images/logo.png"
          width={140}
          height={150}
          alt="Exhibition Stand Buliding"
          className="object-cover"/>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 mt-2 md:mt-0">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/about" className="hover:text-blue-500">About Us</Link>
          <Link href="/services/exhibition-building" className="hover:text-blue-500">Exhibition Building</Link>
          <Link href="/services/modular-design" className="hover:text-blue-500">Modular Design</Link>
          <Link href="/services/custom-stands" className="hover:text-blue-500">Custom Stands Solutions</Link>
        </div>
      </div>
    </nav>
    </div>
  );
}


