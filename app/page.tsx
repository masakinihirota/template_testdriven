import Link from "next/link";
import ClientComponent from "./client/page";
import Counter from "./components/component";
import Page from "./rsc/page";

export default function Home() {
  const blogId = "123";
  return (
    <main>
      <h1>Welcome to VNS.BLUE</h1>
      <ClientComponent />
      <Counter />
      <Link href={`/blog/${blogId}`}>Blogページ</Link>
      <Page />
    </main>
  );
}
