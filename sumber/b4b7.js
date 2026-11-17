/* Biologi KSSM Tingkatan 4, Bab 7 Respirasi Sel.
   SK 7.1 Penghasilan tenaga melalui respirasi sel, 7.2 Respirasi aerob, 7.3 Fermentasi (DSKP Biologi).
   Data respirometer dan asid laktik disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Loji Tenaga Sel", sk:"7.1 Penghasilan tenaga · 7.2 Respirasi aerob · 7.3 Fermentasi", lampiran:null,
 kadNama:"ATP", kadEm:"\u{1F50B}", kadFakta:"ATP (adenosina trifosfat) ialah molekul pembawa tenaga yang digunakan terus oleh sel.",
 bosKadNama:"Mitokondrion", bosKadEm:"\u{26A1}", bosKadFakta:"Respirasi aerob lengkap berlaku dalam mitokondrion dan menghasilkan 38 ATP bagi setiap molekul glukosa.",
 soalan:[
 {j:"pilih",t:"Respirasi aerob memerlukan glukosa dan:",p:["Oksigen","Karbon dioksida","Nitrogen","Klorofil"],b:0,u:"Glukosa dioksidakan sepenuhnya dengan kehadiran oksigen."},
 {j:"pilih",t:"Hasil respirasi aerob ialah:",p:["CO₂, air dan tenaga","Asid laktik dan tenaga","Etanol dan CO₂","Glukosa dan oksigen"],b:0,u:"C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + tenaga."},
 {j:"pilih",t:"Organel tempat berlakunya respirasi aerob ialah:",p:["Mitokondrion","Kloroplas","Ribosom","Vakuol"],b:0,u:"Mitokondrion dikenali sebagai penjana kuasa sel."},
 {j:"pilih",t:"Fermentasi dalam sel otot manusia menghasilkan:",p:["Asid laktik","Etanol","Kanji","Oksigen"],b:0,u:"Glukosa → asid laktik + tenaga (sedikit)."},
 {j:"pilih",t:"Fermentasi oleh yis menghasilkan:",p:["Etanol dan CO₂","Asid laktik","Air dan oksigen","Kanji dan air"],b:0,u:"Glukosa → etanol + karbon dioksida + tenaga."},
 {j:"pilih",t:"Fermentasi berlaku di bahagian sel yang manakah?",p:["Sitoplasma","Mitokondrion","Nukleus","Kloroplas"],b:0,u:"Fermentasi tidak melibatkan mitokondrion."},
 {j:"pilih",t:"Bilangan ATP bersih daripada fermentasi satu molekul glukosa ialah:",p:["2","38","36","0"],b:0,u:"Glukosa tidak dioksidakan sepenuhnya, jadi tenaga yang dibebaskan sedikit."},
 {j:"banyak",t:"Pilih DUA kegunaan tenaga daripada respirasi sel.",p:["Pengecutan otot","Pengangkutan aktif","Penyerapan cahaya","Osmosis"],b:[0,1],u:"Osmosis tidak memerlukan tenaga; cahaya diserap oleh klorofil."}],
 bos:{j:"pilih",t:"Mengapakah respirasi aerob membebaskan lebih banyak tenaga daripada fermentasi?",p:["Oksidasi lengkap","Fermentasi guna oksigen","Fermentasi lebih cepat","Etanol menyimpan ATP"],b:0,u:"Dalam fermentasi, banyak tenaga masih tersimpan dalam asid laktik atau etanol."}},

{n:2, tempat:"Gimnasium Sel", sk:"7.2 dan 7.3 Membandingkan respirasi aerob dan fermentasi", lampiran:null,
 kadNama:"Hutang Oksigen", kadEm:"\u{1F3C3}", kadFakta:"Selepas senaman cergas, oksigen tambahan diperlukan untuk mengoksidakan asid laktik yang terkumpul.",
 bosKadNama:"Kekejangan Otot", bosKadEm:"\u{1F9B5}", bosKadFakta:"Asid laktik yang terkumpul menyebabkan otot letih dan kejang.",
 soalan:[
 {j:"pilih",t:"Semasa pecutan 100 m, otot menjalankan fermentasi kerana:",p:["Kurang oksigen","Glukosa telah habis","Otot tiada mitokondrion","Suhu otot terlalu rendah"],b:0,u:"Keperluan tenaga melebihi bekalan oksigen ke otot."},
 {j:"pilih",t:"Mengapakah atlet bernafas laju walaupun telah berhenti berlari?",p:["Bayar hutang oksigen","Menyejukkan paru-paru","Menghasilkan lebih asid laktik","Mengurangkan denyutan jantung"],b:0,u:"Oksigen tambahan diperlukan untuk mengoksidakan asid laktik."},
 {j:"pilih",t:"Asid laktik yang terkumpul akhirnya dioksidakan kepada:",p:["CO₂ dan air","Etanol","Kanji","Protein"],b:0,u:"Sebahagian lagi ditukarkan semula kepada glukosa di hati."},
 {j:"pilih",t:"Perbezaan utama respirasi aerob dan fermentasi dari segi hasil ialah:",p:["Aerob hasilkan CO₂ dan air","Fermentasi hasilkan lebih ATP","Aerob hasilkan asid laktik","Kedua-duanya sama"],b:0,u:"Fermentasi otot menghasilkan asid laktik, bukan CO₂ dan air."},
 {j:"pilih",t:"Doh roti mengembang kerana yis menghasilkan:",p:["Karbon dioksida","Oksigen","Asid laktik","Wap air"],b:0,u:"Gelembung CO₂ terperangkap dalam doh."},
 {j:"pilih",t:"Bakteria dalam pembuatan tempe dan yogurt menjalankan:",p:["Fermentasi","Fotosintesis","Respirasi aerob","Osmosis"],b:0,u:"Bakteria asid laktik menghasilkan rasa masam yogurt."},
 {j:"pilih",t:"Pada tumbuhan yang akarnya tenggelam lama dalam air banjir, akar menjalankan fermentasi yang menghasilkan:",p:["Etanol","Asid laktik","Kanji","Oksigen"],b:0,u:"Etanol yang terkumpul boleh meracuni sel akar."},
 {j:"banyak",t:"Pilih DUA persamaan respirasi aerob dan fermentasi.",p:["Glukosa ialah substrat","Menghasilkan ATP","Memerlukan oksigen","Berlaku dalam mitokondrion"],b:[0,1],u:"Fermentasi tidak memerlukan oksigen dan berlaku dalam sitoplasma."}],
 bos:{j:"pilih",t:"Seorang pelari maraton berlari pada kelajuan sederhana selama 3 jam. Proses utama yang membekalkan tenaganya ialah:",p:["Respirasi aerob","Fermentasi alkohol","Fermentasi asid laktik","Fotosintesis"],b:0,u:"Pada kelajuan sederhana, bekalan oksigen mencukupi untuk respirasi aerob."}},

{n:3, tempat:"Makmal Respirometer", sk:"7.2 Mengaplikasikan eksperimen kadar respirasi", lampiran:"j1",
 kadNama:"Respirometer", kadEm:"\u{1F9EA}", kadFakta:"Larutan kalium hidroksida menyerap CO₂; pergerakan titisan berwarna menunjukkan oksigen yang digunakan.",
 bosKadNama:"Set Kawalan", bosKadEm:"\u{1F95C}", bosKadFakta:"Biji benih yang direbus tidak bernyawa dan menjadi set kawalan.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah jarak titisan berwarna bergerak dalam 25 minit bagi biji benih bercambah?",b:6,tol:0.05,suf:"cm",u:"Bacaan pada 25 minit ialah 6.0 cm."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung kadar respirasi biji benih bercambah.",b:0.24,tol:0.005,suf:"cm/min",u:"6.0 cm ÷ 25 min = 0.24 cm/min."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah titisan berwarna bergerak ke arah tabung biji benih?",p:["Oksigen digunakan","CO₂ dibebaskan","Air menyejat","Suhu naik"],b:0,u:"CO₂ diserap oleh KOH, jadi isi padu gas berkurang dan tekanan menurun."},
 {j:"pilih",t:"Fungsi larutan kalium hidroksida dalam respirometer ialah:",p:["Menyerap COâ‚‚","Membekalkan oksigen","Menyerap air","Membunuh biji benih"],b:0,u:"Tanpa KOH, CO₂ yang dibebaskan akan mengimbangi O₂ yang digunakan."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah titisan dalam set biji rebus tidak bergerak?",p:["Biji benih telah mati","KOH tidak berfungsi","Tiub tersumbat","Suhu terlalu tinggi"],b:0,u:"Biji rebus tidak menjalankan respirasi."},
 {j:"nombor",t:"Berdasarkan Jadual 1, jejari tiub kapilari 0.1 cm. Hitung isi padu oksigen yang digunakan dalam 25 minit (π = 3.14). Beri jawapan kepada 3 tempat perpuluhan.",b:0.188,tol:0.002,suf:"cm³",u:"V = πr²h = 3.14 × 0.1² × 6.0 = 0.188 cm³."},
 {j:"pilih",t:"Mengapakah respirometer diletakkan dalam kukus air bersuhu tetap?",p:["Suhu memberi kesan","Supaya biji benih basah","Mempercepat KOH","Membunuh bakteria"],b:0,u:"Perubahan suhu mengubah isi padu gas dan kadar respirasi."},
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah pemboleh ubah dimanipulasikan?",p:["Keadaan biji benih","Jarak titisan","Masa","Suhu kukus air"],b:0,u:"Biji bercambah berbanding biji rebus."}],
 bos:{j:"pilih",t:"Biji benih bercambah diganti dengan belalang yang sama jisim. Titisan bergerak lebih jauh. Kesimpulan PALING tepat:",p:["Belalang lebih aktif","Belalang tidak bernafas","Biji benih lebih aktif","KOH menyerap oksigen"],b:0,u:"Haiwan aktif memerlukan lebih banyak tenaga, jadi menggunakan lebih banyak O₂."}},

{n:4, tempat:"Bilik Graf Laktik", sk:"7.3 Menganalisis kesan senaman terhadap asid laktik", lampiran:"g1",
 kadNama:"Graf Laktik", kadEm:"\u{1F4C8}", kadFakta:"Kepekatan asid laktik naik semasa senaman cergas dan turun perlahan semasa rehat.",
 bosKadNama:"Latihan Atlet", bosKadEm:"\u{1F3C5}", bosKadFakta:"Latihan berterusan meningkatkan bekalan darah dan mitokondrion otot, jadi kurang asid laktik terhasil.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah kepekatan asid laktik maksimum?",b:10,tol:0.2,suf:"mmol/L",u:"Puncak 10 mmol/L pada minit ke-20."},
 {j:"nombor",t:"Berdasarkan Rajah 1, senaman berhenti pada minit ke-20. Berapakah masa diambil untuk asid laktik kembali ke 1 mmol/L selepas senaman berhenti?",b:40,tol:0.5,suf:"min",u:"Dari minit 20 hingga minit 60 = 40 minit."},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah asid laktik meningkat dari minit 0 hingga 20?",p:["Fermentasi otot","Otot rehat sepenuhnya","Oksigen berlebihan","Hati hasilkan laktik"],b:0,u:"Bekalan oksigen tidak mencukupi semasa senaman cergas."},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah asid laktik menurun selepas minit ke-20?",p:["Ia dioksidakan","Ia disimpan di otot","Ia ditukar menjadi lemak","Ia keluar melalui peluh"],b:0,u:"Oksigen hutang digunakan untuk mengoksidakan asid laktik."},
 {j:"nombor",t:"Berdasarkan Rajah 1, hitung kadar purata penurunan asid laktik dari minit 20 hingga 40.",b:0.25,tol:0.01,suf:"mmol/L per min",u:"(10 − 5) ÷ 20 = 0.25 mmol/L per minit."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bagaimanakah graf berubah bagi atlet yang terlatih?",p:["Puncak lebih rendah","Puncak lebih tinggi","Tiada penurunan","Puncak pada minit 0"],b:0,u:"Otot terlatih menerima lebih banyak oksigen dan kurang bergantung pada fermentasi."},
 {j:"pilih",t:"Berdasarkan Rajah 1, pada minit ke-30 kadar pernafasan individu itu dijangka:",p:["Masih tinggi","Lebih rendah daripada biasa","Sifar","Sama seperti semasa tidur"],b:0,u:"Hutang oksigen masih dibayar."},
 {j:"pilih",t:"Data Rajah 1 diambil sekali sahaja daripada seorang murid. Kelemahan utama ialah:",p:["Kurang dipercayai","Graf terlalu kecil","Unit salah","Masa terlalu lama"],b:0,u:"Ulangan dan sampel lebih besar diperlukan untuk kebolehpercayaan."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, mengapakah jurulatih menyarankan regangan ringan dan bukan duduk diam selepas senaman cergas?",p:["Laktik dibuang darah","Menambah asid laktik","Menghentikan pernafasan","Menurunkan suhu badan serta-merta"],b:0,u:"Aktiviti ringan mengekalkan aliran darah yang membawa oksigen dan membuang asid laktik."}},

{n:5, tempat:"Kilang Fermentasi", sk:"7.3 Menilai aplikasi respirasi dan fermentasi", lampiran:null,
 kadNama:"Bioteknologi Tradisional", kadEm:"\u{1F35E}", kadFakta:"Tapai, tempe, roti, yogurt dan budu dihasilkan melalui fermentasi mikroorganisma.",
 bosKadNama:"Biogas", bosKadEm:"\u{1F525}", bosKadFakta:"Bakteria anaerob menguraikan sisa organik dan menghasilkan metana sebagai bahan api.",
 soalan:[
 {j:"pilih",t:"Mengapakah tapai pulut berasa manis dan sedikit beralkohol?",p:["Yis menapai gula","Pulut direbus lama","Gula ditambah banyak","Bakteria menghasilkan protein"],b:0,u:"Kulat dan yis menukar kanji kepada gula, kemudian sebahagian kepada etanol."},
 {j:"pilih",t:"Mengapakah doh roti diletakkan di tempat suam sebelum dibakar?",p:["Yis lebih aktif","Doh mudah dipotong","Gula larut sepenuhnya","Membunuh bakteria"],b:0,u:"Enzim yis berfungsi optimum pada suhu suam."},
 {j:"pilih",t:"Alkohol dalam doh roti hilang semasa membakar kerana:",p:["Etanol tersejat","Etanol ditukar kepada gula","Etanol diserap tepung","Etanol menjadi CO₂"],b:0,u:"Takat didih etanol rendah, jadi ia tersejat semasa dibakar."},
 {j:"pilih",t:"Kilang biogas di ladang lembu menggunakan bakteria anaerob. Kelebihan utamanya:",p:["Sisa jadi tenaga","Lembu membesar cepat","Rumput tumbuh subur","Air sungai bertambah"],b:0,u:"Metana dijana daripada najis dan mengurangkan pencemaran."},
 {j:"pilih",t:"Seorang usahawan mahu memasarkan minuman kombucha. Risiko utama yang perlu dikawal ialah:",p:["Pencemaran kulat","Rasa terlalu manis","Warna kurang terang","Botol terlalu besar"],b:0,u:"Fermentasi yang tidak bersih boleh mencemari minuman dengan mikroorganisma berbahaya."},
 {j:"pilih",t:"Mengapakah tanaman berisiko rosak jika air banjir bertakung lama di kawasan akarnya?",p:["Akar kekurangan oksigen","Akar mendapat cahaya berlebihan","Daun menyerap terlalu banyak CO₂","Akar menyerap terlalu banyak oksigen"],b:0,u:"Akar menjalankan fermentasi dan etanol meracuni sel."},
 {j:"pilih",t:"Penilaian PALING tepat tentang penggunaan bioetanol daripada tebu sebagai bahan api:",p:["Boleh diperbaharui","Tidak boleh diperbaharui","Tiada kesan alam sekitar","Lebih mencemar daripada arang batu"],b:0,u:"Bioetanol boleh diperbaharui, tetapi penanaman tebu bersaing dengan tanaman makanan."},
 {j:"banyak",t:"Pilih DUA makanan tempatan yang dihasilkan melalui fermentasi.",p:["Tempe","Budu","Keropok lekor","Kuih bahulu"],b:[0,1],u:"Tempe ditapai kulat; budu ditapai bersama garam."}],
 bos:{j:"pilih",t:"Sekolah mahu memproses sisa makanan kantin. Cadangan manakah PALING seimbang dari segi alam sekitar dan kos?",p:["Pencerna biogas kecil","Buang ke sungai","Bakar terbuka setiap hari","Tanam sisa di padang"],b:0,u:"Biogas mengurangkan sisa dan menghasilkan tenaga untuk memasak."}},

{n:6, tempat:"Studio Reka Fermentasi", sk:"7.1 hingga 7.3 Mereka cipta berasaskan respirasi sel", lampiran:null,
 kadNama:"Reka Produk", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Produk fermentasi berjaya bergantung pada suhu, kebersihan, masa dan jenis mikroorganisma.",
 bosKadNama:"Reka Cipta Respirasi", bosKadEm:"\u{1F4A1}", bosKadFakta:"Pencerna biogas mini atau produk tapai boleh menjadi projek keusahawanan sains.",
 soalan:[
 {j:"pilih",t:"Anda mereka pencerna biogas mini daripada botol plastik. Keadaan manakah PALING penting?",p:["Bekas kedap udara","Bekas terbuka luas","Didedah sinar UV","Diisi pasir kering"],b:0,u:"Bakteria metanogen anaerob memerlukan keadaan tanpa oksigen."},
 {j:"pilih",t:"Bagaimanakah anda mengukur hasil gas pencerna biogas anda?",p:["Isi padu gas","Bau bekas pencerna","Warna sisa makanan","Berat botol kosong"],b:0,u:"Isi padu gas boleh diukur dengan sesaran air atau belon."},
 {j:"pilih",t:"Anda mahu menguji suhu terbaik untuk yis dalam doh roti. Pemboleh ubah dimalarkan ialah:",p:["Jisim yis","Suhu air","Tinggi doh","Bacaan masa berbeza"],b:0,u:"Hanya suhu dimanipulasikan."},
 {j:"pilih",t:"Data manakah PALING sesuai untuk menilai aktiviti yis?",p:["Tinggi doh","Warna tepung gandum","Bau pada tangan","Harga sebungkus yis"],b:0,u:"Kenaikan isi padu doh menunjukkan penghasilan CO₂."},
 {j:"pilih",t:"Anda mereka yogurt buatan sendiri. Langkah kebersihan PALING penting:",p:["Rebus bekas dan susu","Biarkan bekas terbuka","Guna sudu kotor","Simpan di bawah matahari"],b:0,u:"Mensteril mengelakkan bakteria pencemar."},
 {j:"pilih",t:"Untuk merancang program latihan kecergasan yang mengurangkan kekejangan otot, cadangan anda ialah:",p:["Intensiti beransur","Lari pecut tanpa rehat","Elak minum air","Latihan sekali sebulan"],b:0,u:"Latihan beransur meningkatkan kapasiti aerob otot."},
 {j:"pilih",t:"Bagaimanakah anda menunjukkan bahawa CO₂ terhasil semasa fermentasi yis?",p:["Alir gas ke air kapur","Uji dengan iodin","Uji dengan Benedict","Hidu bau gas"],b:0,u:"Air kapur menjadi keruh dengan CO₂."},
 {j:"banyak",t:"Pilih DUA faktor yang perlu dikawal dalam projek tapai anda untuk dijual.",p:["Kebersihan alat","Suhu peraman","Warna daun pembalut","Bentuk bekas plastik"],b:[0,1],u:"Kebersihan dan keadaan peraman menentukan mutu dan keselamatan."}],
 bos:{j:"buka",
  t:"Reka satu produk atau sistem berasaskan respirasi sel atau fermentasi untuk komuniti (contoh: pencerna biogas sisa kantin, produk tapai atau yogurt untuk dijual, program latihan kecergasan berdasarkan hutang oksigen).",
  arahan:"Nyatakan tujuan, proses respirasi yang terlibat beserta persamaan perkataan, organisma atau sel yang menjalankannya, keadaan yang perlu dikawal (oksigen, suhu, masa, kebersihan) beserta sebab, cara mengukur keberkesanan dengan data, SATU langkah keselamatan, dan SATU pertimbangan kos, halal atau budaya tempatan.",
  u:"Jawapan TP6 yang kukuh menyatakan persamaan respirasi yang betul, mengawal keadaan aerob atau anaerob dengan tepat, mencadangkan pengukuran seperti isi padu gas atau kepekatan asid laktik, menjaga kebersihan, serta mengambil kira kos, status halal dan penerimaan komuniti."}}
];

module.exports = {
  id:"b4b7", tingkatan:4, kod:"7.0 Respirasi Sel",
  tajuk:"Enjin Tenaga",
  subtajuk:"Biologi Ting. 4 · Bab 7 Respirasi Sel",
  spi:SPI.b4b7,
  ulasan:{
   1:"{n} dapat mengingat kembali bahan, hasil dan tempat respirasi aerob serta fermentasi. Langkah seterusnya ialah membandingkan kedua-dua proses.",
   2:"{n} dapat membandingkan respirasi aerob dan fermentasi serta menerangkan hutang oksigen. Perlu lebih latihan mentafsir data respirometer.",
   3:"{n} boleh mengaplikasikan data respirometer untuk mengira kadar respirasi. Galakkan menganalisis graf asid laktik.",
   4:"{n} mampu menganalisis perubahan asid laktik semasa dan selepas senaman. Seterusnya latih menilai aplikasi fermentasi.",
   5:"{n} dapat menilai aplikasi fermentasi dan biogas dalam kehidupan. Sudah bersedia mereka produk berasaskan respirasi.",
   6:"{n} berjaya mereka produk atau sistem berasaskan respirasi dengan kawalan keadaan yang tepat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Respirasi Sel. Cadangan: ulang hentian pertama dan perhatikan doh roti mengembang di dapur."
  },
  lampiran:{
   j1:jadual(1, "Jarak pergerakan titisan berwarna dalam respirometer",
     ["Masa (min)", "Biji benih bercambah (cm)", "Biji benih direbus (cm)"],
     [["0","0.0","0.0"],["5","1.2","0.0"],["10","2.4","0.0"],["15","3.6","0.0"],["20","4.8","0.0"],["25","6.0","0.0"]]),
   g1:{jenis:"graf", x:[0,10,20,30,40,50,60], xLabel:"Masa (min)", titik:true, yMin:0, yMaks:12, grid:6,
     siri:[{label:"Asid laktik darah (mmol/L)", y:[1,6,10,8,5,3,1], warna:"ungu"}],
     kapsyen:"Rajah 1 · Graf kepekatan asid laktik dalam darah; senaman cergas dari minit 0 hingga 20",
     alt:"Graf naik dari 1 pada minit 0 ke puncak 10 pada minit 20, kemudian menurun ke 8, 5, 3 dan 1 pada minit 60"}
  },
  aras:ARAS
};
