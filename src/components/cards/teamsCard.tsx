import Image from "next/image";

interface TeamsCardProps {
  name: string;
  lead: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  iconColors: string,
  imageURL: string;
}


export default function TeamsCard({name, lead, description, Icon, iconColors, imageURL}: TeamsCardProps) {
  return (
    <div
      key={name}
      className="overflow-hidden rounded-lg bg-gray-800 shadow-lg"
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            src={imageURL}
            alt={`${name} team`}
            width={300}
            height={200}
            objectFit="cover"
          />
        </div>
        <div className="p-8">
          <div className="mb-2 flex items-center">
            <Icon className={`h-8 w-8 ${iconColors}`} /> 
            <h3 className="ml-2 text-2xl font-semibold">{name}</h3>
          </div>
          <p className="mb-4 text-gray-400">Lead: {lead}</p>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}
