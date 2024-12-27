"use client";

import React from "react";
import ApproachCard from "./ui/Card";


// Approach function
const Approach = () => {
  return (
    <section className="justify-center items-center sm:justify-center sm:items-center">
      <h1 className="text-4xl mb-10 sm:text-5xl md:text-[3.2rem] lg:text-4xl xl:text-[3rem] font-poppins font-extralight text-cyan-300 text-center mt-[100px]">
        My <span className="text-purple">Approach</span>
      </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-[160px] mb-[200px]">
            <ApproachCard 
                title="Planning & Strategy" 
                description="We'll collaborate to map out your website's goals, target audience, 
                  and key functionalities. We'll discuss things like site structure, 
                  navigation, and content requirements."
                  imageLink="/images/planing.svg"
              />
            <ApproachCard 
                title="Development & Progress Update" 
                description="Once we agree on the plan, I cue my lofi playlist and dive into
                coding. From initial sketches to polished code, I keep you updated
                every step of the way."
                imageLink="/images/development.jpg"
                
                />
                
            <ApproachCard 
                title="Development & Launch" 
                description="This is where the magic happens! Based on the approved design, 
                I'll translate everything into functional code, building your website
                from the ground up."
                imageLink="/images/launch.jpg"
                
                />
        </div>

    </section>
  );
}

export default Approach

