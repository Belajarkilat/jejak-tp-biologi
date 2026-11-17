/* Biologi KSSM Tingkatan 5, Bab 7 Adaptasi Tumbuhan dalam Habitat Berbeza.
   SK 7.1 Adaptasi tumbuhan: mesofit, hidrofit, halofit dan xerofit (DSKP Biologi). */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Empat Habitat", sk:"7.1 Jenis tumbuhan mengikut habitat", lampiran:null,
 kadNama:"Mesofit", kadEm:"\u{1F33F}", kadFakta:"Mesofit hidup di habitat yang tidak terlalu kering dan tidak terlalu basah, seperti pokok bunga raya.",
 bosKadNama:"Halofit", bosKadEm:"\u{1F30A}", bosKadFakta:"Halofit seperti pokok bakau hidup di tanah berlumpur yang masin dan kurang oksigen.",
 soalan:[
 {j:"pilih",t:"Tumbuhan yang hidup di kawasan sangat kering dikenali sebagai:",p:["Xerofit","Hidrofit","Halofit","Mesofit"],b:0,u:"Contohnya kaktus."},
 {j:"pilih",t:"Teratai yang hidup di permukaan kolam ialah contoh:",p:["Hidrofit","Xerofit","Halofit","Mesofit"],b:0,u:"Hidrofit hidup di dalam atau di permukaan air."},
 {j:"pilih",t:"Pokok bakau di pesisir pantai ialah contoh:",p:["Halofit","Xerofit","Mesofit","Hidrofit air tawar"],b:0,u:"Halofit tahan kepekatan garam yang tinggi."},
 {j:"pilih",t:"Kebanyakan tanaman di kebun sekolah ialah:",p:["Mesofit","Halofit","Xerofit","Hidrofit"],b:0,u:"Ia hidup di tanah yang bersaliran baik dan cukup air."},
 {j:"pilih",t:"Daun kaktus berubah menjadi duri untuk:",p:["Kurangkan transpirasi","Menyerap cahaya lebih","Menyimpan kanji","Menarik serangga"],b:0,u:"Luas permukaan kecil mengurangkan kehilangan air."},
 {j:"pilih",t:"Akar pneumatofor pada pokok bakau berfungsi untuk:",p:["Pertukaran gas","Menyerap garam","Menyimpan air tawar","Menarik ketam"],b:0,u:"Lumpur kurang oksigen; akar tegak ini menyerap udara melalui lentisel."},
 {j:"pilih",t:"Stoma pada daun teratai terletak di:",p:["Permukaan atas","Permukaan bawah","Batang dalam air","Akar"],b:0,u:"Permukaan bawah bersentuhan dengan air."},
 {j:"banyak",t:"Pilih DUA adaptasi xerofit.",p:["Kutikel tebal","Batang menyimpan air","Daun lebar dan nipis","Stoma di permukaan atas"],b:[0,1],u:"Daun lebar dan nipis ialah ciri mesofit atau hidrofit."}],
 bos:{j:"pilih",t:"Mengapakah kaktus membuka stoma pada waktu malam?",p:["Kurang kehilangan air","Cahaya bulan terang","Serangga aktif malam","Suhu malam lebih tinggi"],b:0,u:"Suhu malam lebih rendah, jadi transpirasi kurang; CO₂ disimpan untuk fotosintesis siang."}},

