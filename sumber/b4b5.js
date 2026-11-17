/* Biologi KSSM Tingkatan 4, Bab 5 Metabolisme dan Enzim.
   SK 5.1 Metabolisme, 5.2 Enzim, 5.3 Aplikasi enzim dalam kehidupan harian (DSKP Biologi).
   Kadar = 1 ÷ masa, disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Kilang Sel", sk:"5.1 Metabolisme · 5.2 Enzim", lampiran:null,
 kadNama:"Metabolisme", kadEm:"\u{2699}\u{FE0F}", kadFakta:"Metabolisme = anabolisme (membina molekul kompleks) + katabolisme (memecahkan molekul kompleks).",
 bosKadNama:"Mangga dan Kunci", bosKadEm:"\u{1F511}", bosKadFakta:"Substrat sepadan dengan tapak aktif enzim seperti kunci dengan mangga.",
 soalan:[
 {j:"pilih",t:"Proses membina molekul kompleks daripada molekul ringkas dikenali sebagai:",p:["Anabolisme","Katabolisme","Hidrolisis","Respirasi"],b:0,u:"Contoh: sintesis protein daripada asid amino."},
 {j:"pilih",t:"Dalam sel hidup, enzim berfungsi sebagai:",p:["Mangkin biologi","Hormon steroid","Karbohidrat ringkas","Asid lemak"],b:0,u:"Enzim mempercepat tindak balas tanpa berubah pada akhir tindak balas."},
 {j:"pilih",t:"Kebanyakan enzim terdiri daripada:",p:["Protein","Lipid","Kanji","Selulosa"],b:0,u:"Sebab itu enzim dinyahaslikan oleh suhu tinggi dan pH melampau."},
 {j:"pilih",t:"Bahagian enzim tempat substrat terikat dikenali sebagai:",p:["Tapak aktif","Nukleus","Ribosom","Dinding sel"],b:0,u:"Bentuk tapak aktif menentukan kekhususan enzim."},
 {j:"pilih",t:"Enzim amilase menghidrolisis:",p:["Kanji","Protein","Lemak","Asid DNA"],b:0,u:"Amilase memecahkan kanji kepada maltosa."},
 {j:"pilih",t:"Pepsin bertindak secara optimum dalam keadaan:",p:["Berasid","Beralkali","Neutral","Bergaram tinggi"],b:0,u:"Pepsin bekerja dalam perut pada pH sekitar 2."},
 {j:"pilih",t:"Enzim yang dirembes keluar dari sel untuk bertindak di luar sel dikenali sebagai:",p:["Enzim luar sel","Enzim dalam sel","Hormon","Antibodi"],b:0,u:"Contoh: enzim pencernaan yang dirembes ke dalam salur pencernaan."},
 {j:"banyak",t:"Pilih DUA ciri enzim.",p:["Bertindak khusus pada substrat tertentu","Tidak berubah pada akhir tindak balas","Tahan suhu sangat tinggi","Digunakan habis selepas tindak balas"],b:[0,1],u:"Enzim boleh digunakan berulang kali tetapi dinyahaslikan oleh haba melampau."}],
 bos:{j:"pilih",t:"Tindak balas manakah ialah contoh katabolisme?",p:["Respirasi sel","Sintesis protein di ribosom","Fotosintesis menghasilkan glukosa","Pembentukan glikogen di hati"],b:0,u:"Katabolisme memecahkan molekul kompleks dan membebaskan tenaga."}},

{n:2, tempat:"Bilik Mekanisme", sk:"5.2 Mekanisme dan faktor tindakan enzim", lampiran:null,
 kadNama:"Nyahasli", kadEm:"\u{1F525}", kadFakta:"Suhu tinggi mengubah bentuk tapak aktif secara kekal; substrat tidak lagi dapat terikat.",
 bosKadNama:"Kepekatan", bosKadEm:"\u{1F4C8}", bosKadFakta:"Menambah kepekatan substrat meningkatkan kadar sehingga semua tapak aktif tepu.",
 soalan:[
 {j:"pilih",t:"Mengapakah setiap enzim hanya bertindak ke atas satu jenis substrat?",p:["Tapak aktif khusus","Enzim sangat kecil","Substrat tiada cas","Enzim mudah larut"],b:0,u:"Hanya substrat yang sepadan dengan tapak aktif dapat membentuk kompleks enzim-substrat."},
 {j:"pilih",t:"Pada suhu rendah seperti 5 °C, enzim:",p:["Kurang aktif","Ternyahasli secara kekal","Bertindak paling cepat","Bertukar menjadi substrat"],b:0,u:"Tenaga kinetik rendah mengurangkan perlanggaran; aktiviti pulih apabila suhu naik."},
 {j:"pilih",t:"Suhu optimum kebanyakan enzim dalam badan manusia ialah kira-kira:",p:["37 °C","10 °C","60 °C","100 °C"],b:0,u:"Sama dengan suhu badan normal."},
 {j:"pilih",t:"Apakah yang berlaku kepada enzim yang ternyahasli?",p:["Tapak aktif berubah","Enzim bertambah saiz","Enzim menjadi substrat","Kadar tindak balas berganda"],b:0,u:"Ikatan dalam protein terputus dan bentuk tapak aktif hilang."},
 {j:"pilih",t:"Tripsin bertindak secara optimum dalam usus kecil yang:",p:["Sedikit beralkali","Sangat berasid","Neutral sepenuhnya","Kering tanpa air"],b:0,u:"pH optimum tripsin sekitar 8."},
 {j:"pilih",t:"Kepekatan enzim digandakan sementara substrat berlebihan. Kadar tindak balas:",p:["Bertambah","Berkurang","Tidak berubah","Menjadi sifar"],b:0,u:"Lebih banyak tapak aktif tersedia untuk substrat."},
 {j:"pilih",t:"Kompleks yang terbentuk sementara semasa tindakan enzim ialah:",p:["Kompleks enzim-substrat","Kompleks hasil-hasil","Kompleks hormon","Kompleks antibodi-antigen"],b:0,u:"Selepas tindak balas, hasil dibebaskan dan enzim bebas digunakan semula."},
 {j:"banyak",t:"Pilih DUA faktor yang mempengaruhi kadar tindakan enzim.",p:["Suhu","pH","Warna bekas","Bentuk tabung uji"],b:[0,1],u:"Kepekatan enzim dan substrat juga mempengaruhi kadar."}],
 bos:{j:"pilih",t:"Pepsin dari perut memasuki usus kecil yang beralkali. Apakah yang berlaku kepada aktivitinya?",p:["Menurun dengan ketara","Meningkat dengan ketara","Kekal sama","Bertukar menjadi amilase"],b:0,u:"pH beralkali jauh dari optimum pepsin, jadi aktivitinya menurun."}},

{n:3, tempat:"Makmal Amilase", sk:"5.2 Eksperimen kesan suhu terhadap aktiviti amilase", lampiran:"j1",
 kadNama:"Kadar Tindakan", kadEm:"\u{23F1}\u{FE0F}", kadFakta:"Kadar tindakan enzim = 1 ÷ masa untuk tindak balas lengkap.",
 bosKadNama:"Ujian Iodin", bosKadEm:"\u{1F535}", bosKadFakta:"Iodin kekal perang apabila kanji telah dihidrolisis sepenuhnya.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung kadar tindakan amilase pada 30 °C (min⁻¹). Beri jawapan kepada 2 tempat perpuluhan.",b:0.2,tol:0.005,suf:"min⁻¹",u:"Kadar = 1 ÷ 5 = 0.20 min⁻¹."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung kadar pada 40 °C. Beri jawapan kepada 2 tempat perpuluhan.",b:0.25,tol:0.005,suf:"min⁻¹",u:"Kadar = 1 ÷ 4 = 0.25 min⁻¹."},
 {j:"pilih",t:"Berdasarkan Jadual 1, pada suhu manakah amilase PALING aktif?",p:["40 °C","30 °C","20 °C","60 °C"],b:0,u:"Masa paling singkat (4 minit) menunjukkan kadar paling tinggi."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah masa sangat panjang pada 60 °C?",p:["Amilase ternyahasli","Kanji telah habis","Iodin rosak","Amilase lebih aktif"],b:0,u:"Suhu tinggi menukar bentuk tapak aktif amilase."},
 {j:"pilih",t:"Dalam eksperimen Jadual 1, mengapakah setitik campuran diuji dengan iodin setiap minit?",p:["Kesan kanji habis","Menambah kanji","Membunuh enzim","Menyejukkan campuran"],b:0,u:"Apabila iodin kekal perang, kanji telah dihidrolisis sepenuhnya."},
 {j:"pilih",t:"Larutan kanji dan amilase dipanaskan berasingan di kukus air dahulu sebelum dicampur. Sebabnya:",p:["Capai suhu kajian","Membunuh bakteria","Mengurangkan isi padu","Menukar warna iodin"],b:0,u:"Tindak balas berlaku pada suhu yang dikaji sejak awal."},
 {j:"pilih",t:"Berdasarkan Jadual 1, pemboleh ubah manakah dimalarkan?",p:["Kepekatan kanji","Suhu kukus air","Masa tindak balas","Kadar tindakan"],b:0,u:"Kepekatan dan isi padu kanji serta amilase, dan pH dimalarkan."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapa kali ganda kadar pada 40 °C berbanding 10 °C?",b:5,tol:0.01,suf:"kali",u:"0.25 ÷ 0.05 = 5 kali."}],
 bos:{j:"pilih",t:"Campuran pada 60 °C disejukkan kepada 40 °C. Ramalan PALING tepat:",p:["Aktiviti tidak pulih","Aktiviti pulih sepenuhnya","Kanji terbentuk semula","Iodin bertukar biru serta-merta"],b:0,u:"Penyahaslian adalah kekal; enzim tidak dapat berfungsi semula."}},

{n:4, tempat:"Bilik Graf Enzim", sk:"5.2 Menganalisis graf aktiviti enzim", lampiran:"g1",
 kadNama:"Graf Suhu", kadEm:"\u{1F4C9}", kadFakta:"Graf aktiviti enzim melawan suhu naik perlahan hingga optimum, kemudian jatuh dengan cepat.",
 bosKadNama:"Enzim Termofilik", bosKadEm:"\u{2668}\u{FE0F}", bosKadFakta:"Bakteria di kolam air panas mempunyai enzim yang stabil pada suhu tinggi.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah kadar tindakan enzim pada 30 °C?",b:0.2,tol:0.01,suf:"min⁻¹",u:"Graf menunjukkan 0.20 min⁻¹ pada 30 °C."},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah kadar meningkat dari 10 °C hingga 40 °C?",p:["Lebih perlanggaran","Enzim ternyahasli","Substrat berkurang","Tapak aktif rosak"],b:0,u:"Tenaga kinetik molekul bertambah, jadi perlanggaran berkesan bertambah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah kadar jatuh dengan cepat selepas 40 °C?",p:["Enzim mula ternyahasli","Molekul bergerak perlahan","Substrat bertambah","Suhu terlalu rendah"],b:0,u:"Ikatan dalam molekul enzim mula terputus."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bentuk graf di kiri dan kanan optimum berbeza kerana:",p:["Nyahasli berlaku cepat","Kesan suhu sentiasa sama","Graf diplot salah","Kanji berubah warna"],b:0,u:"Kenaikan perlahan kerana tenaga kinetik; kejatuhan curam kerana penyahaslian."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah kadar pada 50 °C?",b:0.1,tol:0.01,suf:"min⁻¹",u:"Graf menunjukkan 0.10 min⁻¹."},
 {j:"pilih",t:"Enzim daripada bakteria kolam air panas dikaji. Graf yang dijangka ialah:",p:["Optimum lebih tinggi","Optimum pada 10 °C","Tiada optimum langsung","Kadar sifar pada 70 °C"],b:0,u:"Enzim bakteria termofilik stabil dan optimum pada suhu tinggi."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bagaimanakah menentukan suhu optimum dengan lebih tepat?",p:["Uji 35 hingga 45 °C, sela 1 °C","Uji 10 dan 60 °C sahaja","Kurangkan amilase","Tambah iodin"],b:0,u:"Sela kecil di sekitar puncak memberi nilai optimum yang lebih jitu."},
 {j:"pilih",t:"Jika eksperimen Rajah 1 diulang pada pH 3, ramalan bagi amilase liur ialah:",p:["Kadar rendah pada semua suhu","Kadar lebih tinggi","Optimum beralih ke 60 °C","Tiada perubahan"],b:0,u:"pH 3 jauh dari optimum amilase (sekitar 7)."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, mengapakah demam yang sangat tinggi (lebih 42 °C) berbahaya?",p:["Enzim ternyahasli","Enzim menjadi lebih aktif","Darah menjadi beku","Kanji terkumpul dalam otak"],b:0,u:"Metabolisme terganggu apabila enzim penting mula ternyahasli."}},

{n:5, tempat:"Kilang Bioteknologi", sk:"5.3 Menilai aplikasi enzim", lampiran:null,
 kadNama:"Enzim Industri", kadEm:"\u{1F3ED}", kadFakta:"Enzim digunakan dalam detergen, pelembut daging, pembuatan jus, keju dan roti.",
 bosKadNama:"Enzim Tersekat Gerak", bosKadEm:"\u{1F512}", bosKadFakta:"Enzim yang diikat pada bahan pepejal boleh dikitar semula dan tidak mencemari hasil.",
 soalan:[
 {j:"pilih",t:"Mengapakah detergen biologi mengandungi protease?",p:["Tanggal kotoran darah","Mewangikan pakaian","Melembutkan air liat","Memutihkan fabrik"],b:0,u:"Protease menghidrolisis protein dalam kotoran darah dan telur."},
 {j:"pilih",t:"Detergen biologi kurang berkesan dalam air mendidih kerana:",p:["Enzim ternyahasli","Kotoran bertambah","Air terlalu lembut","Pakaian mengecut"],b:0,u:"Detergen biologi berkesan pada suhu sederhana."},
 {j:"pilih",t:"Pektinase digunakan dalam industri jus buah untuk:",p:["Menjernihkan jus","Menambah gula","Mengawet warna","Membunuh kulat"],b:0,u:"Pektinase memecahkan pektin, menambah hasil dan kejernihan jus."},
 {j:"pilih",t:"Papain daripada betik digunakan sebagai pelembut daging kerana ia:",p:["Menghidrolisis protein","Menghidrolisis kanji","Menambah lemak","Menambah air"],b:0,u:"Papain ialah protease yang memecahkan serat protein daging."},
 {j:"pilih",t:"Laktase digunakan untuk menghasilkan susu bebas laktosa. Siapakah PALING mendapat manfaat?",p:["Tidak toleran laktosa","Pesakit anemia","Atlet angkat berat","Bayi pramatang sihat"],b:0,u:"Laktase menghidrolisis laktosa kepada glukosa dan galaktosa."},
 {j:"pilih",t:"Kelebihan utama enzim tersekat gerak dalam industri ialah:",p:["Boleh digunakan semula","Lebih cepat ternyahasli","Mencemari hasil","Perlu suhu sangat tinggi"],b:0,u:"Enzim mudah diasingkan daripada hasil dan dikitar semula."},
 {j:"pilih",t:"Sebuah kilang perlu memilih antara mangkin kimia pada 300 °C atau enzim pada 40 °C. Penilaian PALING tepat:",p:["Enzim jimat tenaga","Mangkin kimia lebih jimat tenaga","Kedua-duanya sama kos","Enzim tidak pernah digunakan"],b:0,u:"Enzim bekerja pada suhu rendah, jadi kos tenaga dan pencemaran berkurang."},
 {j:"banyak",t:"Pilih DUA penggunaan enzim dalam pemprosesan makanan.",p:["Renin dalam pembuatan keju","Amilase dalam pembuatan roti","Klorin dalam air paip","Garam dalam ikan masin"],b:[0,1],u:"Klorin dan garam ialah bahan kimia, bukan enzim."}],
 bos:{j:"pilih",t:"Pengguna mengadu kulit gatal selepas guna detergen biologi. Cadangan PALING wajar kepada pengilang:",p:["Label amaran alahan","Tambah lebih banyak enzim","Buang semua pewangi sahaja","Naikkan suhu basuhan"],b:0,u:"Sisa enzim boleh menyebabkan alahan; label dan bilasan mengurangkan risiko."}},

{n:6, tempat:"Studio Reka Enzim", sk:"5.1 hingga 5.3 Mereka cipta berasaskan tindakan enzim", lampiran:null,
 kadNama:"Reka Proses", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Proses berasaskan enzim memerlukan suhu, pH dan masa yang sesuai.",
 bosKadNama:"Reka Cipta Enzim", bosKadEm:"\u{1F4A1}", bosKadFakta:"Perapan daging dengan nanas atau betik ialah aplikasi enzim tradisional.",
 soalan:[
 {j:"pilih",t:"Anda mereka perapan untuk melembutkan daging. Bahan tempatan manakah PALING sesuai?",p:["Jus nanas segar","Gula merah","Cuka beras","Garam bukit"],b:0,u:"Nanas mengandungi bromelain, sejenis protease."},
 {j:"pilih",t:"Mengapakah jus nanas dalam tin kurang berkesan melembutkan daging?",p:["Enzim telah rosak","Jus tin terlalu manis","Tin menambah besi","Nanas tin lebih masam"],b:0,u:"Pemanasan semasa pengetinan menyahaslikan bromelain."},
 {j:"pilih",t:"Untuk menguji keberkesanan perapan anda, data manakah PALING sesuai?",p:["Daya memotong daging","Warna daging mentah","Bau perapan daging","Harga daging sekilo"],b:0,u:"Daya potongan yang kurang menunjukkan daging lebih lembut."},
 {j:"pilih",t:"Anda mereka detergen basuhan sejuk untuk kawasan kampung. Ciri enzim manakah PALING diperlukan?",p:["Aktif pada suhu rendah","Aktif pada 90 °C","Aktif dalam asid kuat","Tidak tahan simpanan"],b:0,u:"Enzim aktif pada suhu air paip menjimatkan tenaga."},
 {j:"pilih",t:"Anda mahu menghasilkan jus buah yang lebih jernih untuk dijual. Langkah manakah PALING tepat?",p:["Tambah pektinase","Didihkan jus lama-lama","Tambah gula pasir","Simpan dalam peti beku"],b:0,u:"Pektinase memecahkan pektin yang menyebabkan jus keruh."},
 {j:"pilih",t:"Bagaimanakah anda memastikan ujian perbandingan dua detergen adil?",p:["Suhu dan masa sama","Kain berlainan jenis","Suhu berbeza untuk setiap detergen","Masa basuhan berbeza"],b:0,u:"Hanya jenis detergen yang diubah."},
 {j:"pilih",t:"Produk berasaskan enzim anda perlu disimpan dengan cara yang betul. Arahan PALING sesuai:",p:["Tempat sejuk, kering","Simpan di bawah cahaya matahari","Simpan berhampiran dapur","Biarkan bekas terbuka"],b:0,u:"Haba dan kelembapan mempercepat kehilangan aktiviti enzim."},
 {j:"banyak",t:"Pilih DUA faktor yang perlu ditetapkan untuk proses pembuatan jus berasaskan enzim anda.",p:["Suhu optimum enzim","pH campuran","Warna botol","Nama jenama"],b:[0,1],u:"Suhu dan pH mempengaruhi aktiviti enzim."}],
 bos:{j:"buka",
  t:"Reka satu produk atau proses berasaskan enzim untuk kegunaan harian atau perniagaan kecil (contoh: perapan pelembut daging tempatan, detergen basuhan sejuk, jus buah jernih, makanan tanpa laktosa).",
  arahan:"Nyatakan tujuan, enzim yang dipilih dan sumbernya, substrat dan hasil tindak balas, suhu dan pH yang sesuai beserta sebab, cara menguji keberkesanan dengan data yang boleh diukur, cara penyimpanan produk, SATU langkah keselamatan (contoh: alahan) dan SATU pertimbangan kos atau sumber tempatan.",
  u:"Jawapan TP6 yang kukuh memadankan enzim dengan substrat yang betul, menetapkan suhu dan pH optimum, menerangkan mengapa haba melampau perlu dielakkan, mencadangkan ujian adil dengan set kawalan, mengambil kira alahan dan pelabelan, serta menggunakan sumber tempatan yang murah."}}
];

module.exports = {
  id:"b4b5", tingkatan:4, kod:"5.0 Metabolisme dan Enzim",
  tajuk:"Mangkin Hayat",
  subtajuk:"Biologi Ting. 4 · Bab 5 Metabolisme dan Enzim",
  spi:SPI.b4b5,
  ulasan:{
   1:"{n} dapat mengingat kembali maksud metabolisme, ciri enzim dan contoh enzim pencernaan. Langkah seterusnya ialah menerangkan mekanisme tindakan enzim.",
   2:"{n} dapat menjelaskan hipotesis mangga dan kunci serta faktor yang mempengaruhi enzim. Perlu lebih latihan mengira kadar tindakan enzim.",
   3:"{n} boleh mengaplikasikan pengiraan kadar dan mentafsir eksperimen amilase. Galakkan menganalisis graf aktiviti enzim.",
   4:"{n} mampu menganalisis graf aktiviti enzim dan menerangkan penyahaslian. Seterusnya latih menilai aplikasi enzim dalam industri.",
   5:"{n} dapat menilai penggunaan enzim dalam industri dan kehidupan harian. Sudah bersedia mereka produk berasaskan enzim.",
   6:"{n} berjaya mereka produk berasaskan enzim dengan justifikasi suhu, pH dan ujian yang tepat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Metabolisme dan Enzim. Cadangan: ulang hentian pertama dan cuba lembutkan daging dengan betik bersama keluarga."
  },
  lampiran:{
   j1:jadual(1, "Masa untuk kanji dihidrolisis sepenuhnya oleh amilase pada suhu berbeza",
     ["Suhu (°C)", "Masa (minit)"],
     [["10","20"],["20","10"],["30","5"],["40","4"],["50","10"],["60","40"]]),
   g1:{jenis:"graf", x:[10,20,30,40,50,60], xLabel:"Suhu (°C)", titik:true, yMin:0, yMaks:0.3, grid:6,
     siri:[{label:"Kadar tindakan (min⁻¹)", y:[0.05,0.10,0.20,0.25,0.10,0.025], warna:"hijau"}],
     kapsyen:"Rajah 1 · Graf kadar tindakan amilase melawan suhu",
     alt:"Graf naik dari 0.05 pada 10 darjah ke puncak 0.25 pada 40 darjah, kemudian jatuh ke 0.10 pada 50 darjah dan 0.025 pada 60 darjah"}
  },
  aras:ARAS
};
