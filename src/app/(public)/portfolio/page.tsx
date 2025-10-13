import React from "react";

const projects = [
    {
        title: "Personal Blog",
        description: "A blog platform built with Next.js and Markdown support.",
        link: "https://yourblog.example.com",
    },
    {
        title: "E-commerce Store",
        description: "A full-stack e-commerce application using React and Node.js.",
        link: "https://yourstore.example.com",
    },
    {
        title: "Portfolio Website",
        description: "A responsive portfolio to showcase my projects and skills.",
        link: "https://yourportfolio.example.com",
    },
];

const PortfolioPage = () => {
    return (
        <main className="max-w-3xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-6">My Portfolio</h1>
            <div className="grid gap-6">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="border rounded-lg p-5 shadow hover:shadow-lg transition"
                    >
                        <h2 className="text-xl font-semibold">{project.title}</h2>
                        <p className="text-gray-600 mb-2">{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default PortfolioPage;