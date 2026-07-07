import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import type { Project, ProjectCategory } from "@/lib/content";

function getClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

function mapProject(dbProject: any): Project {
  return {
    id: dbProject.slug,
    title: dbProject.title,
    category: dbProject.category as ProjectCategory,
    year: dbProject.year,
    location: dbProject.location,
    summary: dbProject.summary,
    image: dbProject.image_url || "",
    tags: dbProject.tags || [],
    hero: dbProject.hero_text || "",
    process: {
      understand: dbProject.process_phases?.find((p: any) => p.title.toLowerCase() === "understand")?.description || "",
      define: dbProject.process_phases?.find((p: any) => p.title.toLowerCase() === "define")?.description || "",
      design: dbProject.process_phases?.find((p: any) => p.title.toLowerCase() === "design")?.description || "",
      refine: dbProject.process_phases?.find((p: any) => p.title.toLowerCase() === "refine")?.description || "",
      deliver: dbProject.process_phases?.find((p: any) => p.title.toLowerCase() === "deliver")?.description || "",
      support: dbProject.process_phases?.find((p: any) => p.title.toLowerCase() === "support")?.description || "",
    },
    gallery: (dbProject.gallery_images || []).map((img: any) => ({
      src: img.url,
      alt: img.alt || "",
    })),
  };
}

export async function getProjects(): Promise<Project[]> {
  const supabase = getClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("status", "published")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }

  return (data || []).map(mapProject);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const supabase = getClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error || !data) {
    return null;
  }

  return mapProject(data);
}
