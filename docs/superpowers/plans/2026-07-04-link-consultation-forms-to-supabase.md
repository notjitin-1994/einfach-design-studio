# Link Consultation Modal + Contact Form to Supabase

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Persist every submission from the global "Book a consultation" modal and the `/contact` page form into a single Supabase `consultations` table, secured with RLS and server-side validation, then verify the build and push to GitHub.

**Architecture:** Keep the existing `POST /api/consultation` route as the single trust boundary. Add a server-side Supabase client (`lib/supabase/server.ts`) using `@supabase/ssr` `createServerClient` + the publishable key. Insert rows with an RLS policy that allows anonymous inserts but denies reads/updates/deletes. Normalize the contact form’s `message` field to `description` before insert and tag submissions with `source`. Harden with Zod schema validation, a honeypot field, and IP-based rate limiting. No service-role key is required for inserts.

**Tech Stack:** Next.js 16 App Router · React 19 · TypeScript · Tailwind v4 · `@supabase/ssr` · `@supabase/supabase-js` · Zod · Upstash Redis (`@upstash/redis`, `@upstash/ratelimit`) for rate limiting.

## Global Constraints
- Use the existing `.env.local` vars: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
- Any new server-only env var must NOT start with `NEXT_PUBLIC_`.
- Never suppress TypeScript errors (`as any`, `@ts-ignore`).
- Match existing code style: double quotes, semicolons, named exports, Tailwind v4 CSS variables.
- All DB writes must use parameterized Supabase client methods — no string-concatenated SQL.
- Do not expose Supabase secrets to the browser.
- The contact form and modal must share the same API contract.

---

### Task 1: Add Zod dependency

**Files:**
- Modify: `/home/jitin/einfach-design-studio/package.json`
- Modify: `/home/jitin/einfach-design-studio/package-lock.json` (via npm install)

**Interfaces:**
- Produces: `zod` package available for import.

- [ ] **Step 1: Install Zod**

Run:
```bash
npm install zod
```

Expected: `package.json` updates with `"zod": "^3.x.x"` and `package-lock.json` regenerates.

- [ ] **Step 2: Verify installation**

Run:
```bash
npm ls zod
```
Expected: prints zod version with no errors.

---

### Task 2: Create server-side Supabase client

**Files:**
- Create: `/home/jitin/einfach-design-studio/lib/supabase/server.ts`

**Interfaces:**
- Consumes: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` from env.
- Produces: `async function createClient(): Promise<SupabaseClient<Database>>`.

- [ ] **Step 1: Write the server client**

```ts
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { Database } from "./database.types";

export async function createClient() {
  const cookieStore = await cookies();
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // setAll can throw in Server Components / Route Handlers when
            // cookies are read-only. Middleware refreshes auth cookies.
          }
        },
      },
    },
  );
}
```

- [ ] **Step 2: Create generated database types file**

Create `/home/jitin/einfach-design-studio/lib/supabase/database.types.ts` with the hand-written minimal types for the `consultations` table:

```ts
export type Database = {
  public: {
    Tables: {
      consultations: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          project_type: string | null;
          description: string;
          source: string;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          name: string;
          email: string;
          phone?: string | null;
          project_type?: string | null;
          description: string;
          source?: string;
          status?: string;
        };
        Update: {
          name?: string;
          email?: string;
          phone?: string | null;
          project_type?: string | null;
          description?: string;
          source?: string;
          status?: string;
        };
      };
    };
  };
};
```

---

### Task 3: Create the `consultations` table and RLS policies in Supabase

**Files:**
- Create: `/home/jitin/einfach-design-studio/supabase/migrations/20260704000000_create_consultations_table.sql`

**Interfaces:**
- Produces: `public.consultations` table with RLS enabled and anon-insert-only policy.

- [ ] **Step 1: Write the migration SQL**

```sql
create table public.consultations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  project_type text,
  description text not null,
  source text not null default 'modal',
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.consultations is 'Inquiries from the website consultation modal and contact form.';

-- Enable RLS
alter table public.consultations enable row level security;

-- Allow anonymous users to insert only. No select/update/delete for anon.
create policy "consultations_anon_insert"
  on public.consultations
  for insert
  to anon
  with check (
    length(name) between 2 and 100
    and length(email) between 3 and 254
    and email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    and (phone is null or (length(phone) between 7 and 20 and phone ~* '^[+\d\s()-]+$'))
    and (project_type is null or project_type in ('New build', 'Renovation', 'Workplace', 'Commercial', 'Design review', 'Other'))
    and length(description) between 10 and 2000
    and source in ('modal', 'contact')
  );

