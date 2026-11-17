/* Biologi KSSM Tingkatan 5, Bab 6 Pembiakan Seks dalam Tumbuhan Berbunga.
   SK 6.1 Struktur bunga, 6.2 Perkembangan debunga dan pundi embrio, 6.3 Pendebungaan dan persenyawaan,
   6.4 Perkembangan biji benih dan buah, 6.5 Kepentingan biji benih untuk kemandirian (DSKP Biologi). */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Taman Bunga", sk:"6.1 Struktur bunga", lampiran:null,
 kadNama:"Stamen", kadEm:"\u{1F33C}", kadFakta:"Stamen ialah organ pembiakan jantan yang terdiri daripada anter dan filamen.",
 bosKadNama:"Pistil", bosKadEm:"\u{1F337}", bosKadFakta:"Pistil terdiri daripada stigma, stil dan ovari yang mengandungi ovul.",
 soalan:[
 {j:"pilih",t:"Bahagian bunga yang menghasilkan butir debunga ialah:",p:["Anter","Stigma","Ovari","Kelopak bunga"],b:0,u:"Anter terletak di hujung filamen."},
 {j:"pilih",t:"Bahagian bunga yang menerima butir debunga ialah:",p:["Stigma","Anter","Filamen","Kelopak"],b:0,u:"Stigma melekit untuk memerangkap debunga."},
 {j:"pilih",t:"Ovul terletak di dalam:",p:["Ovari","Anter","Stil","Kelopak bunga"],b:0,u:"Ovari berkembang menjadi buah."},
 {j:"pilih",t:"Fungsi sepal ialah:",p:["Lindungi kudup","Menghasilkan debunga","Menerima debunga","Menghasilkan nektar"],b:0,u:"Sepal membalut kudup bunga sebelum kembang."},
 {j:"pilih",t:"Kelopak bunga yang berwarna terang berfungsi untuk:",p:["Menarik serangga","Menyimpan air hujan","Menghasilkan ovul","Melindungi akar"],b:0,u:"Serangga membantu pendebungaan."},
 {j:"pilih",t:"Bahagian yang menyokong anter ialah:",p:["Filamen","Stil","Sepal","Tangkai daun"],b:0,u:"Filamen meninggikan anter supaya debunga mudah tersebar."},
 {j:"pilih",t:"Bunga yang mempunyai stamen dan pistil dalam bunga yang sama dikenali sebagai bunga:",p:["Lengkap","Bunga jantan","Bunga betina","Mandul"],b:0,u:"Contohnya bunga raya."},
 {j:"banyak",t:"Pilih DUA bahagian pistil.",p:["Stigma","Ovari","Anter","Filamen"],b:[0,1],u:"Anter dan filamen ialah bahagian stamen."}],
 bos:{j:"pilih",t:"Bunga jagung tiada kelopak berwarna dan anternya tergantung keluar. Ini menunjukkan bunga itu:",p:["Dibawa angin","Didebungakan oleh lebah","Didebungakan oleh burung","Tidak perlukan pendebungaan"],b:0,u:"Bunga pendebungaan angin tidak perlu menarik haiwan."}},

