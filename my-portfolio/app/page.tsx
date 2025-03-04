"use client"

import Approach from "@/app/components/Approach";
import Hero from "@/app/components/Hero";
import Project from "@/app/components/Projects";
import TechStack from "@/app/components/TechStack";
// import { FloatingNav } from "@/app/components/ui/floating-navbar"
import {FaHome, FaPhone} from 'react-icons/fa'
import Footer from "@/app/components/Footer";
import dynamic from "next/dynamic";

const FloatingNav = dynamic(
  () => import("@/app/components/ui/floating-navbar").then((mod) => mod.FloatingNav),
  {
    ssr: false,
  }
);


export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <FloatingNav
        navItems={[
          { name: "Home", link: "#home", icon: <FaHome /> },
          { name: "Projects", link: "#projects", icon: <FaHome /> },
          { name: "My Approach", link: "#approach", icon: <FaPhone /> },
          { name: "About", link: "#about", icon: <FaPhone /> },
          { name: "Contact", link: "#contact", icon: <FaPhone /> },
        ]}
      />
      <Hero />
      <TechStack />
      <Project />
      <Approach />
      <Footer />
    </main>
  );
}
