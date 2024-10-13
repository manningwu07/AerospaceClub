import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import EventsCard from "~/components/cards/eventsCard";

interface Event {
  id: number;
  date: string;
  title: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    date: "June 15",
    title: "Rocket Launch Simulation",
    time: "3:00 PM - 5:00 PM",
    location: "Virtual Event",
    description:
      "Join us for an exciting virtual rocket launch simulation. Learn about the intricacies of space flight and rocket engineering.",
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    id: 2,
    date: "June 20",
    title: "Guest Lecture: The Future of Space Exploration",
    time: "7:00 PM - 9:00 PM",
    location: "DHS Auditorium",
    description:
      "Renowned astronaut Dr. Jane Smith will discuss the future of space exploration and the role of young engineers in shaping it.",
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    id: 3,
    date: "June 25",
    title: "Aerospace Engineering Workshop",
    time: "10:00 AM - 4:00 PM",
    location: "DHS Engineering Lab",
    description:
      "A hands-on workshop covering the basics of aerospace engineering. Participants will design and build small-scale aircraft models.",
    image: "/placeholder.svg?height=100&width=150",
  },
];

export default function Component() {
  const [dateRange, setDateRange] = useState("This Month");

  return (
    <div className="mx-auto max-w-4xl border-spacing-1 rounded-lg border-2 border-gray-900 p-8 text-white shadow-2xl">
      <h2 className="mb-6 text-center text-3xl font-bold">Upcoming Events</h2>
      <div className="mb-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="relative mr-4 flex-1">
            <input
              type="text"
              placeholder="Search for events"
              className="opacity-90 w-full rounded-md border border-gray-700 bg-gray-800 py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex space-x-2">
            <button className="opacity-90 rounded-md bg-blue-600 px-4 py-2 text-sm text-white transition duration-300 ease-in-out hover:bg-blue-700">
              Find Events
            </button>
            <button className="opacity-90 flex items-center rounded-md bg-gray-800 px-4 py-2 text-sm text-white transition duration-300 ease-in-out hover:bg-gray-700">
              {dateRange} <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        {events.map((event) => (
          <EventsCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
