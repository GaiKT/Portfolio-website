'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';

interface CardMotionProps {
  image: string | StaticImageData;
  hight : number;
  width : number;
}

export default function CardMotion({ image , hight , width }: CardMotionProps) {
  return (
    <motion.div
      className="w-fit rounded-full cursor-pointer"
      animate={{
        y: [0, -30, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatDelay: 0,
        ease: 'easeInOut',
      }}
    >
      <Image
        src={image}
        alt="Profile"
        width={width}
        height={hight}
        className="rounded-full shadow-accent shadow-2xl max-md:scale-75"
      />
    </motion.div>
  );
}
