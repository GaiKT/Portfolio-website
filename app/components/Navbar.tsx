import React from 'react'
import { FaBars } from "react-icons/fa6";
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  return (
    <nav className='navbar shadow-accent shadow-md text-base-100 sticky top-0 flex justify-between max-md:justify-around items-center px-5 bg-primary z-50'>
        <div className=' font-sans font-extrabold text-2xl'>
            <span className='text-accent mr-2'>Natthapong</span> 
            <span className='text-secondary'>Kamtong</span>
        </div>

        <ul className='max-lg:w-2/4 w-1/3 flex font-bold justify-around max-md:hidden'>
            <li className='hover:scale-110 hover:text-blue-900 transition-all'>
                <Link href='#home' >HOME</Link>
            </li>
            <li className='hover:scale-110 hover:text-blue-900 transition-all'>
                <Link href="#about" >ABOUT ME</Link>
            </li>
            <li className='hover:scale-110 hover:text-blue-900 transition-all'>
                <Link href="#project" >PROJECT</Link>
            </li>
            <li className='hover:scale-110 hover:text-blue-900 transition-all'>
                <Link href="#contact" >CONTACT</Link>
            </li>
        </ul>

        <div className='flex gap-2 items-center'>
            <span className='max-md:hidden'>Switch Theme</span>
            <ThemeSwitcher/>    
        </div>
        
        <div className="drawer md:hidden w-fit flex justify-end">
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
                        <Link href="#home">HOME</Link>
                    </li>
                    <li className='hover:scale-110 hover:text-blue-900 transition-all'>
                        <Link href="#about">ABOUT ME</Link>
                    </li>
                    <li className='hover:scale-110 hover:text-blue-900 transition-all'>
                        <Link href="#project">PROJECT</Link>
                    </li>
                    <li className='hover:scale-110 hover:text-blue-900 transition-all'>
                        <Link href="#contact">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
