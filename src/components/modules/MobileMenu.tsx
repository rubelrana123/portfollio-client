import { navigationItems } from "@/constant";
import { Facebook, Instagram,  Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

 


export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-16 left-0 right-0 bg-white shadow-md border-b z-50">
      <nav className="flex flex-col items-center py-4 space-y-3">
        {navigationItems.map((item) => (
          <Link
            key={item?.label}
            href={`/${item.href}`}
            onClick={onClose}
            className="hover:text-yellow-600"
          >
            {item?.label}
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
