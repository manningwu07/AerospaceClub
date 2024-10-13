import { motion } from "framer-motion";
import JoinUsJSON from "~/controlContentHere/JoinUs.json";
import Link from "next/link";

const heading = JoinUsJSON.heading;
const description = JoinUsJSON.description;
const buttonText = JoinUsJSON.buttonText;

export default function JoinUs() {
  return (
    <div className="container mx-auto px-6 text-center">
      <h2 className="mb-8 text-4xl font-bold">{heading}</h2>
      <p className="mx-auto mb-12 max-w-2xl text-xl">{description}</p>
      <Link href=" https://forms.gle/4fAXa5TBCZ1s67GW7" target="_blank">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-accentYellow px-8 py-3 text-lg font-bold text-black transition-colors duration-300 hover:bg-yellow-700"
        >
          {buttonText}
        </motion.button>
      </Link>
    </div>
  );
}
