/* Biologi KSSM Tingkatan 4, Bab 8 Sistem Respirasi pada Manusia dan Haiwan.
   SK 8.1 Jenis sistem respirasi, 8.2 Mekanisme pernafasan, 8.3 Pertukaran gas dalam manusia,
   8.4 Kesihatan sistem respirasi manusia (DSKP Biologi). Data disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Terowong Udara", sk:"8.1 Jenis sistem respirasi · 8.3 Pertukaran gas", lampiran:null,
 kadNama:"Alveolus", kadEm:"\u{1FAC1}", kadFakta:"Alveolus berdinding setebal satu sel, lembap dan diselaputi kapilari darah untuk pertukaran gas yang cekap.",
 bosKadNama:"Insang", bosKadEm:"\u{1F41F}", bosKadFakta:"Ikan bertukar gas melalui insang; darah dan air mengalir dalam arah bertentangan.",
 soalan:[
 {j:"pilih",t:"Tapak pertukaran gas dalam peparu manusia ialah:",p:["Alveolus","Trakea","Bronkus","Farinks"],b:0,u:"Oksigen meresap dari alveolus ke kapilari darah."},
 {j:"pilih",t:"Serangga bertukar gas melalui:",p:["Sistem trakea","Insang","Peparu","Kulit sahaja"],b:0,u:"Udara masuk melalui spirakel ke trakeol yang sampai terus ke sel."},
 {j:"pilih",t:"Lubang kecil di sisi badan serangga tempat udara masuk ialah:",p:["Spirakel","Operkulum","Alveolus","Diafragma"],b:0,u:"Spirakel boleh dibuka dan ditutup untuk mengurangkan kehilangan air."},
 {j:"pilih",t:"Katak dewasa bertukar gas melalui peparu dan:",p:["Kulit lembap","Insang luar","Spirakel","Trakeol"],b:0,u:"Kulit katak nipis, lembap dan kaya kapilari darah."},
 {j:"pilih",t:"Otot berbentuk kubah di bawah peparu ialah:",p:["Diafragma","Otot interkosta","Bisep","Trisep"],b:0,u:"Diafragma mengecut dan mendatar semasa menarik nafas."},
 {j:"pilih",t:"Gelang rawan pada trakea berfungsi untuk:",p:["Elak kempis","Menapis habuk","Menukar gas","Menghasilkan mukus"],b:0,u:"Rawan memastikan saluran udara sentiasa terbuka."},
 {j:"pilih",t:"Pertukaran gas di alveolus berlaku secara:",p:["Resapan","Osmosis","Pengangkutan aktif","Pinositosis"],b:0,u:"Gas bergerak mengikut kecerunan kepekatan."},
 {j:"banyak",t:"Pilih DUA ciri permukaan respirasi yang cekap.",p:["Nipis","Lembap","Tebal dan kering","Kurang kapilari"],b:[0,1],u:"Permukaan luas, nipis, lembap dan kaya kapilari mempercepat resapan."}],
 bos:{j:"pilih",t:"Mengapakah aliran arus bertentangan dalam insang ikan cekap?",p:["Kecerunan kekal","Air bergerak perlahan","Darah tidak bergerak","Insang tiada kapilari"],b:0,u:"Darah sentiasa bertemu air yang lebih kaya oksigen di sepanjang lamela."}},

{n:2, tempat:"Laluan Nafas", sk:"8.2 Mekanisme pernafasan · 8.3 Pengangkutan gas", lampiran:"a1",
 kadNama:"Tarik Nafas", kadEm:"\u{1F32C}\u{FE0F}", kadFakta:"Menarik nafas: diafragma dan otot interkosta luar mengecut, isi padu toraks bertambah, tekanan menurun, udara masuk.",
 bosKadNama:"Oksihemoglobin", bosKadEm:"\u{1FA78}", bosKadFakta:"Oksigen diangkut oleh hemoglobin sebagai oksihemoglobin dan dibebaskan di tisu.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, struktur bertanda ? ialah:",p:["Bronkus","Esofagus","Laring","Alveolus"],b:0,u:"Trakea bercabang kepada dua bronkus sebelum membentuk bronkiol."},
 {j:"pilih",t:"Semasa menarik nafas, diafragma:",p:["Mendatar","Mengendur dan melengkung","Bergerak ke atas","Tidak berubah"],b:0,u:"Ini menambah isi padu rongga toraks."},
 {j:"pilih",t:"Semasa menghembus nafas, tekanan dalam peparu:",p:["Lebih tinggi","Lebih rendah","Sama dengan atmosfera","Menjadi sifar"],b:0,u:"Isi padu toraks berkurang, jadi udara ditolak keluar."},
 {j:"pilih",t:"Semasa menarik nafas, tulang rusuk bergerak:",p:["Ke atas dan ke luar","Ke bawah dan ke dalam","Ke kiri sahaja","Tidak bergerak"],b:0,u:"Otot interkosta luar mengecut."},
 {j:"pilih",t:"Kebanyakan karbon dioksida diangkut dalam darah sebagai:",p:["Ion bikarbonat","Oksihemoglobin","Glukosa","Gas bebas sahaja"],b:0,u:"CO₂ bergabung dengan air di dalam sel darah merah membentuk ion bikarbonat."},
 {j:"pilih",t:"Berdasarkan Rajah 1, rambut dan mukus dalam rongga hidung berfungsi untuk:",p:["Menapis habuk","Menukar gas","Menghasilkan enzim","Mengangkut oksigen"],b:0,u:"Udara juga dilembapkan dan dipanaskan di rongga hidung."},
 {j:"pilih",t:"Pusat respirasi yang mengawal kadar pernafasan terletak di:",p:["Medula oblongata","Serebrum","Serebelum","Saraf tunjang"],b:0,u:"Ia peka terhadap kepekatan CO₂ dalam darah."},
 {j:"banyak",t:"Pilih DUA perubahan semasa menghembus nafas.",p:["Diafragma mengendur","Isi padu toraks berkurang","Tulang rusuk naik","Tekanan peparu menurun"],b:[0,1],u:"Tulang rusuk turun dan tekanan dalam peparu meningkat."}],
 bos:{j:"pilih",t:"Kepekatan CO₂ dalam darah meningkat semasa bersenam. Gerak balas badan ialah:",p:["Nafas lebih laju","Pernafasan lebih perlahan","Jantung berhenti seketika","Diafragma lumpuh"],b:0,u:"Pusat respirasi menghantar impuls supaya CO₂ dikeluarkan dengan lebih cepat."}},

{n:3, tempat:"Makmal Udara", sk:"8.3 Mengaplikasikan data komposisi udara", lampiran:"j1",
 kadNama:"Udara Hembusan", kadEm:"\u{1F4A8}", kadFakta:"Udara hembusan mengandungi kurang oksigen, lebih banyak CO₂ dan tepu dengan wap air.",
 bosKadNama:"Air Kapur", bosKadEm:"\u{1F9EA}", bosKadFakta:"Air kapur menjadi keruh lebih cepat dengan udara hembusan kerana kandungan CO₂ yang tinggi.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah peratus oksigen yang diserap oleh badan daripada udara sedutan?",b:5,tol:0.05,suf:"%",u:"21% − 16% = 5%."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapa kali ganda peratus CO₂ dalam udara hembusan berbanding udara sedutan?",b:100,tol:0.5,suf:"kali",u:"4 ÷ 0.04 = 100 kali."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah peratus nitrogen tidak berubah?",p:["Tidak digunakan","Nitrogen diserap habis","Nitrogen menjadi CO₂","Nitrogen dicernakan"],b:0,u:"Nitrogen ialah gas lengai bagi badan manusia."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah udara hembusan tepu dengan wap air?",p:["Alveolus lembap","Air diminum terus","Peluh masuk peparu","Mukus menyerap air"],b:0,u:"Wap air tersejat dari permukaan lembap alveolus."},
 {j:"nombor",t:"Berdasarkan Jadual 1, seorang murid menyedut 500 cm³ udara setiap nafas. Hitung isi padu oksigen yang disedut setiap nafas.",b:105,tol:0.5,suf:"cm³",u:"21% × 500 = 105 cm³."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung isi padu oksigen yang diserap setiap nafas bagi 500 cm³ udara.",b:25,tol:0.5,suf:"cm³",u:"(21% − 16%) × 500 = 25 cm³."},
 {j:"pilih",t:"Bagaimanakah membuktikan udara hembusan mengandungi lebih CO₂ daripada udara sedutan?",p:["Uji dengan air kapur","Uji dengan iodin","Uji dengan Biuret","Ukur suhu udara"],b:0,u:"Air kapur yang dialirkan udara hembusan cepat menjadi keruh."},
 {j:"nombor",t:"Berdasarkan Jadual 1, kadar pernafasan 15 nafas/min dengan 500 cm³ setiap nafas. Hitung isi padu oksigen diserap dalam 1 minit.",b:375,tol:1,suf:"cm³",u:"25 cm³ × 15 = 375 cm³."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, mengapakah bantuan pernafasan mulut ke mulut (CPR) masih berkesan walaupun udara hembusan kurang oksigen?",p:["Masih ada 16% oksigen","Hembusan tiada CO₂","Nitrogen bantu jantung","Wap air membekalkan oksigen"],b:0,u:"16% oksigen masih mencukupi untuk menyokong mangsa sementara."}},

{n:4, tempat:"Bilik Graf Nafas", sk:"8.2 Menganalisis kadar pernafasan semasa aktiviti", lampiran:"g1",
 kadNama:"Kadar Pernafasan", kadEm:"\u{1F4C8}", kadFakta:"Kadar pernafasan meningkat semasa senaman untuk membekalkan O₂ dan menyingkirkan CO₂.",
 bosKadNama:"Tahap Kecergasan", bosKadEm:"\u{1F3C5}", bosKadFakta:"Individu cergas kembali ke kadar pernafasan rehat dengan lebih cepat.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah kadar pernafasan semasa rehat?",b:15,tol:0.5,suf:"nafas/min",u:"Minit 0 dan minit 2 menunjukkan 15 nafas/min."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah kadar pernafasan maksimum?",b:32,tol:0.5,suf:"nafas/min",u:"Puncak pada minit ke-4 ialah 32 nafas/min."},
 {j:"nombor",t:"Berdasarkan Rajah 2, hitung peningkatan kadar pernafasan dari rehat hingga maksimum.",b:17,tol:0.5,suf:"nafas/min",u:"32 − 15 = 17 nafas/min."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah kadar pernafasan meningkat dari minit 2 hingga 4?",p:["Keperluan O₂ meningkat","Otot berehat","Kandungan CO₂ menurun","Diafragma lumpuh"],b:0,u:"Otot memerlukan lebih banyak tenaga semasa bersenam."},
 {j:"pilih",t:"Berdasarkan Rajah 2, kadar pernafasan masih tinggi pada minit ke-6 kerana:",p:["Hutang oksigen","Senaman bermula semula","Suhu bilik rendah","Peparu rosak"],b:0,u:"Oksigen tambahan diperlukan untuk mengoksidakan asid laktik."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapa minit diambil untuk kadar kembali ke 15 nafas/min selepas puncak?",b:6,tol:0.2,suf:"min",u:"Dari minit 4 hingga minit 10 = 6 minit."},
 {j:"pilih",t:"Berdasarkan Rajah 2, bagaimanakah graf bagi seorang atlet terlatih berbeza?",p:["Pulih lebih cepat","Puncak jauh lebih tinggi","Tiada perubahan langsung","Kadar rehat lebih tinggi"],b:0,u:"Atlet mempunyai sistem kardiorespirasi yang lebih cekap."},
 {j:"pilih",t:"Untuk membandingkan kecergasan dua murid menggunakan graf seperti Rajah 2, pemboleh ubah dimalarkan ialah:",p:["Jenis dan tempoh senaman","Kadar pernafasan","Masa pemulihan","Nama murid"],b:0,u:"Senaman yang sama membolehkan perbandingan yang adil."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 2, seorang perokok mengambil masa 12 minit untuk kembali ke kadar rehat. Inferens PALING munasabah:",p:["Alveolus rosak","Perokok lebih cergas","Peparunya lebih besar","Rokok menambah oksigen"],b:0,u:"Asap rokok merosakkan alveolus dan mengurangkan luas permukaan pertukaran gas."}},

{n:5, tempat:"Klinik Peparu", sk:"8.4 Menilai kesihatan sistem respirasi", lampiran:null,
 kadNama:"Emfisema", kadEm:"\u{1F6AD}", kadFakta:"Emfisema berlaku apabila dinding alveolus rosak, mengurangkan luas permukaan pertukaran gas.",
 bosKadNama:"Jerebu", bosKadEm:"\u{1F32B}\u{FE0F}", bosKadFakta:"Zarah PM2.5 dalam jerebu boleh masuk jauh ke dalam peparu dan memburukkan asma.",
 soalan:[
 {j:"pilih",t:"Tar dalam asap rokok menyebabkan:",p:["Kanser peparu","Rabun jauh","Anemia","Kencing manis"],b:0,u:"Tar mengandungi karsinogen yang merosakkan DNA sel peparu."},
 {j:"pilih",t:"Karbon monoksida dalam asap rokok berbahaya kerana:",p:["Terikat hemoglobin","Menambah oksigen darah","Menurunkan suhu badan","Menambah sel darah putih"],b:0,u:"CO bergabung dengan hemoglobin lebih kuat daripada O₂, mengurangkan pengangkutan oksigen."},
 {j:"pilih",t:"Pesakit asma mengalami sesak nafas kerana:",p:["Bronkiol menyempit","Alveolus bertambah","Trakea memanjang","Diafragma membesar"],b:0,u:"Otot bronkiol mengecut dan mukus berlebihan dihasilkan."},
 {j:"pilih",t:"Semasa jerebu, langkah PALING berkesan melindungi sistem respirasi murid:",p:["Kurangkan aktiviti luar","Bersenam di padang","Buka semua tingkap","Bakar sampah di luar"],b:0,u:"Mengurangkan pendedahan kepada zarah halus."},
 {j:"pilih",t:"Mengapakah vape juga tidak selamat untuk remaja?",p:["Mengandungi nikotin","Wapnya air tulen","Membersihkan peparu","Menambah oksigen"],b:0,u:"Nikotin menyebabkan ketagihan dan bahan kimia dalam wap boleh merosakkan peparu."},
 {j:"pilih",t:"Pekerja kilang simen berisiko tinggi mendapat penyakit peparu. Cadangan PALING berkesan kepada majikan:",p:["Topeng N95","Tambah waktu kerja","Buang sistem pengudaraan","Beri minuman bergula"],b:0,u:"Alat pelindung pernafasan mengurangkan habuk yang disedut."},
 {j:"pilih",t:"Antara berikut, yang manakah merupakan kesan perokok pasif terhadap kanak-kanak di rumah?",p:["Risiko asma meningkat","Pertumbuhan lebih pantas","Peparu lebih kuat","Tiada kesan langsung"],b:0,u:"Asap rokok sekunder merengsakan saluran pernafasan kanak-kanak."},
 {j:"banyak",t:"Pilih DUA langkah yang menjaga kesihatan sistem respirasi.",p:["Bersenam secara berkala","Elak asap rokok","Membakar sampah terbuka","Tinggal dalam bilik berhabuk"],b:[0,1],u:"Senaman menguatkan otot pernafasan dan mengelak asap melindungi alveolus."}],
 bos:{j:"pilih",t:"Majlis daerah mahu mengharamkan merokok di semua kedai makan. Penilaian PALING seimbang:",p:["Lindungi bukan perokok","Merugikan peniaga makanan","Tidak beri kesan kesihatan","Hak perokok diutamakan"],b:0,u:"Larangan mengurangkan pendedahan asap sekunder; kesan ekonomi dapat diurus dengan kawasan merokok yang berasingan."}},

{n:6, tempat:"Studio Reka Nafas", sk:"8.1 hingga 8.4 Mereka cipta berasaskan sistem respirasi", lampiran:null,
 kadNama:"Model Peparu", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Model balang loceng dengan belon dan kepingan getah menunjukkan mekanisme pernafasan.",
 bosKadNama:"Kempen Udara Bersih", bosKadEm:"\u{1F4A1}", bosKadFakta:"Kempen berasaskan data kualiti udara (IPU) lebih meyakinkan masyarakat.",
 soalan:[
 {j:"pilih",t:"Dalam model balang loceng, kepingan getah di dasar mewakili:",p:["Diafragma","Trakea","Tulang rusuk","Alveolus"],b:0,u:"Menarik kepingan getah ke bawah meniru diafragma mengecut."},
 {j:"pilih",t:"Dalam model balang loceng, belon mewakili:",p:["Peparu","Jantung","Diafragma","Rongga hidung"],b:0,u:"Belon mengembang apabila tekanan dalam balang menurun."},
 {j:"pilih",t:"Kelemahan model balang loceng ialah ia tidak menunjukkan:",p:["Tulang rusuk bergerak","Udara masuk","Belon mengembang","Tekanan berubah"],b:0,u:"Balang loceng tegar, berbeza dengan sangkar rusuk."},
 {j:"pilih",t:"Anda mereka penapis udara ringkas untuk kelas semasa jerebu. Bahan PALING berkesan:",p:["Penapis HEPA","Kain kapas nipis","Kertas surat khabar","Plastik berlubang besar"],b:0,u:"Penapis HEPA memerangkap zarah halus."},
 {j:"pilih",t:"Bagaimanakah anda menguji keberkesanan penapis udara anda?",p:["Bacaan PM2.5","Lihat warna kipas","Dengar bunyi kipas","Kira bilangan murid"],b:0,u:"Meter zarah memberi data kuantitatif sebelum dan selepas."},
 {j:"pilih",t:"Anda merancang kempen berhenti merokok untuk ibu bapa. Strategi PALING meyakinkan:",p:["Kongsi data risiko","Marahi perokok di khalayak","Sebar maklumat tanpa sumber","Gunakan ancaman semata-mata"],b:0,u:"Data kesihatan dan penjimatan wang lebih memotivasikan."},
 {j:"pilih",t:"Anda mereka latihan pernafasan untuk murid asma. Langkah keselamatan PALING penting:",p:["Rujuk doktor","Latihan sangat berat","Tinggalkan inhaler","Latih semasa jerebu"],b:0,u:"Pakar perubatan menentukan tahap latihan yang selamat."},
 {j:"banyak",t:"Pilih DUA data yang sesuai untuk menilai kempen udara bersih di sekolah.",p:["Bacaan IPU","Kes murid asma","Warna poster kempen","Harga kertas poster"],b:[0,1],u:"Data kualiti udara dan kesihatan mengukur kesan sebenar."}],
 bos:{j:"buka",
  t:"Reka satu model, alat atau kempen berkaitan sistem respirasi untuk sekolah atau komuniti (contoh: model peparu yang menunjukkan pergerakan rusuk, penapis udara kelas semasa jerebu, kempen kawasan bebas asap rokok, latihan pernafasan untuk kecergasan).",
  arahan:"Nyatakan tujuan dan kumpulan sasaran, konsep respirasi yang terlibat (mekanisme pernafasan, pertukaran gas atau kesan bahan pencemar), bahan dan reka bentuk beserta sebab, cara menguji keberkesanan dengan data (contoh: PM2.5, kadar pernafasan, soal selidik), SATU langkah keselamatan, dan SATU pertimbangan kos atau budaya tempatan.",
  u:"Jawapan TP6 yang kukuh menerangkan perubahan isi padu dan tekanan toraks atau kesan bahan pencemar pada alveolus dengan tepat, memilih bahan yang wajar, mengukur kesan dengan data sebelum dan selepas, mengutamakan keselamatan pesakit asma, serta mempertimbangkan kos dan budaya masyarakat."}}
];

module.exports = {
  id:"b4b8", tingkatan:4, kod:"8.0 Sistem Respirasi pada Manusia dan Haiwan",
  tajuk:"Nafas Kehidupan",
  subtajuk:"Biologi Ting. 4 · Bab 8 Sistem Respirasi pada Manusia dan Haiwan",
  spi:SPI.b4b8,
  ulasan:{
   1:"{n} dapat mengingat kembali struktur sistem respirasi manusia dan haiwan. Langkah seterusnya ialah menerangkan mekanisme pernafasan.",
   2:"{n} dapat menjelaskan mekanisme menarik dan menghembus nafas serta pengangkutan gas. Perlu lebih latihan mentafsir data komposisi udara.",
   3:"{n} boleh mengaplikasikan data komposisi udara untuk mengira oksigen yang diserap. Galakkan menganalisis graf kadar pernafasan.",
   4:"{n} mampu menganalisis perubahan kadar pernafasan semasa aktiviti. Seterusnya latih menilai isu kesihatan respirasi.",
   5:"{n} dapat menilai isu merokok, jerebu dan penyakit peparu dengan hujah saintifik. Sudah bersedia mereka model atau kempen.",
   6:"{n} berjaya mereka model, alat atau kempen respirasi dengan justifikasi yang kukuh. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Sistem Respirasi. Cadangan: ulang hentian pertama dan kira kadar pernafasan sendiri sebelum dan selepas berlari."
  },
  lampiran:{
   a1:{jenis:"aliran", mod:"turun",
     nod:["Rongga hidung","Farinks","Trakea","?","Bronkiol","Alveolus"],
     kapsyen:"Rajah 1 · Laluan udara ke dalam peparu manusia",
     alt:"Rajah aliran: rongga hidung, farinks, trakea, struktur bertanda soal, bronkiol, alveolus"},
   j1:jadual(1, "Komposisi udara sedutan dan udara hembusan",
     ["Gas", "Udara sedutan (%)", "Udara hembusan (%)"],
     [["Oksigen","21","16"],["Karbon dioksida","0.04","4"],["Nitrogen","78","78"],["Wap air","Berubah-ubah","Tepu"]]),
   g1:{jenis:"graf", x:[0,2,4,6,8,10], xLabel:"Masa (min)", titik:true, yMin:0, yMaks:35, grid:7,
     siri:[{label:"Kadar pernafasan (nafas/min)", y:[15,15,32,26,20,15], warna:"ungu"}],
     kapsyen:"Rajah 2 · Graf kadar pernafasan seorang murid; berlari dari minit 2 hingga 4",
     alt:"Graf mendatar 15 dari minit 0 hingga 2, naik ke 32 pada minit 4, kemudian turun ke 26, 20 dan 15 pada minit 10"}
  },
  aras:ARAS
};
