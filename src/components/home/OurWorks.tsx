import Image from "next/image";

export default function OurWorks() {
  const images = [
    "/images/OurWorks/01.webp",
    "/images/OurWorks/02.webp",
    "/images/OurWorks/03.webp",
    "/images/OurWorks/04.webp",
    "/images/OurWorks/05.webp",
    "/images/OurWorks/06.webp",
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-[var(--theme-primary)]">
          From concept to creation, our work defines exhibition excellence
        </h2>
   
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-[203px] rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-contain hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
