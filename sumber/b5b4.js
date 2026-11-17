/* Biologi KSSM Tingkatan 5, Bab 4 Pengangkutan dalam Tumbuhan.
   SK 4.1 Tisu vaskular, 4.2 Pengangkutan air dan garam mineral, 4.3 Translokasi,
   4.4 Fitoremediasi (DSKP Biologi). Kadar disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Saluran Hijau", sk:"4.1 Tisu vaskular", lampiran:null,
 kadNama:"Salur Xilem", kadEm:"\u{1F6B0}", kadFakta:"Salur xilem terdiri daripada sel mati berlignin yang bersambung membentuk tiub panjang tanpa dinding hujung.",
 bosKadNama:"Sel Rakan", bosKadEm:"\u{1F91D}", bosKadFakta:"Sel rakan menyediakan ATP dan mengawal aktiviti tiub tapis yang tiada nukleus.",
 soalan:[
 {j:"pilih",t:"Tisu yang mengangkut air dan garam mineral ialah:",p:["Xilem","Floem","Kambium","Epidermis"],b:0,u:"Xilem mengangkut air dari akar ke daun."},
 {j:"pilih",t:"Floem mengangkut terutamanya:",p:["Sukrosa","Ion nitrat","Air tanah","Kanji pepejal"],b:0,u:"Sukrosa dan asid amino diangkut dalam floem."},
 {j:"pilih",t:"Dinding salur xilem diperkuat oleh:",p:["Lignin","Kitin","Kutin","Kolagen"],b:0,u:"Lignin menahan tekanan dan memberi sokongan."},
 {j:"pilih",t:"Tiub tapis floem tidak mempunyai:",p:["Nukleus","Sitoplasma","Membran plasma","Dinding sel"],b:0,u:"Sel rakan menjalankan fungsi metabolisme untuknya."},
 {j:"pilih",t:"Plat tapis pada tiub tapis membolehkan:",p:["Sap mengalir","Air menyejat ke udara","Cahaya masuk ke sel","Gas meresap keluar"],b:0,u:"Liang pada plat tapis menyambungkan sitoplasma tiub tapis."},
 {j:"pilih",t:"Arah pengangkutan dalam xilem ialah:",p:["Ke atas","Dua hala","Ke bawah","Mendatar"],b:0,u:"Air bergerak dari akar ke daun."},
 {j:"pilih",t:"Arah pengangkutan dalam floem ialah:",p:["Dua hala","Ke atas","Ke bawah","Mendatar"],b:0,u:"Dari sumber ke sinki, sama ada ke atas atau ke bawah."},
 {j:"banyak",t:"Pilih DUA unsur dalam tisu floem.",p:["Tiub tapis","Sel rakan","Salur xilem","Trakeid"],b:[0,1],u:"Salur xilem dan trakeid ialah unsur xilem."}],
 bos:{j:"pilih",t:"Mengapakah salur xilem tiada dinding hujung dan kandungan sel?",p:["Air mengalir tanpa halangan","Menyimpan lebih banyak kanji","Melakukan fotosintesis","Menghasilkan hormon"],b:0,u:"Tiub terbuka berterusan membolehkan turus air bergerak."}},

{n:2, tempat:"Menara Air", sk:"4.2 Pengangkutan air dari akar ke daun", lampiran:"a1",
 kadNama:"Tarikan Transpirasi", kadEm:"\u{1F32C}\u{FE0F}", kadFakta:"Penyejatan air dari daun menghasilkan tarikan yang menarik turus air ke atas dalam xilem.",
 bosKadNama:"Tekanan Akar", bosKadEm:"\u{1F4A7}", bosKadFakta:"Tekanan akar menolak air ke atas; gutasi ialah titisan air di tepi daun pada awal pagi.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, proses bertanda ? ialah:",p:["Transpirasi","Respirasi","Gutasi","Translokasi"],b:0,u:"Wap air meresap keluar melalui stoma."},
 {j:"pilih",t:"Daya lekitan ialah tarikan antara:",p:["Molekul air sesama sendiri","Molekul air dengan dinding xilem","Ion mineral dengan klorofil","Udara dengan permukaan daun"],b:0,u:"Daya lekitan membentuk turus air yang berterusan."},
 {j:"pilih",t:"Daya lekatan ialah tarikan antara:",p:["Air dengan dinding xilem","Molekul air sesama sendiri","Rambut akar dengan zarah tanah","Gas dengan sel pengawal stoma"],b:0,u:"Daya lekatan membantu air memanjat dinding xilem."},
 {j:"pilih",t:"Berdasarkan Rajah 1, daya UTAMA yang menaikkan air ke daun pokok tinggi ialah:",p:["Tarikan transpirasi","Tekanan akar pokok","Tarikan graviti Bumi","Translokasi floem"],b:0,u:"Tekanan akar dan tindakan kapilari terlalu kecil untuk pokok tinggi."},
 {j:"pilih",t:"Gutasi berlaku pada awal pagi apabila:",p:["Udara lembap","Udara sangat kering","Angin bertiup kencang","Suhu sangat tinggi"],b:0,u:"Transpirasi rendah, jadi tekanan akar menolak air keluar melalui hidatod."},
 {j:"pilih",t:"Tindakan kapilari membantu air naik dalam xilem kerana xilem:",p:["Bergaris pusat kecil","Terdiri daripada sel hidup","Berwarna hijau","Mempunyai stoma"],b:0,u:"Tiub sempit membolehkan lekatan dan lekitan menaikkan air."},
 {j:"pilih",t:"Berdasarkan Rajah 1, garam mineral diangkut ke daun bersama:",p:["Air dalam xilem","Sukrosa dalam floem","Udara dalam ruang udara","Cahaya matahari"],b:0,u:"Ion terlarut dalam air dibawa oleh aliran transpirasi."},
 {j:"banyak",t:"Pilih DUA daya yang membantu air naik dalam xilem.",p:["Tekanan akar","Tindakan kapilari","Fotolisis","Translokasi"],b:[0,1],u:"Tarikan transpirasi juga daya penting."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, jika gelembung udara terbentuk dalam xilem, apakah kesannya?",p:["Turus air terputus","Air naik lebih cepat","Floem rosak","Stoma terbuka"],b:0,u:"Gelembung memutuskan daya lekitan antara molekul air."}},

{n:3, tempat:"Makmal Gelangan", sk:"4.3 Mengaplikasikan eksperimen translokasi", lampiran:"j1",
 kadNama:"Eksperimen Gelangan", kadEm:"\u{1F48D}", kadFakta:"Membuang gelang kulit batang (termasuk floem) menyebabkan bahagian atas gelang membengkak.",
 bosKadNama:"Afid", bosKadEm:"\u{1F41C}", bosKadFakta:"Stilet afid menembusi tiub tapis dan boleh digunakan untuk mengambil sampel sap floem.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 1, bahagian batang di atas gelang membengkak kerana:",p:["Sukrosa terkumpul","Air terkumpul di situ","Xilem membesar","Akar baharu tumbuh"],b:0,u:"Floem dibuang, jadi sukrosa tidak dapat turun."},
 {j:"pilih",t:"Berdasarkan Jadual 1, daun pada pokok bergelang masih segar selepas 2 minggu kerana:",p:["Xilem tidak dibuang","Floem masih ada","Stoma tertutup","Akar tumbuh baharu"],b:0,u:"Air masih diangkut melalui xilem di bahagian dalam batang."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah pertambahan diameter batang di atas gelang selepas 4 minggu?",b:0.6,tol:0.01,suf:"cm",u:"2.6 − 2.0 = 0.6 cm."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah purata pertambahan diameter di atas gelang setiap minggu?",b:0.15,tol:0.005,suf:"cm/minggu",u:"0.6 ÷ 4 = 0.15 cm seminggu."},
 {j:"pilih",t:"Berdasarkan Jadual 1, akar pokok bergelang akhirnya mati kerana:",p:["Tiada bekalan sukrosa","Tiada bekalan air","Terlalu banyak sukrosa","Terlalu banyak cahaya"],b:0,u:"Akar tidak berfotosintesis dan bergantung pada sukrosa dari daun."},
 {j:"pilih",t:"Dalam translokasi, daun matang bertindak sebagai:",p:["Sumber","Sinki","Penghalang","Pengurai"],b:0,u:"Daun menghasilkan sukrosa melalui fotosintesis."},
 {j:"pilih",t:"Pada musim berbunga, sinki utama ialah:",p:["Bunga dan buah","Daun yang matang","Akar yang tua","Kulit kayu batang"],b:0,u:"Buah yang sedang membesar menggunakan banyak sukrosa."},
 {j:"pilih",t:"Pokok pisang yang disuntik dengan pewarna di hujung daun menunjukkan pewarna sampai ke umbisi. Ini membuktikan:",p:["Translokasi","Transpirasi ke atas","Gutasi di tepi daun","Tekanan akar"],b:0,u:"Floem mengangkut bahan dari sumber ke sinki di bawah."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, jika gelang dibuat sangat dalam hingga xilem turut dibuang, ramalan PALING tepat:",p:["Daun layu dengan cepat","Batang membengkak lagi","Pokok tumbuh lebih laju","Akar menyimpan air"],b:0,u:"Bekalan air ke daun terputus."}},

{n:4, tempat:"Bilik Kadar", sk:"4.2 Menganalisis faktor kadar transpirasi", lampiran:"g1",
 kadNama:"Kelembapan Relatif", kadEm:"\u{1F32B}\u{FE0F}", kadFakta:"Kadar transpirasi berkurang apabila kelembapan relatif udara meningkat.",
 bosKadNama:"Kitar Harian", bosKadEm:"\u{1F31E}", bosKadFakta:"Kadar transpirasi biasanya paling tinggi pada tengah hari apabila cahaya dan suhu maksimum.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah kadar transpirasi pada kelembapan relatif 40%?",b:6,tol:0.1,suf:"g/jam",u:"Bacaan graf ialah 6 g sejam."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah penurunan kadar transpirasi dari kelembapan 20% hingga 80%?",b:8,tol:0.1,suf:"g/jam",u:"9 − 1 = 8 g sejam."},
 {j:"pilih",t:"Berdasarkan Rajah 2, hubungan kelembapan relatif dengan kadar transpirasi ialah:",p:["Berkadar songsang","Berkadar terus","Tiada hubungan","Malar"],b:0,u:"Semakin lembap udara, semakin rendah kadar transpirasi."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah transpirasi rendah pada kelembapan 80%?",p:["Udara hampir tepu","Stoma terbuka luas","Suhu tinggi","Angin kencang"],b:0,u:"Kecerunan kepekatan wap air antara daun dan udara sangat kecil."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah jumlah air hilang dalam 5 jam pada kelembapan 60%?",b:20,tol:0.2,suf:"g",u:"4 g/jam × 5 jam = 20 g."},
 {j:"pilih",t:"Berdasarkan Rajah 2, pada kelembapan manakah tumbuhan PALING berisiko layu jika air tanah kurang?",p:["20%","40%","60%","80%"],b:0,u:"Kadar kehilangan air paling tinggi."},
 {j:"pilih",t:"Angin meningkatkan kadar transpirasi kerana ia:",p:["Membawa pergi wap air","Menutup liang stoma","Menambah kelembapan udara","Menyejukkan akar"],b:0,u:"Kecerunan kepekatan wap air dikekalkan curam."},
 {j:"pilih",t:"Kadar transpirasi menurun pada waktu malam kerana:",p:["Stoma tertutup","Suhu meningkat","Angin bertambah","Kutikel nipis"],b:0,u:"Tanpa cahaya, kebanyakan stoma tertutup."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 2, penjual sayur menyembur air dan menutup sayur dengan kain lembap. Analisis PALING tepat:",p:["Kurangkan transpirasi","Tambah fotosintesis","Tambah respirasi","Galakkan gutasi"],b:0,u:"Kelembapan tinggi mengurangkan kehilangan air, jadi sayur tidak layu."}},

{n:5, tempat:"Taman Pemulih", sk:"4.4 Menilai fitoremediasi", lampiran:null,
 kadNama:"Fitoremediasi", kadEm:"\u{1F33E}", kadFakta:"Fitoremediasi menggunakan tumbuhan untuk menyerap atau menguraikan bahan pencemar daripada tanah dan air.",
 bosKadNama:"Keladi Bunting", bosKadEm:"\u{1F33A}", bosKadFakta:"Keladi bunting menyerap logam berat dan nutrien berlebihan daripada air tercemar.",
 soalan:[
 {j:"pilih",t:"Fitoremediasi bermaksud:",p:["Tumbuhan menyerap pencemar","Membakar tumbuhan yang tercemar","Menanam di tanah yang subur","Mencantum dua jenis tumbuhan"],b:0,u:"Tumbuhan menyerap, menyimpan atau menguraikan bahan pencemar."},
 {j:"pilih",t:"Tumbuhan akuatik yang sering digunakan untuk merawat air sisa kilang ialah:",p:["Keladi bunting","Pokok getah","Pokok durian","Pokok padi bukit"],b:0,u:"Ia menyerap logam berat dan nitrat."},
 {j:"pilih",t:"Bahan pencemar diangkut ke daun tumbuhan fitoremediasi melalui:",p:["Xilem","Floem","Stoma","Epidermis"],b:0,u:"Pencemar terlarut dibawa bersama aliran transpirasi."},
 {j:"pilih",t:"Kelebihan fitoremediasi berbanding kaedah kimia ialah:",p:["Kos rendah","Sangat cepat","Tanpa sebarang tumbuhan","Merosakkan tanah"],b:0,u:"Ia murah dan mesra alam, tetapi mengambil masa lama."},
 {j:"pilih",t:"Kelemahan utama fitoremediasi ialah:",p:["Proses perlahan","Kos sangat tinggi","Menambah pencemar","Tiada tumbuhan sesuai"],b:0,u:"Ia memerlukan beberapa musim pertumbuhan."},
 {j:"pilih",t:"Tumbuhan yang telah menyerap logam berat perlu:",p:["Dilupuskan dengan selamat","Dijadikan makanan ternakan","Dibiarkan reput","Dijual sebagai sayur"],b:0,u:"Logam berat boleh memasuki rantai makanan."},
 {j:"pilih",t:"Penilaian PALING tepat tentang menanam keladi bunting di kolam tasik bandar tanpa kawalan:",p:["Boleh menutupi tasik","Tiada risiko","Pasti menjernihkan air","Menambah ikan"],b:0,u:"Ia membiak cepat dan menghalang cahaya serta oksigen."},
 {j:"banyak",t:"Pilih DUA ciri tumbuhan yang sesuai untuk fitoremediasi.",p:["Tumbuh cepat","Tahan logam berat","Akar sangat pendek","Mudah mati"],b:[0,1],u:"Akar yang luas dan biojisim besar juga membantu."}],
 bos:{j:"pilih",t:"Sebuah majlis daerah mahu merawat air longkang pasar sebelum masuk ke sungai. Cadangan PALING sesuai:",p:["Tanah bencah buatan","Alirkan terus ke laut","Tutup longkang dengan simen","Tambah sabun ke dalam air"],b:0,u:"Tanah bencah dengan tumbuhan akuatik menyerap nutrien dan pencemar pada kos rendah."}},

{n:6, tempat:"Studio Aliran", sk:"4.1 hingga 4.4 Mereka cipta berasaskan pengangkutan tumbuhan", lampiran:null,
 kadNama:"Reka Potometer", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Potometer ringkas boleh dibina daripada picagari, tiub plastik dan pembaris.",
 bosKadNama:"Taman Rawatan", bosKadEm:"\u{1F4A1}", bosKadFakta:"Kolam rawatan berlapis dengan tumbuhan akuatik boleh menjernihkan air sisa sekolah.",
 soalan:[
 {j:"pilih",t:"Untuk menunjukkan laluan air dalam xilem, anda merendam batang saderi dalam:",p:["Air berwarna","Minyak masak","Air garam pekat","Gula pekat"],b:0,u:"Pewarna menandakan berkas vaskular dalam keratan rentas."},
 {j:"pilih",t:"Untuk membina potometer ringkas, tiub perlu:",p:["Lutsinar dan kedap udara","Berwarna hitam pekat","Bocor sedikit di hujung","Sangat lebar dan pendek"],b:0,u:"Gelembung udara perlu dapat dilihat dan diukur."},
 {j:"pilih",t:"Untuk membandingkan kadar transpirasi dua spesies, pemboleh ubah dimalarkan PALING penting:",p:["Luas permukaan daun","Jenis spesies tumbuhan","Nama saintifik spesies","Warna pasu yang digunakan"],b:0,u:"Luas daun mempengaruhi bilangan stoma."},
 {j:"pilih",t:"Anda mereka kolam rawatan air sisa makmal. Tumbuhan PALING sesuai:",p:["Keladi bunting","Kaktus padang pasir","Pokok kelapa dewasa","Pokok cili padi"],b:0,u:"Tumbuhan akuatik yang menyerap pencemar."},
 {j:"pilih",t:"Cara mengukur keberkesanan kolam rawatan anda:",p:["Uji air masuk dan keluar","Kira bilangan daun","Ukur tinggi pokok","Perhati warna langit"],b:0,u:"Bandingkan pH, kekeruhan atau nitrat sebelum dan selepas."},
 {j:"pilih",t:"Untuk mengekalkan bunga keratan lebih lama di dewan, anda boleh:",p:["Potong batang dalam air","Letak di bawah kipas","Buang air dalam pasu","Letak di bawah matahari"],b:0,u:"Mengelakkan udara masuk ke xilem dan mengurangkan transpirasi."},
 {j:"pilih",t:"Data kadar transpirasi lima keadaan paling jelas dibentangkan dengan:",p:["Carta palang","Senarai rawak","Lukisan pokok","Gambar sahaja"],b:0,u:"Carta palang membandingkan kategori berbeza."},
 {j:"banyak",t:"Pilih DUA langkah keselamatan semasa mengendalikan air tercemar.",p:["Pakai sarung tangan","Basuh tangan selepas","Minum sedikit air","Hidu air itu"],b:[0,1],u:"Air tercemar mungkin mengandungi bakteria dan bahan kimia."}],
 bos:{j:"buka",
  t:"Reka satu projek atau eksperimen berkaitan pengangkutan dalam tumbuhan untuk sekolah atau komuniti (contoh: potometer ringkas daripada picagari, kolam fitoremediasi untuk air sisa kantin, eksperimen saderi berwarna, kaedah memanjangkan hayat bunga keratan untuk majlis).",
  arahan:"Nyatakan tujuan, konsep pengangkutan yang terlibat (xilem, floem, transpirasi, translokasi atau fitoremediasi), bahan dan cara membina, pemboleh ubah yang dimanipulasi, bergerak balas dan dimalarkan, cara mengukur keberkesanan, SATU langkah keselamatan, dan SATU pertimbangan kos atau alam sekitar.",
  u:"Jawapan TP6 yang kukuh mengaitkan reka bentuk dengan mekanisme pengangkutan yang betul, mengawal pemboleh ubah, mengukur secara kuantitatif seperti jarak gelembung atau kepekatan pencemar, menjaga keselamatan, serta menilai kos rendah dan manfaat alam sekitar."}}
];

module.exports = {
  id:"b5b4", tingkatan:5, kod:"4.0 Pengangkutan dalam Tumbuhan",
  tajuk:"Sungai Hijau",
  subtajuk:"Biologi Ting. 5 · Bab 4 Pengangkutan dalam Tumbuhan",
  spi:SPI.b5b4,
  ulasan:{
   1:"{n} dapat mengingat kembali struktur xilem dan floem. Langkah seterusnya ialah menerangkan daya yang menaikkan air.",
   2:"{n} dapat menjelaskan tarikan transpirasi, tekanan akar dan tindakan kapilari. Perlu lebih latihan mentafsir eksperimen gelangan.",
   3:"{n} boleh mengaplikasikan eksperimen gelangan untuk menerangkan translokasi. Galakkan menganalisis graf kadar transpirasi.",
   4:"{n} mampu menganalisis faktor yang mempengaruhi kadar transpirasi. Seterusnya latih menilai fitoremediasi.",
   5:"{n} dapat menilai penggunaan fitoremediasi dalam alam sekitar. Sudah bersedia mereka projek pengangkutan tumbuhan.",
   6:"{n} berjaya mereka projek pengangkutan tumbuhan yang terancang dan boleh diukur. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pengangkutan dalam Tumbuhan. Cadangan: ulang hentian pertama dan rendam batang saderi dalam air berwarna."
  },
  lampiran:{
   a1:{jenis:"aliran", mod:"turun",
     nod:["Air diserap rambut akar","Air naik dalam xilem batang","Air masuk sel mesofil daun","?"],
     kapsyen:"Rajah 1 · Laluan air dari akar ke udara",
     alt:"Rajah aliran: air diserap rambut akar, naik dalam xilem batang, masuk sel mesofil daun, proses bertanda soal"},
   j1:jadual(1, "Diameter batang pokok bunga raya selepas gelangan",
     ["Minggu", "Di atas gelang (cm)", "Di bawah gelang (cm)", "Keadaan daun"],
     [["0","2.0","2.0","Segar"],["2","2.3","2.0","Segar"],["4","2.6","2.0","Segar"]]),
   g1:{jenis:"graf", x:[20,40,60,80], xLabel:"Kelembapan relatif (%)", titik:true, yMin:0, yMaks:10, grid:2,
     siri:[{label:"Kadar transpirasi (g/jam)", y:[9,6,4,1], warna:"hijau"}],
     kapsyen:"Rajah 2 · Kesan kelembapan relatif terhadap kadar transpirasi",
     alt:"Graf menurun: 9 g sejam pada 20%, 6 pada 40%, 4 pada 60% dan 1 pada 80% kelembapan relatif"}
  },
  aras:ARAS
};
