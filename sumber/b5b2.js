/* Biologi KSSM Tingkatan 5, Bab 2 Struktur dan Fungsi Daun.
   SK 2.1 Struktur daun, 2.2 Organ utama pertukaran gas, 2.3 Organ utama transpirasi,
   2.4 Organ utama fotosintesis, 2.5 Titik pampasan (DSKP Biologi).
   Kadar transpirasi disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Lorong Daun", sk:"2.1 Struktur daun · 2.2 Pertukaran gas", lampiran:null,
 kadNama:"Mesofil Palisad", kadEm:"\u{1F343}", kadFakta:"Sel mesofil palisad tersusun rapat di bawah epidermis atas dan paling banyak mengandungi kloroplas.",
 bosKadNama:"Sel Pengawal", bosKadEm:"\u{1F6AA}", bosKadFakta:"Sepasang sel pengawal mengawal pembukaan dan penutupan liang stoma.",
 soalan:[
 {j:"pilih",t:"Lapisan daun yang paling banyak mengandungi kloroplas ialah:",p:["Mesofil palisad","Epidermis atas","Kutikel berlilin","Mesofil berspan"],b:0,u:"Sel palisad tersusun tegak dan rapat untuk menyerap cahaya maksimum."},
 {j:"pilih",t:"Ruang udara yang banyak terdapat dalam lapisan:",p:["Mesofil berspan","Mesofil palisad","Epidermis bawah","Kutikel atas"],b:0,u:"Ruang udara membolehkan gas meresap ke seluruh daun."},
 {j:"pilih",t:"Liang kecil pada epidermis daun untuk pertukaran gas dikenali sebagai:",p:["Stoma","Lentisel","Vakuol","Kutikel"],b:0,u:"Stoma kebanyakannya di epidermis bawah."},
 {j:"pilih",t:"Sel pengawal berbeza daripada sel epidermis lain kerana ia:",p:["Ada kloroplas","Tiada nukleus","Tiada dinding sel","Sel yang sudah mati"],b:0,u:"Kloroplas menghasilkan glukosa yang mempengaruhi pembukaan stoma."},
 {j:"pilih",t:"Berkas vaskular dalam urat daun terdiri daripada:",p:["Xilem dan floem","Stoma dan kutikel","Palisad dan berspan","Kambium dan gabus"],b:0,u:"Xilem membawa air masuk, floem membawa sukrosa keluar."},
 {j:"pilih",t:"Gas yang diresap MASUK ke daun pada waktu siang untuk fotosintesis ialah:",p:["Karbon dioksida","Gas oksigen","Gas nitrogen","Wap air panas"],b:0,u:"Karbon dioksida meresap dari udara melalui stoma."},
 {j:"pilih",t:"Kehilangan air dalam bentuk wap melalui stoma dipanggil:",p:["Transpirasi","Respirasi","Fotosintesis","Gutasi"],b:0,u:"Transpirasi menghasilkan tarikan yang menaikkan air dalam xilem."},
 {j:"banyak",t:"Pilih DUA ciri daun yang membantu fotosintesis.",p:["Permukaan lebar dan nipis","Banyak kloroplas","Kutikel sangat tebal","Tiada stoma langsung"],b:[0,1],u:"Permukaan lebar menyerap cahaya; daun nipis memendekkan jarak resapan gas."}],
 bos:{j:"pilih",t:"Mengapakah kebanyakan stoma terletak di epidermis BAWAH daun?",p:["Kurangkan penyejatan","Mendapat lebih banyak cahaya","Mudah diserang serangga","Menyerap air hujan terus"],b:0,u:"Permukaan bawah lebih teduh dan sejuk, jadi kadar penyejatan lebih rendah."}},

{n:2, tempat:"Gerbang Stoma", sk:"2.2 Mekanisme pembukaan dan penutupan stoma", lampiran:"a1",
 kadNama:"Ion Kalium", kadEm:"\u{1F9C2}", kadFakta:"Pengambilan ion K+ ke dalam sel pengawal menurunkan keupayaan air dan menyebabkan air masuk secara osmosis.",
 bosKadNama:"Asid Absisik", bosKadEm:"\u{1F975}", bosKadFakta:"Semasa kemarau, asid absisik dirembes dan menyebabkan stoma tertutup.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah peristiwa bertanda ?",p:["Air masuk secara osmosis","Air keluar secara osmosis","Ion K+ keluar dari sel","Kanji dihasilkan"],b:0,u:"Larutan dalam sel pengawal menjadi hipertonik, jadi air meresap masuk."},
 {j:"pilih",t:"Berdasarkan Rajah 1, stoma terbuka kerana sel pengawal menjadi:",p:["Segah","Flasid","Plasmolisis","Mati"],b:0,u:"Dinding dalam yang tebal menyebabkan sel segah melengkung dan liang terbuka."},
 {j:"pilih",t:"Dinding sel pengawal di sebelah liang lebih tebal. Kesannya, apabila sel segah:",p:["Sel melengkung keluar","Sel mengecut ke dalam","Liang stoma tertutup rapat","Sel pengawal pecah"],b:0,u:"Dinding nipis di sebelah luar meregang lebih banyak."},
 {j:"pilih",t:"Pada waktu malam, kebanyakan stoma tertutup kerana:",p:["Tiada fotosintesis","Suhu terlalu tinggi","Air bertambah dalam sel","Cahaya terlalu terang"],b:0,u:"Tanpa cahaya, ion K+ meresap keluar dan sel pengawal menjadi flasid."},
 {j:"pilih",t:"Berdasarkan Rajah 1, ion K+ masuk ke sel pengawal melalui:",p:["Pengangkutan aktif","Resapan ringkas","Osmosis melalui membran","Pinositosis vesikel"],b:0,u:"Pengangkutan aktif menggunakan ATP daripada respirasi dan fotosintesis."},
 {j:"pilih",t:"Teori lain menyatakan stoma terbuka apabila sel pengawal menghasilkan:",p:["Glukosa","Kanji","Lipid","Protein"],b:0,u:"Glukosa terlarut menurunkan keupayaan air dalam sel pengawal."},
 {j:"pilih",t:"Kekurangan air dalam tanah menyebabkan stoma:",p:["Tertutup","Terbuka luas","Bertambah bilangan","Bertukar warna"],b:0,u:"Tumbuhan mengurangkan kehilangan air melalui transpirasi."},
 {j:"banyak",t:"Pilih DUA faktor yang menyebabkan stoma terbuka.",p:["Keamatan cahaya tinggi","Air tanah mencukupi","Kemarau berpanjangan","Waktu tengah malam"],b:[0,1],u:"Cahaya dan bekalan air membolehkan sel pengawal kekal segah."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, jika pengangkutan aktif dihalang oleh perencat respirasi, apakah kesannya?",p:["Stoma kekal tertutup","Stoma terbuka lebih luas","Sel pengawal pecah","Stoma bertambah"],b:0,u:"Tanpa ATP, ion K+ tidak dapat diangkut masuk, jadi air tidak masuk."}},

{n:3, tempat:"Makmal Potometer", sk:"2.3 Mengaplikasikan pengukuran kadar transpirasi", lampiran:"j1",
 kadNama:"Potometer", kadEm:"\u{1F9EA}", kadFakta:"Potometer mengukur kadar pengambilan air oleh pucuk yang hampir sama dengan kadar transpirasi.",
 bosKadNama:"Gelembung Udara", bosKadEm:"\u{1FAE7}", bosKadFakta:"Jarak gerakan gelembung udara dalam tiub kapilari dalam masa tertentu menunjukkan kadar pengambilan air.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung kadar transpirasi dalam keadaan berangin.",b:6,tol:0.05,suf:"cm/min",u:"30 cm ÷ 5 min = 6 cm seminit."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung kadar transpirasi dalam keadaan biasa.",b:2,tol:0.05,suf:"cm/min",u:"10 cm ÷ 5 min = 2 cm seminit."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapa kali ganda kadar transpirasi di bawah kipas berbanding keadaan biasa?",b:3,tol:0.05,suf:"kali",u:"6 ÷ 2 = 3 kali ganda."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah kadar transpirasi paling rendah dalam keadaan lembap?",p:["Kecerunan wap air kecil","Stoma terbuka luas","Suhu sangat tinggi","Angin sangat kuat"],b:0,u:"Udara lembap mengurangkan perbezaan kepekatan wap air antara daun dengan udara."},
 {j:"pilih",t:"Berdasarkan Jadual 1, pemboleh ubah yang dimanipulasi ialah:",p:["Keadaan udara","Jarak gelembung","Masa lima minit","Jenis pucuk"],b:0,u:"Keadaan biasa, berangin dan lembap diubah."},
 {j:"pilih",t:"Pucuk dipotong di dalam air sebelum dipasang pada potometer untuk:",p:["Elak udara masuk xilem","Mencuci habuk pada daun","Menambah kandungan klorofil","Membunuh kuman pada batang"],b:0,u:"Gelembung udara dalam xilem memutuskan turus air."},
 {j:"pilih",t:"Sambungan potometer disapu jeli petroleum supaya:",p:["Kedap udara","Lebih berkilat","Air menyejat","Mudah dibuka"],b:0,u:"Kebocoran udara menjejaskan pergerakan gelembung."},
 {j:"pilih",t:"Kadar transpirasi meningkat apabila suhu meningkat kerana:",p:["Air lebih cepat menyejat","Stoma semakin tertutup","Udara semakin lembap","Daun menyerap kurang cahaya"],b:0,u:"Molekul air mendapat tenaga kinetik yang lebih tinggi."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, seorang murid mencadangkan menyapu permukaan bawah daun dengan vaselin. Ramalan PALING tepat:",p:["Jarak gelembung berkurang","Jarak gelembung bertambah","Tiada perubahan langsung","Daun berfotosintesis lebih"],b:0,u:"Kebanyakan stoma di permukaan bawah tertutup, jadi transpirasi berkurang."}},

{n:4, tempat:"Puncak Pampasan", sk:"2.4 Fotosintesis · 2.5 Menganalisis titik pampasan", lampiran:"g1",
 kadNama:"Titik Pampasan", kadEm:"\u{2696}\u{FE0F}", kadFakta:"Pada titik pampasan, kadar fotosintesis sama dengan kadar respirasi; tiada pertukaran gas bersih.",
 bosKadNama:"Tindak Balas Cerah", bosKadEm:"\u{2600}\u{FE0F}", bosKadFakta:"Tindak balas cerah di grana menghasilkan ATP, NADPH dan oksigen daripada fotolisis air.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah kadar fotosintesis pada jam 12?",b:8,tol:0.1,suf:"unit",u:"Puncak lengkung fotosintesis ialah 8 unit."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah kadar fotosintesis bersih pada jam 12 (fotosintesis tolak respirasi)?",b:6,tol:0.1,suf:"unit",u:"8 − 2 = 6 unit."},
 {j:"pilih",t:"Berdasarkan Rajah 2, pada jam 4, tumbuhan:",p:["Membebaskan CO₂","Membebaskan oksigen bersih","Berada di titik pampasan","Berfotosintesis pesat"],b:0,u:"Hanya respirasi berlaku kerana tiada cahaya."},
 {j:"pilih",t:"Berdasarkan Rajah 2, titik pampasan berlaku sekitar:",p:["Pagi dan petang","Tengah malam","Tengah hari","Sepanjang hari"],b:0,u:"Garis fotosintesis menyilang garis respirasi antara jam 4-8 dan 16-20."},
 {j:"pilih",t:"Berdasarkan Rajah 2, kadar respirasi tumbuhan:",p:["Malar siang dan malam","Hanya berlaku malam","Sifar pada tengah hari","Sama dengan fotosintesis"],b:0,u:"Respirasi berlaku sepanjang masa dalam sel hidup."},
 {j:"pilih",t:"Produk tindak balas cerah yang digunakan dalam tindak balas gelap ialah:",p:["ATP dan NADPH","Oksigen dan air","Glukosa dan kanji","Klorofil dan cahaya"],b:0,u:"ATP dan NADPH digunakan untuk menurunkan karbon dioksida."},
 {j:"pilih",t:"Tindak balas gelap (kitar Calvin) berlaku di:",p:["Stroma","Grana","Mitokondrion","Nukleus"],b:0,u:"Enzim pengikat karbon dioksida terdapat dalam stroma."},
 {j:"pilih",t:"Oksigen yang dibebaskan semasa fotosintesis berasal daripada:",p:["Molekul air","Karbon dioksida","Glukosa","Klorofil"],b:0,u:"Fotolisis air memecahkan H₂O kepada hidrogen dan oksigen."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 2, mengapakah tumbuhan yang diletakkan di bawah teduhan berterusan pada keamatan cahaya titik pampasan tidak bertumbuh?",p:["Tiada lebihan glukosa","Respirasi sel terhenti","Stoma kekal terbuka luas","Air tidak diserap akar"],b:0,u:"Semua glukosa yang dihasilkan digunakan untuk respirasi, jadi tiada bahan untuk pertumbuhan."}},

{n:5, tempat:"Rumah Hijau", sk:"2.4 Menilai faktor pengehad fotosintesis", lampiran:null,
 kadNama:"Faktor Pengehad", kadEm:"\u{1F6A7}", kadFakta:"Faktor yang paling kurang bekalannya mengehadkan kadar fotosintesis walaupun faktor lain berlebihan.",
 bosKadNama:"Rumah Hijau", bosKadEm:"\u{1F3E1}", bosKadFakta:"Petani rumah hijau mengawal cahaya, suhu dan kepekatan karbon dioksida untuk hasil maksimum.",
 soalan:[
 {j:"pilih",t:"Petani menambah karbon dioksida di rumah hijau pada waktu siang kerana:",p:["Ia faktor pengehad","Ia mengurangkan suhu","Ia menghalau serangga","Ia menambah air tanah"],b:0,u:"Kepekatan CO₂ di udara (sekitar 0.04%) sering mengehadkan kadar fotosintesis."},
 {j:"pilih",t:"Suhu rumah hijau tidak dinaikkan melebihi 35 °C kerana:",p:["Enzim ternyahasli","Klorofil bertambah","Cahaya berkurang","Stoma terbuka luas"],b:0,u:"Tindak balas gelap dimangkin oleh enzim."},
 {j:"pilih",t:"Lampu LED merah dan biru dipilih untuk kebun dalaman kerana:",p:["Diserap klorofil","Paling murah dijual","Menghalau serangga","Memanaskan tanah"],b:0,u:"Klorofil menyerap cahaya merah dan biru dengan paling cekap."},
 {j:"pilih",t:"Menambah cahaya pada waktu malam di rumah hijau TIDAK berbaloi jika:",p:["CO₂ terhad","Tanaman sudah sihat","Suhu sudah sesuai","Air tanah mencukupi"],b:0,u:"Kadar tidak meningkat lagi jika faktor lain mengehadkannya."},
 {j:"pilih",t:"Penilaian PALING tepat tentang menanam pokok renek di bawah pokok besar yang rendang:",p:["Pilih spesies tahan teduh","Tanaman pasti subur","Tiada kesan cahaya","Perlu lebih baja sahaja"],b:0,u:"Keamatan cahaya rendah; hanya spesies dengan titik pampasan rendah dapat tumbuh."},
 {j:"pilih",t:"Bilik darjah yang dipenuhi pasu pokok tidak berbahaya pada waktu malam kerana:",p:["Respirasi pokok kecil","Pokok membebaskan CO₂ banyak","Pokok menyerap oksigen bilik","Fotosintesis berlaku malam"],b:0,u:"Kadar respirasi tumbuhan jauh lebih rendah daripada penghuni bilik."},
 {j:"pilih",t:"Kaedah PALING berkesan untuk meningkatkan hasil sayur di rumah hijau tropika ialah:",p:["Kawal ketiga-tiga faktor","Tambah cahaya sahaja","Tambah baja setiap jam","Tutup tingkap rumah hijau"],b:0,u:"Cahaya, suhu dan CO₂ saling mengehadkan; ketiga-tiganya perlu optimum."},
 {j:"banyak",t:"Pilih DUA faktor pengehad fotosintesis.",p:["Keamatan cahaya","Suhu","Warna pasu","Bilangan akar"],b:[0,1],u:"Kepekatan karbon dioksida juga faktor pengehad."}],
 bos:{j:"pilih",t:"Sebuah ladang sayur Cameron Highlands bercadang membakar bahan api dalam rumah hijau untuk menambah CO₂. Penilaian PALING tepat:",p:["Berkesan dengan kawalan gas","Membazir tanpa faedah","Membunuh tanaman sayur","Mengurangkan hasil tuaian"],b:0,u:"CO₂ tambahan meningkatkan hasil, tetapi gas toksik seperti karbon monoksida mesti dikawal."}},

{n:6, tempat:"Studio Daun", sk:"2.1 hingga 2.5 Mereka cipta berasaskan struktur dan fungsi daun", lampiran:null,
 kadNama:"Reka Uji", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Kadar fotosintesis tumbuhan akuatik boleh diukur dengan mengira gelembung oksigen seminit.",
 bosKadNama:"Kebun Pintar", bosKadEm:"\u{1F4A1}", bosKadFakta:"Penderia cahaya, suhu dan kelembapan membolehkan kebun dalaman dikawal secara automatik.",
 soalan:[
 {j:"pilih",t:"Anda mereka eksperimen kesan keamatan cahaya terhadap fotosintesis Hydrilla. Pemboleh ubah bergerak balas:",p:["Bilangan gelembung","Jarak lampu","Jenis tumbuhan","Isi padu air"],b:0,u:"Gelembung oksigen menunjukkan kadar fotosintesis."},
 {j:"pilih",t:"Bagi mengubah keamatan cahaya, anda mengubah:",p:["Jarak lampu","Jenis lampu dan warna","Suhu air","Saiz bikar"],b:0,u:"Keamatan cahaya berkadar songsang dengan kuasa dua jarak."},
 {j:"pilih",t:"Natrium hidrogen karbonat ditambah ke dalam air untuk:",p:["Membekalkan CO₂","Membunuh kuman","Menyejukkan air","Mewarnakan air"],b:0,u:"Ia membekalkan karbon dioksida supaya CO₂ tidak menjadi pengehad."},
 {j:"pilih",t:"Untuk menguji kehadiran kanji pada daun, daun direbus dalam etanol terlebih dahulu untuk:",p:["Menyingkir klorofil","Menambah kanji","Mengeraskan daun","Membunuh serangga"],b:0,u:"Warna hijau mengganggu pemerhatian warna biru tua iodin."},
 {j:"pilih",t:"Anda mahu membuktikan klorofil diperlukan untuk fotosintesis. Bahan PALING sesuai:",p:["Daun berbelang","Daun kering","Daun gugur","Daun plastik"],b:0,u:"Bahagian putih tanpa klorofil tidak menghasilkan kanji."},
 {j:"pilih",t:"Reka bentuk kebun dalaman pangsapuri PALING sesuai untuk sayur berdaun:",p:["Rak LED berlapis","Almari gelap tertutup","Bilik tanpa pengudaraan","Tingkap bercermin gelap"],b:0,u:"LED membekalkan cahaya mencukupi dan rak menjimatkan ruang."},
 {j:"pilih",t:"Data kadar fotosintesis pada pelbagai jarak lampu paling jelas dibentangkan sebagai:",p:["Graf garis","Carta pai","Senarai nama","Gambar pokok"],b:0,u:"Graf garis menunjukkan perubahan kadar terhadap jarak."},
 {j:"banyak",t:"Pilih DUA pemboleh ubah yang perlu dimalarkan dalam eksperimen Hydrilla anda.",p:["Suhu air","Panjang Hydrilla","Jarak lampu","Bilangan gelembung"],b:[0,1],u:"Jarak lampu dimanipulasi; bilangan gelembung bergerak balas."}],
 bos:{j:"buka",
  t:"Reka satu projek atau eksperimen berkaitan struktur dan fungsi daun untuk sekolah atau komuniti (contoh: kebun sayur dalaman berlampu LED, eksperimen kesan cahaya terhadap fotosintesis Hydrilla, model stoma yang menunjukkan pembukaan dan penutupan, sistem rumah hijau kecil dengan kawalan suhu).",
  arahan:"Nyatakan tujuan, konsep daun yang terlibat (fotosintesis, stoma, transpirasi, faktor pengehad atau titik pampasan), pemboleh ubah yang dimanipulasi, bergerak balas dan dimalarkan, cara mengukur keputusan, SATU ramalan berdasarkan teori, SATU langkah keselamatan, dan SATU pertimbangan kos atau manfaat kepada komuniti.",
  u:"Jawapan TP6 yang kukuh mengaitkan reka bentuk dengan faktor pengehad fotosintesis atau mekanisme stoma, mengawal pemboleh ubah dengan betul, mengukur kadar secara kuantitatif, membuat ramalan yang boleh diuji, menjaga keselamatan elektrik dan bahan kimia, serta menilai kos tenaga berbanding hasil."}}
];

module.exports = {
  id:"b5b2", tingkatan:5, kod:"2.0 Struktur dan Fungsi Daun",
  tajuk:"Kilang Hijau",
  subtajuk:"Biologi Ting. 5 · Bab 2 Struktur dan Fungsi Daun",
  spi:SPI.b5b2,
  ulasan:{
   1:"{n} dapat mengingat kembali struktur daun dan fungsi stoma. Langkah seterusnya ialah menerangkan mekanisme pembukaan stoma.",
   2:"{n} dapat menjelaskan mekanisme stoma dan transpirasi. Perlu lebih latihan mengira kadar transpirasi daripada data potometer.",
   3:"{n} boleh mengaplikasikan data potometer untuk mengira kadar transpirasi. Galakkan menganalisis graf titik pampasan.",
   4:"{n} mampu menganalisis titik pampasan dan tindak balas fotosintesis. Seterusnya latih menilai faktor pengehad dalam pertanian.",
   5:"{n} dapat menilai penggunaan faktor pengehad dalam rumah hijau. Sudah bersedia mereka eksperimen fotosintesis.",
   6:"{n} berjaya mereka projek berasaskan fungsi daun yang terancang dan boleh diuji. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Struktur dan Fungsi Daun. Cadangan: ulang hentian pertama dan perhatikan permukaan bawah daun dengan kanta pembesar."
  },
  lampiran:{
   a1:{jenis:"aliran", mod:"turun",
     nod:["Cahaya: sel pengawal berfotosintesis","Ion K+ diangkut masuk secara aktif","?","Sel pengawal segah, stoma terbuka"],
     kapsyen:"Rajah 1 · Urutan pembukaan stoma pada waktu siang",
     alt:"Rajah aliran: sel pengawal berfotosintesis, ion kalium diangkut masuk secara aktif, langkah bertanda soal, sel pengawal segah dan stoma terbuka"},
   j1:jadual(1, "Jarak gerakan gelembung udara dalam potometer selama 5 minit",
     ["Keadaan", "Jarak (cm)"],
     [["Biasa","10"],["Berangin (kipas)","30"],["Lembap (beg plastik)","4"]]),
   g1:{jenis:"graf", x:[0,4,8,12,16,20,24], xLabel:"Masa (jam)", titik:true, yMin:0, yMaks:10, grid:5,
     siri:[{label:"Fotosintesis", y:[0,0,4,8,4,0,0], warna:"hijau"},{label:"Respirasi", y:[2,2,2,2,2,2,2], warna:"merah"}],
     kapsyen:"Rajah 2 · Kadar fotosintesis dan respirasi tumbuhan dalam sehari",
     alt:"Graf: fotosintesis sifar pada jam 0 dan 4, naik ke 4 pada jam 8, puncak 8 pada jam 12, turun ke 4 pada jam 16 dan sifar pada jam 20 dan 24; respirasi malar 2 unit"}
  },
  aras:ARAS
};
