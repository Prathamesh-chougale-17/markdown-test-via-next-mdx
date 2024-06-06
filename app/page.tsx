import Image from "next/image";
import Example from "./example.mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Code } from "./code";

export default function Home() {
  return (
    <div>
      <h1>Next.js + MDX</h1>
      {/* <MDXRemote
        source={`# Hello World

      This is from Server Components!
      `}
      />
      <Example /> */}
      <Code code="`const numbers = [1, 2, 3]{:js}`" />
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="bg-white"
        width={72}
        height={16}
      />
    </div>
  );
}
