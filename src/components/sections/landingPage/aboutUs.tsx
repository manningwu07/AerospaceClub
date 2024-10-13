import { HandshakeIcon, Rocket, Users } from "lucide-react";
import Image from "next/image";
import AmbitionsCard from "~/components/cards/ambitionsCard";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-6">
      <div className="lg:flex lg:items-center lg:justify-center">
        <div className="flex items-center justify-center">
          <Image
            src="/aboutUs.png"
            alt="About Us"
            width={500}
            height={500}
            className="border-spacing-1 rounded-lg border border-darkPurple"
            style={{
              boxShadow: "0 4px 10px rgba(75, 0, 150, 0.15)",
            }}
          />
        </div>
        <div className="px-4">
          <h2 className="my-8 text-center text-4xl font-bold">Who are we?</h2>
          <p className="mx-auto max-w-3xl text-center text-lg">
            Dublin High School Aerospace is a club dedicated to pushing the
            boundaries of plane and rocket discovery and innovation. Our mission
            is to inspire and educate the next generation of aerospace engineers
            and scientists, fostering a passion for discovery and technological
            advancement.
          </p>
        </div>
      </div>

      <div className="mx-auto my-4 max-w-6xl md:my-8 lg:my-12">
        <h2 className="mb-12 text-center text-4xl font-bold">Our Ambitions</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <AmbitionsCard
            Icon={Rocket}
            title="Competitions"
            description="Reaching new heights in national and international rocketry competitions"
          />
          <AmbitionsCard
            Icon={HandshakeIcon}
            title="Connections"
            description="Gaining industry-level experience and making lifelong friendships"
          />
          <AmbitionsCard
            Icon={Users}
            title="Community"
            description="Educating local students and residents about aerospace technologies"
          />
        </div>
      </div>
    </div>
  );
}
