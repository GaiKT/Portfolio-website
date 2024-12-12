'use client';

import React from 'react'
import { motion, useAnimation, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';
import { RiDoubleQuotesL , RiDoubleQuotesR } from "react-icons/ri";
import Card from '../Card';

import { containerVariantTop , containerVariantLeft , containerVariantRight , itemVariant } from '@/app/utils/variant'

import { items } from "@/app/utils/projectData";

export default function Project() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); // Trigger animation only once
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <div className='min-h-screen flex flex-col items-center gap-10 pt-24'>
      <div className='text-center mx-5'>
        <motion.h1 
        ref={ref}
        variants={containerVariantTop}
        initial="hidden"
        animate={controls} 
        className='text-6xl font-extrabold text-accent mb-5'> MY PROJECT</motion.h1>
        <motion.p 
        ref={ref}
        variants={containerVariantRight}
        initial="hidden"
        animate={controls} 
        className='flex gap-2 justify-center'
        > <RiDoubleQuotesL/>Turning Ideas into Reality 🚀<RiDoubleQuotesR/>
        </motion.p>
        <motion.span
        ref={ref}
        variants={containerVariantLeft}
        initial="hidden"
        animate={controls} 
        className='text-base'> Dive into a showcase of projects that reflect passion, innovation, and problem-solving. </motion.span>
      </div>
      <motion.div
        ref={ref}
        variants={containerVariantLeft}
        initial="hidden"
        animate={controls} 
        className='grid grid-cols-2 max-md:grid-cols-1 gap-5 p-5 w-full'>
        {
        items.map((item , i)=>{
          return(
            <motion.div
            key={i}
            variants={itemVariant}
            className='cursor-pointer'
            >
              <Card key={item.id} {...item} />
            </motion.div>
          );
        })
        }
      </motion.div>
    </div>
  )
}
