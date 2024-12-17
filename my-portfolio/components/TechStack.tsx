"use client"

import { BentoGrid, BentoGridItem } from "./ui/bento-grid"
import { motion } from "framer-motion";

import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
  } from "@tabler/icons-react";

import { LampContainer } from "./ui/lamp";

    const Skeleton = () => (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-black dark:bg-black"></div>    );
    const items = [
        {
        title: "The Dawn of Innovation",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconClipboardCopy className="h-4 w-4 text-orange-500" />,
        },
        {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-orange-500" />,
        },
        {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-orange-500" />,
        },
        {
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 text-orange-500" />,
        },
    ];

    const TechStack = () => { 
        return (
            <div className="relative mt-[100px] mb-[50px] w-full h-auto items-center justify-center">
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                }}
                className="mt-2 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-6xl"
                >
                My Tech <br /> Stack
                </motion.h1>
            </LampContainer>

                <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                    icon={item.icon}
                    />
                ))}
                </BentoGrid>
            </div>
        )

    }

export default TechStack