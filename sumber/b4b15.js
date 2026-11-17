/* Biologi KSSM Tingkatan 4, Bab 15 Pembiakan Seks, Perkembangan dan Pertumbuhan pada Manusia dan Haiwan.
   SK 15.1 Sistem pembiakan, 15.2 Gametogenesis, 15.3 Kitar haid, 15.4 Perkembangan fetus, 15.5 Kembar,
   15.6 Kesihatan sistem pembiakan, 15.7 Pertumbuhan (DSKP Biologi). Data disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Bilik Asal Usul", sk:"15.1 Sistem pembiakan · 15.2 Gametogenesis", lampiran:null,
 kadNama:"Gamet", kadEm:"\u{1F95A}", kadFakta:"Sperma dihasilkan dalam testis melalui spermatogenesis; ovum dihasilkan dalam ovari melalui oogenesis.",
 bosKadNama:"Plasenta", bosKadEm:"\u{1F476}", bosKadFakta:"Plasenta membolehkan pertukaran nutrien, gas dan bahan kumuh antara darah ibu dan fetus tanpa darah bercampur.",
 soalan:[
 {j:"pilih",t:"Sperma dihasilkan dalam:",p:["Testis","Ovari","Prostat","Uretra"],b:0,u:"Tubul seminiferus dalam testis menghasilkan sperma."},
 {j:"pilih",t:"Persenyawaan biasanya berlaku di:",p:["Tiub Falopio","Uterus","Serviks","Faraj"],b:0,u:"Ovum bertemu sperma di tiub Falopio."},
 {j:"pilih",t:"Embrio menempel pada dinding:",p:["Uterus","Ovari","Tiub Falopio","Serviks"],b:0,u:"Endometrium yang tebal dan kaya darah menerima embrio."},
 {j:"pilih",t:"Hormon seks utama lelaki ialah:",p:["Testosteron","Estrogen","Progesteron","Insulin"],b:0,u:"Testosteron merangsang ciri seks sekunder lelaki."},
 {j:"pilih",t:"Oogenesis menghasilkan satu ovum dan:",p:["Jasad kutub","Empat sperma","Dua ovum","Plasenta"],b:0,u:"Jasad kutub kecil akan merosot."},
 {j:"pilih",t:"Tali pusat menghubungkan fetus dengan:",p:["Plasenta","Ovari","Serviks","Tiub Falopio"],b:0,u:"Arteri dan vena umbilikus terdapat dalam tali pusat."},
 {j:"pilih",t:"Bendalir amnion berfungsi untuk:",p:["Melindungi fetus","Mencerna makanan","Menghasilkan hormon","Menyimpan sperma"],b:0,u:"Ia menyerap hentakan dan mengekalkan suhu."},
 {j:"banyak",t:"Pilih DUA bahan yang meresap dari darah ibu ke fetus melalui plasenta.",p:["Oksigen","Glukosa","Urea","Karbon dioksida"],b:[0,1],u:"Urea dan CO₂ meresap dari fetus ke darah ibu."}],
 bos:{j:"pilih",t:"Mengapakah darah ibu dan darah fetus tidak bercampur?",p:["Elak gerak balas imun","Darah fetus lebih pekat","Plasenta tiada kapilari","Fetus tiada darah"],b:0,u:"Kumpulan darah mungkin berbeza; tekanan darah ibu juga terlalu tinggi untuk fetus."}},

{n:2, tempat:"Laluan Kehidupan", sk:"15.3 Kitar haid · 15.4 Perkembangan fetus · 15.5 Kembar", lampiran:"a1",
 kadNama:"Hormon Kitar Haid", kadEm:"\u{1F319}", kadFakta:"FSH merangsang folikel; LH mencetuskan ovulasi; estrogen dan progesteron menebalkan endometrium.",
 bosKadNama:"Kembar", bosKadEm:"\u{1F46F}", bosKadFakta:"Kembar seiras terbentuk daripada satu zigot yang terbahagi; kembar tak seiras daripada dua ovum yang disenyawakan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peringkat bertanda ? ialah:",p:["Blastosista","Ovum","Sperma","Fetus matang"],b:0,u:"Zigot membahagi secara mitosis membentuk bola sel."},
 {j:"pilih",t:"Hormon yang mencetuskan ovulasi ialah:",p:["LH","FSH","Progesteron","Testosteron"],b:0,u:"Lonjakan LH pada pertengahan kitar membebaskan ovum."},
 {j:"pilih",t:"Hormon yang mengekalkan ketebalan endometrium selepas ovulasi ialah:",p:["Progesteron","FSH","Testosteron","ADH"],b:0,u:"Ia dirembeskan oleh korpus luteum."},
 {j:"pilih",t:"Haid berlaku apabila:",p:["Progesteron menurun","Estrogen meningkat","LH memuncak","FSH meningkat"],b:0,u:"Endometrium runtuh dan disingkirkan."},
 {j:"pilih",t:"Kembar seiras mempunyai:",p:["Gen yang sama","Jantina pasti berbeza","Dua plasenta berbeza","Dua ovum"],b:0,u:"Kedua-duanya berasal daripada satu zigot."},
 {j:"pilih",t:"Kembar tak seiras terbentuk apabila:",p:["Dua ovum disenyawa","Satu zigot terbahagi","Satu sperma bahagi","Plasenta terbelah"],b:0,u:"Dua ovum disenyawakan oleh dua sperma berbeza."},
 {j:"pilih",t:"Selepas persenyawaan, penempelan embrio berlaku kira-kira:",p:["6 hingga 7 hari","1 jam","9 bulan","30 hari"],b:0,u:"Selepas persenyawaan, embrio bergerak ke uterus dan menempel."},
 {j:"banyak",t:"Pilih DUA hormon yang dirembeskan oleh ovari.",p:["Estrogen","Progesteron","FSH","LH"],b:[0,1],u:"FSH dan LH dirembeskan oleh kelenjar pituitari."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, jika ovum tidak disenyawakan, apakah yang berlaku kepada korpus luteum?",p:["Merosot","Membesar","Menjadi plasenta","Menjadi embrio"],b:0,u:"Progesteron menurun dan haid berlaku."}},

{n:3, tempat:"Makmal Kitar", sk:"15.3 Mengaplikasikan pengetahuan kitar haid", lampiran:"j1",
 kadNama:"Ovulasi", kadEm:"\u{1F4C5}", kadFakta:"Ovulasi biasanya berlaku 14 hari sebelum haid seterusnya.",
 bosKadNama:"Kitar Tidak Teratur", bosKadEm:"\u{1FA7A}", bosKadFakta:"Tekanan, berat badan melampau dan gangguan hormon boleh menyebabkan kitar haid tidak teratur.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 1, pada hari manakah endometrium paling tebal?",p:["Hari 21","Hari 5","Hari 14","Hari 1"],b:0,u:"Progesteron mengekalkan ketebalan maksimum selepas ovulasi."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah endometrium nipis pada hari ke-5?",p:["Haid baru berlaku","Ovulasi berlaku","Progesteron tinggi","Embrio menempel"],b:0,u:"Lapisan endometrium disingkirkan semasa haid."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung pertambahan ketebalan endometrium dari hari 5 hingga hari 21.",b:9,tol:0.1,suf:"mm",u:"11 − 2 = 9 mm."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung kadar purata penebalan endometrium dari hari 5 hingga 14. Beri jawapan kepada 2 tempat perpuluhan.",b:0.78,tol:0.01,suf:"mm/hari",u:"(9 − 2) ÷ 9 = 0.78 mm sehari."},
 {j:"nombor",t:"Kitar haid seorang wanita ialah 32 hari. Pada hari ke berapakah ovulasi dijangka berlaku?",b:18,tol:0.1,suf:"",u:"32 − 14 = hari ke-18."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah endometrium menebal sebelum ovulasi?",p:["Terima embrio","Menghasilkan ovum","Menghasilkan sperma","Menyimpan urin"],b:0,u:"Endometrium kaya salur darah untuk menyokong embrio."},
 {j:"pilih",t:"Berdasarkan Jadual 1, jika berlaku kehamilan, ketebalan endometrium selepas hari 28 dijangka:",p:["Kekal tebal","Menjadi nipis","Hilang sepenuhnya","Tidak menentu"],b:0,u:"Progesteron dikekalkan, jadi haid tidak berlaku."},
 {j:"pilih",t:"Kitar haid seorang remaja selama 26 hingga 33 hari. Penilaian PALING tepat:",p:["Masih normal","Pasti ada penyakit","Perlu pembedahan","Tidak mungkin berlaku"],b:0,u:"Kitar 21 hingga 35 hari dianggap normal, terutama pada remaja."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, mengapakah merekod tarikh haid berguna bagi seorang remaja?",p:["Kesan masalah awal","Mengubah genetik","Menghentikan haid","Menambah tinggi"],b:0,u:"Rekod membantu doktor mengenal pasti gangguan kitar."}},

{n:4, tempat:"Bilik Graf Pertumbuhan", sk:"15.7 Menganalisis lengkung pertumbuhan", lampiran:"g1",
 kadNama:"Lengkung Sigmoid", kadEm:"\u{1F4C8}", kadFakta:"Pertumbuhan manusia berbentuk lengkung sigmoid dengan dua fasa pertumbuhan pesat: bayi dan akil baligh.",
 bosKadNama:"Pertumbuhan Tak Selanjar", bosKadEm:"\u{1F997}", bosKadFakta:"Serangga menunjukkan lengkung bertangga kerana hanya membesar selepas ekdisis.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah tinggi pada umur 12 tahun?",b:145,tol:1,suf:"cm",u:"Graf menunjukkan 145 cm."},
 {j:"nombor",t:"Berdasarkan Rajah 2, hitung kadar pertumbuhan purata dari umur 12 hingga 16 tahun.",b:5,tol:0.1,suf:"cm/tahun",u:"(165 − 145) ÷ 4 = 5 cm setahun."},
 {j:"nombor",t:"Berdasarkan Rajah 2, hitung kadar pertumbuhan purata dari umur 16 hingga 20 tahun.",b:1.25,tol:0.01,suf:"cm/tahun",u:"(170 − 165) ÷ 4 = 1.25 cm setahun."},
 {j:"pilih",t:"Berdasarkan Rajah 2, fasa pertumbuhan pesat pertama berlaku pada:",p:["Umur 0 hingga 4","Umur 8 hingga 12","Umur 16 hingga 20","Selepas 20"],b:0,u:"Bayi membesar dengan sangat cepat: 50 cm dalam 4 tahun."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah pertumbuhan pesat berlaku antara umur 12 dan 16?",p:["Akil baligh","Menopaus","Penuaan","Kekurangan makanan"],b:0,u:"Hormon pertumbuhan dan hormon seks meningkat."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah graf hampir mendatar selepas umur 20?",p:["Tulang berhenti tumbuh","Kekurangan makanan","Otot mula menyusut","Tulang mula memendek"],b:0,u:"Plat epifisis tulang telah tertutup."},
 {j:"pilih",t:"Lengkung pertumbuhan serangga berbeza daripada Rajah 2 kerana berbentuk:",p:["Bertangga","Sigmoid","Garis lurus","Bulatan"],b:0,u:"Saiz bertambah hanya selepas setiap kali bersalin kulit."},
 {j:"pilih",t:"Parameter manakah PALING sesuai untuk mengukur pertumbuhan bayi di klinik?",p:["Berat dan panjang","Warna kulit","Bilangan gigi sahaja","Suara"],b:0,u:"Carta berat dan panjang memantau pertumbuhan normal."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 2, seorang murid berumur 14 tahun mempunyai tinggi jauh di bawah lengkung normal. Tindakan PALING wajar:",p:["Rujuk doktor","Abaikan","Paksa makan berlebihan","Ambil ubat tanpa preskripsi"],b:0,u:"Doktor dapat menilai pemakanan atau gangguan hormon pertumbuhan."}},

{n:5, tempat:"Klinik Keluarga", sk:"15.6 Menilai isu kesihatan sistem pembiakan", lampiran:null,
 kadNama:"Kemandulan", kadEm:"\u{1FA7A}", kadFakta:"Kemandulan boleh disebabkan oleh bilangan sperma rendah, tiub Falopio tersumbat atau gangguan hormon.",
 bosKadNama:"IVF", bosKadEm:"\u{1F9EB}", bosKadFakta:"Persenyawaan in vitro (IVF) menyenyawakan ovum dengan sperma di makmal sebelum embrio dipindahkan ke uterus.",
 soalan:[
 {j:"pilih",t:"Tiub Falopio yang tersumbat menyebabkan kemandulan kerana:",p:["Gamet tak bertemu","Ovari tak hasilkan hormon","Uterus terlalu besar","Haid berhenti"],b:0,u:"Persenyawaan tidak dapat berlaku."},
 {j:"pilih",t:"Kaedah yang sesuai untuk pasangan dengan tiub Falopio tersumbat ialah:",p:["IVF","Vaksin","Antibiotik","Dialisis"],b:0,u:"Persenyawaan berlaku di luar badan."},
 {j:"pilih",t:"Merokok semasa hamil boleh menyebabkan:",p:["Bayi kurang berat","Bayi lebih tinggi","Bayi lebih pintar","Tiada kesan"],b:0,u:"Nikotin dan CO mengurangkan bekalan oksigen kepada fetus."},
 {j:"pilih",t:"Asid folik disarankan kepada wanita sebelum dan awal kehamilan untuk:",p:["Cegah spina bifida","Menambah berat ibu","Menghentikan haid","Mengelak demam"],b:0,u:"Asid folik mengurangkan risiko spina bifida."},
 {j:"pilih",t:"Saringan kanser serviks (ujian Pap) penting kerana:",p:["Kesan awal kanser","Mengubah kitar haid","Menambah ovum","Menghentikan ovulasi"],b:0,u:"Pengesanan awal meningkatkan peluang sembuh."},
 {j:"pilih",t:"Vaksin HPV diberi kepada murid perempuan sekolah untuk mencegah:",p:["Kanser serviks","Diabetes","Asma","Anemia"],b:0,u:"HPV ialah punca utama kanser serviks."},
 {j:"pilih",t:"Penilaian PALING tepat tentang ibu mengandung yang mengambil ubat tanpa nasihat doktor:",p:["Bahaya kepada fetus","Selamat sepenuhnya","Mempercepat kelahiran","Menguatkan plasenta"],b:0,u:"Sesetengah ubat boleh merentasi plasenta dan merosakkan fetus."},
 {j:"banyak",t:"Pilih DUA amalan yang menyokong kehamilan sihat.",p:["Pemeriksaan antenatal","Pemakanan seimbang","Merokok","Minum alkohol"],b:[0,1],u:"Pemeriksaan berkala dan nutrisi baik melindungi ibu dan fetus."}],
 bos:{j:"pilih",t:"Klinik kesuburan menawarkan pemilihan jantina bayi melalui IVF. Penilaian PALING seimbang:",p:["Ada isu etika","Patut ditawar kepada semua","Tiada isu etika","Wajib bagi setiap pasangan"],b:0,u:"Teknologi IVF berguna untuk kemandulan, tetapi pemilihan jantina menimbulkan isu etika, undang-undang dan agama."}},

{n:6, tempat:"Studio Reka Keluarga", sk:"15.1 hingga 15.7 Mereka cipta berasaskan pembiakan dan pertumbuhan", lampiran:null,
 kadNama:"Carta Pertumbuhan", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Carta pertumbuhan membantu ibu bapa memantau perkembangan anak berbanding norma.",
 bosKadNama:"Reka Cipta Kesihatan", bosKadEm:"\u{1F4A1}", bosKadFakta:"Aplikasi rekod haid dan carta pertumbuhan membantu pengesanan awal masalah kesihatan.",
 soalan:[
 {j:"pilih",t:"Anda mereka aplikasi rekod kitar haid untuk remaja. Ciri PALING berguna:",p:["Ramal tarikh","Permainan video","Iklan makanan","Muzik latar"],b:0,u:"Rekod membantu mengesan kitar tidak teratur."},
 {j:"pilih",t:"Anda mereka carta pertumbuhan dinding untuk kelas tadika. Data PALING penting:",p:["Tinggi mengikut umur","Warna baju","Nama kegemaran","Jenama kasut"],b:0,u:"Tinggi mengikut umur dibandingkan dengan norma."},
 {j:"pilih",t:"Anda merancang kempen vaksin HPV untuk ibu bapa. Mesej PALING berkesan:",p:["Cegah kanser serviks","Vaksin tidak berguna","Hanya untuk orang dewasa","Mahal dan berbahaya"],b:0,u:"Mesej berasaskan fakta mendorong tindakan."},
 {j:"pilih",t:"Model perkembangan fetus anda menggunakan plastisin. Cara terbaik menunjukkan perkembangan ialah:",p:["Ikut trimester","Satu model sahaja","Model dewasa","Model haiwan"],b:0,u:"Urutan model menunjukkan perubahan dari masa ke masa."},
 {j:"pilih",t:"Untuk memastikan maklumat dalam risalah kesihatan reproduktif anda tepat, rujuk:",p:["Kementerian Kesihatan","Media sosial rawak","Iklan produk","Khabar angin"],b:0,u:"Sumber rasmi memastikan maklumat sahih."},
 {j:"pilih",t:"Untuk menilai kempen pemakanan ibu mengandung anda, data PALING sesuai:",p:["Berat lahir bayi","Warna poster","Bilangan poster","Harga cetakan"],b:0,u:"Berat lahir mencerminkan kesihatan fetus."},
 {j:"pilih",t:"Dalam bengkel pendidikan kesihatan reproduktif remaja, pendekatan PALING sesuai:",p:["Fakta yang sopan","Gurauan kasar","Abaikan soalan murid","Maklumat tanpa sumber"],b:0,u:"Pendekatan yang menghormati nilai budaya lebih diterima."},
 {j:"banyak",t:"Pilih DUA maklumat untuk buku panduan kehamilan sihat anda.",p:["Jadual antenatal","Sumber asid folik","Cara merokok selamat","Iklan minuman beralkohol"],b:[0,1],u:"Maklumat ini menyokong kesihatan ibu dan bayi."}],
 bos:{j:"buka",
  t:"Reka satu alat, model atau kempen berkaitan pembiakan, perkembangan atau pertumbuhan (contoh: aplikasi rekod kitar haid, carta pertumbuhan kanak-kanak, model perkembangan fetus mengikut trimester, kempen vaksin HPV atau pemakanan ibu mengandung).",
  arahan:"Nyatakan tujuan dan kumpulan sasaran, konsep biologi yang ditonjolkan (kitar haid dan hormon, perkembangan fetus, plasenta, atau lengkung pertumbuhan), bahan atau ciri reka bentuk beserta sebab, SATU pengiraan atau data sokongan (contoh: tarikh ovulasi, kadar pertumbuhan), cara mengukur keberkesanan, SATU isu etika atau privasi, dan SATU pertimbangan budaya atau agama tempatan.",
  u:"Jawapan TP6 yang kukuh menerangkan hormon, perkembangan atau pertumbuhan dengan tepat, membuat pengiraan yang betul, merujuk sumber rasmi, menjaga privasi data peribadi, menyampaikan dengan sopan mengikut nilai masyarakat, dan mencadangkan ukuran keberkesanan yang jelas."}}
];

module.exports = {
  id:"b4b15", tingkatan:4, kod:"15.0 Pembiakan Seks, Perkembangan dan Pertumbuhan pada Manusia dan Haiwan",
  tajuk:"Kitaran Hayat",
  subtajuk:"Biologi Ting. 4 · Bab 15 Pembiakan Seks, Perkembangan dan Pertumbuhan",
  spi:SPI.b4b15,
  ulasan:{
   1:"{n} dapat mengingat kembali struktur sistem pembiakan, gamet dan fungsi plasenta. Langkah seterusnya ialah menerangkan kitar haid dan perkembangan fetus.",
   2:"{n} dapat menjelaskan peranan hormon dalam kitar haid serta pembentukan kembar. Perlu lebih latihan mentafsir data kitar haid.",
   3:"{n} boleh mengaplikasikan data ketebalan endometrium dan menganggar tarikh ovulasi. Galakkan menganalisis lengkung pertumbuhan.",
   4:"{n} mampu menganalisis lengkung pertumbuhan manusia dan haiwan. Seterusnya latih menilai isu kesihatan pembiakan.",
   5:"{n} dapat menilai isu kemandulan, IVF dan kesihatan kehamilan dengan hujah saintifik dan etika. Sudah bersedia mereka alat atau kempen.",
   6:"{n} berjaya mereka alat atau kempen pembiakan dan pertumbuhan dengan justifikasi yang kukuh. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pembiakan dan Pertumbuhan. Cadangan: ulang hentian pertama dan lihat buku rekod kesihatan diri semasa bayi bersama ibu bapa."
  },
  lampiran:{
   a1:{jenis:"aliran", mod:"turun",
     nod:["Persenyawaan di tiub Falopio","Zigot membahagi","?","Penempelan pada endometrium","Fetus berkembang"],
     kapsyen:"Rajah 1 · Peristiwa daripada persenyawaan hingga perkembangan fetus",
     alt:"Rajah aliran: persenyawaan di tiub Falopio, zigot membahagi, peringkat bertanda soal, penempelan pada endometrium, fetus berkembang"},
   j1:jadual(1, "Ketebalan endometrium sepanjang kitar haid 28 hari",
     ["Hari", "1", "5", "10", "14", "21", "28"],
     [["Ketebalan (mm)","4","2","6","9","11","4"]]),
   g1:{jenis:"graf", x:[0,4,8,12,16,20], xLabel:"Umur (tahun)", titik:true, yMin:0, yMaks:180, grid:6,
     siri:[{label:"Tinggi (cm)", y:[50,100,125,145,165,170], warna:"hijau"}],
     kapsyen:"Rajah 2 · Graf tinggi seorang lelaki dari lahir hingga umur 20 tahun",
     alt:"Graf naik pesat dari 50 cm pada lahir ke 100 cm pada umur 4, kemudian 125, 145, 165 dan 170 cm pada umur 20"}
  },
  aras:ARAS
};
