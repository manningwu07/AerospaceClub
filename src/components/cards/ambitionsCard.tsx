
interface AmbitionsCardProps {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}

export default function AmbitionsCard({ Icon, title, description }: AmbitionsCardProps) {
  return (
    <div className="text-center">
      <div className="mb-4 inline-block rounded-full bg-accentYellow p-4">
        <Icon className="h-8 w-8 text-gray-900" />
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-400">
        {description}
      </p>
    </div>
  );
}
