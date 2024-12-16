import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
const Hero = () => {

    const greeting = [
        {
          text: "Hello",
        },
      ];

    const intro = [
        {
            text: "-"
        },
        {
            text: "I'm"
        },
        {
            text: "Raiyan."
        },
        {
            text: "A"
        },
        {
            text: "Full"
        },
        {
            text: "Stack"
        },
        {
            text: "Developer"
        },
    ];

    return (
        <div className="relative bg-black flex flex-col md:flex-row pt-10 md:pt-20 gap-8">
        <Spotlight 
            className="md:left-36 md:-top-10 top-100 -left-4"
            fill="rgba(180, 180, 180, 0.9)" // solid smoke color
        />


        {/* First Div */}
        <div className="w-full md:w-[700px] h-[300px] md:h-[300px] flex flex-col justify-center items-center p-4">
            <hr className="absolute left-10" id="line"/>
            <h1 className="text-4xl sm:text-5xl md:text-[6.5rem] font-poppins font-extralight text-white text-center">
            Hello
            </h1>
            <div className="w-full h-16 overflow-hidden">
            <TypewriterEffect words={intro} />
            </div>
        </div>

        {/* Second Div */}
        <div className="w-full md:w-[700px] h-[300px] md:h-[400px] flex justify-center items-center">
            <Image
            alt="image"
            src="/images.jpeg"
            width={300}
            height={300}
            className="object-cover sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px]"
            />
        </div>
    </div>
    )
}

export default Hero