{n:2, tempat:"Lorong Debunga", sk:"6.2 Perkembangan debunga dan pundi embrio · 6.3 Persenyawaan ganda dua", lampiran:"a1",
 kadNama:"Tiub Debunga", kadEm:"\u{1F9EC}", kadFakta:"Tiub debunga tumbuh melalui stil membawa dua nukleus jantan ke ovul.",
 bosKadNama:"Persenyawaan Ganda Dua", bosKadEm:"\u{2728}", bosKadFakta:"Satu nukleus jantan bersenyawa dengan sel telur; satu lagi bergabung dengan dua nukleus kutub.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa bertanda ? ialah:",p:["Tiub debunga tumbuh","Ovari menjadi biji benih","Anter pecah dan kering","Sepal gugur ke tanah"],b:0,u:"Tiub debunga tumbuh dari stigma melalui stil ke ovul."},
 {j:"pilih",t:"Sel induk debunga membahagi secara meiosis untuk menghasilkan:",p:["Empat mikrospora","Dua sel telur baharu","Satu ovul matang","Lapan anter kecil"],b:0,u:"Setiap mikrospora menjadi butir debunga."},
 {j:"pilih",t:"Pundi embrio yang matang mengandungi berapa nukleus?",p:["Lapan","Dua","Empat","Satu"],b:0,u:"Termasuk sel telur, dua nukleus kutub, dua sinergid dan tiga antipodal."},
 {j:"pilih",t:"Nukleus jantan pertama bersenyawa dengan sel telur untuk membentuk:",p:["Zigot diploid","Endosperma triploid","Tiub debunga","Mikrospora"],b:0,u:"Zigot berkembang menjadi embrio."},
 {j:"pilih",t:"Nukleus jantan kedua bergabung dengan dua nukleus kutub untuk membentuk:",p:["Nukleus endosperma","Zigot diploid","Sel telur","Butir debunga"],b:0,u:"Nukleus endosperma bersifat triploid (3n)."},
 {j:"pilih",t:"Berdasarkan Rajah 1, tiub debunga memasuki ovul melalui:",p:["Mikropil","Stomata","Filamen","Sepal"],b:0,u:"Mikropil ialah liang kecil pada ovul."},
 {j:"pilih",t:"Nukleus tiub di hujung tiub debunga berfungsi untuk:",p:["Mengawal tiub","Bersenyawa dengan sel telur","Membentuk endosperma","Menghasilkan nektar manis"],b:0,u:"Nukleus tiub merosot selepas tiub sampai ke ovul."},
 {j:"banyak",t:"Pilih DUA hasil persenyawaan ganda dua.",p:["Zigot","Nukleus endosperma","Butir debunga","Mikrospora"],b:[0,1],u:"Butir debunga dan mikrospora terbentuk sebelum persenyawaan."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, jika stil dipotong selepas pendebungaan tetapi sebelum tiub debunga sampai ke ovari, apakah kesannya?",p:["Tiada persenyawaan","Persenyawaan lebih cepat","Biji terbentuk tanpa embrio","Bunga menghasilkan lebih debunga"],b:0,u:"Nukleus jantan tidak dapat sampai ke sel telur."}},

{n:3, tempat:"Makmal Percambahan", sk:"6.3 Mengaplikasikan eksperimen percambahan debunga", lampiran:"j1",
 kadNama:"Larutan Sukrosa", kadEm:"\u{1F36F}", kadFakta:"Butir debunga boleh dicambahkan dalam larutan sukrosa yang menyerupai cecair stigma.",
 bosKadNama:"Kepekatan Optimum", bosKadEm:"\u{1F3AF}", bosKadFakta:"Kepekatan sukrosa yang terlalu tinggi menyebabkan debunga kehilangan air secara osmosis.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 1, kepekatan sukrosa optimum untuk percambahan debunga ialah:",p:["10%","5%","15%","20%"],b:0,u:"Peratus percambahan paling tinggi, 80%."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah bilangan butir debunga yang bercambah pada 10% jika 50 butir diperhatikan?",b:40,tol:0.5,suf:"butir",u:"80% × 50 = 40 butir."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah beza peratus percambahan antara 10% dan 20% sukrosa?",b:65,tol:0.5,suf:"%",u:"80 − 15 = 65%."},
 {j:"pilih",t:"Berdasarkan Jadual 1, percambahan rendah pada 20% sukrosa kerana larutan:",p:["Hipertonik","Hipotonik","Isotonik","Berasid"],b:0,u:"Debunga kehilangan air secara osmosis."},
 {j:"pilih",t:"Berdasarkan Jadual 1, percambahan rendah pada 0% (air suling) kerana debunga:",p:["Mungkin pecah","Kekurangan cahaya","Suhu terlalu sejuk","Kehilangan nukleus"],b:0,u:"Air masuk secara osmosis dan tiada gula sebagai sumber tenaga."},
 {j:"pilih",t:"Berdasarkan Jadual 1, pemboleh ubah dimanipulasi ialah:",p:["Kepekatan sukrosa","Peratus percambahan","Jenis bunga digunakan","Masa pemerhatian"],b:0,u:"Kepekatan sukrosa diubah dari 0% hingga 20%."},
 {j:"pilih",t:"Alat yang diperlukan untuk memerhati tiub debunga ialah:",p:["Mikroskop","Teleskop","Termometer","Pembaris meter"],b:0,u:"Tiub debunga sangat halus."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung purata peratus percambahan bagi 5% dan 15% sukrosa.",b:55,tol:0.5,suf:"%",u:"(50 + 60) ÷ 2 = 55%."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, untuk menentukan kepekatan optimum dengan lebih tepat, langkah seterusnya:",p:["Uji 8% hingga 12%","Uji pada 0% sahaja","Guna satu butir debunga","Kurangkan masa pemerhatian"],b:0,u:"Sela kecil di sekitar puncak memberi anggaran lebih tepat."}},

