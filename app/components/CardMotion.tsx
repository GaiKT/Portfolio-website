'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Profile from '@/public/profile.jpg'
import Image from 'next/image';

export default function CardMotion() {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // ใช้ useEffect ในการจับตำแหน่งเมาส์
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
        };

        // เพิ่ม event listener
        window.addEventListener('mousemove', handleMouseMove);

        // ลบ event listener เมื่อ component ถูกลบ
        return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // คำนวณการหมุนของรูปตามตำแหน่งเมาส์
    const rotateX = (mousePosition.y / window.innerHeight - 1) * 20; // หมุนแกน X
    const rotateY = (mousePosition.x / window.innerWidth - 1) * -20; // หมุนแกน Y

  return (
    <motion.div
    className='w-fit rounded-full cursor-pointer'
    style={{
      perspective: '1000px', // เพิ่มความลึกให้เอฟเฟกต์
    }}
    animate={{
      rotateX: rotateX, // หมุนแกน X
      rotateY: rotateY, // หมุนแกน Y
    }}
    transition={{
      type: 'spring',
      stiffness: 300,
      damping: 30,
    }}
  >
    <Image
      src={Profile}
      alt="Profile"
      width={360}
      className="rounded-full border-4 border-gray-200 shadow-lg"
    />
  </motion.div>
  )
}
