/* Sumber kandungan — Biologi KSSM Tingkatan 4, Bab 1 Pengenalan kepada Biologi dan Peraturan Makmal.
   SK 1.1 Bidang dan kerjaya dalam biologi, 1.2 Keselamatan dan peraturan makmal biologi,
   1.3 Berkomunikasi dalam biologi, 1.4 Penyiasatan saintifik dalam biologi
   (DSKP KSSM Biologi Tingkatan 4 dan 5, dskp/biologi-en.pdf). */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Pintu Makmal", sk:"1.1 Bidang biologi · 1.2 Peraturan makmal · 1.3 Satah badan", lampiran:null,
 kadNama:"Bidang Biologi", kadEm:"\u{1F33F}", kadFakta:"Biologi ialah kajian tentang benda hidup. Bidangnya termasuk zoologi, botani, mikrobiologi, genetik dan ekologi.",
 bosKadNama:"Kabinet Keselamatan", bosKadEm:"\u{1F9EB}", bosKadFakta:"Kabinet keselamatan biologi digunakan untuk mengendalikan mikroorganisma dengan selamat dan melindungi pengguna serta sampel.",
 soalan:[
 {j:"pilih",t:"Kajian tentang mikroorganisma seperti bakteria dan virus dikenali sebagai:",p:["Mikrobiologi","Botani","Zoologi","Anatomi manusia"],b:0,u:"Mikrobiologi mengkaji organisma seni yang hanya dapat dilihat dengan mikroskop."},
 {j:"pilih",t:"Bidang biologi yang mengkaji tumbuhan ialah:",p:["Botani","Zoologi","Entomologi","Virologi"],b:0,u:"Zoologi mengkaji haiwan, entomologi mengkaji serangga, virologi mengkaji virus."},
 {j:"pilih",t:"Kerjaya manakah berkaitan secara langsung dengan bidang genetik?",p:["Kaunselor genetik","Juruukur bahan","Akauntan bertauliah","Juruterbang komersial"],b:0,u:"Kaunselor genetik menasihati keluarga tentang risiko penyakit warisan."},
 {j:"pilih",t:"Apakah fungsi utama kot makmal?",p:["Melindungi kulit","Memanaskan badan","Menambah gaya","Mengelakkan mengantuk"],b:0,u:"Kot makmal ialah peralatan perlindungan diri (PPE) daripada tumpahan bahan kimia dan biologi."},
 {j:"pilih",t:"Satah yang membahagikan badan kepada bahagian kiri dan kanan ialah:",p:["Satah sagitah","Satah melintang","Satah frontal","Satah serong"],b:0,u:"Satah frontal membahagi depan dan belakang; satah melintang membahagi atas dan bawah."},
 {j:"pilih",t:"Istilah arah 'dorsal' bermaksud:",p:["Bahagian belakang","Bahagian perut","Bahagian kepala","Bahagian hujung kaki"],b:0,u:"Dorsal = belakang; ventral = bahagian perut atau hadapan."},
 {j:"pilih",t:"Langkah pertama dalam penyiasatan saintifik ialah:",p:["Kenal pasti masalah","Membuat kesimpulan","Menulis laporan akhir","Menganalisis data"],b:0,u:"Penyiasatan bermula dengan mengenal pasti masalah, kemudian membina hipotesis."},
 {j:"banyak",t:"Pilih DUA peralatan perlindungan diri (PPE) di makmal biologi.",p:["Sarung tangan","Kaca mata keselamatan","Selipar getah","Jam tangan"],b:[0,1],u:"Sarung tangan dan kaca mata melindungi kulit dan mata. Kasut tertutup digunakan, bukan selipar."}],
 bos:{j:"pilih",t:"Kultur bakteria perlu dikendalikan di dalam:",p:["Kabinet keselamatan biologi","Peti sejuk di dapur","Almari buku di kelas","Kotak plastik yang terbuka"],b:0,u:"Kabinet keselamatan biologi menapis udara dan menghalang mikroorganisma terlepas ke persekitaran."}},

