import { Metadata } from "next";
import Image from "next/image";
import projects from "@/data/projects.json";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Page() {
  return (
    <>
      <main className=" text-white h-screen text-center xl:mx-64 md:mx-24 mx-5">
        <h1 className="md:text-5xl text-xl font-bold drop-shadow-md text-yellow-500 hover:text-white duration-200 mb-5">
          Projects
        </h1>
        <div className="grid grid-cols-2 gap-12">
          {projects.map((project) => (
            <Link key={project.name} href={`/projects/${project.slug}`}>
              <div className="bg-gray-400 rounded-lg w-full h-64 ">
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
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
