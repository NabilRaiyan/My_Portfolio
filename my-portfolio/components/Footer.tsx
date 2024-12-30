"use client"


const currentYear = new Date().getFullYear()

const Footer = () => {


    return (
        <footer className="mt-10">
            <h1 className="text-4xl mb-10 sm:text-5xl md:text-[3.2rem] leading-6 lg:text-4xl xl:text-[3rem] font-poppins font-extralight text-white text-center mt-[100px]">
                Ready To Take You
                <span className="block text-cyan-300 mt-5">Outside Of Digital World</span>
            </h1>

           
            <div className="text-white mt-[100px]">name</div>

            <div className="text-white mb-10 sm:text-xl md:text-[1.2rem] lg:text-[1 rme] xl:text-[1rem] font-poppins font-extraligh text-center mt-[100px]">Copyright at Raiyan Al Sultan {currentYear}</div>
        </footer>
    )
}

export default Footer