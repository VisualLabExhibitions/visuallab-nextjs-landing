"use client";
import Link from "next/link";
import { useState} from "react";
import Image from "next/image";

export default function Navbar(){
const [isOpen,setIsOpen] = useState(false);

  return(
      <nav className="bg-white shadow-md text-black relative">
        <div className="max-w-6xl mx-auto py-4 px-4 flex  md:flex-row items-center justify-between">
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
          <div className="hidden md:flex flex-row gap-2 md:gap-8 mt-2 md:mt-0 font-medium">
            <Link href="/" className="hover:text-red-500 transition">Home</Link>
            <Link href="/about" className="hover:text-red-500 transition">About Us</Link>
            <Link href="/services/exhibition-building" className="hover:text-red-500 transition">Exhibition Building</Link>
            <Link href="/services/modular-design" className="hover:text-red-500 transition">Modular Design</Link>
            <Link href="/services/custom-stands" className="hover:text-red-500 transition">Custom Stands Solutions</Link>
          </div>

          {/* Toggle bar */}
          <div>
          <button className="flex md:hidden text-xl border-black-500" onClick={() => setIsOpen(!isOpen)}>☰</button>
          </div>

          { isOpen && (
              <div className="flex flex-col md:hidden absolute top-full z-1 bg-gray-200 left-0 text-center p-4 w-full gap-4 font-medium">
                <Link href="/" className="hover:text-red-500 transition">Home</Link>
                <Link href="/about" className="hover:text-red-500 transition">About Us</Link>
                <Link href="/services/exhibition-building" className="hover:text-red-500 transition">Exhibition Building</Link>
                <Link href="/services/modular-design" className="hover:text-red-500 transition">Modular Design</Link>
                <Link href="/services/custom-stands" className="hover:text-red-500 transition">Custom Stands Solutions</Link>
              </div>
            )
          }

        </div>
    </nav>

  );
}