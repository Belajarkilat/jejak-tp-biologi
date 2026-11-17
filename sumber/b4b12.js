/* Biologi KSSM Tingkatan 4, Bab 12 Koordinasi dan Gerak Balas pada Manusia.
   SK 12.1 Koordinasi dan gerak balas, 12.2 Sistem saraf, 12.3 Neuron dan sinaps, 12.4 Tindakan terkawal
   dan luar kawal, 12.5 Penyakit sistem saraf, 12.6 Sistem endokrin, 12.7 Gangguan endokrin (DSKP Biologi).
   Masa tindak balas t = √(2d/g), g = 10 m/s², disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Pusat Kawalan", sk:"12.1 Koordinasi dan gerak balas · 12.2 Sistem saraf", lampiran:null,
 kadNama:"Rangsangan dan Gerak Balas", kadEm:"\u{1F9E0}", kadFakta:"Rangsangan dikesan oleh reseptor, ditafsir oleh pusat saraf, dan gerak balas dilakukan oleh efektor.",
 bosKadNama:"Sistem Saraf Pusat", bosKadEm:"\u{1F4A1}", bosKadFakta:"Sistem saraf pusat terdiri daripada otak dan saraf tunjang.",
 soalan:[
 {j:"pilih",t:"Sistem saraf pusat terdiri daripada:",p:["Otak dan saraf tunjang","Saraf kranium dan spina","Reseptor dan efektor","Jantung dan peparu"],b:0,u:"Saraf kranium dan spina ialah sistem saraf periferi."},
 {j:"pilih",t:"Bahagian otak yang mengawal keseimbangan badan ialah:",p:["Serebelum","Serebrum","Medula oblongata","Hipotalamus"],b:0,u:"Serebelum menyelaraskan pergerakan dan keseimbangan."},
 {j:"pilih",t:"Bahagian otak yang mengawal pemikiran dan ingatan ialah:",p:["Serebrum","Serebelum","Medula oblongata","Pituitari"],b:0,u:"Serebrum ialah bahagian otak yang terbesar."},
 {j:"pilih",t:"Neuron yang membawa impuls dari reseptor ke sistem saraf pusat ialah:",p:["Neuron aferen","Neuron eferen","Neuron perantaraan","Neuron motor"],b:0,u:"Neuron aferen juga dikenali sebagai neuron deria."},
 {j:"pilih",t:"Otot dan kelenjar yang melakukan gerak balas dikenali sebagai:",p:["Efektor","Reseptor","Sinaps","Akson"],b:0,u:"Efektor menerima impuls daripada neuron eferen."},
 {j:"pilih",t:"Hormon dirembeskan oleh:",p:["Kelenjar endokrin","Kelenjar peluh","Kelenjar air liur","Neuron aferen"],b:0,u:"Kelenjar endokrin tiada duktus; hormon diangkut oleh darah."},
 {j:"pilih",t:"Kelenjar yang dikenali sebagai 'kelenjar induk' ialah:",p:["Pituitari","Tiroid","Adrenal","Pankreas"],b:0,u:"Pituitari merembeskan hormon yang mengawal kelenjar endokrin lain."},
 {j:"banyak",t:"Pilih DUA bahagian sistem saraf periferi.",p:["Saraf kranium","Saraf spina","Serebrum","Saraf tunjang"],b:[0,1],u:"Serebrum dan saraf tunjang tergolong dalam sistem saraf pusat."}],
 bos:{j:"pilih",t:"Perbezaan utama koordinasi saraf berbanding hormon ialah koordinasi saraf:",p:["Lebih cepat","Lebih lama kesannya","Melalui darah","Melibatkan kelenjar"],b:0,u:"Impuls saraf bergerak pantas; kesan hormon lebih perlahan tetapi tahan lama."}},

{n:2, tempat:"Laluan Refleks", sk:"12.3 Neuron dan sinaps · 12.4 Tindakan luar kawal", lampiran:"a1",
 kadNama:"Arka Refleks", kadEm:"\u{1F525}", kadFakta:"Tindakan refleks berlaku tanpa kawalan sedar dan melalui saraf tunjang untuk gerak balas pantas.",
 bosKadNama:"Sinaps", bosKadEm:"\u{1F50C}", bosKadFakta:"Di sinaps, neurotransmiter meresap merentasi celah sinaps untuk memindahkan impuls.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, neuron bertanda ? ialah:",p:["Neuron perantaraan","Neuron aferen","Neuron eferen","Neuron deria"],b:0,u:"Neuron perantaraan dalam saraf tunjang menghubungkan neuron aferen dan eferen."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah efektor apabila tangan tersentuh periuk panas?",p:["Otot lengan","Kulit tangan","Saraf tunjang","Otak"],b:0,u:"Otot lengan mengecut dan menarik tangan."},
 {j:"pilih",t:"Bahan kimia yang dibebaskan di sinaps ialah:",p:["Neurotransmiter","Hormon tiroid","Hemoglobin","Enzim pepsin"],b:0,u:"Contoh: asetilkolina."},
 {j:"pilih",t:"Impuls hanya bergerak sehala di sinaps kerana:",p:["Vesikel di hujung akson","Akson sangat panjang","Sinaps bercas negatif","Dendrit tiada reseptor"],b:0,u:"Vesikel neurotransmiter hanya terdapat di hujung akson."},
 {j:"pilih",t:"Salut mielin pada akson berfungsi untuk:",p:["Cepatkan impuls","Memperlahan impuls","Menghasilkan hormon","Menyimpan glukosa"],b:0,u:"Impuls melompat dari nodus Ranvier ke nodus berikutnya."},
 {j:"pilih",t:"Antara berikut, yang manakah tindakan luar kawal?",p:["Mengelip mata","Menulis","Menendang bola","Bercakap"],b:0,u:"Kelipan mata ialah refleks melindungi mata."},
 {j:"pilih",t:"Mengapakah tindakan refleks penting?",p:["Lindungi badan","Menambah ingatan","Menjimatkan makanan","Menghasilkan hormon"],b:0,u:"Gerak balas pantas mengurangkan kecederaan."},
 {j:"banyak",t:"Pilih DUA contoh tindakan terkawal.",p:["Mengangkat tangan","Membaca buku","Denyutan jantung","Peristalsis"],b:[0,1],u:"Denyutan jantung dan peristalsis dikawal sistem saraf autonomi."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, seorang pesakit kehilangan neuron eferen pada lengannya. Apakah yang berlaku apabila tangannya tersentuh objek panas?",p:["Tidak ditarik","Tidak terasa panas","Tangan ditarik lebih pantas","Otak tidak berfungsi"],b:0,u:"Impuls tidak sampai ke otot, walaupun rangsangan masih dikesan."}},

{n:3, tempat:"Makmal Pembaris", sk:"12.4 Mengaplikasikan pengukuran masa tindak balas", lampiran:"j1",
 kadNama:"Masa Tindak Balas", kadEm:"\u{1F4CF}", kadFakta:"Ujian pembaris jatuh: t = √(2d ÷ g), dengan d dalam meter dan g = 10 m/s².",
 bosKadNama:"Latihan", bosKadEm:"\u{1F3D3}", bosKadFakta:"Latihan berulang memendekkan masa tindak balas kerana laluan saraf menjadi lebih cekap.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung purata jarak pembaris jatuh bagi murid X.",b:20,tol:0.05,suf:"cm",u:"(18 + 20 + 22 + 19 + 21) ÷ 5 = 20 cm."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung masa tindak balas purata murid X (t = √(2d ÷ g), g = 10 m/s²).",b:0.2,tol:0.005,suf:"s",u:"t = √(2 × 0.20 ÷ 10) = √0.04 = 0.20 s."},
 {j:"nombor",t:"Berdasarkan Jadual 1, purata jarak murid Y ialah 45 cm. Hitung masa tindak balasnya.",b:0.3,tol:0.005,suf:"s",u:"t = √(2 × 0.45 ÷ 10) = √0.09 = 0.30 s."},
 {j:"pilih",t:"Purata jarak murid Y ialah 45 cm. Berdasarkan Jadual 1, murid manakah mempunyai tindak balas lebih pantas?",p:["X","Y","Sama pantas","Tidak dapat ditentukan"],b:0,u:"Jarak lebih pendek bermakna masa tindak balas lebih singkat."},
 {j:"pilih",t:"Mengapakah ujian dalam Jadual 1 diulang lima kali?",p:["Lebih dipercayai","Supaya murid letih","Menukar pembaris","Memanjangkan masa ujian"],b:0,u:"Purata mengurangkan kesan bacaan luar biasa."},
 {j:"pilih",t:"Berdasarkan Jadual 1, pemboleh ubah dimalarkan ialah:",p:["Tangan yang digunakan","Masa tindak balas","Jarak jatuh","Nama murid"],b:0,u:"Tangan dominan, kedudukan pembaris dan cara melepaskan dimalarkan."},
 {j:"pilih",t:"Ujian pembaris jatuh ialah tindakan terkawal kerana:",p:["Melibatkan otak","Melibatkan saraf tunjang sahaja","Berlaku tanpa sedar","Dikawal hormon"],b:0,u:"Murid melihat pembaris dan memutuskan untuk menangkap."},
 {j:"pilih",t:"Murid X mengambil kafein dan masa tindak balasnya berkurang. Inferens PALING munasabah:",p:["Rangsang saraf","Kafein melemahkan otot","Kafein ialah hormon","Kafein memperlahan sinaps"],b:0,u:"Kafein ialah perangsang sistem saraf pusat."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, mengapakah pemandu yang mengantuk lebih berisiko terlibat dalam kemalangan?",p:["Tindak balas lambat","Refleks lebih pantas","Mata lebih terang","Otot lebih kuat"],b:0,u:"Kenderaan bergerak lebih jauh sebelum pemandu menekan brek."}},

{n:4, tempat:"Bilik Graf Impuls", sk:"12.3 Menganalisis kelajuan impuls saraf", lampiran:"g1",
 kadNama:"Diameter Akson", kadEm:"\u{1F4C8}", kadFakta:"Akson bermielin yang lebih besar mengalirkan impuls dengan lebih laju.",
 bosKadNama:"Sklerosis Berbilang", bosKadEm:"\u{1FA7A}", bosKadFakta:"Kerosakan salut mielin melambatkan impuls dan menjejaskan pergerakan serta penglihatan.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah kelajuan impuls bagi akson berdiameter 8 µm?",b:48,tol:0.5,suf:"m/s",u:"Graf menunjukkan 48 m/s."},
 {j:"nombor",t:"Berdasarkan Rajah 2, hitung kecerunan graf.",b:6,tol:0.05,suf:"m/s per µm",u:"(72 − 12) ÷ (12 − 2) = 6 m/s per µm."},
 {j:"pilih",t:"Berdasarkan Rajah 2, hubungan antara diameter akson dan kelajuan impuls ialah:",p:["Berkadar langsung","Berkadar songsang","Tiada hubungan","Malar"],b:0,u:"Graf garis lurus melalui asalan menunjukkan kadar langsung."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah masa untuk impuls bergerak 1.2 m dalam akson 10 µm?",b:0.02,tol:0.001,suf:"s",u:"Kelajuan 60 m/s; masa = 1.2 ÷ 60 = 0.02 s."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah akson tidak bermielin mengalirkan impuls lebih perlahan?",p:["Tiada lompatan","Diameternya lebih besar","Ada lebih banyak sinaps","Neurotransmiter berlebihan"],b:0,u:"Impuls bergerak secara berterusan sepanjang membran."},
 {j:"pilih",t:"Berdasarkan Rajah 2, ramalan bagi akson bermielin 14 µm ialah:",p:["Kira-kira 84 m/s","Kira-kira 12 m/s","Kira-kira 48 m/s","Sifar"],b:0,u:"6 × 14 = 84 m/s jika hubungan sama berterusan."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah refleks melibatkan akson yang besar dan bermielin?",p:["Lebih pantas","Menjimatkan neurotransmiter","Mengurangkan reseptor","Memperlahan otot"],b:0,u:"Kelajuan impuls tinggi mengurangkan masa gerak balas."},
 {j:"pilih",t:"Data Rajah 2 diperoleh daripada satu sampel saraf. Cadangan untuk menambah kebolehpercayaan:",p:["Tambah sampel","Guna satu bacaan","Tukar unit ukuran","Buang titik data"],b:0,u:"Lebih banyak sampel mengurangkan ralat rawak."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 2, pesakit sklerosis berbilang mengalami kerosakan mielin. Ramalan PALING tepat:",p:["Impuls perlahan","Impuls lebih pantas","Akson membesar","Otak berhenti berfungsi"],b:0,u:"Tanpa mielin, impuls tidak dapat melompat antara nodus."}},

{n:5, tempat:"Klinik Saraf dan Hormon", sk:"12.5 Penyakit sistem saraf · 12.6 dan 12.7 Sistem endokrin dan gangguannya", lampiran:null,
 kadNama:"Insulin", kadEm:"\u{1F489}", kadFakta:"Insulin menurunkan aras glukosa darah; glukagon menaikkannya.",
 bosKadNama:"Dadah", bosKadEm:"\u{1F6AB}", bosKadFakta:"Dadah mengganggu penghantaran impuls di sinaps dan menyebabkan ketagihan.",
 soalan:[
 {j:"pilih",t:"Penyakit Alzheimer menjejaskan terutamanya:",p:["Ingatan","Penglihatan warna","Pencernaan","Pembekuan darah"],b:0,u:"Neuron dalam serebrum musnah secara beransur."},
 {j:"pilih",t:"Penyakit Parkinson dikaitkan dengan kekurangan:",p:["Dopamina","Insulin","Tiroksina","Adrenalina"],b:0,u:"Kekurangan dopamina menyebabkan gegaran dan pergerakan perlahan."},
 {j:"pilih",t:"Kekurangan iodin dalam diet boleh menyebabkan:",p:["Goiter","Diabetes","Gigantisme","Anemia"],b:0,u:"Tiroid membesar kerana tidak dapat menghasilkan tiroksina yang cukup."},
 {j:"pilih",t:"Pesakit diabetes jenis 1 perlu suntikan insulin kerana:",p:["Pankreas gagal","Hati terlalu besar","Ginjal rosak","Terlalu banyak insulin"],b:0,u:"Sel beta pankreas musnah."},
 {j:"pilih",t:"Rembesan hormon pertumbuhan berlebihan semasa kanak-kanak menyebabkan:",p:["Gigantisme","Kekerdilan","Goiter","Diabetes"],b:0,u:"Pertumbuhan tulang dan badan menjadi berlebihan."},
 {j:"pilih",t:"Adrenalina dirembeskan dalam situasi cemas dan menyebabkan:",p:["Jantung laju","Pencernaan bertambah","Glukosa darah menurun","Pupil mengecil"],b:0,u:"Tindak balas 'lawan atau lari' menyediakan badan untuk bertindak."},
 {j:"pilih",t:"Penilaian PALING tepat tentang penggunaan ganja untuk 'menenangkan' tekanan peperiksaan:",p:["Berbahaya dan haram","Selamat untuk remaja","Meningkatkan ingatan","Tiada kesan saraf"],b:0,u:"Ganja menjejaskan ingatan dan tumpuan serta menyebabkan ketagihan."},
 {j:"banyak",t:"Pilih DUA langkah menjaga kesihatan sistem saraf.",p:["Tidur yang cukup","Pakai topi keledar","Ambil dadah","Memandu tanpa rehat"],b:[0,1],u:"Rehat dan perlindungan kepala menjaga fungsi otak."}],
 bos:{j:"pilih",t:"Sekolah mencadangkan saringan air kencing rawak bagi mengesan dadah. Penilaian PALING seimbang:",p:["Berserta kaunseling","Hukum tanpa bimbingan","Saringan tiada guna","Biarkan murid sendiri"],b:0,u:"Pengesanan disertai kaunseling dan pemulihan lebih berkesan."}},

{n:6, tempat:"Studio Reka Saraf", sk:"12.1 hingga 12.7 Mereka cipta berasaskan koordinasi", lampiran:null,
 kadNama:"Alat Ujian", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Pembaris masa tindak balas berskala boleh dibuat sendiri menggunakan formula t = √(2d ÷ g).",
 bosKadNama:"Reka Cipta Koordinasi", bosKadEm:"\u{1F4A1}", bosKadFakta:"Aplikasi dan permainan boleh melatih masa tindak balas serta meningkatkan kesedaran keselamatan jalan raya.",
 soalan:[
 {j:"pilih",t:"Anda mereka pembaris masa tindak balas. Tanda 0.20 s perlu diletakkan pada jarak:",p:["20 cm","10 cm","40 cm","2 cm"],b:0,u:"d = ½gt² = ½ × 10 × 0.04 = 0.20 m."},
 {j:"pilih",t:"Untuk menguji kesan muzik terhadap masa tindak balas, pemboleh ubah dimanipulasikan ialah:",p:["Jenis muzik","Panjang pembaris","Masa tindak balas","Umur murid"],b:0,u:"Masa tindak balas ialah pemboleh ubah bergerak balas."},
 {j:"pilih",t:"Anda mereka kempen keselamatan jalan raya untuk penunggang motosikal muda. Mesej PALING berkesan:",p:["Elak guna telefon","Tunggang lebih laju","Tidak perlu topi keledar","Tunggang ketika mengantuk"],b:0,u:"Gangguan memanjangkan masa tindak balas."},
 {j:"pilih",t:"Anda mereka permainan latihan masa tindak balas di telefon. Data PALING sesuai direkod:",p:["Masa tindak balas","Warna latar","Nama telefon","Saiz skrin"],b:0,u:"Masa tindak balas menunjukkan prestasi dan kemajuan."},
 {j:"pilih",t:"Anda merancang poster pengurusan diabetes. Maklumat PALING penting:",p:["Tanda hipoglisemia","Harga gula","Resipi kek","Iklan minuman"],b:0,u:"Pesakit perlu tahu bertindak apabila gula darah terlalu rendah."},
 {j:"pilih",t:"Model arka refleks anda menggunakan wayar berwarna. Wayar manakah mewakili neuron eferen?",p:["Tunjang ke otot","Kulit ke saraf tunjang","Otak ke mata","Otot ke kulit"],b:0,u:"Neuron eferen membawa impuls dari pusat saraf ke efektor."},
 {j:"pilih",t:"Untuk menilai sama ada aplikasi latihan anda berkesan, reka bentuk PALING sesuai:",p:["Sebelum dan selepas","Ujian sekali sahaja","Tanya pendapat rakan","Kira jumlah muat turun"],b:0,u:"Perbandingan data menunjukkan peningkatan."},
 {j:"banyak",t:"Pilih DUA langkah keselamatan semasa ujian masa tindak balas di makmal.",p:["Ruang lapang","Pembaris tidak tajam","Lantai basah","Pembaris kaca"],b:[0,1],u:"Elakkan risiko tergelincir dan kecederaan."}],
 bos:{j:"buka",
  t:"Reka satu alat, permainan atau kempen berkaitan koordinasi saraf atau hormon (contoh: pembaris masa tindak balas berskala, permainan latihan refleks, kempen pemanduan selamat berdasarkan masa tindak balas, kit pendidikan pengurusan diabetes).",
  arahan:"Nyatakan tujuan dan kumpulan sasaran, konsep koordinasi yang terlibat (arka refleks, sinaps, masa tindak balas atau kawalan hormon), bahan dan reka bentuk beserta sebab, SATU pengiraan (contoh: t = √(2d ÷ g)), cara menguji keberkesanan dengan data, SATU langkah keselamatan, dan SATU pertimbangan kos atau budaya tempatan.",
  u:"Jawapan TP6 yang kukuh menerangkan laluan impuls atau kawalan hormon dengan tepat, membuat pengiraan yang betul, menguji dengan ujian sebelum dan selepas serta ulangan, mengutamakan keselamatan, dan mengaitkan reka cipta dengan masalah sebenar seperti kemalangan jalan raya atau diabetes."}}
];

module.exports = {
  id:"b4b12", tingkatan:4, kod:"12.0 Koordinasi dan Gerak Balas pada Manusia",
  tajuk:"Rangkaian Saraf",
  subtajuk:"Biologi Ting. 4 · Bab 12 Koordinasi dan Gerak Balas pada Manusia",
  spi:SPI.b4b12,
  ulasan:{
   1:"{n} dapat mengingat kembali komponen sistem saraf dan kelenjar endokrin. Langkah seterusnya ialah menerangkan arka refleks dan sinaps.",
   2:"{n} dapat menjelaskan arka refleks, sinaps dan jenis tindakan. Perlu lebih latihan mengira masa tindak balas.",
   3:"{n} boleh mengaplikasikan formula masa tindak balas pada data ujian pembaris. Galakkan menganalisis graf kelajuan impuls.",
   4:"{n} mampu menganalisis hubungan diameter akson dan kelajuan impuls. Seterusnya latih menilai isu penyakit saraf dan hormon.",
   5:"{n} dapat menilai isu penyakit saraf, gangguan endokrin dan dadah dengan hujah saintifik. Sudah bersedia mereka alat atau kempen.",
   6:"{n} berjaya mereka alat atau kempen koordinasi dengan pengiraan dan justifikasi yang kukuh. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Koordinasi dan Gerak Balas. Cadangan: ulang hentian pertama dan cuba ujian pembaris jatuh bersama rakan."
  },
  lampiran:{
   a1:{jenis:"aliran", mod:"turun",
     nod:["Reseptor di kulit","Neuron aferen","?","Neuron eferen","Efektor (otot)"],
     kapsyen:"Rajah 1 · Laluan impuls dalam arka refleks",
     alt:"Rajah aliran: reseptor di kulit, neuron aferen, neuron bertanda soal, neuron eferen, efektor otot"},
   j1:jadual(1, "Jarak pembaris jatuh sebelum ditangkap oleh murid X",
     ["Cubaan", "1", "2", "3", "4", "5"],
     [["Jarak (cm)","18","20","22","19","21"]]),
   g1:{jenis:"graf", x:[2,4,6,8,10,12], xLabel:"Diameter akson bermielin (µm)", titik:true, yMin:0, yMaks:80, grid:8,
     siri:[{label:"Kelajuan impuls (m/s)", y:[12,24,36,48,60,72], warna:"ungu"}],
     kapsyen:"Rajah 2 · Graf kelajuan impuls melawan diameter akson bermielin",
     alt:"Graf garis lurus meningkat dari 12 m/s pada 2 µm kepada 72 m/s pada 12 µm"}
  },
  aras:ARAS
};
