import Link from "next/link";
import { Twitter, Instagram, Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer id="contact" className="bg-darkPurple py-12 opacity-80">
      <div className="container mx-auto px-6 text-center text-gray-200">
        <h2 className="mb-8 text-2xl font-bold">Contact Us</h2>
        <div className="mb-8 flex justify-center space-x-6">
          <Link href="https://discord.gg/ydCE5eHe3H" className="transition-colors hover:text-white">
            <FontAwesomeIcon icon={faDiscord} size="lg" className="text-zinc-200" />
          </Link>
          <Link href="#" className="transition-colors hover:text-white">
            <Twitter size={24} />
          </Link>
          <Link href="#" className="transition-colors hover:text-white">
            <Instagram size={24} />
          </Link>
          <Link
            href="mailto:info@dhsaerospace.com"
            className="transition-colors hover:text-white"
          >
            <Mail size={24} />
          </Link>
        </div>
        <div className="sm:flex sm:justify-between">
          <p>&copy; 2024 DHS Aerospace. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">Made by Manning Wu (Class of 2025)</p>
        </div>
      </div>
    </footer>
  );
}
