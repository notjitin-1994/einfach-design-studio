import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import type { Project, ProjectCategory } from "@/lib/content";

function getClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.warn("Missing Supabase environment variables.");
    return null;
  }

  return createSupabaseClient(url, key);
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
  if (!supabase) return [];
  
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
  if (!supabase) return null;

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

export async function getServices() {
  const supabase = getClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching services:", error);
    return [];
  }

  return (data || []).map((dbService: any, index: number) => ({
    index: String(index + 1).padStart(2, "0"),
    title: dbService.title,
    description: dbService.description,
    bullets: dbService.details || [],
  }));
}