{n:4, tempat:"Bilik Buah", sk:"6.4 Menganalisis perkembangan biji benih dan buah", lampiran:"g1",
 kadNama:"Ovari ke Buah", kadEm:"\u{1F34E}", kadFakta:"Selepas persenyawaan, ovari menjadi buah dan ovul menjadi biji benih.",
 bosKadNama:"Kotiledon", bosKadEm:"\u{1F95C}", bosKadFakta:"Kotiledon menyimpan makanan untuk embrio semasa percambahan.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah jisim buah pada minggu ke-6?",b:60,tol:0.5,suf:"g",u:"Bacaan graf ialah 60 g."},
 {j:"nombor",t:"Berdasarkan Rajah 2, hitung kadar pertambahan jisim buah dari minggu 2 hingga 6.",b:12.5,tol:0.1,suf:"g/minggu",u:"(60 − 10) ÷ 4 = 12.5 g seminggu."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah jisim buah meningkat pesat dari minggu 2 hingga 6?",p:["Sukrosa masuk ke buah","Daun pokok gugur","Bunga mula layu","Air menyejat dari buah"],b:0,u:"Buah ialah sinki utama pada peringkat ini."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah jisim buah hampir malar selepas minggu ke-8?",p:["Buah telah matang","Pokok induk mati","Bunga baharu tumbuh","Akar berhenti menyerap"],b:0,u:"Pembesaran tamat dan buah mula masak."},
 {j:"pilih",t:"Integumen ovul berkembang menjadi:",p:["Testa","Endosperma","Embrio","Isi buah"],b:0,u:"Testa ialah kulit biji yang melindungi embrio."},
 {j:"pilih",t:"Dinding ovari berkembang menjadi:",p:["Perikarpa","Testa","Plumul","Radikel"],b:0,u:"Perikarpa ialah dinding buah."},
 {j:"pilih",t:"Endosperma dalam biji jagung berfungsi:",p:["Simpan makanan","Melindungi biji","Menyerap air tanah","Menghasilkan klorofil"],b:0,u:"Endosperma kaya kanji."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah pertambahan jisim dari minggu 6 hingga 8?",b:20,tol:0.5,suf:"g",u:"80 − 60 = 20 g."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 2, petani mahu buah dieksport jauh. Bilakah buah PALING sesuai dipetik?",p:["Minggu ke-8","Minggu ke-2","Minggu ke-4","Minggu ke-12"],b:0,u:"Buah sudah mencapai saiz maksimum tetapi belum terlalu masak."}},

