-- Hotel Guru Billing minimum tables for online/offline synchronization.
-- If your current menu_items and sales tables already work, do not recreate them.

create table if not exists public.menu_items (
  id text primary key,
  name text not null,
  price numeric(12,2) not null check (price >= 0),
  category text not null,
  subcategory text,
  photo text default '',
  sort_order integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.sales (
  id text primary key,
  bill_no text not null,
  sale_date date not null,
  grand_total numeric(12,2) not null check (grand_total >= 0),
  bill jsonb not null,
  saved_at timestamptz not null default now()
);

-- Visible bill numbers use a local GBR-001 style counter, so do not enforce
-- bill_no uniqueness when more than one offline device may be used.
drop index if exists public.sales_bill_no_unique;
create index if not exists sales_bill_no_idx on public.sales (bill_no);
create index if not exists sales_sale_date_idx on public.sales (sale_date);
create index if not exists sales_saved_at_idx on public.sales (saved_at);
create index if not exists menu_items_sort_idx on public.menu_items (sort_order, name);

-- The frontend uses upsert by primary key. Each offline sale has a UUID, so
-- database rows remain unique even if two devices produce the same visible bill_no.

-- SECURITY IMPORTANT
-- Do not add an unrestricted public DELETE/UPDATE policy in production.
-- The correct next step is Supabase Auth with owner/cashier roles and hotel_id on
-- every row. Then create RLS policies that let cashiers insert sales and let only
-- owners/managers read reports or modify the menu.
--
-- Enabling RLS without matching policies will stop the current frontend from
-- reading/writing. Configure Auth first, test in a staging project, and then enable:
--
-- alter table public.menu_items enable row level security;
-- alter table public.sales enable row level security;
