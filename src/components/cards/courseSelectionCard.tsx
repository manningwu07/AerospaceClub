import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function CourseSection({
  title,
  description,
  imageUrl,
  isReversed,
}: {
  title: string;
  description: string;
  imageUrl: string;
  isReversed: boolean;
}) {
  return (
    <div
      className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8`}
    >
      <div className="md:w-1/2 bg-gray-800 p-6 rounded-2xl">    
        <h2 className="mb-4 text-2xl font-bold">{title}</h2>
        <p className="text-gray-300">{description}</p>
        <button className="mt-4 flex items-center rounded-lg bg-blue-600 px-6 py-2 hover:bg-blue-700">
          Learn More <ChevronRight className="ml-2" />
        </button>
      </div>
      <div className="md:w-1/2 p-6 rounded-2xl">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
