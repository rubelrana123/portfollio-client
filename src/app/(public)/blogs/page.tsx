import { BlogCard } from "@/components/Public/BlogCard";
import { Button } from "@/components/ui/button";
import { Post } from "@/type";


export default async function page() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`);
  const posts = await data.json();
  console.log("Fetched posts:", posts);
  return (
    <div>
 
      <section className="w-full my-6">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient">
              Features Post
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts?.data?.map((post : Post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              className="px-8 py-3 border border-card hover:border-primary transition-all duration-300"
            >
              More Blogs
            </Button>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
