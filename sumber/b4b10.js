/* Biologi KSSM Tingkatan 4, Bab 10 Pengangkutan dalam Manusia dan Haiwan.
   SK 10.1 Jenis sistem peredaran, 10.2 Sistem peredaran manusia, 10.3 Denyutan jantung,
   10.4 Pembekuan darah, 10.5 Penyakit kardiovaskular, 10.6 dan 10.7 Sistem limfa (DSKP Biologi).
   Output kardium dan kadar denyutan disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Lebuh Raya Darah", sk:"10.1 Jenis sistem peredaran · 10.2 Sistem peredaran manusia", lampiran:null,
 kadNama:"Peredaran Ganda Dua", kadEm:"\u{2764}\u{FE0F}", kadFakta:"Dalam peredaran ganda dua, darah melalui jantung dua kali dalam satu kitaran lengkap: peredaran pulmonari dan sistemik.",
 bosKadNama:"Sistem Terbuka", bosKadEm:"\u{1F997}", bosKadFakta:"Serangga mempunyai sistem peredaran terbuka: hemolimfa membasahi organ secara terus dalam hemosel.",
 soalan:[
 {j:"pilih",t:"Salur darah yang membawa darah keluar dari jantung ialah:",p:["Arteri","Vena","Kapilari","Venul"],b:0,u:"Arteri berdinding tebal dan elastik untuk menahan tekanan tinggi."},
 {j:"pilih",t:"Salur darah yang mempunyai injap untuk mencegah aliran balik ialah:",p:["Vena","Arteri","Aorta","Kapilari"],b:0,u:"Tekanan darah dalam vena rendah."},
 {j:"pilih",t:"Pertukaran bahan antara darah dan sel berlaku di:",p:["Kapilari","Aorta","Vena kava","Arteri pulmonari"],b:0,u:"Dinding kapilari setebal satu sel."},
 {j:"pilih",t:"Sel darah yang mengangkut oksigen ialah:",p:["Eritrosit","Leukosit","Platlet","Limfosit"],b:0,u:"Eritrosit mengandungi hemoglobin."},
 {j:"pilih",t:"Ikan mempunyai sistem peredaran:",p:["Tertutup tunggal","Terbuka","Tertutup ganda dua","Tiada sistem"],b:0,u:"Darah melalui jantung sekali dalam satu kitaran."},
 {j:"pilih",t:"Bahagian jantung yang mengepam darah ke seluruh badan ialah:",p:["Ventrikel kiri","Atrium kanan","Ventrikel kanan","Atrium kiri"],b:0,u:"Dinding ventrikel kiri paling tebal."},
 {j:"pilih",t:"Arteri pulmonari membawa darah:",p:["Ke peparu","Beroksigen ke badan","Beroksigen ke jantung","Terdeoksigen ke hati"],b:0,u:"Ia satu-satunya arteri yang membawa darah terdeoksigen."},
 {j:"banyak",t:"Pilih DUA komponen plasma darah.",p:["Air","Protein plasma","Eritrosit","Platlet"],b:[0,1],u:"Eritrosit dan platlet ialah komponen sel darah."}],
 bos:{j:"pilih",t:"Mengapakah dinding ventrikel kiri lebih tebal daripada ventrikel kanan?",p:["Pam ke seluruh badan","Terima darah dari peparu","Pam darah ke peparu","Simpan lebih banyak darah"],b:0,u:"Tekanan tinggi diperlukan untuk peredaran sistemik yang jauh."}},

{n:2, tempat:"Bilik Jantung", sk:"10.2 Peredaran ganda dua · 10.3 Denyutan jantung", lampiran:"a1",
 kadNama:"Nodus SA", kadEm:"\u{26A1}", kadFakta:"Nodus sinoatrium (perentak jantung) memulakan impuls elektrik yang menyebabkan jantung berdenyut.",
 bosKadNama:"Injap Jantung", bosKadEm:"\u{1F6AA}", bosKadFakta:"Injap atrioventrikel dan injap sabit memastikan darah mengalir sehala.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, bahagian bertanda ? ialah:",p:["Peparu","Hati","Otak","Ginjal"],b:0,u:"Ventrikel kanan mengepam darah ke peparu untuk mendapatkan oksigen."},
 {j:"pilih",t:"Berdasarkan Rajah 1, darah dari peparu kembali ke:",p:["Atrium kiri","Atrium kanan","Ventrikel kanan","Vena kava"],b:0,u:"Vena pulmonari membawa darah beroksigen ke atrium kiri."},
 {j:"pilih",t:"Perentak jantung semula jadi ialah:",p:["Nodus SA","Nodus AV","Berkas His","Injap sabit"],b:0,u:"Nodus sinoatrium terletak di dinding atrium kanan."},
 {j:"pilih",t:"Bunyi 'lub' jantung terhasil apabila:",p:["Injap AV tertutup","Injap sabit tertutup","Atrium mengendur","Darah masuk aorta"],b:0,u:"Bunyi 'dub' terhasil apabila injap sabit tertutup."},
 {j:"pilih",t:"Darah dalam vena di kaki kembali ke jantung dibantu oleh:",p:["Otot rangka","Graviti sahaja","Tekanan arteri tinggi","Pengecutan kapilari"],b:0,u:"Otot rangka memicit vena; injap mencegah aliran balik."},
 {j:"pilih",t:"Semasa bersenam, kadar denyutan jantung dinaikkan melalui:",p:["Saraf simpatetik","Saraf parasimpatetik","Insulin","Hormon pertumbuhan"],b:0,u:"Adrenalina dan saraf simpatetik mempercepat denyutan."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa kali darah melalui jantung dalam satu kitaran lengkap?",p:["Dua kali","Sekali","Tiga kali","Empat kali"],b:0,u:"Sekali dalam peredaran pulmonari, sekali dalam peredaran sistemik."},
 {j:"banyak",t:"Pilih DUA salur yang membawa darah beroksigen.",p:["Aorta","Vena pulmonari","Arteri pulmonari","Vena kava"],b:[0,1],u:"Arteri pulmonari dan vena kava membawa darah terdeoksigen."}],
 bos:{j:"pilih",t:"Bayi dilahirkan dengan lubang pada septum antara ventrikel. Kesan utamanya ialah:",p:["Darah bercampur","Jantung berdenyut lebih perlahan","Peparu lebih besar","Darah membeku cepat"],b:0,u:"Darah beroksigen dan terdeoksigen bercampur, mengurangkan oksigen ke badan."}},

{n:3, tempat:"Makmal Kardiak", sk:"10.3 Mengaplikasikan konsep output kardium", lampiran:"j1",
 kadNama:"Output Kardium", kadEm:"\u{1FAC0}", kadFakta:"Output kardium = kadar denyutan jantung × isi padu strok.",
 bosKadNama:"Jantung Atlet", bosKadEm:"\u{1F3C3}", bosKadFakta:"Atlet mempunyai isi padu strok besar, jadi kadar denyutan rehatnya rendah.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung output kardium individu P semasa rehat.",b:4900,tol:1,suf:"ml/min",u:"70 × 70 = 4 900 ml/min."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung output kardium individu Q semasa rehat.",b:5000,tol:1,suf:"ml/min",u:"50 × 100 = 5 000 ml/min."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung output kardium individu P semasa bersenam.",b:14000,tol:1,suf:"ml/min",u:"140 × 100 = 14 000 ml/min."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung output kardium individu Q semasa bersenam.",b:22500,tol:1,suf:"ml/min",u:"150 × 150 = 22 500 ml/min."},
 {j:"pilih",t:"Berdasarkan Jadual 1, individu manakah PALING mungkin seorang atlet?",p:["Q","P","Kedua-duanya","Tidak dapat ditentukan"],b:0,u:"Kadar rehat rendah dengan isi padu strok besar."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah output kardium meningkat semasa bersenam?",p:["Otot perlukan O₂","Darah menjadi pekat","Jantung mengecil","Glukosa berkurang"],b:0,u:"Lebih banyak darah membekalkan O₂ dan glukosa ke otot."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapa kali ganda output kardium Q meningkat semasa bersenam? Beri jawapan kepada 1 tempat perpuluhan.",b:4.5,tol:0.05,suf:"kali",u:"22 500 ÷ 5 000 = 4.5 kali."},
 {j:"pilih",t:"Bagaimanakah kadar denyutan jantung diukur dengan mudah di sekolah?",p:["Kira nadi di pergelangan","Ukur suhu badan","Timbang berat badan","Ukur tinggi badan"],b:0,u:"Nadi dirasa pada arteri radius."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, mengapakah jantung Q bekerja lebih cekap semasa rehat?",p:["Isi padu strok besar","Denyutan lebih laju","Isi padu strok lebih kecil","Darah lebih cair"],b:0,u:"Isi padu strok besar membolehkan output yang sama dengan denyutan lebih sedikit."}},

{n:4, tempat:"Bilik Graf Tekanan", sk:"10.3 Menganalisis kitar jantung", lampiran:"g1",
 kadNama:"Kitar Jantung", kadEm:"\u{1F4C8}", kadFakta:"Sistol = ventrikel mengecut; diastol = ventrikel mengendur dan diisi darah.",
 bosKadNama:"Tekanan Darah", bosKadEm:"\u{1FA7A}", bosKadFakta:"Bacaan normal orang dewasa sekitar 120/80 mmHg (sistolik/diastolik).",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah tekanan maksimum dalam ventrikel kiri?",b:120,tol:1,suf:"mmHg",u:"Puncak 120 mmHg pada 0.2 s."},
 {j:"nombor",t:"Berdasarkan Rajah 2, satu kitar jantung mengambil masa 0.8 s. Hitung kadar denyutan jantung.",b:75,tol:0.5,suf:"denyutan/min",u:"60 ÷ 0.8 = 75 denyutan seminit."},
 {j:"pilih",t:"Berdasarkan Rajah 2, apakah yang berlaku antara 0.1 s dan 0.2 s?",p:["Ventrikel mengecut","Ventrikel mengendur","Atrium diisi darah","Injap AV terbuka"],b:0,u:"Tekanan naik mendadak semasa sistol ventrikel."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah tekanan rendah antara 0.5 s dan 0.7 s?",p:["Ventrikel mengendur","Ventrikel mengecut","Injap sabit terbuka","Aorta tersumbat"],b:0,u:"Semasa diastol, ventrikel diisi darah dari atrium."},
 {j:"pilih",t:"Berdasarkan Rajah 2, injap sabit aorta terbuka apabila:",p:["Tekanan ventrikel tinggi","Tekanan ventrikel sifar","Atrium mengecut","Jantung berhenti"],b:0,u:"Darah ditolak ke aorta apabila tekanan ventrikel melebihi tekanan aorta."},
 {j:"nombor",t:"Berdasarkan Rajah 2, jika kadar denyutan meningkat ke 120 denyutan/min, berapakah tempoh satu kitar jantung?",b:0.5,tol:0.01,suf:"s",u:"60 ÷ 120 = 0.5 s."},
 {j:"pilih",t:"Bacaan tekanan darah 150/95 mmHg secara berulang menunjukkan:",p:["Hipertensi","Tekanan normal","Tekanan rendah","Anemia"],b:0,u:"Tekanan melebihi 140/90 mmHg secara konsisten ialah hipertensi."},
 {j:"pilih",t:"Berdasarkan Rajah 2, bagaimanakah lengkung berubah bagi ventrikel kanan?",p:["Puncak lebih rendah","Puncak lebih tinggi","Tiada puncak","Tempoh lebih panjang"],b:0,u:"Ventrikel kanan hanya mengepam ke peparu yang dekat."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 2, seorang pesakit mempunyai injap aorta yang menyempit. Ramalan PALING munasabah:",p:["Tekanan lebih tinggi","Tekanan ventrikel jatuh","Jantung berdenyut perlahan","Darah tidak membeku"],b:0,u:"Ventrikel perlu mengecut lebih kuat untuk menolak darah melalui injap sempit."}},

{n:5, tempat:"Klinik Jantung", sk:"10.4 Pembekuan darah · 10.5 Penyakit kardiovaskular · 10.6 Sistem limfa", lampiran:null,
 kadNama:"Pembekuan Darah", kadEm:"\u{1FA79}", kadFakta:"Platlet dan faktor pembeku menukar fibrinogen kepada fibrin yang membentuk jaringan untuk memerangkap sel darah.",
 bosKadNama:"Aterosklerosis", bosKadEm:"\u{26A0}\u{FE0F}", bosKadFakta:"Plak lemak pada dinding arteri menyempitkan salur dan boleh menyebabkan serangan jantung atau strok.",
 soalan:[
 {j:"pilih",t:"Pesakit hemofilia mengalami pendarahan berpanjangan kerana:",p:["Kurang pembeku","Platlet berlebihan","Eritrosit terlalu banyak","Plasma terlalu pekat"],b:0,u:"Hemofilia ialah penyakit genetik akibat kekurangan faktor pembekuan."},
 {j:"pilih",t:"Fungsi sistem limfa ialah:",p:["Pulangkan bendalir","Mengepam darah","Mencernakan lemak","Menghasilkan hempedu"],b:0,u:"Bendalir tisu berlebihan dikembalikan ke darah sebagai limfa."},
 {j:"pilih",t:"Edema (bengkak) berlaku apabila:",p:["Bendalir tisu terkumpul","Darah membeku","Jantung berhenti","Arteri melebar"],b:0,u:"Bendalir tisu tidak dikembalikan dengan berkesan."},
 {j:"pilih",t:"Faktor manakah meningkatkan risiko aterosklerosis?",p:["Lemak tepu","Senaman berkala","Makan sayur","Tidur cukup"],b:0,u:"Kolesterol LDL tinggi menyumbang kepada plak."},
 {j:"pilih",t:"Pesakit yang dipasang stent pada arteri koronari menerima rawatan untuk:",p:["Buka arteri","Tambah sel darah","Kurangkan platlet","Buang hati"],b:0,u:"Stent memastikan arteri koronari kekal terbuka."},
 {j:"pilih",t:"Penilaian PALING tepat tentang derma darah secara sukarela:",p:["Menyelamatkan nyawa","Melemahkan jantung","Menyebarkan penyakit","Tiada manfaat"],b:0,u:"Darah diperlukan untuk pembedahan dan kemalangan; prosedur derma selamat."},
 {j:"pilih",t:"Mengapakah ubat aspirin dos rendah diberi kepada sesetengah pesakit jantung?",p:["Kurangkan pembekuan","Menambah kolesterol","Menaikkan tekanan darah","Menambah platlet"],b:0,u:"Aspirin mengurangkan risiko darah beku dalam arteri."},
 {j:"banyak",t:"Pilih DUA amalan yang mengurangkan risiko penyakit kardiovaskular.",p:["Bersenam secara berkala","Kurangkan makanan bergaram","Merokok setiap hari","Makan gorengan selalu"],b:[0,1],u:"Senaman dan kurang garam membantu mengawal tekanan darah."}],
 bos:{j:"pilih",t:"Kerajaan mencadangkan saringan tekanan darah percuma di masjid dan surau. Penilaian PALING tepat:",p:["Kesan awal hipertensi","Membazir wang kerajaan","Tiada kesan kesihatan","Merosakkan jantung"],b:0,u:"Hipertensi sering tiada gejala; saringan di lokasi komuniti meningkatkan pengesanan awal."}},

{n:6, tempat:"Studio Reka Jantung", sk:"10.1 hingga 10.7 Mereka cipta berasaskan sistem peredaran", lampiran:null,
 kadNama:"Model Jantung", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Model jantung berfungsi boleh dibina dengan belon, straw dan injap sehala.",
 bosKadNama:"Kempen Jantung Sihat", bosKadEm:"\u{1F4A1}", bosKadFakta:"Kempen jantung sihat yang berkesan menggunakan data saringan dan matlamat yang boleh diukur.",
 soalan:[
 {j:"pilih",t:"Anda membina model jantung dengan belon dan straw. Bahagian manakah mewakili injap?",p:["Plastik sehala","Belon getah","Air berwarna","Straw lurus"],b:0,u:"Injap membenarkan aliran sehala sahaja."},
 {j:"pilih",t:"Untuk menunjukkan perbezaan dinding ventrikel kiri dan kanan dalam model, anda patut:",p:["Belon lebih tebal","Guna warna sama","Guna saiz sama","Buang ventrikel kanan"],b:0,u:"Ventrikel kiri berdinding lebih tebal."},
 {j:"pilih",t:"Anda mereka program senaman untuk guru. Data manakah PALING sesuai menilai kecergasan jantung?",p:["Kadar nadi rehat","Warna baju sukan","Saiz kasut","Jenis kereta"],b:0,u:"Nadi rehat yang menurun menunjukkan jantung lebih cekap."},
 {j:"pilih",t:"Anda merancang menu rendah garam untuk pesakit hipertensi. Cadangan PALING sesuai:",p:["Guna herba","Tambah kicap","Tambah ikan masin","Tambah kiub perisa"],b:0,u:"Herba memberi rasa tanpa natrium."},
 {j:"pilih",t:"Untuk kempen derma darah di sekolah, langkah keselamatan PALING penting:",p:["Saring penderma","Ambil darah semua murid","Abaikan berat badan","Guna jarum berulang"],b:0,u:"Penderma mesti cukup umur, sihat dan memenuhi syarat berat."},
 {j:"pilih",t:"Anda mahu menunjukkan kesan senaman terhadap nadi dalam pameran sains. Reka bentuk PALING adil:",p:["Sebelum dan selepas","Senaman berbeza setiap murid","Ukur selepas sahaja","Tanya perasaan murid"],b:0,u:"Bacaan sebelum dan selepas aktiviti yang sama membolehkan perbandingan."},
 {j:"pilih",t:"Aplikasi telefon untuk merekod tekanan darah perlu memaparkan:",p:["Amaran jika tinggi","Iklan makanan segera","Permainan video","Harga saham"],b:0,u:"Amaran membantu pengguna mendapatkan rawatan awal."},
 {j:"banyak",t:"Pilih DUA maklumat penting dalam risalah pencegahan strok anda.",p:["Tanda awal strok","Nombor kecemasan","Resipi kek mentega","Iklan rokok"],b:[0,1],u:"Rawatan pantas mengurangkan kerosakan otak."}],
 bos:{j:"buka",
  t:"Reka satu model, alat atau program berkaitan sistem peredaran darah untuk sekolah atau komuniti (contoh: model jantung berfungsi dengan injap, program senaman memantau nadi, kempen saringan tekanan darah, menu rendah garam untuk warga emas).",
  arahan:"Nyatakan tujuan dan kumpulan sasaran, konsep peredaran yang ditonjolkan (peredaran ganda dua, kitar jantung, output kardium atau penyakit kardiovaskular), bahan atau aktiviti beserta sebab, SATU pengiraan (contoh: output kardium atau kadar denyutan), cara mengukur keberkesanan dengan data, SATU langkah keselamatan, dan SATU pertimbangan kos atau budaya tempatan.",
  u:"Jawapan TP6 yang kukuh menerangkan aliran darah dan fungsi injap dengan tepat, membuat pengiraan output kardium atau kadar denyutan yang betul, mengukur kesan dengan data sebelum dan selepas, menitikberatkan keselamatan peserta, serta mempertimbangkan kos dan budaya komuniti."}}
];

module.exports = {
  id:"b4b10", tingkatan:4, kod:"10.0 Pengangkutan dalam Manusia dan Haiwan",
  tajuk:"Sungai Merah",
  subtajuk:"Biologi Ting. 4 · Bab 10 Pengangkutan dalam Manusia dan Haiwan",
  spi:SPI.b4b10,
  ulasan:{
   1:"{n} dapat mengingat kembali komponen darah, salur darah dan jenis sistem peredaran. Langkah seterusnya ialah menerangkan peredaran ganda dua dan denyutan jantung.",
   2:"{n} dapat menjelaskan aliran darah melalui jantung dan kawalan denyutan. Perlu lebih latihan mengira output kardium.",
   3:"{n} boleh mengaplikasikan formula output kardium dan mentafsir data jantung. Galakkan menganalisis graf kitar jantung.",
   4:"{n} mampu menganalisis perubahan tekanan dalam kitar jantung. Seterusnya latih menilai isu penyakit kardiovaskular.",
   5:"{n} dapat menilai isu pembekuan darah, sistem limfa dan penyakit jantung dengan hujah saintifik. Sudah bersedia mereka model atau program.",
   6:"{n} berjaya mereka model atau program peredaran darah dengan justifikasi yang kukuh. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pengangkutan dalam Manusia dan Haiwan. Cadangan: ulang hentian pertama dan kira nadi sendiri sebelum dan selepas bersenam."
  },
  lampiran:{
   a1:{jenis:"aliran", mod:"kitar",
     nod:["Bahagian kanan jantung","?","Bahagian kiri jantung","Seluruh badan"],
     kapsyen:"Rajah 1 · Peredaran darah ganda dua dalam manusia",
     alt:"Rajah kitaran: bahagian kanan jantung, bahagian bertanda soal, bahagian kiri jantung, seluruh badan, kembali ke bahagian kanan jantung"},
   j1:jadual(1, "Kadar denyutan jantung dan isi padu strok dua individu",
     ["Individu", "Keadaan", "Kadar denyutan (denyutan/min)", "Isi padu strok (ml)"],
     [["P","Rehat","70","70"],["P","Bersenam","140","100"],["Q","Rehat","50","100"],["Q","Bersenam","150","150"]]),
   g1:{jenis:"graf", x:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8], xLabel:"Masa (s)", titik:true, yMin:0, yMaks:140, grid:7,
     siri:[{label:"Tekanan ventrikel kiri (mmHg)", y:[5,10,120,115,40,5,5,5,8], warna:"ungu"}],
     kapsyen:"Rajah 2 · Graf tekanan dalam ventrikel kiri sepanjang satu kitar jantung",
     alt:"Graf rendah pada 5 hingga 10 mmHg, naik ke puncak 120 pada 0.2 s, kekal 115 pada 0.3 s, jatuh ke 40 dan kembali sekitar 5 dari 0.5 hingga 0.8 s"}
  },
  aras:ARAS
};
