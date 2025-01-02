
import Approach from "@/components/Approach";
import Hero from "@/components/Hero";
import Project from "@/components/Projects";
import TechStack from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {FaHome, FaPhone} from 'react-icons/fa'
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <FloatingNav navItems={[
        {name: 'Home', link: '#hero', icon: <FaHome /> },
        {name: 'Projects', link: '#projects', icon: < FaHome/> },
        {name: 'My Approach', link: '#approach', icon: <FaPhone /> },
        {name: 'About', link: '#about', icon: <FaPhone /> },
        {name: 'Contact', link: '#contact', icon: <FaPhone /> }
      ]} />
      <Hero />
      <TechStack />
      <Project />
      <Approach />
      <Footer />
    </main>
  );
}
