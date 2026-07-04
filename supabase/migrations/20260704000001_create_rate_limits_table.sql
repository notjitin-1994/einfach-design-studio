create table public.rate_limits (
  id uuid primary key default gen_random_uuid(),
  ip_hash text not null,
  created_at timestamptz not null default now()
);

comment on table public.rate_limits is 'Request counts for IP-based rate limiting on consultation submissions.';

-- Enable RLS
alter table public.rate_limits enable row level security;

-- Service role manages all rows (cleanup, counts, inserts)
create policy "rate_limits_service_role_all"
  on public.rate_limits
  for all
  to service_role
  using (true)
  with check (true);

-- Index for fast cleanup and per-IP lookups
create index idx_rate_limits_ip_hash_created_at on public.rate_limits (ip_hash, created_at);
create index idx_rate_limits_created_at on public.rate_limits (created_at);
