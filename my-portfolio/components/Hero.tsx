import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import CustomButton from "./ui/CustomButton";
import SocialMediaBtn from "./ui/SocialMediaBtn";
const Hero = () => {


    // intro text
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
        {/* Adding spotlight */}
        <Spotlight 
            className="md:left-36 md:-top-10 top-100 -left-4"
            fill="rgba(180, 180, 180, 0.8)" // solid smoke color
        />


        {/* First Div */}
        <div className="w-full md:w-[700px] h-[300px] md:h-[300px] flex flex-col justify-center items-center p-4">
            {/* horizontal row and bubble  */}
            <hr className="fixed left-10 top-[320px] transform -translate-y-1/2 w-1/2 md:w-1/3" id="line" />
            <div
                className="absolute left-[30.6rem] top-[200px] w-2 h-2 bg-cyan-100 rounded-full animate-movePingPong1"
            />
            <div
                className="absolute left-[10.6rem] top-[300px] w-2 h-2 bg-purple-400 rounded-full animate-movePingPong2"
            />
            <div
                className="absolute left-[20.6rem] top-[400px] w-2 h-2 bg-orange-100 rounded-full animate-movePingPong3"
            />

            {/* greet and intro section */}
            <h1 className="text-4xl sm:text-5xl md:text-[7.2rem] font-poppins font-extralight text-white text-center">
                Hello
            </h1>
            <div className="w-full h-16 overflow-hidden">
            <TypewriterEffect words={intro} />
            </div>

            {/* Custom Button */}
            <CustomButton />

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