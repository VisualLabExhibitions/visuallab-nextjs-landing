"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white backdrop-blue-md shadow-md text-black sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-2 px-4">

        {/* Logo */}
        <div className="relative">
        <Link href="/#">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={195}
            height={91}
            className="object-contain h-12 w-auto md:h-17"
            priority
          />
        </Link>
      </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link href="/" className="hover:text-red-500 transition">Home</Link>
          <Link href="/#about" className="hover:text-red-500 transition">About Us</Link>
          <Link href="/#services" className="hover:text-red-500 transition">Dubai Exhibition Building</Link>
          <Link href="/#our-works" className="hover:text-red-500 transition">Our Works</Link>
          <Link href="/#contact" className="hover:text-red-500 transition">Contact Us</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden cursor-pointer flex flex-col justify-between w-6 h-6"
          onClick={() => setIsOpen(prev => !prev)}
        >
          <span className={`h-0.5 w-full bg-black transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 w-full bg-black transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-0.5 w-full bg-black transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-lg shadow-lg z-20  transition-all duration-300
          ${isOpen ? "max-h-96 opacity-100 p-4 pointer-events-auto" : "max-h-0 opacity-0 p-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col gap-4 text-center font-medium">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition">Home</Link>
          <Link href="/#about" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition">About Us</Link>
          <Link href="/#services" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition">Exhibition Building</Link>
          <Link href="/#our-works" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition">Our Works</Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)} className="hover:text-red-500 transition">Contact Us</Link>
        </nav>
      </div>
    </nav>
  );
}