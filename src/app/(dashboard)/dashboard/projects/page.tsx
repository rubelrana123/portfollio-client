"use client"

import {  useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Pencil, Trash2, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { ProjectDialog } from "@/components/Dashboard/Dialog/ProjectDialog"
import { DeleteDialog } from "@/components/Dashboard/Dialog/DeleteDialog"

// ✅ Match Prisma Model
export interface Project {
  id: number
  title: string
  slug: string
  description: string
  thumbnail?: string
  liveUrl?: string
  clientRepoUrl?: string
  serverRepoUrl?: string
  features: string[]
  isFeatured: boolean
  ownerId: number
  createdAt: string
  updatedAt: string
}

// const initialProjects: Project[] = [
//   {
//     id: 1,
//     title: "E-commerce Platform",
//     slug: "ecommerce-platform",
//     description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
//     thumbnail: "https://i.ibb.co/9njWyRY/screencapture-kajolcreative-web-app-2022-12-04-20-28-11.png",
//     liveUrl: "https://example.com/ecommerce",
//     clientRepoUrl: "https://github.com/rubelrana/ecommerce-client",
//     serverRepoUrl: "https://github.com/rubelrana/ecommerce-server",
//     features: ["Next.js", "Prisma", "Stripe", "Tailwind"],
//     isFeatured: true,
//     ownerId: 1,
//     createdAt: "2025-01-10T12:00:00Z",
//     updatedAt: "2025-01-15T12:00:00Z",
//   },
//   {
//     id: 2,
//     title: "Portfolio Website",
//     slug: "portfolio-website",
//     description: "Modern portfolio website showcasing my skills and blog posts.",
//     thumbnail: "https://i.ibb.co/C2vd68H/screencapture-recycle-clothh-web-app-2022-12-04-15-40.png",
//     liveUrl: "https://example.com/portfolio",
//     clientRepoUrl: "https://github.com/rubelrana/portfolio",
//     serverRepoUrl: "",
//     features: ["Next.js", "Framer Motion", "MDX"],
//     isFeatured: false,
//     ownerId: 1,
//     createdAt: "2025-02-05T10:00:00Z",
//     updatedAt: "2025-02-10T10:00:00Z",
//   },
// ]

 const ProjectsPage =  () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [deletingProjectId, setDeletingProjectId] = useState<number | null>(null)
 
   useEffect(() => {
     const fetchBlogs = async () => {
       try {
         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`, {
           cache: "no-store",
         });
         const json = await res.json();
         if (json?.data) setProjects(json.data);
       } catch (error) {
         console.error("Failed to fetch blogs:", error);
       }
     };
     fetchBlogs();
   }, []);
 
  const handleCreate = (data: Omit<Project, "id" | "createdAt" | "updatedAt" | "ownerId">) => {
    const newProject: Project = {
      ...data,
      id: Date.now(),
      ownerId: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setProjects([newProject, ...projects])
    setIsDialogOpen(false)
  }

  const handleUpdate = (updated: Project) => {
    setProjects(projects.map((p) => (p.id === updated.id ? updated : p)))
    setIsDialogOpen(false)
    setEditingProject(null)
  }

  const handleDelete = () => {
    if (deletingProjectId) {
      setProjects(projects.filter((p) => p.id !== deletingProjectId))
      setIsDeleteDialogOpen(false)
      setDeletingProjectId(null)
    }
  }

  const openEditDialog = (project: Project) => {
    setEditingProject(project)
    setIsDialogOpen(true)
  }

  const openDeleteDialog = (id: number) => {
    setDeletingProjectId(id)
    setIsDeleteDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    setEditingProject(null)
  }

  return (
    <div className="flex flex-col gap-8 p-4 pt-20 sm:p-6 lg:p-8 lg:pt-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="mb-2 font-sans text-3xl font-semibold text-foreground">Projects</h1>
          <p className="text-muted-foreground">Manage your portfolio projects</p>
        </div>
        <Button onClick={() => setIsDialogOpen(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>

      {/* Project Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="group flex h-auto flex-col overflow-hidden border border-border bg-card">
            {/* Thumbnail */}
            <div className="relative aspect-video max-h-52 overflow-hidden bg-muted">
              <Image
                src={project.thumbnail || "/placeholder.svg"}
                alt={project.title}
                fill
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {project.isFeatured && (
                <div className="absolute right-2 top-2 rounded-full bg-primary/20 px-2 py-1 text-xs font-medium text-primary">
                  Featured
                </div>
              )}
            </div>

            {/* Content */}
            <CardHeader>
              <CardTitle className="text-card-foreground">{project.title}</CardTitle>
              <CardDescription className="line-clamp-2 text-muted-foreground">{project.description}</CardDescription>
            </CardHeader>

            <CardContent className="mt-auto space-y-3">
              {/* Tags / Features */}
              <div className="flex flex-wrap gap-2">
                {project.features.map((tag) => (
                  <span key={tag} className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent"
                  onClick={() => openEditDialog(project)}
                >
                  <Pencil className="mr-2 h-3 w-3" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" onClick={() => openDeleteDialog(project.id)}>
                  <Trash2 className="h-3 w-3" />
                </Button>
                {project.liveUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                )}
                {project.clientRepoUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.clientRepoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3" />
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Dialogs */}
      <ProjectDialog
        open={isDialogOpen}
        onOpenChange={closeDialog}
        project={editingProject}
        onSave={editingProject ? handleUpdate : handleCreate}
      />

      <DeleteDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onConfirm={handleDelete}
        title="Delete Project"
        description="Are you sure you want to delete this project? This action cannot be undone."
      />
    </div>
  )
}

export default ProjectsPage;