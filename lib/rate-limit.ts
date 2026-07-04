import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

function createRatelimit() {
  if (UPSTASH_REDIS_REST_URL && UPSTASH_REDIS_REST_TOKEN) {
    return new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(5, "30 m"),
      prefix: "rl:consultation",
      analytics: true,
    });
  }

  // Fallback when Upstash is not configured. This allows the app to run in
  // local dev and early deployments, but production sites should set the
  // Upstash env vars for real distributed rate limiting.
  return {
    limit: async () => ({
      success: true,
      limit: Number.POSITIVE_INFINITY,
      remaining: Number.POSITIVE_INFINITY,
      reset: 0,
    }),
  } as unknown as Ratelimit;
}

export const ratelimit = createRatelimit();
