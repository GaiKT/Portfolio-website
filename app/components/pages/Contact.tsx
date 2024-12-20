'use client';

import React , {useEffect, useRef} from 'react';
import { motion, useAnimation, useInView } from 'motion/react';
import { containerVariantBottom , containerVariantTop , containerVariantLeft , containerVariantRight} from '@/app/utils/variant'
import GaiOnLaptop from '@/public/GaiOnLabtop.jpg'
import CardMotion from '../CardMotion';
import { RiDoubleQuotesL , RiDoubleQuotesR } from "react-icons/ri";
import ContactForm from '../ContactForm';


export default function Contact() {
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
    <div className='min-h-screen flex flex-col justify-around px-5'>
      <div className='text-center mt-20'>
        <motion.h1 
          ref={ref}
          variants={containerVariantTop}
          initial="hidden"
          animate={controls}           
          className='text-6xl font-extrabold text-accent mb-5'>CONTACT ME</motion.h1>
         <motion.p 
        ref={ref}
        variants={containerVariantRight}
        initial="hidden"
        animate={controls} 
        className='flex gap-2 justify-center'
        > <RiDoubleQuotesL/>Get in Touch<RiDoubleQuotesR/>
        </motion.p>
        <motion.span
        ref={ref}
        variants={containerVariantLeft}
        initial="hidden"
        animate={controls} 
        className='text-base'> Have a question or want to work together? I’d love to hear from you! </motion.span>
        <motion.span
        ref={ref}
        variants={containerVariantLeft}
        initial="hidden"
        animate={controls} 
        className='text-base block'> If you're interested in my profile, please fill out your information. The system will automatically send you an email along with my resume. </motion.span>
      </div>
      <div className='flex max-md:flex-col justify-center items-center'>
        <motion.div 
          ref={ref}
          variants={containerVariantBottom}
          initial="hidden"
          animate={controls} 
          className='md:w-1/3 flex justify-center items-center'>
          <CardMotion image={GaiOnLaptop} hight={500} width={350}/>
        </motion.div>
        <ContactForm />
      </div>
    </div>
  )
}