{n:5, tempat:"Bank Benih", sk:"6.5 Menilai kepentingan biji benih", lampiran:null,
 kadNama:"Dorman", kadEm:"\u{1F4A4}", kadFakta:"Biji benih dorman boleh bertahan dalam keadaan buruk dan bercambah apabila keadaan sesuai.",
 bosKadNama:"Bank Benih", bosKadEm:"\u{1F3E6}", bosKadFakta:"Bank benih menyimpan biji benih pada suhu rendah dan kering untuk memelihara kepelbagaian genetik.",
 soalan:[
 {j:"pilih",t:"Kepentingan biji benih kepada kemandirian spesies ialah:",p:["Tahan keadaan buruk","Menarik serangga","Menghasilkan debunga","Berfotosintesis pesat"],b:0,u:"Kulit biji keras dan dorman membantu biji bertahan."},
 {j:"pilih",t:"Biji pokok kelapa disebarkan oleh:",p:["Air","Letupan","Haiwan","Angin"],b:0,u:"Sabut kelapa ringan dan berongga membolehkannya terapung."},
 {j:"pilih",t:"Biji benih yang disimpan di bank benih dikeringkan dan disejukkan untuk:",p:["Respirasi perlahan","Mempercepat percambahan","Membunuh embrio","Menambah kandungan air"],b:0,u:"Simpanan makanan tidak cepat habis."},
 {j:"pilih",t:"Penyebaran biji benih penting kerana mengelakkan:",p:["Persaingan","Pendebungaan","Persenyawaan","Fotosintesis"],b:0,u:"Anak pokok tidak bersaing cahaya dan nutrien dengan pokok induk."},
 {j:"pilih",t:"Penilaian PALING tepat tentang penggunaan biji benih hibrid oleh petani padi:",p:["Hasil tinggi, perlu beli semula","Biji boleh disimpan untuk musim depan","Tidak memerlukan baja","Tiada sebarang kelebihan"],b:0,u:"Generasi kedua hibrid tidak seragam dan hasil menurun."},
 {j:"pilih",t:"Bank benih global penting kerana:",p:["Simpan variasi genetik","Menjual biji dengan harga mahal","Menggantikan hutan asli","Mengurangkan bilangan petani"],b:0,u:"Varieti lama mungkin mempunyai gen tahan penyakit."},
 {j:"pilih",t:"Biji benih durian cepat hilang daya hidup kerana:",p:["Tidak tahan kering","Kulitnya sangat keras","Saiznya terlalu kecil","Banyak endosperma"],b:0,u:"Biji rekalsitran tidak boleh dikeringkan untuk simpanan."},
 {j:"banyak",t:"Pilih DUA ciri biji benih yang membantu kemandirian.",p:["Kulit biji keras","Simpanan makanan","Tiada embrio","Warna terang"],b:[0,1],u:"Embrio diperlukan untuk menjadi tumbuhan baharu."}],
 bos:{j:"pilih",t:"Sebuah koperasi petani mahu menggantikan semua varieti padi tradisional dengan satu varieti moden berhasil tinggi. Penilaian PALING tepat:",p:["Berisiko","Tiada risiko kepada petani","Kepelbagaian genetik bertambah","Hasil pasti kekal tinggi"],b:0,u:"Kepelbagaian genetik rendah menyebabkan seluruh tanaman terdedah kepada satu penyakit."}},

{n:6, tempat:"Studio Bunga", sk:"6.1 hingga 6.5 Mereka cipta berasaskan pembiakan tumbuhan", lampiran:null,
 kadNama:"Pendebungaan Tangan", kadEm:"\u{270B}", kadFakta:"Pendebungaan tangan memindahkan debunga dengan berus untuk meningkatkan hasil seperti vanila dan durian.",
 bosKadNama:"Reka Cipta Kebun", bosKadEm:"\u{1F4A1}", bosKadFakta:"Taman bunga menarik lebah dan rama-rama yang meningkatkan pendebungaan tanaman berdekatan.",
 soalan:[
 {j:"pilih",t:"Untuk melakukan pendebungaan kacukan buatan, anter bunga betina perlu dibuang lebih awal untuk:",p:["Elak pendebungaan sendiri","Menambah penghasilan nektar","Menarik lebih banyak serangga","Mempercepat bunga layu"],b:0,u:"Pembuangan anter (emaskulasi) memastikan hanya debunga pilihan digunakan."},
 {j:"pilih",t:"Selepas pendebungaan buatan, bunga dibalut beg kertas untuk:",p:["Halang debunga asing","Menambah cahaya ke bunga","Membunuh serangga perosak","Menyejukkan bunga"],b:0,u:"Memastikan tiada debunga lain sampai ke stigma."},
 {j:"pilih",t:"Anda mahu menarik lebah ke kebun sekolah. Pilihan PALING sesuai:",p:["Tanam bunga bernektar","Sembur racun serangga","Tebang pokok besar","Tanam rumput karpet"],b:0,u:"Nektar dan warna terang menarik lebah."},
 {j:"pilih",t:"Bagi menguji daya hidup biji benih simpanan, anda menjalankan:",p:["Ujian percambahan","Ujian rasa biji","Ujian bau biji","Ujian warna kulit biji"],b:0,u:"Kira peratus biji yang bercambah dalam keadaan sesuai."},
 {j:"pilih",t:"Untuk menyimpan biji cili bagi musim depan, cara PALING sesuai:",p:["Kering dan sejuk","Basah dan panas","Di bawah matahari terik","Direndam dalam air"],b:0,u:"Respirasi perlahan dan kulat tidak tumbuh."},
 {j:"pilih",t:"Data peratus percambahan biji yang disimpan selama 1, 3 dan 6 bulan paling sesuai dibentangkan dengan:",p:["Graf garis","Carta pai","Senarai nama","Lukisan"],b:0,u:"Graf garis menunjukkan perubahan mengikut masa."},
 {j:"pilih",t:"Dalam ujian percambahan, bilangan biji yang PALING sesuai untuk setiap set:",p:["20 atau lebih","Satu biji","Dua biji","Tiga biji"],b:0,u:"Sampel besar mengurangkan ralat."},
 {j:"banyak",t:"Pilih DUA keadaan yang diperlukan untuk percambahan biji benih.",p:["Air","Oksigen","Cahaya terang","Baja kimia"],b:[0,1],u:"Suhu sesuai juga diperlukan; kebanyakan biji tidak perlu cahaya untuk bercambah."}],
 bos:{j:"buka",
  t:"Reka satu projek atau eksperimen berkaitan pembiakan seks tumbuhan berbunga untuk sekolah atau komuniti (contoh: taman bunga mesra lebah, bank benih sayur komuniti, eksperimen percambahan debunga dalam larutan sukrosa, pendebungaan tangan cili atau timun untuk menambah hasil).",
  arahan:"Nyatakan tujuan, konsep yang terlibat (struktur bunga, pendebungaan, persenyawaan ganda dua, perkembangan biji dan buah atau dorman), bahan dan cara menjalankan, pemboleh ubah yang dimanipulasi, bergerak balas dan dimalarkan, cara mengukur keberhasilan, SATU langkah keselamatan, dan SATU manfaat kepada komuniti atau kelestarian.",
  u:"Jawapan TP6 yang kukuh mengaitkan reka bentuk dengan proses pembiakan yang betul, mengawal pemboleh ubah, menggunakan sampel yang cukup besar, mengukur seperti peratus percambahan atau bilangan buah, menjaga keselamatan, serta menilai manfaat kepada petani dan kepelbagaian genetik."}}
];

