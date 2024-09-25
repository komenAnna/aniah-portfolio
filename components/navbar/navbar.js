'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const links = [
    {
        id: 1,
        title: 'Work',
        url: '/'
    },
    {
        id: 2,
        title: 'Tools',
        url: '/tools'
    },
    {
        id: 3,
        title: 'Skills',
        url: '/skills'
    },
    {
        id: 4,
        title: 'Blog',
        url: '/blog'
    }
]
const Navbar = () => {

    //set state for toggling the menu
    const [menu, setMenu] = useState(false);
    const handleClick = () => setMenu(!menu);
  return (
    <div className='w-screen h-full bg-white text-black shadow-md sticky'>
        <div className='px-5 md:px-20 py-4 flex justify-between items-end md:items-center w-screen h-full'>
            <Link href='/'>
                <h1 className='uppercase text-sm md:text-xl font-bold mr-4'>Marianna Komen</h1>
            </Link>

            {/* Desktop menu */}
            <div className='hidden md:flex'>
                <div className=' text-lg'>
                    {links.map(link =>(
                        <Link href={link.url} key={link.id} className='text-black px-6 hover:text-blue-600'>
                            {link.title}
                        </Link>
                    ))}
                </div>

                <div className='px-6'>
                    <button className='border-none bg-black px-4 py-[2px] outline-none text-white rounded-lg'>
                        Contact
                    </button>
                </div>
            </div>

            {/* MOBILE VERSION */}
            <div className='md:hidden' onClick={handleClick}>
                    {!menu ? <IoMenuOutline className='w-6 h-6 cursor-pointer font-medium'/> : <IoClose className='w-6 h-6 cursor-pointer font-medium'/>}
            </div>
        </div>

        <div className={!menu ? 'hidden' : 'flex flex-col h-screen items-center justify-start bg-white text-lg border-b-2 border-green-100 shadow-md'}>
            {links.map(link=>(
                <Link key={link.id} href={link.url} className='py-4 md:hidden'>{link.title}
                </Link>
            ))}
            <div className='px-6 mb-4'>
                <button className='border-none bg-black px-4 py-[2px] outline-none text-white rounded-lg'>
                    Contact
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar