/* Biologi KSSM Tingkatan 5, Bab 10 Kelestarian Alam Sekitar.
   SK 10.1 Ancaman kepada alam sekitar, 10.2 Pemeliharaan, pemuliharaan dan pemulihan ekosistem,
   10.3 Amalan dalam kelestarian alam sekitar, 10.4 Teknologi hijau (DSKP Biologi). */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Bumi Terancam", sk:"10.1 Ancaman kepada alam sekitar", lampiran:null,
 kadNama:"Kesan Rumah Hijau", kadEm:"\u{1F321}\u{FE0F}", kadFakta:"Gas rumah hijau seperti CO₂ dan metana memerangkap haba dan menyebabkan pemanasan global.",
 bosKadNama:"Penipisan Ozon", bosKadEm:"\u{1F6E1}\u{FE0F}", bosKadFakta:"CFC memusnahkan lapisan ozon yang menyerap sinaran ultraungu.",
 soalan:[
 {j:"pilih",t:"Gas yang dihasilkan oleh lembu dan sawah padi serta menyumbang kepada pemanasan global ialah:",p:["Metana","Oksigen","Nitrogen","Argon"],b:0,u:"Metana ialah gas rumah hijau yang kuat."},
 {j:"pilih",t:"Bahan yang memusnahkan lapisan ozon ialah:",p:["CFC","Oksigen","Wap air","Nitrogen"],b:0,u:"Klorofluorokarbon daripada peti sejuk dan aerosol lama."},
 {j:"pilih",t:"Hujan asid disebabkan terutamanya oleh gas:",p:["Sulfur dioksida","Oksigen","Gas helium","Gas metana dari sawah"],b:0,u:"SO₂ dan nitrogen oksida bertindak balas dengan air."},
 {j:"pilih",t:"Pembalakan berlebihan di kawasan bukit menyebabkan:",p:["Hakisan tanah","Udara lebih bersih","Hujan bertambah","Air sungai jernih"],b:0,u:"Akar pokok tidak lagi mencengkam tanah."},
 {j:"pilih",t:"Eutrofikasi berlaku apabila sungai menerima lebihan:",p:["Baja","Pasir","Batu","Oksigen"],b:0,u:"Nitrat dan fosfat menyebabkan alga membiak pesat."},
 {j:"pilih",t:"Kesan utama sinaran ultraungu berlebihan kepada manusia ialah:",p:["Kanser kulit","Tulang kuat","Mata lebih tajam","Rambut tebal"],b:0,u:"Ozon yang nipis membenarkan lebih banyak UV sampai ke Bumi."},
 {j:"pilih",t:"Pencemaran plastik di laut membahayakan penyu kerana penyu:",p:["Menelan plastik","Membina sarang","Menyerap cahaya","Bertelur lebih"],b:0,u:"Beg plastik kelihatan seperti obor-obor."},
 {j:"banyak",t:"Pilih DUA gas rumah hijau.",p:["Karbon dioksida","Metana","Oksigen","Nitrogen"],b:[0,1],u:"Oksigen dan nitrogen bukan gas rumah hijau utama."}],
 bos:{j:"pilih",t:"Mengapakah pembakaran hutan untuk pertanian menyumbang kepada pemanasan global dengan DUA cara?",p:["Bebas CO₂, kurang penyerap","Tambah oksigen, kurang haba","Hujan bertambah","Ozon bertambah"],b:0,u:"Pembakaran membebaskan CO₂ dan pokok yang menyerap CO₂ hilang."}},

