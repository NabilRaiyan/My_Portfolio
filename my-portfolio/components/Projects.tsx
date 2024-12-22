"use client";


import React, { useEffect, useState } from "react";
import axios from "axios";
import { PinContainer } from "./ui/3d-pin";

interface Project {
    id: number;
    created_at: string;
    title: string;
    description: string;
    live_url: string;
    technologies: Record<string, string>; // Key-value pair for technologies
    image_url: string | null;
  }

  
const Projects = () => {

   const [projects, setProjects] = useState<Project[]>([]);

  // Fetch all projects from the API
  const all_projects = async () => {
    try {
      const response = await axios.get(
        "https://ciwzssxdlrxawjaswmff.supabase.co/rest/v1/Project_Table?select=*",
        {
          headers: {
            apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpd3pzc3hkbHJ4YXdqYXN3bWZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxODA1NTQsImV4cCI6MjA0OTc1NjU1NH0.XEKEPH5IvdPXE_yPbpVPCbK12syUTyaO3CPSM1oSRfw", // Replace with your actual Supabase API key
          },
        }
      );
      setProjects(response.data); // Store the response data in state
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    all_projects();
  }, []);

  return (
    <div className="justify-center items-center sm:justify-center sm:items-center">
      <h1 className="text-4xl mb-10 sm:text-5xl md:text-[3.2rem] lg:text-4xl xl:text-[3rem] font-poppins font-extralight text-cyan-300 text-center mt-[100px]">
        Some Of My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <PinContainer
            key={index} // Ensure a unique key for each item
            title={project.title} // Replace with the actual title property from your data
            href={project.live_url} // Replace with the actual href property from your data
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              {/* Project Title */}
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {project.title}
              </h3>

              {/* Project Description */}
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">{project.description}</span>
              </div>

              {/* Technologies Used */}
              <ul className="mt-2 text-slate-400 text-sm list-disc list-inside">
                {project.technologies &&
                  Object.values(project.technologies).map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
              </ul>

              {/* Project Image */}
              <div
                className={`flex flex-1 w-full rounded-lg mt-4 ${
                  project.image_url
                    ? `bg-cover bg-center`
                    : `bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500`
                }`}
                style={
                  project.image_url
                    ? { backgroundImage: `url(${project.image_url})` }
                    : {}
                }
              />
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
};

export default Projects;
