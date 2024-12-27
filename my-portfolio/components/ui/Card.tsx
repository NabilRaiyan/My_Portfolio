import React from 'react'

import * as motion from "motion/react-client"

interface CardPropsType {
    title: string;
    description: string;
    // imageLink: string;
}

const ApproachCard = ({title, description }:CardPropsType) => {
  return (
    <motion.div className="bg-black w-[400px] h-full p-5 rounded-sm border text-white font-poppins border-orange-200"  whileHover={{ scale: 1.2 }}>
        {title}
        <motion.div>
            {description}
        </motion.div>
    </motion.div>
  )
}

export default ApproachCard
