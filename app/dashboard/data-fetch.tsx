export default async function Posts() {
    const url = 'https://api.vercel.app/blog'
    type Post = {
        id: string
        title: string
        content: string
        author: string
        date: string
        category: string
    }
    let data = await fetch(url, { cache: 'no-store' })
    let posts: Post[] = await data.json()
    posts = posts.filter(post => parseInt(post.id) <= 5)
    console.log(posts);

    return  (
        <div className="container mx-auto">
        {posts.map((post) => (
            <div key={post.id} className="mb-6 p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <div className="text-sm text-gray-600">
                    <span className="block">Author: {post.author}</span>
                    <span className="block">Date: {post.date}</span>
                    <span className="block">Category: {post.category}</span>
                </div>
            </div>
        ))}
        </div>
      )
  }
