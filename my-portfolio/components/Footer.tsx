"use client"

import CustomButton from "./ui/CustomButton"
import { FaLocationArrow } from 'react-icons/fa'

const currentYear = new Date().getFullYear()

// Footer section
const Footer = () => {

    return (
        <footer className="mt-10 sm:mt-8 md:mt-12 lg:mt-16 px-4 sm:px-6 md:px-8 lg:px-10">
            <h1 className="text-4xl mb-10 sm:text-5xl md:text-[3.2rem] leading-6 lg:text-4xl xl:text-[3rem] font-poppins font-extralight text-white text-center mt-[100px]">
                Ready to take
                <span className="block text-cyan-300 mt-5">your outside digital presence</span>
            </h1>

            <div className="text-white mt-[100px] flex flex-col sm:flex-row justify-center sm:justify-between gap-10">
                <div className="w-full sm:w-[250px] text-clip text-wrap">
                    <p className="text-xl text-white-200 my-5 text-center">Reach out to me today and let&apos;s discuss how I can help you achieve your goals</p>
                    <div className="flex justify-center items-center">
                        <a href="mailto:raiyanalsultan@gmail.com">
                            <CustomButton text="Let's get in touch" icon={<FaLocationArrow />} />
                        </a>
                    </div>
                </div>

                <div className="w-full sm:w-[250px] text-clip text-wrap">
                    <p className="text-xl text-white-200 my-5 text-center">Reach out to me today and let&apos;s discuss how I can help you achieve your goals</p>
                    <div className="flex justify-center items-center">
                        <a href="mailto:raiyanalsultan@gmail.com">
                            <CustomButton text="Let's get in touch" icon={<FaLocationArrow />} />
                        </a>
                    </div>
                </div>

                <div className="w-full sm:w-[250px] text-clip text-wrap">
                    <p className="text-xl text-white-200 my-5 text-center">Reach out to me today and let&apos;s discuss how I can help you achieve your goals</p>
                    <div className="flex justify-center items-center">
                        <a href="mailto:raiyanalsultan@gmail.com">
                            <CustomButton text="Let's get in touch" icon={<FaLocationArrow />} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-slate-300 mb-10 sm:text-xl md:text-[1.2rem] lg:text-[1rem] xl:text-[1rem] font-poppins font-extralight text-center mt-[100px]">
                Copyright at Raiyan Al Sultan {currentYear}
            </div>
        </footer>
    )
}

export default Footer
