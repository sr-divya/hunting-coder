import React from 'react'


const Blogpost = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  return (
    <div className='mt-20 px-80 py-10'>
      <h1 className='text-4xl pb-5'>Title of the page {decodedId}</h1>
      <hr />
      <p className='mt-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus natus dolorem quisquam numquam, impedit tempora, nemo, tenetur ex officiis accusantium illum odit voluptates soluta sint non quae voluptatem praesentium provident.</p>
    </div>
  )
}

export default Blogpost
