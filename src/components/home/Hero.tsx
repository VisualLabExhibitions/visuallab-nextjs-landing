import Image from "next/image";

export default function Hero(){
    return(
    <div className="relative w-full h-[250px] md:h-[650px] bg-black">
             <Image 
                src="/images/banner3.jpg"
                alt="Visuallab"
                fill
                className="object-cover"
                priority
                />
        </div>
       
    );
}

