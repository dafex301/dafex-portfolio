import type { Metadata, ResolvingMetadata } from "next";
import projects from "@/data/projects.json";
import { Project } from "@/types";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// get project data
async function getProject(slug: string): Promise<Project | undefined> {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // get project by slug
  const project = await getProject(slug);

  return {
    title: "| " + project?.name || "Project not found",
  };
}

export default async function Page({ params, searchParams }: Props) {
  const project = await getProject(params.slug);

  return (
    <main className=" text-white text-center xl:mx-64 md:mx-24 mx-5 pb-8">
      <h1 className="md:text-4xl text-3xl font-bold drop-shadow-md text-yellow-500 hover:text-white duration-200 mb-5">
        {project?.name}
      </h1>
    </main>
  );
}
