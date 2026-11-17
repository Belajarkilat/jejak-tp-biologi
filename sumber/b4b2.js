/* Biologi KSSM Tingkatan 4, Bab 2 Biologi Sel dan Organisasi Sel.
   SK 2.1 Struktur dan fungsi sel, 2.2 Proses hidup organisma unisel,
   2.3 Proses hidup organisma multisel, 2.4 Aras organisasi (DSKP Biologi, dskp/biologi-en.pdf). */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Bilik Mikroskop", sk:"2.1 Struktur dan fungsi sel · 2.4 Aras organisasi", lampiran:null,
 kadNama:"Organel", kadEm:"\u{1F52C}", kadFakta:"Organel ialah struktur khusus dalam sel yang menjalankan fungsi tertentu, seperti mitokondrion dan kloroplas.",
 bosKadNama:"Aras Organisasi", bosKadEm:"\u{1FA9C}", bosKadFakta:"Sel → tisu → organ → sistem → organisma.",
 soalan:[
 {j:"pilih",t:"Organel yang menjadi tapak respirasi sel ialah:",p:["Mitokondrion","Ribosom","Jasad Golgi","Vakuol besar"],b:0,u:"Mitokondrion menghasilkan tenaga (ATP) melalui respirasi aerob."},
 {j:"pilih",t:"Struktur yang terdapat pada sel tumbuhan tetapi tiada pada sel haiwan ialah:",p:["Dinding sel","Membran plasma","Nukleus","Sitoplasma"],b:0,u:"Sel tumbuhan juga mempunyai kloroplas dan vakuol besar."},
 {j:"pilih",t:"Fungsi ribosom ialah:",p:["Sintesis protein","Menyimpan kanji","Mencerna bakteria","Fotosintesis"],b:0,u:"Ribosom ialah tapak sintesis protein, sama ada bebas atau pada jalinan endoplasma kasar."},
 {j:"pilih",t:"Organel yang mengandungi klorofil ialah:",p:["Kloroplas","Lisosom","Sentriol","Mitokondrion"],b:0,u:"Klorofil menyerap cahaya untuk fotosintesis."},
 {j:"pilih",t:"Kumpulan sel yang serupa dan menjalankan fungsi yang sama dikenali sebagai:",p:["Tisu","Organ","Sistem","Organel"],b:0,u:"Contoh: tisu otot, tisu saraf dan tisu epitelium."},
 {j:"pilih",t:"Lisosom mengandungi:",p:["Enzim hidrolitik","Klorofil","Asid nukleik bakteria","Sap sel bergula"],b:0,u:"Enzim hidrolitik mencerna organel rosak dan bahan asing."},
 {j:"pilih",t:"Antara berikut, manakah organisma unisel?",p:["Amoeba sp.","Ikan keli","Pokok paku","Cendawan tiram"],b:0,u:"Amoeba sp. terdiri daripada satu sel yang menjalankan semua proses hidup."},
 {j:"banyak",t:"Pilih DUA struktur yang terdapat pada kedua-dua sel haiwan dan sel tumbuhan.",p:["Nukleus","Mitokondrion","Dinding sel","Sentriol"],b:[0,1],u:"Dinding sel hanya pada tumbuhan; sentriol lazimnya hanya pada sel haiwan."}],
 bos:{j:"pilih",t:"Jantung ialah contoh aras organisasi:",p:["Organ","Tisu","Sel","Sistem"],b:0,u:"Jantung terdiri daripada beberapa jenis tisu yang bekerjasama."}},

