/* Biologi KSSM Tingkatan 5, Bab 8 Biodiversiti.
   SK 8.1 Sistem pengelasan dan penamaan organisma, 8.2 Biodiversiti,
   8.3 Mikroorganisma dan virus (DSKP Biologi). */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Muzium Hayat", sk:"8.1 Sistem pengelasan dan penamaan", lampiran:null,
 kadNama:"Tatanama Binomial", kadEm:"\u{1F4DB}", kadFakta:"Nama saintifik terdiri daripada nama genus dan epitet spesies, contohnya Homo sapiens.",
 bosKadNama:"Hierarki Taksonomi", bosKadEm:"\u{1FA9C}", bosKadFakta:"Hierarki: domain, alam, filum, kelas, order, famili, genus, spesies.",
 soalan:[
 {j:"pilih",t:"Sistem tatanama binomial diperkenalkan oleh:",p:["Carolus Linnaeus","Charles Darwin","Gregor Mendel","Louis Pasteur"],b:0,u:"Linnaeus memperkenalkannya pada abad ke-18."},
 {j:"pilih",t:"Dalam nama Panthera tigris, perkataan Panthera ialah:",p:["Genus","Spesies","Famili","Order"],b:0,u:"Nama genus ditulis dengan huruf besar di awal."},
 {j:"pilih",t:"Nama saintifik yang ditulis dengan betul ialah:",p:["Oryza sativa","oryza Sativa","Oryza Sativa","ORYZA SATIVA"],b:0,u:"Genus berhuruf besar, epitet spesies berhuruf kecil, dicondongkan atau digaris."},
 {j:"pilih",t:"Aras taksonomi yang paling khusus ialah:",p:["Spesies","Alam","Filum","Famili"],b:0,u:"Spesies ialah kumpulan organisma yang boleh membiak dan menghasilkan anak subur."},
 {j:"pilih",t:"Organisma eukariot uniselular seperti Amoeba dikelaskan dalam alam:",p:["Protista","Plantae","Fungi","Animalia"],b:0,u:"Protista kebanyakannya uniselular dan bernukleus."},
 {j:"pilih",t:"Cendawan dikelaskan dalam alam Fungi kerana ia:",p:["Dinding sel kitin","Berfotosintesis sendiri","Tiada nukleus dalam sel","Bergerak bebas mencari makanan"],b:0,u:"Fungi mencerna makanan di luar sel dan menyerapnya."},
 {j:"pilih",t:"Kekunci dikotomi digunakan untuk:",p:["Mengecam organisma","Mengira saiz populasi","Mengukur suhu habitat","Menamakan gen baharu"],b:0,u:"Setiap langkah memberi dua pilihan ciri yang bertentangan."},
 {j:"banyak",t:"Pilih DUA ciri alam Plantae.",p:["Dinding sel selulosa","Berfotosintesis","Dinding sel kitin","Tiada nukleus"],b:[0,1],u:"Dinding kitin ialah ciri fungi; tiada nukleus ialah ciri prokariot."}],
 bos:{j:"pilih",t:"Mengapakah nama saintifik lebih berguna daripada nama tempatan seperti 'pokok semalu'?",p:["Diguna sedunia","Lebih pendek","Lebih mudah dieja","Berubah ikut negeri"],b:0,u:"Satu spesies boleh mempunyai banyak nama tempatan, tetapi hanya satu nama saintifik."}},

