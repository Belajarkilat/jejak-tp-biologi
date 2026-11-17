/* Biologi KSSM Tingkatan 5, Bab 5 Gerak Balas dalam Tumbuhan.
   SK 5.1 Jenis gerak balas, 5.2 Fitohormon, 5.3 Aplikasi fitohormon dalam pertanian (DSKP Biologi). */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Taman Gerak", sk:"5.1 Jenis gerak balas tumbuhan", lampiran:null,
 kadNama:"Tropisme", kadEm:"\u{1F33B}", kadFakta:"Tropisme ialah gerak balas pertumbuhan tumbuhan terhadap arah rangsangan.",
 bosKadNama:"Gerak Balas Nastik", bosKadEm:"\u{1F33F}", bosKadFakta:"Daun semalu terkulai apabila disentuh tanpa mengira arah sentuhan; ini gerak balas nastik.",
 soalan:[
 {j:"pilih",t:"Pucuk tumbuh ke arah cahaya. Gerak balas ini dinamakan:",p:["Fototropisme positif","Geotropisme positif","Hidrotropisme negatif","Tigmotropisme"],b:0,u:"Pucuk tumbuh ke arah rangsangan cahaya."},
 {j:"pilih",t:"Akar tumbuh ke bawah mengikut arah graviti. Ini ialah:",p:["Geotropisme positif","Fototropisme positif","Geotropisme negatif","Kemotropisme"],b:0,u:"Akar tumbuh ke arah tarikan graviti."},
 {j:"pilih",t:"Sulur pokok timun melilit penyokong. Ini ialah:",p:["Tigmotropisme","Hidrotropisme","Fototropisme","Geotropisme"],b:0,u:"Gerak balas terhadap sentuhan."},
 {j:"pilih",t:"Akar tumbuh ke arah kawasan tanah yang lembap. Ini ialah:",p:["Hidrotropisme","Tigmonasti","Fototropisme","Seismonasti"],b:0,u:"Gerak balas terhadap air."},
 {j:"pilih",t:"Tiub debunga tumbuh ke arah ovul kerana rangsangan bahan kimia. Ini ialah:",p:["Kemotropisme","Fotonasti","Hidrotropisme","Geotropisme"],b:0,u:"Ovul merembeskan bahan kimia yang menarik tiub debunga."},
 {j:"pilih",t:"Bunga orkid tertentu kembang pada waktu siang dan kuncup pada waktu malam. Ini ialah:",p:["Fotonasti","Fototropisme","Tigmotropisme","Geotropisme"],b:0,u:"Gerak balas nastik terhadap keamatan cahaya, bukan arahnya."},
 {j:"pilih",t:"Pokok semalu menguncupkan daun apabila disentuh. Ini ialah:",p:["Tigmonasti","Fototropisme","Hidrotropisme","Kemotropisme"],b:0,u:"Perubahan tekanan segah sel pulvinus."},
 {j:"banyak",t:"Pilih DUA contoh tropisme.",p:["Fototropisme","Geotropisme","Fotonasti","Seismonasti"],b:[0,1],u:"Fotonasti dan seismonasti ialah gerak balas nastik."}],
 bos:{j:"pilih",t:"Perbezaan utama antara tropisme dengan gerak balas nastik ialah tropisme:",p:["Bergantung pada arah rangsangan","Lebih pantas daripada nastik","Berlaku pada haiwan juga","Tidak melibatkan pertumbuhan"],b:0,u:"Gerak balas nastik tidak bergantung pada arah rangsangan."}},

