"use client";
import axios from 'axios'
import { useEffect } from 'react';

const Project = () => {

    const all_projects = async () => {
        try {
          const response = await axios.get("https://ciwzssxdlrxawjaswmff.supabase.co/rest/v1/Project_Table?select=*", {
            headers: {
              apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpd3pzc3hkbHJ4YXdqYXN3bWZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxODA1NTQsImV4cCI6MjA0OTc1NjU1NH0.XEKEPH5IvdPXE_yPbpVPCbK12syUTyaO3CPSM1oSRfw', // Replace with your actual key
            },
          });
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching projects:", error);
        }
      };

    useEffect(() => {
        all_projects();}, []);

    return (
        <div className="justify-center items-center sm:justify-center sm:items-center">
            <h1 className="text-4xl mb-10 sm:text-5xl md:text-[3.2rem] lg:text-4xl xl:text-[3rem] font-poppins font-extralight text-cyan-300 text-center mt-[100px]">
                Some Of My Projects
            </h1>



        </div>

    )
}

export default Project