import { motion } from "framer-motion";

export default function JoinUs() {
  return (
    <div className="container mx-auto px-6 text-center">
      <h2 className="mb-8 text-4xl font-bold">Join the Crew</h2>
      <p className="mx-auto mb-12 max-w-2xl text-xl">
        Ready to embark on an exciting journey into the cosmos? Join DHS
        Aerospace and be part of the next generation of space explorers!
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-full bg-accentYellow text-black px-8 py-3 text-lg font-bold transition-colors duration-300 hover:bg-yellow-700"
      >
        Join the Crew
      </motion.button>
    </div>
  );
}
