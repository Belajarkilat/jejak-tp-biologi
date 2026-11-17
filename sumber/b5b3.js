/* Biologi KSSM Tingkatan 5, Bab 3 Nutrisi dalam Tumbuhan.
   SK 3.1 Nutrien tak organik utama, 3.2 Organ pengambilan air dan garam mineral,
   3.3 Kepelbagaian dalam nutrisi tumbuhan (DSKP Biologi). */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Stor Nutrien", sk:"3.1 Makronutrien dan mikronutrien", lampiran:null,
 kadNama:"Makronutrien", kadEm:"\u{1F33E}", kadFakta:"Makronutrien seperti N, P, K, Ca, Mg dan S diperlukan dalam kuantiti yang banyak.",
 bosKadNama:"Mikronutrien", bosKadEm:"\u{1F52C}", bosKadFakta:"Mikronutrien seperti Fe, Mn, Cu, Zn, B dan Mo diperlukan dalam kuantiti sedikit tetapi tetap penting.",
 soalan:[
 {j:"pilih",t:"Unsur yang diperlukan untuk mensintesis protein dan klorofil ialah:",p:["Nitrogen","Kalsium","Molibdenum","Mangan"],b:0,u:"Nitrogen ialah komponen asid amino dan klorofil."},
 {j:"pilih",t:"Unsur yang menjadi atom pusat molekul klorofil ialah:",p:["Magnesium","Ferum","Kalium","Molibdenum"],b:0,u:"Kekurangan magnesium menyebabkan klorosis."},
 {j:"pilih",t:"Unsur yang diperlukan untuk membentuk lamela tengah dinding sel ialah:",p:["Kalsium","Fosforus","Nitrogen","Kuprum"],b:0,u:"Kalsium pektat mengikat dinding sel bersebelahan."},
 {j:"pilih",t:"Fosforus diperlukan untuk menghasilkan:",p:["ATP dan asid nukleik","Selulosa dinding sel","Kanji dan lipid daun","Kutikel daun"],b:0,u:"Fosfat ialah komponen ATP, DNA dan RNA."},
 {j:"pilih",t:"Antara berikut, yang manakah mikronutrien?",p:["Boron","Nitrogen","Kalium","Magnesium"],b:0,u:"Boron diperlukan dalam kuantiti yang sangat sedikit."},
 {j:"pilih",t:"Unsur yang membantu pembukaan stoma dan pengaktifan enzim ialah:",p:["Kalium","Kalsium","Sulfur","Ferum"],b:0,u:"Ion K+ mengawal keupayaan air sel pengawal."},
 {j:"pilih",t:"Kekurangan ferum menyebabkan daun muda:",p:["Kekuningan","Berwarna ungu","Bertambah besar","Berbau busuk"],b:0,u:"Ferum diperlukan untuk sintesis klorofil."},
 {j:"banyak",t:"Pilih DUA makronutrien.",p:["Nitrogen","Sulfur","Mangan","Molibdenum"],b:[0,1],u:"Mangan dan molibdenum ialah mikronutrien."}],
 bos:{j:"pilih",t:"Daun tua menjadi kuning lebih awal daripada daun muda apabila tumbuhan kekurangan nitrogen kerana:",p:["Nitrogen dipindahkan ke daun muda","Daun tua mempunyai lebih klorofil","Daun muda tidak memerlukan nitrogen","Nitrogen terkumpul di dalam daun tua"],b:0,u:"Nitrogen ialah unsur bergerak yang diangkut ke tisu muda yang sedang tumbuh."}},