{n:2, tempat:"Lorong Auksin", sk:"5.2 Peranan auksin dalam fototropisme", lampiran:"a1",
 kadNama:"Auksin", kadEm:"\u{1F9EA}", kadFakta:"Auksin dihasilkan di hujung pucuk dan merangsang pemanjangan sel pada pucuk.",
 bosKadNama:"Kepekaan Akar", bosKadEm:"\u{1F33F}", bosKadFakta:"Kepekatan auksin yang merangsang pucuk akan merencat pemanjangan sel akar.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah peristiwa bertanda ?",p:["Auksin berkumpul di sebelah teduh","Auksin dimusnahkan oleh air","Auksin bergerak ke akar","Auksin berkumpul di sebelah terang"],b:0,u:"Cahaya menyebabkan auksin beralih ke sebelah teduh."},
 {j:"pilih",t:"Berdasarkan Rajah 1, pucuk membengkok ke arah cahaya kerana sel di sebelah teduh:",p:["Memanjang lebih","Mati","Mengecut","Berhenti membahagi"],b:0,u:"Lebih banyak auksin merangsang pemanjangan sel."},
 {j:"pilih",t:"Auksin dihasilkan terutamanya di:",p:["Hujung pucuk","Batang tua","Bunga layu","Kulit kayu"],b:0,u:"Meristem apeks pucuk menghasilkan auksin."},
 {j:"pilih",t:"Jika hujung koleoptil dipotong, koleoptil itu:",p:["Tidak membengkok","Membengkok lebih","Tumbuh lebih laju","Menghasilkan bunga"],b:0,u:"Sumber auksin telah dibuang."},
 {j:"pilih",t:"Dalam akar yang diletakkan mendatar, auksin berkumpul di sebelah bawah dan:",p:["Merencat pemanjangan","Merangsang pemanjangan","Membunuh sel","Menghasilkan klorofil"],b:0,u:"Sebelah atas memanjang lebih, jadi akar membengkok ke bawah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, jika pucuk diletakkan dalam gelap sepenuhnya, pucuk akan:",p:["Tumbuh lurus","Membengkok ke kiri","Membengkok ke kanan","Berhenti tumbuh"],b:0,u:"Auksin tertabur sekata."},
 {j:"pilih",t:"Hormon yang merangsang pembahagian sel ialah:",p:["Sitokinin","Etilena","Asid absisik","Adrenalina"],b:0,u:"Sitokinin bekerja bersama auksin dalam pembahagian sel."},
 {j:"banyak",t:"Pilih DUA fitohormon.",p:["Giberelin","Etilena","Insulin","Tiroksina"],b:[0,1],u:"Insulin dan tiroksina ialah hormon haiwan."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, jika kepingan mika (tidak telap) diselitkan di sebelah teduh di bawah hujung pucuk, ramalan PALING tepat:",p:["Pucuk tidak membengkok","Pucuk membengkok lebih","Pucuk membengkok ke gelap","Pucuk mati"],b:0,u:"Auksin tidak dapat turun di sebelah teduh."}},

{n:3, tempat:"Makmal Koleoptil", sk:"5.2 Mengaplikasikan eksperimen auksin", lampiran:"j1",
 kadNama:"Koleoptil", kadEm:"\u{1F33E}", kadFakta:"Koleoptil ialah sarung pelindung pucuk anak benih rumput seperti jagung dan oat.",
 bosKadNama:"Blok Agar", bosKadEm:"\u{1F9CA}", bosKadFakta:"Blok agar boleh menyerap auksin daripada hujung koleoptil yang dipotong.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 1, koleoptil yang paling membengkok ialah:",p:["C","A","B","D"],b:0,u:"Blok agar berauksin diletakkan di sebelah kanan sahaja menyebabkan bengkokan terbesar."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah beza sudut bengkokan antara koleoptil C dan B?",b:25,tol:0.5,suf:"darjah",u:"25 − 0 = 25 darjah. B tumbuh lurus kerana auksin tersebar sekata."},
 {j:"pilih",t:"Berdasarkan Jadual 1, koleoptil D tidak membengkok kerana:",p:["Hujungnya dipotong","Cahaya terlalu kuat","Terlalu banyak auksin","Agar terlalu besar"],b:0,u:"Tiada sumber auksin."},
 {j:"pilih",t:"Berdasarkan Jadual 1, koleoptil A digunakan sebagai:",p:["Kawalan","Pemboleh ubah bergerak balas","Pemboleh ubah dimalarkan","Hipotesis"],b:0,u:"Koleoptil utuh menunjukkan gerak balas biasa."},
 {j:"pilih",t:"Berdasarkan Jadual 1, ke arah manakah koleoptil C membengkok?",p:["Ke kiri","Ke kanan","Ke atas","Tidak membengkok"],b:0,u:"Sebelah kanan memanjang lebih, jadi koleoptil membengkok ke kiri."},
 {j:"pilih",t:"Eksperimen ini dijalankan dalam gelap untuk:",p:["Elak kesan cahaya","Menambah auksin","Membunuh kuman","Menyejukkan agar"],b:0,u:"Bengkokan disebabkan oleh auksin, bukan cahaya sehala."},
 {j:"pilih",t:"Hipotesis PALING sesuai untuk eksperimen dalam Jadual 1:",p:["Auksin merangsang pemanjangan sel","Cahaya membunuh koleoptil","Agar merencat pertumbuhan","Koleoptil tidak perlukan auksin"],b:0,u:"Sudut bengkokan dikaitkan dengan kedudukan auksin."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah koleoptil B tumbuh lurus?",p:["Auksin turun sekata","Tiada auksin dalam agar","Cahaya dari atas","Hujungnya masih utuh"],b:0,u:"Blok agar menutupi seluruh permukaan potongan, jadi kedua-dua sebelah memanjang sama."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, jika blok agar pada C mengandungi dua kali kepekatan auksin, ramalan PALING munasabah:",p:["Sudut bengkokan bertambah","Koleoptil tidak membengkok","Koleoptil membengkok ke kanan","Koleoptil mati serta-merta"],b:0,u:"Dalam julat kepekatan rendah, lebih auksin menghasilkan lebih pemanjangan."}},

{n:4, tempat:"Bilik Kepekatan", sk:"5.2 Menganalisis kesan kepekatan auksin", lampiran:"g1",
 kadNama:"Kepekatan Optimum", kadEm:"\u{1F4C8}", kadFakta:"Akar dan pucuk mempunyai kepekatan auksin optimum yang berbeza.",
 bosKadNama:"Rencatan", bosKadEm:"\u{1F6D1}", bosKadFakta:"Kepekatan auksin yang terlalu tinggi merencat pertumbuhan.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah peratus rangsangan pemanjangan pucuk pada kepekatan auksin 4 unit?",b:80,tol:0.5,suf:"%",u:"Puncak lengkung pucuk ialah 80%."},
 {j:"pilih",t:"Berdasarkan Rajah 2, kepekatan auksin optimum bagi akar ialah:",p:["1 unit","3 unit","4 unit","6 unit"],b:0,u:"Rangsangan akar paling tinggi pada 1 unit."},
 {j:"pilih",t:"Berdasarkan Rajah 2, pada kepekatan 4 unit, pemanjangan akar:",p:["Tidak dirangsang","Dirangsang maksimum","Dirangsang sebanyak 80%","Bertambah dua kali ganda"],b:0,u:"Lengkung akar berada pada sifar; kepekatan yang sesuai untuk pucuk tidak lagi merangsang akar, malah kepekatan lebih tinggi merencatnya."},
 {j:"pilih",t:"Berdasarkan Rajah 2, organ yang lebih peka terhadap auksin ialah:",p:["Akar","Pucuk","Daun tua","Kulit kayu"],b:0,u:"Akar dirangsang pada kepekatan sangat rendah."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah beza rangsangan pucuk dan akar pada kepekatan 3 unit?",b:50,tol:0.5,suf:"%",u:"60 − 10 = 50%."},
 {j:"pilih",t:"Berdasarkan Rajah 2, dalam pucuk mendatar, sebelah bawah mempunyai lebih auksin. Pucuk akan:",p:["Membengkok ke atas","Membengkok ke bawah","Tumbuh lurus","Berhenti tumbuh"],b:0,u:"Sebelah bawah pucuk memanjang lebih (geotropisme negatif)."},
 {j:"pilih",t:"Racun rumpai 2,4-D ialah auksin sintetik yang membunuh rumpai berdaun lebar dengan:",p:["Kepekatan tinggi","Kepekatan rendah","Menyerap air","Menutup stoma"],b:0,u:"Pertumbuhan tidak terkawal menyebabkan rumpai mati."},
 {j:"pilih",t:"Berdasarkan Rajah 2, kesimpulan PALING tepat:",p:["Kesan auksin bergantung pada organ","Auksin merangsang setiap organ","Auksin tiada kesan pada akar","Pucuk lebih peka"],b:0,u:"Kepekatan yang sama boleh merangsang pucuk tetapi merencat akar."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 2, mengapakah akar mendatar membengkok ke bawah walaupun sebelah bawah mempunyai lebih auksin?",p:["Kepekatan tinggi merencat akar","Auksin tidak sampai ke akar","Graviti menarik akar","Cahaya menolak akar"],b:0,u:"Sebelah atas yang kurang auksin memanjang lebih."}},

{n:5, tempat:"Ladang Hormon", sk:"5.3 Menilai aplikasi fitohormon dalam pertanian", lampiran:null,
 kadNama:"Etilena", kadEm:"\u{1F34C}", kadFakta:"Etilena ialah gas yang mempercepatkan pemasakan buah.",
 bosKadNama:"Giberelin", bosKadEm:"\u{1F347}", bosKadFakta:"Giberelin digunakan untuk menghasilkan buah anggur tanpa biji yang lebih besar.",
 soalan:[
 {j:"pilih",t:"Peniaga memeram pisang mentah bersama karbida kalsium yang membebaskan gas seperti:",p:["Etilena","Oksigen","Nitrogen","Klorin"],b:0,u:"Gas asetilena bertindak seperti etilena."},
 {j:"pilih",t:"Hormon yang digunakan untuk menghasilkan buah partenokarpi (tanpa biji) ialah:",p:["Auksin","Asid absisik","Etilena","Insulin"],b:0,u:"Auksin dan giberelin merangsang ovari menjadi buah tanpa persenyawaan."},
 {j:"pilih",t:"Serbuk hormon akar disapu pada keratan batang untuk:",p:["Galak akar","Membunuh kulat","Menambah daun","Menghentikan pertumbuhan"],b:0,u:"Auksin sintetik merangsang pembentukan akar adventitius."},
 {j:"pilih",t:"Buah dieksport disimpan dalam bilik berpengudaraan baik kerana:",p:["Etilena disingkirkan","Oksigen ditambah","Suhu dinaikkan","Cahaya ditambah"],b:0,u:"Etilena yang terkumpul mempercepatkan pembusukan."},
 {j:"pilih",t:"Penilaian PALING tepat tentang penggunaan racun rumpai 2,4-D berhampiran sungai:",p:["Boleh mencemarkan air","Tiada kesan langsung","Menambah ikan","Menjernihkan air"],b:0,u:"Racun boleh dibawa air larian ke sungai."},
 {j:"pilih",t:"Asid absisik digunakan untuk:",p:["Menyebabkan dorman","Mempercepat bunga","Membesarkan buah","Memanjangkan batang"],b:0,u:"Ia merencat pertumbuhan dan menutup stoma semasa kemarau."},
 {j:"pilih",t:"Petani nanas menyembur hormon untuk:",p:["Bunga serentak","Membunuh akar","Mengecutkan daun","Menukar warna tanah"],b:0,u:"Etilena atau auksin menyeragamkan pembungaan dan memudahkan penuaian."},
 {j:"banyak",t:"Pilih DUA kesan giberelin.",p:["Batang memanjang","Biji bercambah","Daun gugur","Buah busuk"],b:[0,1],u:"Giberelin memecahkan dorman biji dan memanjangkan internod."}],
 bos:{j:"pilih",t:"Peniaga mahu memeram mangga dengan cepat menggunakan karbida kalsium. Penilaian PALING tepat:",p:["Berisiko kepada kesihatan","Selamat dan disyorkan","Menambah khasiat buah","Mengurangkan kos tanpa risiko"],b:0,u:"Karbida kalsium industri mungkin mengandungi arsenik dan fosforus; etilena gred makanan lebih selamat."}},

{n:6, tempat:"Studio Tropisme", sk:"5.1 hingga 5.3 Mereka cipta berasaskan gerak balas tumbuhan", lampiran:null,
 kadNama:"Klinostat", kadEm:"\u{1F504}", kadFakta:"Klinostat memutar anak benih perlahan supaya kesan graviti atau cahaya tersebar sekata.",
 bosKadNama:"Reka Cipta Ladang", bosKadEm:"\u{1F4A1}", bosKadFakta:"Pengetahuan fitohormon membolehkan petani menyeragamkan hasil dan mengurangkan pembaziran.",
 soalan:[
 {j:"pilih",t:"Untuk membuktikan geotropisme, anak benih diletakkan pada klinostat yang berputar sebagai:",p:["Kawalan","Pemboleh ubah tetap","Hipotesis","Kesimpulan"],b:0,u:"Putaran menghapuskan kesan graviti sehala."},
 {j:"pilih",t:"Anda mahu menunjukkan fototropisme di kelas. Radas PALING ringkas:",p:["Kotak dengan satu lubang","Peti sejuk","Bikar air","Pemanas"],b:0,u:"Cahaya masuk dari satu arah sahaja melalui lubang."},
 {j:"pilih",t:"Untuk menguji hidrotropisme, anda letakkan anak benih berhampiran:",p:["Kapas lembap","Lampu","Kipas","Magnet"],b:0,u:"Akar akan tumbuh ke arah kapas lembap."},
 {j:"pilih",t:"Untuk memanjangkan hayat simpanan buah, anda mereka beg yang menyerap:",p:["Etilena","Air","Cahaya","Gula"],b:0,u:"Kalium permanganat dalam beg menyerap etilena."},
 {j:"pilih",t:"Cara mengukur kesan hormon akar pada keratan batang secara kuantitatif:",p:["Kira bilangan akar","Perhati warna daun","Hidu bau batang","Tanya pendapat rakan"],b:0,u:"Bilangan atau panjang akar boleh dibandingkan."},
 {j:"pilih",t:"Anda mahu membandingkan 3 kepekatan hormon akar. Kumpulan kawalan:",p:["Tiada hormon","Hormon paling pekat","Hormon dari kedai","Air garam"],b:0,u:"Kawalan menunjukkan pembentukan akar tanpa rawatan."},
 {j:"pilih",t:"Data panjang akar bagi tiga kepekatan hormon paling sesuai dibentangkan dengan:",p:["Carta palang","Carta pai","Lukisan","Puisi"],b:0,u:"Carta palang membandingkan kumpulan."},
 {j:"banyak",t:"Pilih DUA pemboleh ubah dimalarkan dalam eksperimen hormon akar.",p:["Jenis tumbuhan","Panjang keratan","Kepekatan hormon","Bilangan akar"],b:[0,1],u:"Kepekatan dimanipulasi; bilangan akar bergerak balas."}],
 bos:{j:"buka",
  t:"Reka satu projek atau eksperimen berkaitan gerak balas tumbuhan untuk sekolah atau komuniti (contoh: kotak fototropisme untuk kelas, tapak semaian keratan dengan hormon akar, beg penyerap etilena untuk peniaga buah, eksperimen klinostat ringkas).",
  arahan:"Nyatakan tujuan, konsep yang terlibat (jenis tropisme atau nastik, fitohormon seperti auksin, giberelin, etilena atau asid absisik), bahan dan cara membina, pemboleh ubah yang dimanipulasi, bergerak balas dan dimalarkan, kumpulan kawalan, cara mengukur keputusan, SATU langkah keselamatan bahan kimia, dan SATU manfaat ekonomi kepada petani atau peniaga.",
  u:"Jawapan TP6 yang kukuh mengaitkan reka bentuk dengan fitohormon atau tropisme yang betul, menyediakan kawalan, mengukur secara kuantitatif seperti bilangan akar atau sudut bengkokan, menjaga keselamatan, serta menilai faedah ekonomi dan risiko kepada pengguna."}}
];

module.exports = {
  id:"b5b5", tingkatan:5, kod:"5.0 Gerak Balas dalam Tumbuhan",
  tajuk:"Gerak Senyap",
  subtajuk:"Biologi Ting. 5 · Bab 5 Gerak Balas dalam Tumbuhan",
  spi:SPI.b5b5,
  ulasan:{
   1:"{n} dapat mengingat kembali jenis tropisme dan gerak balas nastik. Langkah seterusnya ialah menerangkan peranan auksin.",
   2:"{n} dapat menjelaskan peranan auksin dalam fototropisme dan geotropisme. Perlu lebih latihan mentafsir eksperimen koleoptil.",
   3:"{n} boleh mengaplikasikan data eksperimen koleoptil. Galakkan menganalisis graf kepekatan auksin.",
   4:"{n} mampu menganalisis kesan kepekatan auksin pada akar dan pucuk. Seterusnya latih menilai penggunaan fitohormon.",
   5:"{n} dapat menilai aplikasi fitohormon dalam pertanian. Sudah bersedia mereka eksperimen gerak balas tumbuhan.",
   6:"{n} berjaya mereka projek gerak balas tumbuhan yang terancang dan berkawalan. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Gerak Balas dalam Tumbuhan. Cadangan: ulang hentian pertama dan letak pasu anak benih di tepi tingkap selama seminggu."
  },
  lampiran:{
   a1:{jenis:"aliran", mod:"turun",
     nod:["Cahaya sehala dari kanan","?","Sel sebelah kiri memanjang lebih","Pucuk membengkok ke kanan"],
     kapsyen:"Rajah 1 · Urutan fototropisme pada pucuk",
     alt:"Rajah aliran: cahaya sehala dari kanan, peristiwa bertanda soal, sel sebelah kiri memanjang lebih, pucuk membengkok ke kanan"},
   j1:jadual(1, "Sudut bengkokan koleoptil oat selepas 2 jam dalam gelap",
     ["Koleoptil", "Rawatan", "Sudut (°)"],
     [["A","Utuh","0"],["B","Hujung dipotong, agar berauksin di atas keseluruhan","0"],["C","Hujung dipotong, agar berauksin di sebelah kanan","25"],["D","Hujung dipotong, tiada agar","0"]]),
   g1:{jenis:"graf", x:[0,1,2,3,4,5,6], xLabel:"Kepekatan auksin (unit)", titik:true, yMin:0, yMaks:100, grid:10,
     siri:[{label:"Pucuk (%)", y:[0,10,30,60,80,50,10], warna:"hijau"},{label:"Akar (%)", y:[0,50,30,10,0,0,0], warna:"merah"}],
     kapsyen:"Rajah 2 · Rangsangan pemanjangan sel pucuk dan akar oleh auksin",
     alt:"Graf dua lengkung: pucuk naik dari 0 ke puncak 80% pada 4 unit kemudian turun ke 10% pada 6 unit; akar puncak 50% pada 1 unit, turun ke 30, 10 dan sifar dari 4 unit"}
  },
  aras:ARAS
};
