import blogs, { Blog } from '@/lib/blogs';
import Link from 'next/link';

export default async function Page() {
  // 連番の生成関数（Clojure や PHP などでよく "range" と呼ばれる）
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
  const articles: Blog[] = blogs;

  return  (
    <div className="flex flex-col">
      {articles.map((article) => (
        <Link key={article.id} href={`/article/${article.id}`} className="text-blue-500">
                    [{article.id}]: {article.title}
        </Link>
      ))}
    </div>
  );
}
