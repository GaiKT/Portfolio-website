'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { LuTextCursor } from "react-icons/lu";

export default function TextTyping() {
    const texts = ["Full-Stack", "Front-End", "Back-End"];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
  
    useEffect(() => {
      let index = 0;
  
      // เริ่มแสดงตัวอักษรทีละตัว
      const typeInterval = setInterval(() => {
        setDisplayText((prev) => index === 0 ? 'F' :  prev + texts[currentTextIndex][index - 1]);
        index++;
  
        // เมื่อข้อความพิมพ์เสร็จ
        if (index === texts[currentTextIndex].length) {
          clearInterval(typeInterval);
  
          // เปลี่ยนข้อความถัดไปหลังจากข้อความสุดท้ายแสดงเสร็จ
          setTimeout(() => {
            setDisplayText("");
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }, 3000); // เว้น 3 วินาทีก่อนเริ่มข้อความถัดไป
        }
      }, 100);
  
      return () => clearInterval(typeInterval);
    }, [currentTextIndex]);

    return (
        <motion.p
        className='text-7xl font-extrabold text-secondary flex'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        >
        {displayText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
          <motion.span 
          animate={{ opacity: [1, 0] }}
          transition={{
            delay: 1,
            duration : 1 ,
            repeat: Infinity,
          }}
          className='text-7xl text-black font-extralight'> <LuTextCursor/>
          </motion.span>
        </motion.p>
    )
}
