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
    <div className='min-h-screen bg-gray-100 py-10 px-4'>
      
      {/* Blog Container */}
      <div className='max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8'>
        
        {/* Title */}
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>
          {blog?.data?.title}
        </h1>

        {/* Divider */}
        <div className='h-1 w-20 bg-blue-500 mb-6 rounded'></div>

        {/* Meta Info */}
        <p className='text-sm text-gray-500 mb-6'>
          Written by :  {blog?.data?.author}
        </p>

        {/* Content */}
        <div className='prose max-w-none text-gray-700 leading-relaxed'>
          {blog?.data?.content}
        </div>

      </div>
    </div>
  )
}

export default Blogpost
