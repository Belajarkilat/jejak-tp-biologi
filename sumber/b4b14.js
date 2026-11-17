/* Biologi KSSM Tingkatan 4, Bab 14 Sokongan dan Pergerakan pada Manusia dan Haiwan.
   SK 14.1 Jenis rangka, 14.2 Sistem otot rangka manusia, 14.3 Pergerakan dan lokomosi,
   14.4 Masalah kesihatan sistem otot rangka (DSKP Biologi). Data disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Rangka Kehidupan", sk:"14.1 Jenis rangka · 14.2 Sistem otot rangka", lampiran:null,
 kadNama:"Tiga Jenis Rangka", kadEm:"\u{1F9B4}", kadFakta:"Rangka hidrostatik (cacing), rangka luar (serangga) dan rangka dalam (vertebrata).",
 bosKadNama:"Sendi", bosKadEm:"\u{1F9BF}", bosKadFakta:"Sendi engsel membenarkan pergerakan satu satah; sendi lesung membenarkan pergerakan pelbagai arah.",
 soalan:[
 {j:"pilih",t:"Cacing tanah mempunyai rangka:",p:["Hidrostatik","Luar","Dalam","Bertulang"],b:0,u:"Tekanan bendalir dalam rongga badan memberi sokongan."},
 {j:"pilih",t:"Rangka luar serangga diperbuat daripada:",p:["Kitin","Selulosa","Kalsium fosfat","Keratin"],b:0,u:"Eksoskeleton kitin melindungi dan menyokong serangga."},
 {j:"pilih",t:"Tisu yang menyambung otot kepada tulang ialah:",p:["Tendon","Ligamen","Rawan","Saraf"],b:0,u:"Tendon kuat dan tidak kenyal."},
 {j:"pilih",t:"Tisu yang menyambung tulang kepada tulang ialah:",p:["Ligamen","Tendon","Otot","Kulit"],b:0,u:"Ligamen kuat dan sedikit kenyal."},
 {j:"pilih",t:"Sendi bahu ialah contoh sendi:",p:["Lesung","Engsel","Pivot","Tidak bergerak"],b:0,u:"Lengan boleh diputar dalam banyak arah."},
 {j:"pilih",t:"Sendi siku ialah contoh sendi:",p:["Engsel","Lesung","Pivot","Gelincir"],b:0,u:"Siku bergerak dalam satu satah sahaja."},
 {j:"pilih",t:"Bendalir sinovia dalam sendi berfungsi untuk:",p:["Melincirkan sendi","Menyambung otot","Menghasilkan darah","Menyimpan kalsium"],b:0,u:"Ia mengurangkan geseran antara tulang."},
 {j:"banyak",t:"Pilih DUA fungsi rangka manusia.",p:["Melindungi organ dalaman","Menghasilkan sel darah","Mencerna makanan","Menapis darah"],b:[0,1],u:"Sumsum tulang menghasilkan sel darah; tengkorak melindungi otak."}],
 bos:{j:"pilih",t:"Mengapakah serangga perlu bersalin kulit untuk membesar?",p:["Rangka luar tidak membesar","Kulit terlalu lembut","Otot terlalu kecil","Tiada tulang dalam"],b:0,u:"Eksoskeleton kitin tegar dan tidak dapat bertambah saiz."}},

{n:2, tempat:"Bilik Otot", sk:"14.2 dan 14.3 Pergerakan otot antagonis dan lokomosi", lampiran:"a1",
 kadNama:"Otot Antagonis", kadEm:"\u{1F4AA}", kadFakta:"Bisep dan trisep bertindak secara antagonis: apabila satu mengecut, yang satu lagi mengendur.",
 bosKadNama:"Lokomosi Ikan", bosKadEm:"\u{1F41F}", bosKadFakta:"Ikan berenang melalui pengecutan otot miotom secara berselang-seli di kiri dan kanan badan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peringkat bertanda ? ialah:",p:["Trisep mengendur","Trisep mengecut","Bisep mengendur","Ligamen putus"],b:0,u:"Otot antagonis mengendur apabila bisep mengecut."},
 {j:"pilih",t:"Berdasarkan Rajah 1, untuk meluruskan lengan:",p:["Trisep mengecut","Bisep mengecut","Kedua-duanya mengecut","Kedua-duanya mengendur"],b:0,u:"Trisep menarik ulna untuk meluruskan lengan."},
 {j:"pilih",t:"Otot hanya boleh menarik, tidak menolak. Oleh itu otot rangka bekerja:",p:["Secara berpasangan","Secara bersendirian","Bebas daripada saraf","Bebas daripada ATP"],b:0,u:"Pasangan antagonis menggerakkan tulang ke dua arah."},
 {j:"pilih",t:"Tenaga untuk pengecutan otot dibekalkan oleh:",p:["ATP","Kalsium","Kolagen","Kitin"],b:0,u:"ATP daripada respirasi sel."},
 {j:"pilih",t:"Cacing tanah bergerak dengan menggunakan otot membulat, otot membujur dan:",p:["Seta","Sirip","Sayap","Kaki bersendi"],b:0,u:"Seta mencengkam tanah semasa otot mengecut."},
 {j:"pilih",t:"Burung terbang dengan mengecutkan otot:",p:["Pektoral","Bisep","Trisep","Gastroknemius"],b:0,u:"Otot pektoral besar menarik sayap ke bawah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, impuls yang merangsang bisep dibawa oleh:",p:["Neuron motor","Neuron deria","Tendon","Ligamen"],b:0,u:"Neuron motor (eferen) membawa impuls ke otot."},
 {j:"banyak",t:"Pilih DUA struktur yang terlibat apabila lengan dibengkokkan.",p:["Bisep","Tendon","Trisep yang mengecut","Ligamen yang putus"],b:[0,1],u:"Bisep mengecut dan tendon menarik tulang."}],
 bos:{j:"pilih",t:"Seorang pemain bola sepak mengalami tendon Achilles terputus. Kesan utamanya:",p:["Tidak dapat berjinjit","Lengan tidak dapat diangkat","Tidak dapat bernafas","Penglihatan kabur"],b:0,u:"Tendon Achilles menyambung otot betis kepada tulang tumit."}},

{n:3, tempat:"Makmal Keletihan", sk:"14.3 Mengaplikasikan eksperimen keletihan otot", lampiran:"j1",
 kadNama:"Keletihan Otot", kadEm:"\u{1F975}", kadFakta:"Keletihan otot berlaku apabila asid laktik terkumpul dan bekalan ATP berkurang.",
 bosKadNama:"Rehat", bosKadEm:"\u{1F6CC}", bosKadFakta:"Rehat membolehkan asid laktik dioksidakan dan otot pulih.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung peratus penurunan bilangan picitan dari minit 1 hingga minit 5.",b:50,tol:0.1,suf:"%",u:"(60 − 30) ÷ 60 × 100% = 50%."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung purata bilangan picitan seminit.",b:45,tol:0.1,suf:"picitan",u:"(60 + 52 + 45 + 38 + 30) ÷ 5 = 45."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah bilangan picitan berkurang?",p:["Otot semakin letih","Otot bertambah kuat","Penyepit semakin ringan","Tangan semakin sejuk"],b:0,u:"Asid laktik terkumpul akibat fermentasi."},
 {j:"pilih",t:"Berdasarkan Jadual 1, pemboleh ubah bergerak balas ialah:",p:["Bilangan picitan","Masa","Jenis penyepit","Tangan digunakan"],b:0,u:"Bilangan picitan diukur pada setiap minit."},
 {j:"pilih",t:"Berdasarkan Jadual 1, pemboleh ubah dimalarkan ialah:",p:["Jenis penyepit","Bilangan picitan","Tahap keletihan","Asid laktik"],b:0,u:"Penyepit yang sama memastikan daya yang diperlukan sama."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah penurunan bilangan picitan antara minit 2 dan minit 3?",b:7,tol:0.1,suf:"picitan",u:"52 − 45 = 7 picitan."},
 {j:"pilih",t:"Berdasarkan Jadual 1, jika murid berehat 5 minit dan mengulangi ujian, ramalan PALING munasabah:",p:["Picitan meningkat semula","Picitan menjadi sifar","Tiada perubahan","Otot rosak kekal"],b:0,u:"Rehat membolehkan otot pulih."},
 {j:"pilih",t:"Bagaimanakah eksperimen Jadual 1 dijadikan lebih sah?",p:["Uji lebih ramai murid","Uji seminit sahaja","Tukar penyepit setiap minit","Abaikan masa"],b:0,u:"Saiz sampel yang besar meningkatkan kesahan."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, atlet terlatih mengulangi ujian yang sama. Ramalan PALING munasabah:",p:["Penurunan lebih perlahan","Penurunan lebih cepat","Picitan sifar","Tiada picitan pada minit 1"],b:0,u:"Otot terlatih menerima lebih oksigen dan kurang bergantung pada fermentasi."}},

{n:4, tempat:"Bilik Graf Tulang", sk:"14.4 Menganalisis perubahan ketumpatan tulang", lampiran:"g1",
 kadNama:"Osteoporosis", kadEm:"\u{1F4C9}", kadFakta:"Osteoporosis ialah keadaan tulang rapuh akibat kehilangan mineral, terutama selepas umur 50 tahun.",
 bosKadNama:"Simpanan Tulang", bosKadEm:"\u{1F95B}", bosKadFakta:"Jisim tulang puncak dibina semasa remaja dan awal dewasa melalui kalsium, vitamin D dan senaman.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah ketumpatan mineral tulang pada umur 50 tahun?",b:1,tol:0.01,suf:"g/cm²",u:"Graf menunjukkan 1.00 g/cm²."},
 {j:"nombor",t:"Berdasarkan Rajah 2, hitung peratus penurunan ketumpatan tulang dari umur 30 hingga 70 tahun. Beri jawapan kepada 1 tempat perpuluhan.",b:32.2,tol:0.1,suf:"%",u:"(1.18 − 0.80) ÷ 1.18 × 100% = 32.2%."},
 {j:"pilih",t:"Berdasarkan Rajah 2, pada umur berapakah ketumpatan tulang paling tinggi?",p:["20 tahun","50 tahun","60 tahun","70 tahun"],b:0,u:"Jisim tulang puncak dicapai pada awal dewasa."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah ketumpatan tulang wanita menurun dengan cepat selepas menopaus?",p:["Estrogen berkurang","Estrogen bertambah","Tulang memanjang","Otot bertambah"],b:0,u:"Estrogen membantu mengekalkan ketumpatan tulang."},
 {j:"nombor",t:"Berdasarkan Rajah 2, hitung kadar purata penurunan ketumpatan dari umur 50 hingga 70 tahun.",b:0.01,tol:0.001,suf:"g/cm² setahun",u:"(1.00 − 0.80) ÷ 20 = 0.01 g/cm² setahun."},
 {j:"pilih",t:"Berdasarkan Rajah 2, apakah risiko utama warga emas berumur 70 tahun?",p:["Patah tulang","Tulang memanjang","Rawan bertambah","Otot terlalu kuat"],b:0,u:"Tulang rapuh mudah patah apabila jatuh."},
 {j:"pilih",t:"Berdasarkan Rajah 2, cadangan PALING berkesan untuk remaja bagi mengurangkan risiko osteoporosis kelak:",p:["Senaman beban dan kalsium","Elak cahaya matahari","Minum minuman bergas","Kurangkan protein"],b:0,u:"Membina jisim tulang puncak yang tinggi semasa muda."},
 {j:"pilih",t:"Data Rajah 2 ialah purata populasi. Mengapakah ketumpatan tulang individu boleh berbeza?",p:["Genetik dan gaya hidup","Graf telah diplot salah","Umur tidak mempengaruhi","Tulang setiap orang sama"],b:0,u:"Diet, senaman, hormon dan genetik mempengaruhi tulang."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 2, mengapakah program senaman untuk warga emas sering menekankan latihan keseimbangan?",p:["Elak jatuh dan patah","Menambah tinggi","Menghasilkan kalsium","Memanjangkan tulang"],b:0,u:"Tulang rapuh; mencegah jatuh mengurangkan risiko patah tulang."}},

{n:5, tempat:"Klinik Ortopedik", sk:"14.4 Menilai masalah kesihatan sistem otot rangka", lampiran:null,
 kadNama:"Artritis", kadEm:"\u{1F9D3}", kadFakta:"Osteoartritis berlaku apabila rawan sendi haus, menyebabkan sakit dan sendi kaku.",
 bosKadNama:"Postur", bosKadEm:"\u{1F392}", bosKadFakta:"Beg berat dan postur yang salah boleh menyebabkan sakit belakang dan skoliosis.",
 soalan:[
 {j:"pilih",t:"Osteoartritis berlaku apabila:",p:["Rawan sendi haus","Tendon memanjang","Ligamen bertambah","Darah membeku"],b:0,u:"Tulang bergeser antara satu sama lain dan menyebabkan sakit."},
 {j:"pilih",t:"Kekejangan otot semasa bersenam boleh dikurangkan dengan:",p:["Regangan dan cukup air","Bersenam tanpa memanas badan","Mengelak minum air","Makan banyak sebelum lari"],b:0,u:"Regangan dan hidrasi mengurangkan risiko kejang."},
 {j:"pilih",t:"Terseliuh berlaku apabila:",p:["Ligamen tercedera","Tulang patah","Otot hilang","Darah tersumbat"],b:0,u:"Ligamen terlalu teregang atau koyak."},
 {j:"pilih",t:"Rawatan awal PALING sesuai untuk pergelangan kaki terseliuh:",p:["Rehat, ais, balutan","Urut kuat serta-merta","Lari untuk regang","Rendam air panas"],b:0,u:"Kaedah RICE: rehat, ais, mampatan, angkat tinggi."},
 {j:"pilih",t:"Penilaian PALING tepat tentang murid membawa beg sekolah lebih 15% berat badan:",p:["Risiko sakit belakang","Menguatkan tulang belakang","Tiada kesan","Menambah tinggi"],b:0,u:"Beban berlebihan mengubah postur dan menegangkan otot belakang."},
 {j:"pilih",t:"Riket pada kanak-kanak disebabkan oleh kekurangan:",p:["Vitamin D","Vitamin C","Zat besi","Iodin"],b:0,u:"Tulang menjadi lembut dan bengkok."},
 {j:"pilih",t:"Distrofi otot ialah penyakit genetik yang menyebabkan:",p:["Otot lemah beransur","Tulang lebih kuat","Sendi lebih lincir","Darah lebih pekat"],b:0,u:"Serat otot semakin rosak dan digantikan tisu lain."},
 {j:"banyak",t:"Pilih DUA amalan menjaga kesihatan sistem otot rangka.",p:["Postur betul","Senaman berkala","Duduk membongkok lama","Angkat beban dengan belakang"],b:[0,1],u:"Angkat beban dengan membengkokkan lutut, bukan belakang."}],
 bos:{j:"pilih",t:"Sekolah mencadangkan loker untuk murid supaya tidak membawa semua buku setiap hari. Penilaian PALING tepat:",p:["Kurangkan beban tulang belakang","Membazir ruang sekolah","Tiada kesan kesihatan","Menambah berat beg"],b:0,u:"Beg ringan mengurangkan risiko sakit belakang dan postur salah."}},

{n:6, tempat:"Studio Reka Gerak", sk:"14.1 hingga 14.4 Mereka cipta berasaskan sokongan dan pergerakan", lampiran:null,
 kadNama:"Model Lengan", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Model lengan daripada kadbod dan getah menunjukkan tindakan bisep dan trisep.",
 bosKadNama:"Reka Cipta Ergonomik", bosKadEm:"\u{1F4A1}", bosKadFakta:"Reka bentuk ergonomik menyesuaikan alatan dengan tubuh manusia untuk mengurangkan kecederaan.",
 soalan:[
 {j:"pilih",t:"Dalam model lengan kadbod, getah gelang mewakili:",p:["Otot","Tulang","Sendi","Saraf"],b:0,u:"Getah boleh memendek dan meregang seperti otot."},
 {j:"pilih",t:"Dalam model lengan, paku tekan di siku mewakili:",p:["Sendi engsel","Tendon","Ligamen","Sumsum tulang"],b:0,u:"Ia membenarkan pergerakan dalam satu satah."},
 {j:"pilih",t:"Anda mereka beg sekolah ergonomik. Ciri PALING penting:",p:["Dua tali lebar berpad","Satu tali nipis","Tiada tali pinggang","Bahan berat"],b:0,u:"Beban diagih sama rata pada kedua-dua bahu."},
 {j:"pilih",t:"Untuk menilai keberkesanan beg ergonomik, data PALING sesuai:",p:["Laporan sakit belakang","Warna beg","Jenama beg","Harga beg"],b:0,u:"Perubahan kes sakit menunjukkan kesan sebenar."},
 {j:"pilih",t:"Anda merancang senaman untuk warga emas osteoporosis. Senaman PALING selamat:",p:["Berjalan perlahan","Lompat tinggi","Angkat beban berat","Lari pecut"],b:0,u:"Senaman berimpak rendah menguatkan tulang tanpa risiko jatuh tinggi."},
 {j:"pilih",t:"Anda mereka kerusi belajar ergonomik. Ciri PALING penting:",p:["Sokongan tulang belakang","Kerusi tanpa penyandar","Tempat duduk sangat tinggi","Kaki kerusi tidak sama"],b:0,u:"Sokongan lumbar mengekalkan postur yang betul."},
 {j:"pilih",t:"Untuk menguji kekuatan genggaman sebelum dan selepas program latihan anda, alat PALING sesuai:",p:["Dinamometer tangan","Termometer","Pembaris","Jam randik"],b:0,u:"Dinamometer mengukur daya genggaman."},
 {j:"banyak",t:"Pilih DUA langkah keselamatan dalam program senaman anda.",p:["Memanaskan badan","Peralatan dalam keadaan baik","Bersenam ketika sakit","Abaikan rasa sakit sendi"],b:[0,1],u:"Memanaskan badan dan peralatan selamat mengurangkan kecederaan."}],
 bos:{j:"buka",
  t:"Reka satu model, alat atau program berkaitan sokongan dan pergerakan (contoh: model lengan yang menunjukkan otot antagonis, beg sekolah ergonomik, program senaman pencegahan osteoporosis, kerusi belajar ergonomik).",
  arahan:"Nyatakan tujuan dan kumpulan sasaran, konsep yang ditonjolkan (otot antagonis, sendi, ketumpatan tulang atau postur), bahan dan reka bentuk beserta sebab, cara menguji keberkesanan dengan data yang boleh diukur (contoh: kekuatan genggaman, laporan sakit), SATU langkah keselamatan, dan SATU pertimbangan kos atau budaya tempatan.",
  u:"Jawapan TP6 yang kukuh menerangkan kerja otot antagonis, sendi atau kesihatan tulang dengan tepat, memadankan bahan dengan struktur badan, menggunakan ukuran sebelum dan selepas, mengutamakan keselamatan pengguna, serta mempertimbangkan kos dan kesesuaian untuk masyarakat setempat."}}
];

module.exports = {
  id:"b4b14", tingkatan:4, kod:"14.0 Sokongan dan Pergerakan pada Manusia dan Haiwan",
  tajuk:"Tulang dan Gerak",
  subtajuk:"Biologi Ting. 4 · Bab 14 Sokongan dan Pergerakan pada Manusia dan Haiwan",
  spi:SPI.b4b14,
  ulasan:{
   1:"{n} dapat mengingat kembali jenis rangka, tendon, ligamen dan jenis sendi. Langkah seterusnya ialah menerangkan tindakan otot antagonis.",
   2:"{n} dapat menjelaskan pergerakan lengan dan lokomosi haiwan. Perlu lebih latihan mentafsir data keletihan otot.",
   3:"{n} boleh mengaplikasikan data eksperimen keletihan otot. Galakkan menganalisis graf ketumpatan tulang.",
   4:"{n} mampu menganalisis perubahan ketumpatan tulang mengikut umur. Seterusnya latih menilai masalah kesihatan otot rangka.",
   5:"{n} dapat menilai isu artritis, osteoporosis, kecederaan dan postur. Sudah bersedia mereka model atau alat ergonomik.",
   6:"{n} berjaya mereka model atau alat sokongan dan pergerakan dengan justifikasi yang kukuh. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Sokongan dan Pergerakan. Cadangan: ulang hentian pertama dan rasa bisep serta trisep semasa membengkok dan meluruskan lengan."
  },
  lampiran:{
   a1:{jenis:"aliran", mod:"turun",
     nod:["Impuls saraf sampai ke bisep","Bisep mengecut","?","Tendon menarik radius","Lengan dibengkokkan"],
     kapsyen:"Rajah 1 · Urutan peristiwa semasa lengan dibengkokkan",
     alt:"Rajah aliran: impuls saraf sampai ke bisep, bisep mengecut, peringkat bertanda soal, tendon menarik radius, lengan dibengkokkan"},
   j1:jadual(1, "Bilangan picitan penyepit kain setiap minit oleh seorang murid",
     ["Minit", "1", "2", "3", "4", "5"],
     [["Bilangan picitan","60","52","45","38","30"]]),
   g1:{jenis:"graf", x:[20,30,40,50,60,70], xLabel:"Umur (tahun)", titik:true, yMin:0, yMaks:1.4, grid:7,
     siri:[{label:"Ketumpatan mineral tulang (g/cm²)", y:[1.20,1.18,1.10,1.00,0.90,0.80], warna:"ungu"}],
     kapsyen:"Rajah 2 · Graf purata ketumpatan mineral tulang wanita mengikut umur",
     alt:"Graf menurun dari 1.20 pada umur 20 ke 1.18 pada 30, 1.10 pada 40, 1.00 pada 50, 0.90 pada 60 dan 0.80 pada 70"}
  },
  aras:ARAS
};
