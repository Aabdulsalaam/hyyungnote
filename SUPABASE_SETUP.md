# Supabase setup

1. Create a Supabase project.
2. Copy the project URL and anon key into .env.local.
3. Create a table named notes with the following schema:

```sql
create table public.notes (
  id text primary key,
  payload jsonb not null,
  created_at timestamptz default now()
);
```

4. Make sure Row Level Security is disabled for local development or configure it for your needs.
5. Restart the Vite dev server after adding the environment variables.