{n:2, tempat:"Rantai Sebab", sk:"10.1 Kesan ancaman · 10.2 Pemuliharaan", lampiran:"a1",
 kadNama:"Pemuliharaan", kadEm:"\u{1F33F}", kadFakta:"Pemuliharaan ialah penggunaan sumber secara bijak supaya kekal untuk generasi akan datang.",
 bosKadNama:"Pemulihan", bosKadEm:"\u{1FA79}", bosKadFakta:"Pemulihan ekosistem mengembalikan habitat yang rosak, contohnya penanaman semula bakau.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa bertanda ? ialah:",p:["Alga membiak pesat","Ikan bertambah","Air menjadi jernih","Oksigen bertambah"],b:0,u:"Nitrat dan fosfat menyuburkan alga."},
 {j:"pilih",t:"Berdasarkan Rajah 1, oksigen terlarut berkurang kerana:",p:["Pengurai bernafas","Alga berfotosintesis","Ikan bertambah","Air sejuk"],b:0,u:"Bakteria pengurai menggunakan oksigen semasa mengurai alga mati."},
 {j:"pilih",t:"Berdasarkan Rajah 1, ikan mati kerana kekurangan:",p:["Oksigen","Nitrat","Cahaya","Garam"],b:0,u:"BOD meningkat dan oksigen terlarut jatuh."},
 {j:"pilih",t:"Taman Negara ditubuhkan terutamanya untuk:",p:["Pemeliharaan","Pembalakan","Perlombongan","Perumahan"],b:0,u:"Melindungi ekosistem asal daripada gangguan manusia."},
 {j:"pilih",t:"Penanaman semula hutan di kawasan bekas lombong ialah contoh:",p:["Pemulihan","Pencemaran","Eutrofikasi","Pembalakan"],b:0,u:"Ekosistem yang rosak dikembalikan."},
 {j:"pilih",t:"Pembalakan terpilih dianggap lebih lestari kerana:",p:["Pokok muda ditinggal","Semua pokok ditebang","Hutan dibakar","Tanah dibajak"],b:0,u:"Hutan dapat tumbuh semula."},
 {j:"pilih",t:"Berdasarkan Rajah 1, langkah PALING berkesan mencegah masalah ini ialah:",p:["Kawal larian baja","Tambah ikan","Tambah baja","Buang alga sahaja"],b:0,u:"Mencegah punca nutrien berlebihan."},
 {j:"banyak",t:"Pilih DUA contoh pemuliharaan.",p:["Kitar semula kertas","Pembalakan terpilih","Pembakaran terbuka","Membuang sisa ke sungai"],b:[0,1],u:"Penggunaan sumber secara bijak."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, jika baja organik menggantikan baja kimia di ladang berhampiran, kesan PALING mungkin:",p:["Kurang larut lesap","Alga semakin bertambah","Lebih banyak ikan mati","Tiada perubahan pada tasik"],b:0,u:"Baja organik membebaskan nutrien secara perlahan."}},

{n:3, tempat:"Makmal Air", sk:"10.3 Mengaplikasikan ukuran kualiti air (BOD)", lampiran:"j1",
 kadNama:"BOD", kadEm:"\u{1F4A7}", kadFakta:"Keperluan oksigen biokimia (BOD) ialah oksigen yang digunakan mikroorganisma dalam 5 hari.",
 bosKadNama:"Metilena Biru", bosKadEm:"\u{1F535}", bosKadFakta:"Larutan metilena biru dinyahwarnakan lebih cepat dalam air yang tercemar teruk.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 1, sampel air PALING tercemar ialah:",p:["S","P","Q","R"],b:0,u:"Metilena biru dinyahwarnakan paling cepat (0.5 jam)."},
 {j:"pilih",t:"Berdasarkan Jadual 1, sampel PALING bersih ialah:",p:["P","Q","R","S"],b:0,u:"Masa nyahwarna paling lama."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapa kali lebih lama masa nyahwarna sampel P berbanding S?",b:20,tol:0.1,suf:"kali",u:"10 ÷ 0.5 = 20 kali."},
 {j:"pilih",t:"Berdasarkan Jadual 1, sampel S PALING mungkin diambil dari:",p:["Longkang ternakan","Air pili rumah","Air suling makmal","Mata air di gunung"],b:0,u:"Bahan organik tinggi menyokong banyak bakteria."},
 {j:"pilih",t:"Metilena biru dinyahwarnakan kerana:",p:["Oksigen habis","Cahaya terlalu kuat","Suhu rendah","Air mendidih"],b:0,u:"Bakteria menggunakan oksigen; metilena biru diturunkan dan hilang warna."},
 {j:"pilih",t:"Semua botol ditutup dan disimpan dalam gelap untuk:",p:["Elak fotosintesis","Mempercepat penyejatan","Menambah cahaya","Menyejukkan air"],b:0,u:"Alga tidak menambah oksigen semasa ujian."},
 {j:"pilih",t:"BOD tinggi menunjukkan air mengandungi banyak:",p:["Bahan organik","Oksigen","Ikan","Garam mineral"],b:0,u:"Mikroorganisma pengurai menggunakan banyak oksigen."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung purata masa nyahwarna sampel Q dan R.",b:3.5,tol:0.05,suf:"jam",u:"(5 + 2) ÷ 2 = 3.5 jam."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, sebuah kilang mendakwa air buangannya bersih. Sampelnya dinyahwarnakan dalam 1 jam. Penilaian PALING tepat:",p:["Tercemar teruk","Sangat bersih","Sesuai diminum","Tiada bahan organik"],b:0,u:"Hampir sama dengan sampel S yang tercemar."}},

{n:4, tempat:"Bilik Karbon", sk:"10.1 Menganalisis data karbon dioksida atmosfera", lampiran:"g1",
 kadNama:"Keeling", kadEm:"\u{1F4C8}", kadFakta:"Kepekatan CO₂ atmosfera telah meningkat daripada sekitar 315 ppm (1960) kepada lebih 420 ppm.",
 bosKadNama:"Sasaran Karbon", bosKadEm:"\u{1F3AF}", bosKadFakta:"Malaysia menyasarkan pelepasan gas rumah hijau sifar bersih seawal 2050.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah kepekatan CO₂ pada tahun 2000?",b:370,tol:1,suf:"ppm",u:"Bacaan graf: 370 ppm."},
 {j:"nombor",t:"Berdasarkan Rajah 2, hitung pertambahan CO₂ dari 1960 hingga 2020.",b:100,tol:1,suf:"ppm",u:"420 − 320 = 100 ppm."},
 {j:"nombor",t:"Berdasarkan Rajah 2, hitung kadar purata pertambahan CO₂ dari 2000 hingga 2020.",b:2.5,tol:0.05,suf:"ppm/tahun",u:"(420 − 370) ÷ 20 = 2.5 ppm setahun."},
 {j:"pilih",t:"Berdasarkan Rajah 2, kadar pertambahan CO₂:",p:["Semakin pantas","Semakin perlahan","Malar","Menurun"],b:0,u:"Kecerunan graf bertambah dari masa ke masa."},
 {j:"pilih",t:"Punca utama pertambahan dalam Rajah 2 ialah:",p:["Bahan api fosil","Fotosintesis tumbuhan","Hujan lebat","Ombak laut"],b:0,u:"Pembakaran arang batu, minyak dan gas."},
 {j:"nombor",t:"Berdasarkan Rajah 2, hitung kadar purata pertambahan CO₂ dari 1960 hingga 1980.",b:1,tol:0.05,suf:"ppm/tahun",u:"(340 − 320) ÷ 20 = 1 ppm setahun."},
 {j:"pilih",t:"Berdasarkan Rajah 2, jika kadar 2000-2020 berterusan, CO₂ pada 2040 dijangka sekitar:",p:["470 ppm","420 ppm","370 ppm","320 ppm"],b:0,u:"420 + 2.5 × 20 = 470 ppm."},
 {j:"pilih",t:"Kesan langsung peningkatan CO₂ kepada lautan ialah:",p:["Air laut berasid","Air laut tawar","Ombak berhenti","Garam bertambah"],b:0,u:"CO₂ larut membentuk asid karbonik; terumbu karang terjejas."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 2, langkah PALING berkesan untuk memperlahankan trend ini ialah:",p:["Tenaga boleh baharu","Tebang hutan untuk ladang","Tambah kenderaan persendirian","Bakar sampah secara terbuka"],b:0,u:"Mengurangkan pembakaran bahan api fosil menyerang punca utama."}},

{n:5, tempat:"Dewan Hijau", sk:"10.3 Amalan kelestarian · 10.4 Teknologi hijau", lampiran:null,
 kadNama:"Teknologi Hijau", kadEm:"\u{1F33F}", kadFakta:"Teknologi hijau meminimumkan kemusnahan alam sekitar dan menjimatkan tenaga.",
 bosKadNama:"Biogas", bosKadEm:"\u{1F525}", bosKadFakta:"Sisa ternakan boleh diurai secara anaerob untuk menghasilkan biogas (metana).",
 soalan:[
 {j:"pilih",t:"Contoh teknologi hijau dalam pengurusan sisa ialah:",p:["Kompos","Pembakaran terbuka","Tapak pelupusan haram","Buang ke sungai"],b:0,u:"Sisa organik diurai menjadi baja."},
 {j:"pilih",t:"Penilaian PALING tepat tentang panel suria di bumbung sekolah:",p:["Kurangkan pelepasan","Menambah pencemaran udara","Tiada manfaat kepada sekolah","Membazir tenaga elektrik"],b:0,u:"Elektrik dijana tanpa membakar bahan api fosil."},
 {j:"pilih",t:"Penggunaan biogas dari sisa lembu memberi manfaat kerana:",p:["Metana digunakan","Metana dibebaskan","Bau bertambah","Sungai tercemar"],b:0,u:"Metana dibakar untuk tenaga dan tidak dilepaskan ke atmosfera."},
 {j:"pilih",t:"Rawatan biologi air sisa menggunakan:",p:["Mikroorganisma","Serpihan plastik","Logam berat","Racun kimia"],b:0,u:"Bakteria mengurai bahan organik dalam enap cemar teraktif."},
 {j:"pilih",t:"Antara beg plastik sekali guna dan beg kain, yang manakah lebih lestari?",p:["Beg kain","Beg plastik","Kedua-duanya sama","Tiada beza kesan"],b:0,u:"Beg kain boleh diguna berulang kali."},
 {j:"pilih",t:"Lampu LED dipilih berbanding lampu pijar kerana:",p:["Jimat tenaga","Lebih panas","Lebih mahal","Kurang terang"],b:0,u:"LED menukar lebih banyak tenaga kepada cahaya."},
 {j:"pilih",t:"Plastik biodegradasi lebih baik kerana ia:",p:["Diurai mikroorganisma","Kekal selamanya","Mudah terbakar","Lebih berat"],b:0,u:"Kurang pengumpulan sampah di tapak pelupusan dan laut."},
 {j:"banyak",t:"Pilih DUA amalan 3R.",p:["Kurangkan","Guna semula","Bakar","Buang"],b:[0,1],u:"R ketiga ialah kitar semula."}],
 bos:{j:"pilih",t:"Sebuah ladang lembu besar membuang sisa ke sungai. Cadangan PALING lestari:",p:["Bina loji biogas","Alirkan sisa ke laut","Bakar sisa secara terbuka","Tutup sungai dengan konkrit"],b:0,u:"Sisa ditukar kepada tenaga dan baja, pencemaran sungai berkurang."}},

{n:6, tempat:"Studio Lestari", sk:"10.1 hingga 10.4 Mereka cipta berasaskan kelestarian", lampiran:null,
 kadNama:"Audit Tenaga", kadEm:"\u{1F50C}", kadFakta:"Audit tenaga mengenal pasti penggunaan elektrik yang boleh dikurangkan.",
 bosKadNama:"Sekolah Lestari", bosKadEm:"\u{1F4A1}", bosKadFakta:"Program Sekolah Lestari menggalakkan amalan hijau dalam komuniti sekolah.",
 soalan:[
 {j:"pilih",t:"Anda mahu mengurangkan sisa makanan kantin. Langkah PALING berkesan:",p:["Kompos sisa","Buang lebih kerap","Bakar sisa","Tanam dalam plastik"],b:0,u:"Sisa organik menjadi baja untuk kebun sekolah."},
 {j:"pilih",t:"Untuk mengukur kejayaan kempen kitar semula, data PALING sesuai:",p:["Jisim bahan dikitar","Bilangan poster dicetak","Warna tong kitar semula","Nama kelas peserta"],b:0,u:"Jisim bulanan menunjukkan perubahan sebenar."},
 {j:"pilih",t:"Untuk mengurangkan penggunaan elektrik kelas, anda:",p:["Tutup suis","Pasang lampu lagi","Buka penghawa dingin","Biarkan kipas"],b:0,u:"Tabiat mudah menjimatkan tenaga."},
 {j:"pilih",t:"Untuk membina komposter ringkas, bekas perlu:",p:["Berlubang udara","Kedap udara","Berisi air","Diletak di bilik darjah"],b:0,u:"Pengurai aerob perlukan oksigen."},
 {j:"pilih",t:"Untuk menuai air hujan untuk kebun sekolah, anda memerlukan:",p:["Tangki dan talang","Pam minyak","Kolam garam","Penapis udara"],b:0,u:"Air hujan dari bumbung dialir ke tangki."},
 {j:"pilih",t:"Data penggunaan elektrik sebelum dan selepas kempen paling jelas dibentangkan dengan:",p:["Carta palang","Puisi tentang tenaga","Lukisan kelas","Carta pai"],b:0,u:"Carta palang membandingkan dua tempoh."},
 {j:"pilih",t:"Untuk menguji kualiti air sungai berhampiran sekolah, kaedah ringkas:",p:["Ujian metilena biru","Menghidu bau air","Merasa air sungai","Melihat warna langit"],b:0,u:"Menganggar tahap pencemaran organik."},
 {j:"banyak",t:"Pilih DUA langkah keselamatan semasa menyampel air sungai.",p:["Pakai sarung tangan","Pergi berkumpulan","Minum air sungai","Berenang ke tengah"],b:[0,1],u:"Air tercemar dan arus sungai berbahaya."}],
 bos:{j:"buka",
  t:"Reka satu projek kelestarian alam sekitar untuk sekolah atau komuniti (contoh: komposter sisa kantin, kempen 3R dengan sistem pengumpulan, penuaian air hujan untuk kebun sekolah, audit tenaga kelas, pemantauan kualiti air sungai dengan ujian metilena biru, loji biogas mini).",
  arahan:"Nyatakan masalah alam sekitar yang ditangani dan puncanya, konsep yang terlibat (ancaman alam sekitar, pemuliharaan, pemulihan, amalan lestari atau teknologi hijau), langkah pelaksanaan, data yang akan dikumpul untuk mengukur kejayaan beserta SATU contoh pengiraan, SATU langkah keselamatan, dan SATU pertimbangan kos serta manfaat jangka panjang.",
  u:"Jawapan TP6 yang kukuh mengenal pasti punca masalah dengan tepat, memilih teknologi atau amalan hijau yang sesuai, mengukur kejayaan secara kuantitatif seperti jisim sisa atau kWj elektrik, menjaga keselamatan, serta menilai kos berbanding manfaat kepada komuniti dan alam sekitar."}}
];

module.exports = {
  id:"b5b10", tingkatan:5, kod:"10.0 Kelestarian Alam Sekitar",
  tajuk:"Bumi Lestari",
  subtajuk:"Biologi Ting. 5 · Bab 10 Kelestarian Alam Sekitar",
  spi:SPI.b5b10,
  ulasan:{
   1:"{n} dapat mengingat kembali ancaman kepada alam sekitar. Langkah seterusnya ialah menerangkan rantai sebab eutrofikasi.",
   2:"{n} dapat menjelaskan kesan pencemaran dan konsep pemuliharaan. Perlu lebih latihan mentafsir data kualiti air.",
   3:"{n} boleh mengaplikasikan data metilena biru untuk menilai pencemaran air. Galakkan menganalisis graf CO₂.",
   4:"{n} mampu menganalisis trend karbon dioksida atmosfera. Seterusnya latih menilai teknologi hijau.",
   5:"{n} dapat menilai amalan lestari dan teknologi hijau. Sudah bersedia mereka projek kelestarian.",
   6:"{n} berjaya mereka projek kelestarian yang terancang dan boleh diukur. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kelestarian Alam Sekitar. Cadangan: ulang hentian pertama dan senaraikan sampah yang dibuang di rumah selama sehari."
  },
  lampiran:{
   a1:{jenis:"aliran", mod:"turun",
     nod:["Baja larut lesap ke tasik","?","Alga mati diurai bakteria","Oksigen terlarut berkurang","Ikan mati"],
     kapsyen:"Rajah 1 · Urutan eutrofikasi di sebuah tasik",
     alt:"Rajah aliran: baja larut lesap ke tasik, peristiwa bertanda soal, alga mati diurai bakteria, oksigen terlarut berkurang, ikan mati"},
   j1:jadual(1, "Masa untuk metilena biru dinyahwarnakan dalam empat sampel air",
     ["Sampel", "P", "Q", "R", "S"],
     [["Masa (jam)","10","5","2","0.5"]]),
   g1:{jenis:"graf", x:[1960,1980,2000,2020], xLabel:"Tahun", titik:true, yMin:310, yMaks:430, grid:12,
     siri:[{label:"CO₂ atmosfera (ppm)", y:[320,340,370,420], warna:"merah"}],
     kapsyen:"Rajah 2 · Kepekatan karbon dioksida atmosfera (nilai dibundarkan)",
     alt:"Graf menaik: 320 ppm pada 1960, 340 pada 1980, 370 pada 2000 dan 420 pada 2020"}
  },
  aras:ARAS
};
