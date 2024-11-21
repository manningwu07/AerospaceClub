import { useEffect, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import EventsCard from "~/components/cards/eventsCard";
import { useRouter } from "next/router";
import type { DataStructure } from "~/utils/dataStructure";

export default function EventsPreview({ events }: { events: DataStructure["global"]["events"]}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState("All Time");
  const [filteredEvents, setFilteredEvents] = useState<DataStructure["global"]["events"]>(events);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  const dateRanges = [
    "This Month",
    "Past 90 Days",
    "This Year",
    "Previous Years",
    "All Time",
  ];
  const router = useRouter();

  useEffect(() => {
    const filterEvents = () => {
      return events.filter((event) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const eventDate = new Date(event.date);
        const currentDate = new Date();

        const matchesText =
          event.title.toLowerCase().includes(lowerCaseSearchTerm) ||
          event.description.toLowerCase().includes(lowerCaseSearchTerm) ||
          event.location.toLowerCase().includes(lowerCaseSearchTerm);

        const matchesDate = (() => {
          switch (dateRange) {
            case "This Month":
              return (
                eventDate.getMonth() === currentDate.getMonth() &&
                eventDate.getFullYear() === currentDate.getFullYear()
              );
            case "Past 90 Days":
              const ninetyDaysAgo = new Date(
                currentDate.getTime() - 90 * 24 * 60 * 60 * 1000
              );
              return eventDate >= ninetyDaysAgo && eventDate <= currentDate;
            case "This Year":
              return eventDate.getFullYear() === currentDate.getFullYear();
            case "Previous Years":
              return eventDate.getFullYear() < currentDate.getFullYear();
            default:
              return true;
          }
        })();

        return matchesText && matchesDate;
      });
    };

    setFilteredEvents(filterEvents());
  }, [searchTerm, dateRange]);

  return (
    <div className="mx-auto max-w-4xl border-spacing-1 rounded-lg border-2 border-gray-900 p-8 text-white shadow-2xl">
      <h2 className="mb-6 text-center text-3xl font-bold">Events</h2>
      <div className="mb-6">
        <div className="mb-4 flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div className="relative w-full sm:w-1/2">
            <input
              type="text"
              placeholder="Search for events"
              className="w-full rounded-md border border-gray-700 bg-gray-800 py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex space-x-2">
            <div className="relative">
              <button
                className="flex items-center rounded-md bg-gray-800 px-4 py-2 text-sm text-white transition duration-300 ease-in-out hover:bg-gray-700"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {dateRange} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-gray-800 py-2 shadow-lg z-50">
                  {dateRanges.map((range) => (
                    <button
                      key={range}
                      className="block w-full px-4 py-2 text-left text-sm text-white hover:bg-gray-700"
                      onClick={() => {
                        setDateRange(range);
                        setDropdownOpen(false);
                      }}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        {filteredEvents.slice(0, 3).map((event) => (
          <EventsCard key={event.id} event={event} onLearnMore={() => router.push(`/events`)} />
        ))}
        {filteredEvents.length > 3 && (
          <div className="text-center">
            <Link href="/events">
              <button className="px-4 py-2 text-sm text-white hover:underline transition duration-300 ease-in-out">
                View All Events
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}