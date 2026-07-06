import { createHash } from "crypto";
import { createAdminClient } from "./supabase/admin";

const RATE_LIMIT_WINDOW_MS = 30 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

export async function checkRateLimit(ip: string): Promise<
  | { allowed: true; remaining: number }
  | { allowed: false; retryAfterSeconds: number }
> {
  const ipHash = createHash("sha256").update(ip).digest("hex");
  const supabase = createAdminClient();
  const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MS).toISOString();

  await supabase
    .from("rate_limits")
    .delete()
    .lt("created_at", windowStart);

  const { count, error: countError } = await supabase
    .from("rate_limits")
    .select("id", { count: "exact", head: true })
    .eq("ip_hash", ipHash)
    .gte("created_at", windowStart);

  if (countError) {
    console.error("[rate-limit] count failed:", countError.message);
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW };
  }

  const currentCount = count ?? 0;
  if (currentCount >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, retryAfterSeconds: Math.ceil(RATE_LIMIT_WINDOW_MS / 1000) };
  }

  const { error: insertError } = await supabase
    .from("rate_limits")
    .insert({ ip_hash: ipHash });

  if (insertError) {
    console.error("[rate-limit] insert failed:", insertError.message);
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - currentCount };
  }

  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - currentCount - 1 };
}
