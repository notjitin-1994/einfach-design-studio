import { getProjects } from "@/lib/supabase/queries";
import { ProjectsClient } from "./projects-client";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectsClient projects={projects} />;
}
