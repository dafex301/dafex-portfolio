import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import funProjects from "@/data/fun-projects.json";

export const metadata: Metadata = {
  title: "Fun Projects",
};

export default function Page() {
  return (
    <>
      <main className=" text-white text-center xl:mx-64 md:mx-24 mx-5 pb-8">
        <div className="mb-5">
          <h1 className="md:text-4xl text-3xl font-bold drop-shadow-md text-yellow-500 hover:text-white duration-200 ">
            Fun Projects 🥳
          </h1>
          <Link href="/projects">
            <p className="text-gray-500 hover:text-gray-300">
              ⬅️ Back to the boring stuff~
            </p>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {funProjects.map((project) => (
            <a key={project.name} href={`${project.url}`} target="_blank">
              <div className="bg-gray-800 rounded-lg w-full h-36 hover:scale-105 transition-all duration-200">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    className="object-cover h-full w-full rounded-lg"
                    width={1024}
                    height={800}
                  />
                ) : (
                  <h1 className="flex items-center font-bold justify-center h-full">
                    {project.name}
                  </h1>
                )}
              </div>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
