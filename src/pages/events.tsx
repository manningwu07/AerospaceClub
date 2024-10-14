"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Search} from "lucide-react";
import EventsCard from "~/components/cards/eventsCard";
import EventsJSON from "~/controlContentHere/Events.json";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import { EventModal } from "~/components/modal/EventModal";

interface Event {
  id: number;
  date: string;
  title: string;
  time: string;
  location: string;
  description: string;
  image: string;
  isRecurring?: boolean;
  recurrencePattern?: string;
}

const events: Event[] = EventsJSON;

function parseEventDateTime(eventDate: string, eventTime: string): Date {
  try {
    // Regular expression to extract hours, minutes, and AM/PM
    const parsedEventDate = new Date(eventDate);

    if (isNaN(parsedEventDate.getTime())) {
      return new Date();
    }

    const timeRegex = /(\d{1,2}):(\d{2})\s?(AM|PM)/i;
    const timeMatch = timeRegex.exec(eventTime);

    if (timeMatch) {
      const [, hoursStr, minutes, period] = timeMatch;
      let hours = parseInt(hoursStr!, 10);

      // Handle AM/PM conversion
      if (period!.toLowerCase() === "pm" && hours !== 12) {
        hours += 12;
      } else if (period!.toLowerCase() === "am" && hours === 12) {
        hours = 0;
      }

      // Set the hours and minutes to the parsed eventDate
      parsedEventDate.setHours(hours, parseInt(minutes!), 0);
      console.log("parsedEventDate", parsedEventDate);
      return parsedEventDate;
    } else {
      // If time parsing fails, fallback to 23:59
      parsedEventDate.setHours(23, 59, 0);
      return parsedEventDate;
    }
  } catch {
    const fallbackDate = new Date(eventDate);
    fallbackDate.setHours(23, 59, 0);
    return fallbackDate;
  }
}

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Upcoming events states
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [upcomingDateRange, setUpcomingDateRange] = useState("All Upcoming");
  const [upcomingDropdownOpen, setUpcomingDropdownOpen] = useState(false);

  // Past events states
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const [pastDateRange, setPastDateRange] = useState("All Past");
  const [pastDropdownOpen, setPastDropdownOpen] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const upcomingDateRanges = [
    "This Month",
    "Next 90 Days",
    "This Year",
    "Next Year",
    "All Upcoming",
  ];
  const pastDateRanges = [
    "Past 30 Days",
    "Past 90 Days",
    "Past Year",
    "Older",
    "All Past",
  ];

  // Upcoming events filtering
  useEffect(() => {
    const filterUpcomingEvents = () => {
      const currentDate = new Date();

      return events.filter((event) => {
        const eventDate = parseEventDateTime(event.date, event.time);
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        const isUpcoming = eventDate >= currentDate;

        const matchesText =
          event.title.toLowerCase().includes(lowerCaseSearchTerm) ||
          event.description.toLowerCase().includes(lowerCaseSearchTerm) ||
          event.location.toLowerCase().includes(lowerCaseSearchTerm);

        let matchesDate = true;

        if (isUpcoming) {
          switch (upcomingDateRange) {
            case "This Month":
              matchesDate =
                eventDate.getMonth() === currentDate.getMonth() &&
                eventDate.getFullYear() === currentDate.getFullYear();
              break;
            case "Next 90 Days":
              const ninetyDaysLater = new Date(
                currentDate.getTime() + 90 * 24 * 60 * 60 * 1000,
              );
              matchesDate =
                eventDate >= currentDate && eventDate <= ninetyDaysLater;
              break;
            case "This Year":
              matchesDate =
                eventDate.getFullYear() === currentDate.getFullYear();
              break;
            case "Next Year":
              matchesDate =
                eventDate.getFullYear() === currentDate.getFullYear() + 1;
              break;
            default:
              matchesDate = true;
          }
        } else {
          matchesDate = false;
        }

        return isUpcoming && matchesText && matchesDate;
      });
    };

    setUpcomingEvents(filterUpcomingEvents());
  }, [searchTerm, upcomingDateRange]);

  // Past events filtering
  useEffect(() => {
    const filterPastEvents = () => {
      const currentDate = new Date();

      return events.filter((event) => {
        const eventDate = parseEventDateTime(event.date, event.time);
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        const isPast = eventDate < currentDate;

        const matchesText =
          event.title.toLowerCase().includes(lowerCaseSearchTerm) ||
          event.description.toLowerCase().includes(lowerCaseSearchTerm) ||
          event.location.toLowerCase().includes(lowerCaseSearchTerm);

        let matchesDate = true;

        if (isPast) {
          switch (pastDateRange) {
            case "Past 30 Days":
              const thirtyDaysAgo = new Date(
                currentDate.getTime() - 30 * 24 * 60 * 60 * 1000,
              );
              matchesDate =
                eventDate >= thirtyDaysAgo && eventDate < currentDate;
              break;
            case "Past 90 Days":
              const ninetyDaysAgo = new Date(
                currentDate.getTime() - 90 * 24 * 60 * 60 * 1000,
              );
              matchesDate =
                eventDate >= ninetyDaysAgo && eventDate < currentDate;
              break;
            case "Past Year":
              matchesDate =
                eventDate.getFullYear() === currentDate.getFullYear() - 1;
              break;
            case "Older":
              matchesDate =
                eventDate < new Date(currentDate.getFullYear() - 1, 0, 1);
              break;
            default:
              matchesDate = true;
          }
        } else {
          matchesDate = false;
        }

        return isPast && matchesText && matchesDate;
      });
    };

    setPastEvents(filterPastEvents());
  }, [searchTerm, pastDateRange]);

  const handleLearnMore = (event: Event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 p-8 text-white">
        <h1 className="my-8 text-center text-4xl font-bold">Events</h1>
        <div className="mx-auto max-w-full px-[1%]">
          {/* Search Input */}
          <div className="mb-8 flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
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
          </div>
          <div className="flex items-center justify-between">
            {/* Upcoming Events Section */}
            <h2 className="mb-4 text-3xl font-bold">Upcoming Events</h2>
            {/* Upcoming Events Date Range Filter */}
            <div className="mb-8 flex items-center">
              <div className="relative">
                <button
                  className="flex items-center rounded-md bg-gray-800 px-4 py-2 text-sm text-white transition duration-300 ease-in-out hover:bg-gray-700"
                  onClick={() => {
                    setUpcomingDropdownOpen(!upcomingDropdownOpen);
                    setPastDropdownOpen(false); // Close past dropdown if open
                  }}
                >
                  {upcomingDateRange} <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {upcomingDropdownOpen && (
                  <div className="absolute right-0 z-50 mt-2 w-48 rounded-md bg-gray-800 py-2 shadow-lg">
                    {upcomingDateRanges.map((range) => (
                      <button
                        key={range}
                        className="block w-full px-4 py-2 text-left text-sm text-white hover:bg-gray-700"
                        onClick={() => {
                          setUpcomingDateRange(range);
                          setUpcomingDropdownOpen(false);
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

          {/* Upcoming Events List */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event) => (
                <EventsCard
                  key={event.id}
                  event={event}
                  onLearnMore={handleLearnMore}
                />
              ))
            ) : (
              <p className="text-center">No upcoming events found.</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            {/* Past Events Section */}
            <h2 className="mb-4 mt-12 text-3xl font-bold">Past Events</h2>
            {/* Past Events Date Range Filter */}
            <div className="mb-8 flex items-center">
              <div className="relative">
                <button
                  className="flex items-center rounded-md bg-gray-800 px-4 py-2 text-sm text-white transition duration-300 ease-in-out hover:bg-gray-700"
                  onClick={() => {
                    setPastDropdownOpen(!pastDropdownOpen);
                    setUpcomingDropdownOpen(false); // Close upcoming dropdown if open
                  }}
                >
                  {pastDateRange} <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {pastDropdownOpen && (
                  <div className="absolute right-0 z-50 mt-2 w-48 rounded-md bg-gray-800 py-2 shadow-lg">
                    {pastDateRanges.map((range) => (
                      <button
                        key={range}
                        className="block w-full px-4 py-2 text-left text-sm text-white hover:bg-gray-700"
                        onClick={() => {
                          setPastDateRange(range);
                          setPastDropdownOpen(false);
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
          {/* Past Events List */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {pastEvents.length > 0 ? (
              pastEvents.map((event) => (
                <EventsCard
                  key={event.id}
                  event={event}
                  onLearnMore={handleLearnMore}
                />
              ))
            ) : (
              <p className="text-center">No past events found.</p>
            )}
          </div>
        </div>
        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={closeModal} />
        )}
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
}
