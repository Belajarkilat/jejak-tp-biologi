/* Biologi KSSM Tingkatan 4, Bab 6 Pembahagian Sel.
   SK 6.1 Pembahagian sel, 6.2 Kitar sel dan mitosis, 6.3 Meiosis, 6.4 Isu pembahagian sel (DSKP Biologi).
   Pengiraan masa fasa disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Bilik Kromosom", sk:"6.1 Pembahagian sel · 6.2 Mitosis · 6.3 Meiosis", lampiran:null,
 kadNama:"Diploid dan Haploid", kadEm:"\u{1F9EC}", kadFakta:"Sel soma manusia diploid (2n = 46). Gamet haploid (n = 23).",
 bosKadNama:"Dua Jenis", bosKadEm:"\u{2702}\u{FE0F}", bosKadFakta:"Mitosis menghasilkan dua sel anak serupa; meiosis menghasilkan empat sel anak haploid yang berbeza.",
 soalan:[
 {j:"pilih",t:"Bilangan kromosom dalam sel soma manusia ialah:",p:["46","23","92","12"],b:0,u:"Sel soma diploid, iaitu 23 pasang kromosom."},
 {j:"pilih",t:"Mitosis menghasilkan:",p:["Dua sel diploid serupa","Empat sel anak haploid","Dua gamet haploid","Satu sel besar"],b:0,u:"Sel anak mempunyai bilangan dan jenis kromosom yang sama dengan sel induk."},
 {j:"pilih",t:"Meiosis berlaku dalam:",p:["Gonad","Hujung akar","Sel kulit","Sumsum tulang"],b:0,u:"Meiosis menghasilkan gamet dalam testis dan ovari."},
 {j:"pilih",t:"Pembahagian sitoplasma selepas pembahagian nukleus dikenali sebagai:",p:["Sitokinesis","Interfasa","Profasa","Replikasi"],b:0,u:"Sitokinesis membentuk dua sel anak yang berasingan."},
 {j:"pilih",t:"Gamet manusia mengandungi:",p:["23 kromosom","46 kromosom","92 kromosom","22 kromosom"],b:0,u:"Gamet haploid; persenyawaan memulihkan bilangan diploid."},
 {j:"pilih",t:"Fasa terpanjang dalam kitar sel ialah:",p:["Interfasa","Profasa","Metafasa","Anafasa"],b:0,u:"Sel membesar dan mereplikasi DNA semasa interfasa."},
 {j:"pilih",t:"Dua salinan kromosom yang identik dan bercantum pada sentromer dikenali sebagai:",p:["Kromatid kembar","Kromosom homolog","Gentian gelendong","Sentriol"],b:0,u:"Kromatid kembar terbentuk selepas replikasi DNA."},
 {j:"banyak",t:"Pilih DUA kepentingan mitosis.",p:["Pertumbuhan","Membaiki tisu rosak","Menghasilkan gamet","Variasi genetik"],b:[0,1],u:"Gamet dan variasi genetik berkaitan meiosis."}],
 bos:{j:"pilih",t:"Pindah silang berlaku semasa:",p:["Profasa I meiosis","Anafasa mitosis","Telofasa mitosis","Interfasa"],b:0,u:"Kromosom homolog bertukar segmen pada kiasma, menghasilkan variasi."}},

{n:2, tempat:"Makmal Mitosis", sk:"6.2 Kitar sel dan peringkat mitosis · 6.3 Meiosis", lampiran:"a1",
 kadNama:"PMAT", kadEm:"\u{1F504}", kadFakta:"Peringkat mitosis: profasa, metafasa, anafasa, telofasa.",
 bosKadNama:"Meiosis I", bosKadEm:"\u{2797}", bosKadFakta:"Meiosis I mengasingkan kromosom homolog; meiosis II mengasingkan kromatid kembar.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peringkat bertanda ? ialah:",p:["Anafasa","Interfasa","Sitokinesis","Profasa"],b:0,u:"Selepas metafasa, kromatid kembar ditarik ke kutub bertentangan dalam anafasa."},
 {j:"pilih",t:"Pada peringkat manakah kromosom tersusun di satah khatulistiwa?",p:["Metafasa","Profasa","Anafasa","Telofasa"],b:0,u:"Gentian gelendong menyusun kromosom di tengah sel."},
 {j:"pilih",t:"Antara berikut, yang manakah berlaku semasa profasa?",p:["Kromosom menebal","Kromatid berpisah ke kutub","Membran nukleus terbentuk semula","DNA direplikasi"],b:0,u:"Membran nukleus juga mula hilang dan gelendong terbentuk."},
 {j:"pilih",t:"Antara berikut, yang manakah berlaku semasa telofasa?",p:["Nukleus terbentuk semula","Kromosom tersusun di tengah","DNA mula direplikasi","Pindah silang berlaku"],b:0,u:"Dua nukleus anak terbentuk di setiap kutub."},
 {j:"pilih",t:"Sitokinesis sel tumbuhan berlaku melalui pembentukan:",p:["Plat sel","Alur pembelahan","Sentriol","Kiasma"],b:0,u:"Sel haiwan membentuk alur pembelahan; sel tumbuhan membentuk plat sel."},
 {j:"pilih",t:"Replikasi DNA berlaku dalam fasa:",p:["S interfasa","G₁ interfasa","Metafasa","Anafasa"],b:0,u:"Fasa S = fasa sintesis DNA."},
 {j:"pilih",t:"Dalam anafasa I meiosis, yang berpisah ialah:",p:["Kromosom homolog","Kromatid kembar","Nukleolus","Sentriol"],b:0,u:"Kromatid kembar berpisah dalam anafasa II."},
 {j:"banyak",t:"Pilih DUA perbezaan meiosis berbanding mitosis.",p:["Berlaku pindah silang","Menghasilkan empat sel anak","Sel anak identik","Satu pembahagian nukleus"],b:[0,1],u:"Meiosis melibatkan dua pembahagian dan menghasilkan sel anak yang berbeza."}],
 bos:{j:"pilih",t:"Sel induk dengan 2n = 8 menjalani meiosis. Bilangan kromosom dalam setiap sel anak ialah:",p:["4","8","16","2"],b:0,u:"Meiosis menghasilkan sel haploid: n = 4."}},

{n:3, tempat:"Makmal Hujung Akar", sk:"6.2 Mengaplikasikan pemerhatian mitosis", lampiran:"j1",
 kadNama:"Indeks Mitosis", kadEm:"\u{1F9C5}", kadFakta:"Peratus sel dalam sesuatu fasa berkadar dengan masa yang diambil oleh fasa itu.",
 bosKadNama:"Hujung Akar", bosKadEm:"\u{1F331}", bosKadFakta:"Tisu meristem di hujung akar bawang membahagi secara aktif, sesuai untuk melihat mitosis.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah jumlah sel yang diperhatikan?",b:200,tol:0.5,suf:"sel",u:"160 + 20 + 8 + 6 + 6 = 200 sel."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung peratus sel dalam interfasa.",b:80,tol:0.1,suf:"%",u:"160 ÷ 200 × 100% = 80%."},
 {j:"nombor",t:"Berdasarkan Jadual 1, kitar sel mengambil masa 24 jam. Anggarkan tempoh interfasa.",b:19.2,tol:0.05,suf:"jam",u:"80% × 24 = 19.2 jam."},
 {j:"nombor",t:"Berdasarkan Jadual 1, anggarkan tempoh profasa dalam jam.",b:2.4,tol:0.05,suf:"jam",u:"20 ÷ 200 × 24 = 2.4 jam."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung indeks mitosis (peratus sel yang sedang membahagi).",b:20,tol:0.1,suf:"%",u:"(20 + 8 + 6 + 6) ÷ 200 × 100% = 20%."},
 {j:"pilih",t:"Mengapakah hujung akar dipilih untuk eksperimen dalam Jadual 1?",p:["Sel membahagi aktif","Sel tidak berklorofil","Akar mudah dipotong","Akar paling keras"],b:0,u:"Meristem apeks akar kaya dengan sel yang sedang bermitosis."},
 {j:"pilih",t:"Asid hidroklorik cair digunakan pada hujung akar sebelum diwarnakan untuk:",p:["Memisahkan sel","Mewarnakan kromosom","Membunuh bakteria","Menambah saiz sel"],b:0,u:"Asid melembutkan lamela tengah supaya sel mudah dipenyetkan."},
 {j:"pilih",t:"Pewarna asetoorsein digunakan untuk:",p:["Mewarnakan kromosom","Menghidrolisis dinding sel","Menyerap cahaya","Mengawet sel"],b:0,u:"Kromosom diwarnakan merah atau ungu supaya jelas kelihatan."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, mengapakah bilangan sel dalam anafasa paling sedikit?",p:["Anafasa sangat singkat","Anafasa tidak berlaku","Sel anafasa mati","Pewarna tidak melekat"],b:0,u:"Fasa yang singkat menyumbang sedikit sel pada satu masa."}},

{n:4, tempat:"Bilik Graf DNA", sk:"6.2 Menganalisis perubahan kandungan DNA dalam kitar sel", lampiran:"g1",
 kadNama:"Kandungan DNA", kadEm:"\u{1F4C8}", kadFakta:"Kandungan DNA berganda semasa fasa S dan kembali separuh selepas sitokinesis.",
 bosKadNama:"Titik Semakan", bosKadEm:"\u{1F6A6}", bosKadFakta:"Titik semakan kitar sel memastikan DNA lengkap dan tidak rosak sebelum sel membahagi.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 2, fasa S berlaku antara:",p:["8 dan 16 jam","0 dan 8 jam","16 dan 20 jam","20 dan 24 jam"],b:0,u:"Kandungan DNA meningkat dari 2 ke 4 unit dalam tempoh ini."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah kandungan DNA semasa G₂?",b:4,tol:0.05,suf:"unit",u:"Selepas replikasi, DNA berganda kepada 4 unit."},
 {j:"pilih",t:"Berdasarkan Rajah 2, kejatuhan kandungan DNA pada 24 jam disebabkan oleh:",p:["Pembahagian sel","Kemusnahan DNA","Replikasi DNA","Pindah silang"],b:0,u:"DNA dibahagikan sama rata kepada dua sel anak."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapa lamakah fasa G₁?",b:8,tol:0.05,suf:"jam",u:"Dari 0 hingga 8 jam sebelum replikasi bermula."},
 {j:"pilih",t:"Berdasarkan Rajah 2, apakah yang berlaku semasa G₁?",p:["Sel membesar","Kromosom berpisah","DNA berganda","Sitokinesis berlaku"],b:0,u:"Sel membesar dan mensintesis protein serta organel."},
 {j:"pilih",t:"Jika Rajah 2 ialah meiosis, kandungan DNA dalam setiap sel anak akhir ialah:",p:["1 unit","2 unit","4 unit","8 unit"],b:0,u:"Dua pembahagian berturut-turut: 4 → 2 → 1 unit."},
 {j:"pilih",t:"Bahan kimia yang menghalang pembentukan gentian gelendong ditambah. Sel akan terhenti pada:",p:["Metafasa","Fasa G₁","Fasa S","Interfasa awal"],b:0,u:"Kromosom tidak dapat disusun dan dipisahkan tanpa gentian gelendong."},
 {j:"pilih",t:"Sel kanser mempunyai tempoh G₁ yang sangat pendek. Kesannya:",p:["Membahagi lebih kerap","Sel tidak membahagi","DNA tidak direplikasi","Sel menjadi gamet"],b:0,u:"Kitar sel yang singkat menyebabkan percambahan sel tidak terkawal."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 2, mengapakah replikasi DNA mesti berlaku sebelum mitosis?",p:["Sel anak dapat DNA lengkap","Sel induk perlu DNA berganda","Supaya sel anak menjadi haploid","Supaya pindah silang berlaku"],b:0,u:"Setiap sel anak menerima satu set kromosom yang lengkap dan serupa."}},

{n:5, tempat:"Dewan Isu Sel", sk:"6.4 Menilai isu pembahagian sel", lampiran:null,
 kadNama:"Kanser", kadEm:"\u{1F397}\u{FE0F}", kadFakta:"Kanser berlaku apabila sel membahagi secara mitosis tanpa kawalan dan membentuk tumor.",
 bosKadNama:"Kultur Tisu", bosKadEm:"\u{1F33F}", bosKadFakta:"Kultur tisu menghasilkan banyak anak pokok serupa daripada sedikit tisu induk melalui mitosis.",
 soalan:[
 {j:"pilih",t:"Antara berikut, faktor manakah meningkatkan risiko kanser kulit?",p:["Sinaran UV","Minum air kosong","Tidur yang cukup","Makan sayur hijau"],b:0,u:"Sinaran UV boleh merosakkan DNA sel kulit."},
 {j:"pilih",t:"Sindrom Down berlaku akibat:",p:["Tak disjungsi kromosom 21","Mitosis terlalu perlahan","Kekurangan vitamin C","Jangkitan bakteria"],b:0,u:"Kromosom 21 gagal berpisah semasa meiosis, jadi individu ada 47 kromosom."},
 {j:"pilih",t:"Kelebihan utama kultur tisu dalam pertanian ialah:",p:["Klon serupa dengan cepat","Tumbuhan bervariasi","Tidak perlu makmal","Kos permulaan sifar"],b:0,u:"Mitosis menghasilkan klon dengan ciri baik induk."},
 {j:"pilih",t:"Kelemahan utama ladang kelapa sawit klon daripada satu induk ialah:",p:["Rentan penyakit sama","Hasil tidak seragam","Pokok lambat berbuah","Buah tidak boleh dijual"],b:0,u:"Tiada variasi genetik, jadi semua pokok sama rentan."},
 {j:"pilih",t:"Rawatan radioterapi untuk kanser berfungsi dengan:",p:["Rosakkan DNA kanser","Mempercepat mitosis","Menambah sel darah","Menukar sel kepada gamet"],b:0,u:"Sel kanser yang cepat membahagi lebih terjejas oleh kerosakan DNA."},
 {j:"pilih",t:"Pengklonan haiwan seperti kambing biri-biri Dolly menimbulkan isu etika kerana:",p:["Kesihatan klon tak menentu","Klon tidak mempunyai DNA","Klon tidak boleh hidup","Klon tidak mempunyai sel"],b:0,u:"Klon awal sering mengalami masalah kesihatan, dan timbul persoalan moral."},
 {j:"pilih",t:"Saringan kanser serviks (ujian Pap) dianjurkan kerana:",p:["Kesan awal sel abnormal","Mencegah semua jenis kanser","Mengubah DNA sel","Menghentikan meiosis"],b:0,u:"Pengesanan awal meningkatkan peluang rawatan berjaya."},
 {j:"banyak",t:"Pilih DUA amalan yang mengurangkan risiko kanser.",p:["Tidak merokok","Guna pelindung matahari","Kerap makan makanan dibakar hangus","Berjemur lama tengah hari"],b:[0,1],u:"Asap rokok, makanan hangus dan UV mengandungi karsinogen."}],
 bos:{j:"pilih",t:"Kementerian mencadangkan semua anak benih durian dihasilkan secara kultur tisu daripada satu klon terbaik. Penilaian PALING seimbang:",p:["Pelbagaikan induk klon","Terima cadangan sepenuhnya","Tolak kaedah kultur tisu","Guna biji benih rawak"],b:0,u:"Kultur tisu berguna, tetapi pelbagai klon mengekalkan variasi dan mengurangkan risiko penyakit."}},

{n:6, tempat:"Studio Reka Sel", sk:"6.1 hingga 6.4 Mereka cipta berasaskan pembahagian sel", lampiran:null,
 kadNama:"Model Mitosis", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Model kromosom daripada manik atau plastisin membantu menunjukkan pergerakan kromosom.",
 bosKadNama:"Kempen Kesihatan", bosKadEm:"\u{1F4A1}", bosKadFakta:"Kempen pencegahan kanser menggunakan fakta saintifik untuk mengubah tingkah laku.",
 soalan:[
 {j:"pilih",t:"Anda membina model mitosis dengan plastisin. Bagaimanakah menunjukkan kromatid kembar?",p:["Dua batang sama dicantum","Dua batang berbeza warna berasingan","Satu batang panjang","Bola bulat kecil"],b:0,u:"Kromatid kembar identik dan bercantum di sentromer."},
 {j:"pilih",t:"Untuk menunjukkan kromosom homolog dalam model meiosis, anda patut:",p:["Dua warna, saiz sama","Guna satu warna sahaja","Guna saiz berbeza sama sekali","Tidak perlu tunjukkan"],b:0,u:"Satu dari ibu, satu dari bapa: sama saiz dan gen, asal berbeza."},
 {j:"pilih",t:"Bagaimanakah anda menunjukkan pindah silang dalam model?",p:["Tukar hujung homolog","Gandakan bilangan kromosom","Buang satu kromosom","Cantumkan kromosom bersama"],b:0,u:"Pindah silang menukar segmen antara kromatid bukan kembar homolog."},
 {j:"pilih",t:"Anda mereka poster kempen kanser kulit untuk murid. Mesej utama PALING berkesan:",p:["Guna pelindung matahari","Kanser tidak boleh dicegah","Berjemur menyihatkan kulit","Abaikan tahi lalat berubah"],b:0,u:"Mesej yang jelas dan boleh diamalkan lebih berkesan."},
 {j:"pilih",t:"Anda mahu menghasilkan banyak anak pokok orkid untuk dijual. Kaedah PALING sesuai:",p:["Kultur tisu steril","Tanam biji rawak","Kacukan setiap pokok","Tunggu tunas semula jadi"],b:0,u:"Kultur tisu menghasilkan banyak klon dengan cepat."},
 {j:"pilih",t:"Langkah PALING penting supaya kultur tisu anda tidak gagal:",p:["Steril alat dan medium","Letak di luar rumah","Guna air paip","Biarkan bekas terbuka"],b:0,u:"Kulat dan bakteria mudah mencemari medium bernutrien."},
 {j:"pilih",t:"Untuk menilai keberkesanan model mitosis anda sebagai bahan bantu mengajar, cara PALING sesuai:",p:["Ujian pra dan pasca","Tanya warna kegemaran","Kira bilangan plastisin","Ukur berat model"],b:0,u:"Perbandingan skor menunjukkan peningkatan kefahaman."},
 {j:"banyak",t:"Pilih DUA maklumat yang perlu ada pada risalah saringan kanser anda.",p:["Tanda awal yang perlu diperhatikan","Tempat saringan percuma","Harga barang kemas","Resipi kek"],b:[0,1],u:"Maklumat yang relevan mendorong tindakan saringan awal."}],
 bos:{j:"buka",
  t:"Reka satu bahan bantu atau kempen berkaitan pembahagian sel (contoh: model mitosis dan meiosis bergerak, permainan kad peringkat mitosis, kempen pencegahan kanser kulit, rancangan kultur tisu tanaman tempatan).",
  arahan:"Nyatakan tujuan dan kumpulan sasaran, konsep pembahagian sel yang ditonjolkan (peringkat mitosis, meiosis, pindah silang atau kawalan kitar sel), bahan dan reka bentuk beserta sebab, fakta saintifik utama yang disampaikan, cara menguji keberkesanan, SATU isu etika atau keselamatan yang berkaitan, dan SATU pertimbangan kos.",
  u:"Jawapan TP6 yang kukuh menunjukkan peringkat pembahagian dengan tepat, membezakan mitosis dan meiosis, mengaitkan konsep dengan isu sebenar seperti kanser atau kultur tisu, mencadangkan ujian pra dan pasca, mengambil kira etika, dan menggunakan bahan murah."}}
];

module.exports = {
  id:"b4b6", tingkatan:4, kod:"6.0 Pembahagian Sel",
  tajuk:"Rahsia Pembahagian",
  subtajuk:"Biologi Ting. 4 · Bab 6 Pembahagian Sel",
  spi:SPI.b4b6,
  ulasan:{
   1:"{n} dapat mengingat kembali jenis pembahagian sel, bilangan kromosom dan kepentingan mitosis. Langkah seterusnya ialah menerangkan peringkat mitosis dan meiosis.",
   2:"{n} dapat menjelaskan peringkat mitosis dan meiosis. Perlu lebih latihan mengira tempoh fasa daripada data hujung akar.",
   3:"{n} boleh mengaplikasikan data pemerhatian hujung akar untuk mengira tempoh fasa dan indeks mitosis. Galakkan menganalisis graf kandungan DNA.",
   4:"{n} mampu menganalisis perubahan kandungan DNA dalam kitar sel. Seterusnya latih menilai isu kanser, kultur tisu dan pengklonan.",
   5:"{n} dapat menilai isu pembahagian sel dengan hujah saintifik dan etika. Sudah bersedia mereka bahan bantu atau kempen.",
   6:"{n} berjaya mereka bahan bantu atau kempen pembahagian sel yang tepat dan kreatif. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pembahagian Sel. Cadangan: ulang hentian pertama dan lukis empat peringkat mitosis."
  },
  lampiran:{
   a1:{jenis:"aliran", mod:"turun",
     nod:["Interfasa","Profasa","Metafasa","?","Telofasa dan sitokinesis"],
     kapsyen:"Rajah 1 · Urutan peringkat dalam kitar sel dan mitosis",
     alt:"Rajah aliran: interfasa, profasa, metafasa, peringkat bertanda soal, telofasa dan sitokinesis"},
   j1:jadual(1, "Bilangan sel hujung akar bawang dalam setiap fasa",
     ["Fasa", "Bilangan sel"],
     [["Interfasa","160"],["Profasa","20"],["Metafasa","8"],["Anafasa","6"],["Telofasa","6"]]),
   g1:{jenis:"graf", x:[0,4,8,12,16,20,24], xLabel:"Masa (jam)", titik:true, yMin:0, yMaks:5, grid:5,
     siri:[{label:"Kandungan DNA per sel (unit)", y:[2,2,2,3,4,4,2], warna:"hijau"}],
     kapsyen:"Rajah 2 · Graf kandungan DNA dalam satu sel sepanjang kitar sel",
     alt:"Graf mendatar 2 unit dari 0 hingga 8 jam, naik ke 4 unit pada 16 jam, kekal 4 hingga 20 jam, jatuh ke 2 unit pada 24 jam"}
  },
  aras:ARAS
};
