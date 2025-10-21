"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Pencil, Trash2, Eye } from "lucide-react";
 
import { DeleteDialog } from "@/components/Dashboard/Dialog/DeleteDialog";
import { Post } from "@/type";
import { AddBlogModal } from "@/components/Dashboard/Dialog/BlogDialog";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Post[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Post | null>(null);
  const [deletingBlogId, setDeletingBlogId] = useState<number | null>(null);

  // ✅ Fetch posts on client side
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`, {
          cache: "no-store",
        });
        const json = await res.json();
        if (json?.data) setBlogs(json.data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  // ✅ Create new post
  const handleCreate = (blog: Omit<Post, "id" | "createdAt" | "updatedAt" | "author">) => {
    const newBlog: Post = {
      ...blog,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      author: {
        id: 3,
        name: "Rubel Rana",
        email: "rubelrana@gmail.com",
        picture: null,
      },
      viewCount: 0,
      isFeatured: false,
      authorId: 3,
    };

    setBlogs((prev) => [newBlog, ...prev]);
    setIsDialogOpen(false);
  };

  // ✅ Update existing post
  const handleUpdate = (updatedBlog: Post) => {
    setBlogs((prev) => prev.map((b) => (b.id === updatedBlog.id ? updatedBlog : b)));
    setEditingBlog(null);
    setIsDialogOpen(false);
  };

  // ✅ Delete post
  const handleDelete = () => {
    if (deletingBlogId !== null) {
      setBlogs((prev) => prev.filter((b) => b.id !== deletingBlogId));
      setDeletingBlogId(null);
      setIsDeleteDialogOpen(false);
    }
  };

  const openEditDialog = (blog: Post) => {
    setEditingBlog(blog);
    setIsDialogOpen(true);
  };

  const openDeleteDialog = (id: number) => {
    setDeletingBlogId(id);
    setIsDeleteDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setEditingBlog(null);
  };

  return (
    <div className="flex flex-col gap-8 p-4 pt-20 sm:p-6 lg:p-8 lg:pt-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="mb-2 font-sans text-3xl font-semibold text-foreground">Blog Posts</h1>
          <p className="text-muted-foreground">Manage your blog content</p>
        </div>
        <Button onClick={() => setIsDialogOpen(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          New Post
        </Button>
      </div>

      {/* Blog Cards */}
      <div className="space-y-4">
        {blogs.map((blog) => (
          <Card key={blog.id} className="overflow-hidden border-border bg-card">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative aspect-video w-full max-h-52 overflow-hidden bg-muted md:w-64">
                <Image
                  src={blog.thumbnail || "/placeholder.svg"}
                  alt={blog.title}
                  fill
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col">
                <CardHeader>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <Badge variant={blog.isFeatured ? "default" : "secondary"}>
                      {blog.isFeatured ? "Featured" : "Normal"}
                    </Badge>
                    <span className="text-xs text-muted-foreground">Views: {blog.viewCount}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <CardTitle className="text-card-foreground">{blog.title}</CardTitle>
                  <CardDescription className="line-clamp-2 text-muted-foreground">
                    {blog.content}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto">
                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => openEditDialog(blog)}>
                      <Pencil className="mr-2 h-3 w-3" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => openDeleteDialog(blog.id)}>
                      <Trash2 className="mr-2 h-3 w-3" />
                      Delete
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer">
                        <Eye className="mr-2 h-3 w-3" />
                        View
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Blog Dialog (Create/Edit) */}
      <AddBlogModal
        open={isDialogOpen}
        onOpenChange={closeDialog}
        blog={editingBlog}
        onSave={editingBlog ? handleUpdate : handleCreate}
      />

      {/* Delete Confirmation */}
      <DeleteDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onConfirm={handleDelete}
        title="Delete Blog Post"
        description="Are you sure you want to delete this blog post? This action cannot be undone."
      />
    </div>
  );
}
