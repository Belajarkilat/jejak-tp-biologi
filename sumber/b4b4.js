/* Biologi KSSM Tingkatan 4, Bab 4 Komposisi Kimia dalam Sel.
   SK 4.1 Air, 4.2 Karbohidrat, 4.3 Protein, 4.4 Lipid, 4.5 Asid nukleik (DSKP Biologi). */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Dapur Molekul", sk:"4.1 hingga 4.5 Komponen kimia utama sel", lampiran:null,
 kadNama:"Makromolekul", kadEm:"\u{1F9EC}", kadFakta:"Karbohidrat, protein, lipid dan asid nukleik ialah makromolekul utama dalam sel.",
 bosKadNama:"Molekul Kutub", bosKadEm:"\u{1F4A7}", bosKadFakta:"Air ialah molekul berkutub, jadi ia pelarut yang baik untuk banyak bahan dalam sel.",
 soalan:[
 {j:"pilih",t:"Unit asas (monomer) bagi protein ialah:",p:["Asid amino","Glukosa","Asid lemak","Nukleotida"],b:0,u:"Asid amino bergabung melalui ikatan peptida."},
 {j:"pilih",t:"Monomer bagi kanji ialah:",p:["Glukosa","Fruktosa","Gliserol","Asid amino"],b:0,u:"Kanji ialah polisakarida yang terdiri daripada banyak unit glukosa."},
 {j:"pilih",t:"Lemak terdiri daripada:",p:["Gliserol dan asid lemak","Glukosa dan fruktosa","Asid amino sahaja","Nukleotida dan gula"],b:0,u:"Satu molekul gliserol bergabung dengan tiga asid lemak membentuk trigliserida."},
 {j:"pilih",t:"Unit asas asid nukleik ialah:",p:["Nukleotida","Asid amino","Monosakarida","Gliserol"],b:0,u:"Nukleotida terdiri daripada gula pentosa, kumpulan fosfat dan bes bernitrogen."},
 {j:"pilih",t:"Sukrosa terdiri daripada:",p:["Glukosa + fruktosa","Glukosa + glukosa","Glukosa + galaktosa","Fruktosa + fruktosa"],b:0,u:"Maltosa = glukosa + glukosa; laktosa = glukosa + galaktosa."},
 {j:"pilih",t:"Unsur yang terdapat dalam protein tetapi tiada dalam karbohidrat ialah:",p:["Nitrogen","Karbon","Hidrogen","Oksigen"],b:0,u:"Protein mengandungi C, H, O, N dan kadangkala S."},
 {j:"pilih",t:"Tindak balas yang menggabungkan dua monosakarida dengan menyingkir air ialah:",p:["Kondensasi","Hidrolisis","Pengoksidaan","Penyejatan"],b:0,u:"Hidrolisis pula memecahkan ikatan dengan menambah air."},
 {j:"banyak",t:"Pilih DUA polisakarida.",p:["Selulosa","Glikogen","Maltosa","Fruktosa"],b:[0,1],u:"Maltosa ialah disakarida; fruktosa ialah monosakarida."}],
 bos:{j:"pilih",t:"Asid nukleik yang membawa maklumat genetik dalam nukleus ialah:",p:["DNA","Glikogen","Kolesterol","Hemoglobin"],b:0,u:"DNA menyimpan maklumat genetik; RNA terlibat dalam sintesis protein."}},

