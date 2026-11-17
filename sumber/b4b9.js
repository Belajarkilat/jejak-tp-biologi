/* Biologi KSSM Tingkatan 4, Bab 9 Nutrisi dan Sistem Pencernaan Manusia.
   SK 9.1 Sistem pencernaan, 9.2 Pencernaan, 9.3 Penyerapan, 9.4 Asimilasi, 9.5 Penyahtinjaan,
   9.6 Gizi seimbang, 9.7 Masalah pencernaan dan pemakanan, 9.8 Isu kesihatan (DSKP Biologi).
   BMI disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Pintu Pencernaan", sk:"9.1 Sistem pencernaan · 9.2 Pencernaan", lampiran:null,
 kadNama:"Salur Pencernaan", kadEm:"\u{1F37D}\u{FE0F}", kadFakta:"Makanan melalui mulut, esofagus, perut, usus kecil, usus besar dan rektum.",
 bosKadNama:"Hempedu", bosKadEm:"\u{1F7E2}", bosKadFakta:"Hempedu dihasilkan oleh hati, disimpan dalam pundi hempedu dan mengemulsikan lemak.",
 soalan:[
 {j:"pilih",t:"Pencernaan kanji bermula di:",p:["Mulut","Perut","Usus besar","Esofagus"],b:0,u:"Amilase air liur menghidrolisis kanji kepada maltosa."},
 {j:"pilih",t:"Pencernaan protein bermula di:",p:["Perut","Mulut","Usus besar","Rektum"],b:0,u:"Pepsin dalam jus gastrik menghidrolisis protein kepada polipeptida."},
 {j:"pilih",t:"Gerakan otot yang menolak makanan sepanjang salur pencernaan ialah:",p:["Peristalsis","Osmosis","Emulsifikasi","Asimilasi"],b:0,u:"Otot membujur dan otot membulat mengecut secara berselang-seli."},
 {j:"pilih",t:"Kebanyakan penyerapan nutrien berlaku di:",p:["Usus kecil","Perut","Usus besar","Esofagus"],b:0,u:"Ileum mempunyai vilus yang meningkatkan luas permukaan."},
 {j:"pilih",t:"Fungsi utama usus besar ialah:",p:["Serap semula air","Mencerna protein","Menghasilkan hempedu","Mencerna kanji"],b:0,u:"Bahan tidak tercerna menjadi tinja yang lebih padat."},
 {j:"pilih",t:"Asid hidroklorik dalam perut berfungsi untuk:",p:["Membunuh bakteria","Mengemulsikan lemak","Menyerap air","Mencerna selulosa"],b:0,u:"Ia juga menyediakan pH berasid untuk pepsin."},
 {j:"pilih",t:"Hasil akhir pencernaan protein ialah:",p:["Asid amino","Glukosa","Gliserol","Maltosa"],b:0,u:"Asid amino diserap ke dalam kapilari darah vilus."},
 {j:"banyak",t:"Pilih DUA enzim yang dirembeskan oleh pankreas.",p:["Lipase","Tripsin","Pepsin","Renin"],b:[0,1],u:"Pepsin dan renin dirembeskan oleh perut."}],
 bos:{j:"pilih",t:"Hempedu membantu pencernaan lemak dengan:",p:["Emulsikan lemak","Menghidrolisis lemak","Menyerap lemak","Menghasilkan lipase"],b:0,u:"Titisan lemak kecil menambah luas permukaan untuk tindakan lipase."}},

{n:2, tempat:"Terowong Usus", sk:"9.2 hingga 9.5 Pencernaan, penyerapan, asimilasi dan penyahtinjaan", lampiran:"a1",
 kadNama:"Vilus", kadEm:"\u{1F33E}", kadFakta:"Vilus mempunyai kapilari darah untuk glukosa dan asid amino, serta lakteal untuk asid lemak dan gliserol.",
 bosKadNama:"Hati", bosKadEm:"\u{1F7E4}", bosKadFakta:"Hati menukar glukosa berlebihan kepada glikogen dan menyahaminakan asid amino berlebihan menjadi urea.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, organ bertanda ? ialah:",p:["Usus kecil","Hati","Pankreas","Apendiks"],b:0,u:"Makanan bergerak dari perut ke usus kecil (duodenum dan ileum)."},
 {j:"pilih",t:"Asid lemak dan gliserol diserap ke dalam:",p:["Lakteal","Kapilari darah","Vena hepar","Arteri"],b:0,u:"Lakteal ialah salur limfa dalam vilus."},
 {j:"pilih",t:"Darah daripada usus kecil dibawa ke hati melalui:",p:["Vena portal hepar","Aorta","Vena kava","Arteri pulmonari"],b:0,u:"Hati memproses nutrien sebelum ia beredar ke seluruh badan."},
 {j:"pilih",t:"Asid amino berlebihan dalam hati akan:",p:["Dinyahaminakan","Disimpan sebagai protein","Ditukar kepada kanji","Dikumuhkan terus"],b:0,u:"Kumpulan amino ditukar kepada urea."},
 {j:"pilih",t:"Mengapakah vilus sangat banyak dalam ileum?",p:["Luas permukaan","Hasilkan enzim","Simpan lemak","Musnahkan bakteria"],b:0,u:"Luas permukaan yang besar mempercepat penyerapan."},
 {j:"pilih",t:"Berdasarkan Rajah 1, penyerapan semula air berlaku terutamanya di:",p:["Usus besar","Mulut","Esofagus","Perut"],b:0,u:"Bahan buangan menjadi tinja di kolon."},
 {j:"pilih",t:"Pemakanan serat yang mencukupi membantu mencegah:",p:["Sembelit","Anemia","Rabun","Skurvi"],b:0,u:"Serat menambah pukal tinja dan merangsang peristalsis."},
 {j:"banyak",t:"Pilih DUA ciri vilus yang membantu penyerapan.",p:["Dinding setebal satu sel","Kaya kapilari darah","Dinding tebal berlapis","Permukaan licin rata"],b:[0,1],u:"Mikrovilus juga menambah luas permukaan."}],
 bos:{j:"pilih",t:"Seorang pesakit dibuang pundi hempedunya. Nasihat diet PALING sesuai ialah:",p:["Kurangkan lemak","Tambah makanan bergoreng","Elak semua karbohidrat","Elak minum air"],b:0,u:"Hempedu tidak lagi disimpan, jadi lemak sukar dicerna dalam jumlah besar."}},

{n:3, tempat:"Makmal Gizi", sk:"9.6 Mengaplikasikan konsep gizi seimbang", lampiran:"j1",
 kadNama:"Indeks Jisim Badan", kadEm:"\u{2696}\u{FE0F}", kadFakta:"BMI = jisim (kg) ÷ tinggi² (m²). 18.5 hingga 24.9 dianggap normal bagi orang dewasa.",
 bosKadNama:"Keperluan Tenaga", bosKadEm:"\u{1F525}", bosKadFakta:"Keperluan tenaga bergantung pada umur, jantina, saiz badan dan tahap aktiviti.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung BMI individu A.",b:20,tol:0.1,suf:"kg/m²",u:"45 ÷ 1.50² = 20.0 kg/m²."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung BMI individu B. Beri jawapan kepada 2 tempat perpuluhan.",b:31.25,tol:0.05,suf:"kg/m²",u:"80 ÷ 1.60² = 31.25 kg/m²."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung BMI individu C. Beri jawapan kepada 1 tempat perpuluhan.",b:15.6,tol:0.1,suf:"kg/m²",u:"40 ÷ 1.60² = 15.6 kg/m²."},
 {j:"pilih",t:"Berdasarkan Jadual 1, individu manakah dikategorikan obes (BMI 30 ke atas)?",p:["B","A","C","D"],b:0,u:"BMI B ialah 31.25."},
 {j:"pilih",t:"Berdasarkan Jadual 1, individu manakah kekurangan berat badan?",p:["C","A","B","D"],b:0,u:"BMI C ialah 15.6, di bawah 18.5."},
 {j:"pilih",t:"Berdasarkan Jadual 1, nasihat PALING sesuai untuk individu B ialah:",p:["Diet dan senaman","Tambah makanan bergoreng","Elak semua makanan","Tidur lebih lama"],b:0,u:"Kurangkan pengambilan tenaga dan tingkatkan penggunaannya."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah jisim maksimum individu D supaya BMInya tidak melebihi 24.9? Beri jawapan kepada 1 tempat perpuluhan.",b:76.3,tol:0.2,suf:"kg",u:"24.9 × 1.75² = 76.3 kg."},
 {j:"pilih",t:"Mengapakah atlet dalam latihan memerlukan lebih banyak tenaga daripada pekerja pejabat?",p:["Lebih aktif","Badannya lebih sejuk","Tidak perlu protein","Metabolisme berhenti"],b:0,u:"Aktiviti fizikal meningkatkan penggunaan tenaga."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, mengapakah BMI kurang tepat untuk ahli bina badan yang berotot?",p:["Otot lebih tumpat","Tinggi tidak diukur","Lemak lebih berat","BMI hanya untuk kanak-kanak"],b:0,u:"Jisim otot yang tinggi meningkatkan BMI walaupun lemak badan rendah."}},

{n:4, tempat:"Bilik Graf Glukosa", sk:"9.4 Menganalisis kawalan aras glukosa selepas makan", lampiran:"g1",
 kadNama:"Glikogen", kadEm:"\u{1F4C9}", kadFakta:"Selepas makan, insulin merangsang hati menukar glukosa berlebihan kepada glikogen.",
 bosKadNama:"Indeks Glisemik", bosKadEm:"\u{1F35A}", bosKadFakta:"Makanan berindeks glisemik tinggi meningkatkan glukosa darah dengan cepat.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah aras glukosa darah tertinggi?",b:8,tol:0.1,suf:"mmol/L",u:"Puncak 8.0 mmol/L pada minit ke-30."},
 {j:"nombor",t:"Berdasarkan Rajah 2, hitung peningkatan glukosa darah dari minit 0 hingga 30.",b:3,tol:0.1,suf:"mmol/L",u:"8.0 − 5.0 = 3.0 mmol/L."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah glukosa darah meningkat selepas makan?",p:["Glukosa diserap","Glukosa dikumuhkan","Glikogen terbentuk","Insulin bertambah"],b:0,u:"Glukosa hasil pencernaan diserap dari ileum ke dalam darah."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah glukosa darah menurun selepas minit ke-30?",p:["Jadi glikogen","Pencernaan bermula","Hati membebaskan glukosa","Glukagon dirembeskan"],b:0,u:"Insulin merangsang sel menyerap glukosa dan hati menyimpannya sebagai glikogen."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah masa diambil untuk glukosa kembali ke 5.0 mmol/L?",b:150,tol:1,suf:"min",u:"Aras glukosa kembali normal pada minit ke-150."},
 {j:"pilih",t:"Berdasarkan Rajah 2, bagaimanakah graf berubah bagi pesakit diabetes jenis 2?",p:["Lambat turun","Puncak rendah, cepat turun","Tiada kenaikan","Glukosa jadi sifar"],b:0,u:"Sel kurang bergerak balas terhadap insulin."},
 {j:"pilih",t:"Makanan manakah PALING mungkin menghasilkan puncak lebih rendah daripada Rajah 2?",p:["Nasi perang","Air bergula","Roti putih","Gula-gula"],b:0,u:"Karbohidrat kompleks berserat dicerna dan diserap perlahan."},
 {j:"pilih",t:"Berdasarkan Rajah 2, kawalan aras glukosa darah ini ialah contoh:",p:["Homeostasis","Peristalsis","Emulsifikasi","Fotosintesis"],b:0,u:"Aras glukosa dikekalkan dalam julat normal."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 2, mengapakah sarapan dengan nasi lemak bersama teh manis kurang sesuai untuk murid yang berisiko diabetes?",p:["Glukosa naik mendadak","Tenaga terlalu sedikit","Tiada karbohidrat","Kaya dengan serat"],b:0,u:"Nasi putih dan gula meningkatkan glukosa darah dengan cepat; lemak santan menambah tenaga."}},

{n:5, tempat:"Klinik Pemakanan", sk:"9.7 dan 9.8 Menilai masalah dan isu pemakanan", lampiran:null,
 kadNama:"Gastritis", kadEm:"\u{1F915}", kadFakta:"Gastritis berlaku apabila dinding perut radang, sering akibat waktu makan tidak teratur atau bakteria H. pylori.",
 bosKadNama:"Gangguan Makan", bosKadEm:"\u{1F9E0}", bosKadFakta:"Anoreksia nervosa dan bulimia ialah gangguan makan yang memerlukan rawatan perubatan dan psikologi.",
 soalan:[
 {j:"pilih",t:"Murid yang kerap melangkau sarapan dan makan lewat berisiko mendapat:",p:["Gastritis","Rabun dekat","Skoliosis","Asma"],b:0,u:"Asid perut merengsakan dinding perut yang kosong."},
 {j:"pilih",t:"Kekurangan zat besi dalam diet boleh menyebabkan:",p:["Anemia","Riket","Skurvi","Goiter"],b:0,u:"Besi diperlukan untuk membina hemoglobin."},
 {j:"pilih",t:"Kekurangan vitamin D menyebabkan:",p:["Riket","Beriberi","Anemia","Rabun malam"],b:0,u:"Vitamin D diperlukan untuk penyerapan kalsium bagi tulang."},
 {j:"pilih",t:"Pengambilan garam berlebihan dikaitkan dengan:",p:["Darah tinggi","Rabun jauh","Riket","Sembelit"],b:0,u:"Natrium berlebihan meningkatkan isi padu darah dan tekanan darah."},
 {j:"pilih",t:"Seorang remaja mengehadkan makanan secara melampau kerana takut gemuk walaupun kurus. Keadaan ini ialah:",p:["Anoreksia nervosa","Obesiti","Gastritis","Diabetes"],b:0,u:"Gangguan makan yang memerlukan bantuan pakar."},
 {j:"pilih",t:"Mengapakah minuman bergula tinggi dikenakan cukai di Malaysia?",p:["Kurangkan obesiti","Menambah gula darah","Menggalakkan diabetes","Menambah jualan"],b:0,u:"Cukai menggalakkan pengguna memilih minuman kurang gula."},
 {j:"pilih",t:"Penilaian PALING tepat tentang diet tinggi protein tanpa karbohidrat untuk remaja yang sedang membesar:",p:["Tidak seimbang","Sangat seimbang","Tiada kesan","Wajib untuk semua"],b:0,u:"Karbohidrat ialah sumber tenaga utama; diet seimbang lebih selamat."},
 {j:"banyak",t:"Pilih DUA amalan yang menggalakkan sistem pencernaan sihat.",p:["Makan sayur berserat","Minum air secukupnya","Makan lewat malam","Kerap melangkau makan"],b:[0,1],u:"Serat dan air membantu peristalsis dan mencegah sembelit."}],
 bos:{j:"pilih",t:"Kantin sekolah mencadangkan menjual mi segera setiap hari kerana murah. Penilaian PALING seimbang:",p:["Gilir menu seimbang","Jual setiap hari","Haramkan semua makanan murah","Tambah perisa lebih banyak"],b:0,u:"Mi segera tinggi garam dan rendah serat; menu harga berpatutan yang seimbang lebih wajar."}},

{n:6, tempat:"Studio Reka Diet", sk:"9.1 hingga 9.8 Mereka cipta berasaskan nutrisi", lampiran:null,
 kadNama:"Pinggan Sihat", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Pinggan Sihat Malaysia: separuh sayur dan buah, suku nasi atau bijirin, suku protein.",
 bosKadNama:"Reka Cipta Diet", bosKadEm:"\u{1F4A1}", bosKadFakta:"Pelan diet yang baik mengambil kira tenaga, nutrien, kos dan budaya makanan.",
 soalan:[
 {j:"pilih",t:"Anda mereka hidangan tengah hari ikut Pinggan Sihat Malaysia. Pembahagian PALING tepat:",p:["½ sayur, ¼ nasi, ¼ protein","½ nasi, ½ daging merah","¾ nasi, ¼ sayur hijau","Pinggan penuh protein"],b:0,u:"Separuh sayur dan buah, suku karbohidrat, suku protein."},
 {j:"pilih",t:"Anda mereka bekal untuk murid anemia. Bahan PALING sesuai ditambah:",p:["Bayam dan daging","Gula-gula","Kerepek","Air berkarbonat"],b:0,u:"Bayam dan daging merah kaya zat besi."},
 {j:"pilih",t:"Untuk meningkatkan penyerapan zat besi daripada sayur, tambah makanan kaya:",p:["Vitamin C","Lemak tepu","Garam","Kafein"],b:0,u:"Vitamin C meningkatkan penyerapan besi bukan hem."},
 {j:"pilih",t:"Bagaimanakah anda menguji kandungan vitamin C dalam jus buah ciptaan anda?",p:["Ujian DCPIP","Ujian iodin","Ujian Biuret","Ujian etanol"],b:0,u:"Larutan DCPIP biru dinyahwarnakan oleh vitamin C."},
 {j:"pilih",t:"Anda mahu menilai sama ada kempen sarapan sihat berjaya. Data PALING sesuai:",p:["Peratus bersarapan","Warna poster kempen","Bilangan kerusi kantin","Harga meja kantin"],b:0,u:"Perubahan tingkah laku ialah ukuran utama kejayaan."},
 {j:"pilih",t:"Anda mereka menu untuk murid berpuasa. Makanan sahur PALING sesuai:",p:["Karbohidrat kompleks","Air bergula sahaja","Gorengan berminyak","Kopi pekat"],b:0,u:"Karbohidrat kompleks dan protein memberi tenaga lebih lama."},
 {j:"pilih",t:"Untuk mengurangkan garam dalam masakan tanpa hilang rasa, cadangan PALING baik:",p:["Rempah dan herba","Tambah kiub perisa","Tambah kicap masin","Guna garam bukit lebih"],b:0,u:"Rempah memberi rasa tanpa natrium berlebihan."},
 {j:"banyak",t:"Pilih DUA perkara yang perlu ada dalam pelan diet seimbang anda.",p:["Sumber serat","Sumber protein","Minuman bergula setiap jam","Makanan segera setiap hari"],b:[0,1],u:"Serat dan protein penting untuk pencernaan dan pertumbuhan."}],
 bos:{j:"buka",
  t:"Reka satu pelan pemakanan atau produk makanan untuk menangani masalah pemakanan dalam kalangan murid (contoh: menu kantin seminggu, bekal untuk murid anemia, sarapan untuk murid berlebihan berat badan, kempen kurang gula).",
  arahan:"Nyatakan kumpulan sasaran dan masalahnya (gunakan BMI atau data lain), menu atau produk yang dicadangkan dengan kelas makanan setiap item, cara ia mematuhi Pinggan Sihat Malaysia, SATU proses pencernaan atau penyerapan yang berkaitan, cara menilai keberkesanan dengan data, dan SATU pertimbangan kos, halal atau budaya tempatan.",
  u:"Jawapan TP6 yang kukuh mengenal pasti masalah dengan data BMI, merancang menu seimbang mengikut Pinggan Sihat, mengaitkan nutrien dengan pencernaan dan penyerapan, mengurangkan gula, garam dan lemak, mencadangkan ukuran kejayaan, serta mempertimbangkan kos, halal dan budaya makanan tempatan."}}
];

module.exports = {
  id:"b4b9", tingkatan:4, kod:"9.0 Nutrisi dan Sistem Pencernaan Manusia",
  tajuk:"Laluan Makanan",
  subtajuk:"Biologi Ting. 4 · Bab 9 Nutrisi dan Sistem Pencernaan Manusia",
  spi:SPI.b4b9,
  ulasan:{
   1:"{n} dapat mengingat kembali organ sistem pencernaan dan enzim utama. Langkah seterusnya ialah menerangkan penyerapan dan asimilasi.",
   2:"{n} dapat menjelaskan pencernaan, penyerapan, asimilasi dan penyahtinjaan. Perlu lebih latihan mengira BMI dan menilai gizi.",
   3:"{n} boleh mengaplikasikan konsep gizi seimbang dan mengira BMI. Galakkan menganalisis graf aras glukosa darah.",
   4:"{n} mampu menganalisis kawalan aras glukosa darah selepas makan. Seterusnya latih menilai isu pemakanan.",
   5:"{n} dapat menilai masalah pencernaan dan isu pemakanan dengan hujah saintifik. Sudah bersedia mereka pelan diet.",
   6:"{n} berjaya mereka pelan pemakanan yang seimbang dan berasaskan data. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Nutrisi dan Sistem Pencernaan. Cadangan: ulang hentian pertama dan susun makanan mengikut Pinggan Sihat Malaysia di rumah."
  },
  lampiran:{
   a1:{jenis:"aliran", mod:"turun",
     nod:["Mulut","Esofagus","Perut","?","Usus besar","Rektum dan dubur"],
     kapsyen:"Rajah 1 · Laluan makanan dalam salur pencernaan manusia",
     alt:"Rajah aliran: mulut, esofagus, perut, organ bertanda soal, usus besar, rektum dan dubur"},
   j1:jadual(1, "Jisim dan tinggi empat individu dewasa",
     ["Individu", "Jisim (kg)", "Tinggi (m)"],
     [["A","45","1.50"],["B","80","1.60"],["C","40","1.60"],["D","70","1.75"]]),
   g1:{jenis:"graf", x:[0,30,60,90,120,150], xLabel:"Masa selepas makan (min)", titik:true, yMin:0, yMaks:10, grid:5,
     siri:[{label:"Glukosa darah (mmol/L)", y:[5,8,7,6,5.2,5], warna:"hijau"}],
     kapsyen:"Rajah 2 · Graf aras glukosa darah seorang individu sihat selepas makan",
     alt:"Graf naik dari 5 pada minit 0 ke puncak 8 pada minit 30, kemudian turun ke 7, 6, 5.2 dan 5 pada minit 150"}
  },
  aras:ARAS
};
