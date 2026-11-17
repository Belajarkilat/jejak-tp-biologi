"""Tampalan (17 Nov 2026): tukar salinan app Jejak TP Fizik kepada Jejak TP Biologi (T4-T5).
Id bab b{tingkatan}b{bab}; jadual/fungsi DB berawalan jb_ (projek Supabase noaeag).
Jalankan sekali dari akar repo: python tools/tampal-biologi.py"""
import re, glob
def baca(p): return open(p, encoding='utf-8').read()
def tulis(p, s): open(p, 'w', encoding='utf-8', newline='\n').write(s)
FAIL = ['index.html','semak.html','landing.html','terma.html','privasi.html','manifest.webmanifest','sw.js',
        'sumber.js','konfig.js','skema.sql','bina.js','bab-indeks.js','CNAME','robots.txt','akses.js','package.json'] \
       + glob.glob('migrasi-*.sql') + glob.glob('tools/*.js') + glob.glob('tools/lukis/*.js') \
       + glob.glob('supabase/**/*.*', recursive=True) + glob.glob('sumber/_f.js')
LINDUNG = [('["jf","Fizik","https://jejaktpfizik.naikgred.com/?keluarga=1"]', '@@FF@@'),
           ('Sejarah, English, Kimia dan Fizik', '@@S6@@')]
UMUM = [
 ('Anak NaikGred Fizik','Anak NaikGred Biologi'), ('Jejak TP Fizik','Jejak TP Biologi'),
 ('jejaktpfizik','jejaktpbiologi'), ('jejak-tp-fizik','jejak-tp-biologi'),
 ('bayar-fizik','bayar-biologi'), ('TOYYIB_KATEGORI_FIZIK','TOYYIB_KATEGORI_BIOLOGI'),
 ('dskp/fizik-en','dskp/biologi-en'),
 ('jf_','jb_'), ('"jf-','"jb-'), ("'jf-","'jb-"), ('const P = "jf"','const P = "jb"'), ('APP_KEL="jf"','APP_KEL="jb"'),
 ('FIZIK','BIOLOGI'), ('Fizik','Biologi'), ('fizik','biologi'),
]
for p in FAIL:
    try: s = baca(p)
    except Exception: continue
    t = s
    for a, b in LINDUNG: t = t.replace(a, b)
    for a, b in UMUM: t = t.replace(a, b)
    t = t.replace('@@FF@@', LINDUNG[0][0] + ',["jb","Biologi","https://jejaktpbiologi.naikgred.com/?keluarga=1"]') \
         .replace('@@S6@@', 'Sejarah, English, Kimia, Fizik dan Biologi')
    t = re.sub(r'\bf([45])b(\d+)\b', r'b\1b\2', t)
    t = t.replace('"f"+t+"b"', '"b"+t+"b"').replace('"f"+', '"b"+')
    t = t.replace('/^f(\d)b/', '/^b(\d)b/').replace('/^f(\d)b(\d+)$/', '/^b(\d)b(\d+)$/') \
         .replace('/^f\d+b\d+$/', '/^b\d+b\d+$/').replace('/^f\db\d+\.js$/', '/^b\db\d+\.js$/')
    if t != s: tulis(p, t); print('dikemas kini:', p)
s = baca('index.html')
for a, b in [('var JUMLAH_BAB={4:6,5:7};', 'var JUMLAH_BAB={4:15,5:13};'),
             ('Biologi Tingkatan 4 (6 bab) dan Tingkatan 5 (7 bab)', 'Biologi Tingkatan 4 (15 bab) dan Tingkatan 5 (13 bab)')]:
    if a not in s: print('TIADA:', a)
    s = s.replace(a, b)
a = s.index('var DUNIA={'); b = s.index('};', a) + 2
s = s[:a] + 'var DUNIA={\n};' + s[b:]
tulis('index.html', s)
t = baca('sw.js'); t = re.sub(r'(VERSI\s*=\s*")[^"]*(")', r'\1jb-2026-11-17a\2', t); tulis('sw.js', t)
for p in ['index.html','semak.html','landing.html','bina.js']:
    baki = [l.strip()[:150] for l in baca(p).split('\n') if re.search(r'Fizik|fizik|\bf\db\d|jf_|"jf', l) and 'jejaktpfizik.naikgred.com/?keluarga' not in l]
    print(p, 'baki:', len(baki))
    for l in baki[:8]: print('   ', l)
