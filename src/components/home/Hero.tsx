import Image from "next/image";

export default function Hero(){
    return(
    <div className="relative w-full h-[500px] sm:h-[600px] md:h-[650px]">
             <Image 
                src="/images/banner.png"
                alt="Visuallab"
                fill
                className="object-cover"
                priority
                />
        </div>
       
    );
}

