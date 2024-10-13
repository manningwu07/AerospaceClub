import { Rocket, HelpCircle, Cpu} from "lucide-react";
import Link from "next/link";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import TeamsCard from "~/components/cards/teamsCard";
import { motion } from "framer-motion";

const teams = [
  {
    name: "Airframe",
    lead: "Emily Skywalker",
    description:
      "Responsible for designing, constructing, and optimizing the structural components of our rockets. This team focuses on ensuring the airframe's stability, aerodynamics, and structural integrity to withstand the forces encountered during launch and flight. They collaborate closely with all subteams to ensure the development of a functioning vehicle.",
    icon: <Rocket className="h-8 w-8 text-blue-400" />,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Recovery",
    lead: "Alex Stardust",
    description:
      "Tasked with developing and implementing mechanisms that ensure the safe return of the rocket to the ground after its flight. This includes the design and deployment of recovery systems such as parachutes. The team carefully considers factors like altitude, descent rate, and wind conditions to optimize the recovery process.",
    icon: <HelpCircle className="h-8 w-8 text-green-400" />,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Avionics",
    lead: "Sam Nebula",
    description:
      "Focuses on the electronic systems, instrumentation, and control mechanisms of our rockets. This team is responsible for designing and integrating sensors, communication systems, and onboard computers. They play a crucial role in data collection, telemetry, and ensuring the rocket responds correctly to flight conditions.",
    icon: <Cpu className="h-8 w-8 text-purple-400" />,
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Subteams section with group photo */}
      <section className="-z-10 mb-12 flex h-96 items-center justify-center bg-[url('/about/aboutBG.webp')] bg-cover bg-fixed bg-center">
        <h1 className="text-4xl font-bold">The Teams</h1>
      </section>

      <main className="container mx-auto px-4 py-8">
        <section>
          <div className="space-y-8">
            {teams.map((team, index) => (
              <TeamsCard key={index} team={team} />
            ))}
          </div>
        </section>
      </main>
      
      <h2 className="text-4xl text-center font-bold p-4">Want to find out how you can be part of a team?</h2>

      <Link href="https://discord.gg/ydCE5eHe3H" target="_blank" className="py-8 flex justify-center items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-accentYellow px-4 py-3 font-bold text-black transition-colors duration-300 hover:bg-yellow-700"
        >
          Join the discord to learn more
        </motion.button>
      </Link>
        
      <Footer />
    </div>
  );
}