{n:2, tempat:"Kolam Unisel", sk:"2.1 Fungsi organel · 2.2 Proses hidup organisma unisel · 2.3 Sel khusus", lampiran:"a1",
 kadNama:"Amoeba", kadEm:"\u{1F9A0}", kadFakta:"Amoeba sp. bergerak dan menelan makanan menggunakan pseudopodium, dan menyingkir air berlebihan melalui vakuol mengecut.",
 bosKadNama:"Sel Khusus", bosKadEm:"\u{1F9EC}", bosKadFakta:"Bentuk sel khusus sesuai dengan fungsinya, contohnya sel rambut akar yang panjang menambah luas permukaan.",
 soalan:[
 {j:"pilih",t:"Bagaimanakah Amoeba sp. bergerak?",p:["Menggunakan pseudopodium","Menggunakan flagelum panjang","Menggunakan silia di seluruh badan","Menggunakan otot rangka"],b:0,u:"Sitoplasma mengalir ke dalam tonjolan sementara yang dipanggil pseudopodium."},
 {j:"pilih",t:"Fungsi vakuol mengecut dalam Amoeba sp. ialah:",p:["Menyingkir air","Mencerna makanan","Menyimpan kanji","Menghasilkan tenaga"],b:0,u:"Air sentiasa meresap masuk secara osmosis; vakuol mengecut membuangnya."},
 {j:"pilih",t:"Rajah 1 menunjukkan proses hidup dalam Amoeba sp. Apakah peringkat yang bertanda ?",p:["Pencernaan dalam vakuol makanan","Pembiakan secara konjugasi","Fotosintesis dalam kloroplas","Perkumuhan melalui stoma"],b:0,u:"Selepas fagositosis, enzim lisosom mencerna makanan dalam vakuol makanan."},
 {j:"pilih",t:"Amoeba sp. membiak secara aseks melalui:",p:["Belahan dedua","Persenyawaan","Pendebungaan","Spora seks"],b:0,u:"Nukleus membahagi, kemudian sitoplasma membahagi kepada dua sel anak."},
 {j:"pilih",t:"Sel darah merah tidak mempunyai nukleus. Kelebihannya ialah:",p:["Ruang untuk hemoglobin","Sel boleh membahagi dengan cepat","Sel menghasilkan antibodi","Sel menjadi lebih keras"],b:0,u:"Lebih banyak hemoglobin bermakna lebih banyak oksigen diangkut."},
 {j:"pilih",t:"Sel otot mempunyai banyak mitokondrion kerana:",p:["Memerlukan banyak tenaga","Perlu menyimpan lemak","Menghasilkan hormon","Perlu menyerap air"],b:0,u:"Pengecutan otot memerlukan ATP yang banyak."},
 {j:"pilih",t:"Sel pankreas yang merembes enzim mempunyai banyak:",p:["Jasad Golgi","Kloroplas","Vakuol besar","Dinding sel"],b:0,u:"Jasad Golgi memproses, membungkus dan mengangkut protein untuk dirembes."},
 {j:"banyak",t:"Pilih DUA ciri sel rambut akar yang membantu penyerapan air.",p:["Unjuran panjang dan nipis","Vakuol besar berisi sap sel","Banyak kloroplas","Dinding sel berlignin tebal"],b:[0,1],u:"Luas permukaan besar dan sap sel pekat membantu osmosis. Sel akar tiada kloroplas."}],
 bos:{j:"pilih",t:"Mengapakah Paramecium sp. tidak akan meletup walaupun hidup dalam air tawar?",p:["Vakuol mengecut menyingkir air","Dinding sel yang kuat menahan","Air tidak meresap ke dalam sel","Ia menyimpan air dalam kloroplas"],b:0,u:"Paramecium sp. tiada dinding sel; vakuol mengecut menyingkir air yang masuk secara osmosis."}},

