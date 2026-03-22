import React from 'react'

const Blogpost = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
     const decodedId = decodeURIComponent(id);
  return (
    <div>
      <h1>Blog Post: {decodedId}</h1>
    </div>
  )
}

export default Blogpost
