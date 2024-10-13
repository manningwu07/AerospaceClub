import BoardMembersCard from "~/components/cards/boardMembersCard";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import AboutUs from "~/components/sections/landingPage/AboutUs";
import BoardMembersJSON from "~/controlContentHere/BoardMembers.json";

interface BoardMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

const boardMembers: BoardMember[] = BoardMembersJSON;

function BoardMembers() {
  return (
    <div className="bg-gray-900 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Board Members
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-300 sm:mt-4">
            Meet the visionaries guiding DHS Aerospace towards new frontiers
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {boardMembers.map((member) => (
            <BoardMembersCard member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="text-white">
      <Navbar />
      <div className="bg-gray-900 py-16 sm:py-24">
        <AboutUs />
      </div>
      <BoardMembers />
      <Footer />
    </div>
  );
}
