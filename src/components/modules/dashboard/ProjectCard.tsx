import Image from "next/image";

 
export default function ProjectCard() {
  return (
<div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xs xl:max-w-2xl mx-auto border-2 border-amber-600">  
    <div className="p-4">
           <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-2">Project Title</h2>
            <p className="text-sm text-gray-600 mb-4">Draft</p>
           </div>
           <Image src="https://i.ibb.co/C2vd68H/screencapture-recycle-clothh-web-app-2022-12-04-15-47-03.png" alt="E-commerce PlatForm" width={300} height={180} className="object-cover" />
        </div>
        <div>
            <h1>E-commerce PlatForm</h1>
            <p>A full-stack e-commerce solution with payment integration and admin dashboard</p>
            <p>Tech Stack: Next.js, Tailwind CSS, Node.js, Express, MongoDB, Stripe API</p>
            <div>
                <button>Edit Project</button>
                <button>delete</button>  
                <button>URL</button>
            </div>
        </div>
    </div>

  )
}
