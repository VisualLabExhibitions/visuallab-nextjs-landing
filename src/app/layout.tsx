"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactNode } from 'react';
import './globals.css';


export default function RootLayout({children}: {children: ReactNode}){
  return(
    <html lang="en">
      <body>
      <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}



