
import { cn } from "@/lib/utils";
import CustomButton from "./CustomButton";
import { useState } from "react";
import animationData from '../../data/confetti.json'
import Lottie from "react-lottie";
import { IoCopyOutline } from "react-icons/io5";
import { WorldMap } from "./world-map";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {


  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  image,
  id,
  imgClassName
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  image?: string;
  id: number;
  imgClassName?: string;
}) => {

  const [copied, setCopied] = useState(false);
  const handleCopy = () =>{
    navigator.clipboard.writeText('raiyanalsultan@gmail.com')
    setCopied(true)
  }

  const renderContentBasedOnId = () => {
    
    switch (id) {
      case 2:
        return (
        <div className="text-base font-bold text-white "
          style={{
            backgroundImage: (image || id === 2) ? `url(${image})` : undefined,
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <ul className="flex gap-8 list-none mt-0 relative bottom-10 ">
            <li className="flex flex-wrap gap-8 h-28">
              <ul className="bg-gradient-to-r from-indigo-900 via-indigo-600 to-indigo-400 rounded p-2">Next JS</ul>
              <ul className="bg-gradient-to-r from-indigo-500 via-indigo-800 to-indigo-600 rounded p-2">Nest JS</ul>
            </li>
            <li className="flex flex-wrap gap-8">
              <ul className="bg-gradient-to-r from-indigo-900 via-indigo-600 to-indigo-400 rounded p-2">PostgreSQL</ul>
              <ul className="bg-gradient-to-r from-indigo-500 via-indigo-800 to-indigo-600 rounded p-2">Jest</ul>
              <ul className="bg-gradient-to-r from-indigo-900 via-indigo-600 to-indigo-400 rounded p-2">Vercel</ul>
              <ul className="bg-gradient-to-r from-indigo-900 via-indigo-600 to-indigo-400 rounded p-2">more...</ul>
            </li>
        </ul>
        </div>);
      case 3:
        return <div className="text-lg font-bold">
            <div className={`absolute -bottom-5 right-0`}>
                    <Lottie options={{
                      loop: copied,
                      autoplay: copied,
                      animationData: animationData,
                      rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                      }
                    }} />
            </div>
            <CustomButton text={copied ? 'Email Copied' : "Copy My Email"}
                          icon={<IoCopyOutline />}
                          handleClick={handleCopy}
                          
            
            />
        </div>;
      case 4:
        return <div className="grid grid-cols-1 md:grid-cols-1 gap-4 p-4">
        <div className="relative w-full h-full col-span-1 md:col-span-1">
          {/* Map component */}
          <WorldMap
            dots={[
              {
                start: { lat: 64.2008, lng: -149.4937 },
                end: { lat: 34.0522, lng: -118.2437 },
              },
              {
                start: { lat: 64.2008, lng: -149.4937 },
                end: { lat: -15.7975, lng: -47.8919 },
              },
              {
                start: { lat: -15.7975, lng: -47.8919 },
                end: { lat: 38.7223, lng: -9.1393 },
              },
              {
                start: { lat: 51.5074, lng: -0.1278 },
                end: { lat: 28.6139, lng: 77.209 },
              },
              {
                start: { lat: 28.6139, lng: 77.209 },
                end: { lat: 43.1332, lng: 131.9113 },
              },
              {
                start: { lat: 28.6139, lng: 77.209 },
                end: { lat: -1.2921, lng: 36.8219 },
              },
            ]}
          />
        </div>
      </div>
      
      

    }
  };

  return (
    <div
      className={cn(
        `${id === 2 ? "row-span-1" : ""} rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:border-white/[0.1] border justify-between flex flex-col`,
        className
      )}

      style={{
        backgroundImage: (image || id === 1) ? `url(${image})` : undefined,
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {renderContentBasedOnId()} {/* Dynamically rendered content based on the id */}
        <div className={`${id === 2 ? 'relative bottom-6': ''} font-poppins text-lg font-bold text-cyan-300 dark:text-neutral-200 mb-2`}>
          {title}
        </div>
        <div className="font-poppins font-normal text-slate-100 text-[15px] dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