{n:3, tempat:"Bengkel Sel", sk:"2.1 hingga 2.3 Mengaplikasikan pengetahuan struktur sel", lampiran:"j1",
 kadNama:"Ukur Sel", kadEm:"\u{1F4CF}", kadFakta:"Saiz sebenar = saiz imej ÷ pembesaran. 1 mm = 1 000 μm.",
 bosKadNama:"Pembesaran", bosKadEm:"\u{1F50E}", bosKadFakta:"Pembesaran mikroskop = pembesaran kanta objek × pembesaran kanta mata.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung jumlah pembesaran bagi kanta objek 40×.",b:400,tol:0.5,suf:"×",u:"10 × 40 = 400×."},
 {j:"nombor",t:"Berdasarkan Jadual 1, imej sel pipi berukuran 24 mm di bawah pembesaran 400×. Hitung saiz sebenar sel dalam μm.",b:60,tol:0.5,suf:"μm",u:"24 mm ÷ 400 = 0.06 mm = 60 μm."},
 {j:"pilih",t:"Berdasarkan Jadual 1, kanta objek manakah sesuai untuk melihat kloroplas dengan jelas?",p:["40×","4×","10×","Tanpa kanta objek"],b:0,u:"Pembesaran tertinggi (400×) memberi butiran organel yang lebih jelas."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah bilangan sel yang kelihatan merentasi medan 400× jika 20 sel kelihatan merentasi medan 100×? (Andaikan saiz medan berkadar songsang dengan pembesaran.)",b:5,tol:0.01,suf:"sel",u:"Pembesaran 4 kali, jadi diameter medan 1/4: 20 ÷ 4 = 5 sel."},
 {j:"pilih",t:"Larutan iodin digunakan untuk mewarnakan sel bawang kerana iodin:",p:["Menjelaskan struktur sel","Membunuh semua bakteria","Menambah saiz sel","Membuang air dari sel"],b:0,u:"Pewarna menambah kontras struktur sel di bawah mikroskop."},
 {j:"pilih",t:"Sel pipi diwarnakan dengan biru metilena. Struktur yang PALING jelas kelihatan ialah:",p:["Nukleus","Kloroplas","Dinding sel","Vakuol besar"],b:0,u:"Sel pipi ialah sel haiwan, jadi tiada kloroplas, dinding sel atau vakuol besar."},
 {j:"pilih",t:"Gelembung udara kelihatan pada slaid. Puncanya ialah:",p:["Kaca penutup jatuh cepat","Sel terlalu besar untuk slaid","Pewarna terlalu sedikit","Kanta mata yang kotor"],b:0,u:"Kaca penutup diturunkan perlahan dengan jarum pada sudut 45° untuk mengelakkan gelembung."},
 {j:"pilih",t:"Seorang murid melihat sel berdinding sel, kloroplas dan vakuol besar. Sel itu ialah:",p:["Sel palisad daun","Sel darah merah","Sel saraf","Sel pipi manusia"],b:0,u:"Ketiga-tiga ciri itu menunjukkan sel tumbuhan berfotosintesis."}],
 bos:{j:"nombor",t:"Seekor Paramecium sp. berukuran 0.2 mm. Berapakah panjang imejnya dalam mm di bawah pembesaran 100×?",b:20,tol:0.1,suf:"mm",u:"Saiz imej = 0.2 × 100 = 20 mm."}},

{n:4, tempat:"Makmal Organisasi", sk:"2.3 dan 2.4 Menganalisis organisasi sel dalam organisma multisel", lampiran:"j2",
 kadNama:"Sistem Badan", kadEm:"\u{1F9CD}", kadFakta:"Sistem organ bekerjasama untuk mengekalkan kehidupan, contohnya sistem respirasi dan sistem peredaran darah.",
 bosKadNama:"Kerjasama Sel", bosKadEm:"\u{1F91D}", bosKadFakta:"Pengkhususan sel meningkatkan kecekapan, tetapi sel khusus bergantung pada sel lain.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 2, sel P mempunyai banyak mitokondrion. Sel P PALING mungkin ialah:",p:["Sel otot","Sel epidermis bawang","Sel darah merah","Sel tisu lemak"],b:0,u:"Mitokondrion yang banyak menunjukkan keperluan tenaga yang tinggi."},
 {j:"pilih",t:"Berdasarkan Jadual 2, sel Q tiada nukleus dan berbentuk dwicekung. Fungsinya ialah:",p:["Mengangkut oksigen","Menghantar impuls","Menyerap air tanah","Merembes enzim"],b:0,u:"Bentuk dwicekung menambah luas permukaan untuk resapan oksigen."},
 {j:"pilih",t:"Berdasarkan Jadual 2, sel R mempunyai akson yang panjang. Kelebihannya ialah:",p:["Impuls sampai jauh","Menyimpan banyak kanji","Menyerap cahaya","Menghasilkan antibodi"],b:0,u:"Akson panjang menghubungkan bahagian badan yang berjauhan."},
 {j:"pilih",t:"Berdasarkan Jadual 2, sel S mempunyai banyak jasad Golgi dan jalinan endoplasma kasar. Sel S PALING mungkin:",p:["Merembes enzim pencernaan","Mengecut untuk pergerakan","Mengangkut oksigen","Melindungi permukaan kulit"],b:0,u:"JEK mensintesis protein; jasad Golgi memproses dan merembesnya."},
 {j:"pilih",t:"Jika jasad Golgi dalam sel S rosak, apakah kesan PALING langsung?",p:["Enzim tidak dirembes","Sel tidak dapat berespirasi","Sel kehilangan dinding sel","Nukleus menjadi lebih besar"],b:0,u:"Protein tidak dapat diubah suai dan dibungkus untuk dirembes."},
 {j:"pilih",t:"Tisu xilem dan floem dalam tumbuhan berada pada aras organisasi yang sama dengan:",p:["Tisu otot dalam haiwan","Jantung dalam haiwan","Sistem saraf dalam haiwan","Organel dalam sel"],b:0,u:"Xilem dan floem ialah tisu, sama aras dengan tisu otot."},
 {j:"pilih",t:"Mengapakah organisma multisel memerlukan sistem pengangkutan, tetapi Amoeba sp. tidak?",p:["Nisbah luas per isi padu kecil","Organisma multisel tidak berespirasi","Amoeba sp. tiada sitoplasma","Organisma multisel tiada sel"],b:0,u:"Resapan sahaja terlalu perlahan untuk sel di bahagian dalam badan besar."},
 {j:"pilih",t:"Pernyataan manakah PALING tepat tentang pengkhususan sel?",p:["Cekap, tetapi saling bergantung","Sel khusus boleh hidup bersendirian","Pengkhususan mengurangkan kecekapan","Pengkhususan berlaku dalam Amoeba sp."],b:0,u:"Pembahagian kerja meningkatkan kecekapan tetapi menimbulkan kebergantungan."}],
 bos:{j:"pilih",t:"Seorang pesakit mengalami kekurangan sel darah merah. Sistem manakah PALING terjejas fungsinya?",p:["Pengangkutan oksigen","Pencernaan protein","Sokongan rangka","Perkumuhan urea"],b:0,u:"Sel darah merah mengangkut oksigen; kekurangannya menyebabkan anemia dan keletihan."}},

