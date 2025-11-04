-- Create RSVPs table to store guest responses
create table if not exists public.rsvps (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  attending boolean default true,
  food_choice text,
  dietary_restrictions text,
  message text,
  needs_shuttle boolean,
  accommodation_choice text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  -- Add constraint to ensure accommodation_choice has valid values
  constraint accommodation_choice_check 
    check (accommodation_choice is null or accommodation_choice in ('cellar_in_town', 'hygge_house', 'sort_out_myself'))
);

-- Enable Row Level Security
alter table public.rsvps enable row level security;

-- Create policy to allow anyone to insert RSVPs (public form)
create policy "Anyone can insert RSVPs"
  on public.rsvps for insert
  with check (true);

-- Create policy to allow anyone to view RSVPs (for admin purposes later)
create policy "Anyone can view RSVPs"
  on public.rsvps for select
  using (true);

-- Create index on created_at for efficient sorting
create index if not exists rsvps_created_at_idx on public.rsvps(created_at desc);