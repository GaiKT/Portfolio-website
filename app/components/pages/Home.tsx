'use client';

import React , {useEffect, useRef} from 'react';
import CardMotion from '../CardMotion';
import TextTyping from '../TextTyping';
import Link from 'next/link';
import { motion, useAnimation, useInView } from 'motion/react';
import { FaDownload } from 'react-icons/fa6';
import Profile from '@/public/profile.jpg'
import { RiDoubleQuotesL , RiDoubleQuotesR } from "react-icons/ri";
import { containerVariantBottom , containerVariantTop , containerVariantLeft , containerVariantRight , itemVariant } from '@/app/utils/variant'

export default function Home() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); 
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <div className='min-h-screen flex max-md:flex-col pt-20'>
      <div className='md:w-4/6 flex justify-center items-center z-10 relative'>
        <div className='lg:w-3/4 h-2/3  flex flex-col gap-5 p-5 pl-5'>
          <motion.p 
          ref={ref}
          variants={containerVariantTop}
          initial="hidden"
          animate={controls}                
          >Hello I am</motion.p>
          <motion.p 
          ref={ref}
          variants={containerVariantLeft}
          initial="hidden"
          animate={controls}         
          className='text-6xl font-extrabold text-accent'>Natthapong Kamtong</motion.p>
            <TextTyping/>
          <motion.p 
          ref={ref}
          variants={containerVariantRight}
          initial="hidden"
          animate={controls}      
            className='text-7xl font-extrabold h-16 ml-20 text-[#fca311]'>
            Developer
          </motion.p>
          <motion.p 
          ref={ref}
          variants={containerVariantBottom}
          initial="hidden"
          animate={controls}
          className='flex gap-1 justify-center'
          >
            <RiDoubleQuotesL/> No one can go back to restart, but can make a brand new ending. <RiDoubleQuotesR/>
          </motion.p>
          <div className='flex justify-center gap-5 mt-5'>
            <motion.button   
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              ref={ref}
              variants={containerVariantBottom}
              initial="hidden"
              animate={controls}          
              transition={{ type: "spring", stiffness: 400, damping: 10 , duration: 1 }}
              className='bg-[#4f772d] hover:bg-[#90a955] p-2 rounded shadow-md text-gray-50 text-lg'>
              <Link href="https://drive.google.com/file/d/1AI1nTXkD-J9rcU8CtP1j2xCC7P3ocq_4/view?usp=drive_link" target="_blank" className='flex gap-2 items-center'> <FaDownload/> Download resume </Link>
            </motion.button>
            <motion.button   
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              ref={ref}
              variants={containerVariantRight}
              initial="hidden"
              animate={controls}   
              transition={{ type: "spring", stiffness: 400, damping: 10 , duration: 1 }}
              className='bg-blue-900 hover:bg-blue-200 p-2 rounded shadow-md text-gray-50 text-lg'>
            <Link href="#contact"> Hire Me! </Link>
            </motion.button>
          </div>
        </div>
      </div>
      <div className='md:w-2/6 z-10 flex justify-start max-md:justify-center items-center'>
        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}    
          transition={{ duration: 1 }}>
          <CardMotion image={Profile} hight={500} width={350}/>
        </motion.div>
      </div>
    </div>
  );
}
