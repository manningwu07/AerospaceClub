import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";  

export default function Footer() {
  return (
    <footer id="contact" className="py-12 bg-darkPurple opacity-80"> 
    <div className="container mx-auto px-6 text-center text-gray-200">
      <h2 className="text-2xl font-bold mb-8">Contact Us</h2>
      <div className="flex justify-center space-x-6 mb-8">
        <Link href="#" className=" hover:text-white transition-colors">
          <Facebook size={24} />
        </Link>
        <Link href="#" className=" hover:text-white transition-colors">
          <Twitter size={24} />
        </Link>
        <Link href="#" className=" hover:text-white transition-colors">
          <Instagram size={24} />
        </Link>
        <Link href="mailto:info@dhsaerospace.com" className=" hover:text-white transition-colors">
          <Mail size={24} />
        </Link>
      </div>
      <div className="flex justify-between">
      <p>&copy; 2024 DHS Aerospace. All rights reserved.</p>
      <p>Made by Manning Wu (Class of 2025)</p>
      </div>
      
    </div>
  </footer>
  );
}
