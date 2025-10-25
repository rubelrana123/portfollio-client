 
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#fff4db] min-h-screen flex items-center px-16">
      <div className="  mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
        {/* Left Text Section */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Hi, I&apos;m{" "}
            <span className="text-black font-bold">Rubel Rana !</span>
          </h1>
          <h2 className="text-2xl font-semibold text-black mb-4">
            A passionate{" "}
            <span className="text-[#fec236] font-bold">
              Full Stack Web Developer
            </span>
          </h2>
          <p className="text-[#54595F] leading-relaxed">
            Hi! I&apos;m Rubel Rana — a frontend web developer passionate
            about building modern, scalable, and responsive web applications. I
            specialize in React.js, Redux, Tailwind CSS, Material UI, Next.js,
            TypeScript, and Framer Motion to create intuitive and visually
            appealing user interfaces. I also have a foundation in Node.js,
            Express.js, and MongoDB (MERN stack) to bridge frontend and backend
            seamlessly.
          </p>

          <div className="flex flex-wrap  gap-4 mt-6 text-xl">
            {/* Hire Me Button */}
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rubelrana.dev@gmail.com&su=Job Opportunity&body=Hi Rubel,"
              className="border-2 border-[#FFC034] bg-amber-200 font-semibold px-4 py-3 rounded-md hover:bg-amber-300 hover:text-white transition-all inline-flex items-center justify-center"
            >
              Hire Me
            </Link>

            {/* Download Resume Button */}
            <Link
              href="https://drive.google.com/file/d/1pOu5qZ5NF6xdyHFXOR6yZKINt3YIyZiS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1DBF73] font-semibold px-4 py-3 rounded-md text-white border-2 border-[#1DBF73] hover:opacity-90 transition-all inline-flex items-center justify-center"
            >
              View Resume
            </Link>
            {/* <Button variant="secondary" className="border-2 border-[#FFC034] bg-amber-200 font-semibold px-4 py-5 hover:bg-amber-300 hover:text-white hover:transition-all">Hire Me</Button>
            <Button variant="secondary" className="bg-[#1DBF73] font-semibold px-4 py-5 border-2">Download Resume</Button>
          */}
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
