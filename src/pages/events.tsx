'use client'

import { useEffect, useState } from "react"
import { ChevronDown, Search, X } from "lucide-react"
import EventsCard from "~/components/cards/eventsCard"
import EventsJSON from "~/controlContentHere/Events.json"
import Image from "next/image"
import Footer from "~/components/footer"
import Navbar from "~/components/navbar"

interface Event {
  id: number
  date: string
  title: string
  time: string
  location: string
  description: string
  image: string
  isRecurring?: boolean
  recurrencePattern?: string
}

const events: Event[] = EventsJSON

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [dateRange, setDateRange] = useState("All Time")
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  const dateRanges = ["This Month", "Past 90 Days", "This Year", "Previous Years", "All Time"]

  useEffect(() => {
    const filterEvents = () => {
      return events.filter((event) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase()
        const eventDate = new Date(event.date)
        const currentDate = new Date()

        const matchesText =
          event.title.toLowerCase().includes(lowerCaseSearchTerm) ||
          event.description.toLowerCase().includes(lowerCaseSearchTerm) ||
          event.location.toLowerCase().includes(lowerCaseSearchTerm)

        const matchesDate = (() => {
          switch (dateRange) {
            case "This Month":
              return eventDate.getMonth() === currentDate.getMonth() && eventDate.getFullYear() === currentDate.getFullYear()
            case "Past 90 Days":
              const ninetyDaysAgo = new Date(currentDate.getTime() - 90 * 24 * 60 * 60 * 1000)
              return eventDate >= ninetyDaysAgo && eventDate <= currentDate
            case "This Year":
              return eventDate.getFullYear() === currentDate.getFullYear()
            case "Previous Years":
              return eventDate.getFullYear() < currentDate.getFullYear()
            default:
              return true
          }
        })()

        return matchesText && matchesDate
      })
    }

    setFilteredEvents(filterEvents())
  }, [searchTerm, dateRange])

  const handleLearnMore = (event: Event) => {
    setSelectedEvent(event)
  }

  const closeModal = () => {
    setSelectedEvent(null)
  }

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center my-12 sm:my-16 mb-8">Upcoming Events</h1>
      <div className="max-w-full mx-auto px-[1%]">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
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
                      setDateRange(range)
                      setDropdownOpen(false)
                    }}
                  >
                    {range}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <EventsCard key={event.id} event={event} onLearnMore={handleLearnMore} />
          ))}
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
  )
}

function EventModal({ event, onClose }: { event: Event; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-8 max-w-[80%] w-full mx-4 max-h-[80%] h-fit">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold">{event.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <div className="relative h-64 mb-4">
          <Image
            src={event.image}
            alt={event.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="mb-4">
          <p className="text-blue-400">{event.date}</p>
          <p className="text-gray-300">{event.time}</p>
          <p className="text-gray-300">{event.location}</p>
          {event.isRecurring && (
            <p className="text-yellow-400 mt-2">Recurring Event: {event.recurrencePattern}</p>
          )}
        </div>
        <p className="text-gray-300">{event.description}</p>
      </div>
    </div>
  )
}