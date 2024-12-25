"use client";
import React from "react";



// Approach function
const Approach = () => {
  return (
    <section className="justify-center items-center sm:justify-center sm:items-center">
      <h1 className="text-4xl mb-10 sm:text-5xl md:text-[3.2rem] lg:text-4xl xl:text-[3rem] font-poppins font-extralight text-cyan-300 text-center mt-[100px]">
        My <span className="text-purple">Approach</span>
      </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-[160px] mb-[200px]">
            <div className="bg-orange-300 border rounded-sm p-5 w-full h-full">div1</div>
            <div className="bg-orange-300 border rounded-sm p-5 w-full h-full">div2</div>
            <div className="bg-orange-300 border rounded-sm p-5 w-full h-full">div3</div>
        </div>

    </section>
  );
}

export default Approach

