import blogs, { Blog } from '@/lib/blogs';

export default async function Page({ params }: { params: { id: string } }) {
  const articles: Blog[] = blogs;
  const article = articles.find((a) => a.id == parseInt(params.id));
  if (article === undefined) return null;
    
  return  (
    <article>
      <h1>{params.id}</h1>
      <p>{article.content}</p>
    </article>
  );
}
