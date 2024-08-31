import { Suspense } from "react";
import Links from "../nav-links";
import Posts from "./data-fetch";

export default async function Page() {
    return (
        <section>
            <Suspense fallback={<p>loading feed...</p>}>
                <Posts />
            </Suspense>
            <Links />
        </section>
    )
  }
