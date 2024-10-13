import { motion } from "framer-motion";
import Link from "next/link";
import BoardMembersCard from "~/components/cards/boardMembersCard";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import AboutUs from "~/components/sections/landingPage/AboutUs";
import JoinUs from "~/components/sections/landingPage/JoinUs";
import BoardMembersJSON from "~/controlContentHere/BoardMembers.json";

interface BoardMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

const boardMembers: BoardMember[] = BoardMembersJSON;

function BoardMembers() {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Board Members
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-300 sm:mt-4">
            Meet the visionaries guiding DHS Aerospace towards new frontiers
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {boardMembers.map((member) => (
            <BoardMembersCard member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="-z-10 bg-[url('/about/aboutBG.webp')] bg-cover bg-fixed bg-center text-white">
      <div className="bg-black bg-opacity-40">
        <Navbar />
        <div className="py-24 sm:py-32">
          <AboutUs />
        </div>
        <BoardMembers />
        <JoinUs />
        <div className="flex items-center justify-center py-4 sm:py-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="https://discord.gg/ydCE5eHe3H"
              target="_blank"
              className="rounded-3xl bg-blue-600 px-5 py-3 text-center text-lg font-bold text-white"
            >
              Join the discord
            </Link>
          </motion.button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
