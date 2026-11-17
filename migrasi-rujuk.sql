-- Rujukan lawatan (18 Okt 2026): lajur rujuk = hos laman yang membawa pelawat
-- (document.referrer, tanpa www.), atau 'langsung' jika tiada, ditambah '|app-<nama>'
-- jika dibuka dalam pelayar app (Facebook, Instagram, Threads, TikTok, Telegram, Line).
-- Juga: jb_ping kini terima 'klik' (sebelum ini klik butang landing Biologi ditolak senyap).
alter table jb_ping add column if not exists rujuk text not null default '';
alter table jb_ping drop constraint if exists jb_ping_jenis_check;
alter table jb_ping add constraint jb_ping_jenis_check
  check (jenis = any (array['buka','hentian','ralat','lawat','klik']));
drop function if exists public.jb_ping(text, text, text, integer, text);
CREATE OR REPLACE FUNCTION public.jb_ping(p_jenis text, p_peranti text, p_bab text DEFAULT NULL::text, p_aras integer DEFAULT NULL::integer, p_nota text DEFAULT ''::text, p_rujuk text DEFAULT ''::text)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
begin
  if p_jenis not in ('buka','hentian','ralat','lawat','klik') then return; end if;
  if p_peranti !~ '^[a-z0-9]{8}$' then return; end if;
  if p_bab is not null and p_bab !~ '^s[1-5]b[0-9]{1,2}$' then return; end if;
  if (select count(*) from jb_ping
      where peranti = p_peranti and masa > now() - interval '1 day') >= 300 then
    return;
  end if;
  insert into jb_ping (jenis, bab, aras, peranti, nota, rujuk)
  values (p_jenis, p_bab,
          case when p_aras between 1 and 6 then p_aras end,
          p_peranti, left(coalesce(p_nota,''), 300),
          left(regexp_replace(lower(coalesce(p_rujuk,'')), '[^a-z0-9.:|_-]', '', 'g'), 100));
end $function$;
grant execute on function public.jb_ping(text, text, text, integer, text, text) to anon, authenticated;
notify pgrst, 'reload schema';
