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
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2]"></div>);
    const items = [
        {
        id: 1,
        title: "A Passionate Developer",
        description: "Hi, I’m Raiyan Al Sultan — a passionate full-stack developer skilled in NestJS, NextJS, React, PostgreSQL, and MongoDB. I create seamless digital experiences and share knowledge via KodeForce and Medium. Let’s build something amazing!",
        header: <Skeleton />,
        image: "/images/b1.svg", // 
        className: "md:col-span-2",
        },
        {
        id: 2,
        title: "Skills & Tools",
        // description: "Dive into the transformative power of technology.",
        header: <Skeleton />,
        image: "/images/b5.svg",
        className: "md:col-span-1",
        },
        {
        id:3,
        title: "Let's Build Something Together",
        // description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton />,
        image: "/images/exp4.svg",
        className: "md:col-span-1",
        },
        {
        id:4,
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
        header: <Skeleton />,
        className: "md:col-span-2",
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
                className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-5xl font-poppins tracking-tight text-transparent md:text-6xl"
                >
                    About Me
                </motion.h1>
            </LampContainer>

                <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                    key={i}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                    image={item.image}
                    // imgClassName={item.imgClassName}
                    />
                ))}
                </BentoGrid>
            </div>
        )
    }

export default TechStack