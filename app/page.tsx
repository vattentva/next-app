import Links from "./nav-links";
import SortProducts from "./history-api";

export default function Page() {
  // throw new Error('This is a test error to trigger the GlobalError component')
  return  (
    <>
      <h1>Hello, HomePage</h1>
      <SortProducts />
      <Links />
    </>
  )
}
