"use client";
import {useState} from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";




export default function HomeContact(){

    const [formData, setFormData] = useState({name:"", email:"", message:""});

    const handlechange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload
    console.log("Form submitted:", formData);

    // Clear form after submit
    setFormData({ name: "", email: "", message: "" });
    };

    return(

        <section className="py-16 bg-[var(--theme-primary)] ">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols bg-">
                    <h2 className="text-2xl font-bold text-white text-center">Get In Touch</h2>
                    <p className="text-center text-white pb-4">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

                 
                   <div className="flex mt-4 gap-3 flex-col md:flex-row">
                        <div className="flex flex-1 flex-col gap-3 bg-black/20 p-6 rounded-lg shadow-lg shadow-white/10">
                            <p className="font-bold text-white">Send a Message Us</p>
                            <form action="">
                                <div className="pb-3 text-gray-200">
                                     Your Name<br/><input type="text" placeholder="John Deo" className="rounded-md border border-gray-400 w-full text-white p-2" />
                                </div>
                               
                               <div className="pb-3 text-gray-200">
                                    Email Address<br/><input type="text" placeholder="john@example.com" className="rounded-md border border-gray-400 w-full text-white p-2" />
                               </div>
                                
                                <div className="pb-3 text-gray-200">
                                    Subject<br/><input type="text" placeholder="How can we help you?" className="rounded-md border border-gray-400 w-full text-white p-2" />
                                </div>
                                
                               <div className="pb-3 text-gray-200">
                                    Message<textarea name="" id="" className="rounded-md border broder-gray-400 w-full p-2" placeholder="Tell us more about your inquiry..."></textarea>

                                    <button type="submit" className="bg-[#360011] p-3 rounded-md w-full mt-4 text-white hover:bg-black">Send Message</button>
                               </div>
                            </form>
                        </div>

                       <div className="flex gap-4 flex-col flex-1 hidden md:flex">
                            <div className="items-center gap-1 flex gap-3 flex-row flex-1 bg-black/20 p-6 p-6 flex-col rounded-lg text-gray-100 shadow-lg shadow-white/10">
                                <div className="flex bg-black p-4 rounded-lg"><FaRegEnvelope /> </div>
                                <div className="flex flex-col">
                                    <p className="font-bold">Email Us</p>
                                    <p>susmit@eim.ae</p>
                                    <p>We reply within 24 hours</p>
                                </div>
                            </div>

                            <div className="items-center gap-1 flex gap-3 flex-row flex-1 bg-black/20 p-6 p-6 flex-col rounded-lg text-gray-100 shadow-lg shadow-white/10">
                                <div className="flex bg-black p-4 rounded-lg"><FaPhoneAlt /> </div>
                                <div className="flex flex-col">
                                    <p className="font-bold">Call Us</p>
                                    <p>+97155 1096009</p>
                                    <p>Mon-Fri, 9am-6pm EST</p>
                                </div>
                            </div>
                        
                            <div className="items-center gap-1 flex gap-3 flex-row flex-1 bg-black/20 p-6 p-6 flex-col rounded-lg text-gray-100 shadow-lg shadow-white/10">
                                <div className="flex bg-black p-4 rounded-lg"><IoLocationSharp /> </div>
                                <div className="flex flex-col">
                                <p className="font-bold">Visit Us</p>
                                <p>Office #28, 2nd Floor, Tamdeen Business Center,</p>
                                <p>Crystal Building, Al Karama,Dubai, United Arab Emirates.</p>
                                </div>
                            </div>
                       </div>

                   </div>
                </div>
            </div>
        </section>
    );
}