{n:2, tempat:"Lorong Akar", sk:"3.2 Organ pengambilan air dan garam mineral", lampiran:"a1",
 kadNama:"Rambut Akar", kadEm:"\u{1F33F}", kadFakta:"Rambut akar menambah luas permukaan untuk penyerapan air dan ion mineral.",
 bosKadNama:"Pengangkutan Aktif", bosKadEm:"\u{26A1}", bosKadFakta:"Ion mineral diserap secara aktif kerana kepekatannya dalam sel akar lebih tinggi daripada dalam tanah.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, struktur bertanda ? ialah:",p:["Korteks","Kutikel","Mesofil","Stoma"],b:0,u:"Air bergerak dari rambut akar melalui korteks ke endodermis."},
 {j:"pilih",t:"Berdasarkan Rajah 1, air memasuki sel rambut akar secara:",p:["Osmosis","Pengangkutan aktif","Fagositosis","Transpirasi"],b:0,u:"Sap sel rambut akar hipertonik berbanding air tanah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, ke manakah air akhirnya diangkut?",p:["Xilem","Floem","Kambium gabus","Tudung akar"],b:0,u:"Xilem membawa air ke batang dan daun."},
 {j:"pilih",t:"Sel rambut akar mempunyai banyak mitokondria untuk:",p:["Membekalkan ATP","Menyimpan kanji","Berfotosintesis","Menyerap cahaya"],b:0,u:"ATP diperlukan untuk menyerap ion secara aktif."},
 {j:"pilih",t:"Rambut akar yang panjang dan nipis membantu:",p:["Menambah luas permukaan","Menyimpan banyak makanan","Menyokong batang pokok","Menghasilkan klorofil"],b:0,u:"Luas permukaan besar meningkatkan kadar penyerapan."},
 {j:"pilih",t:"Pembajaan berlebihan menyebabkan tumbuhan layu kerana air tanah menjadi:",p:["Hipertonik","Hipotonik","Isotonik","Neutral"],b:0,u:"Air keluar dari sel akar secara osmosis."},
 {j:"pilih",t:"Tanah bergenang air menjejaskan penyerapan ion kerana akar kekurangan:",p:["Oksigen","Cahaya","Glukosa","Klorofil"],b:0,u:"Tanpa oksigen, respirasi aerob terhenti dan ATP berkurang."},
 {j:"banyak",t:"Pilih DUA penyesuaian sel rambut akar.",p:["Dinding sel nipis","Banyak mitokondria","Kutikel berlilin tebal","Banyak kloroplas"],b:[0,1],u:"Dinding nipis memendekkan jarak resapan."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, jika racun yang menghalang respirasi disiram ke tanah, apakah kesannya?",p:["Pengambilan ion berkurang","Air tidak lagi diserap","Rambut akar bertambah","Xilem menjadi floem"],b:0,u:"Pengangkutan aktif ion memerlukan ATP daripada respirasi; osmosis masih berlaku."}},

{n:3, tempat:"Makmal Kultur", sk:"3.1 Mengaplikasikan eksperimen kultur larutan", lampiran:"j1",
 kadNama:"Larutan Knop", kadEm:"\u{1F9EA}", kadFakta:"Larutan Knop mengandungi semua makronutrien dan digunakan sebagai larutan kawalan dalam kultur larutan.",
 bosKadNama:"Hidroponik", bosKadEm:"\u{1F96C}", bosKadFakta:"Hidroponik menanam tumbuhan dalam larutan nutrien tanpa tanah.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 1, larutan manakah yang bertindak sebagai kawalan?",p:["W","P","Q","R"],b:0,u:"Larutan W lengkap dan menunjukkan pertumbuhan normal."},
 {j:"pilih",t:"Berdasarkan Jadual 1, anak benih P menunjukkan simptom kekurangan:",p:["Nitrogen","Kalsium","Kalium","Ferum"],b:0,u:"Pertumbuhan terbantut dan daun tua kekuningan."},
 {j:"pilih",t:"Berdasarkan Jadual 1, daun kuning di antara urat pada anak benih Q disebabkan oleh kekurangan:",p:["Magnesium","Fosforus","Nitrogen","Molibdenum"],b:0,u:"Klorosis antara urat ialah tanda kekurangan magnesium."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah perbezaan jisim kering antara anak benih W dengan anak benih P?",b:3.6,tol:0.05,suf:"g",u:"4.8 − 1.2 = 3.6 g."},
 {j:"nombor",t:"Berdasarkan Jadual 1, jisim kering anak benih Q ialah berapa peratus daripada anak benih W?",b:50,tol:0.5,suf:"%",u:"2.4 ÷ 4.8 × 100 = 50%."},
 {j:"pilih",t:"Larutan kultur perlu dialirkan udara kerana akar memerlukan:",p:["Oksigen","Cahaya","Karbon dioksida","Nitrogen"],b:0,u:"Oksigen diperlukan untuk respirasi aerob sel akar."},
 {j:"pilih",t:"Bekas kultur dibalut kertas hitam untuk:",p:["Halang alga tumbuh","Menambah suhu larutan","Menyerap nutrien","Menyokong batang"],b:0,u:"Alga bersaing untuk nutrien dan oksigen."},
 {j:"pilih",t:"Kultur larutan lebih sesuai daripada tanah untuk eksperimen ini kerana:",p:["Nutrien dapat dikawal","Tanah tiada nutrien","Kos jauh lebih murah","Akar tidak perlu air"],b:0,u:"Kandungan nutrien tanah tidak diketahui dengan tepat."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, anak benih R berakar pendek dan pucuknya mati. Unsur yang tiada dalam larutan R PALING mungkin:",p:["Kalsium","Magnesium","Kalium","Boron"],b:0,u:"Kalsium diperlukan untuk dinding sel di meristem; kekurangannya membunuh pucuk dan hujung akar."}},

{n:4, tempat:"Bilik Analisis", sk:"3.1 hingga 3.2 Menganalisis pengambilan nutrien", lampiran:"g1",
 kadNama:"Pengambilan Aktif", kadEm:"\u{1F4C8}", kadFakta:"Kadar pengambilan ion meningkat dengan kepekatan oksigen sehingga mencapai had.",
 bosKadNama:"Pembawa Protein", bosKadEm:"\u{1F6AA}", bosKadFakta:"Bilangan protein pembawa yang terhad menyebabkan kadar pengambilan ion mencapai kadar maksimum.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah kadar pengambilan ion kalium pada kepekatan oksigen 10%?",b:40,tol:0.5,suf:"unit",u:"Bacaan graf ialah 40 unit."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah kadar pengambilan meningkat dari 0% hingga 15% oksigen?",p:["Lebih banyak ATP","Lebih banyak cahaya","Kurang air","Kurang ion"],b:0,u:"Lebih banyak oksigen meningkatkan respirasi aerob dan penghasilan ATP."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah kadar menjadi malar selepas 20% oksigen?",p:["Protein pembawa tepu","Oksigen habis digunakan","Akar telah mati","Ion telah habis di tanah"],b:0,u:"Semua tapak pembawa sedang digunakan."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah pertambahan kadar dari 5% hingga 15% oksigen?",b:40,tol:0.5,suf:"unit",u:"60 − 20 = 40 unit."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah pengambilan masih berlaku pada 0% oksigen?",p:["Respirasi anaerob","Fotosintesis akar","Transpirasi daun","Akar menyerap cahaya"],b:0,u:"Sedikit ATP terhasil secara anaerob dan sedikit ion meresap masuk."},
 {j:"pilih",t:"Berdasarkan Rajah 2, petani boleh meningkatkan pengambilan baja dengan:",p:["Menggembur tanah","Menyiram berlebihan","Memadatkan tanah","Menutup tanah dengan plastik"],b:0,u:"Tanah gembur mempunyai lebih banyak ruang udara."},
 {j:"pilih",t:"Perbezaan utama penyerapan air dan ion oleh akar ialah ion:",p:["Memerlukan ATP","Bergerak secara osmosis","Tidak masuk ke akar","Bergerak secara pasif"],b:0,u:"Air diserap secara osmosis; ion kebanyakannya secara aktif."},
 {j:"pilih",t:"Jika suhu tanah sangat rendah, pengambilan ion berkurang kerana:",p:["Respirasi perlahan","Air tanah mendidih","Ion tanah bertambah","Akar terus memanjang"],b:0,u:"Respirasi melambat, maka ATP berkurang."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 2, penanam hidroponik ingin menggandakan pengambilan nutrien. Larutan kini pada 25% oksigen. Cadangan PALING berkesan:",p:["Kaji faktor pengehad lain","Tambah pengudaraan lagi","Kurangkan kepekatan oksigen","Hentikan pengudaraan larutan"],b:0,u:"Pada 25% kadar sudah malar, jadi oksigen bukan lagi faktor pengehad; faktor lain seperti kepekatan ion atau suhu perlu dikaji."}},

{n:5, tempat:"Hutan Pelik", sk:"3.3 Menilai kepelbagaian nutrisi tumbuhan", lampiran:null,
 kadNama:"Tumbuhan Karnivor", kadEm:"\u{1FAB4}", kadFakta:"Periuk kera memerangkap serangga untuk mendapatkan nitrogen di tanah yang kurang subur.",
 bosKadNama:"Parasit", bosKadEm:"\u{1F33A}", bosKadFakta:"Rafflesia ialah parasit yang mendapat makanan sepenuhnya daripada akar pokok perumah.",
 soalan:[
 {j:"pilih",t:"Periuk kera tumbuh di tanah gambut berasid kerana ia mampu:",p:["Mendapat nitrogen dari serangga","Berfotosintesis tanpa cahaya","Menyerap air masin","Hidup di kawasan kering"],b:0,u:"Enzim dalam periuk mencerna serangga."},
 {j:"pilih",t:"Rafflesia dikelaskan sebagai parasit kerana ia:",p:["Tiada klorofil","Memerangkap serangga","Menyerap cahaya","Hidup dalam air"],b:0,u:"Ia bergantung sepenuhnya pada perumah untuk makanan."},
 {j:"pilih",t:"Tali dadu melilit pokok perumah dan menyerap makanan melalui:",p:["Haustorium","Stoma","Rambut akar","Kutikel"],b:0,u:"Haustorium menembusi floem perumah."},
 {j:"pilih",t:"Pokok dedalu yang berdaun hijau dikelaskan sebagai separa parasit kerana ia:",p:["Masih berfotosintesis","Tiada daun langsung","Memerangkap haiwan","Hidup dalam tanah"],b:0,u:"Ia mengambil air dan mineral daripada xilem perumah."},
 {j:"pilih",t:"Penilaian PALING tepat tentang dedalu di ladang durian:",p:["Perlu dibuang","Membantu pokok","Tiada kesan","Menambah hasil"],b:0,u:"Dedalu melemahkan pokok perumah dan mengurangkan hasil."},
 {j:"pilih",t:"Pokok Venus flytrap tidak akan mati jika tidak diberi serangga kerana ia:",p:["Masih berfotosintesis","Tiada keperluan nitrogen","Hidup tanpa air","Menyerap cahaya bulan"],b:0,u:"Serangga hanya membekalkan nutrien tambahan, bukan tenaga."},
 {j:"pilih",t:"Pemuliharaan Rafflesia sukar kerana ia:",p:["Bergantung pada perumah","Tumbuh sangat cepat","Mudah ditanam di pasu","Banyak di bandar"],b:0,u:"Ia hanya hidup pada pokok Tetrastigma tertentu di hutan."},
 {j:"banyak",t:"Pilih DUA contoh tumbuhan dengan nutrisi istimewa.",p:["Periuk kera","Rafflesia","Pokok padi","Pokok kelapa"],b:[0,1],u:"Padi dan kelapa ialah autotrof biasa."}],
 bos:{j:"pilih",t:"Sebuah syarikat mahu membersihkan hutan gambut yang kaya periuk kera untuk ladang. Penilaian PALING tepat:",p:["Spesies unik akan pupus","Tiada kesan biologi","Periuk kera berpindah","Tanah menjadi subur"],b:0,u:"Banyak spesies periuk kera endemik dan hanya hidup di habitat itu."}},

{n:6, tempat:"Studio Baja", sk:"3.1 hingga 3.3 Mereka cipta berasaskan nutrisi tumbuhan", lampiran:null,
 kadNama:"Baja Organik", kadEm:"\u{1F342}", kadFakta:"Kompos daripada sisa dapur membekalkan nutrien secara perlahan dan memperbaiki struktur tanah.",
 bosKadNama:"Reka Cipta Hidroponik", bosKadEm:"\u{1F4A1}", bosKadFakta:"Sistem hidroponik ringkas boleh dibina dengan botol plastik dan sumbu kain.",
 soalan:[
 {j:"pilih",t:"Anda mereka eksperimen kesan kekurangan kalium. Larutan kawalan anda ialah:",p:["Larutan lengkap","Air paip","Larutan tanpa kalium","Air laut"],b:0,u:"Larutan kawalan mengandungi semua nutrien."},
 {j:"pilih",t:"Untuk sistem hidroponik sumbu, bahan PALING sesuai sebagai sumbu ialah:",p:["Kain kapas","Wayar besi","Plastik keras","Kaca"],b:0,u:"Kapas menyerap larutan secara tindakan kapilari."},
 {j:"pilih",t:"Baja daun yang disembur pada daun masuk ke tumbuhan melalui:",p:["Stoma","Akar","Bunga","Biji"],b:0,u:"Nutrien larut meresap melalui liang stoma dan kutikel."},
 {j:"pilih",t:"Anda mahu membuat kompos dengan cepat. Langkah PALING berkesan:",p:["Balik timbunan kerap","Tutup rapat tanpa udara","Tambah plastik","Simpan dalam peti sejuk"],b:0,u:"Mikroorganisma pengurai aerob perlukan oksigen."},
 {j:"pilih",t:"Baja NPK 15:15:15 bermaksud baja itu mengandungi:",p:["N, P dan K yang sama","Hanya nitrogen","15 jenis unsur","Air sebanyak 15%"],b:0,u:"Peratusan nitrogen, fosforus dan kalium sama."},
 {j:"pilih",t:"Untuk sayur berdaun seperti bayam, baja PALING sesuai mengandungi lebih banyak:",p:["Nitrogen","Kalsium","Boron","Kuprum"],b:0,u:"Nitrogen menggalakkan pertumbuhan daun."},
 {j:"pilih",t:"Cara mengukur keberkesanan baja baharu anda secara tepat:",p:["Jisim kering","Warna pasu","Bau daun","Bilangan semut"],b:0,u:"Jisim kering mengukur pertambahan bahan organik."},
 {j:"banyak",t:"Pilih DUA bahan buangan dapur yang sesuai dijadikan kompos.",p:["Kulit sayur","Hampas kopi","Botol plastik","Tin aluminium"],b:[0,1],u:"Bahan organik mudah diurai mikroorganisma."}],
 bos:{j:"buka",
  t:"Reka satu projek atau eksperimen berkaitan nutrisi tumbuhan untuk sekolah atau komuniti (contoh: sistem hidroponik botol untuk sayur, kompos sisa kantin, eksperimen kultur larutan kekurangan nutrien, baja organik daripada sisa pasar).",
  arahan:"Nyatakan tujuan, konsep nutrisi yang terlibat (makronutrien, mikronutrien, penyerapan oleh akar), bahan dan cara membina atau menjalankan, pemboleh ubah yang dimanipulasi, bergerak balas dan dimalarkan, cara mengukur keberkesanan, SATU langkah keselamatan, dan SATU pertimbangan kos atau kelestarian.",
  u:"Jawapan TP6 yang kukuh memilih nutrien yang sesuai dengan keperluan tanaman, menyediakan pengudaraan akar, mengawal pemboleh ubah dengan larutan kawalan, mengukur dengan jisim kering atau hasil, menjaga keselamatan bahan kimia baja, serta menilai kos dan pengurangan sisa."}}
];

module.exports = {
  id:"b5b3", tingkatan:5, kod:"3.0 Nutrisi dalam Tumbuhan",
  tajuk:"Santapan Hijau",
  subtajuk:"Biologi Ting. 5 · Bab 3 Nutrisi dalam Tumbuhan",
  spi:SPI.b5b3,
  ulasan:{
   1:"{n} dapat mengingat kembali makronutrien dan mikronutrien. Langkah seterusnya ialah menerangkan penyerapan oleh akar.",
   2:"{n} dapat menjelaskan penyerapan air dan ion oleh rambut akar. Perlu lebih latihan mentafsir eksperimen kultur larutan.",
   3:"{n} boleh mengaplikasikan data kultur larutan untuk mengenal pasti kekurangan nutrien. Galakkan menganalisis graf pengambilan ion.",
   4:"{n} mampu menganalisis faktor yang mempengaruhi pengambilan ion. Seterusnya latih menilai kepelbagaian nutrisi tumbuhan.",
   5:"{n} dapat menilai nutrisi istimewa tumbuhan dan kesannya. Sudah bersedia mereka projek nutrisi tumbuhan.",
   6:"{n} berjaya mereka projek nutrisi tumbuhan yang terancang dan lestari. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Nutrisi dalam Tumbuhan. Cadangan: ulang hentian pertama dan baca label baja NPK di rumah atau kedai."
  },
  lampiran:{
   a1:{jenis:"aliran", mod:"turun",
     nod:["Air tanah","Sel rambut akar","?","Endodermis","Xilem"],
     kapsyen:"Rajah 1 · Laluan air dari tanah ke xilem akar",
     alt:"Rajah aliran: air tanah, sel rambut akar, struktur bertanda soal, endodermis, xilem"},
   j1:jadual(1, "Pertumbuhan anak benih jagung dalam kultur larutan selepas 4 minggu",
     ["Larutan", "Pemerhatian", "Jisim kering (g)"],
     [["W (lengkap)","Subur, daun hijau","4.8"],["P","Terbantut, daun tua kuning","1.2"],["Q","Daun kuning antara urat","2.4"],["R","Akar pendek, pucuk mati","0.9"]]),
   g1:{jenis:"graf", x:[0,5,10,15,20,25,30], xLabel:"Kepekatan oksigen (%)", titik:true, yMin:0, yMaks:80, grid:8,
     siri:[{label:"Pengambilan ion K+ (unit)", y:[5,20,40,60,70,70,70], warna:"hijau"}],
     kapsyen:"Rajah 2 · Kadar pengambilan ion kalium oleh akar",
     alt:"Graf naik dari 5 unit pada 0% oksigen ke 20, 40, 60 dan 70 unit pada 20%, kemudian malar 70 unit hingga 30%"}
  },
  aras:ARAS
};
