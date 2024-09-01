import { Suspense } from "react";
import Posts from "./data-fetch";
import Sample from "./route-handler";

export default async function Page() {
    return (
        <Suspense fallback={<p>loading feed...</p>}>
            <Sample />
            {/* <Posts /> */}
        </Suspense>
    )
  }
