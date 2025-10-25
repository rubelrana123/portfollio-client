import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "About Rubel Rana",
};

export default function AboutPage() {
  return (
    <section id="about" className="bg-[#fffaf0] py-16 px-6">
      <h1 className="text-4xl font-bold mb-2">About Me</h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* === Left: Profile Image === */}
        <div className="flex justify-center md:justify-start">
          <div className="rounded-xl border-4 border-[#FFC034] overflow-hidden shadow-md max-w-sm">
            <Image
              src="https://i.ibb.co.com/4RKnqpsf/profile.jpg"
              alt="Rubel Rana"
              width={300}
              height={300} 
            />
          </div>
        </div>

        {/* === Right: Content === */}
        <div className="space-y-5">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">I&apos;m Rubel Rana</h2>
            <h3 className="text-xl font-semibold text-[#54595F] mb-4">
              A Full Stack Web Developer, Content Creator, Mentor
            </h3>
            <p className="text-gray-600 leading-relaxed">
              With a passion for web development and digital creation, Rubel specializes 
              in crafting fast, scalable, and visually engaging websites. As a mentor and 
              content creator, he loves teaching others how to turn their ideas into 
              meaningful projects that make an impact.
            </p>
          </div>

          {/* === Info Section === */}
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Phone</p>
              <p className="font-medium flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFC034]" /> +8801705918931
              </p>
            </div>

            <div>
              <p className="text-gray-500">Freelance</p>
              <p className="font-medium">Available</p>
            </div>

            <div>
              <p className="text-gray-500">Residence</p>
              <p className="font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FFC034]" /> Dhaka, Bangladesh
              </p>
            </div>

            <div>
              <p className="text-gray-500">Favorite Food</p>
              <p className="font-medium">Coffee</p>
            </div>

            <div>
              <p className="text-gray-500">Email</p>
              <p className="font-medium flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FFC034]" /> rubelrana.dev@gmail.com
              </p>
            </div>

            <div>
              <p className="text-gray-500">Hobby</p>
              <p className="font-medium">Human Being</p>
            </div>
          </div>

          {/* === Button === */}
          <Button
            size="lg"
            className="bg-[#FFC034] text-black font-semibold hover:bg-yellow-400 transition-all duration-300"
          >
            Get a Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
