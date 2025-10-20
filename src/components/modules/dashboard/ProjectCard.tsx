import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Delete, Edit, Link } from "lucide-react";
import Image from "next/image";

 
export default function ProjectCard() {
  return (
 
<div className="flex justify-center items-center min-h-screen">
    <div className="max-w-[720px] mx-auto">
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                <Image
                    src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                  
                 alt="card-image" className="object-cover w-full h-full"
                 height={500} width={500}
                 />
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        Apple AirPods
                    </p>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        $95.00
                    </p>
                </div>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                    With plenty of talk and listen time, voice-activated Siri access, and an
                    available wireless charging case.
                </p>
                <div>
                    <Badge className="mt-4">Headphones</Badge>
                    <Badge className="mt-4 ml-2">Apple</Badge>  
                    <Badge className="mt-4 ml-2">Accessories</Badge>
                    <Badge className="mt-4 ml-2">Accessories</Badge>

                </div>
            </div>
            <div className="flex justify-between p-6 pt-0">
              <div>
                <Edit /> 
              </div>
              <div>
                <Delete /> 
              </div>
              <div>
                <Link />
              </div>
 
            </div>
        </div>
    </div>
</div>

  )
}
