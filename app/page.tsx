import Image from "next/image";
import styles from './Button.module.css';

import Link from "next/link";

export default function Home() {
  return (
    < div className="flex flex-col flex-1 items-center font-sans" >

      <main className="flex flex-1 w-full max-w-3xl flex-col gap-10 items-center py-10 px-16 ">
        <div className="   flex flex-col items-center gap-6 text-center items-center justify-center">

          {/* <Image className="rounded-full" src="/a4.webp" alt="Next.js" width={300} height={100}/> */}
          <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
            <Image
              src="/a4.webp"
              alt="Next.js"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          <h1 className="max-w-xs text-2xl font-bold leading-10 tracking-tight text-black dark:text-zinc-50">
            {"<HuntingCoder/>"}
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A Blog for coders by a coder. I write about web development, programming, and software
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {/* card section */}
          <h2 className="text-3xl font-bold">Latest Blogs</h2>
          {/* card */}
          <div className="flex flex-col gap-3 p-5 border border-zinc-200 dark:border-zinc-700 rounded-lg">
            <h3 className="text-xl font-semibold">How to learn Next.js in 2026.</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              I will teach you how to learn Next.js in 2026.
            </p>
            <button className="text-white bg-black p-2 rounded-lg text-sm">Read More</button>
          </div>
          <div className="flex flex-col gap-3 p-5 border border-zinc-200 dark:border-zinc-700 rounded-lg">
            <h3 className="text-xl font-semibold">How to learn Next.js in 2026.</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              I will teach you how to learn Next.js in 2026.
            </p>
            <button className="text-white bg-black p-2 rounded-lg text-sm">Read More</button>
          </div>
          <div className="flex flex-col gap-3 p-5 border border-zinc-200 dark:border-zinc-700 rounded-lg">
            <h3 className="text-xl font-semibold">How to learn Next.js in 2026.</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              I will teach you how to learn Next.js in 2026.
            </p>
            <button className="text-white bg-black p-2 rounded-lg text-sm">Read More</button>
          </div>
        </div>
        {/* <button className={styles.button}>click me</button> */}
      </main>
    </div >
  );
}
