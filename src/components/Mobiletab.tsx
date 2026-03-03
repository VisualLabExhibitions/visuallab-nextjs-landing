import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { LiaPhoenixFramework } from "react-icons/lia";
import { FaEnvelope } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";



export default function MobileTab(){
    return(
        <section className="bg-black/50 text-white fixed bottom-0 left-0 z-50 md:hidden w-full pb-0">
                <div className="flex justify-around text-center py-3">
                    <Link href="/#" className="flex flex-col items-center gap-1"> <FaHome /> Home </Link>
                    <Link href="/#about" className="flex flex-col items-center gap-1"> <IoPeople /> About </Link>
                    <Link href="/#services" className="items-center flex flex-col gap-1"><MdWorkOutline /> Service </Link>
                    <Link href="/#our-works" className="items-center flex flex-col gap-1"><LiaPhoenixFramework /> Works </Link>
                    <Link href="/#contact" className="items-center flex flex-col gap-1"> <FaEnvelope /> Contact </Link>
                </div>        
        </section>
                
    );
}