module.exports = {
  id:"b5b6", tingkatan:5, kod:"6.0 Pembiakan Seks dalam Tumbuhan Berbunga",
  tajuk:"Taman Benih",
  subtajuk:"Biologi Ting. 5 · Bab 6 Pembiakan Seks dalam Tumbuhan Berbunga",
  spi:SPI.b5b6,
  ulasan:{
   1:"{n} dapat mengingat kembali struktur bunga. Langkah seterusnya ialah menerangkan persenyawaan ganda dua.",
   2:"{n} dapat menjelaskan perkembangan debunga dan persenyawaan ganda dua. Perlu lebih latihan mentafsir data percambahan debunga.",
   3:"{n} boleh mengaplikasikan data eksperimen percambahan debunga. Galakkan menganalisis graf perkembangan buah.",
   4:"{n} mampu menganalisis perkembangan biji benih dan buah. Seterusnya latih menilai kepentingan biji benih.",
   5:"{n} dapat menilai kepentingan biji benih kepada kemandirian dan pertanian. Sudah bersedia mereka projek pembiakan tumbuhan.",
   6:"{n} berjaya mereka projek pembiakan tumbuhan yang terancang dan bermanfaat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pembiakan Seks dalam Tumbuhan Berbunga. Cadangan: ulang hentian pertama dan belah sekuntum bunga raya untuk mengenal pasti bahagiannya."
  },
  lampiran:{
   a1:{jenis:"aliran", mod:"turun",
     nod:["Debunga mendarat di stigma","?","Dua nukleus jantan masuk ke ovul","Persenyawaan ganda dua"],
     kapsyen:"Rajah 1 · Urutan dari pendebungaan hingga persenyawaan",
     alt:"Rajah aliran: debunga mendarat di stigma, peristiwa bertanda soal, dua nukleus jantan masuk ke ovul, persenyawaan ganda dua"},
   j1:jadual(1, "Peratus percambahan butir debunga selepas 1 jam",
     ["Sukrosa (%)", "0", "5", "10", "15", "20"],
     [["Percambahan (%)","5","50","80","60","15"]]),
   g1:{jenis:"graf", x:[0,2,4,6,8,10,12], xLabel:"Masa (minggu)", titik:true, yMin:0, yMaks:100, grid:10,
     siri:[{label:"Jisim buah (g)", y:[0,10,30,60,80,80,80], warna:"hijau"}],
     kapsyen:"Rajah 2 · Graf jisim buah tomato selepas persenyawaan",
     alt:"Graf naik dari 0 ke 10 g pada minggu 2, 30 pada minggu 4, 60 pada minggu 6, 80 pada minggu 8, kemudian malar 80 g hingga minggu 12"}
  },
  aras:ARAS
};
