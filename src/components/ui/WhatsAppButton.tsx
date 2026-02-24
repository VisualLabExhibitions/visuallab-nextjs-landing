import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971551096009"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6
        bg-green-500 text-white
        p-4 rounded-full shadow-xl
        flex items-center justify-center
        hover:bg-green-600
        animate-bounce
        transition-all duration-300
        z-50
      "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}