import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {FaHome, FaPhone} from 'react-icons/fa'

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden x-auto sm:px-10 px-5">
      <FloatingNav navItems={[
        {name: 'Home', link: '/', icon: <FaHome /> },
        {name: 'My Work', link: '/', icon: < FaHome/> },
        {name: 'About', link: '/', icon: <FaPhone /> },
        {name: 'Contact', link: '/', icon: <FaPhone /> }
      ]} />
      <Hero />
    </main>
  );
}
