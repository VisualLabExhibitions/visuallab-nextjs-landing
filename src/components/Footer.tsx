import Image from "next/image";


export default function Footer(){
    return(
        <div>
            <section className="bg-black text-white py-16">
                <footer className="flex max-w-6xl mx-auto gap-10">
                    <div className="flex-1 flex flex-col item-starts">
                        <Image
                        src={"/images/logo-white.png"}
                        width={150}
                        height={150}
                        alt="Visual Lab"
                        className="mt-0"
                        />
                        <p>Visual Lab, based in Dubai, creates custom, innovative exhibition stands worldwide. With expert designers and project managers, we deliver unique, eye-catching environments that boost brand visibility, engagement, and sales.</p>
                    </div>               
                    <div className="flex-1">
                        <h2 className="text-2xl pb-6">Userful Links</h2>                        
                        <li>Home</li>
                        <li>Contact Us</li>
                        <li>Our Works</li>
                        <li>Exhibition Stands</li>
                        <li>Stans</li>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl pb-6">Contact Us</h2>
                        <li>Call Us +971 55 109 6009</li>
                        <li>Address Al Karama, Dubai, United Arab Emirates.</li>
                        <li>Email susmit@eim.ae</li>             
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl pb-6">Our Location</h2>
                         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7217.693034413815!2d55.297377!3d25.242094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f432075aeb0cf%3A0x53270e6ae7ba35cd!2sVisual%20Lab!5e0!3m2!1sen!2sae!4v1770897843173!5m2!1sen!2sae"
                         width={320} 
                         height={320} 
                         style={{border:0}} 
                         allowFullScreen 
                         loading="lazy" 
                         referrerPolicy="no-referrer-when-downgrade"
                         ></iframe>                
                    </div>
                </footer>
            </section>
        </div>
    );
}