import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='flex flex-col items-center justify-center py-8 shadow-xl '>
            <ul className="flex flex-row gap-15 font-bold ">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about" scroll={false}>About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
        </div>
    )
}

export default Navbar
