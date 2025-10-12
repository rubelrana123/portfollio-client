"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
 

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen sticky top-0 bg-card shadow-sm flex flex-col items-center py-6 border-r">
      <Image
        src="/images/profile.jpg"
        alt="Profile"
        className="w-28 h-28 rounded-full border mb-4"
      />
      <h2 className="text-xl font-semibold mb-6">Rafayat Rakib</h2>

      <nav className="flex flex-col space-y-2 mb-8 text-center">
        {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
          <Button
            key={item}
            variant="ghost"
            className="hover:text-primary"
            asChild
          >
            <a href={`/${item.toLowerCase()}`}>{item}</a>
          </Button>
        ))}
      </nav>

      <Separator className="my-4 w-3/4" />

      <div className="flex gap-4 text-xl mt-auto">
        <Facebook />
        <Instagram />
        <Youtube />
        <Linkedin />
      </div>

      <p className="mt-4 text-xs text-muted-foreground">© 2025 Rubel R.</p>
    </aside>
  );
}
