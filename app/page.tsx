import Image from "next/image";
import styles from './Button.module.css'

import Link from "next/link";

export default function Home() {
  return (
    < div className="flex flex-col flex-1 items-center  bg-blue-500 font-sans dark:bg-black" >
     
      <main className="flex flex-1 w-full max-w-3xl flex-col gap-15 items-center py-15 px-16 bg-pink-500 dark:bg-black ">
         <ul className="flex flex-row gap-15 font-semibold">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about" scroll={false}>About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className="flex flex-col items-center gap-6 text-center items-center justify-center">
          <h1 className="max-w-xs text-4xl font-bold leading-10 tracking-tight text-black dark:text-zinc-50">
            Hunting Coder
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A Blog for coders by a coder. I write about web development, programming, and software
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {/* card section */}
          <h2 className="text-2xl font-semibold">Popular blog posts</h2>
          {/* card */}
          <div className="c">
            <h3 className="text-xl font-semibold">How to learn Next.js in 2026.</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              I will teach you how to learn Next.js in 2026.
            </p>
          </div>
          <div className="c">
            <h3 className="text-xl font-semibold">How to learn Next.js in 2026.</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              I will teach you how to learn Next.js in 2026.
            </p>
          </div>
          <div className="c">
            <h3 className="text-xl font-semibold">How to learn Next.js in 2026.</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              I will teach you how to learn Next.js in 2026.
            </p>
          </div>
        </div>
        <button className={styles.button}>click me</button>
      </main>
    </div >
  );
}
