"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { get } from 'http';

const Blog =() => {
  const [blogs, setblogs] = useState([]);
  
  useEffect(()=>{
    async function getallblogs(){
      console.log("useefffect is runnning")
    const res=await fetch("http://localhost:3000/api/Blog");
    const data=await res.json();
    console.log(data);
    setblogs(data.allblogs);
    }

    getallblogs();
  },[]);
  return (
    <div>
      <div className="flex flex-col gap-5 px-80 items-center justify-center ">
        {/* card section */}
        {/* <h2 className="text-2xl font-semibold">Popular blog posts</h2> */}
        {/* card */}
        {blogs.map((blogitem,index)=>{
          return (
            <div className="c" key={index}>
          <Link href={`blogpost/${blogitem.slug}`}>
            <h2 className="text-xl mt-10 font-semibol cursor-pointer">{blogitem.title}</h2>
          </Link>
          <p className="text-base text-zinc-600 dark:text-zinc-400 mt-3">
            {blogitem.content.substr(0, 400)}...
          </p>
        </div>
          )
        })}
        

      </div>
    </div>
  )
}

export default Blog
