-- 13 Okt 2026: had 5 kelas setiap guru (+5 bagi setiap paket_kelas), had 60 murid pada insert terus.
-- Dijalankan pada projek noaeagitwklnpmyhhhtn; versi jb_ untuk Sejarah serupa. Tambah paket buat masa ini manual:
--   update jb_guru set paket_kelas = paket_kelas + 1 where id = '<uuid guru>';
alter table jb_guru add column if not exists paket_kelas int not null default 0 check (paket_kelas >= 0);
create or replace function jb_had_kelas()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from jb_kelas where guru = new.guru)
     >= 5 * (1 + coalesce((select paket_kelas from jb_guru where id = new.guru), 0)) then
    raise exception 'had kelas bagi setiap guru';
  end if;
  return new;
end $$;
create or replace function jb_had_murid()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from jb_murid where kelas = new.kelas) >= 60 then
    raise exception 'had 60 murid bagi setiap kelas';
  end if;
  return new;
end $$;
drop trigger if exists jb_had_murid on jb_murid;
create trigger jb_had_murid before insert on jb_murid for each row execute function jb_had_murid();
revoke all on function jb_had_murid() from public, anon, authenticated;
