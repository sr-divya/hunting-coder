"use client"

import React, { useEffect, useState } from 'react'

const Blogpost =({ params }: { params: { id: string } }) => {

  const [blog, setblog] = useState<any>(null);
  
  useEffect(() => {
    async function getallblogs() {
      const { id } = await params;
      const decodedId = decodeURIComponent(id);
      console.log("useefffect is runnning")
      const res = await fetch(`http://localhost:3000/api/getblog?slug=${decodedId}`);
      const data = await res.json();
      console.log("API data",data);
      setblog(data);
      // console.log("blog data is ",blog)
    }
    getallblogs();
  }, []);

  return (
    <div className='mt-20 px-80 py-10'>
      <h1 className='text-4xl pb-5'>Title of the page : {blog?.data?.title}</h1>
      <hr />
      <p className='mt-8'>{blog?.data?.content}</p>
    </div>
  )
}

export default Blogpost