{n:2, tempat:"Makmal Fungsi", sk:"4.1 hingga 4.5 Fungsi dan ciri komponen kimia", lampiran:null,
 kadNama:"Fungsi Protein", kadEm:"\u{1F4AA}", kadFakta:"Protein membina tisu, membentuk enzim, hormon dan antibodi.",
 bosKadNama:"Lemak Tepu", bosKadEm:"\u{1F9C8}", bosKadFakta:"Lemak tepu pejal pada suhu bilik; minyak tak tepu cecair pada suhu bilik.",
 soalan:[
 {j:"pilih",t:"Mengapakah air penting untuk mengawal suhu badan?",p:["Muatan haba tinggi","Air tidak berkutub","Air ringan","Air tidak menyejat"],b:0,u:"Air menyerap banyak haba dengan perubahan suhu yang kecil; peluh menyejukkan badan."},
 {j:"pilih",t:"Tumbuhan menyimpan karbohidrat dalam bentuk:",p:["Kanji","Glikogen","Kolesterol","Kitin"],b:0,u:"Haiwan menyimpan karbohidrat sebagai glikogen di hati dan otot."},
 {j:"pilih",t:"Fungsi selulosa dalam tumbuhan ialah:",p:["Bina dinding sel","Membekalkan tenaga segera","Membawa maklumat genetik","Mengangkut oksigen"],b:0,u:"Gentian selulosa memberi kekuatan kepada dinding sel."},
 {j:"pilih",t:"Lapisan lemak di bawah kulit haiwan kutub berfungsi untuk:",p:["Penebat haba","Sintesis protein","Pencernaan makanan","Fotosintesis"],b:0,u:"Lemak ialah penebat haba yang baik dan simpanan tenaga."},
 {j:"pilih",t:"Fosfolipid penting kerana ia:",p:["Membina membran sel","Menyimpan glukosa","Membawa oksigen","Menyimpan maklumat genetik"],b:0,u:"Fosfolipid membentuk dwilapisan membran plasma."},
 {j:"pilih",t:"Enzim, hormon insulin dan antibodi ialah contoh:",p:["Protein","Karbohidrat","Lipid","Asid nukleik"],b:0,u:"Ketiga-tiganya terdiri daripada rantai polipeptida."},
 {j:"pilih",t:"Pemanasan melampau menyebabkan protein:",p:["Ternyahasli","Bertambah aktif","Bertukar menjadi kanji","Menjadi lipid"],b:0,u:"Ikatan yang mengekalkan bentuk tiga dimensi protein terputus."},
 {j:"banyak",t:"Pilih DUA ciri minyak sayuran berbanding lemak haiwan.",p:["Kaya asid lemak tak tepu","Cecair pada suhu bilik","Pejal pada suhu bilik","Kaya dengan kolesterol"],b:[0,1],u:"Ikatan ganda dua dalam asid lemak tak tepu menghalang molekul tersusun rapat."}],
 bos:{j:"pilih",t:"Pengambilan lemak tepu dan kolesterol berlebihan meningkatkan risiko:",p:["Aterosklerosis","Rabun jauh","Anemia","Sakit gigi"],b:0,u:"Plak lemak terkumpul pada dinding arteri dan menyempitkan salurannya."}},

