"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import type { Project } from "@/type";

type ProjectDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
  onSave: (project: Project) => void;
};

export function ProjectDialog({ open, onOpenChange, project, onSave }: ProjectDialogProps) {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    thumbnail: "",
    liveUrl: "",
    clientRepoUrl: "",
    serverRepoUrl: "",
    features: "",
    technologies: "",
    isFeatured: false,
  });

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        slug: project.slug,
        description: project.description,
        thumbnail: project.thumbnail || "",
        liveUrl: project.liveUrl || "",
        clientRepoUrl: project.clientRepoUrl || "",
        serverRepoUrl: project.serverRepoUrl || "",
        features: project.features.join(", "),
        technologies: project.technologies.join(", "),
        isFeatured: project.isFeatured,
      });
    } else {
      setFormData({
        title: "",
        slug: "",
        description: "",
        thumbnail: "",
        liveUrl: "",
        clientRepoUrl: "",
        serverRepoUrl: "",
        features: "",
        technologies: "",
        isFeatured: false,
      });
    }
  }, [project, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProject: Project = {
      id: project?.id || Date.now(),
      title: formData.title,
      slug:
        formData.slug ||
        formData.title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, ""),
      description: formData.description,
      thumbnail: formData.thumbnail,
      liveUrl: formData.liveUrl,
      clientRepoUrl: formData.clientRepoUrl,
      serverRepoUrl: formData.serverRepoUrl,
      features: formData.features.split(",").map((f) => f.trim()).filter(Boolean),
      technologies: formData.technologies.split(",").map((t) => t.trim()).filter(Boolean),
      isFeatured: formData.isFeatured,
      owner: project?.owner || {
        id: 3,
        name: "Rubel Rana",
        email: "rubelrana@gmail.com",
        picture: null,
      },
      ownerId: project?.ownerId || 3,
      createdAt: project?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    onSave(newProject);
  };

  return (
    <div>
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{project ? "Edit Project" : "Create New Project"}</DialogTitle>
          <DialogDescription>
            {project ? "Update project details" : "Add a new project to your portfolio"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Project title"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="slug">Slug</Label>
            <Input
              id="slug"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              placeholder="auto-generated-if-empty"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Brief project description"
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="thumbnail">Thumbnail URL</Label>
              <Input
                id="thumbnail"
                value={formData.thumbnail}
                onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                placeholder="https://i.ibb.co/example.jpg"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="liveUrl">Live URL</Label>
              <Input
                id="liveUrl"
                type="url"
                value={formData.liveUrl}
                onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                placeholder="https://example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="clientRepoUrl">Client Repo</Label>
              <Input
                id="clientRepoUrl"
                value={formData.clientRepoUrl}
                onChange={(e) => setFormData({ ...formData, clientRepoUrl: e.target.value })}
                placeholder="https://github.com/username/client"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="serverRepoUrl">Server Repo</Label>
              <Input
                id="serverRepoUrl"
                value={formData.serverRepoUrl}
                onChange={(e) => setFormData({ ...formData, serverRepoUrl: e.target.value })}
                placeholder="https://github.com/username/server"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="features">Features (comma separated)</Label>
            <Input
              id="features"
              value={formData.features}
              onChange={(e) => setFormData({ ...formData, features: e.target.value })}
              placeholder="Authentication, Dashboard, API integration"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="technologies">Technologies (comma separated)</Label>
            <Input
              id="technologies"
              value={formData.technologies}
              onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
              placeholder="React, Next.js, TypeScript, Prisma"
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="isFeatured">Featured Project</Label>
            <Switch
              id="isFeatured"
              checked={formData.isFeatured}
              onCheckedChange={(checked: boolean) => setFormData({ ...formData, isFeatured: checked })}
            />
          </div>

          <DialogFooter className="mt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">{project ? "Update Project" : "Create Project"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>      
    </div>

  );
}
