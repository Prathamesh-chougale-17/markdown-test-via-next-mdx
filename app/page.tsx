import Image from "next/image";
// import Example from "./example.mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function Home() {
  return (
    <div>
      <h1>Next.js + MDX</h1>
      <MDXRemote
        source={`# Hello World

      This is from Server Components!
      `}
      />
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  );
}