{n:2, tempat:"Paya Bakau", sk:"7.1 Adaptasi halofit dan hidrofit", lampiran:"a1",
 kadNama:"Vivipari", kadEm:"\u{1F331}", kadFakta:"Biji bakau bercambah semasa masih pada pokok induk supaya anak benih dapat terus tumbuh di lumpur.",
 bosKadNama:"Aerenkima", bosKadEm:"\u{1FAE7}", bosKadFakta:"Tisu aerenkima yang berongga udara membantu hidrofit terapung dan menyimpan oksigen.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peringkat bertanda ? ialah:",p:["Anak benih jatuh","Biji dimakan oleh burung","Daun gugur ke dalam laut","Akar dipotong oleh nelayan"],b:0,u:"Anak benih yang jatuh terpacak ke lumpur atau dibawa air pasang."},
 {j:"pilih",t:"Berdasarkan Rajah 1, kelebihan vivipari kepada bakau ialah:",p:["Cepat berakar","Saiz biji menjadi lebih kecil","Bunga dihasilkan lebih banyak","Tiada persenyawaan berlaku"],b:0,u:"Anak benih tidak hanyut dan tidak perlu bercambah di air masin."},
 {j:"pilih",t:"Pokok bakau menyingkirkan garam berlebihan melalui:",p:["Kelenjar garam","Kelopak bunga","Biji benih matang","Kulit kayu batang"],b:0,u:"Kristal garam boleh dilihat di permukaan daun tertentu."},
 {j:"pilih",t:"Sap sel akar bakau lebih pekat daripada air laut supaya:",p:["Air masuk","Garam keluar dari akar","Akar membesar dengan cepat","Oksigen meresap ke akar"],b:0,u:"Keupayaan air sel akar lebih rendah daripada air laut."},
 {j:"pilih",t:"Akar jangkang pada bakau membantu:",p:["Menyokong pokok","Menyimpan garam","Berfotosintesis","Menghasilkan bunga"],b:0,u:"Ia mencengkam lumpur lembut dan menahan ombak."},
 {j:"pilih",t:"Keladi bunting terapung kerana tangkai daunnya:",p:["Berongga udara","Berlignin sangat tebal","Penuh dengan butir kanji","Berduri tajam"],b:0,u:"Tisu aerenkima mengurangkan ketumpatan."},
 {j:"pilih",t:"Hidrofit tenggelam seperti Hydrilla mempunyai xilem yang kurang berkembang kerana:",p:["Air diserap terus","Tiada keperluan air langsung","Akarnya sangat panjang","Daunnya berlilin tebal"],b:0,u:"Air dan mineral meresap terus melalui permukaan badan."},
 {j:"banyak",t:"Pilih DUA adaptasi pokok bakau.",p:["Pneumatofor","Vivipari","Duri tajam","Daun berbulu tebal"],b:[0,1],u:"Duri dan bulu tebal lebih biasa pada xerofit."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, jika paya bakau ditimbus untuk pembangunan, apakah kesan PALING serius kepada pantai?",p:["Hakisan meningkat","Ombak menjadi lebih kecil","Bilangan ikan bertambah","Air laut menjadi tawar"],b:0,u:"Akar bakau menahan lumpur dan mengurangkan tenaga ombak."}},

{n:3, tempat:"Makmal Stoma", sk:"7.1 Mengaplikasikan perbandingan adaptasi daun", lampiran:"j1",
 kadNama:"Ketumpatan Stoma", kadEm:"\u{1F52C}", kadFakta:"Bilangan stoma per mm² berbeza mengikut habitat tumbuhan.",
 bosKadNama:"Cap Kuku", bosKadEm:"\u{1F485}", bosKadFakta:"Cetakan cat kuku jernih pada permukaan daun membolehkan stoma dikira di bawah mikroskop.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 1, tumbuhan manakah xerofit?",p:["Q","P","R","S"],b:0,u:"Bilangan stoma paling sedikit, dan stoma hanya di permukaan bawah yang tenggelam."},
 {j:"pilih",t:"Berdasarkan Jadual 1, tumbuhan manakah hidrofit terapung?",p:["R","P","Q","S"],b:0,u:"Semua stoma berada di permukaan atas."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah jumlah stoma per mm² bagi tumbuhan P (atas + bawah)?",b:300,tol:0.5,suf:"per mm²",u:"50 + 250 = 300."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapa kali ganda stoma permukaan bawah P berbanding permukaan atasnya?",b:5,tol:0.05,suf:"kali",u:"250 ÷ 50 = 5 kali."},
 {j:"pilih",t:"Berdasarkan Jadual 1, tumbuhan S tiada stoma kerana ia:",p:["Tenggelam","Hidup di kawasan gurun","Tiada daun langsung","Sudah lama mati"],b:0,u:"Hidrofit tenggelam menukar gas terus melalui permukaan."},
 {j:"pilih",t:"Berdasarkan Jadual 1, tumbuhan P ialah:",p:["Mesofit","Xerofit","Hidrofit terapung","Hidrofit tenggelam"],b:0,u:"Banyak stoma, kebanyakannya di permukaan bawah."},
 {j:"pilih",t:"Untuk mengira ketumpatan stoma, anda perlu tahu:",p:["Luas medan pandangan","Warna daun yang dikaji","Umur pokok yang dikaji","Tinggi pokok dalam cm"],b:0,u:"Ketumpatan = bilangan stoma ÷ luas medan pandangan."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung beza jumlah stoma per mm² antara P dan Q.",b:270,tol:0.5,suf:"per mm²",u:"300 − (0 + 30) = 270."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, murid meramal bahawa tumbuhan Q akan kehilangan paling sedikit air. Bukti PALING kukuh:",p:["Paling sedikit stoma","Tiada stoma bawah","Daun paling besar","Stoma di atas sahaja"],b:0,u:"Kurang stoma bermakna kurang laluan untuk transpirasi."}},

