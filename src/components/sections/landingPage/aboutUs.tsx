import * as Icons from "lucide-react"; 
import Image from "next/image";
import { useState, useEffect } from "react";
import AmbitionsCard from "~/components/cards/ambitionsCard";
import AboutUsJSON from "~/controlContentHere/AboutUs.json";

const clubPhoto = AboutUsJSON.clubPhoto;
const heading = AboutUsJSON.heading;
const description = AboutUsJSON.description;
const ambitions = AboutUsJSON.ambitions;

const getIconComponent = (iconName: string) => {
  const IconComponent = Icons[iconName as keyof typeof Icons];
  return IconComponent ? IconComponent : Icons["HelpCircle"];
};

export default function AboutUs() {
  const [icons, setIcons] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const loadIcons = async () => {
      const loadedIcons: Record<string, any> = {};
      for (const ambition of AboutUsJSON.ambitions) {
        const IconComponent = getIconComponent(ambition.icon);
        loadedIcons[ambition.title] = IconComponent;
      }
      setIcons(loadedIcons);
      setLoading(false);
    };

    loadIcons();
  }, []);

  return (
    <div className="container mx-auto px-6">
      <div className="lg:flex lg:items-center lg:justify-center">
        <div className="flex items-center justify-center">
          <Image
            src={clubPhoto}
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
          <h2 className="my-8 text-center text-4xl font-bold">{heading}</h2>
          <p className="mx-auto max-w-3xl text-center text-lg">
            {description}
          </p>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center my-12">
          <p>Loading</p> 
        </div>
      ) : (
        <div className="mx-auto my-4 max-w-6xl md:my-8 lg:my-12">
          <h2 className="mb-12 text-center text-4xl font-bold">Our Ambitions</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {ambitions.map((ambition, index) => (
                <AmbitionsCard
                  key={ambition.title}
                  Icon={icons[ambition.title]}
                  title={ambition.title}
                  description={ambition.description}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
