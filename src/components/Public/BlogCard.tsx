import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Post } from "@/type"
 
export function BlogCard({
  id,
  title,
  slug,
  content,
  thumbnail,
  tags,
  createdAt
}: Post) {

  const dateFormatted = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block border border-border bg-card overflow-hidden transition-colors hover:border-foreground"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-3">
            <div className="text-sm text-muted-foreground">
              <time dateTime={createdAt}>{dateFormatted}</time>
            </div>

            <h3 className="font-sans text-xl font-medium leading-tight text-foreground transition-colors group-hover:text-foreground">
              {title}
            </h3>

            <p className="text-pretty leading-relaxed text-muted-foreground">
              {content.slice(0, 120)}...
            </p>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  )
}