{n:3, tempat:"Makmal Ujian Makanan", sk:"4.2 hingga 4.4 Ujian makanan", lampiran:"j1",
 kadNama:"Ujian Makanan", kadEm:"\u{1F9EA}", kadFakta:"Iodin: kanji (biru tua). Benedict: gula penurun (mendakan merah bata). Biuret: protein (ungu). Etanol: lipid (emulsi putih).",
 bosKadNama:"Gula Bukan Penurun", bosKadEm:"\u{1F36C}", bosKadFakta:"Sukrosa perlu dihidrolisis dengan asid dan dineutralkan sebelum ujian Benedict memberi keputusan positif.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 1, sampel manakah mengandungi kanji?",p:["P","Q","R","S"],b:0,u:"Iodin bertukar biru tua dalam sampel P."},
 {j:"pilih",t:"Berdasarkan Jadual 1, sampel manakah mengandungi gula penurun?",p:["Q","P","R","S"],b:0,u:"Ujian Benedict menghasilkan mendakan merah bata dalam sampel Q."},
 {j:"pilih",t:"Berdasarkan Jadual 1, sampel R mengandungi:",p:["Protein","Kanji","Lipid","Gula penurun"],b:0,u:"Larutan Biuret bertukar ungu."},
 {j:"pilih",t:"Berdasarkan Jadual 1, sampel S PALING mungkin ialah:",p:["Minyak masak","Larutan glukosa","Putih telur","Air beras"],b:0,u:"Emulsi putih dalam ujian etanol menunjukkan lipid."},
 {j:"pilih",t:"Berdasarkan Jadual 1, sampel P PALING mungkin ialah:",p:["Air beras","Putih telur","Minyak masak","Jus anggur"],b:0,u:"Beras kaya kanji."},
 {j:"pilih",t:"Mengapakah tabung uji dipanaskan dalam ujian Benedict?",p:["Tindak balas memerlukan haba","Membunuh bakteria","Melarutkan iodin","Mengeraskan protein"],b:0,u:"Larutan Benedict hanya bertindak balas dengan gula penurun apabila dipanaskan."},
 {j:"pilih",t:"Larutan sukrosa memberi keputusan negatif dalam ujian Benedict. Langkah yang perlu dilakukan dahulu ialah:",p:["Hidrolisis dengan asid","Tambah larutan iodin","Tambah etanol mutlak","Sejukkan dalam air ais"],b:0,u:"Asid menghidrolisis sukrosa kepada glukosa dan fruktosa; neutralkan dengan natrium hidrogen karbonat."},
 {j:"pilih",t:"Warna akhir ujian Benedict bagi larutan glukosa yang sangat cair ialah:",p:["Hijau","Biru tua","Ungu","Putih susu"],b:0,u:"Kepekatan rendah memberi hijau; meningkat kepada kuning, jingga dan merah bata."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, sampel manakah PALING sesuai untuk murid yang memerlukan bahan binaan tisu selepas cedera?",p:["R","P","Q","S"],b:0,u:"Sampel R mengandungi protein untuk membaiki tisu."}},

{n:4, tempat:"Bilik Analisis Diet", sk:"4.1 hingga 4.5 Menganalisis komposisi kimia makanan", lampiran:"j2",
 kadNama:"Nilai Tenaga", kadEm:"\u{1F525}", kadFakta:"1 g karbohidrat ≈ 17 kJ, 1 g protein ≈ 17 kJ, 1 g lemak ≈ 37 kJ.",
 bosKadNama:"Diet Seimbang", bosKadEm:"\u{1F957}", bosKadFakta:"Diet seimbang mengandungi semua kelas makanan dalam kuantiti yang betul.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 2, hitung tenaga daripada lemak dalam 100 g makanan X (1 g lemak = 37 kJ).",b:370,tol:1,suf:"kJ",u:"10 g × 37 kJ = 370 kJ."},
 {j:"nombor",t:"Berdasarkan Jadual 2, hitung tenaga daripada karbohidrat dalam 100 g makanan X (1 g = 17 kJ).",b:1020,tol:1,suf:"kJ",u:"60 g × 17 kJ = 1 020 kJ."},
 {j:"nombor",t:"Berdasarkan Jadual 2, hitung jumlah tenaga dalam 100 g makanan X (protein 1 g = 17 kJ).",b:1560,tol:2,suf:"kJ",u:"370 + 1 020 + (10 × 17 = 170) = 1 560 kJ."},
 {j:"pilih",t:"Berdasarkan Jadual 2, makanan manakah PALING sesuai untuk atlet angkat berat yang membina otot?",p:["Makanan Z","Makanan X","Makanan Y","Ketiga-tiganya sama"],b:0,u:"Makanan Z mempunyai kandungan protein tertinggi (25 g)."},
 {j:"pilih",t:"Berdasarkan Jadual 2, makanan Y mempunyai lemak tertinggi. Mengapakah ia membekalkan tenaga paling banyak per gram lemak?",p:["Tenaganya lebih tinggi","Lemak mudah dicerna","Lemak mengandungi nitrogen","Lemak ialah polisakarida"],b:0,u:"Lemak membekalkan kira-kira 37 kJ/g berbanding 17 kJ/g bagi karbohidrat."},
 {j:"nombor",t:"Berdasarkan Jadual 2, hitung tenaga daripada lemak dalam 100 g makanan Y.",b:1110,tol:1,suf:"kJ",u:"30 g × 37 kJ = 1 110 kJ."},
 {j:"pilih",t:"Berdasarkan Jadual 2, makanan manakah PALING sesuai untuk pelari maraton sebelum perlumbaan?",p:["Makanan X","Makanan Y","Makanan Z","Air kosong"],b:0,u:"Karbohidrat tinggi disimpan sebagai glikogen untuk tenaga ketahanan."},
 {j:"pilih",t:"Berdasarkan Jadual 2, makanan Y kurang sesuai untuk pesakit jantung kerana:",p:["Kandungan lemaknya tinggi","Protein terlalu rendah","Tiada karbohidrat","Kaya serat"],b:0,u:"Lemak tinggi, terutama lemak tepu, meningkatkan risiko penyakit jantung."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 2, seorang remaja makan Y setiap hari dan kurang bersenam. Ramalan PALING munasabah:",p:["Berat badan bertambah","Otot cepat bertambah","Gula darah menjadi sifar","Rambut menjadi lurus"],b:0,u:"Tenaga berlebihan daripada lemak disimpan sebagai tisu adipos."}},

{n:5, tempat:"Dewan Pemakanan", sk:"4.1 hingga 4.5 Menilai isu berkaitan komposisi kimia", lampiran:null,
 kadNama:"Lemak Trans", kadEm:"\u{26A0}\u{FE0F}", kadFakta:"Lemak trans daripada minyak terhidrogen separa meningkatkan kolesterol LDL dan risiko penyakit jantung.",
 bosKadNama:"Label Makanan", bosKadEm:"\u{1F3F7}\u{FE0F}", bosKadFakta:"Label nutrisi membantu pengguna membandingkan kandungan gula, lemak dan garam.",
 soalan:[
 {j:"pilih",t:"Antara minyak berikut, yang manakah PALING baik untuk kesihatan jantung jika digunakan secara sederhana?",p:["Minyak zaitun","Marjerin keras","Minyak sapi","Lemak babi"],b:0,u:"Minyak zaitun kaya asid lemak tak tepu tunggal."},
 {j:"pilih",t:"Seorang remaja mengehadkan semua lemak dalam dietnya. Penilaian PALING tepat:",p:["Kurang bijak; lemak perlu","Bijak; lemak tidak berguna","Bijak; lemak menyebabkan diabetes","Tiada kesan langsung"],b:0,u:"Lemak diperlukan untuk membran sel, hormon dan penyerapan vitamin A, D, E, K."},
 {j:"pilih",t:"Mengapakah rakyat digalakkan mengurangkan minuman bergula?",p:["Elak diabetes","Gula mengandungi protein","Gula merosakkan DNA terus","Gula membekalkan nitrogen"],b:0,u:"Gula berlebihan disimpan sebagai lemak dan meningkatkan risiko diabetes jenis 2."},
 {j:"pilih",t:"Label minuman A: gula 12 g/100 ml. Minuman B: gula 4 g/100 ml. Pilihan PALING sihat ialah:",p:["Minuman B","Minuman A","Kedua-duanya sama","Tidak boleh dibanding"],b:0,u:"Kurang gula membantu mengawal pengambilan tenaga."},
 {j:"pilih",t:"Seorang vegetarian bimbang kekurangan protein. Cadangan PALING sesuai ialah:",p:["Kekacang dan tauhu","Makan lebih banyak nasi","Minum air gula","Elak sayur hijau"],b:0,u:"Kekacang dan produk soya ialah sumber protein tumbuhan yang baik."},
 {j:"pilih",t:"Pesakit kwasyiorkor mempunyai perut buncit dan otot lemah. Puncanya ialah kekurangan:",p:["Protein","Kanji","Lemak","Air"],b:0,u:"Kekurangan protein menyebabkan bendalir terkumpul dan otot tidak dibina."},
 {j:"pilih",t:"Mengapakah pemeriksaan DNA digunakan dalam forensik?",p:["DNA individu adalah unik","DNA sama bagi adik-beradik","DNA terdapat dalam rambut sahaja","DNA tidak dapat dikaji"],b:0,u:"Kecuali kembar seiras, corak DNA setiap individu berbeza."},
 {j:"banyak",t:"Pilih DUA langkah untuk mengurangkan pengambilan lemak tepu.",p:["Pilih daging tanpa lemak","Kukus, bukan goreng","Tambah santan pekat","Pilih makanan bergoreng"],b:[0,1],u:"Santan dan makanan bergoreng tinggi lemak tepu."}],
 bos:{j:"pilih",t:"Kantin sekolah mahu menggantikan menu goreng. Cadangan manakah PALING seimbang dari segi kesihatan dan kos?",p:["Nasi, ikan kukus dan sayur","Mi segera dan air gula","Kerepek dan air berkarbonat","Ayam goreng setiap hari"],b:0,u:"Menu ini membekalkan karbohidrat, protein dan serat dengan lemak rendah."}},

{n:6, tempat:"Studio Reka Makanan", sk:"4.1 hingga 4.5 Mereka cipta berasaskan komposisi kimia", lampiran:null,
 kadNama:"Reka Menu", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Menu yang baik mengambil kira tenaga, protein, lemak, gula, garam dan serat.",
 bosKadNama:"Reka Cipta Nutrisi", bosKadEm:"\u{1F4A1}", bosKadFakta:"Snek sihat buatan sendiri boleh menggantikan snek tinggi gula dan garam.",
 soalan:[
 {j:"pilih",t:"Anda mereka snek tinggi protein untuk pasukan sukan. Bahan utama manakah PALING sesuai?",p:["Kacang tanah dan susu","Gula pasir dan tepung","Minyak sawit dan garam","Sirap dan aiskrim"],b:0,u:"Kacang dan susu kaya protein."},
 {j:"pilih",t:"Untuk menguji kandungan protein dalam snek anda, reagen manakah perlu digunakan?",p:["Larutan Biuret","Larutan iodin","Larutan Benedict","Kertas litmus"],b:0,u:"Biuret bertukar ungu dengan protein."},
 {j:"pilih",t:"Anda mahu mengurangkan gula dalam kuih tradisional tanpa menjejaskan rasa. Cadangan PALING wajar:",p:["Pemanis buah masak","Tambah dua kali ganda gula","Buang semua bahan manis","Tambah garam yang banyak"],b:0,u:"Buah masak memberi rasa manis serta serat dan vitamin."},
 {j:"pilih",t:"Anda mereka bekal makanan untuk murid yang berpuasa sunat. Kandungan manakah PALING penting untuk sahur?",p:["Karbohidrat kompleks","Gula ringkas sahaja","Lemak tepu yang tinggi","Kafein yang banyak"],b:0,u:"Karbohidrat kompleks dicerna perlahan dan membekalkan tenaga lebih lama."},
 {j:"pilih",t:"Bagaimanakah anda membandingkan kandungan lemak dua jenis kerepek secara adil?",p:["Guna jisim kerepek yang sama","Guna jenama berbeza","Guna suhu berbeza","Hanya rasa sahaja"],b:0,u:"Jisim sampel yang sama membolehkan perbandingan yang adil."},
 {j:"pilih",t:"Label produk snek anda perlu memaparkan:",p:["Nutrisi per hidangan","Warna kegemaran pembuat","Nama sekolah pengguna","Jumlah jualan semalam"],b:0,u:"Label nutrisi membantu pengguna membuat pilihan sihat."},
 {j:"pilih",t:"Anda mencipta minuman tenaga semula jadi. Ramuan manakah membekalkan glukosa dengan cepat?",p:["Jus buah segar","Minyak kelapa","Putih telur","Serbuk kopi"],b:0,u:"Jus buah mengandungi gula ringkas yang cepat diserap."},
 {j:"banyak",t:"Pilih DUA kriteria untuk menilai snek sihat ciptaan anda.",p:["Kandungan gula rendah","Protein mencukupi","Pembungkusan paling mahal","Warna paling terang"],b:[0,1],u:"Kandungan nutrisi menentukan nilai kesihatan."}],
 bos:{j:"buka",
  t:"Reka satu menu atau snek sihat untuk murid sekolah berdasarkan pengetahuan komposisi kimia makanan (contoh: bekal sarapan, snek tinggi protein, minuman rendah gula, menu kantin seminggu).",
  arahan:"Nyatakan kumpulan sasaran, bahan dan kelas makanan utama setiap bahan, SATU pengiraan tenaga (contoh: gram × kJ/g), ujian makanan untuk mengesahkan kandungan (iodin, Benedict, Biuret atau etanol), cara mengurangkan gula, garam atau lemak tepu, cara menilai penerimaan murid, serta SATU pertimbangan kos atau budaya makanan tempatan.",
  u:"Jawapan TP6 yang kukuh mengimbangkan karbohidrat, protein dan lemak, mengira tenaga dengan betul, memilih ujian makanan yang tepat, mengurangkan gula dan lemak tepu dengan bahan alternatif tempatan, mencadangkan ujian rasa, dan mengambil kira kos serta budaya pemakanan."}}
];

module.exports = {
  id:"b4b4", tingkatan:4, kod:"4.0 Komposisi Kimia dalam Sel",
  tajuk:"Resipi Kehidupan",
  subtajuk:"Biologi Ting. 4 · Bab 4 Komposisi Kimia dalam Sel",
  spi:SPI.b4b4,
  ulasan:{
   1:"{n} dapat mengingat kembali monomer dan polimer bagi karbohidrat, protein, lipid dan asid nukleik. Langkah seterusnya ialah menerangkan fungsi setiap komponen.",
   2:"{n} dapat menjelaskan fungsi air, karbohidrat, protein dan lipid dalam organisma. Perlu lebih latihan mentafsir keputusan ujian makanan.",
   3:"{n} boleh mengaplikasikan ujian makanan untuk mengenal pasti kandungan sampel. Galakkan menganalisis data komposisi dan tenaga makanan.",
   4:"{n} mampu menganalisis komposisi makanan dan mengira nilai tenaga. Seterusnya latih menilai isu pemakanan.",
   5:"{n} dapat menilai pilihan makanan berdasarkan komposisi kimia dan kesan kesihatan. Sudah bersedia mereka menu sihat sendiri.",
   6:"{n} berjaya mereka menu atau snek sihat dengan justifikasi komposisi kimia yang tepat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Komposisi Kimia dalam Sel. Cadangan: ulang hentian pertama dan baca label nutrisi makanan di rumah."
  },
  lampiran:{
   j1:jadual(1, "Keputusan ujian makanan bagi empat sampel",
     ["Sampel", "Iodin", "Benedict (dipanaskan)", "Biuret", "Etanol"],
     [["P","Biru tua","Biru","Biru","Jernih"],["Q","Perang","Mendakan merah bata","Biru","Jernih"],["R","Perang","Biru","Ungu","Jernih"],["S","Perang","Biru","Biru","Emulsi putih"]]),
   j2:jadual(2, "Kandungan nutrien dalam 100 g tiga jenis makanan",
     ["Makanan", "Karbohidrat (g)", "Protein (g)", "Lemak (g)"],
     [["X","60","10","10"],["Y","20","8","30"],["Z","5","25","4"]])
  },
  aras:ARAS
};
