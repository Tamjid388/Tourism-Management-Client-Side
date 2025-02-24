import React from 'react'
import { motion } from "motion/react"

export const Framertutorial = () => {
  return (
    <div className='container mx-auto'>framertutorial
    
    <motion.div className="h-[200px] w-[200px] bg-red-600
    "
    animate={
        {
            x:1000,
            rotate:300
        }
    }

    transition={{ ease: "easeOut", duration: 2,delay:2 }}
    >

    </motion.div>
    </div>
  )
}
