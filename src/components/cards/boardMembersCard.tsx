import Image from "next/image";

interface BoardMember {
  id: number
  name: string
  role: string
  description: string
  image: string
}

export default function BoardMembersCard({ member }: { member: BoardMember }) {
  return (
    <div
      key={member.id}
      className="transform overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <div className="relative pb-48">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={member.image}
          alt={member.name}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
        <p className="mb-2 text-sm font-medium text-blue-400">{member.role}</p>
        <p className="text-sm text-gray-300">{member.description}</p>
      </div>
    </div>
  );
}
