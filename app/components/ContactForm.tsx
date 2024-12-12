'use client';

import React, { useRef, FormEvent , useEffect } from "react";
import { containerVariantBottom , containerVariantTop , containerVariantLeft , containerVariantRight} from '@/app/utils/variant'
import emailjs from "emailjs-com";
import { motion, useAnimation, useInView } from 'motion/react';
import { IoIosMail , IoIosSend  } from "react-icons/io";
import { FaUser } from "react-icons/fa";

export const ContactForm: React.FC = () => {
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

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
        )
        .then(
          (result) => {
            console.log("Email sent:", result.text);
          },
          (error) => {
            console.error("Email error:", error.text);
          }
        );
    }
  };

  return (
    <motion.form ref={form} onSubmit={sendEmail}
    variants={containerVariantRight}
    initial="hidden"
    animate={controls}         
    className='md:w-2/3 w-full p-5'
    >
        <motion.div 
          ref={ref}
          variants={containerVariantRight}
          initial="hidden"
          animate={controls}         
          className='w-full'>
          <div className='flex flex-col gap-5 text-base-content'>
            <label className="input input-bordered flex items-center gap-2">
              <FaUser/>
              <input type="text" className="grow" placeholder="Your name" name="from_name" required/>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <IoIosMail/>
              <input className="grow" placeholder="Your Email" type="email" name="from_email" required/>
            </label>
            <textarea className="textarea textarea-bordered" rows={8} placeholder="Your Message" name="message" required ></textarea>
            <div className='w-full flex justify-end'>
              <motion.button   
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 30, opacity: 0 }}              
                transition={{ type: "spring", stiffness: 400, damping: 10 , duration: 1.5 }}
                type="submit"
                className='bg-[#4f772d] hover:bg-[#90a955] p-2 rounded shadow-md text-gray-50'>
                <span className='flex gap-2 items-center px-5'><IoIosSend />Send</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
    </motion.form>
  );
};

export default ContactForm;
