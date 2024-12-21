import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { Spotlight } from "./ui/Spotlight";
import CustomButton from "./ui/CustomButton";
import SocialMediaBtn from "./ui/SocialMediaBtn";
import Image from "next/image";
import { FaGithub, FaFacebook, FaLinkedin, FaMedium } from "react-icons/fa";
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
            text: "Web"
        },
        {
            text: "Developer"
        },
    ];

    return (
        <div className="relative bg-black flex flex-col md:flex-row pt-10 md:pt-20 gap-8">
        
        {/* First Div */}
        <div className="w-full md:w-[700px] h-[300px] md:h-[300px] flex flex-col justify-center items-center p-4">
            {/* horizontal row and bubble  */}
            <hr className="fixed left-10 top-[320px] transform -translate-y-1/2 w-1/2 md:w-1/3" id="line" />
            <div
                className="fixed left-[29.6rem] top-[200px] w-2 h-2 bg-cyan-100 rounded-full animate-movePingPong1"
            />
            <div
                className="fixed left-[10.6rem] top-[300px] w-2 h-2 bg-purple-400 rounded-full animate-movePingPong2"
            />
            <div
                className="fixed left-[20.6rem] top-[400px] w-2 h-2 bg-orange-100 rounded-full animate-movePingPong3"
            />

            {/* Social media div */}
            <div className="flex flex-row gap-2 top-[50px] fixed sm:justify-center sm:items-center left-16">
                <div>
                    <SocialMediaBtn link="https://github.com/NabilRaiyan" icon={<FaGithub />} />
                </div>
                <div>
                    <SocialMediaBtn link="https://www.facebook.com/" icon={<FaFacebook />} />
                </div>
                <div>
                    <SocialMediaBtn link="www.linkedin.com/in/raiyan-al-sultan-45b2b7258" icon={<FaLinkedin />} />
                </div>
                <div>
                    <SocialMediaBtn link="https://medium.com/@raiyanalsultan" icon={<FaMedium />} />
                </div>
            </div>

            {/* greet and intro section */}
            <h1 className="text-4xl sm:text-6xl md:text-[7.2rem] lg:text-8xl xl:text-[9rem] font-poppins font-extralight text-white text-center mt-5">
                Hello
            </h1>

            <div className="w-full h-16 overflow-hidden">
            <TypewriterEffect words={intro} />
            </div>

            {/* Custom Button */}
            <CustomButton link="https://github.com/NabilRaiyan" text="See My Work" />

        </div>

        {/* Second Div */}
        <div className="w-full md:w-[700px] h-[300px] md:h-[400px] flex justify-center items-center">

        <Spotlight
            className="absolute max-w-screen -top-[200px] left-0 md:left-[400px] md:-top-20"
            fill="rgba(180, 180, 180, 0.6)"
        />

            {/* <Image
            alt="image"
            src="/images/exp4.svg"
            width={300}
            height={300}
            className="object-cover sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px]"
            /> */}
        </div>
    </div>
    )
}

export default Hero