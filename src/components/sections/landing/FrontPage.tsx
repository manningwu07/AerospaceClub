import type { DataStructure } from "~/utils/dataStructure";


export default function FrontPage({heading, description}: DataStructure["landing"]["frontPage"]) {
  return (
    <>
      <h1 className="mb-4 text-5xl font-bold">{heading}</h1>
      <p className="text-2xl text-blue-500">{description}</p>
    </>
  );
}
