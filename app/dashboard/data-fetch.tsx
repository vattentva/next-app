import { Blog } from "@/lib/blogs";

export default async function Posts() {
    const url = 'https://api.vercel.app/blog'
    let data = await fetch(url, { cache: 'no-store' })
    let blogs: Blog[] = await data.json()

    blogs = blogs.filter(blog => blog.id <= 3)

    return  (
        <>
        {blogs.map((blog) => (
            <div key={blog.id} className="mb-6 p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{blog.title}</h3>
                <p className="text-gray-700 mb-4">{blog.content}</p>
                <div className="text-sm text-gray-600">
                    <span className="block">Author: {blog.author}</span>
                    <span className="block">Date: {blog.date}</span>
                    <span className="block">Category: {blog.category}</span>
                </div>
            </div>
        ))}
        </>
      )
  }
