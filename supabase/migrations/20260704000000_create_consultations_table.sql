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
create index idx_consultations_created_at on public.consultations (created_at desc);
create index idx_consultations_status on public.consultations (status);