{n:5, tempat:"Dewan Penilai Sel", sk:"2.1 hingga 2.4 Menilai kepentingan organisasi sel", lampiran:null,
 kadNama:"Sel Stem", kadEm:"\u{1F331}", kadFakta:"Sel stem belum terbeza dan boleh berkembang menjadi pelbagai jenis sel khusus.",
 bosKadNama:"Etika Sel", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Penggunaan sel stem dalam perubatan memerlukan pertimbangan etika dan keselamatan.",
 soalan:[
 {j:"pilih",t:"Racun tertentu memusnahkan mitokondrion. Mengapakah racun ini sangat berbahaya?",p:["Sel kehabisan tenaga","Sel kehilangan dinding sel","Sel menjadi terlalu besar","Sel menghasilkan klorofil"],b:0,u:"Tanpa ATP, proses hidup seperti pengecutan otot jantung terhenti."},
 {j:"pilih",t:"Penyakit Tay-Sachs berpunca daripada kegagalan enzim lisosom. Akibat PALING mungkin ialah:",p:["Bahan buangan terkumpul","Sel berfotosintesis berlebihan","Ribosom berhenti berfungsi","Sel kehilangan nukleus"],b:0,u:"Lisosom tidak dapat mencerna bahan tertentu, lalu terkumpul dan merosakkan sel saraf."},
 {j:"pilih",t:"Rawatan sel stem dicadangkan untuk pesakit saraf tunjang. Penilaian PALING seimbang ialah:",p:["Berpotensi, perlu diuji","Pasti menyembuhkan semua pesakit","Tiada risiko kepada pesakit","Tidak berguna dalam perubatan"],b:0,u:"Sel stem berpotensi tetapi perlu bukti klinikal dan pertimbangan etika."},
 {j:"pilih",t:"Pemilihan antara mikroskop cahaya dan mikroskop elektron untuk melihat ribosom. Pilihan PALING tepat:",p:["Mikroskop elektron","Mikroskop cahaya 40×","Kanta pembesar tangan","Mikroskop cahaya 100×"],b:0,u:"Ribosom terlalu kecil untuk resolusi mikroskop cahaya."},
 {j:"pilih",t:"Murid A berkata, 'Sel tumbuhan tidak berespirasi kerana ada kloroplas.' Penilaian manakah PALING tepat?",p:["Salah; ada mitokondrion","Betul; kloroplas ganti respirasi","Betul; tumbuhan tidak perlu tenaga","Salah; tumbuhan tiada kloroplas"],b:0,u:"Sel tumbuhan berespirasi siang dan malam menggunakan mitokondrion."},
 {j:"pilih",t:"Sebuah syarikat menjual 'krim sel stem tumbuhan' yang didakwa membaiki kulit manusia. Sikap PALING saintifik ialah:",p:["Minta bukti kajian klinikal","Beli kerana nama saintifik","Percaya iklan kerana mahal","Tolak semua produk kulit"],b:0,u:"Dakwaan perlu disokong bukti yang diterbitkan dan diuji."},
 {j:"pilih",t:"Antara organisma berikut, yang manakah PALING sesuai untuk kajian awal proses hidup satu sel?",p:["Paramecium sp.","Gajah Asia","Pokok durian","Lebah madu"],b:0,u:"Organisma unisel menunjukkan semua proses hidup dalam satu sel."},
 {j:"banyak",t:"Pilih DUA sebab sel daun palisad sesuai untuk fotosintesis.",p:["Banyak kloroplas","Tersusun rapat di bawah epidermis atas","Tiada mitokondrion","Berbentuk bulat dan longgar"],b:[0,1],u:"Kloroplas yang banyak dan kedudukan dekat permukaan memaksimumkan penyerapan cahaya."}],
 bos:{j:"pilih",t:"Pesakit kanser menerima kemoterapi yang memusnahkan sel yang membahagi dengan cepat. Mengapakah rambut pesakit gugur?",p:["Sel folikel cepat membahagi","Rambut tiada sel hidup","Kemoterapi menambah melanin","Rambut kekurangan klorofil"],b:0,u:"Ubat menyasarkan sel yang cepat membahagi, termasuk sel normal di folikel rambut."}},

