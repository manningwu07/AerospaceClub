import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="container mx-auto px-6">
      <h2 className="mb-12 text-center text-4xl font-bold">Our Projects</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Satellite Design",
            image: "/placeholder.svg?height=300&width=400",
          },
          {
            title: "Rocket Propulsion",
            image: "/placeholder.svg?height=300&width=400",
          },
          {
            title: "Space Habitat",
            image: "/placeholder.svg?height=300&width=400",
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="overflow-hidden rounded-lg bg-darkPurple shadow-lg"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
