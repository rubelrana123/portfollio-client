"use client";

import { useState } from "react";
 
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { BarChart } from "lucide-react";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm flex justify-between items-center px-4 py-3">
      <div className="flex items-center gap-2">
        <Image
          src="https://i.ibb.co/SD7VkD4G/rubelrana-dev.png"
          alt="Profile"
          className="w-10 h-10 rounded-full border"
          width={40} height={40}
        />
        <h2 className="font-semibold">Rubel Rana</h2>
      </div>

      <button
        className="text-2xl focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <BarChart />
      </button>

      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </header>
  );
}
