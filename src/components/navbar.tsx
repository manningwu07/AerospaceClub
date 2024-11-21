'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X } from 'lucide-react' 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { href: "/about", label: "About Us" },
    { href: "/events", label: "Events" },
    { href: "/teams", label: "The Teams" },
    { href: "/academy", label: "Aerospace Academy" }, 
    { href: "https://forms.gle/4fAXa5TBCZ1s67GW7", label: "Join Us", external: true },
  ]

  return (
    <motion.nav 
      className="fixed flex w-full justify-center z-40 bg-opacity-80 bg-darkPurple text-white"
      style={{ opacity }}
    >
      <div className="px-6 py-3 flex w-full">
        <Link href="/" className="flex items-center justify-start space-x-2">
          <Image
            src="/logo.png"
            alt="DHS Aerospace Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold">DHS Aerospace</span>
        </Link>
        <div className="hidden md:flex items-center ml-auto space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-blue-400 transition-colors"
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-darkPurple bg-opacity-95 absolute top-full left-0 right-0 shadow-lg"
        >
          <div className="container mx-auto px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 hover:text-blue-400 transition-colors"
                onClick={toggleMenu}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}