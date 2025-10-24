import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/type";
import WordLimitText from "@/utils/WordLimitText";

export default function ProjectCard({ project }: { project: Project }) {
  console.log(project?.thumbnail);
  console.log(project, "project here");
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full5">
        <div className="relative">
          <Image
            src="https://i.ibb.co/C2vd68H/screencapture-recycle-clothh-web-app-2022-12-04-15-47-03.png"
            alt="Product image"
            className="w-full h-64 object-cover"
            height={400}
            width={300}
          />
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </span>
          <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
            <svg
              className="w-4 h- text-center text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                {project?.title}
              </h2> 
            </div>
          </div>
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>

          </div>
          {/* <p className="text-gray-600 text-sm mb-4">{project?.description}</p>
           */}
           <WordLimitText text={project.description} id={project.id} />

          <div className="flex items-center justify-between mb-4">
            {project?.technologies && project?.technologies.length > 0 ? (
              <div className="flex items-center space-x-2">
                {project?.technologies.map((tech: string, index: number) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            ) : null}
          </div>
          <div className="flex flex-wrap space-x-3 pt-2">
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-primary transition-colors duration-300"
              asChild
            >
              <Link
                href={project?.liveUrl as string}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-primary transition-colors duration-300"
              asChild
            >
              <Link
                href={project?.clientRepoUrl as string}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                Client Source
              </Link>
            </Button>
            {project?.serverRepoUrl && (
              <Button
                variant="ghost"
                size="sm"
                className="hover:text-primary transition-colors duration-300"
                asChild
              >
                <Link
                  href={project?.serverRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Server Source
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
