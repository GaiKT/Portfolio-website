'use client';

import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub , FaVuejs  } from 'react-icons/fa'; // Example icon imports
import { RiNextjsFill } from "react-icons/ri";
import { SiNestjs ,SiPrisma ,SiMysql ,SiPostman  } from "react-icons/si";
import { BiLogoPostgresql , BiLogoMongodb , BiLogoFirebase , BiLogoDocker   } from "react-icons/bi";
import { TbBrandSupabase } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa6";

import { motion } from 'motion/react';


export default function Aboutme() {
  const tablist = [
    {
      tabname: 'CLIENT',
      techlists: [
        { text: 'HTML', icon: <FaHtml5 size={24} /> },
        { text: 'CSS3', icon: <FaCss3Alt size={24} /> },
        { text: 'React', icon: <FaReact size={24} /> },
        { text: 'Vue', icon: <FaVuejs size={24} /> },
        { text: 'Next', icon: <RiNextjsFill size={24} /> }, 
      ],
    },
    {
      tabname: 'SERVER',
      techlists: [
        { text: 'Node.js', icon: <FaNodeJs size={24} /> },
        { text: 'NestJS', icon: <SiNestjs size={24} /> },
        { text: 'Prisma ORM', icon: <SiPrisma size={24} /> },
      ],
    },
    {
      tabname: 'DATABASE',
      techlists: [
        { text: 'MySQL', icon: <SiMysql size={24} /> }, // Replace with MySQL icon
        { text: 'PostgreSQL', icon: <BiLogoPostgresql size={24} /> }, // Replace with PostgreSQL icon
        { text: 'MongoDB', icon: <BiLogoMongodb size={24} /> }, // Replace with MongoDB icon
        { text: 'Supabase', icon: <TbBrandSupabase size={24} /> }, // Replace with Supabase icon
        { text: 'Firebase', icon: <BiLogoFirebase size={24} /> }, // Replace with Firebase icon
      ],
    },
    {
      tabname: 'OTHERS',
      techlists: [
        { text: 'Docker', icon: <BiLogoDocker size={24} /> }, // Replace with Docker icon
        { text: 'VSCode', icon: <VscVscode size={24} /> }, // Replace with VSCode icon
        { text: 'Git', icon: <FaGitAlt size={24} /> },
        { text: 'GitHub', icon: <FaGithub size={24} /> },
        { text: 'Postman', icon: <SiPostman size={24} /> }, // Replace with Postman icon
      ],
    },
  ];

  return (
    <div className='min-h-screen bg-blue-200 p-5 mt-16 flex flex-col justify-around'>
      <div className='text-center text-lg'>
        <h1 className='text-4xl font-extrabold text-blue-900'>Skilled</h1>
        <p>
            <span className='ml-16 mr-2'>
              I'm a passionate and skilled web developer
            </span>
            I'm fast-learning, full-stack software developer with a strong foundation in modern web technologies, 
            with real-world experience from personal projects.
        </p>
      </div>
      <div className='flex max-md:flex-col'>
        <div className='flex-1 flex flex-col gap-10 justify-center items-center w-full border-r-2 p-5 border-blue-800'>
          <h1 className='text-2xl font-extrabold'>Programming / Library Skill</h1>
          <div className='w-full flex justify-center'>
          <div role="tablist" className="tabs tabs-lifted w-full">
            {
              tablist.map((tab , index)=>{
                return(
                  <>
                    <motion.input 
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }} 
                    type="radio" name="my_tabs_2" role="tab" className="tab font-bold" aria-label={tab.tabname} defaultChecked={index === 0} />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box px-5 max-md:py-5">
                      <div className='flex max-md:flex-col min-h-40 items-center gap-5'>
                        {
                          tab.techlists.map((list , index)=>{
                            return(
                              <motion.div 
                              whileHover={{scale:1.1}}
                              whileTap={{ scale: 0.9 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }} 
                              className='w-28 h-20 flex flex-col justify-center items-center p-2 rounded-md shadow-md bg-blue-100 cursor-pointer'>
                                {list.icon}
                                {list.text}
                              </motion.div>
                            );
                          })
                        }
                      </div>
                    </div>
                  </>
                );
              })
            }
          </div>
          </div>
        </div>
        <div className='flex-1 flex justify-center items-center border-l-2 border-blue-800'>
          <div className='lg:w-3/4 text-lg flex flex-col gap-5 p-5'>
            <h1 className='text-2xl text-blue-950 font-extrabold'>About me.</h1>
            <p>
              <span className='ml-16 mr-2'>
                I'm a passionate and skilled web developer
              </span>
              I'm fast-learning, full-stack software developer with a strong foundation in modern web technologies, 
              with real-world experience from personal projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