{n:2, tempat:"Bilik Keselamatan", sk:"1.2 Pengurusan sisa dan kemalangan · 1.3 Istilah arah", lampiran:null,
 kadNama:"Sisa Biologi", kadEm:"\u{1F5D1}\u{FE0F}", kadFakta:"Sisa biologi seperti kultur bakteria dinyahcemar dengan autoklaf sebelum dibuang. Benda tajam dibuang ke dalam bekas khas.",
 bosKadNama:"Tindakan Kemalangan", bosKadEm:"\u{1F6A8}", bosKadFakta:"Laporkan setiap kemalangan kepada guru dengan segera, walaupun kecil.",
 soalan:[
 {j:"pilih",t:"Bagaimanakah piring petri berisi kultur bakteria diuruskan selepas eksperimen?",p:["Diautoklaf sebelum dibuang","Dibuang terus ke tong sampah","Dibasuh di sinki tanpa rawatan","Disimpan di dalam laci meja"],b:0,u:"Autoklaf menggunakan stim bertekanan tinggi untuk membunuh mikroorganisma."},
 {j:"pilih",t:"Jarum picagari yang telah digunakan perlu dibuang ke dalam:",p:["Bekas benda tajam","Tong sampah biasa","Sinki makmal biologi","Bakul kertas terpakai"],b:0,u:"Bekas benda tajam yang kukuh mengelakkan kecederaan dan jangkitan."},
 {j:"pilih",t:"Asid tertumpah pada tangan murid. Tindakan pertama yang betul ialah:",p:["Basuh dengan air paip","Lap dengan kain kering","Sapu losyen tangan","Tunggu sehingga kering"],b:0,u:"Air yang banyak mencairkan dan menyingkirkan asid. Kemudian laporkan kepada guru."},
 {j:"pilih",t:"Bahan kimia terpercik ke dalam mata. Peralatan manakah perlu digunakan?",p:["Pencuci mata","Alat pemadam api","Selimut api","Kotak pertolongan cemas tertutup"],b:0,u:"Bilas mata dengan air bersih di stesen pencuci mata sekurang-kurangnya 15 minit."},
 {j:"pilih",t:"Istilah 'proksimal' digunakan untuk bahagian yang:",p:["Dekat dengan pangkal","Jauh dari pangkal anggota","Berada di sebelah perut","Berada di sebelah belakang"],b:0,u:"Siku adalah proksimal berbanding pergelangan tangan. Distal bermaksud lebih jauh dari pangkal."},
 {j:"pilih",t:"Keratan rentas batang tumbuhan dihasilkan dengan memotong pada satah:",p:["Melintang","Sagitah","Frontal","Membujur penuh"],b:0,u:"Keratan rentas dipotong secara melintang, bersudut tegak dengan paksi panjang batang."},
 {j:"pilih",t:"Mengapakah murid dilarang makan dan minum di dalam makmal biologi?",p:["Elak termakan bahan bahaya","Makmal perlu sentiasa sunyi","Makanan menarik serangga ke makmal","Guru mahu murid berlapar"],b:0,u:"Tangan dan permukaan makmal mungkin tercemar dengan bahan berbahaya."},
 {j:"banyak",t:"Pilih DUA ciri lukisan biologi yang betul.",p:["Garisan jelas tanpa lorekan","Label dengan garis penunjuk lurus","Diwarnakan dengan pensel warna","Garisan putus-putus dan berlorek"],b:[0,1],u:"Lukisan biologi menggunakan garisan pensel yang tunggal dan jelas, tanpa lorekan atau warna."}],
 bos:{j:"pilih",t:"Sebuah tabung uji pecah dan melukakan jari murid ketika eksperimen. Urutan tindakan yang betul ialah:",p:["Lapor, rawat luka, buang kaca","Teruskan eksperimen dahulu","Kutip kaca dengan tangan","Balut jari dan rahsiakan"],b:0,u:"Kemalangan mesti dilaporkan segera. Kaca pecah dikutip dengan penyodok dan dibuang ke bekas kaca."}},

