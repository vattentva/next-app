import Links from "@/app/nav-links";

export default async function Page({ params }: { params: { id: string } }) {
    return  (
        <>
            <article>
                <h1>{params.id}</h1>
            </article>
            <Links />
        </>
      )
  }
