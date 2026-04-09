import React from 'react'

const Page = () => {
  return (
    <div className='px-100 flex-col 
    py-10'>
      <div className='flex items-center justify-center '>
        <h1 className='text-3xl flex font-bold mb-8 '>About Hunting Coder</h1>
      </div>
      <h2 className='text-2xl font-bold mb-3'>Introduction</h2>
      <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In praesentium omnis possimus. Quos deserunt possimus explicabo ipsa aut! Dolores perferendis quibusdam dolore, porro facere dolorem corrupti incidunt dolor cum ut!</p>

      <h2 className='text-2xl font-bold my-5'>Services Offered</h2>
      <p className='text-base'>We offer a wide range of services to help you advance your coding skills, including online courses, personalized mentoring, and hands-on projects.</p>
      <p className='mt-5'>We offers following services</p>
      <ul className='list-disc list-inside text-base'>
        <li>Online Courses</li>
        <li>Personalized Mentoring</li>
        <li>Hands-on Projects</li>
        <li>Online Courses</li>
        <li>Personalized Mentoring</li>
        <li>Hands-on Projects</li>
      </ul>

      <h2 className='text-2xl font-bold my-5'>Our Mission</h2>
      <p className='text-base'>At Hunting Coder, our mission is to provide high-quality coding tutorials and resources to help developers of all levels improve their skills and stay up-to-date with the latest technologies.</p>


    </div>
  )
}

export default Page
