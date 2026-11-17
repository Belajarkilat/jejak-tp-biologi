/* Biologi KSSM Tingkatan 4, Bab 11 Keimunan Manusia.
   SK 11.1 Pertahanan badan, 11.2 Tindakan antibodi, 11.3 Jenis keimunan, 11.4 Isu kesihatan (DSKP Biologi).
   Ambang imuniti kelompok = 1 − 1/R₀, disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Kubu Pertahanan", sk:"11.1 Pertahanan badan · 11.2 Tindakan antibodi", lampiran:null,
 kadNama:"Tiga Barisan", kadEm:"\u{1F6E1}\u{FE0F}", kadFakta:"Barisan pertama: kulit dan mukus. Barisan kedua: fagosit dan keradangan. Barisan ketiga: limfosit dan antibodi.",
 bosKadNama:"Antigen", bosKadEm:"\u{1F9A0}", bosKadFakta:"Antigen ialah bahan asing yang merangsang limfosit menghasilkan antibodi yang khusus kepadanya.",
 soalan:[
 {j:"pilih",t:"Barisan pertahanan pertama badan termasuk:",p:["Kulit","Limfosit","Antibodi","Vaksin"],b:0,u:"Kulit menjadi sawar fizikal; mukus dan asid perut juga barisan pertama."},
 {j:"pilih",t:"Sel darah putih yang menelan patogen melalui fagositosis ialah:",p:["Neutrofil","Eritrosit","Platlet","Sel saraf"],b:0,u:"Neutrofil dan makrofaj ialah fagosit."},
 {j:"pilih",t:"Antibodi dihasilkan oleh:",p:["Limfosit","Eritrosit","Platlet","Neutrofil"],b:0,u:"Limfosit B menghasilkan antibodi."},
 {j:"pilih",t:"Lisozim dalam air mata berfungsi untuk:",p:["Musnahkan bakteria","Mengangkut oksigen","Membekukan darah","Menghasilkan antibodi"],b:0,u:"Lisozim menghidrolisis dinding sel bakteria."},
 {j:"pilih",t:"Antibodi ialah sejenis:",p:["Protein","Karbohidrat","Lipid","Vitamin"],b:0,u:"Antibodi berbentuk Y dan bertindak khusus pada antigen."},
 {j:"pilih",t:"Keimunan yang diperoleh melalui suntikan vaksin ialah keimunan:",p:["Aktif buatan","Pasif semula jadi","Pasif buatan","Aktif semula jadi"],b:0,u:"Badan sendiri menghasilkan antibodi selepas divaksin."},
 {j:"pilih",t:"Keradangan menyebabkan kawasan luka menjadi merah dan panas kerana:",p:["Lebih aliran darah","Darah membeku","Saraf rosak","Peluh berkurang"],b:0,u:"Kapilari melebar supaya lebih banyak fagosit sampai ke kawasan luka."},
 {j:"banyak",t:"Pilih DUA contoh barisan pertahanan pertama.",p:["Mukus dalam hidung","Asid dalam perut","Antibodi dalam darah","Sel memori"],b:[0,1],u:"Antibodi dan sel memori tergolong dalam barisan ketiga."}],
 bos:{j:"pilih",t:"Mengapakah antibodi campak tidak melindungi badan daripada cacar air?",p:["Antibodi khusus","Antibodi campak mati","Cacar air bukan antigen","Badan tiada limfosit"],b:0,u:"Setiap antibodi hanya sepadan dengan antigen tertentu."}},

{n:2, tempat:"Bilik Antibodi", sk:"11.2 Tindakan antibodi · 11.3 Jenis keimunan", lampiran:null,
 kadNama:"Tindakan Antibodi", kadEm:"\u{1F517}", kadFakta:"Antibodi meneutralkan toksin, mengaglutinasikan patogen, melisiskan sel dan memudahkan fagositosis (opsonisasi).",
 bosKadNama:"Sel Memori", bosKadEm:"\u{1F9E0}", bosKadFakta:"Sel memori mengingati antigen supaya gerak balas kedua lebih cepat dan lebih kuat.",
 soalan:[
 {j:"pilih",t:"Antibodi yang menyebabkan patogen bergumpal sedang menjalankan:",p:["Aglutinasi","Neutralisasi","Lisis","Fotosintesis"],b:0,u:"Patogen yang bergumpal mudah ditelan oleh fagosit."},
 {j:"pilih",t:"Antitoksin bertindak dengan:",p:["Neutralkan toksin","Menelan bakteria","Membekukan darah","Menghasilkan antigen"],b:0,u:"Antitoksin bergabung dengan toksin dan menjadikannya tidak berbahaya."},
 {j:"pilih",t:"Bayi mendapat antibodi daripada susu ibu. Ini ialah keimunan:",p:["Pasif semula jadi","Aktif buatan","Aktif semula jadi","Pasif buatan"],b:0,u:"Antibodi diterima daripada ibu, bukan dihasilkan sendiri."},
 {j:"pilih",t:"Mangsa patukan ular berbisa diberi antiserum. Ini ialah keimunan:",p:["Pasif buatan","Aktif buatan","Aktif semula jadi","Pasif semula jadi"],b:0,u:"Antibodi siap disuntik untuk tindakan segera."},
 {j:"pilih",t:"Seseorang pulih daripada cacar air dan tidak dijangkiti lagi. Ini ialah keimunan:",p:["Aktif semula jadi","Pasif buatan","Pasif semula jadi","Aktif buatan"],b:0,u:"Badan menghasilkan antibodi dan sel memori selepas jangkitan."},
 {j:"pilih",t:"Mengapakah keimunan pasif bersifat sementara?",p:["Tiada sel memori","Antibodi terlalu banyak","Antigen kekal","Limfosit bertambah"],b:0,u:"Antibodi yang diterima akan diuraikan dan tidak diganti."},
 {j:"pilih",t:"Vaksin mengandungi:",p:["Antigen lemah","Antibodi siap","Sel darah merah","Antibiotik"],b:0,u:"Patogen dilemahkan atau dimatikan, atau bahagian antigennya."},
 {j:"banyak",t:"Pilih DUA kelebihan keimunan aktif berbanding pasif.",p:["Tahan lama","Ada sel memori","Bertindak segera","Tiada antibodi"],b:[0,1],u:"Keimunan pasif bertindak segera tetapi tidak tahan lama."}],
 bos:{j:"pilih",t:"Doktor memberi antiserum, bukan vaksin, kepada pesakit tetanus yang luka parah. Sebab utamanya:",p:["Perlu segera","Vaksin lebih mahal","Antiserum kekal seumur hidup","Vaksin tiada antigen"],b:0,u:"Vaksin mengambil masa minggu untuk menghasilkan antibodi."}},

{n:3, tempat:"Makmal Imuniti Kelompok", sk:"11.3 dan 11.4 Mengaplikasikan konsep imuniti kelompok", lampiran:"j1",
 kadNama:"Imuniti Kelompok", kadEm:"\u{1F465}", kadFakta:"Apabila cukup ramai divaksin, patogen sukar merebak dan melindungi mereka yang tidak boleh divaksin.",
 bosKadNama:"Nilai R₀", bosKadEm:"\u{1F522}", bosKadFakta:"R₀ ialah purata bilangan orang yang dijangkiti oleh seorang pesakit dalam populasi tiada imuniti.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung ambang imuniti kelompok bagi campak (1 − 1/R₀) dalam peratus. Beri jawapan kepada 1 tempat perpuluhan.",b:93.3,tol:0.1,suf:"%",u:"1 − 1/15 = 0.933 = 93.3%."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung ambang imuniti kelompok bagi polio. Beri jawapan kepada 1 tempat perpuluhan.",b:83.3,tol:0.1,suf:"%",u:"1 − 1/6 = 0.833 = 83.3%."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung ambang imuniti kelompok bagi influenza.",b:50,tol:0.1,suf:"%",u:"1 − 1/2 = 0.5 = 50%."},
 {j:"pilih",t:"Berdasarkan Jadual 1, penyakit manakah memerlukan liputan vaksin tertinggi?",p:["Campak","Polio","Influenza","Semuanya sama"],b:0,u:"R₀ campak paling tinggi."},
 {j:"pilih",t:"Berdasarkan Jadual 1, liputan vaksin campak di sebuah daerah jatuh ke 85%. Ramalan PALING munasabah:",p:["Wabak mungkin berlaku","Campak hilang terus","Tiada kesan","Polio meningkat"],b:0,u:"85% di bawah ambang 93.3%."},
 {j:"nombor",t:"Sebuah sekolah ada 800 murid. Berdasarkan Jadual 1, berapakah bilangan minimum murid perlu kebal terhadap campak? Bundarkan ke atas.",b:747,tol:0.5,suf:"murid",u:"800 × 14/15 = 746.7, dibundarkan ke atas kepada 747 murid."},
 {j:"pilih",t:"Siapakah PALING bergantung pada imuniti kelompok?",p:["Bayi kecil","Atlet sihat","Remaja divaksin","Guru divaksin"],b:0,u:"Bayi dan pesakit imun lemah tidak boleh menerima sesetengah vaksin."},
 {j:"pilih",t:"Berdasarkan Jadual 1, R₀ bergantung pada:",p:["Cara merebak","Warna patogen","Nama penyakit","Bilangan doktor"],b:0,u:"Penyakit bawaan udara seperti campak merebak dengan sangat mudah."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, mengapakah influenza masih merebak setiap tahun walaupun ambangnya rendah?",p:["Virus bermutasi","Vaksin tidak wujud","R₀ influenza sangat tinggi","Influenza bukan virus"],b:0,u:"Antigen virus influenza berubah, jadi vaksin perlu dikemas kini setiap tahun."}},

{n:4, tempat:"Bilik Graf Antibodi", sk:"11.3 Menganalisis gerak balas keimunan", lampiran:"g1",
 kadNama:"Gerak Balas Sekunder", kadEm:"\u{1F4C8}", kadFakta:"Dos penggalak menghasilkan antibodi lebih cepat, lebih banyak dan lebih lama.",
 bosKadNama:"Dos Penggalak", bosKadEm:"\u{1F489}", bosKadFakta:"Dos penggalak memastikan aras antibodi kekal melebihi aras keimunan.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah aras antibodi tertinggi selepas suntikan pertama?",b:4,tol:0.1,suf:"unit",u:"Puncak primer 4 unit pada hari ke-10."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah aras antibodi tertinggi selepas dos penggalak?",b:20,tol:0.1,suf:"unit",u:"Puncak sekunder 20 unit pada hari ke-40."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapa kali ganda puncak sekunder berbanding puncak primer?",b:5,tol:0.05,suf:"kali",u:"20 ÷ 4 = 5 kali."},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah gerak balas selepas dos penggalak lebih tinggi?",p:["Sel memori bertindak","Vaksin lebih pekat","Antigen berbeza","Limfosit mati"],b:0,u:"Sel memori cepat membiak dan menghasilkan antibodi."},
 {j:"pilih",t:"Berdasarkan Rajah 1, garis aras keimunan ialah 5 unit. Bilakah individu itu kebal?",p:["Selepas penggalak","Selepas suntikan pertama","Pada hari ke-0","Tidak pernah kebal"],b:0,u:"Hanya selepas dos penggalak aras antibodi melepasi 5 unit."},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah aras antibodi menurun selepas puncak?",p:["Antibodi diuraikan","Antigen bertambah","Limfosit membiak","Vaksin disuntik lagi"],b:0,u:"Antibodi ialah protein yang diuraikan secara semula jadi."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah penurunan aras antibodi dari hari ke-40 hingga 60?",b:8,tol:0.1,suf:"unit",u:"20 − 12 = 8 unit."},
 {j:"pilih",t:"Berdasarkan Rajah 1, jika individu itu dijangkiti pada hari ke-50, ramalan PALING tepat:",p:["Tidak jatuh sakit","Sakit teruk","Antibodi menjadi sifar","Perlu antiserum segera"],b:0,u:"Aras antibodi masih tinggi melebihi aras keimunan."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, ibu bapa bertanya mengapa anak perlu beberapa dos vaksin. Penjelasan PALING tepat:",p:["Kuatkan memori imun","Dos pertama tidak berguna","Setiap dos untuk penyakit lain","Vaksin cepat rosak"],b:0,u:"Gerak balas sekunder menghasilkan perlindungan yang lebih tinggi dan lama."}},

{n:5, tempat:"Dewan Kesihatan Awam", sk:"11.4 Menilai isu kesihatan berkaitan keimunan", lampiran:null,
 kadNama:"HIV dan AIDS", kadEm:"\u{1F397}\u{FE0F}", kadFakta:"HIV menyerang limfosit T penolong, melemahkan sistem imun sehingga jangkitan oportunis berlaku.",
 bosKadNama:"Alahan", bosKadEm:"\u{1F927}", bosKadFakta:"Alahan ialah gerak balas imun berlebihan terhadap bahan tidak berbahaya seperti debunga atau kacang.",
 soalan:[
 {j:"pilih",t:"HIV menjejaskan sistem imun dengan memusnahkan:",p:["Limfosit T penolong","Eritrosit","Platlet","Sel kulit"],b:0,u:"Tanpa limfosit T penolong, gerak balas imun menjadi lemah."},
 {j:"pilih",t:"Antara berikut, cara manakah HIV TIDAK merebak?",p:["Berjabat tangan","Perkongsian jarum","Pemindahan darah tercemar","Ibu kepada bayi"],b:0,u:"HIV tidak merebak melalui sentuhan biasa."},
 {j:"pilih",t:"Penyakit autoimun berlaku apabila:",p:["Serang sel sendiri","Tiada antibodi dihasilkan","Vaksin diberi berlebihan","Platlet berkurang"],b:0,u:"Contoh: lupus dan diabetes jenis 1."},
 {j:"pilih",t:"Seorang murid alah kacang tanah. Langkah PALING wajar di sekolah:",p:["Label dan epinefrin","Abaikan kerana jarang berlaku","Paksa makan sedikit","Beri antibiotik setiap hari"],b:0,u:"Pelabelan dan persediaan kecemasan menyelamatkan nyawa."},
 {j:"pilih",t:"Mengapakah penyalahgunaan antibiotik membimbangkan pakar kesihatan?",p:["Bakteria rintang","Virus menjadi lemah","Antibodi bertambah","Vaksin tidak diperlukan"],b:0,u:"Bakteria rintang sukar dirawat."},
 {j:"pilih",t:"Antibiotik tidak berkesan untuk selesema biasa kerana selesema disebabkan oleh:",p:["Virus","Bakteria","Kulat","Protozoa"],b:0,u:"Antibiotik hanya membunuh atau merencat bakteria."},
 {j:"pilih",t:"Penilaian PALING tepat tentang dakwaan media sosial bahawa vaksin menyebabkan autisme:",p:["Tiada bukti","Terbukti benar","Separuh benar","Belum pernah dikaji"],b:0,u:"Kajian besar di pelbagai negara tidak menemui kaitan."},
 {j:"banyak",t:"Pilih DUA langkah yang mengukuhkan sistem imun.",p:["Tidur yang cukup","Diet seimbang","Merokok","Kurang tidur berpanjangan"],b:[0,1],u:"Rehat dan nutrisi yang baik menyokong fungsi sel imun."}],
 bos:{j:"pilih",t:"Sebuah kawasan mengalami wabak difteria kerana ramai ibu bapa menolak vaksin. Tindakan PALING berkesan:",p:["Didik dan vaksin","Tutup kawasan selamanya","Beri antibiotik kepada semua","Abaikan kerana wabak kecil"],b:0,u:"Penerangan berasaskan bukti dan kempen vaksin memulihkan imuniti kelompok."}},

{n:6, tempat:"Studio Reka Imun", sk:"11.1 hingga 11.4 Mereka cipta berasaskan keimunan", lampiran:null,
 kadNama:"Kempen Vaksin", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Kempen yang berkesan menyasarkan kebimbangan sebenar dengan fakta yang mudah difahami.",
 bosKadNama:"Reka Cipta Kesihatan", bosKadEm:"\u{1F4A1}", bosKadFakta:"Infografik, permainan dan simulasi membantu masyarakat memahami cara penyakit merebak.",
 soalan:[
 {j:"pilih",t:"Anda mereka simulasi penyebaran penyakit di kelas. Kaedah PALING sesuai:",p:["Simulasi kad warna","Lukis gambar virus","Membaca nota buku teks","Tonton filem fiksyen sains"],b:0,u:"Simulasi interaktif menunjukkan kesan liputan vaksin."},
 {j:"pilih",t:"Dalam simulasi anda, murid yang divaksin diwakili dengan kad yang:",p:["Tidak boleh dijangkiti","Menyebarkan lebih cepat","Mempunyai R₀ tinggi","Sentiasa dijangkiti"],b:0,u:"Mereka menyekat rantaian jangkitan."},
 {j:"pilih",t:"Anda merancang kempen cuci tangan. Data PALING sesuai untuk menilai kesannya:",p:["Kes cirit-birit murid","Warna sabun","Harga sinki","Bilangan poster"],b:0,u:"Penurunan kes jangkitan menunjukkan keberkesanan."},
 {j:"pilih",t:"Untuk menangani maklumat palsu tentang vaksin dalam komuniti, strategi PALING berkesan:",p:["Fakta daripada doktor","Mengejek ibu bapa","Memaksa tanpa penjelasan","Mengabaikan soalan"],b:0,u:"Sumber dipercayai dan dialog hormat lebih meyakinkan."},
 {j:"pilih",t:"Anda mereka poster alahan makanan untuk kantin. Maklumat PALING penting:",p:["Tanda alahan teruk","Harga makanan","Nama tukang masak","Waktu rehat murid"],b:0,u:"Tanda awal anafilaksis memerlukan tindakan segera."},
 {j:"pilih",t:"Bagaimanakah anda menguji keberkesanan simulasi penyakit sebagai bahan pengajaran?",p:["Ujian pra dan pasca","Kira kad yang tinggal","Ukur saiz bilik","Tanya warna kegemaran"],b:0,u:"Peningkatan skor menunjukkan kefahaman bertambah."},
 {j:"pilih",t:"Anda mencadangkan stesen sanitasi tangan di sekolah. Kedudukan PALING strategik:",p:["Kantin dan tandas","Dalam bilik stor","Di atas bumbung","Belakang padang sekolah"],b:0,u:"Tempat tumpuan dan sebelum makan mengurangkan jangkitan."},
 {j:"banyak",t:"Pilih DUA elemen penting dalam pelan kempen vaksinasi anda.",p:["Jadual vaksin","Sumber maklumat sahih","Iklan minuman manis","Lagu tema mahal"],b:[0,1],u:"Maklumat tepat dan jadual jelas memudahkan tindakan."}],
 bos:{j:"buka",
  t:"Reka satu kempen, simulasi atau produk untuk meningkatkan kesedaran keimunan dalam komuniti (contoh: simulasi penyebaran penyakit dan imuniti kelompok, kempen vaksin HPV atau campak, pelan pengurusan alahan makanan di sekolah, kempen penggunaan antibiotik yang betul).",
  arahan:"Nyatakan tujuan dan kumpulan sasaran, konsep keimunan yang ditonjolkan (jenis keimunan, sel memori, imuniti kelompok atau rintangan antibiotik), kaedah dan bahan beserta sebab, SATU pengiraan atau data sokongan (contoh: ambang imuniti kelompok), cara mengukur keberkesanan, SATU isu etika atau keselamatan, dan SATU pertimbangan budaya atau agama tempatan.",
  u:"Jawapan TP6 yang kukuh menerangkan konsep keimunan dengan tepat, menggunakan data seperti ambang 1 − 1/R₀, memilih kaedah yang sesuai dengan sasaran, mengukur perubahan sikap atau kes penyakit, menghormati kebimbangan masyarakat, serta melibatkan pihak berautoriti seperti klinik kesihatan dan pemimpin agama."}}
];

module.exports = {
  id:"b4b11", tingkatan:4, kod:"11.0 Keimunan Manusia",
  tajuk:"Benteng Imun",
  subtajuk:"Biologi Ting. 4 · Bab 11 Keimunan Manusia",
  spi:SPI.b4b11,
  ulasan:{
   1:"{n} dapat mengingat kembali barisan pertahanan badan dan peranan antibodi. Langkah seterusnya ialah membezakan jenis keimunan.",
   2:"{n} dapat menjelaskan tindakan antibodi dan empat jenis keimunan. Perlu lebih latihan mengira ambang imuniti kelompok.",
   3:"{n} boleh mengaplikasikan konsep imuniti kelompok menggunakan data R₀. Galakkan menganalisis graf gerak balas antibodi.",
   4:"{n} mampu menganalisis gerak balas primer dan sekunder. Seterusnya latih menilai isu kesihatan berkaitan keimunan.",
   5:"{n} dapat menilai isu HIV, alahan, antibiotik dan vaksin dengan hujah saintifik. Sudah bersedia mereka kempen kesihatan.",
   6:"{n} berjaya mereka kempen atau simulasi keimunan yang berasaskan data. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Keimunan Manusia. Cadangan: ulang hentian pertama dan semak buku rekod vaksin sendiri bersama keluarga."
  },
  lampiran:{
   j1:jadual(1, "Nilai R₀ bagi tiga penyakit berjangkit",
     ["Penyakit", "Cara merebak", "R₀"],
     [["Campak","Udara","15"],["Polio","Najis-mulut","6"],["Influenza","Titisan","2"]]),
   g1:{jenis:"graf", x:[0,10,20,30,40,50,60], xLabel:"Masa (hari)", titik:true, yMin:0, yMaks:25, grid:5,
     siri:[{label:"Aras antibodi (unit)", y:[0,4,2,1,20,15,12], warna:"ungu"},{label:"Aras keimunan", y:[5,5,5,5,5,5,5], warna:"hijau"}],
     kapsyen:"Rajah 1 · Graf aras antibodi; suntikan pertama pada hari 0 dan dos penggalak pada hari 30",
     alt:"Graf antibodi naik ke 4 pada hari 10, turun ke 1 pada hari 30, naik mendadak ke 20 pada hari 40, kemudian 15 dan 12; garis aras keimunan mendatar pada 5"}
  },
  aras:ARAS
};
