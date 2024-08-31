import Links from "@/app/nav-links";
import Link from "next/link";

export default async function Page() {
    // 連番の生成関数（Clojure や PHP などでよく "range" と呼ばれる）
    const range = (start: number, stop: number, step: number) =>
        Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

    return  (
        <>
            <h1>/article</h1>
            <div className="flex flex-col">
            {range(1, 10, 1).map((id) => (
                <Link key={id} href={`/article/${id}`} className="text-blue-500">Article: {id}</Link>
            ))}
            </div>
            <Links />
        </>
      )
  }
