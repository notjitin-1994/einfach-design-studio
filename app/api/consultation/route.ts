import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { checkRateLimit } from "@/lib/rate-limit";

const projectTypes = [
  "New build",
  "Renovation",
  "Workplace",
  "Commercial",
  "Design review",
  "Other",
] as const;

const ConsultationSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(254),
  phone: z.string().max(20).optional().or(z.literal("")),
  projectType: z.enum(projectTypes),
  description: z.string().min(10).max(2000),
  source: z.enum(["modal", "contact"]).default("modal"),
  website: z.string().optional(),
});

export type ConsultationPayload = z.infer<typeof ConsultationSchema>;

function isHoneypotTriggered(values: { website?: string }): boolean {
  return Boolean(values.website && values.website.length > 0);
}

function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "127.0.0.1"
  );
}

function jsonResponse(body: unknown, init: ResponseInit = {}): NextResponse {
  const headers = new Headers(init.headers);
  headers.set("Cache-Control", "no-store, private");
  return NextResponse.json(body, { ...init, headers });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = ConsultationSchema.safeParse(body);
  if (!parsed.success) {
    return jsonResponse(
      { error: "Invalid input", details: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const data = parsed.data;

  if (isHoneypotTriggered(data)) {
    return jsonResponse({ ok: true });
  }

  const ip = getClientIp(request);
  const rateLimitResult = await checkRateLimit(ip);
  if (!rateLimitResult.allowed) {
    return jsonResponse(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimitResult.retryAfterSeconds),
        },
      },
    );
  }

  const supabase = await createClient();

  const { error } = await supabase.from("consultations").insert({
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    phone: data.phone?.trim() || null,
    project_type: data.projectType,
    description: data.description.trim(),
    source: data.source,
  });

  if (error) {
    console.error("[consultation] insert failed:", error.message);
    return jsonResponse(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }

  return jsonResponse({ ok: true }, { status: 201 });
}
