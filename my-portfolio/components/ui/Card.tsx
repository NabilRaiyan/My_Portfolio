import React from 'react'

import * as motion from "motion/react-client"
import Image from 'next/image';

interface CardPropsType {
    title: string;
    description: string;
    imageLink: string;
}

const ApproachCard = ({title, description, imageLink }:CardPropsType) => {
  return (
    <motion.div 
        className="flex flex-col bg-black w-[400px] h-full p-5 rounded-md border font-poppins border-orange-200"  
        whileHover={{ scale: 1.2 }}
        >
    <motion.div 
        className="flex justify-center items-center mb-4"
        style={{ height: '200px' }}
    >
    <Image src={imageLink} height={200} width={200} alt="approach image" />
        </motion.div>
    <motion.div className="text-center text-lg text-white font-semibold mb-2">
        {title}
    </motion.div>
    <motion.div className="text-justify text-slate-200 text-sm">
        {description}
    </motion.div>
    </motion.div>

  )
}

export default ApproachCard