{n:6, tempat:"Studio Reka Sel", sk:"2.1 hingga 2.4 Mereka cipta model dan bahan berkaitan sel", lampiran:null,
 kadNama:"Model Sel", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Model yang baik menunjukkan saiz relatif dan fungsi organel dengan tepat.",
 bosKadNama:"Pereka Sel", bosKadEm:"\u{1F4A1}", bosKadFakta:"Model tiga dimensi membantu rakan memahami struktur sel yang tidak dapat dilihat dengan mata kasar.",
 soalan:[
 {j:"pilih",t:"Anda membina model sel tumbuhan daripada bahan terpakai. Bahan manakah PALING sesuai mewakili dinding sel?",p:["Kotak kadbod","Plastik lembut nipis","Kapas","Belon kecil"],b:0,u:"Dinding sel tegar, jadi bahan kaku seperti kadbod paling sesuai."},
 {j:"pilih",t:"Untuk mewakili membran plasma dalam model anda, bahan manakah PALING sesuai?",p:["Plastik lutsinar nipis","Papan lapis yang tebal","Batu kerikil sungai","Dawai besi berkarat"],b:0,u:"Membran plasma nipis dan fleksibel."},
 {j:"pilih",t:"Bagaimanakah anda menunjukkan bahawa sel otot memerlukan banyak tenaga dalam model?",p:["Banyak mitokondrion","Tambah dinding sel tebal","Letak kloroplas yang besar","Buang nukleus"],b:0,u:"Bilangan mitokondrion menunjukkan keperluan tenaga."},
 {j:"pilih",t:"Anda mereka permainan kad padanan organel. Pasangan manakah betul?",p:["Ribosom – sintesis protein","Lisosom – fotosintesis","Vakuol – respirasi","Kloroplas – mencerna bakteria"],b:0,u:"Pasangan lain mencampuradukkan fungsi organel."},
 {j:"pilih",t:"Anda mahu menyediakan slaid sel bawang yang jelas. Langkah manakah PALING penting?",p:["Lapisan epidermis nipis","Gunakan potongan bawang yang tebal","Jangan gunakan pewarna","Biarkan gelembung udara"],b:0,u:"Lapisan satu sel memudahkan cahaya menembusi dan struktur kelihatan."},
 {j:"pilih",t:"Model anda menunjukkan saiz ribosom lebih besar daripada nukleus. Penambahbaikan yang perlu ialah:",p:["Kecilkan ribosom","Besarkan lagi ribosom itu","Buang nukleus daripada model","Tukar warna ribosom sahaja"],b:0,u:"Ribosom jauh lebih kecil daripada nukleus; skala relatif perlu tepat."},
 {j:"pilih",t:"Anda mencipta infografik aras organisasi untuk kelas. Urutan manakah betul?",p:["Sel, tisu, organ, sistem","Organ, sel, sistem, tisu","Tisu, sel, organ, sistem","Sistem, organ, sel, tisu"],b:0,u:"Daripada aras paling ringkas kepada paling kompleks."},
 {j:"banyak",t:"Pilih DUA kriteria untuk menilai model sel tiga dimensi.",p:["Ketepatan saiz relatif organel","Label fungsi setiap organel","Harga bahan paling mahal","Warna kegemaran pembina"],b:[0,1],u:"Ketepatan saintifik dan label yang jelas menentukan nilai model."}],
 bos:{j:"buka",
  t:"Reka satu model atau bahan bantu mengajar untuk menerangkan struktur sel dan aras organisasi kepada murid Tingkatan 1 (contoh: model sel 3D daripada bahan terpakai, permainan kad organel, video animasi ringkas).",
  arahan:"Nyatakan jenis bahan bantu, organel yang ditunjukkan dan bahan yang mewakili setiap organel beserta sebabnya, cara menunjukkan perbezaan sel haiwan dan sel tumbuhan, cara menunjukkan aras organisasi, cara menguji keberkesanannya dengan murid, dan SATU pertimbangan kos atau kelestarian bahan.",
  u:"Jawapan TP6 yang kukuh memadankan bahan dengan ciri organel (contoh: kadbod tegar untuk dinding sel), menunjukkan saiz relatif dengan munasabah, membezakan sel haiwan dan tumbuhan, menerangkan aras sel hingga sistem, mencadangkan ujian kefahaman sebelum dan selepas, serta menggunakan bahan terpakai yang murah."}}
];

