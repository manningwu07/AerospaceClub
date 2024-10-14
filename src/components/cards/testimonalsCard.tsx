export default function TestimonialCard({ quote, author }: { quote: string; author: string }) {
    return (
      <div className="max-w-sm rounded-lg bg-gray-800 p-6">
        <p className="mb-4 italic">"{quote}"</p>
        <p className="font-bold text-accentYellow">- {author}</p> 
      </div>
    );
  }