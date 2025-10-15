"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
 

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen sticky top-0 bg-card shadow-sm flex flex-col items-center py-6 border-r">
      <Image
        src="https://rubelrana.netlify.app/static/media/tinywow_profile_photo_9101936.6359affc412b6bf13660.png"
        alt="Profile"
        className="w-28 h-28 rounded-full border-4 mb-4 border-amber-300"
        
        height={500}
        width={500}
        
      />
      <h2 className="text-xl font-semibold mb-6">Rubel Rana</h2>

      <nav className="flex flex-col space-y-2 mb-8 text-center">
        {["Home", "About", "Portfolio","Blogs", "Contact"].map((item) => (
          <Button
            key={item}
            variant="link"
            className="hover:text-primary"
            asChild
          >
            < Link href={`/${item.toLowerCase()}`}>{item}</Link>
          </Button>
        ))}
      </nav>

      {/* <Separator className="my-4 w-3/4" /> */}

      <div className="flex gap-4 text-xl mt-auto text-amber-300">
        <Facebook className= "rounded "/>
        <Instagram className= "rounded "/>
        <Youtube className= "rounded "/>
        <Linkedin className= "rounded "/>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">© 2025 Rubel R.</p>
    </aside>
  );
}
