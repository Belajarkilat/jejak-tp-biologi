/* Biologi KSSM Tingkatan 4, Bab 3 Pergerakan Bahan Merentasi Membran Plasma.
   SK 3.1 Struktur membran plasma, 3.2 Konsep pergerakan bahan, 3.3 Pergerakan bahan dalam organisma hidup,
   3.4 Aplikasi dalam kehidupan harian (DSKP Biologi, dskp/biologi-en.pdf). Data disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Pintu Membran", sk:"3.1 Struktur membran plasma · 3.2 Konsep pergerakan bahan", lampiran:null,
 kadNama:"Model Mozek Bendalir", kadEm:"\u{1F9F1}", kadFakta:"Membran plasma terdiri daripada dwilapisan fosfolipid dengan protein yang terbenam, seperti mozek yang boleh bergerak.",
 bosKadNama:"Separa Telap", bosKadEm:"\u{1F6AA}", bosKadFakta:"Membran plasma separa telap: membenarkan molekul kecil seperti air dan oksigen melaluinya, tetapi menghalang molekul besar.",
 soalan:[
 {j:"pilih",t:"Komponen utama membran plasma ialah:",p:["Fosfolipid","Selulosa tegar","Kanji bercabang","Kitin keras"],b:0,u:"Fosfolipid mempunyai kepala hidrofilik dan ekor hidrofobik."},
 {j:"pilih",t:"Resapan ringkas ialah pergerakan molekul:",p:["Tinggi ke rendah","Rendah ke tinggi","Menggunakan tenaga ATP","Melalui pam protein khas"],b:0,u:"Resapan ringkas mengikut kecerunan kepekatan tanpa tenaga."},
 {j:"pilih",t:"Osmosis ialah resapan bersih:",p:["Air melalui membran separa telap","Glukosa melalui protein pembawa","Ion melawan kecerunan kepekatan","Molekul besar ke dalam vesikel"],b:0,u:"Air bergerak dari larutan hipotonik ke larutan hipertonik."},
 {j:"pilih",t:"Pengangkutan aktif memerlukan:",p:["Tenaga ATP","Cahaya","Klorofil","Air suling"],b:0,u:"Pengangkutan aktif menggerakkan bahan melawan kecerunan kepekatan."},
 {j:"pilih",t:"Larutan yang mempunyai kepekatan zat terlarut lebih tinggi daripada sap sel ialah larutan:",p:["Hipertonik","Hipotonik","Isotonik","Neutral"],b:0,u:"Sel dalam larutan hipertonik kehilangan air."},
 {j:"pilih",t:"Resapan berbantu melibatkan:",p:["Protein pembawa","Pam natrium-kalium","Pembentukan vesikel","Tenaga dari ATP"],b:0,u:"Resapan berbantu mengikut kecerunan kepekatan tanpa tenaga."},
 {j:"pilih",t:"Molekul manakah boleh meresap terus melalui dwilapisan fosfolipid?",p:["Oksigen","Kanji","Protein","Glukosa"],b:0,u:"Molekul kecil tidak berkutub seperti O₂ dan CO₂ meresap terus."},
 {j:"banyak",t:"Pilih DUA proses yang TIDAK memerlukan tenaga.",p:["Osmosis","Resapan berbantu","Pengangkutan aktif","Pinositosis"],b:[0,1],u:"Pengangkutan aktif dan pinositosis menggunakan ATP."}],
 bos:{j:"pilih",t:"Sel darah merah diletakkan dalam air suling. Apakah yang berlaku?",p:["Sel pecah","Sel mengecut dan berkedut","Sel kekal tidak berubah","Sel menjadi plasmolisis"],b:0,u:"Air masuk secara osmosis; sel haiwan tiada dinding sel lalu hemolisis."}},

{n:2, tempat:"Kolam Osmosis", sk:"3.2 dan 3.3 Pergerakan bahan dalam sel haiwan dan tumbuhan", lampiran:null,
 kadNama:"Plasmolisis", kadEm:"\u{1F96C}", kadFakta:"Dalam larutan hipertonik, vakuol sel tumbuhan kehilangan air dan membran plasma tertarik dari dinding sel.",
 bosKadNama:"Segah", bosKadEm:"\u{1F33F}", bosKadFakta:"Sel tumbuhan dalam larutan hipotonik menjadi segah kerana dinding sel menahan tekanan.",
 soalan:[
 {j:"pilih",t:"Sel daun diletakkan dalam larutan garam pekat. Apakah yang diperhatikan?",p:["Plasmolisis","Hemolisis","Krenasi","Sel menjadi segah"],b:0,u:"Air keluar dari vakuol; membran plasma tertarik dari dinding sel."},
 {j:"pilih",t:"Sel tumbuhan tidak pecah dalam air suling kerana:",p:["Ada dinding sel","Vakuol menolak air keluar","Membran tidak telap air","Sitoplasma mengeras"],b:0,u:"Dinding sel yang tegar mencegah sel daripada pecah."},
 {j:"pilih",t:"Sel darah merah dalam larutan hipertonik mengalami:",p:["Krenasi","Hemolisis","Plasmolisis","Deplasmolisis"],b:0,u:"Sel kehilangan air dan mengecut dengan permukaan berkedut."},
 {j:"pilih",t:"Sel yang mengalami plasmolisis dipindahkan ke dalam air suling. Proses yang berlaku ialah:",p:["Deplasmolisis","Hemolisis","Krenasi","Fagositosis"],b:0,u:"Air masuk semula; sel kembali segah jika belum mati."},
 {j:"pilih",t:"Penyerapan ion mineral oleh rambut akar melawan kecerunan kepekatan berlaku secara:",p:["Pengangkutan aktif","Osmosis","Resapan ringkas","Resapan berbantu"],b:0,u:"Kepekatan ion dalam sap sel lebih tinggi, jadi tenaga diperlukan."},
 {j:"pilih",t:"Pertukaran gas di alveolus berlaku secara:",p:["Resapan ringkas","Pengangkutan aktif","Osmosis","Endositosis"],b:0,u:"O₂ meresap ke darah dan CO₂ meresap keluar mengikut kecerunan."},
 {j:"pilih",t:"Sel darah putih menelan bakteria melalui:",p:["Fagositosis","Osmosis","Resapan ringkas","Pemindahan pasif"],b:0,u:"Fagositosis ialah sejenis endositosis untuk zarah besar."},
 {j:"banyak",t:"Pilih DUA keadaan yang menyebabkan sel tumbuhan layu.",p:["Disiram larutan baja pekat","Kekurangan air tanah","Disiram air hujan","Berada dalam larutan hipotonik"],b:[0,1],u:"Kedua-duanya menyebabkan sel kehilangan air dan tekanan segah berkurang."}],
 bos:{j:"pilih",t:"Mengapakah pesakit diberi infusi garam isotonik (0.9% NaCl), bukan air suling?",p:["Sel darah tidak pecah","Air suling terlalu mahal","Garam memberi tenaga","Isotonik lebih sejuk"],b:0,u:"Larutan isotonik tidak menyebabkan pergerakan air bersih ke dalam atau keluar sel darah."}},

{n:3, tempat:"Makmal Kentang", sk:"3.3 Mengaplikasikan konsep osmosis dalam eksperimen", lampiran:"j1",
 kadNama:"Peratus Perubahan", kadEm:"\u{1F954}", kadFakta:"Peratus perubahan jisim = (jisim akhir − jisim awal) ÷ jisim awal × 100%.",
 bosKadNama:"Isotonik", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Pada kepekatan isotonik, jisim jaringan tidak berubah kerana tiada osmosis bersih.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung peratus perubahan jisim jalur kentang dalam air suling (0.0 M).",b:15,tol:0.1,suf:"%",u:"(5.75 − 5.00) ÷ 5.00 × 100% = +15%."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung peratus perubahan jisim dalam larutan sukrosa 0.8 M.",b:-10,tol:0.1,suf:"%",u:"(4.50 − 5.00) ÷ 5.00 × 100% = −10%."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah jisim kentang bertambah dalam air suling?",p:["Air masuk secara osmosis","Sukrosa masuk ke dalam sel","Kentang menghasilkan air","Air keluar secara osmosis"],b:0,u:"Air suling hipotonik berbanding sap sel kentang."},
 {j:"pilih",t:"Berdasarkan Jadual 1, larutan 1.0 M adalah ___ berbanding sap sel kentang.",p:["Hipertonik","Hipotonik","Isotonik","Neutral"],b:0,u:"Jisim berkurang, jadi air keluar ke larutan yang lebih pekat."},
 {j:"pilih",t:"Berdasarkan Jadual 1, antara kepekatan manakah terletaknya kepekatan sap sel kentang?",p:["0.4 M dan 0.6 M","0.0 M dan 0.2 M","0.8 M dan 1.0 M","0.2 M dan 0.4 M"],b:0,u:"Jisim bertukar daripada bertambah (0.4 M) kepada berkurang (0.6 M)."},
 {j:"pilih",t:"Mengapakah jalur kentang dikeringkan dengan kertas turas sebelum ditimbang?",p:["Buang air di permukaan","Mempercepat osmosis","Menambah jisim jalur","Membunuh sel kentang"],b:0,u:"Air di permukaan menambah bacaan jisim secara palsu."},
 {j:"pilih",t:"Berdasarkan Jadual 1, pemboleh ubah manakah dimalarkan?",p:["Saiz awal jalur kentang","Kepekatan sukrosa","Jisim akhir jalur","Peratus perubahan"],b:0,u:"Saiz, jisim awal, masa rendaman dan suhu dimalarkan."},
 {j:"pilih",t:"Jalur kentang dalam 1.0 M menjadi lembik. Ini kerana sel-selnya:",p:["Kehilangan segah","Menjadi lebih segah","Menyerap sukrosa","Membahagi dengan cepat"],b:0,u:"Sel mengalami plasmolisis dan kehilangan tekanan segah."}],
 bos:{j:"nombor",t:"Berdasarkan Jadual 1, hitung peratus perubahan jisim dalam larutan 0.4 M.",b:2,tol:0.1,suf:"%",u:"(5.10 − 5.00) ÷ 5.00 × 100% = +2%."}},

{n:4, tempat:"Bilik Graf Osmosis", sk:"3.3 Menganalisis data osmosis", lampiran:"g1",
 kadNama:"Titik Isotonik", kadEm:"\u{1F4C9}", kadFakta:"Kepekatan sap sel dianggar dari titik graf memotong garis 0% perubahan jisim.",
 bosKadNama:"Tisu Berbeza", bosKadEm:"\u{1F955}", bosKadFakta:"Tisu berbeza mempunyai kepekatan sap sel berbeza, jadi titik isotoniknya juga berbeza.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 1, anggarkan kepekatan sukrosa yang isotonik dengan sap sel kentang. Beri jawapan kepada 2 tempat perpuluhan.",b:0.5,tol:0.03,suf:"M",u:"Graf memotong 0% di tengah-tengah antara 0.4 M (+4%) dan 0.6 M (−4%), iaitu 0.50 M."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah peratus perubahan jisim pada 0.6 M?",b:-4,tol:0.2,suf:"%",u:"Graf menunjukkan −4% pada 0.6 M."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah hubungan antara kepekatan sukrosa dan peratus perubahan jisim?",p:["Kepekatan naik, jisim turun","Kepekatan naik, jisim naik","Tiada sebarang hubungan","Jisim kekal tidak berubah"],b:0,u:"Semakin pekat larutan, semakin banyak air keluar dari sel."},
 {j:"pilih",t:"Berdasarkan Rajah 1, larutan manakah menyebabkan deplasmolisis jika jalur yang telah plasmolisis direndam semula?",p:["0.0 M","0.8 M","1.0 M","0.6 M"],b:0,u:"Larutan hipotonik membolehkan air masuk semula."},
 {j:"pilih",t:"Eksperimen yang sama dijalankan dengan lobak merah. Graf memotong 0% pada 0.3 M. Kesimpulannya:",p:["Sap lobak lebih cair","Sap sel lobak lebih pekat","Kedua-dua sap sama pekat","Lobak tidak mengalami osmosis"],b:0,u:"Titik isotonik yang lebih rendah bermakna sap sel lebih cair."},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah perubahan jisim tidak berterusan menurun selepas suatu tahap jika masa rendaman dipanjangkan?",p:["Keseimbangan dicapai","Sel menghasilkan sukrosa","Dinding sel larut","Membran menjadi telap penuh"],b:0,u:"Apabila kepekatan dalam dan luar sel seimbang, osmosis bersih berhenti."},
 {j:"pilih",t:"Berdasarkan Rajah 1, ralat manakah PALING mungkin menyebabkan bacaan 0.2 M terlalu tinggi?",p:["Jalur tidak dikeringkan","Jalur dikeringkan terlalu lama","Masa rendaman terlalu pendek","Bikar terlalu besar"],b:0,u:"Air di permukaan menambah jisim akhir."},
 {j:"pilih",t:"Bagaimanakah ketepatan titik isotonik dalam Rajah 1 boleh ditingkatkan?",p:["Uji 0.40 hingga 0.60 M, sela kecil","Uji 0.0 M dan 1.0 M","Gunakan satu jalur kentang","Kurangkan masa rendaman"],b:0,u:"Lebih banyak titik berhampiran 0% memberi anggaran yang lebih tepat."}],
 bos:{j:"pilih",t:"Petani menyiram baja kimia berlebihan dan tanaman menjadi layu. Berdasarkan konsep Rajah 1, penjelasan PALING tepat ialah:",p:["Tanah hipertonik, air keluar","Larutan tanah hipotonik, akar pecah","Baja menutup stoma daun","Baja memberi terlalu banyak tenaga"],b:0,u:"Air bergerak keluar dari sel akar ke tanah yang lebih pekat."}},

{n:5, tempat:"Dapur Sains", sk:"3.4 Menilai aplikasi pergerakan bahan dalam kehidupan harian", lampiran:null,
 kadNama:"Pengawetan", kadEm:"\u{1F9C2}", kadFakta:"Garam dan gula pekat mengawet makanan kerana mikroorganisma kehilangan air secara osmosis.",
 bosKadNama:"Dialisis", bosKadEm:"\u{1FA7A}", bosKadFakta:"Mesin dialisis menggunakan membran separa telap untuk membuang urea dari darah pesakit buah pinggang.",
 soalan:[
 {j:"pilih",t:"Mengapakah ikan masin tahan lama?",p:["Bakteria kehilangan air","Garam membekalkan oksigen","Ikan menyerap lebih banyak air","Garam menambah protein"],b:0,u:"Persekitaran hipertonik menyebabkan mikroorganisma terplasmolisis dan tidak membiak."},
 {j:"pilih",t:"Sayur yang layu menjadi segar semula selepas direndam dalam air sejuk kerana:",p:["Sel menyerap air","Sel kehilangan air","Air sejuk membunuh kuman","Klorofil bertambah"],b:0,u:"Air masuk secara osmosis dan sel menjadi segah semula."},
 {j:"pilih",t:"Mengapakah minuman isotonik sesuai selepas bersenam lama?",p:["Ganti air dan garam","Mengandungi kafein tinggi","Menghentikan peluh","Mengandungi lemak tinggi"],b:0,u:"Larutan isotonik diserap dengan cepat tanpa mengganggu keseimbangan osmosis."},
 {j:"pilih",t:"Membran dialisis membenarkan urea melalui tetapi menahan sel darah. Ini kerana membran itu:",p:["Separa telap","Telap sepenuhnya","Tidak telap langsung","Bercas positif"],b:0,u:"Saiz liang membenarkan molekul kecil sahaja melaluinya."},
 {j:"pilih",t:"Mengapakah cecair dialisis mengandungi glukosa pada kepekatan yang sama dengan darah?",p:["Glukosa darah tidak hilang","Membunuh bakteria darah","Mewarnakan cecair","Menambah urea"],b:0,u:"Tiada kecerunan kepekatan glukosa, jadi glukosa kekal dalam darah."},
 {j:"pilih",t:"Seorang peniaga menabur garam pada jeruk mangga. Penilaian PALING tepat tentang kesannya:",p:["Air keluar dari buah","Air masuk, buah lebih lembik","Garam memusnahkan dinding sel","Tiada osmosis berlaku"],b:0,u:"Air keluar dari sel buah, membantu pengawetan."},
 {j:"pilih",t:"Mangsa kapal karam dinasihatkan tidak meminum air laut. Sebab utama:",p:["Air laut hipertonik","Air laut terlalu sejuk","Air laut tiada garam","Air laut kaya tenaga"],b:0,u:"Meminum air laut menyebabkan sel kehilangan air dan memburukkan dehidrasi."},
 {j:"banyak",t:"Pilih DUA aplikasi osmosis dalam kehidupan harian.",p:["Membuat jeruk buah","Menyegarkan sayur layu","Menggoreng ikan","Membakar roti"],b:[0,1],u:"Kedua-duanya bergantung pada pergerakan air merentasi membran."}],
 bos:{j:"pilih",t:"Sebuah syarikat mencadangkan menyiram tanaman di kawasan pantai dengan air laut untuk menjimatkan air tawar. Keputusan PALING wajar ialah:",p:["Tolak; tanaman akan layu","Terima; air laut kaya nutrien","Terima; garam membunuh rumpai","Terima; jimat kos air"],b:0,u:"Air laut hipertonik menarik air keluar dari akar, kecuali bagi tumbuhan halofit."}},

{n:6, tempat:"Studio Reka Membran", sk:"3.1 hingga 3.4 Mereka cipta berasaskan pergerakan bahan", lampiran:null,
 kadNama:"Model Membran", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Tiub Visking boleh digunakan sebagai model membran separa telap.",
 bosKadNama:"Reka Cipta Osmosis", bosKadEm:"\u{1F4A1}", bosKadFakta:"Penapis air ringkas dan pengawet makanan tradisional menggunakan prinsip pergerakan bahan.",
 soalan:[
 {j:"pilih",t:"Anda mahu menunjukkan osmosis kepada rakan. Bahan manakah PALING sesuai sebagai model membran?",p:["Tiub Visking","Beg plastik tebal","Kain kapas","Kertas aluminium"],b:0,u:"Tiub Visking separa telap seperti membran plasma."},
 {j:"pilih",t:"Dalam model anda, tiub Visking berisi larutan sukrosa direndam dalam air. Apakah yang akan diperhatikan?",p:["Tiub mengembang","Tiub mengecut","Tiub tidak berubah","Sukrosa keluar dari tiub"],b:0,u:"Air masuk secara osmosis; sukrosa terlalu besar untuk keluar."},
 {j:"pilih",t:"Untuk menguji kehadiran glukosa yang meresap keluar dari tiub Visking, ujian manakah sesuai?",p:["Ujian Benedict","Ujian iodin","Ujian Biuret","Ujian etanol"],b:0,u:"Larutan Benedict menghasilkan mendakan merah bata dengan gula penurun."},
 {j:"pilih",t:"Anda mereka cara mengawet buah tempatan untuk dijual. Kaedah manakah berasaskan osmosis?",p:["Rendam dalam sirap pekat","Simpan dalam peti sejuk","Bungkus dengan plastik","Jemur di bawah lampu"],b:0,u:"Sirap pekat hipertonik menarik air keluar dari mikroorganisma."},
 {j:"pilih",t:"Untuk memastikan keputusan model osmosis anda boleh dipercayai, apakah yang perlu dilakukan?",p:["Ulang, ada set kawalan","Gunakan satu tiub sahaja","Tukar kepekatan setiap kali","Abaikan suhu bilik"],b:0,u:"Set kawalan dengan air dalam tiub menunjukkan tiada osmosis bersih."},
 {j:"pilih",t:"Bagaimanakah anda mengukur kadar osmosis dalam model tiub Visking dengan tepat?",p:["Ukur aras tiub kapilari","Perhati warna tiub Visking","Rasa larutan dalam tiub","Hidu bau larutan dalam tiub"],b:0,u:"Tiub kapilari menunjukkan perubahan isi padu dengan jelas."},
 {j:"pilih",t:"Anda mereka minuman sukan untuk pasukan sekolah. Kepekatan manakah PALING sesuai?",p:["Isotonik dengan darah","Sangat hipertonik","Air suling tulen","Garam sangat pekat"],b:0,u:"Minuman isotonik diserap dengan cepat dan mengganti elektrolit."},
 {j:"banyak",t:"Pilih DUA data yang perlu direkod untuk menilai keberkesanan kaedah pengawetan buah anda.",p:["Hari sebelum buah rosak","Perubahan jisim buah","Warna bungkusan buah itu","Harga bekas plastik di kedai"],b:[0,1],u:"Jangka hayat dan kehilangan air menunjukkan keberkesanan pengawetan."}],
 bos:{j:"buka",
  t:"Reka satu produk atau kaedah berasaskan pergerakan bahan merentasi membran untuk kegunaan komuniti (contoh: pengawet buah tempatan, minuman isotonik buatan sendiri, model penapis air ringkas, alat demonstrasi dialisis).",
  arahan:"Nyatakan tujuan, proses pergerakan bahan yang terlibat (resapan, osmosis atau pengangkutan aktif), bahan dan kepekatan larutan yang dipilih beserta sebab, langkah penyediaan, cara menguji keberkesanan dengan data yang boleh diukur, SATU langkah keselamatan atau kebersihan, dan SATU pertimbangan kos atau budaya tempatan.",
  u:"Jawapan TP6 yang kukuh menerangkan proses dengan istilah tepat (hipertonik, hipotonik, isotonik), memilih kepekatan yang wajar, menyediakan set kawalan, mengukur data seperti jisim atau jangka hayat, menjaga kebersihan makanan, serta mempertimbangkan kos dan penerimaan komuniti."}}
];

module.exports = {
  id:"b4b3", tingkatan:4, kod:"3.0 Pergerakan Bahan Merentasi Membran Plasma",
  tajuk:"Gerbang Membran",
  subtajuk:"Biologi Ting. 4 · Bab 3 Pergerakan Bahan Merentasi Membran Plasma",
  spi:SPI.b4b3,
  ulasan:{
   1:"{n} dapat mengingat kembali struktur membran plasma dan jenis pergerakan bahan. Langkah seterusnya ialah menerangkan kesan osmosis pada sel.",
   2:"{n} dapat menjelaskan plasmolisis, hemolisis dan krenasi dalam larutan berbeza. Perlu lebih latihan mengira peratus perubahan jisim.",
   3:"{n} boleh mengaplikasikan konsep osmosis dalam eksperimen jalur kentang. Galakkan menganalisis graf untuk menentukan titik isotonik.",
   4:"{n} mampu menganalisis graf osmosis dan menganggar kepekatan sap sel. Seterusnya latih menilai aplikasi osmosis dalam kehidupan harian.",
   5:"{n} dapat menilai aplikasi pergerakan bahan seperti pengawetan dan dialisis. Sudah bersedia mereka produk berasaskan osmosis.",
   6:"{n} berjaya mereka produk atau kaedah berasaskan pergerakan bahan dengan justifikasi saintifik. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pergerakan Bahan. Cadangan: ulang hentian pertama dan rendam hirisan timun dalam air garam untuk melihat osmosis."
  },
  lampiran:{
   j1:jadual(1, "Jisim jalur kentang sebelum dan selepas direndam 30 minit dalam larutan sukrosa",
     ["Kepekatan sukrosa (M)", "Jisim awal (g)", "Jisim akhir (g)"],
     [["0.0","5.00","5.75"],["0.2","5.00","5.40"],["0.4","5.00","5.10"],["0.6","5.00","4.80"],["0.8","5.00","4.50"],["1.0","5.00","4.25"]]),
   g1:{jenis:"graf", x:[0,0.2,0.4,0.6,0.8,1.0], xLabel:"Kepekatan sukrosa (M)", titik:true, yMin:-20, yMaks:20, grid:10,
     siri:[{label:"Perubahan jisim (%)", y:[16,8,4,-4,-12,-16], warna:"hijau"}],
     kapsyen:"Rajah 1 · Graf peratus perubahan jisim jalur kentang melawan kepekatan sukrosa",
     alt:"Graf menurun dari tambah 16 peratus pada 0 M, 8 pada 0.2, 4 pada 0.4, tolak 4 pada 0.6, tolak 12 pada 0.8 dan tolak 16 peratus pada 1.0 M"}
  },
  aras:ARAS
};
