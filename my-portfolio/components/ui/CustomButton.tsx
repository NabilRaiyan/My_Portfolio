import Link from 'next/link'
import React from 'react'


interface CustomButtonProps {
  text: string;
  link?: string;
}

const CustomButton = ({text, link}: CustomButtonProps) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] mt-4 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFD9B3_0%,#00FFFF_50%,#FFD9B3_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {link ? (
            <Link href={link}>{text}</Link>
          ) : (
            <>{text}</>
          )}
        </span>
    </button>
  )
}

export default CustomButton