-- Service role can manage all rows (for future admin dashboard / functions)
create policy "consultations_service_role_all"
  on public.consultations
  for all
  to service_role
  using (true)
  with check (true);

-- Indexes for admin dashboard queries
CREATE INDEX idx_consultations_created_at ON public.consultations (created_at desc);
CREATE INDEX idx_consultations_status ON public.consultations (status);
```

- [ ] **Step 2: Apply the migration via Supabase CLI**

Prerequisite: the user must provide a Supabase access token or run the migration in the dashboard.

If using the CLI:
```bash
npx supabase login
npx supabase link --project-ref yzidfofruhqoxujkbvdi
npx supabase db push
```

If running in SQL Editor, paste the migration SQL and execute.

- [ ] **Step 3: Verify the table exists**

Run in Supabase SQL Editor:
```sql
select column_name, data_type, is_nullable
from information_schema.columns
where table_schema = 'public' and table_name = 'consultations'
order by ordinal_position;
```

Expected: columns `id`, `name`, `email`, `phone`, `project_type`, `description`, `source`, `status`, `created_at`, `updated_at`.

---

### Task 4: Update API route to validate and persist

**Files:**
- Modify: `/home/jitin/einfach-design-studio/app/api/consultation/route.ts`

**Interfaces:**
- Consumes: `createClient` from `lib/supabase/server.ts`, Zod schema.
- Produces: `POST` handler that inserts into `consultations` and returns `{ ok: true }` or `{ error: string }`.

- [ ] **Step 1: Replace route.ts with Zod validation + Supabase insert**

```ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

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
  // Honeypot field — must be empty
  website: z.string().max(0).optional(),
});

export type ConsultationPayload = z.infer<typeof ConsultationSchema>;

function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "127.0.0.1"
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = ConsultationSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Honeypot — silently accept but do not persist
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ ok: true });
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
    // Log server-side only; never leak raw DB errors to the client
    console.error("[consultation] insert failed:", error.message);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
```

- [ ] **Step 2: Verify the route compiles**

Run:
```bash
npx tsc --noEmit
```
Expected: no type errors in `app/api/consultation/route.ts`.

---

### Task 5: Add rate limiting (Upstash)

**Files:**
- Modify: `/home/jitin/einfach-design-studio/package.json`
- Create: `/home/jitin/einfach-design-studio/lib/rate-limit.ts`
- Modify: `/home/jitin/einfach-design-studio/app/api/consultation/route.ts`

**Interfaces:**
- Consumes: `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` env vars.
- Produces: `ratelimit` object with `limit(identifier: string)` method.

- [ ] **Step 1: Install Upstash packages**

```bash
npm install @upstash/redis @upstash/ratelimit
```

- [ ] **Step 2: Create lib/rate-limit.ts**

```ts
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "30 m"),
  prefix: "rl:consultation",
  analytics: true,
});
```

- [ ] **Step 3: Apply rate limit in API route**

Add inside `POST` after honeypot check, before insert:

```ts
const ip = getClientIp(request);
const { success, limit, remaining, reset } = await ratelimit.limit(ip);
if (!success) {
  return NextResponse.json(
    { error: "Too many requests. Please try again later." },
    {
      status: 429,
      headers: {
        "X-RateLimit-Limit": String(limit),
        "X-RateLimit-Remaining": String(remaining),
        "X-RateLimit-Reset": String(reset),
        "Retry-After": String(Math.ceil((reset - Date.now()) / 1000)),
      },
    },
  );
}
```

- [ ] **Step 4: Document required env vars**

Add to `.env.local` (read-only; do not commit):
```
UPSTASH_REDIS_REST_URL=https://...upstash.io
UPSTASH_REDIS_REST_TOKEN=...
```

---

### Task 6: Wire the contact form to the API

**Files:**
- Modify: `/home/jitin/einfach-design-studio/app/contact/page.tsx`

**Interfaces:**
- Consumes: `POST /api/consultation` API contract.
- Produces: `handleSubmit` performs async fetch and handles loading/errors/success.

- [ ] **Step 1: Update state and submit handler**

Add `submitting` and `formError` state. Replace `handleSubmit` with async version that remaps `message` to `description` and sets `source: "contact"`.

```ts
const [submitting, setSubmitting] = useState(false);
const [formError, setFormError] = useState<string | null>(null);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setFormError(null);
  const fieldErrors = validate(values);
  if (Object.keys(fieldErrors).length > 0) {
    setErrors(fieldErrors);
    return;
  }
  setSubmitting(true);
  try {
    const res = await fetch("/api/consultation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        projectType: values.projectType,
        description: values.message.trim(),
        source: "contact",
      }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Something went wrong. Please try again.");
    }
    setSent(true);
    setValues(INITIAL);
  } catch (err) {
    setFormError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
  } finally {
    setSubmitting(false);
  }
};
```

- [ ] **Step 2: Update submit button and error display**

Disable button while `submitting`. Show `formError` above the submit button.

---

### Task 7: Improve modal error handling

**Files:**
- Modify: `/home/jitin/einfach-design-studio/components/consultation-modal.tsx`

**Interfaces:**
- Consumes: same `POST /api/consultation` API contract.

- [ ] **Step 1: Parse server error message**

In `handleSubmit`, replace `if (!res.ok) throw new Error(...)` with:

```ts
if (!res.ok) {
  const data = await res.json().catch(() => ({}));
  throw new Error(data.error || "Something went wrong. Please try again.");
}
```

- [ ] **Step 2: Add source field**

Include `"source": "modal"` in the fetch body.

---

### Task 8: Test end-to-end

**Files:**
- All modified files.

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

- [ ] **Step 2: Submit from the modal**

Open `http://localhost:3000`, click "Book a Consultation", fill the form, submit. Verify:
- Network tab shows `POST /api/consultation` returning `201 { ok: true }`
- Row appears in Supabase Table Editor for `consultations`
- `source` column equals `modal`

