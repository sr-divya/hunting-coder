import React from 'react'
import Link from 'next/link'

const Blog = () => {
  return (
    <div>
      <div className="flex flex-col gap-5  mt-20 items-center justify-center">
        {/* card section */}
        {/* <h2 className="text-2xl font-semibold">Popular blog posts</h2> */}
        {/* card */}
        <div className="c">
          <Link href="blogpost\Hello mitro !">
            <h2 className="text-xl font-semibol cursor-pointer">How to learn Next.js in 2026.</h2>
          </Link>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            I will teach you how to learn Next.js in 2026.
          </p>
        </div>

        <div className="c">
          <Link href="blogpost\Hello mitro !">
            <h2 className="text-xl font-semibol cursor-pointer">How to learn Next.js in 2026.</h2>
          </Link>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            I will teach you how to learn Next.js in 2026.
          </p>
        </div>

        <div className="c">
          <Link href="blogpost\Hello mitro !">
            <h2 className="text-xl font-semibol cursor-pointer">How to learn Next.js in 2026.</h2>
          </Link>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            I will teach you how to learn Next.js in 2026.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blog