{n:2, tempat:"Kunci Hutan", sk:"8.1 Kekunci dikotomi · 8.2 Tahap biodiversiti", lampiran:"a1",
 kadNama:"Kekunci Dikotomi", kadEm:"\u{1F511}", kadFakta:"Kekunci dikotomi mengasingkan organisma langkah demi langkah berdasarkan ciri yang boleh diperhatikan.",
 bosKadNama:"Tiga Tahap", bosKadEm:"\u{1F333}", bosKadFakta:"Biodiversiti merangkumi kepelbagaian ekosistem, spesies dan genetik.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, haiwan bertulang belakang, berbulu pelepah dan bertelur ialah:",p:["Burung","Ikan","Mamalia","Serangga"],b:0,u:"Bulu pelepah ialah ciri unik burung."},
 {j:"pilih",t:"Berdasarkan Rajah 1, kumpulan bertanda ? ialah:",p:["Mamalia","Reptilia","Amfibia","Ikan bertulang"],b:0,u:"Vertebrat berbulu roma dan menyusukan anak."},
 {j:"pilih",t:"Berdasarkan Rajah 1, ciri pertama yang digunakan untuk mengasingkan haiwan ialah:",p:["Tulang belakang","Warna badan","Saiz badan","Habitat asal haiwan"],b:0,u:"Vertebrat dan invertebrata diasingkan dahulu."},
 {j:"pilih",t:"Kepelbagaian warna kulit kerang dalam satu spesies menunjukkan kepelbagaian:",p:["Genetik","Ekosistem","Spesies","Habitat"],b:0,u:"Variasi dalam spesies yang sama."},
 {j:"pilih",t:"Hutan hujan, paya bakau dan terumbu karang menunjukkan kepelbagaian:",p:["Ekosistem","Genetik","Spesies sahaja","Gen tunggal"],b:0,u:"Ekosistem yang berbeza dalam satu kawasan."},
 {j:"pilih",t:"Malaysia dianggap negara megabiodiversiti kerana:",p:["Kaya spesies","Kawasannya luas","Penduduk ramai","Iklim sejuk"],b:0,u:"Malaysia antara 12 negara paling kaya biodiversiti di dunia."},
 {j:"pilih",t:"Berdasarkan Rajah 1, katak dikelaskan sebagai amfibia kerana:",p:["Kulit lembap","Berbulu pelepah","Menyusukan anak","Bersisik kering"],b:0,u:"Amfibia bernafas sebahagiannya melalui kulit yang lembap."},
 {j:"banyak",t:"Pilih DUA tahap biodiversiti.",p:["Genetik","Spesies","Atom","Molekul"],b:[0,1],u:"Tahap ketiga ialah ekosistem."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, haiwan baharu bertulang belakang, bersisik kering dan bertelur ditemui. Haiwan itu PALING mungkin:",p:["Reptilia","Ikan","Burung","Amfibia"],b:0,u:"Sisik kering dan telur bercangkerang ialah ciri reptilia."}},

{n:3, tempat:"Makmal Mikrob", sk:"8.3 Mengaplikasikan pengetahuan mikroorganisma", lampiran:"j1",
 kadNama:"Bakteria", kadEm:"\u{1F9A0}", kadFakta:"Bakteria ialah prokariot; sesetengahnya berguna dan sesetengahnya patogen.",
 bosKadNama:"Teknik Aseptik", bosKadEm:"\u{1F525}", bosKadFakta:"Teknik aseptik mengelakkan pencemaran kultur oleh mikroorganisma lain.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah bilangan koloni bakteria pada tangan yang tidak dibasuh?",b:120,tol:0.5,suf:"koloni",u:"Bacaan jadual: 120 koloni."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapa peratus koloni berkurang selepas membasuh tangan dengan sabun?",b:90,tol:0.5,suf:"%",u:"(120 − 12) ÷ 120 × 100 = 90%."},
 {j:"pilih",t:"Berdasarkan Jadual 1, kaedah PALING berkesan mengurangkan bakteria ialah:",p:["Pensanitasi alkohol","Air sahaja","Tidak dibasuh","Air dan sabun"],b:0,u:"Bilangan koloni paling sedikit, 4."},
 {j:"pilih",t:"Berdasarkan Jadual 1, piring P digunakan sebagai:",p:["Kawalan","Pemboleh ubah bergerak balas","Hipotesis","Kesimpulan"],b:0,u:"Tangan tidak dibasuh menunjukkan bilangan asal."},
 {j:"pilih",t:"Piring petri di sekolah dieram pada suhu bilik, bukan 37 °C, untuk:",p:["Elak patogen manusia","Membunuh semua bakteria","Mencairkan agar nutrien","Menambah cahaya ke piring"],b:0,u:"Suhu badan menggalakkan pertumbuhan bakteria yang boleh menjangkiti manusia."},
 {j:"pilih",t:"Piring petri ditutup dan dilekat dengan pita selofan untuk:",p:["Elak pencemaran","Menambah oksigen","Memudahkan dibuka","Menambah cahaya"],b:0,u:"Juga mengelakkan pendedahan kepada patogen."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah beza koloni antara mencuci dengan air sahaja dan dengan sabun?",b:48,tol:0.5,suf:"koloni",u:"60 − 12 = 48 koloni."},
 {j:"pilih",t:"Selepas eksperimen, piring petri perlu:",p:["Diautoklaf dahulu","Dibuang ke tong biasa","Dibuka dan dihidu","Dicuci dengan air paip"],b:0,u:"Bakteria dibunuh sebelum dibuang."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, sebuah kantin mahu mengurangkan keracunan makanan. Cadangan PALING disokong data:",p:["Basuh dengan sabun","Basuh dengan air sejuk","Tidak perlu basuh tangan","Pakai cincin semasa memasak"],b:0,u:"Sabun mengurangkan bakteria sebanyak 90%; pensanitasi boleh ditambah."}},

{n:4, tempat:"Bilik Pertumbuhan", sk:"8.3 Menganalisis pertumbuhan populasi bakteria", lampiran:"g1",
 kadNama:"Pembiakan Bakteria", kadEm:"\u{2797}", kadFakta:"Bakteria membiak secara belahan dedua; bilangan berganda setiap generasi.",
 bosKadNama:"Fasa Maut", bosKadEm:"\u{2620}\u{FE0F}", bosKadFakta:"Populasi bakteria menurun apabila nutrien habis dan bahan toksik terkumpul.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah bilangan sel (juta) pada jam ke-6?",b:40,tol:0.5,suf:"juta",u:"Bacaan graf: 40 juta."},
 {j:"pilih",t:"Berdasarkan Rajah 2, fasa dari jam 0 hingga 2 ialah fasa:",p:["Susulan","Eksponen","Pegun","Fasa maut"],b:0,u:"Bakteria menyesuaikan diri dan menghasilkan enzim; bilangan hampir tidak berubah."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah bilangan sel meningkat pesat dari jam 2 hingga 8?",p:["Nutrien banyak","Toksik semakin bertambah","Ruang semakin berkurang","Suhu medium menurun"],b:0,u:"Fasa eksponen: belahan dedua berlaku dengan cepat."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah bilangan sel malar dari jam 8 hingga 10?",p:["Lahir sama dengan mati","Semua sel bakteria mati","Tiada pembiakan berlaku","Nutrien semakin bertambah"],b:0,u:"Fasa pegun: nutrien berkurang dan toksik mula terkumpul."},
 {j:"nombor",t:"Berdasarkan Rajah 2, hitung kadar pertambahan purata dari jam 4 hingga 8.",b:15,tol:0.1,suf:"juta/jam",u:"(70 − 10) ÷ 4 = 15 juta sejam."},
 {j:"pilih",t:"Berdasarkan Rajah 2, fasa selepas jam ke-10 ialah fasa:",p:["Maut","Susulan","Eksponen","Pegun"],b:0,u:"Bilangan sel menurun."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah penurunan bilangan sel dari jam 10 hingga 12?",b:30,tol:0.5,suf:"juta",u:"70 − 40 = 30 juta."},
 {j:"pilih",t:"Makanan disimpan dalam peti sejuk untuk:",p:["Lambatkan pembiakan","Mempercepat fasa eksponen","Membunuh setiap bakteria","Menambah nutrien makanan"],b:0,u:"Suhu rendah memperlahankan metabolisme bakteria."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 2, nasi lemak dibiarkan pada suhu bilik. Mengapakah ia lebih berbahaya dimakan selepas 6 jam berbanding 1 jam?",p:["Bakteria fasa eksponen","Bakteria dalam fasa maut","Nasi menjadi sejuk","Nutrien bertambah"],b:0,u:"Bilangan bakteria dan toksinnya meningkat dengan pesat."}},

{n:5, tempat:"Dewan Biodiversiti", sk:"8.2 Menilai kepentingan dan ancaman biodiversiti · 8.3 Virus", lampiran:null,
 kadNama:"Spesies Endemik", kadEm:"\u{1F98F}", kadFakta:"Spesies endemik hanya ditemui di kawasan tertentu, contohnya badak sumbu Sumatera yang kini pupus di Malaysia.",
 bosKadNama:"Virus", bosKadEm:"\u{1F9EC}", bosKadFakta:"Virus hanya boleh membiak di dalam sel hidup perumah.",
 soalan:[
 {j:"pilih",t:"Kepentingan biodiversiti kepada perubatan ialah:",p:["Sumber ubat baharu","Menambah pencemaran","Mengurangkan oksigen","Menyebabkan penyakit"],b:0,u:"Banyak ubat berasal daripada tumbuhan, contohnya kuinina."},
 {j:"pilih",t:"Ancaman utama kepada biodiversiti Malaysia ialah:",p:["Pemusnahan habitat","Hujan lebat","Gempa bumi","Siang yang panjang"],b:0,u:"Pembukaan hutan untuk pertanian dan pembangunan."},
 {j:"pilih",t:"Virus berbeza daripada bakteria kerana virus:",p:["Bukan sel","Ada nukleus","Berfotosintesis","Membiak sendiri"],b:0,u:"Virus terdiri daripada asid nukleik dalam kapsid protein."},
 {j:"pilih",t:"Antibiotik tidak berkesan terhadap selesema kerana selesema disebabkan oleh:",p:["Virus","Bakteria","Fungi","Protozoa"],b:0,u:"Antibiotik menyasarkan struktur bakteria."},
 {j:"pilih",t:"Penilaian PALING tepat tentang pengambilan antibiotik tanpa menghabiskan dos:",p:["Galakkan rintangan","Selamat dan disyorkan doktor","Mempercepat sembuh","Membunuh virus dalam badan"],b:0,u:"Bakteria yang tinggal mungkin rintang dan membiak."},
 {j:"pilih",t:"Mikroorganisma berguna dalam pembuatan tempe ialah:",p:["Kulat Rhizopus","Virus","Plasmodium","Bakteria tetanus"],b:0,u:"Kulat menapai kacang soya."},
 {j:"pilih",t:"Penilaian tentang perdagangan haram tenggiling:",p:["Mengancam kepupusan","Menambah populasi tenggiling","Tiada kesan kepada spesies","Membantu ekosistem hutan"],b:0,u:"Tenggiling ialah antara mamalia paling banyak diseludup di dunia."},
 {j:"banyak",t:"Pilih DUA kesan positif mikroorganisma.",p:["Mengurai bahan organik","Mengikat nitrogen","Menyebabkan malaria","Merosakkan makanan"],b:[0,1],u:"Pengurai dan bakteria pengikat nitrogen penting dalam kitar nutrien."}],
 bos:{j:"pilih",t:"Kerajaan negeri mahu membuka 1000 hektar hutan simpan untuk ladang. Penilaian PALING tepat:",p:["Kurangkan biodiversiti","Tiada kesan kepada hidupan","Menambah spesies endemik","Menjamin bekalan air"],b:0,u:"Kehilangan habitat, spesies dan perkhidmatan ekosistem seperti tadahan air."}},

{n:6, tempat:"Studio Spesies", sk:"8.1 hingga 8.3 Mereka cipta berasaskan biodiversiti", lampiran:null,
 kadNama:"BioBlitz", kadEm:"\u{1F50E}", kadFakta:"BioBlitz ialah tinjauan pantas untuk merekod sebanyak mungkin spesies dalam satu kawasan.",
 bosKadNama:"Reka Cipta Kunci", bosKadEm:"\u{1F4A1}", bosKadFakta:"Kekunci dikotomi digital boleh dibina untuk mengenal pasti pokok di kawasan sekolah.",
 soalan:[
 {j:"pilih",t:"Anda membina kekunci dikotomi pokok sekolah. Ciri PALING sesuai digunakan:",p:["Bentuk daun","Tinggi hari ini","Siapa menanam","Harga pokok"],b:0,u:"Ciri mesti tetap dan boleh diperhatikan."},
 {j:"pilih",t:"Untuk merekod biodiversiti kawasan sekolah, alat PALING berguna:",p:["Kamera dan buku log","Pemadam pensel","Kalkulator saintifik","Gunting kertas"],b:0,u:"Gambar dan catatan membantu pengecaman."},
 {j:"pilih",t:"Untuk menggalakkan biodiversiti di taman sekolah, anda menanam:",p:["Pelbagai spesies asli","Satu spesies rumput","Pokok plastik hiasan","Rumput tiruan"],b:0,u:"Spesies asli menyokong serangga dan burung tempatan."},
 {j:"pilih",t:"Projek kultur bakteria di kelas mesti mengelakkan:",p:["Mengeram pada 37 °C","Menutup piring","Autoklaf piring","Memakai sarung tangan"],b:0,u:"Mengeram pada suhu badan berisiko menumbuhkan patogen manusia; suhu bilik lebih selamat."},
 {j:"pilih",t:"Kempen kesedaran terbaik tentang biodiversiti tempatan menggunakan:",p:["Spesies tempatan","Haiwan dari luar negara","Watak kartun rekaan","Gambar kereta mewah"],b:0,u:"Masyarakat lebih peduli spesies yang mereka kenali."},
 {j:"pilih",t:"Untuk menilai kejayaan taman biodiversiti selepas setahun, data PALING sesuai:",p:["Bilangan spesies direkod","Bilangan pelawat taman","Kos baja setahun","Warna pagar taman"],b:0,u:"Bandingkan bilangan spesies sebelum dan selepas."},
 {j:"pilih",t:"Dalam BioBlitz, pemerhatian dijalankan pada beberapa waktu kerana:",p:["Waktu aktif berbeza","Cahaya sentiasa sama","Pokok bergerak sendiri","Hujan turun setiap jam"],b:0,u:"Ada haiwan diurnal dan nokturnal."},
 {j:"banyak",t:"Pilih DUA amalan etika semasa tinjauan biodiversiti.",p:["Jangan ganggu sarang","Lepaskan haiwan semula","Ambil telur burung","Cabut tumbuhan jarang"],b:[0,1],u:"Tinjauan tidak boleh merosakkan habitat."}],
 bos:{j:"buka",
  t:"Reka satu projek berkaitan biodiversiti untuk sekolah atau komuniti (contoh: kekunci dikotomi digital pokok sekolah, BioBlitz kawasan kampung, taman spesies asli mesra serangga, kempen melindungi spesies terancam tempatan seperti tenggiling atau harimau Malaya).",
  arahan:"Nyatakan tujuan, konsep biodiversiti yang terlibat (pengelasan, tatanama binomial, tahap biodiversiti, mikroorganisma atau ancaman biodiversiti), kaedah menjalankan, data yang akan dikumpul dan cara mengukur kejayaan, SATU langkah keselamatan atau etika, dan SATU manfaat kepada komuniti atau alam sekitar.",
  u:"Jawapan TP6 yang kukuh menggunakan pengelasan dan nama saintifik dengan betul, mengumpul data kuantitatif seperti bilangan spesies, menilai ancaman dengan bukti, menjaga etika terhadap hidupan liar, serta mencadangkan manfaat jangka panjang kepada komuniti."}}
];

module.exports = {
  id:"b5b8", tingkatan:5, kod:"8.0 Biodiversiti",
  tajuk:"Khazanah Hidup",
  subtajuk:"Biologi Ting. 5 · Bab 8 Biodiversiti",
  spi:SPI.b5b8,
  ulasan:{
   1:"{n} dapat mengingat kembali sistem pengelasan dan tatanama binomial. Langkah seterusnya ialah menggunakan kekunci dikotomi.",
   2:"{n} dapat menggunakan kekunci dikotomi dan menjelaskan tahap biodiversiti. Perlu lebih latihan mentafsir data mikroorganisma.",
   3:"{n} boleh mengaplikasikan data kultur bakteria. Galakkan menganalisis lengkung pertumbuhan bakteria.",
   4:"{n} mampu menganalisis fasa pertumbuhan populasi bakteria. Seterusnya latih menilai ancaman terhadap biodiversiti.",
   5:"{n} dapat menilai kepentingan dan ancaman biodiversiti. Sudah bersedia mereka projek biodiversiti.",
   6:"{n} berjaya mereka projek biodiversiti yang terancang dan beretika. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Biodiversiti. Cadangan: ulang hentian pertama dan tulis nama saintifik lima haiwan di sekitar rumah."
  },
  lampiran:{
   a1:{jenis:"aliran", mod:"turun",
     nod:["Ada tulang belakang? Ya: vertebrata","Berbulu pelepah? Ya: burung","Berbulu roma dan menyusu? Ya: ?","Kulit lembap tanpa sisik? Ya: amfibia"],
     kapsyen:"Rajah 1 · Sebahagian kekunci dikotomi vertebrata",
     alt:"Rajah aliran kekunci: ada tulang belakang ya vertebrata; berbulu pelepah ya burung; berbulu roma dan menyusu ya kumpulan bertanda soal; kulit lembap tanpa sisik ya amfibia"},
   j1:jadual(1, "Bilangan koloni bakteria daripada cap jari selepas 2 hari",
     ["Piring", "Keadaan tangan", "Bilangan koloni"],
     [["P","Tidak dibasuh","120"],["Q","Air sahaja","60"],["R","Air dan sabun","12"],["S","Pensanitasi alkohol","4"]]),
   g1:{jenis:"graf", x:[0,2,4,6,8,10,12], xLabel:"Masa (jam)", titik:true, yMin:0, yMaks:80, grid:8,
     siri:[{label:"Bilangan sel (juta)", y:[10,10,10,40,70,70,40], warna:"ungu"}],
     kapsyen:"Rajah 2 · Lengkung pertumbuhan populasi bakteria dalam medium tertutup",
     alt:"Graf: 10 juta sel dari jam 0 hingga 4, naik ke 40 pada jam 6 dan 70 pada jam 8, malar 70 hingga jam 10, kemudian turun ke 40 pada jam 12"}
  },
  aras:ARAS
};