- [ ] **Step 3: Submit from the contact page**

Navigate to `/contact`, fill the form, submit. Verify:
- `POST /api/consultation` returns `201`
- Row appears with `source` = `contact`

- [ ] **Step 4: Test validation errors**

Submit invalid data (bad email, short description). Verify `400` response with field errors.

- [ ] **Step 5: Test RLS read protection**

Try to `select()` from the browser with the publishable key. Verify it returns `42501` / permission denied.

---

### Task 9: Production build

**Files:**
- All modified files.

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: Build exits with `0`, no TypeScript or lint errors.

- [ ] **Step 2: Verify env vars are not bundled**

Search build output for the publishable key string. It is expected to appear in server chunks only, not in client bundles for non-auth pages.

---

### Task 10: Security review

**Files:**
- `app/api/consultation/route.ts`
- `lib/supabase/server.ts`
- `lib/supabase/database.types.ts`
- `supabase/migrations/20260704000000_create_consultations_table.sql`

- [ ] **Step 1: RLS checklist**
- `alter table public.consultations enable row level security;` is present.
- Only `INSERT` policy exists for `anon`.
- No `SELECT`/`UPDATE`/`DELETE` policies for `anon`.
- Service role has separate policy.

- [ ] **Step 2: API checklist**
- All user input passes through Zod.
- Honeypot rejects silently.
- Rate limit returns `429` with `Retry-After`.
- DB errors are logged server-side only.
- No `.select()` on insert.
- `email` is normalized to lowercase.

- [ ] **Step 3: Env checklist**
- `SUPABASE_SERVICE_ROLE_KEY` is not added to `.env.local` unless strictly needed, and never with `NEXT_PUBLIC_` prefix.
- `UPSTASH_REDIS_REST_TOKEN` is server-only.

---

### Task 11: Commit and push to GitHub

**Files:**
- All modified files plus migration.

- [ ] **Step 1: Review diff**

```bash
GIT_MASTER=1 git status
GIT_MASTER=1 git diff --stat
```

- [ ] **Step 2: Stage and commit**

Group commits:
1. `feat: add supabase server client and consultation types`
2. `feat: create consultations table migration with RLS`
3. `feat: persist consultation submissions to supabase with validation`
4. `feat: wire contact page form to consultation api`
5. `chore: add rate limiting and honeypot to consultation endpoint`
6. `chore: verify production build`

Use git-master commit footer:
```
Ultraworked with [Sisyphus](https://github.com/code-yeongyu/oh-my-openagent)
Co-authored-by: Sisyphus <clio-agent@sisyphuslabs.ai>
```

- [ ] **Step 3: Push**

```bash
GIT_MASTER=1 git push origin $(GIT_MASTER=1 git branch --show-current)
```

---

## Plan review checklist

1. **Spec coverage:**
   - [x] Modal submissions persist to Supabase
   - [x] Contact form submissions persist to Supabase
   - [x] Single table updated by both surfaces
   - [x] RLS protects data from leaks
   - [x] Data is never lost (server-side persistence, error handling)
   - [x] Build passes
   - [x] Pushed to GitHub

2. **Placeholder scan:**
   - [x] No TODOs, TBDs, or "implement later" items remain in production code.

3. **Type consistency:**
   - [x] Table column `project_type` maps to payload `projectType`.
   - [x] `source` enum values (`modal`, `contact`) match in schema, API, SQL, and clients.
