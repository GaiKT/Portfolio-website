'use client';

import React , {useState , useEffect, useRef} from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub , FaVuejs  } from 'react-icons/fa'; // Example icon imports
import { RiNextjsFill } from "react-icons/ri";
import { SiNestjs ,SiPrisma ,SiMysql ,SiPostman  } from "react-icons/si";
import { BiLogoPostgresql , BiLogoMongodb , BiLogoFirebase , BiLogoDocker   } from "react-icons/bi";
import { TbBrandSupabase } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa6";
import { FcProcess , FcGenealogy, FcElectronics,FcExternal  } from "react-icons/fc";

import { motion, useAnimation, useInView } from 'motion/react';
import { RiDoubleQuotesL , RiDoubleQuotesR } from "react-icons/ri";
import { containerVariantTop , containerVariantLeft , containerVariantRight , itemVariant } from '@/app/utils/variant'


export default function Aboutme() {
    const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); 
  const controls = useAnimation();

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
        { text: 'MySQL', icon: <SiMysql size={24} /> }, 
        { text: 'PostgreSQL', icon: <BiLogoPostgresql size={24} /> }, 
        { text: 'MongoDB', icon: <BiLogoMongodb size={24} /> }, 
        { text: 'Supabase', icon: <TbBrandSupabase size={24} /> }, 
        { text: 'Firebase', icon: <BiLogoFirebase size={24} /> }, 
      ],
    },
    {
      tabname: 'OTHERS',
      techlists: [
        { text: 'Docker', icon: <BiLogoDocker size={24} /> }, 
        { text: 'VSCode', icon: <VscVscode size={24} /> }, 
        { text: 'Git', icon: <FaGitAlt size={24} /> },
        { text: 'GitHub', icon: <FaGithub size={24} /> },
        { text: 'Postman', icon: <SiPostman size={24} /> }, 
      ],
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <div className='min-h-screen p-5 flex flex-col gap-20 pt-20 items-center '>
      <div className='text-center'>
        <motion.h1 
          ref={ref}
          variants={containerVariantTop}
          initial="hidden"
          animate={controls}           
          className='text-6xl font-extrabold text-accent mb-5'>ABOUT ME</motion.h1>
        <motion.p
          ref={ref}
          variants={containerVariantRight}
          initial="hidden"
          animate={controls}  
          className='flex gap-2 justify-center'
        >
          <RiDoubleQuotesL/> Exploring the Boundaries of Possibility <RiDoubleQuotesR/>
        </motion.p>
        <motion.p
          ref={ref}
          variants={containerVariantRight}
          initial="hidden"
          animate={controls}  
          className='mt-5 text-base'> 
              I am passionate about technology and aspire to excel as a Full-Stack Developer. I am a quick learner and dedicated to continuous self-improvement and lifelong learning.
            My career goal is to become a proficient programmer, capable of developing applications that serve a large user base and embracing challenges along the way.
            My professional journey began in electrical engineering, where I developed a strong interest in technology and computers. Driven by this passion, I taught myself programming, starting with Python and PHP, and discovered a love for coding and problem-solving. This enthusiasm led me to transition careers, and I attended a Programmer Boot Camp to formalize my skills. There, I focused on learning JavaScript and quickly became proficient, gaining confidence in using frameworks like React to build high-quality web applications.
            I am excited about the opportunity to bring my skills, passion, and dedication to your team and contribute to creating innovative solutions.
        </motion.p>
      </div>
      <div className='flex max-md:flex-col w-full'>
        <div className="flex-1 flex flex-col gap-10 justify-center items-center w-full border-r-2 p-5 border-accent">
        <motion.h1 
        ref={ref}
        variants={containerVariantTop}
        initial="hidden"
        animate={controls} 
        className="text-2xl font-extrabold text-accent">
          Programming / Framework Skills
        </motion.h1>
        <motion.div 
        ref={ref}
        variants={containerVariantRight}
        initial="hidden"
        animate={controls}  
        className="w-full flex">
          <div role="tablist" className="tabs tabs-lifted h-full">
            {tablist.map((tab, index) => (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  name="my_tabs_2"
                  role="tab"
                  className={`tab font-bold text-${activeTab === index ? 'base-content' : 'accent'}`}
                  aria-label={tab.tabname}
                  checked={activeTab === index}
                  onChange={() => setActiveTab(index)}
                />
                {activeTab === index && (
                  <motion.div
                    key={index}
                    role="tabpanel"
                    className="tab-content bg-base-100 border-base-300 rounded-box px-5 max-md:py-5"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariantLeft}
                  >
                    <div className="flex flex-wrap max-md:flex-col py-5 items-center gap-5 text-black">
                      {tab.techlists.map((list, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.1}}
                          variants={itemVariant} 
                          className="min-w-28 h-20 flex flex-col justify-center items-center p-2 rounded-md shadow-md bg-[#e9c46a] cursor-pointer"
                        >
                          {list.icon}
                          <p className="font-bold ">{list.text}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
        </div>
        <div className='flex-1 flex justify-center items-center border-l-2 border-accent'>
          <motion.div 
          ref={ref}
          variants={containerVariantLeft}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1.5  }}   
          className='lg:w-3/4  flex flex-col gap-5 p-5'>
            <motion.h1 
            ref={ref}
            variants={containerVariantRight}
            initial="hidden"
            animate={controls} 
            className="text-2xl font-extrabold text-accent">
              Other Skills
            </motion.h1>
            <div className='flex flex-col gap-5'>
              <motion.div whileHover={{ scale: 1.1}} variants={itemVariant}  className='flex gap-5 items-center cursor-pointer'>
                <FcProcess className='text-6xl w-1/6'/>
                <p className='text-sm w-5/6'>
                  <span className='text-xl block font-semibold'>Problem-solving skills</span>
                  <span className='ml-5'></span>I continuously enhance my problem-solving abilities through training on platforms like Codewars and LeetCode.
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1}} variants={itemVariant} className='flex gap-5 items-center cursor-pointer'>
                <FcGenealogy className='text-6xl w-1/6'/>
                <p className='text-sm w-5/6'>
                  <span className='text-xl block font-semibold'>Project Planing</span>
                  <span className='ml-5'></span>Effective project planning is the foundation of successful development. It involves setting clear goals.
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1}} variants={itemVariant} className='flex gap-5 items-center cursor-pointer'>
                <FcElectronics className='text-6xl w-1/6'/>
                <p className='text-sm w-5/6'>
                  <span className='text-xl block font-semibold'>Basic Computer Hardware</span>
                  <span className='ml-5'></span>Understanding of computer hardware enables efficient troubleshooting, system upgrades.
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1}} variants={itemVariant} className='flex gap-5 items-center cursor-pointer'>
                <FcExternal className='text-6xl w-1/6'/>
                <p className='text-sm w-5/6'>
                  <span className='text-xl block font-semibold'>Basic Deployment</span>
                  <span className='ml-5'></span>Setting up environments, managing dependencies, and configuring basic deployment pipelines for web or software applications.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
