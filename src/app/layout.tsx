

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Topnav from "@/components/Topnav"; 
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { ReactNode } from 'react';
import './globals.css';


export default function RootLayout({children}: {children: ReactNode}){
  return(
    <html lang="en">
      <body className="overflow-x-hidden">
      <Topnav />
      <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}



