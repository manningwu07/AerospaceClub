import Image from "next/image";

interface Team {
  name: string;
  lead: string;
  description: string;
  icon: any;
  image: string;
}

export default function TeamsCard({ team }: { team: Team }) {
  return (
    <div
      key={team.name}
      className="overflow-hidden rounded-lg bg-gray-800 shadow-lg"
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            src={team.image}
            alt={`${team.name} team`}
            width={300}
            height={200}
            objectFit="cover"
          />
        </div>
        <div className="p-8">
          <div className="mb-2 flex items-center">
            {team.icon}
            <h3 className="ml-2 text-2xl font-semibold">{team.name}</h3>
          </div>
          <p className="mb-4 text-gray-400">Lead: {team.lead}</p>
          <p className="text-gray-300">{team.description}</p>
        </div>
      </div>
    </div>
  );
}
