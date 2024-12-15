import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {FaHome} from 'react-icons/fa'

export default function Home() {
  return (
    <main className="relative bg-bg flex justify-center items-center flex-col overflow-hidden x-auto sm:px-10 px-5">
      <FloatingNav navItems={[
        {name: 'Home', link: '/', icon: <FaHome /> }
      ]} />
      <Hero />
    </main>
  );
}