module.exports = {
  id:"b4b2", tingkatan:4, kod:"2.0 Biologi Sel dan Organisasi Sel",
  tajuk:"Kota Sel",
  subtajuk:"Biologi Ting. 4 · Bab 2 Biologi Sel dan Organisasi Sel",
  spi:SPI.b4b2,
  ulasan:{
   1:"{n} dapat mengingat kembali organel sel, perbezaan sel haiwan dan tumbuhan serta aras organisasi. Langkah seterusnya ialah menerangkan proses hidup organisma unisel.",
   2:"{n} dapat menjelaskan proses hidup Amoeba sp. dan ciri sel khusus. Perlu lebih latihan mengira saiz sebenar sel dan menyediakan slaid.",
   3:"{n} boleh mengaplikasikan pengiraan pembesaran dan teknik penyediaan slaid. Galakkan menganalisis kaitan struktur dan fungsi sel khusus.",
   4:"{n} mampu menganalisis kaitan struktur organel dengan fungsi sel khusus. Seterusnya latih menilai isu berkaitan sel.",
   5:"{n} dapat menilai kesan kerosakan organel dan isu sel stem secara saintifik. Sudah bersedia mereka bahan bantu tentang sel.",
   6:"{n} berjaya mereka model atau bahan bantu sel yang tepat dan kreatif. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Biologi Sel. Cadangan: ulang hentian pertama dan lukis sel haiwan serta sel tumbuhan dengan label."
  },
  lampiran:{
   a1:{jenis:"aliran", mod:"turun",
     nod:["Pseudopodium mengelilingi makanan","Vakuol makanan terbentuk","?","Bahan tercerna diserap ke sitoplasma","Sisa disingkir keluar sel"],
     kapsyen:"Rajah 1 · Proses pemakanan Amoeba sp.",
     alt:"Rajah aliran lima peringkat pemakanan Amoeba: pseudopodium mengelilingi makanan, vakuol makanan terbentuk, peringkat bertanda soal, bahan tercerna diserap, sisa disingkir"},
   j1:jadual(1, "Kanta mikroskop cahaya yang digunakan oleh murid",
     ["Kanta mata", "Kanta objek", "Kegunaan"],
     [["10×","4×","Mencari spesimen"],["10×","10×","Melihat susunan sel"],["10×","40×","Melihat butiran sel"]]),
   j2:jadual(2, "Ciri empat jenis sel khusus dalam badan manusia",
     ["Sel", "Ciri utama"],
     [["P","Banyak mitokondrion, boleh mengecut"],["Q","Tiada nukleus, dwicekung"],["R","Akson panjang, banyak dendrit"],["S","Banyak jasad Golgi dan jalinan endoplasma kasar"]])
  },
  aras:ARAS
};
