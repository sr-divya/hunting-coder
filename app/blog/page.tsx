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
      <div className=" py-10 flex flex-col gap-8 px-120 items-center justify-center ">
        
        {blogs.map((blogitem,index)=>{
          return (
            <div className="p-6 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.02] transition duration-300 bg-white dark:bg-zinc-900" key={index}>
          <Link href={`blogpost/${blogitem.slug}`}>
            <h2 className="text-xl  font-semibold cursor-pointer">{blogitem.title}</h2>
          </Link>
          <p className="text-base text-zinc-600 dark:text-zinc-400 mt-3">
            {blogitem.content.substr(0, 100)}...
          </p>
        </div>
          )
        })}
        

      </div>
    </div>
  )
}

export default Blog
