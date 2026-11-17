/* Biologi KSSM Tingkatan 5, Bab 13 Teknologi Genetik.
   SK 13.1 Kejuruteraan genetik (DNA rekombinan, GMO), 13.2 Bioteknologi
   (terapi gen, cap jari DNA, aplikasi dalam perubatan, pertanian, forensik) (DSKP Biologi). */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Makmal Gen", sk:"13.1 Kejuruteraan genetik", lampiran:null,
 kadNama:"DNA Rekombinan", kadEm:"\u{1F9EC}", kadFakta:"DNA rekombinan terbentuk apabila DNA daripada dua sumber berbeza digabungkan.",
 bosKadNama:"Plasmid", bosKadEm:"\u{2B55}", bosKadFakta:"Plasmid ialah DNA bulat kecil dalam bakteria yang digunakan sebagai vektor.",
 soalan:[
 {j:"pilih",t:"Enzim yang memotong DNA pada jujukan tertentu ialah:",p:["Enzim pembatasan","Ligase DNA","Amilase liur","Pepsin dalam perut"],b:0,u:"Enzim pembatasan menghasilkan hujung melekit."},
 {j:"pilih",t:"Enzim yang menyambung serpihan DNA ialah:",p:["Ligase DNA","Enzim pembatasan","Lipase","Tripsin"],b:0,u:"Ligase membentuk ikatan pada tulang belakang DNA."},
 {j:"pilih",t:"Vektor yang biasa digunakan untuk membawa gen ke dalam bakteria ialah:",p:["Plasmid","Ribosom","Mitokondria","Lisosom"],b:0,u:"Plasmid boleh direplikasi dalam bakteria."},
 {j:"pilih",t:"Organisma yang bahan genetiknya diubah dengan kejuruteraan genetik dipanggil:",p:["GMO","Klon semula jadi","Hibrid biasa","Mutan liar"],b:0,u:"Organisma terubah suai genetik."},
 {j:"pilih",t:"Insulin manusia kini dihasilkan secara besar-besaran menggunakan:",p:["Bakteria transgenik","Pankreas lembu sahaja","Tumbuhan liar","Air laut"],b:0,u:"Gen insulin manusia dimasukkan ke dalam bakteria E. coli."},
 {j:"pilih",t:"Padi Emas diubah suai untuk menghasilkan:",p:["Beta-karotena","Insulin","Hemoglobin","Antibiotik"],b:0,u:"Membantu mengatasi kekurangan vitamin A."},
 {j:"pilih",t:"Bakteria yang menerima plasmid rekombinan dikenali sebagai bakteria:",p:["Transgenik","Patogen","Pengurai","Bakteria mati"],b:0,u:"Ia mengandungi gen daripada spesies lain."},
 {j:"banyak",t:"Pilih DUA enzim yang digunakan dalam pembentukan DNA rekombinan.",p:["Enzim pembatasan","Ligase DNA","Amilase","Maltase"],b:[0,1],u:"Amilase dan maltase ialah enzim pencernaan."}],
 bos:{j:"pilih",t:"Mengapakah enzim pembatasan yang SAMA digunakan untuk memotong plasmid dan gen insulin?",p:["Hujung melekit sepadan","Kos enzim lebih murah","Mempercepat pembiakan bakteria","Membunuh plasmid yang lama"],b:0,u:"Hujung yang sepadan membolehkan gen bercantum dengan plasmid."}},

