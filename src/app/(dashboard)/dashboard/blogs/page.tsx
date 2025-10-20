 
import BlogCard from "@/components/modules/dashboard/BlogCard";

 
export default  async function BlogsPage() {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`)
  const posts = await data.json()
  console.log(posts, "here post data all")
  return (
    <div>
        <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
          From the Blog
        </h1>

      {
        posts.data.map((post: any) => <BlogCard key={post._id} post={post} />)
      }
       </div>
    </section>
    </div>
  )
}
