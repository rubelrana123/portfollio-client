"use client"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Post } from "@/type"

interface AddBlogModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  post: Partial<Post> | null
  onSubmit?: (payload: Partial<Post>) => void
}

export function AddBlogModal({
  open,
  onOpenChange,
  post,
  onSubmit,
}: AddBlogModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    thumbnail: "",
    tags: "",
    isFeatured: false,
  })

  // 🧩 Pre-fill data in edit mode
  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title ?? "",
        slug: post.slug ?? "",
        content: post.content ?? "",
        thumbnail: post.thumbnail ?? "",
        tags: post.tags ? post.tags.join(", ") : "",
        isFeatured: post.isFeatured ?? false,
      })
    } else {
      // Reset form when adding new post
      setFormData({
        title: "",
        slug: "",
        content: "",
        thumbnail: "",
        tags: "",
        isFeatured: false,
      })
    }
  }, [post, open])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const payload: Partial<Post> = {
      title: formData.title.trim(),
      slug:
        formData.slug.trim() ||
        formData.title.toLowerCase().replace(/\s+/g, "-"),
      content: formData.content.trim(),
      thumbnail: formData.thumbnail.trim(),
      tags: formData.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      isFeatured: formData.isFeatured,
    }

    // Callback to parent if provided
    onSubmit?.(payload)

    // Close modal after submit
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {post ? "Edit Blog Post" : "Add New Blog Post"}
          </DialogTitle>
          <DialogDescription>
            {post
              ? "Update your existing blog post details below."
              : "Create a new blog post with title, content, and image."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter blog title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>

          {/* Slug */}
          <div className="grid gap-2">
            <Label htmlFor="slug">Slug</Label>
            <Input
              id="slug"
              placeholder="auto-generated-from-title"
              value={formData.slug}
              onChange={(e) =>
                setFormData({ ...formData, slug: e.target.value })
              }
            />
          </div>

          {/* Thumbnail */}
          <div className="grid gap-2">
            <Label htmlFor="thumbnail">Thumbnail URL</Label>
            <Input
              id="thumbnail"
              placeholder="https://example.com/image.png"
              value={formData.thumbnail}
              onChange={(e) =>
                setFormData({ ...formData, thumbnail: e.target.value })
              }
            />
          </div>

          {/* Content */}
          <div className="grid gap-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              placeholder="Write your blog post content..."
              rows={6}
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              required
            />
          </div>

          {/* Tags */}
          <div className="grid gap-2">
            <Label htmlFor="tags">Tags (comma separated)</Label>
            <Input
              id="tags"
              placeholder="Next.js, Prisma, TypeScript"
              value={formData.tags}
              onChange={(e) =>
                setFormData({ ...formData, tags: e.target.value })
              }
            />
          </div>

          {/* Featured */}
          <div className="grid gap-2">
            <Label htmlFor="isFeatured">Featured</Label>
            <Select
              value={formData.isFeatured ? "true" : "false"}
              onValueChange={(val) =>
                setFormData({ ...formData, isFeatured: val === "true" })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="false">No</SelectItem>
                <SelectItem value="true">Yes</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Footer */}
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">
              {post ? "Update Post" : "Create Post"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
