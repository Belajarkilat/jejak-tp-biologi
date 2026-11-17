/* Biologi KSSM Tingkatan 5, Bab 9 Ekosistem.
   SK 9.1 Komuniti dan ekosistem (komponen biotik dan abiotik, interaksi, aliran tenaga, kitar nutrien),
   9.2 Ekologi populasi (kuadrat, tangkap-tanda-lepas-tangkap semula) (DSKP Biologi).
   Pengiraan disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Hutan Komuniti", sk:"9.1 Komponen ekosistem dan interaksi", lampiran:null,
 kadNama:"Ekosistem", kadEm:"\u{1F333}", kadFakta:"Ekosistem terdiri daripada komuniti organisma yang berinteraksi dengan komponen abiotik.",
 bosKadNama:"Simbiosis", bosKadEm:"\u{1F91D}", bosKadFakta:"Simbiosis merangkumi mutualisme, komensalisme dan parasitisme.",
 soalan:[
 {j:"pilih",t:"Kumpulan organisma daripada spesies yang sama dalam satu habitat dikenali sebagai:",p:["Populasi","Komuniti","Ekosistem","Biosfera"],b:0,u:"Komuniti terdiri daripada pelbagai populasi."},
 {j:"pilih",t:"Antara berikut, yang manakah faktor abiotik?",p:["Suhu","Kulat","Cacing","Rumput"],b:0,u:"Faktor abiotik ialah faktor bukan hidup."},
 {j:"pilih",t:"Lebah mengambil nektar dan membantu pendebungaan bunga. Interaksi ini ialah:",p:["Mutualisme","Parasitisme","Komensalisme","Pemangsaan"],b:0,u:"Kedua-dua organisma mendapat manfaat."},
 {j:"pilih",t:"Pakis langsuyar tumbuh pada dahan pokok tanpa merosakkan pokok itu. Interaksi ini ialah:",p:["Komensalisme","Mutualisme","Parasitisme","Persaingan antara spesies"],b:0,u:"Pakis mendapat cahaya; pokok perumah tidak terjejas."},
 {j:"pilih",t:"Pacat menghisap darah manusia. Interaksi ini ialah:",p:["Parasitisme","Mutualisme","Komensalisme","Saprofitisme"],b:0,u:"Parasit mendapat manfaat dan perumah dirugikan."},
 {j:"pilih",t:"Organisma yang menguraikan bahan organik mati dikenali sebagai:",p:["Pengurai","Pengeluar","Pemangsa","Herbivor"],b:0,u:"Contohnya bakteria dan kulat."},
 {j:"pilih",t:"Pengeluar dalam ekosistem sawah ialah:",p:["Padi","Tikus","Ular","Helang"],b:0,u:"Pengeluar menukar tenaga cahaya kepada tenaga kimia."},
 {j:"banyak",t:"Pilih DUA faktor abiotik.",p:["Keamatan cahaya","pH tanah","Bakteria","Belalang"],b:[0,1],u:"Bakteria dan belalang ialah faktor biotik."}],
 bos:{j:"pilih",t:"Dua spesies burung memakan serangga yang sama di pokok yang sama. Interaksi ini ialah:",p:["Persaingan antara spesies","Mutualisme antara burung","Komensalisme antara burung","Persaingan dalam spesies"],b:0,u:"Spesies berbeza bersaing untuk sumber yang sama."}},

{n:2, tempat:"Siratan Sawah", sk:"9.1 Aliran tenaga dan siratan makanan", lampiran:"a1",
 kadNama:"Aras Trof", kadEm:"\u{1F53A}", kadFakta:"Hanya kira-kira 10% tenaga dipindahkan ke aras trof seterusnya.",
 bosKadNama:"Biomagnifikasi", bosKadEm:"\u{2620}\u{FE0F}", bosKadFakta:"Racun yang tidak terurai bertambah pekat pada aras trof yang lebih tinggi.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, pengguna primer ialah:",p:["Belalang dan tikus","Katak dan ular","Ular dan helang","Padi dan belalang"],b:0,u:"Mereka memakan pengeluar."},
 {j:"pilih",t:"Berdasarkan Rajah 1, dalam rantai padi → tikus → ular → helang, helang ialah pengguna:",p:["Tertier","Primer","Sekunder","Pengeluar"],b:0,u:"Tikus pengguna primer, ular sekunder dan helang tertier."},
 {j:"pilih",t:"Berdasarkan Rajah 1, jika semua ular mati, populasi tikus mungkin:",p:["Bertambah","Berkurang","Pupus","Tidak berubah"],b:0,u:"Pemangsa utama tikus hilang."},
 {j:"pilih",t:"Berdasarkan Rajah 1, rantai makanan PALING panjang mempunyai berapa aras trof?",p:["Lima","Dua","Tiga","Enam"],b:0,u:"Padi → belalang → katak → ular → helang: lima aras trof."},
 {j:"pilih",t:"Tenaga berkurang pada setiap aras trof kerana:",p:["Hilang sebagai haba","Bertambah dalam makanan","Disimpan dalam tanah","Dipantulkan cahaya"],b:0,u:"Tenaga digunakan untuk respirasi dan hilang sebagai haba."},
 {j:"pilih",t:"Berdasarkan Rajah 1, organisma yang mempunyai kepekatan racun perosak paling tinggi ialah:",p:["Helang","Padi","Belalang","Tikus"],b:0,u:"Biomagnifikasi berlaku di aras trof tertinggi."},
 {j:"pilih",t:"Piramid bilangan bagi pokok mangga, ulat dan burung berbentuk terbalik kerana:",p:["Satu pokok, banyak ulat","Ulat lebih besar daripada pokok","Burung paling banyak bilangannya","Tiada pengurai dalam ekosistem"],b:0,u:"Seekor pengeluar besar menyokong ramai pengguna."},
 {j:"banyak",t:"Pilih DUA organisma dalam Rajah 1 yang ialah pengguna sekunder.",p:["Katak","Ular","Padi","Belalang"],b:[0,1],u:"Ular juga pengguna sekunder apabila memakan tikus."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, petani menyembur racun yang membunuh katak. Kesan PALING mungkin dalam jangka pendek:",p:["Belalang bertambah","Hasil padi bertambah","Helang semakin bertambah","Tikus pupus sepenuhnya"],b:0,u:"Pemangsa belalang berkurang, jadi tanaman padi lebih rosak."}},

{n:3, tempat:"Padang Kuadrat", sk:"9.2 Mengaplikasikan kaedah persampelan kuadrat", lampiran:"j1",
 kadNama:"Kuadrat", kadEm:"\u{1F7E9}", kadFakta:"Kuadrat 1 m × 1 m digunakan untuk menganggar populasi tumbuhan yang tidak bergerak.",
 bosKadNama:"Kekerapan", bosKadEm:"\u{1F4CA}", bosKadFakta:"Kekerapan = bilangan kuadrat yang mengandungi spesies ÷ jumlah kuadrat × 100%.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung purata bilangan rumput Q per kuadrat.",b:6,tol:0.05,suf:"per m²",u:"(4 + 8 + 6 + 0 + 12) ÷ 5 = 30 ÷ 5 = 6."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung kekerapan rumput Q.",b:80,tol:0.5,suf:"%",u:"4 daripada 5 kuadrat: 4 ÷ 5 × 100 = 80%."},
 {j:"nombor",t:"Padang dalam Jadual 1 berkeluasan 200 m². Anggarkan populasi rumput Q.",b:1200,tol:1,suf:"pokok",u:"6 × 200 = 1200 pokok."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung kekerapan pokok R.",b:40,tol:0.5,suf:"%",u:"2 daripada 5 kuadrat: 40%."},
 {j:"pilih",t:"Kuadrat dilempar secara rawak untuk:",p:["Elak berat sebelah","Jimat masa","Cari spesies jarang","Pilih kawasan subur"],b:0,u:"Sampel mewakili seluruh kawasan."},
 {j:"pilih",t:"Kaedah kuadrat TIDAK sesuai untuk menganggar populasi:",p:["Tikus","Rumput","Lumut","Cendawan"],b:0,u:"Haiwan yang bergerak memerlukan kaedah tangkap-tanda-lepas-tangkap semula."},
 {j:"pilih",t:"Ketepatan anggaran meningkat jika:",p:["Lebih banyak kuadrat","Kuadrat lebih kecil","Satu kuadrat besar","Kuadrat bertindih"],b:0,u:"Saiz sampel besar mengurangkan ralat."},
 {j:"pilih",t:"Berdasarkan Jadual 1, spesies dengan taburan paling luas ialah:",p:["Q","R","S","R dan S sama"],b:0,u:"Kekerapan paling tinggi (80%)."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, murid mendapati pokok S hanya di kuadrat 5 yang berhampiran parit. Kesimpulan PALING munasabah:",p:["S perlukan tanah lembap","S tidak memerlukan air langsung","S paling banyak di padang","Kuadrat 5 terlalu kering"],b:0,u:"Taburan dipengaruhi faktor abiotik seperti kelembapan tanah."}},

{n:4, tempat:"Bilik Populasi", sk:"9.2 Menganalisis data populasi", lampiran:"g1",
 kadNama:"Tangkap Semula", kadEm:"\u{1F41E}", kadFakta:"Populasi = (tangkapan pertama × tangkapan kedua) ÷ bilangan bertanda dalam tangkapan kedua.",
 bosKadNama:"Pemangsa-Mangsa", bosKadEm:"\u{1F989}", bosKadFakta:"Populasi pemangsa biasanya meningkat selepas populasi mangsa meningkat.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah populasi tikus pada tahun ke-2?",b:80,tol:0.5,suf:"ekor",u:"Puncak populasi tikus 80 ekor."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah populasi burung hantu pada tahun ke-3?",b:40,tol:0.5,suf:"ekor",u:"Puncak burung hantu 40 ekor."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah populasi burung hantu meningkat selepas tahun ke-2?",p:["Makanan bertambah","Tikus semakin berkurang","Tiada makanan di ladang","Penyakit merebak"],b:0,u:"Populasi mangsa tinggi membekalkan makanan."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah populasi tikus menurun dari tahun 2 hingga 4?",p:["Dimakan burung hantu","Makanan bertambah","Burung hantu berkurang","Hujan berkurang"],b:0,u:"Pemangsaan meningkat."},
 {j:"nombor",t:"Dalam kaedah tangkap semula, 40 kumbang ditanda. Seminggu kemudian, 50 ditangkap dan 10 bertanda. Anggarkan populasi.",b:200,tol:0.5,suf:"ekor",u:"(40 × 50) ÷ 10 = 200."},
 {j:"pilih",t:"Andaian kaedah tangkap-tanda-lepas-tangkap semula ialah:",p:["Tanda tidak hilang","Haiwan bertanda mati","Banyak migrasi","Tanda menarik pemangsa"],b:0,u:"Tanda juga tidak boleh menjejaskan kemandirian."},
 {j:"pilih",t:"Berdasarkan Rajah 2, puncak populasi burung hantu berlaku selepas puncak tikus kerana:",p:["Pembiakan perlu masa","Burung hantu lebih kecil","Tikus memakan burung hantu","Tiada kaitan"],b:0,u:"Pemangsa mengambil masa untuk membiak selepas makanan bertambah."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah penurunan populasi tikus dari tahun 2 hingga 4?",b:60,tol:0.5,suf:"ekor",u:"80 − 20 = 60 ekor."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 2, peladang kelapa sawit memasang sarang burung hantu. Analisis PALING tepat:",p:["Kawalan biologi tikus","Menambah tikus","Burung hantu makan buah","Tiada kesan"],b:0,u:"Burung hantu mengurangkan tikus tanpa racun kimia."}},

{n:5, tempat:"Dewan Kitar", sk:"9.1 Menilai kitar nutrien dan perubahan ekosistem", lampiran:null,
 kadNama:"Kitar Nitrogen", kadEm:"\u{267B}\u{FE0F}", kadFakta:"Bakteria pengikat nitrogen dalam nodul akar kekacang menukar N₂ kepada sebatian nitrogen.",
 bosKadNama:"Sesaran", bosKadEm:"\u{1F33F}", bosKadFakta:"Sesaran ialah perubahan berperingkat komuniti hingga mencapai komuniti klimaks.",
 soalan:[
 {j:"pilih",t:"Petani menanam kekacang selepas menuai jagung kerana kekacang:",p:["Menambah nitrat tanah","Menyerap semua nitrat","Membunuh bakteria","Menghalang hujan"],b:0,u:"Bakteria Rhizobium dalam nodul akar mengikat nitrogen."},
 {j:"pilih",t:"Bakteria yang menukar ammonium kepada nitrat dikenali sebagai bakteria:",p:["Penitritan dan penitratan","Pengurai bahan organik","Penyahnitritan tanah","Patogen tumbuhan"],b:0,u:"Proses nitrifikasi."},
 {j:"pilih",t:"Tanah bergenang air kurang subur kerana bakteria penyahnitritan:",p:["Menukar nitrat kepada N₂","Menambah nitrat ke dalam tanah","Mengikat nitrogen udara","Membunuh rumpai di sawah"],b:0,u:"Bakteria ini aktif dalam keadaan kurang oksigen."},
 {j:"pilih",t:"Penilaian PALING tepat tentang membakar jerami selepas menuai:",p:["Mencemar udara","Menambah nitrat tanah","Tiada kesan","Menambah pengurai"],b:0,u:"Asap mencemar udara; lebih baik dijadikan kompos atau sungkupan."},
 {j:"pilih",t:"Dalam sesaran di kolam, kolam akhirnya menjadi:",p:["Daratan","Lautan dalam","Gurun pasir","Gunung batu"],b:0,u:"Mendapan dan tumbuhan mengisi kolam secara berperingkat."},
 {j:"pilih",t:"Pengurai penting dalam kitar karbon kerana:",p:["Membebaskan CO₂","Menyerap cahaya","Menghasilkan oksigen","Mengikat nitrogen"],b:0,u:"Respirasi pengurai mengembalikan karbon ke atmosfera."},
 {j:"pilih",t:"Penilaian tentang menggantikan baja kimia dengan baja kompos:",p:["Lebih lestari","Merosakkan tanah","Tiada nutrien","Mencemar sungai lebih"],b:0,u:"Kompos memperbaiki struktur tanah dan kurang larut lesap."},
 {j:"banyak",t:"Pilih DUA proses yang membebaskan CO₂ ke atmosfera.",p:["Respirasi","Pembakaran","Fotosintesis","Pengikatan nitrogen"],b:[0,1],u:"Fotosintesis menyerap CO₂."}],
 bos:{j:"pilih",t:"Sebuah tasik menerima air larian baja dari ladang. Alga membiak pesat dan ikan mati. Penilaian PALING tepat:",p:["Eutrofikasi","Kitar air","Sesaran","Fotosintesis"],b:0,u:"Nutrien berlebihan menyebabkan alga membiak; penguraian alga mati menghabiskan oksigen."}},

{n:6, tempat:"Studio Ekosistem", sk:"9.1 hingga 9.2 Mereka cipta berasaskan ekosistem", lampiran:null,
 kadNama:"Akuarium Seimbang", kadEm:"\u{1F420}", kadFakta:"Ekosistem akuarium seimbang memerlukan pengeluar, pengguna dan pengurai.",
 bosKadNama:"Kawalan Biologi", bosKadEm:"\u{1F4A1}", bosKadFakta:"Kawalan biologi menggunakan musuh semula jadi untuk mengawal perosak.",
 soalan:[
 {j:"pilih",t:"Untuk membina ekosistem botol yang stabil, anda mesti memasukkan:",p:["Tumbuhan hijau","Garam dapur","Serpihan plastik","Gula pasir"],b:0,u:"Pengeluar membekalkan oksigen dan makanan."},
 {j:"pilih",t:"Untuk menganggar populasi siput di kebun sekolah, kaedah PALING sesuai:",p:["Tangkap semula","Kuadrat sahaja","Kira semua siput","Teka"],b:0,u:"Siput bergerak; tandakan cangkerang dengan cat."},
 {j:"pilih",t:"Untuk mengawal tikus di sawah tanpa racun, anda mencadangkan:",p:["Burung hantu","Bakar sawah selepas menuai","Tambah baja urea","Siram sawah dengan air garam"],b:0,u:"Kawalan biologi mesra alam."},
 {j:"pilih",t:"Bahan PALING sesuai untuk menanda cangkerang siput:",p:["Cat tidak toksik","Cat minyak beracun","Pita pelekat yang besar","Pewarna larut air"],b:0,u:"Tanda tidak hilang dan tidak membahayakan siput."},
 {j:"pilih",t:"Dalam kajian faktor abiotik di bawah dan luar teduhan pokok, alat mengukur cahaya:",p:["Meter cahaya","Termometer","Penunjuk pH tanah","Pembaris meter"],b:0,u:"Meter cahaya mengukur keamatan cahaya."},
 {j:"pilih",t:"Data taburan tiga spesies di lima kuadrat paling jelas dibentangkan dengan:",p:["Carta palang","Carta pai","Puisi tentang tumbuhan","Lukisan kuadrat"],b:0,u:"Carta palang membandingkan kategori."},
 {j:"pilih",t:"Untuk kebun sekolah tanpa racun perosak, anda boleh menanam bunga untuk menarik:",p:["Serangga pemangsa","Tikus sawah","Ular sawa","Siput babi"],b:0,u:"Kepinding dan lebah predator mengawal afid."},
 {j:"banyak",t:"Pilih DUA syarat yang mesti dipatuhi sebelum tangkapan semula.",p:["Masa cukup untuk bercampur","Tiada migrasi besar","Tanda mudah hilang","Haiwan bertanda dikurung"],b:[0,1],u:"Haiwan bertanda mesti bercampur semula secara rawak."}],
 bos:{j:"buka",
  t:"Reka satu projek atau eksperimen berkaitan ekosistem untuk sekolah atau komuniti (contoh: ekosistem botol tertutup, kawalan biologi tikus dengan burung hantu, kajian populasi siput di kebun sekolah, taman mesra pemangsa perosak, kajian kesan teduhan terhadap taburan tumbuhan).",
  arahan:"Nyatakan tujuan, konsep ekosistem yang terlibat (komponen biotik dan abiotik, interaksi, siratan makanan, kitar nutrien atau ekologi populasi), kaedah persampelan atau pembinaan, data yang dikumpul beserta SATU contoh pengiraan (contohnya kekerapan atau anggaran populasi), SATU langkah keselamatan atau etika, dan SATU manfaat kepada komuniti atau alam sekitar.",
  u:"Jawapan TP6 yang kukuh memilih kaedah persampelan yang betul, menunjukkan pengiraan yang tepat, mengaitkan data dengan faktor abiotik atau interaksi, menjaga etika terhadap organisma, serta menilai manfaat seperti pengurangan racun perosak."}}
];

module.exports = {
  id:"b5b9", tingkatan:5, kod:"9.0 Ekosistem",
  tajuk:"Jaringan Hayat",
  subtajuk:"Biologi Ting. 5 · Bab 9 Ekosistem",
  spi:SPI.b5b9,
  ulasan:{
   1:"{n} dapat mengingat kembali komponen ekosistem dan jenis interaksi. Langkah seterusnya ialah menerangkan aliran tenaga.",
   2:"{n} dapat menjelaskan aliran tenaga dan siratan makanan. Perlu lebih latihan mengira kekerapan dan populasi.",
   3:"{n} boleh mengaplikasikan kaedah kuadrat untuk mengira kekerapan dan populasi. Galakkan menganalisis graf pemangsa-mangsa.",
   4:"{n} mampu menganalisis data populasi dan hubungan pemangsa-mangsa. Seterusnya latih menilai kitar nutrien.",
   5:"{n} dapat menilai kitar nutrien dan perubahan ekosistem. Sudah bersedia mereka projek ekosistem.",
   6:"{n} berjaya mereka projek ekosistem yang terancang dengan data yang sah. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Ekosistem. Cadangan: ulang hentian pertama dan lukis siratan makanan di sekitar rumah."
  },
  lampiran:{
   a1:{jenis:"aliran", mod:"siratan",
     nod:[{id:"h",label:"Helang",x:1,y:0},{id:"u",label:"Ular",x:1,y:1},{id:"k",label:"Katak",x:0,y:2},{id:"t",label:"Tikus",x:2,y:2},{id:"b",label:"Belalang",x:0,y:3},{id:"p",label:"Padi",x:1,y:4}],
     panah:[["p","b"],["p","t"],["b","k"],["k","u"],["t","u"],["u","h"]],
     kapsyen:"Rajah 1 · Siratan makanan di sawah padi",
     alt:"Siratan makanan: padi dimakan belalang dan tikus; belalang dimakan katak; katak dan tikus dimakan ular; ular dimakan helang"},
   j1:jadual(1, "Bilangan tumbuhan dalam lima kuadrat 1 m × 1 m",
     ["Kuadrat", "1", "2", "3", "4", "5"],
     [["Rumput Q","4","8","6","0","12"],["Pokok R","2","0","0","3","0"],["Pokok S","0","0","0","0","5"]]),
   g1:{jenis:"graf", x:[0,1,2,3,4,5,6], xLabel:"Masa (tahun)", titik:true, yMin:0, yMaks:90, grid:9,
     siri:[{label:"Tikus", y:[30,60,80,40,20,40,70], warna:"ungu"},{label:"Burung hantu", y:[10,20,30,40,20,10,20], warna:"merah"}],
     kapsyen:"Rajah 2 · Populasi tikus dan burung hantu di sebuah ladang",
     alt:"Graf dua lengkung: tikus 30, 60, puncak 80 pada tahun 2, turun ke 40 dan 20 pada tahun 4, naik ke 40 dan 70; burung hantu 10, 20, 30, puncak 40 pada tahun 3, turun ke 20 dan 10, kemudian 20"}
  },
  aras:ARAS
};
