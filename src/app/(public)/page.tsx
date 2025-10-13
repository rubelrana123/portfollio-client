import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#fff4db] min-h-screen flex items-center px-16">
      <div className="  mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
        
        {/* Left Text Section */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Hi, I&apos;m <span className="text-black font-bold">Rubel Rana !</span>
          </h1>
          <h2 className="text-2xl font-semibold text-black mb-4">
            A passionate <span className="text-[#fec236] font-bold">
              Full Stack Web Developer
            </span>
          </h2>
          <p className="text-[#54595F] leading-relaxed">
            Meet Rubel Rana: Full Stack Web Developer,  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vel nesciunt quas dolor veritatis ab labore quos provident iste praesentium! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nisi quisquam alias illo, quis inventore consectetur laboriosam rerum ducimus maiores est odit dolor consequatur explicabo, vero quas cupiditate obcaecati debitis ipsum vel enim iste aliquid repudiandae ad? Minima, repellendus quod optio eveniet reiciendis facilis iure iste officiis harum. Modi, aut?
          </p>

          <div className="flex flex-wrap  gap-4 mt-6 text-xl">
            <Button variant="secondary" className="border-2 border-[#FFC034] bg-amber-200 font-semibold px-4 py-5 hover:bg-amber-300 hover:text-white hover:transition-all">Hire Me</Button>
            <Button variant="secondary" className="bg-[#1DBF73] font-semibold px-4 py-5 border-2">Download Resume</Button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center md:justify-end  mt-[-80px]">
          <Image
            src="https://i.ibb.co.com/SD7VkD4G/rubelrana-dev.png"
            alt="Rubel Rana"
            height={700}
            width={700}
            className=""
          />
        </div>

      </div>
    </div>
  );
}
