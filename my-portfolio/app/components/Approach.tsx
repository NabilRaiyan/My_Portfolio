"use client";

import React from "react";
import ApproachCard from "./ui/Card";
import approach_data from '../../data/data.json'


// Approach function 
const Approach = () => {
  return (
    <section className="justify-center items-center sm:justify-center sm:items-center" id="approach">
      <h1 className="text-4xl mb-10 sm:text-5xl md:text-[3.2rem] lg:text-4xl xl:text-[3rem] font-poppins font-extralight text-center mt-[100px]">
        <span className="text-white mr-[20px]">My</span><span className="text-cyan-300">Approach</span>
      </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-[160px] mb-[200px]">
            {
              approach_data &&
              approach_data.approach_data.map((item, idx) => (
                <ApproachCard 
                  key={idx} 
                  title={item.title} 
                  description={item.description} 
                  imageLink={item.imageLink} 
                />
              ))
          }
        </div>
    </section>
  );
}

// exporting Approach section
export default Approach

