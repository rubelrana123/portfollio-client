import { Facebook, Instagram,  Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

 

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-16 left-0 right-0 bg-white shadow-md border-b z-50">
      <nav className="flex flex-col items-center py-4 space-y-3">
        {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            onClick={onClose}
            className="hover:text-yellow-600"
          >
            {item}
          </Link>
        ))}
      </nav>
      <div className="flex justify-center gap-4 py-3 border-t text-xl">
        <Facebook />
        <Instagram />
        <Youtube />
        <Linkedin />
      </div>
    </div>
  );
}
