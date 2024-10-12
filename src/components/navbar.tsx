import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const { scrollYProgress } = useScroll(); 
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  return (
    <motion.nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-80 bg-darkPurple"
    style={{ opacity }}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="DHS Aerospace Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold">DHS Aerospace</span>
        </Link>
        <nav className="hidden items-center space-x-4 md:flex">
          <Link href="/about" className="hover:text-blue-400 transition-colors">
            About Us
          </Link>
          <Link href="/events" className="hover:text-blue-400 transition-colors">
            Events
          </Link>
          <Link href="/teams" className="hover:text-blue-400 transition-colors">
            The Teams
          </Link>
          <Link href="/classes" className="hover:text-blue-400 transition-colors">
            Classes
          </Link>
          <Link href="/join" className="hover:text-blue-400 transition-colors">
            Join Us
          </Link>
        </nav>
      </div>
    </motion.nav>
  );
}
