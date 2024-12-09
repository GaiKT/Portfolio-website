'use client';

import React from 'react';
import CardMotion from '../CardMotion';
import TextTyping from '../TextTyping';
import Link from 'next/link';
import { motion } from 'motion/react';
import { FaDownload } from 'react-icons/fa6';

export default function Home() {
  return (
    <div className='min-h-screen flex max-md:flex-col'>
      <div className='absolute top-0 left-0 h-full w-full z-0'>
        <div className='absolute left-1/2 bottom-2 w-52 h-52 rounded-full bg-blue-100 flex justify-center items-center max-md:hidden'></div>
        <div className='absolute left-1/3 bottom-20 w-16 h-16 rounded-full bg-blue-200'></div>
        <div className='absolute left-2/3 top-28 w-8 h-8 rounded-full bg-blue-200'></div>
        <div className='absolute top-28 right-5 w-80 h-80 rounded-full bg-blue-100'></div>
        <div className='absolute top-10 left-[-150px] w-80 h-80 rounded-full bg-blue-100'></div>
        <div className='absolute top-30 right-9 w-60 h-60 rounded-full bg-blue-100'></div>
      </div>
      <div className='flex-1 flex justify-center items-center z-10'>
        <div className='lg:w-3/4 text-lg flex flex-col gap-5 p-5'>
          Hello I am
          <p className='text-2xl font-extrabold text-blue-900'>Natthapong Kamtong</p>
            <TextTyping/>
          <p className='text-4xl font-extrabold h-10 ml-20'>
            Developer
          </p>
          <p>
            <span className='ml-16 mr-2'>
              I'm a passionate and skilled web developer
            </span>
            I'm fast-learning, full-stack software developer with a strong foundation in modern web technologies, 
            with real-world experience from personal projects.
          </p>
          <div className='flex justify-center gap-5'>
            <motion.button   
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className='bg-green-900 hover:bg-green-400 p-2 rounded shadow-md text-gray-50'>
            <Link href="#contact" className='flex gap-2 items-center'> <FaDownload/> Download resume </Link>
            </motion.button>
            <motion.button   
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className='bg-blue-900 hover:bg-blue-200 w-24 p-2 rounded shadow-md text-gray-50'>
            <Link href="#contact"> Hire Me! </Link>
            </motion.button>
          </div>
        </div>
      </div>
      <div className='flex-1 z-10'>
        <div className='mt-20 ml-20'>
          <CardMotion/>
        </div>
      </div>
    </div>
  );
}