{n:4, tempat:"Bilik Garam", sk:"7.1 Menganalisis toleransi garam", lampiran:"g1",
 kadNama:"Toleransi Garam", kadEm:"\u{1F9C2}", kadFakta:"Halofit terus bertumbuh pada kemasinan yang membunuh kebanyakan mesofit.",
 bosKadNama:"Tanah Masin", bosKadEm:"\u{1F3DD}\u{FE0F}", bosKadFakta:"Kenaikan aras laut menyebabkan air masin meresap ke sawah pesisir pantai.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah pertumbuhan relatif bakau pada kemasinan 20 g/L?",b:100,tol:0.5,suf:"%",u:"Lengkung bakau mencapai 100%."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah pertumbuhan relatif padi pada kemasinan 10 g/L?",b:40,tol:0.5,suf:"%",u:"Lengkung padi menunjukkan 40%."},
 {j:"pilih",t:"Berdasarkan Rajah 2, padi berhenti tumbuh pada kemasinan:",p:["20 g/L","10 g/L","0 g/L","5 g/L"],b:0,u:"Pertumbuhan relatif sifar."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah pertumbuhan padi menurun apabila kemasinan meningkat?",p:["Air keluar dari akar","Cahaya semakin berkurang","Oksigen tanah bertambah","Suhu tanah meningkat"],b:0,u:"Larutan tanah menjadi hipertonik."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah bakau tumbuh kurang baik dalam air tawar (0 g/L)?",p:["Teradaptasi garam","Air tawar beracun kepadanya","Tiada cahaya di air tawar","Akarnya tidak tumbuh"],b:0,u:"Bakau ialah halofit yang tumbuh optimum dalam kemasinan sederhana."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah beza pertumbuhan relatif bakau dan padi pada 10 g/L?",b:40,tol:0.5,suf:"%",u:"80 − 40 = 40%."},
 {j:"pilih",t:"Berdasarkan Rajah 2, kemasinan optimum bagi bakau ialah sekitar:",p:["20 g/L","0 g/L","5 g/L","40 g/L"],b:0,u:"Puncak lengkung bakau."},
 {j:"pilih",t:"Berdasarkan Rajah 2, kesimpulan PALING tepat:",p:["Bakau lebih tahan garam","Padi lebih tahan garam","Garam membantu pertumbuhan padi","Kedua-duanya sama toleran"],b:0,u:"Bakau masih tumbuh baik pada kemasinan yang membunuh padi."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 2, sawah di tepi pantai kini dimasuki air laut pada kemasinan 15 g/L. Cadangan PALING sesuai:",p:["Varieti tahan garam","Tambah baja urea","Tanam anak padi lebih rapat","Siram sawah dengan air laut"],b:0,u:"Padi biasa hampir tidak tumbuh; varieti toleran garam atau benteng diperlukan."}},

{n:5, tempat:"Dewan Habitat", sk:"7.1 Menilai adaptasi dan pemuliharaan habitat", lampiran:null,
 kadNama:"Hutan Bakau", kadEm:"\u{1F3DE}\u{FE0F}", kadFakta:"Hutan bakau ialah tapak semaian ikan, udang dan ketam.",
 bosKadNama:"Tsunami 2004", bosKadEm:"\u{1F30A}", bosKadFakta:"Kawasan pantai yang dilindungi bakau mengalami kemusnahan lebih kecil semasa tsunami 2004.",
 soalan:[
 {j:"pilih",t:"Nelayan pesisir bergantung pada hutan bakau kerana ia:",p:["Tapak pembiakan ikan","Menambah kemasinan air laut","Menghalau burung pemangsa","Membekalkan pasir pantai"],b:0,u:"Anak ikan dan udang berlindung di antara akar bakau."},
 {j:"pilih",t:"Penilaian PALING tepat tentang menukar paya bakau kepada kolam udang:",p:["Rugi jangka panjang","Untung berterusan jangka panjang","Tiada kesan kepada ekosistem","Menambah biodiversiti kawasan"],b:0,u:"Ekosistem musnah, hakisan bertambah dan hasil kolam menurun selepas beberapa tahun."},
 {j:"pilih",t:"Kaktus sesuai ditanam di pejabat berhawa dingin yang jarang disiram kerana:",p:["Simpan air","Perlukan banyak air","Daunnya lebar","Suka tanah basah"],b:0,u:"Batang berisi dan kutikel tebal mengurangkan keperluan air."},
 {j:"pilih",t:"Menanam semula bakau lebih berkesan daripada membina tembok konkrit kerana:",p:["Bakau membaiki diri","Kos konkrit lebih murah","Bakau tidak mempunyai akar","Tembok menarik lebih banyak ikan"],b:0,u:"Bakau juga menyokong perikanan dan menyerap karbon."},
 {j:"pilih",t:"Tumbuhan PALING sesuai untuk taman atas bumbung yang panas dan kering:",p:["Sukulen","Teratai","Bakau","Padi"],b:0,u:"Sukulen menyimpan air dan tahan kemarau."},
 {j:"pilih",t:"Mengapakah keladi bunting menjadi masalah di tasik?",p:["Membiak terlalu cepat","Tenggelam ke dasar tasik","Mengeluarkan oksigen","Menyerap garam dari air"],b:0,u:"Ia menutupi permukaan dan menghalang cahaya."},
 {j:"pilih",t:"Penilaian tentang menanam pokok mesofit di tepi pantai berpasir masin tanpa penjagaan:",p:["Mungkin mati","Pasti subur","Tiada masalah","Tumbuh lebih laju"],b:0,u:"Mesofit tidak tahan garam dan angin kering."},
 {j:"banyak",t:"Pilih DUA manfaat hutan bakau kepada manusia.",p:["Melindungi pantai","Sumber perikanan","Menambah kemasinan","Menghalang hujan"],b:[0,1],u:"Bakau juga menyerap karbon dan menapis pencemar."}],
 bos:{j:"pilih",t:"Sebuah resort mahu menebang bakau untuk membina pantai pasir. Penilaian PALING tepat:",p:["Merugikan","Menguntungkan pihak resort dan nelayan","Tiada kesan kepada pantai","Menambah bilangan ikan"],b:0,u:"Hakisan, kehilangan perikanan dan perlindungan ribut melebihi keuntungan jangka pendek."}},

{n:6, tempat:"Studio Habitat", sk:"7.1 Mereka cipta berasaskan adaptasi tumbuhan", lampiran:null,
 kadNama:"Terarium", kadEm:"\u{1FAB4}", kadFakta:"Terarium ialah ekosistem kecil tertutup yang mengitar semula air melalui transpirasi dan kondensasi.",
 bosKadNama:"Taman Pintar", bosKadEm:"\u{1F4A1}", bosKadFakta:"Memilih tumbuhan mengikut habitat menjimatkan air dan kos penjagaan.",
 soalan:[
 {j:"pilih",t:"Anda mereka taman xeriskap (jimat air). Tumbuhan PALING sesuai:",p:["Kaktus","Teratai","Keladi bunting","Padi sawah"],b:0,u:"Xerofit tahan kemarau."},
 {j:"pilih",t:"Untuk kolam ekologi sekolah, tumbuhan PALING sesuai:",p:["Teratai","Kaktus","Pokok getah","Pokok kelapa sawit"],b:0,u:"Hidrofit menyediakan teduhan dan oksigen untuk ikan."},
 {j:"pilih",t:"Untuk mengkaji kesan kemasinan pada anak benih, pemboleh ubah dimanipulasi:",p:["Kepekatan garam","Tinggi anak benih","Jenis pasu digunakan","Warna daun"],b:0,u:"Kepekatan garam diubah, tinggi diukur."},
 {j:"pilih",t:"Anda mahu menunjukkan kesan kutikel tebal. Model PALING ringkas:",p:["Kertas berlilin","Kertas basah biasa","Batu sungai","Kain kering"],b:0,u:"Bandingkan kadar kehilangan air kertas berlilin dengan tanpa lilin."},
 {j:"pilih",t:"Dalam projek tanam semula bakau, anak benih ditanam pada:",p:["Lumpur pasang surut","Tanah bukit kering","Pasir gurun","Dalam pasu tertutup"],b:0,u:"Habitat semula jadi bakau ialah zon pasang surut."},
 {j:"pilih",t:"Cara mengukur kejayaan projek tanam semula bakau selepas setahun:",p:["Kadar hidup","Warna air laut","Bilangan pelancong","Harga tanah sekitar"],b:0,u:"Peratus anak benih yang hidup menunjukkan keberkesanan."},
 {j:"pilih",t:"Terarium tertutup tidak perlu kerap disiram kerana air:",p:["Dikitar semula","Hilang ke udara","Diserap kaca","Tidak diperlukan"],b:0,u:"Wap air terkondensasi pada dinding dan menitis semula ke tanah."},
 {j:"banyak",t:"Pilih DUA langkah keselamatan semasa kerja lapangan di paya bakau.",p:["Pakai but getah","Pergi berkumpulan","Pergi ketika air pasang","Berjalan seorang diri"],b:[0,1],u:"Lumpur licin dan air pasang berbahaya."}],
 bos:{j:"buka",
  t:"Reka satu projek atau eksperimen berkaitan adaptasi tumbuhan dalam habitat berbeza untuk sekolah atau komuniti (contoh: taman xeriskap jimat air, kolam ekologi dengan hidrofit, projek tanam semula bakau, terarium kelas, eksperimen kesan kemasinan terhadap anak benih).",
  arahan:"Nyatakan tujuan, jenis tumbuhan dan habitat yang terlibat (mesofit, hidrofit, halofit atau xerofit) beserta DUA ciri adaptasinya, bahan dan cara menjalankan, pemboleh ubah yang dimanipulasi, bergerak balas dan dimalarkan, cara mengukur kejayaan, SATU langkah keselamatan, dan SATU manfaat kepada alam sekitar atau komuniti.",
  u:"Jawapan TP6 yang kukuh memadankan tumbuhan dengan habitat berdasarkan ciri adaptasi yang tepat, mengawal pemboleh ubah, mengukur kejayaan secara kuantitatif seperti kadar hidup atau penggunaan air, menjaga keselamatan, serta menilai manfaat seperti penjimatan air atau perlindungan pantai."}}
];

module.exports = {
  id:"b5b7", tingkatan:5, kod:"7.0 Adaptasi Tumbuhan dalam Habitat Berbeza",
  tajuk:"Hidup Di Mana-mana",
  subtajuk:"Biologi Ting. 5 · Bab 7 Adaptasi Tumbuhan dalam Habitat Berbeza",
  spi:SPI.b5b7,
  ulasan:{
   1:"{n} dapat mengingat kembali jenis tumbuhan mengikut habitat. Langkah seterusnya ialah menerangkan adaptasi bakau dan hidrofit.",
   2:"{n} dapat menjelaskan adaptasi halofit dan hidrofit. Perlu lebih latihan mentafsir data stoma.",
   3:"{n} boleh mengaplikasikan data stoma untuk mengenal pasti jenis tumbuhan. Galakkan menganalisis graf toleransi garam.",
   4:"{n} mampu menganalisis toleransi garam tumbuhan. Seterusnya latih menilai pemuliharaan habitat.",
   5:"{n} dapat menilai kepentingan adaptasi dan habitat seperti hutan bakau. Sudah bersedia mereka projek habitat.",
   6:"{n} berjaya mereka projek berasaskan adaptasi tumbuhan yang terancang dan lestari. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Adaptasi Tumbuhan dalam Habitat Berbeza. Cadangan: ulang hentian pertama dan bandingkan daun kaktus, keladi dan bunga raya."
  },
  lampiran:{
   a1:{jenis:"aliran", mod:"turun",
     nod:["Buah bakau masih pada pokok induk","Biji bercambah, hipokotil memanjang","?","Akar tumbuh dan mencengkam lumpur"],
     kapsyen:"Rajah 1 · Vivipari pada pokok bakau",
     alt:"Rajah aliran: buah bakau masih pada pokok induk, biji bercambah dan hipokotil memanjang, peringkat bertanda soal, akar tumbuh dan mencengkam lumpur"},
   j1:jadual(1, "Bilangan stoma per mm² pada daun empat tumbuhan",
     ["Tumbuhan", "Permukaan atas", "Permukaan bawah"],
     [["P","50","250"],["Q","0","30 (dalam lekuk)"],["R","400","0"],["S","0","0"]]),
   g1:{jenis:"graf", x:[0,5,10,15,20,25,30], xLabel:"Kemasinan (g/L)", titik:true, yMin:0, yMaks:100, grid:10,
     siri:[{label:"Bakau (%)", y:[50,70,80,90,100,90,70], warna:"hijau"},{label:"Padi (%)", y:[100,70,40,10,0,0,0], warna:"merah"}],
     kapsyen:"Rajah 2 · Pertumbuhan relatif bakau dan padi pada kemasinan berbeza",
     alt:"Graf dua lengkung: bakau naik dari 50% pada 0 g/L ke puncak 100% pada 20 g/L kemudian turun ke 70% pada 30 g/L; padi turun dari 100% pada 0 ke 70, 40, 10 dan sifar pada 20 g/L"}
  },
  aras:ARAS
};
