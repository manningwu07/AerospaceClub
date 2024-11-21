import * as Icons from "lucide-react";
import Link from "next/link";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import TeamsCard from "~/components/cards/teamsCard";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import type { SVGProps } from "react"; 
import { type PageProps, usePullContent } from "~/utils/pageUtils";

interface Team {
  name: string;
  lead: string;
  description: string;
  icon: string;
  imageSrc: string; 
}

type IconType = (props: SVGProps<SVGSVGElement>) => JSX.Element;

const getIconComponent = (iconName: string): JSX.Element => {
  // Returns an SVG icon component based on the icon name
  const IconComponent = Icons[iconName as keyof typeof Icons] as IconType | undefined;
  if (IconComponent) {
    return <IconComponent className={`h-8 w-8`} />;
  }
  return <Icons.HelpCircle className={`h-8 w-8`} />;
};

export default function TeamsPage({ adminContent, adminError }: PageProps) {
  const pullContent = usePullContent(); // Unconditionally call the hook

  const content = adminContent ?? pullContent.content;
  const error = adminError ?? pullContent.error;
  
  const [icons, setIcons] = useState<Record<string, JSX.Element>>({});
  const [loading, setLoading] = useState(true);
  const [teams, setTeams] = useState<Team[]>([]);
  
  useEffect(() => {
    if (!content) return;
  
    const loadIcons = () => {
      const loadedIcons: Record<string, JSX.Element> = {};
      for (const team of teams) {  
        const IconComponent = getIconComponent(team.icon);
        loadedIcons[team.name] = IconComponent;
      }
      setIcons(loadedIcons);
      setLoading(false);
    };

    setTeams(content.teams);
    loadIcons();
  }, [teams, content]);


  if (error) {
    // Display a fallback error message if Firestore fetch fails
    return (
      <div className="error-container">
        <h1>Service Unavailable</h1>
        <p>
          We&apos;re experiencing issues retrieving content. Please try again
          later.
        </p>
      </div>
    );
  }

  if(!content) { 
    return (
      <div className="flex h-screen items-center justify-center text-3xl">Loading</div>
    )
  };

  return (
    <div className="min-h-screen bg-darkPurple text-white">
      <Navbar />

      {/* Subteams section with group photo */}
      <section className="-z-10 mb-12 flex h-96 items-center justify-center bg-[url('/about/aboutBG.webp')] bg-cover bg-fixed bg-center">
        <h1 className="text-4xl font-bold">The Teams</h1>
      </section>

      <main className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="my-12 flex items-center justify-center">
            <p>Loading</p>
          </div>
        ) : (
          <section>
            <div className="space-y-8">
              {teams.map((team, index) => (
                <TeamsCard
                  key={index}
                  name={team.name}
                  description={team.description}
                  Icon={icons[team.name]!}
                  imageURL={team.imageSrc}
                  lead={team.lead}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      <h2 className="p-4 text-center text-4xl font-bold">
        Want to find out how you can be part of a team?
      </h2>

      <Link
        href="https://discord.gg/ydCE5eHe3H"
        target="_blank"
        className="flex items-center justify-center py-8"
      >
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
