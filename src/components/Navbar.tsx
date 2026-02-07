import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <section className="max-w-6xl mx-auto flex">
        <div className="flex-1">Phone: +971 55 109 6009</div>
        <div className="flex-1">adf</div>
      </section>
    <nav className="bg-gray-200 shadow-md text-black">
      <div className="max-w-6xl mx-auto py-3 px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">Visual Lab</div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 mt-2 md:mt-0">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/about" className="hover:text-blue-500">About Us</Link>
          <Link href="/services/exhibition-building" className="hover:text-blue-500">Exhibition Building</Link>
          <Link href="/services/modular-design" className="hover:text-blue-500">Modular Design</Link>
          <Link href="/services/custom-stands" className="hover:text-blue-500">Custom Stands Solutions</Link>
        </div>
      </div>
    </nav>
    </div>
  );
}


