import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Event {
  id: number;
  date: string;
  title: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

export default function EventsCard({ event }: { event: Event }) {
  return (
    <div
      key={event.id}
      className="opacity-90 overflow-hidden rounded-lg bg-gray-800 shadow-lg transition duration-300 ease-in-out hover:shadow-2xl"
    >
      <div className="md:flex">
        {/* Image Section: 40% width on medium screens and larger */}
        <div className="w-full p-4 md:w-2/5 md:flex-shrink-0">
          <Image
            src={event.image}
            alt={event.title}
            width={300}
            height={300}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-blue-400" />
            <span className="text-blue-400">{event.date}</span>
          </div>
          <h3 className="mb-2 text-xl font-semibold">{event.title}</h3>
          <div className="mb-2 flex items-center">
            <Clock className="mr-2 h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-400">{event.time}</span>
          </div>
          <div className="mb-2 flex items-center">
            <MapPin className="mr-2 h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-400">{event.location}</span>
          </div>
          <p className="mt-2 text-sm text-gray-300">{event.description}</p>
          <Link href="/">
            <button className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm text-white transition duration-300 ease-in-out hover:bg-blue-700">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