{n:3, tempat:"Bilik Data", sk:"1.3 Membina jadual dan graf daripada data eksperimen", lampiran:"j1",
 kadNama:"Jadual Data", kadEm:"\u{1F4CB}", kadFakta:"Jadual yang baik mempunyai tajuk lajur dengan unit, pemboleh ubah dimanipulasi di lajur pertama dan data yang tersusun.",
 bosKadNama:"Purata", bosKadEm:"\u{1F9EE}", bosKadFakta:"Ulangan eksperimen dan purata bacaan meningkatkan kebolehpercayaan data.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah pemboleh ubah dimanipulasi dalam eksperimen ini?",p:["Suhu air","Masa untuk biji benih bercambah","Jenis biji benih","Isi padu air"],b:0,u:"Suhu ialah faktor yang sengaja diubah oleh penyiasat."},
 {j:"pilih",t:"Berdasarkan Jadual 1, apakah pemboleh ubah bergerak balas?",p:["Peratus percambahan","Suhu air dalam piring","Jenis piring petri","Bilangan murid kelas"],b:0,u:"Pemboleh ubah bergerak balas ialah hasil yang diukur."},
 {j:"pilih",t:"Berdasarkan Jadual 1, pemboleh ubah manakah perlu dimalarkan?",p:["Jenis biji benih","Suhu air dalam piring","Peratus percambahan","Tajuk jadual data"],b:0,u:"Jenis biji benih, bilangan biji benih dan isi padu air mesti sama dalam setiap set."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung purata peratus percambahan pada 30 °C bagi tiga ulangan.",b:80,tol:0.1,suf:"%",u:"Purata = (78 + 82 + 80) ÷ 3 = 80%."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung purata peratus percambahan pada 10 °C bagi tiga ulangan.",b:20,tol:0.1,suf:"%",u:"Purata = (18 + 22 + 20) ÷ 3 = 20%."},
 {j:"pilih",t:"Berdasarkan Jadual 1, jenis graf manakah PALING sesuai untuk mempersembahkan data?",p:["Graf garis","Carta pai","Piktograf","Gambar rajah Venn"],b:0,u:"Kedua-dua pemboleh ubah adalah selanjar (suhu dan peratus), jadi graf garis paling sesuai."},
 {j:"pilih",t:"Berdasarkan Jadual 1, paksi manakah perlu mewakili suhu?",p:["Paksi-x (mengufuk)","Paksi-y (menegak)","Kedua-dua paksi","Tiada mana-mana paksi"],b:0,u:"Pemboleh ubah dimanipulasi diletak pada paksi-x."},
 {j:"pilih",t:"Mengapakah eksperimen dalam Jadual 1 diulang tiga kali?",p:["Data lebih boleh dipercayai","Menjimatkan biji benih","Menyukarkan pengiraan","Supaya jadual lebih panjang"],b:0,u:"Ulangan mengurangkan kesan ralat rawak."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, hipotesis manakah PALING sesuai?",p:["Suhu lebih tinggi hingga 30 °C menambah percambahan","Biji benih tidak memerlukan air untuk bercambah","Suhu tidak mempengaruhi peratus percambahan","Biji benih bercambah dalam keadaan gelap"],b:0,u:"Hipotesis mengaitkan pemboleh ubah dimanipulasi dengan pemboleh ubah bergerak balas."}},

{n:4, tempat:"Makmal Siasatan", sk:"1.3 Mentafsir graf · 1.4 Penyiasatan saintifik", lampiran:"g1",
 kadNama:"Tafsir Graf", kadEm:"\u{1F4C8}", kadFakta:"Kecerunan graf menunjukkan kadar perubahan. Titik maksimum menunjukkan keadaan optimum.",
 bosKadNama:"Kesimpulan", bosKadEm:"\u{2705}", bosKadFakta:"Kesimpulan menyatakan sama ada hipotesis diterima atau ditolak berdasarkan data.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah peratus percambahan pada 30 °C?",b:80,tol:1,suf:"%",u:"Graf mencapai 80% pada 30 °C."},
 {j:"nombor",t:"Berdasarkan Rajah 1, pada suhu berapakah percambahan paling tinggi?",b:30,tol:0.5,suf:"°C",u:"Titik puncak graf berada pada 30 °C, iaitu suhu optimum."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah yang berlaku kepada percambahan apabila suhu melebihi 30 °C?",p:["Berkurang","Bertambah","Kekal sama","Menjadi 100%"],b:0,u:"Peratus jatuh kepada 50% pada 40 °C dan 10% pada 50 °C."},
 {j:"pilih",t:"Berdasarkan Rajah 1, penerangan manakah PALING tepat bagi percambahan yang rendah pada 50 °C?",p:["Enzim ternyahasli","Biji benih terlalu sejuk","Air menjadi beku","Cahaya terlalu terang"],b:0,u:"Suhu tinggi menyahaslikan enzim yang diperlukan untuk percambahan."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah beza peratus percambahan antara 20 °C dan 30 °C?",b:30,tol:1,suf:"%",u:"80 − 50 = 30%."},
 {j:"pilih",t:"Berdasarkan Rajah 1, pernyataan manakah ialah inferens yang sah?",p:["Suhu optimum sekitar 30 °C","Tiada percambahan di bawah 30 °C","Semua biji bercambah pada 30 °C","Suhu tiada kesan langsung"],b:0,u:"Data menyokong optimum sekitar 30 °C. Pilihan lain bercanggah dengan data."},
 {j:"pilih",t:"Penyiasat mahu menentukan suhu optimum dengan lebih tepat. Cadangan manakah PALING sesuai?",p:["Uji 25 hingga 35 °C, sela 1 °C","Uji suhu 0 °C dan 100 °C sahaja","Kurangkan bilangan biji benih kepada satu","Hentikan ulangan eksperimen"],b:0,u:"Sela suhu yang kecil di sekitar puncak memberi anggaran optimum yang lebih tepat."},
 {j:"pilih",t:"Data Rajah 1 menunjukkan percambahan meningkat dari 10 °C hingga 30 °C. Hipotesis 'suhu yang lebih tinggi meningkatkan percambahan' ialah:",p:["Diterima hingga 30 °C","Diterima hingga 50 °C","Ditolak hingga 30 °C","Tidak dapat diuji"],b:0,u:"Selepas 30 °C, percambahan menurun, jadi hipotesis hanya benar hingga 30 °C."}],
 bos:{j:"pilih",t:"Seorang murid mendapati satu bacaan pada 20 °C ialah 5%, jauh berbeza daripada dua ulangan lain (48% dan 52%). Tindakan PALING wajar ialah:",p:["Ulang set itu, semak punca","Ubah bacaan itu kepada 50%","Gunakan bacaan 5% sahaja","Buang semua data 20 °C"],b:0,u:"Bacaan ganjil perlu disiasat dan diulang, bukan diubah atau diabaikan tanpa alasan."}},

{n:5, tempat:"Bilik Penilai", sk:"1.2 hingga 1.4 Menilai amalan makmal dan reka bentuk eksperimen", lampiran:null,
 kadNama:"Ujian Adil", kadEm:"\u{2696}\u{FE0F}", kadFakta:"Ujian adil hanya mengubah satu pemboleh ubah dan memalarkan yang lain.",
 bosKadNama:"Etika Biologi", bosKadEm:"\u{1F91D}", bosKadFakta:"Kajian biologi mesti menghormati kebajikan haiwan dan privasi manusia yang terlibat.",
 soalan:[
 {j:"pilih",t:"Seorang murid menguji kesan baja dengan meletakkan pokok A di tingkap dan pokok B di dalam almari. Hanya pokok A diberi baja. Penilaian manakah PALING tepat?",p:["Tidak adil; dua faktor berubah","Adil kerana dua pokok digunakan","Adil kerana baja digunakan","Tidak adil kerana pokok berbeza nama"],b:0,u:"Cahaya dan baja berubah serentak, jadi kesan baja tidak dapat dipastikan."},
 {j:"pilih",t:"Mengapakah sampel darah dikendalikan dengan sarung tangan walaupun daripada rakan yang sihat?",p:["Patogen mungkin ada","Darah rakan berbau","Sarung tangan mempercepat eksperimen","Guru tidak suka tangan kotor"],b:0,u:"Semua sampel biologi dianggap berpotensi berjangkit."},
 {j:"pilih",t:"Sekolah anda mahu membuang sisa kultur mikroorganisma. Kaedah manakah PALING selamat?",p:["Autoklaf dahulu, kemudian buang","Tanam di kebun sekolah","Buang ke longkang","Bakar di belakang sekolah"],b:0,u:"Autoklaf membunuh mikroorganisma sebelum pelupusan berjadual."},
 {j:"pilih",t:"Antara reka bentuk berikut, manakah PALING baik untuk menguji kesan cahaya terhadap pertumbuhan anak pokok?",p:["Hanya cahaya yang berbeza","Jenis pokok yang berbeza","Satu pokok tanpa perbandingan","Pokok di cahaya diberi lebih air"],b:0,u:"Hanya cahaya diubah, pemboleh ubah lain dimalarkan, dan ada kawalan."},
 {j:"pilih",t:"Seorang murid mencadangkan menggunakan katak hidup untuk kajian diseksi. Alternatif PALING beretika ialah:",p:["Simulasi diseksi maya","Tangkap lebih banyak katak","Gunakan katak tanpa kebenaran","Abaikan kajian anatomi"],b:0,u:"Prinsip 3R: ganti, kurangkan dan perhalusi penggunaan haiwan."},
 {j:"pilih",t:"Laporan murid menyatakan 'baja X terbaik' selepas menguji satu pokok sahaja. Penilaian manakah PALING tepat?",p:["Lemah; sampel terlalu kecil","Kesimpulan kukuh kerana pokok tumbuh","Kesimpulan betul kerana baja mahal","Tiada masalah dengan reka bentuk"],b:0,u:"Satu sampel tidak mencukupi. Ulangan dan saiz sampel lebih besar diperlukan."},
 {j:"pilih",t:"Kerjaya manakah PALING sesuai untuk murid yang meminati penjagaan hutan dan hidupan liar?",p:["Ahli ekologi","Ahli farmakologi","Pakar bedah","Ahli bioteknologi makanan"],b:0,u:"Ahli ekologi mengkaji interaksi organisma dengan persekitaran."},
 {j:"banyak",t:"Pilih DUA amalan yang menjadikan eksperimen biologi lebih dipercayai.",p:["Mengulang eksperimen","Menggunakan set kawalan","Mengubah banyak pemboleh ubah serentak","Membuang data yang tidak disukai"],b:[0,1],u:"Ulangan dan kawalan meningkatkan kesahan dan kebolehpercayaan."}],
 bos:{j:"pilih",t:"Makmal sekolah tiada kabinet keselamatan biologi. Guru mahu murid mengkultur bakteria dari tangan. Keputusan PALING wajar ialah:",p:["Piring ditutup rapat, tidak dibuka","Buka piring untuk menghidu bau bakteria","Biarkan piring terbuka semalaman","Bawa pulang piring ke rumah"],b:0,u:"Piring dilekat rapat dan diperhatikan tanpa dibuka, kemudian diautoklaf."}},

{n:6, tempat:"Studio Penyiasat", sk:"1.4 Mereka bentuk penyiasatan saintifik", lampiran:null,
 kadNama:"Reka Eksperimen", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Reka bentuk eksperimen mengandungi masalah, hipotesis, pemboleh ubah, bahan, prosedur dan cara merekod data.",
 bosKadNama:"Penyiasat Muda", bosKadEm:"\u{1F4A1}", bosKadFakta:"Soalan biologi yang baik boleh diuji, diukur dan diulang.",
 soalan:[
 {j:"pilih",t:"Anda mahu mengkaji kesan garam terhadap pertumbuhan anak pokok kacang hijau. Hipotesis manakah PALING sesuai?",p:["Garam lebih pekat, pertumbuhan lebih rendah","Garam ialah makanan tumbuhan","Kacang hijau tidak perlu air","Pertumbuhan tidak boleh diukur"],b:0,u:"Hipotesis mengaitkan pemboleh ubah dimanipulasi dengan bergerak balas dan boleh diuji."},
 {j:"pilih",t:"Bagi kajian garam tadi, bagaimanakah pertumbuhan PALING sesuai diukur?",p:["Ketinggian selepas 7 hari","Warna pasu yang digunakan","Bilangan murid yang melihat","Bau tanah di dalam pasu"],b:0,u:"Ketinggian boleh diukur secara kuantitatif dengan pembaris."},
 {j:"pilih",t:"Set kawalan bagi kajian garam ialah anak pokok yang disiram:",p:["Air suling tanpa garam","Larutan garam pekat","Air laut dari pantai","Tiada air langsung"],b:0,u:"Set kawalan tidak menerima rawatan dan menjadi asas perbandingan."},
 {j:"pilih",t:"Berapakah bilangan anak pokok PALING sesuai bagi setiap kepekatan garam?",p:["Sekurang-kurangnya lima","Satu sahaja","Dua jenis berbeza","Tiada bilangan tetap"],b:0,u:"Bilangan yang mencukupi mengurangkan kesan variasi individu."},
 {j:"pilih",t:"Bagaimanakah data kajian garam PALING sesuai direkod?",p:["Jadual kepekatan dan ketinggian","Catatan rawak dalam buku","Gambar tanpa sebarang ukuran","Ingatan murid selepas kajian"],b:0,u:"Jadual yang tersusun memudahkan analisis dan plot graf."},
 {j:"pilih",t:"Langkah keselamatan manakah relevan untuk kajian garam di makmal?",p:["Basuh tangan selepas kerja","Pakai kasut tumit tinggi","Rasa larutan garam","Bekerja tanpa label pada bikar"],b:0,u:"Tanah mungkin mengandungi mikroorganisma. Bikar juga perlu dilabel."},
 {j:"pilih",t:"Selepas kajian, anda dapati anak pokok dalam 2% garam mati semua. Cadangan lanjutan PALING wajar ialah:",p:["Uji antara 0% dan 2%","Berhenti mengkaji terus","Uji larutan garam 10%","Tukar kepada pokok plastik"],b:0,u:"Julat lebih kecil membantu mencari kepekatan had toleransi."},
 {j:"banyak",t:"Pilih DUA pemboleh ubah dimalarkan bagi kajian garam.",p:["Jenis biji benih","Isi padu larutan sehari","Kepekatan garam","Ketinggian anak pokok"],b:[0,1],u:"Kepekatan dimanipulasi, ketinggian bergerak balas. Jenis biji benih dan isi padu dimalarkan."}],
 bos:{j:"buka",
  t:"Reka satu penyiasatan saintifik untuk menjawab soalan biologi di sekolah atau rumah anda (contoh: kesan jenis air terhadap pertumbuhan pokok, kesan sabun terhadap bakteria di tangan, kesan cahaya terhadap pertumbuhan kulat roti).",
  arahan:"Nyatakan pernyataan masalah, hipotesis, tiga jenis pemboleh ubah, bahan dan radas, prosedur ringkas termasuk ulangan dan set kawalan, jadual untuk merekod data, jenis graf yang sesuai, SATU langkah keselamatan biologi dan SATU pertimbangan etika atau kos.",
  u:"Jawapan TP6 yang kukuh mempunyai hipotesis yang boleh diuji, memanipulasi satu pemboleh ubah sahaja, memalarkan pemboleh ubah lain, mempunyai set kawalan dan ulangan, merekod data dalam jadual berunit, memilih graf yang sesuai, mengurus sisa biologi dengan selamat, serta mengambil kira etika dan kos."}}
];

