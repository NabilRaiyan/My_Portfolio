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
  const [loading, setLoading] = useState<boolean>(true); // State to track loading
  const [error, setError] = useState<string | null>(null); // State to track error

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
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching projects:", error);
      setError("Failed to load projects."); // Set error state if the request fails
      setLoading(false);
    }
  };

  useEffect(() => {
    all_projects();
  }, []);

  if (loading) {
    return <div className="text-white">Loading...</div>; // Show loading state while fetching data
  }

    if (error) {
    return <div>{error}</div>; // Show error message if fetching fails
  }

  return (
    <div className="justify-center items-center sm:justify-center sm:items-center">
      <h1 className="text-4xl mb-10 sm:text-5xl md:text-[3.2rem] lg:text-4xl xl:text-[3rem] font-poppins font-extralight text-cyan-300 text-center mt-[100px]">
        Some Of My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-[100px]">
        {projects.map((project) => (
          <PinContainer
            key={project.id} // Use project.id for the key to ensure it's unique
            title={project.title} // Project title
            href={project.live_url} // Pass live URL to PinContainer
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
