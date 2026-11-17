/* Biologi KSSM Tingkatan 4, Bab 13 Homeostasis dan Sistem Urinari Manusia.
   SK 13.1 Homeostasis, 13.2 Sistem urinari, 13.3 Penyakit sistem urinari (DSKP Biologi).
   Data komposisi dan isi padu urin disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Bilik Keseimbangan", sk:"13.1 Homeostasis · 13.2 Sistem urinari", lampiran:null,
 kadNama:"Homeostasis", kadEm:"\u{2696}\u{FE0F}", kadFakta:"Homeostasis ialah pengekalan persekitaran dalam badan yang stabil, seperti suhu, glukosa dan air.",
 bosKadNama:"Nefron", bosKadEm:"\u{1FAD8}", bosKadFakta:"Nefron ialah unit fungsi ginjal; setiap ginjal mempunyai kira-kira sejuta nefron.",
 soalan:[
 {j:"pilih",t:"Suhu badan normal manusia ialah kira-kira:",p:["37 °C","25 °C","42 °C","30 °C"],b:0,u:"Enzim berfungsi optimum pada suhu ini."},
 {j:"pilih",t:"Unit fungsi ginjal ialah:",p:["Nefron","Neuron","Alveolus","Vilus"],b:0,u:"Nefron menapis darah dan menghasilkan urin."},
 {j:"pilih",t:"Urin disimpan sementara dalam:",p:["Pundi kencing","Ureter","Uretra","Ginjal"],b:0,u:"Ureter membawa urin dari ginjal ke pundi kencing."},
 {j:"pilih",t:"Hormon yang mengawal penyerapan semula air di ginjal ialah:",p:["ADH","Insulin","Tiroksina","Estrogen"],b:0,u:"Hormon antidiuretik dirembeskan oleh pituitari posterior."},
 {j:"pilih",t:"Bahan kumuh bernitrogen utama dalam urin ialah:",p:["Urea","Glukosa","Protein","Kanji"],b:0,u:"Urea dihasilkan di hati melalui penyahaminaan."},
 {j:"pilih",t:"Mekanisme suap balik negatif bertindak untuk:",p:["Membetulkan perubahan","Membesarkan perubahan","Menghentikan hormon","Menambah suhu"],b:0,u:"Perubahan dari nilai normal dicetuskan semula ke arah normal."},
 {j:"pilih",t:"Semasa cuaca panas, kulit menyejukkan badan dengan:",p:["Berpeluh","Menggigil","Bulu roma tegak","Arteriol mengecut"],b:0,u:"Penyejatan peluh menyerap haba badan."},
 {j:"banyak",t:"Pilih DUA organ yang terlibat dalam homeostasis.",p:["Ginjal","Hati","Gigi","Rambut"],b:[0,1],u:"Ginjal mengawal air dan garam; hati mengawal glukosa."}],
 bos:{j:"pilih",t:"Mengapakah homeostasis penting untuk sel badan?",p:["Enzim kekal berfungsi","Sel boleh berhenti bekerja","Hormon tidak diperlukan","Darah menjadi pekat"],b:0,u:"Suhu, pH dan kepekatan yang stabil membolehkan enzim dan sel berfungsi optimum."}},

{n:2, tempat:"Kilang Penapis", sk:"13.2 Pembentukan urin dan pengawalaturan osmotik", lampiran:"a1",
 kadNama:"Ultraturasan", kadEm:"\u{1F9EA}", kadFakta:"Tekanan tinggi di glomerulus memaksa air, glukosa, garam dan urea masuk ke kapsul Bowman.",
 bosKadNama:"ADH", bosKadEm:"\u{1F4A7}", bosKadFakta:"ADH meningkatkan ketelapan tubul berlingkar distal dan duktus pengumpul terhadap air.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, proses bertanda ? ialah:",p:["Penyerapan semula","Ultraturasan","Rembesan","Pencernaan"],b:0,u:"Bahan berguna seperti glukosa diserap semula di tubul."},
 {j:"pilih",t:"Berdasarkan Rajah 1, ultraturasan berlaku di:",p:["Glomerulus","Duktus pengumpul","Ureter","Pundi kencing"],b:0,u:"Tekanan hidrostatik tinggi di glomerulus memaksa bahan keluar."},
 {j:"pilih",t:"Protein plasma tidak terdapat dalam hasil turasan kerana:",p:["Saiz molekul besar","Protein bercas positif","Protein telah dicerna","Protein tiada dalam darah"],b:0,u:"Molekul besar tidak dapat melalui dinding glomerulus."},
 {j:"pilih",t:"Glukosa diserap semula sepenuhnya di tubul berlingkar proksimal melalui:",p:["Pengangkutan aktif","Osmosis","Ultraturasan","Fagositosis"],b:0,u:"Glukosa diserap melawan kecerunan kepekatan."},
 {j:"pilih",t:"Apabila badan kekurangan air, rembesan ADH:",p:["Bertambah","Berkurang","Berhenti","Tidak berubah"],b:0,u:"Lebih banyak air diserap semula; urin menjadi pekat."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bahan seperti ion hidrogen dan ubat dikeluarkan ke tubul melalui:",p:["Rembesan","Ultraturasan","Penyerapan semula","Peristalsis"],b:0,u:"Rembesan membantu mengawal pH darah."},
 {j:"pilih",t:"Darah memasuki glomerulus melalui:",p:["Arteriol aferen","Arteriol eferen","Vena renal","Ureter"],b:0,u:"Arteriol aferen lebih lebar daripada arteriol eferen, menghasilkan tekanan tinggi."},
 {j:"banyak",t:"Pilih DUA bahan yang terdapat dalam hasil turasan glomerulus.",p:["Glukosa","Urea","Sel darah merah","Protein plasma"],b:[0,1],u:"Sel darah dan protein plasma terlalu besar untuk ditapis."}],
 bos:{j:"pilih",t:"Pesakit diabetes yang tidak terkawal mempunyai glukosa dalam urin. Penjelasan PALING tepat:",p:["Glukosa melebihi had serapan","Glomerulus tidak menapis","ADH berlebihan","Ureter tersumbat"],b:0,u:"Protein pembawa di tubul tepu, jadi glukosa berlebihan tidak dapat diserap semula."}},

{n:3, tempat:"Makmal Urin", sk:"13.2 Mengaplikasikan data komposisi plasma dan urin", lampiran:"j1",
 kadNama:"Kepekatan Urea", kadEm:"\u{1F522}", kadFakta:"Kepekatan urea dalam urin jauh lebih tinggi daripada plasma kerana air diserap semula.",
 bosKadNama:"Ujian Urin", bosKadEm:"\u{1F9EB}", bosKadFakta:"Kehadiran glukosa atau protein dalam urin menunjukkan masalah kesihatan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 1, bahan manakah tiada dalam hasil turasan?",p:["Protein","Glukosa","Urea","Garam"],b:0,u:"Protein terlalu besar untuk melalui glomerulus."},
 {j:"pilih",t:"Berdasarkan Jadual 1, bahan manakah diserap semula sepenuhnya?",p:["Glukosa","Urea","Garam","Air"],b:0,u:"Glukosa ada dalam hasil turasan (0.1) tetapi tiada dalam urin."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapa kali ganda kepekatan urea dalam urin berbanding hasil turasan? Beri jawapan kepada 1 tempat perpuluhan.",b:66.7,tol:0.1,suf:"kali",u:"2.0 ÷ 0.03 = 66.7 kali."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapa kali ganda kepekatan garam dalam urin berbanding plasma? Beri jawapan kepada 1 tempat perpuluhan.",b:2.1,tol:0.05,suf:"kali",u:"1.5 ÷ 0.72 = 2.08 ≈ 2.1 kali."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah kepekatan urea meningkat dalam urin?",p:["Air diserap semula","Urea dihasilkan di ginjal","Urea dicerna","Protein ditukar di tubul"],b:0,u:"Penyerapan semula air memekatkan urea."},
 {j:"pilih",t:"Berdasarkan Jadual 1, sampel urin seorang pesakit mengandungi protein. Bahagian manakah PALING mungkin rosak?",p:["Glomerulus","Pundi kencing","Uretra","Ureter"],b:0,u:"Glomerulus yang rosak membenarkan protein keluar."},
 {j:"nombor",t:"Ginjal menghasilkan 180 L hasil turasan sehari tetapi hanya 1.5 L urin. Berapakah peratus air yang diserap semula? Beri jawapan kepada 1 tempat perpuluhan.",b:99.2,tol:0.1,suf:"%",u:"(180 − 1.5) ÷ 180 × 100% = 99.2%."},
 {j:"pilih",t:"Berdasarkan Jadual 1, kepekatan glukosa dalam plasma dan hasil turasan sama kerana:",p:["Glukosa ditapis bebas","Glukosa diserap semula","Glukosa dirembeskan","Glukosa tiada dalam darah"],b:0,u:"Molekul glukosa kecil dan melalui glomerulus dengan mudah."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, jalur ujian urin seorang murid menunjukkan glukosa positif. Tindakan PALING wajar:",p:["Rujuk doktor","Minum air manis","Abaikan sahaja","Berhenti minum air"],b:0,u:"Glukosa dalam urin ialah tanda diabetes yang perlu disahkan doktor."}},

{n:4, tempat:"Bilik Graf Urin", sk:"13.2 Menganalisis pengawalaturan air badan", lampiran:"g1",
 kadNama:"Diuresis", kadEm:"\u{1F4C8}", kadFakta:"Selepas minum banyak air, rembesan ADH berkurang dan isi padu urin bertambah.",
 bosKadNama:"Dehidrasi", bosKadEm:"\u{1F3DC}\u{FE0F}", bosKadFakta:"Semasa dehidrasi, urin sedikit dan pekat kerana ADH tinggi.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah isi padu urin maksimum dalam 30 minit?",b:300,tol:2,suf:"ml",u:"Puncak 300 ml pada minit ke-60."},
 {j:"nombor",t:"Berdasarkan Rajah 2, hitung jumlah urin dari minit 30 hingga 150.",b:800,tol:2,suf:"ml",u:"150 + 300 + 200 + 100 + 50 = 800 ml."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah isi padu urin meningkat selepas minum 1 L air?",p:["ADH berkurang","ADH bertambah","Glomerulus tersumbat","Peluh bertambah"],b:0,u:"Tubul kurang telap air, jadi lebih banyak air dikumuhkan."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah isi padu urin kembali normal selepas minit ke-120?",p:["Air badan seimbang","Ginjal berhenti","Air dicerna","ADH berhenti"],b:0,u:"Mekanisme suap balik negatif memulihkan keseimbangan."},
 {j:"pilih",t:"Jika eksperimen Rajah 2 diulang selepas bersenam lama di bawah matahari, puncak dijangka:",p:["Lebih rendah","Lebih tinggi","Sama","Tiada graf"],b:0,u:"Air hilang melalui peluh, jadi ADH tinggi dan kurang urin dihasilkan."},
 {j:"pilih",t:"Berdasarkan Rajah 2, warna urin pada minit ke-60 dijangka:",p:["Cair dan jernih","Kuning pekat","Merah","Hijau"],b:0,u:"Urin dalam isi padu besar adalah cair."},
 {j:"pilih",t:"Jika individu dalam Rajah 2 minum air laut, isi padu urin dijangka:",p:["Lebih kecil dan pekat","Jauh lebih besar","Sama sekali sama","Tiada urin"],b:0,u:"Kepekatan garam darah naik; ADH bertambah untuk menyimpan air."},
 {j:"pilih",t:"Data Rajah 2 lebih sah jika:",p:["Diulang pada ramai individu","Diambil sekali sahaja","Tidak direkod masa","Isi padu air berubah"],b:0,u:"Sampel lebih besar dan ulangan meningkatkan kebolehpercayaan."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 2, mengapakah minuman berkafein menyebabkan kerap kencing?",p:["Kafein menghalang ADH","Kafein menambah ADH","Kafein menyekat ginjal","Kafein menyerap air"],b:0,u:"Kafein bersifat diuretik."}},

{n:5, tempat:"Klinik Ginjal", sk:"13.3 Menilai penyakit sistem urinari", lampiran:null,
 kadNama:"Dialisis", kadEm:"\u{1FA7A}", kadFakta:"Hemodialisis menapis darah pesakit kegagalan ginjal menggunakan membran separa telap.",
 bosKadNama:"Pemindahan Ginjal", bosKadEm:"\u{1F381}", bosKadFakta:"Pemindahan ginjal memerlukan padanan tisu dan ubat imunosupresan.",
 soalan:[
 {j:"pilih",t:"Pembentukan batu karang dalam ginjal dikaitkan dengan:",p:["Kurang minum air","Minum air yang cukup","Bersenam berkala","Tidur cukup"],b:0,u:"Urin pekat menggalakkan pemendakan garam mineral."},
 {j:"pilih",t:"Penyebab utama kegagalan ginjal di Malaysia ialah:",p:["Diabetes","Selesema","Jerawat","Rabun"],b:0,u:"Diabetes dan hipertensi merosakkan glomerulus."},
 {j:"pilih",t:"Pesakit kegagalan ginjal perlu menjalani dialisis kerana:",p:["Urea terkumpul","Glukosa berkurang","Hormon bertambah","Darah menjadi cair"],b:0,u:"Bahan toksik dan air berlebihan perlu dikeluarkan."},
 {j:"pilih",t:"Pesakit pemindahan ginjal perlu mengambil ubat imunosupresan kerana:",p:["Elak penolakan","Mempercepat dialisis","Menambah urea","Menghasilkan ADH"],b:0,u:"Sistem imun mungkin menyerang organ asing."},
 {j:"pilih",t:"Jangkitan salur kencing lebih kerap berlaku apabila seseorang:",p:["Menahan kencing","Minum cukup air","Menjaga kebersihan","Kencing selepas tidur"],b:0,u:"Bakteria membiak dalam urin yang bertakung."},
 {j:"pilih",t:"Penilaian PALING tepat tentang ikrar menderma organ:",p:["Selamatkan nyawa","Melanggar semua agama","Tiada manfaat","Merugikan keluarga"],b:0,u:"Ramai pesakit menunggu ginjal; kebanyakan agama di Malaysia membenarkannya."},
 {j:"pilih",t:"Mengapakah pesakit dialisis perlu mengehadkan pengambilan garam dan air?",p:["Ginjal tak dapat kumuhkan","Garam menyembuhkan ginjal","Air menambah urea","Garam menambah ADH"],b:0,u:"Garam dan air berlebihan menyebabkan edema dan tekanan darah tinggi."},
 {j:"banyak",t:"Pilih DUA amalan yang menjaga kesihatan ginjal.",p:["Minum air secukupnya","Kawal gula darah","Ambil ubat tahan sakit setiap hari","Makan makanan bergaram tinggi"],b:[0,1],u:"Ubat tahan sakit berlebihan dan garam tinggi boleh merosakkan ginjal."}],
 bos:{j:"pilih",t:"Kerajaan mempertimbangkan menambah pusat dialisis atau kempen pencegahan diabetes. Penilaian PALING seimbang:",p:["Laksanakan kedua-duanya","Utamakan pusat dialisis","Utamakan kempen","Tangguhkan kedua-duanya"],b:0,u:"Pesakit sedia ada perlu rawatan; pencegahan mengurangkan kes baharu pada masa depan."}},

{n:6, tempat:"Studio Reka Homeostasis", sk:"13.1 hingga 13.3 Mereka cipta berasaskan homeostasis", lampiran:null,
 kadNama:"Carta Warna Urin", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Carta warna urin membantu individu menilai tahap hidrasi.",
 bosKadNama:"Reka Cipta Hidrasi", bosKadEm:"\u{1F4A1}", bosKadFakta:"Botol berpenanda masa dan aplikasi peringatan membantu murid minum air secukupnya.",
 soalan:[
 {j:"pilih",t:"Anda mereka carta warna urin untuk tandas sekolah. Warna yang menunjukkan hidrasi baik:",p:["Kuning pucat","Coklat gelap","Jingga pekat","Merah"],b:0,u:"Urin pucat menunjukkan cukup air."},
 {j:"pilih",t:"Untuk menilai kempen minum air anda, data PALING sesuai:",p:["Isi padu air diminum","Warna botol","Jenama botol","Harga botol"],b:0,u:"Pengambilan air ialah ukuran tingkah laku sasaran."},
 {j:"pilih",t:"Model ginjal anda menggunakan tiub Visking. Bahagian ini mewakili:",p:["Membran glomerulus","Pundi kencing","Uretra","Saraf"],b:0,u:"Tiub Visking separa telap seperti dinding penapis."},
 {j:"pilih",t:"Dalam model ultraturasan, mengapakah larutan kanji tidak keluar dari tiub Visking?",p:["Molekul terlalu besar","Kanji larut","Tiub terlalu tebal","Air terlalu sejuk"],b:0,u:"Kanji mewakili protein plasma yang tidak ditapis."},
 {j:"pilih",t:"Anda mereka botol air berpenanda masa. Tujuan utamanya:",p:["Galak minum berkala","Hiasan meja","Simpan minuman manis","Tambah berat beg"],b:0,u:"Penanda masa memberi sasaran minum sepanjang hari."},
 {j:"pilih",t:"Anda merancang kempen kurang garam untuk ibu bapa. Mesej PALING berkesan:",p:["Kurang garam, ginjal sihat","Tambah garam untuk tenaga","Garam tidak penting","Makan ikan masin setiap hari"],b:0,u:"Garam berlebihan meningkatkan tekanan darah dan beban ginjal."},
 {j:"pilih",t:"Untuk menguji model ginjal anda, ujian manakah mengesan glukosa dalam hasil turasan?",p:["Ujian Benedict","Ujian iodin","Ujian Biuret","Air kapur"],b:0,u:"Mendakan merah bata menunjukkan glukosa telah ditapis."},
 {j:"banyak",t:"Pilih DUA faktor yang perlu dipertimbangkan dalam reka bentuk stesen air minuman sekolah.",p:["Kebersihan air","Lokasi mudah dicapai","Warna cat dinding","Nama penaja"],b:[0,1],u:"Air bersih dan akses mudah menggalakkan murid minum."}],
 bos:{j:"buka",
  t:"Reka satu model, alat atau kempen berkaitan homeostasis atau kesihatan ginjal (contoh: model nefron dengan tiub Visking, carta warna urin dan kempen hidrasi, botol air pintar, kempen kurang garam untuk mencegah penyakit ginjal).",
  arahan:"Nyatakan tujuan dan kumpulan sasaran, konsep yang terlibat (ultraturasan, penyerapan semula, ADH atau suap balik negatif), bahan dan reka bentuk beserta sebab, SATU pengiraan atau data sokongan (contoh: peratus air diserap semula), cara mengukur keberkesanan, SATU langkah keselamatan atau kebersihan, dan SATU pertimbangan kos atau budaya tempatan.",
  u:"Jawapan TP6 yang kukuh menerangkan pembentukan urin dan peranan ADH dengan tepat, memadankan bahan model dengan struktur nefron, menggunakan data atau pengiraan yang betul, mengukur perubahan tingkah laku, menjaga kebersihan, serta mengambil kira kos dan amalan makan masyarakat."}}
];

module.exports = {
  id:"b4b13", tingkatan:4, kod:"13.0 Homeostasis dan Sistem Urinari Manusia",
  tajuk:"Penjaga Keseimbangan",
  subtajuk:"Biologi Ting. 4 · Bab 13 Homeostasis dan Sistem Urinari Manusia",
  spi:SPI.b4b13,
  ulasan:{
   1:"{n} dapat mengingat kembali maksud homeostasis dan struktur sistem urinari. Langkah seterusnya ialah menerangkan pembentukan urin.",
   2:"{n} dapat menjelaskan ultraturasan, penyerapan semula, rembesan dan peranan ADH. Perlu lebih latihan mentafsir data komposisi urin.",
   3:"{n} boleh mengaplikasikan data plasma, hasil turasan dan urin. Galakkan menganalisis graf isi padu urin.",
   4:"{n} mampu menganalisis pengawalaturan air badan oleh ADH. Seterusnya latih menilai isu penyakit ginjal.",
   5:"{n} dapat menilai isu batu karang, kegagalan ginjal, dialisis dan pendermaan organ. Sudah bersedia mereka model atau kempen.",
   6:"{n} berjaya mereka model atau kempen homeostasis dengan justifikasi yang kukuh. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Homeostasis dan Sistem Urinari. Cadangan: ulang hentian pertama dan rekod jumlah air yang diminum setiap hari."
  },
  lampiran:{
   a1:{jenis:"aliran", mod:"turun",
     nod:["Darah masuk glomerulus","Ultraturasan ke kapsul Bowman","?","Rembesan ke dalam tubul","Urin ke duktus pengumpul"],
     kapsyen:"Rajah 1 · Peringkat pembentukan urin dalam nefron",
     alt:"Rajah aliran: darah masuk glomerulus, ultraturasan ke kapsul Bowman, proses bertanda soal, rembesan ke dalam tubul, urin ke duktus pengumpul"},
   j1:jadual(1, "Kepekatan bahan dalam plasma, hasil turasan dan urin (g per 100 ml)",
     ["Bahan", "Plasma", "Hasil turasan", "Urin"],
     [["Protein","8.0","0","0"],["Glukosa","0.1","0.1","0"],["Urea","0.03","0.03","2.0"],["Garam","0.72","0.72","1.5"]]),
   g1:{jenis:"graf", x:[0,30,60,90,120,150], xLabel:"Masa selepas minum 1 L air (min)", titik:true, yMin:0, yMaks:350, grid:7,
     siri:[{label:"Isi padu urin setiap 30 minit (ml)", y:[50,150,300,200,100,50], warna:"hijau"}],
     kapsyen:"Rajah 2 · Graf isi padu urin selepas meminum 1 L air",
     alt:"Graf naik dari 50 ml pada minit 0 ke 150 pada minit 30 dan puncak 300 pada minit 60, kemudian turun ke 200, 100 dan 50 pada minit 150"}
  },
  aras:ARAS
};
