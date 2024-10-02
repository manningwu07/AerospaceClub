import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-purple bg-darkPurple">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.jpg"
            alt="Gemini Academy Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold">Gemini Academy</span>
        </Link>
        <nav className="hidden items-center space-x-4 md:flex">
          <Link
            href="/about"
            className="transition-colors hover:text-gold"
          >
            About Us
          </Link>
          <Link href="/team" className="transition-colors hover:text-gold">
            The Team
          </Link>
          <Link
            href="/classes"
            className="transition-colors hover:text-gold"
          >
            Classes
          </Link>
          <Button className="bg-gold text-darkPurple hover:bg-gold/90">
            Join Us
          </Button>
        </nav>
      </div>
    </header>
  );
}