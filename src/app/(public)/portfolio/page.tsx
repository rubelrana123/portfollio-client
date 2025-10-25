import ProjectCard from "@/components/Public/ProjectCard";
import { Project } from "@/type";
import React from "react";

// const projects = [
//     {
//         id : 1,
//         title: "Personal Blog",
//         description: "A blog platform built with Next.js and Markdown support.",
//         link: "https://yourblog.example.com",
//     },
//     {
//         id : 2,
//         title: "E-commerce Store",
//         description: "A full-stack e-commerce application using React and Node.js.",
//         link: "https://yourstore.example.com",
//     },
//     {
//         id : 3,
//         title: "Portfolio Website",
//         description: "A responsive portfolio to showcase my projects and skills.",
//         link: "https://yourportfolio.example.com",
//     },
// ];

const PortfolioPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`);
    const projects = await res.json();
    console.log("Fetched projects:", projects);
    return (
        <main className="max-w-6xl mx-auto py-10 px-4 bg-[#fff4db]">
            <h1 className="text-3xl font-bold mb-6">My Portfolio</h1>
            <div className="grid grid-cols-3 gap-6">
                {projects?.data?.map((project : Project) => (
                   <ProjectCard key={project.id} project= {project}/>
                ))}
            </div>
        </main>
    );
};

export default PortfolioPage;