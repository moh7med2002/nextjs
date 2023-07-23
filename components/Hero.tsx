'use client'
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

function Hero() {
  return (
    <div className='container'>
        <motion.button whileTap={{opacity:0.5,scaleX:1.2}} className='bg-red-600 p-2'>
            click
        </motion.button>
        <div className='h-[100vh] bg-yellow-300'>hwllo</div>
        <motion.h3 
        initial={{ x: -300, opacity: 0 }} // Initial position and opacity
        whileInView={{ x: 0, opacity: 1 }} // Ending position and opacity
        transition={{ duration:0.8}} // Animation duration
        className='my-[100px] bg-black text-white'
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi, 
            enim amet, dolorem ab ipsum blanditiis omnis incidunt porro vitae dolores!
        </motion.h3>
        <div className='h-[100vh] bg-red-300'>hwllo</div>
    </div>
  )
}

export default Hero