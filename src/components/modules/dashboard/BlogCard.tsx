import { Delete, Edit, Eye, View } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

 
export default function BlogCard({post}: {post: any}) {
  return (
  <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
          From the Blog
        </h1>

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <Image
            className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
            // src={post?.thumbnail}
            src="https://i.ibb.co.com/b32g2wm/19362653.jpg"
            alt={post?.title}
            height={500}
            width={800}
          />

          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
            <p className="text-sm text-blue-500 uppercase">
              {post?.tags.join(", ")}
            </p>

            <Link
              href={`/blog/${post?.slug}`}
              className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl"
            >
              {post?.title}
            </Link>

            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
              {post?.content}
            </p>

            <Link
              href={`/blog/${post?.slug}`}
              className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
            >
              Read more
            </Link>

            <div className="flex items-center mt-6">
              <Image
                className="object-cover object-center w-10 h-10 rounded-full"
                // src={post?.author.picture}
                src="https://i.ibb.co.com/m6m7F4p/WIN-20220822-12-01-28-Pro-2.jpg"
                alt={post?.author.name}
                height={100}
                width={100}
              />

              <div className="mx-4">
                <h1 className="text-sm text-gray-700 dark:text-gray-200">
                  {post?.author.name}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {post?.viewCount} views
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button className="p-2 hover:text-blue-600">
                <Edit className="w-5 h-5" />
              </button>
              <button className="p-2 hover:text-red-600">
                <Delete className="w-5 h-5" />
              </button>
              <button className="p-2 hover:text-green-600">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
