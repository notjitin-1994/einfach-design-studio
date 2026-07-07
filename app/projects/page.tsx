import { getProjects } from "@/lib/supabase/queries";
import { ProjectsClient } from "./projects-client";

export const revalidate = 60;

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectsClient projects={projects} />;
}
