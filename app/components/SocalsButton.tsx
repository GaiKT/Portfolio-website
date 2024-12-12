'use client'
import React from 'react'
import { motion } from "framer-motion";

export default function SocalsButton() {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className='w-20 h-20 bg-white rounded-full shadow-md shadow-accent cursor-pointer' />
  )
}
