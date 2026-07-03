import { NextResponse } from "next/server";

const projectTypes = [
  "New build",
  "Renovation",
  "Workplace",
  "Commercial",
  "Design review",
  "Other",
];

const FIELD_LIMITS = {
  name: 100,
  email: 254,
  phone: 20,
  projectType: 50,
  description: 2000,
} as const;

const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
const PHONE_RE = /^[+\d\s\-()]{7,20}$/;

function stripControlChars(s: string): string {
  return s.replace(/[\u0000-\u001f\u007f]/g, "");
}

function isString(v: unknown): v is string {
  return typeof v === "string";
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;

  // Extract and sanitize each field — all values treated as untrusted strings.
  // Never pass user input to a query string, shell, or eval. If this data is
  // later persisted to a database, use parameterized queries (e.g. Supabase
  // client methods or a tagged-template SQL builder) — never string-concatenate.
  const name = isString(raw.name) ? stripControlChars(raw.name).trim().slice(0, FIELD_LIMITS.name) : "";
  const email = isString(raw.email) ? stripControlChars(raw.email).trim().slice(0, FIELD_LIMITS.email) : "";
  const phone = isString(raw.phone) ? stripControlChars(raw.phone).trim().slice(0, FIELD_LIMITS.phone) : "";
  const projectType = isString(raw.projectType) ? stripControlChars(raw.projectType).trim().slice(0, FIELD_LIMITS.projectType) : "";
  const description = isString(raw.description) ? stripControlChars(raw.description).trim().slice(0, FIELD_LIMITS.description) : "";

  // Reject any unexpected fields (defense against parameter pollution)
  const allowed = new Set(["name", "email", "phone", "projectType", "description"]);
  for (const key of Object.keys(raw)) {
    if (!allowed.has(key)) {
      return NextResponse.json({ error: "Unexpected field" }, { status: 400 });
    }
  }

  // Server-side validation (mirrors client validation)
  if (name.length < 2) return NextResponse.json({ error: "Invalid name" }, { status: 400 });
  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: "Invalid email" }, { status: 400 });

  const phoneDigits = (phone.match(/\d/g) || []).length;
  if (!PHONE_RE.test(phone) || phoneDigits < 7 || phoneDigits > 15) {
    return NextResponse.json({ error: "Invalid phone" }, { status: 400 });
  }

  if (!projectTypes.includes(projectType)) {
    return NextResponse.json({ error: "Invalid project type" }, { status: 400 });
  }

  if (description.length < 10) {
    return NextResponse.json({ error: "Description too short" }, { status: 400 });
  }

  // Detect common SQL/XSS injection patterns in the description field as a
  // belt-and-suspenders check. Real protection comes from parameterized
  // queries + output encoding; this just rejects obviously hostile payloads
  // before they reach any downstream system.
  const injectionPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER|CREATE|REPLACE)\b)/i,
    /(--|;|\/\*|\*\/)/,
    /<script[\s>]/i,
    /javascript:/i,
    /on\w+\s*=/i,
  ];
  for (const pattern of injectionPatterns) {
    if (pattern.test(description) || pattern.test(name)) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }
  }

  // TODO: when persistence is added, insert via parameterized query:
  //   await db.from("consultations").insert({ name, email, phone, projectType, description })
  // Never: await db.query(`INSERT INTO consultations VALUES ('${name}', ...)`)

  return NextResponse.json({ ok: true });
}
