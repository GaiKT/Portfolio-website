import React from 'react'
import { FaBars } from "react-icons/fa6";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='h-20 shadow-md sticky top-0 flex justify-between items-center px-10 bg-gray-50 z-50 bg-opacity-70'>
        <div className=' font-sans font-extrabold text-2xl'>
            <span className='text-blue-800'>Natthapong </span> 
             Kamtong
        </div>

        <ul className='w-1/3 flex font-bold justify-around max-md:hidden'>
            <li className='hover:scale-110 hover:text-blue-900 transition-all'>
                <Link href='#home'>HOME</Link>
            </li>
            <li className='hover:scale-110 hover:text-blue-900 transition-all'>
                <Link href="#about">ABOUT US</Link>
            </li>
            <li className='hover:scale-110 hover:text-blue-900 transition-all'>
                <Link href="#project" scroll >PROJECT</Link>
            </li>
            <li className='hover:scale-110 hover:text-blue-900 transition-all'>
                <Link href="#contact" scroll >CONTACT</Link>
            </li>
        </ul>

        
        <div className="drawer md:hidden flex justify-end">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn drawer-button cursor-pointer"><FaBars/></label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 pt-20">
                    {/* Sidebar content here */}
                    <li className='hover:scale-110 hover:text-blue-900 transition-all'>
                        <Link href="#">HOME</Link>
                    </li>
                    <li className='hover:scale-110 hover:text-blue-900 transition-all'>
                        <Link href="#">ABOUT US</Link>
                    </li>
                    <li className='hover:scale-110 hover:text-blue-900 transition-all'>
                        <Link href="#">PROJECT</Link>
                    </li>
                    <li className='hover:scale-110 hover:text-blue-900 transition-all'>
                        <Link href="#">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
