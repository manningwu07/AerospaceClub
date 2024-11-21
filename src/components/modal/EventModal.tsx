import { X } from "lucide-react";
import Image from "next/image";
import type { Event } from "~/types/event";

export function EventModal({ event, onClose }: { event: Event; onClose: () => void }) {
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
              src={event.imageSrc}
              alt={event.title}
              height={256}
              width={256}
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
    );
  }
  