module.exports = {
  id:"b4b1", tingkatan:4, kod:"1.0 Pengenalan kepada Biologi dan Peraturan Makmal",
  tajuk:"Penyiasat Hayat",
  subtajuk:"Biologi Ting. 4 · Bab 1 Pengenalan kepada Biologi dan Peraturan Makmal",
  spi:SPI.b4b1,
  ulasan:{
   1:"{n} dapat mengingat kembali bidang biologi, peralatan perlindungan diri dan satah badan. Langkah seterusnya ialah menerangkan pengurusan sisa dan kemalangan makmal.",
   2:"{n} dapat menjelaskan pengurusan sisa biologi, tindakan semasa kemalangan dan istilah arah. Perlu lebih latihan membina jadual dan mengenal pasti pemboleh ubah.",
   3:"{n} boleh membina jadual data, mengenal pasti pemboleh ubah dan menghitung purata. Galakkan mentafsir graf eksperimen.",
   4:"{n} mampu mentafsir graf eksperimen dan membuat inferens serta kesimpulan yang sah. Seterusnya latih menilai reka bentuk eksperimen.",
   5:"{n} dapat menilai keadilan eksperimen, amalan keselamatan dan etika kajian biologi. Sudah bersedia mereka bentuk penyiasatan sendiri.",
   6:"{n} berjaya mereka bentuk penyiasatan saintifik yang lengkap, adil dan selamat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pengenalan kepada Biologi. Cadangan: ulang hentian pertama dan kenal pasti peralatan keselamatan di makmal sekolah."
  },
  lampiran:{
   j1:jadual(1, "Peratus biji benih kacang hijau bercambah selepas 3 hari pada suhu berbeza",
     ["Suhu air (°C)", "Ulangan 1 (%)", "Ulangan 2 (%)", "Ulangan 3 (%)"],
     [["10","18","22","20"],["20","48","52","50"],["30","78","82","80"],["40","52","48","50"]]),
   g1:{jenis:"graf", x:[10,20,30,40,50], xLabel:"Suhu (°C)", titik:true, yMin:0, yMaks:100, grid:10,
     siri:[{label:"Purata percambahan (%)", y:[20,50,80,50,10], warna:"hijau"}],
     kapsyen:"Rajah 1 · Graf purata peratus percambahan biji benih melawan suhu",
     alt:"Graf naik dari 20 peratus pada 10 darjah ke puncak 80 peratus pada 30 darjah, kemudian turun ke 50 peratus pada 40 darjah dan 10 peratus pada 50 darjah"}
  },
  aras:ARAS
};
