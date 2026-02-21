"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Topnav from "@/components/Topnav"; 
import { ReactNode } from 'react';
import './globals.css';


export default function RootLayout({children}: {children: ReactNode}){
  return(
    <html lang="en">
      <body>
      <Topnav />
      <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}



