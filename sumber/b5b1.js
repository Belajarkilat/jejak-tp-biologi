/* Biologi KSSM Tingkatan 5, Bab 1 Organisasi Tisu Tumbuhan dan Pertumbuhan.
   SK 1.1 Organisasi tisu tumbuhan, 1.2 Tisu meristem dan pertumbuhan, 1.3 Lengkung pertumbuhan (DSKP Biologi).
   Kadar pertumbuhan disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Taman Tisu", sk:"1.1 Organisasi tisu tumbuhan · 1.2 Tisu meristem", lampiran:null,
 kadNama:"Tisu Meristem", kadEm:"\u{1F331}", kadFakta:"Tisu meristem terdiri daripada sel yang aktif membahagi secara mitosis.",
 bosKadNama:"Pertumbuhan Sekunder", bosKadEm:"\u{1F333}", bosKadFakta:"Kambium vaskular menghasilkan xilem dan floem sekunder, menambah ukur lilit batang.",
 soalan:[
 {j:"pilih",t:"Tisu meristem apeks terdapat di:",p:["Hujung pucuk dan akar","Batang dewasa sahaja","Permukaan daun","Dalam biji benih kering"],b:0,u:"Meristem apeks menyebabkan pertumbuhan memanjang."},
 {j:"pilih",t:"Tisu yang mengangkut air dari akar ke daun ialah:",p:["Xilem","Floem","Epidermis","Parenkima"],b:0,u:"Salur xilem terdiri daripada sel mati yang berongga."},
 {j:"pilih",t:"Tisu yang mengangkut hasil fotosintesis ialah:",p:["Floem","Xilem","Kolenkima","Sklerenkima"],b:0,u:"Tiub tapis floem mengangkut sukrosa."},
 {j:"pilih",t:"Tisu yang memberi sokongan dengan dinding sel berlignin tebal ialah:",p:["Sklerenkima","Parenkima","Epidermis","Meristem"],b:0,u:"Sel sklerenkima matang adalah mati dan keras."},
 {j:"pilih",t:"Pertumbuhan primer menyebabkan tumbuhan:",p:["Bertambah panjang","Bertambah ukur lilit","Bertukar warna","Berhenti tumbuh"],b:0,u:"Ia berlaku di meristem apeks."},
 {j:"pilih",t:"Pertumbuhan sekunder biasanya berlaku pada:",p:["Pokok berkayu","Rumput padang","Pokok jagung","Pokok padi"],b:0,u:"Kebanyakan monokotiledon tiada kambium vaskular."},
 {j:"pilih",t:"Tisu epidermis daun dilapisi kutikel untuk:",p:["Kurangkan transpirasi","Menyerap lebih banyak cahaya","Mengangkut air ke batang","Menyimpan kanji di daun"],b:0,u:"Kutikel berlilin kalis air."},
 {j:"banyak",t:"Pilih DUA jenis tisu kekal.",p:["Parenkima","Xilem","Meristem apeks","Kambium vaskular"],b:[0,1],u:"Meristem apeks dan kambium ialah tisu meristem."}],
 bos:{j:"pilih",t:"Gelang tahunan pada batang pokok terbentuk akibat:",p:["Kambium aktif bermusim","Pertumbuhan primer di pucuk","Fotosintesis daun yang pesat","Penyerapan air oleh akar"],b:0,u:"Xilem yang terbentuk dalam musim berbeza mempunyai saiz sel berbeza."}},

{n:2, tempat:"Zon Pertumbuhan", sk:"1.2 Zon pertumbuhan di hujung akar dan pucuk", lampiran:"a1",
 kadNama:"Tiga Zon", kadEm:"\u{1F33F}", kadFakta:"Hujung akar mempunyai zon pembahagian sel, zon pemanjangan sel dan zon pembezaan sel.",
 bosKadNama:"Tudung Akar", bosKadEm:"\u{1F9E2}", bosKadFakta:"Tudung akar melindungi meristem apeks semasa akar menembusi tanah.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, zon bertanda ? ialah:",p:["Zon pemanjangan","Zon tudung akar","Zon rambut akar","Zon kambium"],b:0,u:"Sel menyerap air dan memanjang selepas dibahagikan."},
 {j:"pilih",t:"Berdasarkan Rajah 1, di zon manakah sel menjadi xilem, floem dan rambut akar?",p:["Zon pembezaan","Zon pembahagian","Zon pemanjangan","Tudung akar"],b:0,u:"Sel menjadi khusus untuk fungsi tertentu."},
 {j:"pilih",t:"Berdasarkan Rajah 1, pembahagian sel secara mitosis berlaku paling aktif di:",p:["Zon pembahagian","Zon pembezaan","Zon pemanjangan","Rambut akar"],b:0,u:"Meristem apeks terletak di zon ini."},
 {j:"pilih",t:"Sel dalam zon pemanjangan bertambah panjang kerana:",p:["Vakuol menyerap air","Nukleus membahagi","Dinding sel menebal","Klorofil bertambah"],b:0,u:"Vakuol membesar secara osmosis dan menolak dinding sel."},
 {j:"pilih",t:"Kambium vaskular menghasilkan xilem sekunder ke arah:",p:["Dalam","Luar","Atas","Bawah"],b:0,u:"Floem sekunder dihasilkan ke arah luar."},
 {j:"pilih",t:"Gabus yang melindungi batang pokok tua dihasilkan oleh:",p:["Kambium gabus","Meristem apeks","Xilem sekunder","Floem sekunder"],b:0,u:"Kambium gabus menghasilkan sel gabus di bahagian luar."},
 {j:"pilih",t:"Hormon tumbuhan yang merangsang pemanjangan sel ialah:",p:["Auksin","Insulin","Adrenalina","Tiroksina"],b:0,u:"Auksin dihasilkan di hujung pucuk."},
 {j:"banyak",t:"Pilih DUA kesan pertumbuhan sekunder.",p:["Batang lebih tebal","Lebih banyak xilem","Akar memendek","Daun gugur"],b:[0,1],u:"Xilem sekunder menambah sokongan dan pengangkutan air."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, jika hujung akar dipotong 2 mm, apakah kesannya kepada akar?",p:["Akar berhenti memanjang","Akar tumbuh lebih laju","Rambut akar bertambah","Akar bertukar warna"],b:0,u:"Zon pembahagian sel telah dibuang."}},

{n:3, tempat:"Makmal Anak Benih", sk:"1.3 Mengaplikasikan pengukuran pertumbuhan", lampiran:"j1",
 kadNama:"Kadar Pertumbuhan", kadEm:"\u{1F4CF}", kadFakta:"Kadar pertumbuhan = perubahan saiz ÷ masa yang diambil.",
 bosKadNama:"Parameter", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Jisim kering ialah parameter pertumbuhan paling tepat kerana tidak dipengaruhi kandungan air.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung kadar pertumbuhan anak benih dari hari 4 hingga 8.",b:2.25,tol:0.01,suf:"cm/hari",u:"(12 − 3) ÷ 4 = 2.25 cm sehari."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung kadar pertumbuhan dari hari 8 hingga 12.",b:1,tol:0.01,suf:"cm/hari",u:"(16 − 12) ÷ 4 = 1.0 cm sehari."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah pertambahan tinggi antara hari 4 dan 6?",b:4,tol:0.05,suf:"cm",u:"7 − 3 = 4 cm."},
 {j:"pilih",t:"Berdasarkan Jadual 1, dalam tempoh manakah pertumbuhan PALING pesat?",p:["Hari 4 hingga 8","Hari 0 hingga 2","Hari 8 hingga 10","Hari 10 hingga 12"],b:0,u:"Tinggi bertambah 9 cm dalam 4 hari."},
 {j:"pilih",t:"Berdasarkan Jadual 1, mengapakah pertumbuhan perlahan pada hari 0 hingga 2?",p:["Biji benih baru bercambah","Cahaya matahari terlalu terang","Daun yang terbentuk terlalu banyak","Tanah di dalam pasu terlalu subur"],b:0,u:"Anak benih bergantung pada simpanan makanan dalam biji."},
 {j:"pilih",t:"Mengapakah tinggi anak benih kurang tepat sebagai parameter pertumbuhan?",p:["Tidak ukur jisim","Mudah diukur","Tidak perlu alat","Sentiasa meningkat"],b:0,u:"Tinggi tidak mengambil kira pertambahan daun dan akar."},
 {j:"pilih",t:"Untuk mengukur jisim kering anak benih, anak benih perlu:",p:["Dipanaskan hingga jisim tetap","Direndam dalam air semalaman","Dibekukan di dalam peti sejuk","Ditimbang segera selepas dicabut"],b:0,u:"Semua air dibuang di dalam ketuhar pada sekitar 100 °C."},
 {j:"pilih",t:"Kelemahan utama kaedah jisim kering ialah:",p:["Tumbuhan dimusnahkan","Data terlalu tepat","Tidak perlu ketuhar","Mudah dilakukan"],b:0,u:"Banyak sampel diperlukan kerana setiap sampel dibunuh."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, eksperimen ini mahu membandingkan dua jenis baja. Pemboleh ubah dimalarkan PALING penting:",p:["Jenis anak benih","Jenis baja","Tinggi anak benih","Kadar pertumbuhan"],b:0,u:"Hanya jenis baja diubah; spesies, cahaya dan air dimalarkan."}},

{n:4, tempat:"Bilik Lengkung", sk:"1.3 Menganalisis lengkung pertumbuhan tumbuhan", lampiran:"g1",
 kadNama:"Tumbuhan Semusim", kadEm:"\u{1F33E}", kadFakta:"Tumbuhan semusim seperti padi melengkapkan kitar hidup dalam satu musim.",
 bosKadNama:"Saka", bosKadEm:"\u{1F334}", bosKadFakta:"Tumbuhan saka seperti kelapa sawit hidup bertahun-tahun dengan lengkung pertumbuhan bertangga.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah jisim kering maksimum?",b:22,tol:0.2,suf:"g",u:"Puncak 22 g pada minggu ke-10."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah jisim kering menurun pada minggu 0 hingga 2?",p:["Simpanan makanan digunakan","Fotosintesis berlaku dengan pesat","Biji benih menyerap banyak air","Daun baharu bertambah dengan cepat"],b:0,u:"Respirasi menggunakan simpanan makanan sebelum daun berfotosintesis."},
 {j:"nombor",t:"Berdasarkan Rajah 2, hitung kadar pertambahan jisim kering dari minggu 4 hingga 8.",b:3.5,tol:0.05,suf:"g/minggu",u:"(20 − 6) ÷ 4 = 3.5 g seminggu."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah jisim kering meningkat pesat dari minggu 4 hingga 8?",p:["Fotosintesis melebihi respirasi","Respirasi melebihi fotosintesis","Biji gugur dari pokok induk","Air menyejat melalui stoma"],b:0,u:"Daun yang banyak menghasilkan glukosa."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah jisim kering menurun selepas minggu ke-10?",p:["Biji dan daun gugur","Fotosintesis bertambah","Akar terus memanjang","Air semakin bertambah"],b:0,u:"Tumbuhan semusim menua selepas menghasilkan biji."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah penurunan jisim kering dari minggu 10 hingga 12?",b:6,tol:0.2,suf:"g",u:"22 − 16 = 6 g."},
 {j:"pilih",t:"Berdasarkan Rajah 2, bentuk keseluruhan lengkung pertumbuhan ini ialah:",p:["Sigmoid","Bertangga","Garis lurus","Bulatan"],b:0,u:"Lengkung berbentuk S dengan fasa perlahan, pesat dan mendatar."},
 {j:"pilih",t:"Lengkung pertumbuhan pokok getah selama 20 tahun dijangka:",p:["Meningkat bertahun-tahun","Menurun selepas 12 minggu","Sama dengan Rajah 2","Garis mendatar"],b:0,u:"Pokok saka terus bertambah jisim melalui pertumbuhan sekunder."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 2, bilakah masa PALING sesuai untuk menuai tanaman semusim untuk biji?",p:["Minggu ke-10","Minggu ke-2","Minggu ke-4","Selepas minggu ke-14"],b:0,u:"Jisim kering maksimum menunjukkan biji telah matang sepenuhnya."}},

{n:5, tempat:"Dewan Agro", sk:"1.1 hingga 1.3 Menilai aplikasi pertumbuhan tumbuhan", lampiran:null,
 kadNama:"Penanaman Semula", kadEm:"\u{1F33F}", kadFakta:"Pokok kelapa sawit ditanam semula selepas 25 tahun apabila hasil menurun dan pokok terlalu tinggi.",
 bosKadNama:"Pengurusan Ladang", bosKadEm:"\u{1F69C}", bosKadFakta:"Pemahaman lengkung pertumbuhan membantu petani menentukan masa membaja dan menuai.",
 soalan:[
 {j:"pilih",t:"Mengapakah pucuk teh dipetik secara berkala?",p:["Galak cabang sisi","Membunuh pokok teh","Menghentikan pertumbuhan akar","Menambah bilangan kambium"],b:0,u:"Membuang meristem apeks merangsang pertumbuhan tunas sisi."},
 {j:"pilih",t:"Tukang kebun memangkas pokok bunga kertas supaya lebih rendang kerana:",p:["Dominasi apeks hilang","Pokok perlu kurang air","Daun lebih besar","Akar lebih panjang"],b:0,u:"Tanpa auksin dari pucuk, tunas sisi tumbuh."},
 {j:"pilih",t:"Penorehan getah dilakukan dengan cermat agar tidak merosakkan:",p:["Kambium vaskular","Daun muda di pucuk","Bunga di hujung dahan","Akar tunjang pokok"],b:0,u:"Kambium yang rosak menjejaskan pertumbuhan dan penghasilan susu getah."},
 {j:"pilih",t:"Kayu jati bernilai tinggi kerana:",p:["Xilem tebal","Kurang lignin","Tiada gelang tahunan","Banyak sel parenkima"],b:0,u:"Xilem berlignin yang tebal menjadikan kayu kuat."},
 {j:"pilih",t:"Penilaian PALING tepat tentang pembalakan pokok muda di hutan simpan:",p:["Merugikan jangka panjang","Menguntungkan kerana kayu cepat dijual","Tidak memberi kesan kepada hutan","Menambah bekalan kayu masa depan"],b:0,u:"Pokok belum mencapai saiz matang dan pertumbuhan semula hutan terjejas."},
 {j:"pilih",t:"Petani padi membaja nitrogen pada peringkat anak padi kerana:",p:["Pertumbuhan pesat bermula","Padi sudah masak dan menguning","Biji padi sudah gugur ke tanah","Akar sudah berhenti tumbuh"],b:0,u:"Nutrien diperlukan semasa fasa pertumbuhan pesat."},
 {j:"pilih",t:"Kelebihan tanaman semusim seperti jagung kepada petani kecil:",p:["Cepat dituai","Hidup puluhan tahun","Tiada keperluan baja","Tidak perlu disiram"],b:0,u:"Pulangan modal lebih cepat."},
 {j:"banyak",t:"Pilih DUA amalan yang memanfaatkan pengetahuan tisu meristem.",p:["Memangkas pucuk","Keratan batang","Membakar daun","Menyiram air garam"],b:[0,1],u:"Keratan batang tumbuh daripada tisu meristem."}],
 bos:{j:"pilih",t:"Sebuah ladang kelapa sawit berumur 28 tahun. Pengurus mahu menangguhkan penanaman semula. Penilaian PALING tepat:",p:["Tidak wajar; hasil menurun","Wajar; pokok tua lebih produktif","Wajar; kos sifar","Tidak wajar; pokok terlalu rendah"],b:0,u:"Pokok tua terlalu tinggi untuk dituai dan hasil buah menurun."}},

{n:6, tempat:"Studio Reka Tanam", sk:"1.1 hingga 1.3 Mereka cipta berasaskan pertumbuhan tumbuhan", lampiran:null,
 kadNama:"Reka Eksperimen", kadEm:"\u{1F6E0}\u{FE0F}", kadFakta:"Eksperimen pertumbuhan yang baik mempunyai satu pemboleh ubah dimanipulasi dan banyak sampel.",
 bosKadNama:"Reka Cipta Kebun", bosKadEm:"\u{1F4A1}", bosKadFakta:"Kebun sekolah boleh menjadi makmal hidup untuk mengkaji pertumbuhan tumbuhan.",
 soalan:[
 {j:"pilih",t:"Anda mereka eksperimen kesan cahaya terhadap pertumbuhan anak benih. Pemboleh ubah dimanipulasi:",p:["Keamatan cahaya","Jenis biji benih","Isi padu air","Jenis tanah"],b:0,u:"Faktor lain dimalarkan."},
 {j:"pilih",t:"Parameter pertumbuhan PALING tepat untuk eksperimen anda:",p:["Jisim kering","Warna daun","Bau pokok","Bentuk pasu"],b:0,u:"Jisim kering mengukur bahan organik sebenar."},
 {j:"pilih",t:"Untuk mendapatkan data jisim kering setiap minggu, anda perlu menanam:",p:["Banyak anak benih","Satu anak benih","Dua anak benih","Tiada anak benih"],b:0,u:"Beberapa anak benih dikorbankan pada setiap pengukuran."},
 {j:"pilih",t:"Anda mereka sistem hidroponik kecil di sekolah. Faktor PALING penting dikawal:",p:["Nutrien larutan","Warna bekas","Nama tanaman","Jenama paip"],b:0,u:"Larutan nutrien menggantikan tanah."},
 {j:"pilih",t:"Untuk mempercepat pembiakan pokok hiasan dengan keratan batang, anda boleh menggunakan:",p:["Hormon akar","Garam","Gula","Cuka"],b:0,u:"Hormon auksin sintetik merangsang pembentukan akar."},
 {j:"pilih",t:"Bagaimanakah anda membentangkan data pertumbuhan secara jelas?",p:["Graf garis","Senarai rawak","Lukisan bunga","Gambar sahaja"],b:0,u:"Graf garis menunjukkan perubahan dari masa ke masa."},
 {j:"pilih",t:"Anda mahu menilai kebun sayur sekolah dari segi ekonomi. Data PALING sesuai:",p:["Hasil dan kos","Warna sayur","Bilangan pengunjung","Bentuk batas"],b:0,u:"Perbandingan hasil jualan dengan kos menunjukkan keuntungan."},
 {j:"banyak",t:"Pilih DUA pemboleh ubah yang perlu dimalarkan dalam eksperimen baja anda.",p:["Jenis tanaman","Isi padu air","Jenis baja","Jisim kering"],b:[0,1],u:"Jenis baja dimanipulasi; jisim kering bergerak balas."}],
 bos:{j:"buka",
  t:"Reka satu projek atau eksperimen berkaitan pertumbuhan tumbuhan untuk sekolah atau komuniti (contoh: kebun sayur hidroponik, eksperimen kesan baja organik terhadap pertumbuhan, tapak semaian keratan batang pokok hiasan, pemangkasan pokok teh atau pokok buah).",
  arahan:"Nyatakan tujuan, konsep pertumbuhan yang terlibat (meristem, pertumbuhan primer atau sekunder, lengkung pertumbuhan), pemboleh ubah yang dimanipulasi, bergerak balas dan dimalarkan, parameter pertumbuhan yang dipilih beserta sebab, SATU pengiraan kadar pertumbuhan, cara membentangkan data, SATU langkah keselamatan, dan SATU pertimbangan kos atau nilai ekonomi komuniti.",
  u:"Jawapan TP6 yang kukuh memilih parameter yang sah seperti jisim kering, mengawal pemboleh ubah dengan betul, mengira kadar pertumbuhan, membentangkan data dalam graf, menjaga keselamatan penggunaan baja dan alatan, serta menilai kos dan pulangan kepada komuniti."}}
];

module.exports = {
  id:"b5b1", tingkatan:5, kod:"1.0 Organisasi Tisu Tumbuhan dan Pertumbuhan",
  tajuk:"Akar Tumbuh",
  subtajuk:"Biologi Ting. 5 · Bab 1 Organisasi Tisu Tumbuhan dan Pertumbuhan",
  spi:SPI.b5b1,
  ulasan:{
   1:"{n} dapat mengingat kembali jenis tisu tumbuhan dan tisu meristem. Langkah seterusnya ialah menerangkan zon pertumbuhan.",
   2:"{n} dapat menjelaskan zon pertumbuhan dan pertumbuhan sekunder. Perlu lebih latihan mengira kadar pertumbuhan.",
   3:"{n} boleh mengaplikasikan data pertumbuhan untuk mengira kadar. Galakkan menganalisis lengkung pertumbuhan.",
   4:"{n} mampu menganalisis lengkung pertumbuhan tumbuhan semusim dan saka. Seterusnya latih menilai aplikasi pertanian.",
   5:"{n} dapat menilai amalan pertanian berdasarkan pengetahuan pertumbuhan. Sudah bersedia mereka projek tanaman.",
   6:"{n} berjaya mereka projek pertumbuhan tumbuhan yang terancang dan berasaskan data. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Organisasi Tisu Tumbuhan dan Pertumbuhan. Cadangan: ulang hentian pertama dan tanam kacang hijau di atas kapas sambil mengukur tingginya."
  },
  lampiran:{
   a1:{jenis:"aliran", mod:"turun",
     nod:["Tudung akar","Zon pembahagian sel","?","Zon pembezaan sel"],
     kapsyen:"Rajah 1 · Zon pertumbuhan di hujung akar, dari hujung ke atas",
     alt:"Rajah aliran: tudung akar, zon pembahagian sel, zon bertanda soal, zon pembezaan sel"},
   j1:jadual(1, "Tinggi anak benih kacang hijau",
     ["Hari", "0", "2", "4", "6", "8", "10", "12"],
     [["Tinggi (cm)","0","1","3","7","12","15","16"]]),
   g1:{jenis:"graf", x:[0,2,4,6,8,10,12], xLabel:"Masa (minggu)", titik:true, yMin:0, yMaks:24, grid:12,
     siri:[{label:"Jisim kering (g)", y:[4,2,6,12,20,22,16], warna:"hijau"}],
     kapsyen:"Rajah 2 · Graf jisim kering tumbuhan semusim",
     alt:"Graf turun dari 4 ke 2 g pada minggu 2, naik ke 6, 12, 20 dan puncak 22 g pada minggu 10, kemudian turun ke 16 g pada minggu 12"}
  },
  aras:ARAS
};