{n:2, tempat:"Lorong Insulin", sk:"13.1 Langkah penghasilan insulin melalui DNA rekombinan", lampiran:"a1",
 kadNama:"Fermenter", kadEm:"\u{1F3ED}", kadFakta:"Bakteria transgenik dikultur dalam tangki fermenter besar untuk menghasilkan protein secara besar-besaran.",
 bosKadNama:"Penulenan", bosKadEm:"\u{1F48A}", bosKadFakta:"Insulin yang dihasilkan diekstrak dan ditulenkan sebelum digunakan oleh pesakit diabetes.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, langkah bertanda ? ialah:",p:["Gen disambung ke plasmid","Bakteria dibunuh dengan haba","Plasmid dicerna oleh enzim","Insulin dipotong kepada asid amino"],b:0,u:"Ligase DNA menyambung gen insulin ke dalam plasmid."},
 {j:"pilih",t:"Berdasarkan Rajah 1, plasmid rekombinan dimasukkan ke dalam:",p:["Bakteria","Darah pesakit","Sel saraf","Tanah"],b:0,u:"Bakteria membiak dan menyalin plasmid."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bakteria transgenik menghasilkan insulin kerana:",p:["Gen insulin diekspres","Bakteria memakan banyak gula","Plasmid di dalamnya mati","Bakteria mempunyai pankreas"],b:0,u:"Ribosom bakteria mentranslasi mRNA insulin."},
 {j:"pilih",t:"Kelebihan insulin rekombinan berbanding insulin haiwan ialah:",p:["Kurang tindak balas alahan","Harganya lebih mahal","Bertindak lebih lambat","Kurang tulen berbanding haiwan"],b:0,u:"Ia sama dengan insulin manusia."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bakteria digunakan kerana ia:",p:["Membiak dengan cepat","Saiznya sangat besar","Tidak mempunyai DNA","Hidup bertahun-tahun"],b:0,u:"Satu bakteria menjadi berjuta-juta dalam beberapa jam."},
 {j:"pilih",t:"Gen penanda rintang antibiotik dimasukkan ke dalam plasmid untuk:",p:["Mengenal pasti bakteria berjaya","Membunuh semua bakteria","Menambah hasil insulin","Menghasilkan warna pada koloni"],b:0,u:"Hanya bakteria yang menerima plasmid tumbuh pada medium berantibiotik."},
 {j:"pilih",t:"Gen insulin manusia diperoleh daripada sel:",p:["Beta pankreas","Darah merah matang","Kulit yang telah mati","Akar rambut"],b:0,u:"Sel beta pulau Langerhans menghasilkan insulin."},
 {j:"banyak",t:"Pilih DUA produk perubatan daripada DNA rekombinan.",p:["Insulin","Hormon pertumbuhan","Aspirin","Garam"],b:[0,1],u:"Vaksin hepatitis B juga dihasilkan dengan teknologi ini."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, jika enzim ligase tidak ditambah, apakah kesannya?",p:["Gen tidak bercantum","Insulin dihasilkan lebih banyak","Semua bakteria mati","Plasmid membesar dua kali"],b:0,u:"Gen dan plasmid tidak dapat membentuk DNA rekombinan."}},

{n:3, tempat:"Makmal Forensik", sk:"13.2 Mengaplikasikan cap jari DNA", lampiran:"j1",
 kadNama:"Cap Jari DNA", kadEm:"\u{1F575}\u{FE0F}", kadFakta:"Corak jalur DNA unik bagi setiap individu kecuali kembar seiras.",
 bosKadNama:"Elektroforesis Gel", bosKadEm:"\u{26A1}", bosKadFakta:"Serpihan DNA bergerak ke kutub positif; serpihan kecil bergerak lebih jauh.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Jadual 1, suspek yang DNAnya sepadan dengan sampel tempat kejadian ialah:",p:["Suspek 2","Suspek 1","Suspek 3","Tiada suspek"],b:0,u:"Saiz jalur 2, 5 dan 9 kb sama."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah bilangan jalur sampel tempat kejadian?",b:3,tol:0.05,suf:"jalur",u:"2, 5 dan 9 kb."},
 {j:"pilih",t:"Berdasarkan Jadual 1, serpihan yang bergerak PALING jauh dalam gel ialah:",p:["2 kb","5 kb","9 kb","12 kb"],b:0,u:"Serpihan paling kecil bergerak paling jauh."},
 {j:"pilih",t:"DNA bergerak ke kutub positif kerana DNA bercas:",p:["Negatif","Positif","Neutral","Berubah-ubah"],b:0,u:"Kumpulan fosfat bercas negatif."},
 {j:"pilih",t:"Berdasarkan Jadual 1, suspek 1 dan sampel berkongsi satu jalur 5 kb. Kesimpulannya:",p:["Tidak cukup bukti","Suspek 1 bersalah","Suspek 1 kembar","DNA rosak"],b:0,u:"Semua jalur mesti sepadan."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah beza saiz antara serpihan terbesar dan terkecil sampel?",b:7,tol:0.05,suf:"kb",u:"9 − 2 = 7 kb."},
 {j:"pilih",t:"Sampel DNA yang sangat sedikit di tempat kejadian digandakan dengan teknik:",p:["PCR","Pengkulturan","Penyulingan","Penapisan"],b:0,u:"Tindak balas berantai polimerase."},
 {j:"pilih",t:"Cap jari DNA juga digunakan untuk:",p:["Ujian paterniti","Mengukur tinggi","Menguji gula","Mengira sel darah"],b:0,u:"Separuh jalur anak sepadan dengan ibu dan separuh dengan bapa."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, peguam suspek 2 berkata suspek mempunyai kembar seiras. Penilaian PALING tepat:",p:["DNA kembar sama","DNA kembar pasti berbeza","Bukti DNA tidak sah di mahkamah","Kembar seiras tiada DNA"],b:0,u:"Kembar seiras mempunyai DNA sama; bukti lain diperlukan."}},

{n:4, tempat:"Bilik Ladang", sk:"13.2 Menganalisis kesan tanaman GMO", lampiran:"g1",
 kadNama:"Tanaman Bt", kadEm:"\u{1F33D}", kadFakta:"Tanaman Bt mengandungi gen bakteria yang menghasilkan protein toksik kepada serangga perosak.",
 bosKadNama:"Rintangan Serangga", bosKadEm:"\u{1F41B}", bosKadFakta:"Serangga boleh menjadi rintang terhadap protein Bt jika tiada kawasan perlindungan bukan GMO.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah hasil jagung Bt pada tahun ke-3?",b:8,tol:0.1,suf:"tan/ha",u:"Bacaan graf: 8 tan sehektar."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah beza hasil jagung Bt dan biasa pada tahun ke-3?",b:3,tol:0.1,suf:"tan/ha",u:"8 − 5 = 3 tan sehektar."},
 {j:"pilih",t:"Berdasarkan Rajah 2, hasil jagung Bt lebih tinggi kerana:",p:["Kurang serangan ulat","Menyerap lebih banyak air","Daunnya lebih kecil","Akarnya lebih pendek"],b:0,u:"Protein Bt membunuh ulat penggerek."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah hasil jagung Bt menurun selepas tahun ke-4?",p:["Ulat menjadi rintang Bt","Pokok jagung bertambah tinggi","Hujan semakin berkurang","Baja ditambah setiap musim"],b:0,u:"Pemilihan semula jadi meningkatkan ulat rintang."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapa peratus hasil Bt melebihi jagung biasa pada tahun ke-3? Beri jawapan kepada nombor bulat.",b:60,tol:0.5,suf:"%",u:"3 ÷ 5 × 100 = 60%."},
 {j:"pilih",t:"Berdasarkan Rajah 2, hasil jagung biasa:",p:["Hampir malar","Meningkat pesat","Sifar","Menurun pesat"],b:0,u:"Kekal sekitar 5 tan sehektar."},
 {j:"pilih",t:"Langkah PALING berkesan untuk melambatkan rintangan serangga ialah:",p:["Tanam zon perlindungan","Tanam jagung Bt sahaja","Tambah racun serangga","Bakar ladang selepas tuai"],b:0,u:"Kawasan jagung biasa mengekalkan serangga tidak rintang."},
 {j:"pilih",t:"Kelebihan alam sekitar tanaman Bt ialah:",p:["Kurang racun perosak","Penggunaan air bertambah","Tanah menjadi lebih masin","Rumpai tumbuh lebih banyak"],b:0,u:"Kurang semburan racun kimia."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 2, petani mahu terus menanam jagung Bt sahaja selama 10 tahun. Analisis PALING tepat:",p:["Hasil terus menurun","Hasil terus meningkat","Serangga pupus","Tiada perubahan"],b:0,u:"Trend menunjukkan ulat rintang semakin banyak tanpa pengurusan."}},

{n:5, tempat:"Dewan Bioetika", sk:"13.1 hingga 13.2 Menilai isu teknologi genetik", lampiran:null,
 kadNama:"Bioetika", kadEm:"\u{2696}\u{FE0F}", kadFakta:"Bioetika menimbang manfaat dan risiko teknologi biologi terhadap manusia dan alam.",
 bosKadNama:"Terapi Gen", bosKadEm:"\u{1F489}", bosKadFakta:"Terapi gen menggantikan gen rosak dengan gen berfungsi untuk merawat penyakit genetik.",
 soalan:[
 {j:"pilih",t:"Kebimbangan utama tanaman GMO terhadap alam sekitar ialah:",p:["Gen tersebar ke liar","Tanah menjadi lebih subur","Taburan hujan bertambah","Bilangan burung bertambah"],b:0,u:"Pendebungaan silang dengan spesies liar."},
 {j:"pilih",t:"Pelabelan makanan GMO penting kerana memberi pengguna:",p:["Hak memilih","Harga murah","Rasa sedap","Tarikh luput"],b:0,u:"Pengguna boleh membuat keputusan sendiri."},
 {j:"pilih",t:"Penilaian PALING tepat tentang terapi gen untuk talasemia:",p:["Berpotensi tetapi mahal","Tiada manfaat kepada pesakit","Mudah dan murah dilakukan","Menyebabkan talasemia baharu"],b:0,u:"Rawatan baharu yang menjanjikan tetapi kos tinggi."},
 {j:"pilih",t:"Bank data DNA penjenayah menimbulkan isu:",p:["Privasi","Pencemaran","Kepupusan","Hakisan"],b:0,u:"Maklumat genetik sangat peribadi."},
 {j:"pilih",t:"Penilaian tentang mengubah gen embrio manusia untuk warna mata:",p:["Menimbulkan isu etika","Diterima oleh semua pihak","Perlu diwajibkan kepada ibu bapa","Tiada risiko kepada bayi"],b:0,u:"Bukan untuk rawatan penyakit; risiko tidak diketahui."},
 {j:"pilih",t:"Vaksin rekombinan hepatitis B lebih selamat kerana:",p:["Tiada virus hidup","Mengandungi virus hidup","Memerlukan lebih banyak dos","Diambil secara diminum"],b:0,u:"Hanya protein permukaan virus dihasilkan oleh yis."},
 {j:"pilih",t:"Biofuel daripada mikroorganisma dianggap lestari kerana:",p:["Boleh diperbaharui","Berasal daripada bahan api fosil","Mencemar udara lebih teruk","Tidak menghasilkan tenaga"],b:0,u:"Ia dihasilkan semula daripada biojisim."},
 {j:"banyak",t:"Pilih DUA aplikasi bioteknologi dalam perubatan.",p:["Insulin rekombinan","Terapi gen","Pembalakan","Perlombongan"],b:[0,1],u:"Pembalakan dan perlombongan bukan bioteknologi."}],
 bos:{j:"pilih",t:"Kerajaan mempertimbangkan kelulusan padi GMO tahan banjir. Pendekatan PALING bertanggungjawab:",p:["Uji keselamatan dahulu","Luluskan tanpa sebarang ujian","Haramkan serta-merta","Abaikan pandangan petani"],b:0,u:"Ujian lapangan, keselamatan makanan dan alam sekitar diperlukan sebelum kelulusan."}},

{n:6, tempat:"Studio Bioteknologi", sk:"13.1 hingga 13.2 Mereka cipta berasaskan teknologi genetik", lampiran:null,
 kadNama:"Pengekstrakan DNA", kadEm:"\u{1F353}", kadFakta:"DNA strawberi boleh diekstrak di dapur menggunakan sabun, garam dan alkohol sejuk.",
 bosKadNama:"Reka Cipta Model", bosKadEm:"\u{1F4A1}", bosKadFakta:"Model kertas DNA rekombinan membantu murid memahami pemotongan dan penyambungan gen.",
 soalan:[
 {j:"pilih",t:"Dalam pengekstrakan DNA strawberi, sabun digunakan untuk:",p:["Memecahkan membran sel","Mewarnakan DNA buah","Memotong DNA kepada serpihan","Menambah jumlah DNA"],b:0,u:"Sabun melarutkan lipid membran sel dan nukleus."},
 {j:"pilih",t:"Alkohol sejuk ditambah supaya DNA:",p:["Termendak","Larut dalam air","Terurai kepada bes","Berubah warna"],b:0,u:"DNA tidak larut dalam alkohol dan kelihatan seperti benang putih."},
 {j:"pilih",t:"Garam ditambah dalam pengekstrakan DNA untuk:",p:["Neutralkan cas DNA","Menambah rasa masin","Mewarnakan DNA buah","Membunuh kuman pada buah"],b:0,u:"Ion Na⁺ membantu DNA bergumpal."},
 {j:"pilih",t:"Model kertas DNA rekombinan PALING baik menggunakan gunting untuk mewakili:",p:["Enzim pembatasan","Ligase DNA","Plasmid bulat","Bakteria perumah"],b:0,u:"Gunting memotong jujukan tertentu."},
 {j:"pilih",t:"Pita pelekat dalam model kertas mewakili:",p:["Ligase DNA","Enzim pembatasan","Ribosom","Nukleus"],b:0,u:"Menyambung serpihan."},
 {j:"pilih",t:"Untuk debat bioetika GMO di kelas, persediaan PALING baik:",p:["Kumpul bukti saintifik","Guna hujah emosi","Salin hujah rakan","Hafal slogan kempen"],b:0,u:"Hujah berasaskan bukti lebih meyakinkan."},
 {j:"pilih",t:"Untuk menilai pemahaman rakan selepas demonstrasi model anda, kaedah PALING sesuai:",p:["Kuiz ringkas","Tanya nama rakan","Kira bilangan kerusi","Lihat jam dinding"],b:0,u:"Kuiz memberi data pemahaman."},
 {j:"banyak",t:"Pilih DUA bahan dapur yang digunakan dalam pengekstrakan DNA ringkas.",p:["Sabun pencuci","Garam","Gula","Minyak masak"],b:[0,1],u:"Alkohol sejuk juga diperlukan."}],
 bos:{j:"buka",
  t:"Reka satu projek atau alat pembelajaran berkaitan teknologi genetik untuk sekolah atau komuniti (contoh: demonstrasi pengekstrakan DNA buah, model kertas pembentukan DNA rekombinan insulin, simulasi cap jari DNA dengan kertas berwarna, forum bioetika tanaman GMO).",
  arahan:"Nyatakan tujuan, konsep teknologi genetik yang terlibat (enzim pembatasan, ligase, plasmid, DNA rekombinan, cap jari DNA atau bioteknologi), bahan dan langkah, cara menilai keberkesanan projek, SATU langkah keselamatan, SATU isu etika yang perlu dibincangkan, dan SATU manfaat kepada komuniti.",
  u:"Jawapan TP6 yang kukuh menerangkan langkah teknologi genetik dengan tepat, memadankan setiap bahan model dengan fungsi sebenar, menilai keberkesanan dengan data seperti kuiz pra dan pasca, menjaga keselamatan bahan seperti alkohol, membincangkan isu etika secara seimbang, serta menghubungkan projek dengan manfaat kepada masyarakat."}}
];

module.exports = {
  id:"b5b13", tingkatan:5, kod:"13.0 Teknologi Genetik",
  tajuk:"Rekayasa Hayat",
  subtajuk:"Biologi Ting. 5 · Bab 13 Teknologi Genetik",
  spi:SPI.b5b13,
  ulasan:{
   1:"{n} dapat mengingat kembali alat kejuruteraan genetik. Langkah seterusnya ialah menerangkan penghasilan insulin rekombinan.",
   2:"{n} dapat menjelaskan langkah penghasilan DNA rekombinan. Perlu lebih latihan mentafsir cap jari DNA.",
   3:"{n} boleh mengaplikasikan cap jari DNA untuk membuat kesimpulan forensik. Galakkan menganalisis data tanaman GMO.",
   4:"{n} mampu menganalisis kesan tanaman GMO dan rintangan serangga. Seterusnya latih menilai isu bioetika.",
   5:"{n} dapat menilai manfaat dan isu etika teknologi genetik. Sudah bersedia mereka projek bioteknologi.",
   6:"{n} berjaya mereka projek teknologi genetik yang tepat dan beretika. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Teknologi Genetik. Cadangan: ulang hentian pertama dan cuba ekstrak DNA pisang di rumah bersama keluarga."
  },
  lampiran:{
   a1:{jenis:"aliran", mod:"turun",
     nod:["Gen insulin dan plasmid dipotong enzim pembatasan","?","Plasmid rekombinan masuk ke bakteria","Bakteria dikultur dalam fermenter","Insulin diekstrak dan ditulenkan"],
     kapsyen:"Rajah 1 · Penghasilan insulin melalui DNA rekombinan",
     alt:"Rajah aliran: gen insulin dan plasmid dipotong enzim pembatasan, langkah bertanda soal, plasmid rekombinan masuk ke bakteria, bakteria dikultur dalam fermenter, insulin diekstrak dan ditulenkan"},
   j1:jadual(1, "Saiz jalur DNA (kb) dalam cap jari DNA",
     ["Sampel", "Saiz jalur (kb)"],
     [["Tempat kejadian","2, 5, 9"],["Suspek 1","3, 5, 12"],["Suspek 2","2, 5, 9"],["Suspek 3","4, 7, 10"]]),
   g1:{jenis:"graf", x:[1,2,3,4,5,6], xLabel:"Tahun", titik:true, yMin:0, yMaks:10, grid:10,
     siri:[{label:"Jagung Bt (tan/ha)", y:[8,8,8,8,6,6], warna:"hijau"},{label:"Jagung biasa (tan/ha)", y:[5,5,5,5,5,5], warna:"merah"}],
     kapsyen:"Rajah 2 · Hasil jagung Bt dan jagung biasa di sebuah ladang (data rekaan)",
     alt:"Graf dua garis: jagung Bt 8 tan sehektar dari tahun 1 hingga 4 kemudian turun ke 6 pada tahun 5 dan 6; jagung biasa malar 5 tan sehektar"}
  },
  aras:ARAS
};
