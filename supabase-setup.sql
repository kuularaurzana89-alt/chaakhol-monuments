-- Создайте в Supabase Storage публичный bucket monument-photos,
-- затем выполните этот SQL в SQL Editor.

create table if not exists public.monument_photos (
  id uuid primary key default gen_random_uuid(),
  monument_id text not null,
  file_path text not null,
  public_url text not null,
  uploaded_at timestamptz not null default now()
);

alter table public.monument_photos enable row level security;

create policy "Public can view photo records"
on public.monument_photos for select to anon, authenticated using (true);

create policy "Signed-in admin can add photo records"
on public.monument_photos for insert to authenticated with check (true);

create policy "Signed-in admin can delete photo records"
on public.monument_photos for delete to authenticated using (true);

create policy "Public can view monument image files"
on storage.objects for select to public
using (bucket_id = 'monument-photos');

create policy "Signed-in admin can upload monument image files"
on storage.objects for insert to authenticated
with check (bucket_id = 'monument-photos');

create policy "Signed-in admin can delete monument image files"
on storage.objects for delete to authenticated
using (bucket_id = 'monument-photos');
