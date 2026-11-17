/* Biologi KSSM Tingkatan 5, Bab 11 Pewarisan.
   SK 11.1 Kacukan monohibrid, 11.2 Kacukan dihibrid, 11.3 Gen dan alel,
   11.4 Pewarisan dalam manusia (kumpulan darah, penentuan seks, rangkai seks) (DSKP Biologi).
   Nisbah disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Taman Mendel", sk:"11.1 Konsep asas pewarisan · 11.3 Gen dan alel", lampiran:null,
 kadNama:"Alel", kadEm:"\u{1F9EC}", kadFakta:"Alel ialah bentuk alternatif bagi satu gen pada lokus yang sama pada kromosom homolog.",
 bosKadNama:"Hukum Mendel Pertama", bosKadEm:"\u{1F331}", bosKadFakta:"Dua alel bagi satu ciri berpisah semasa pembentukan gamet (hukum segregasi).",
 soalan:[
 {j:"pilih",t:"Bapa genetik yang menjalankan eksperimen kacukan kacang pis ialah:",p:["Gregor Mendel","Charles Darwin","Robert Hooke","Louis Pasteur"],b:0,u:"Mendel mengkaji pewarisan ciri pada pokok kacang pis."},
 {j:"pilih",t:"Genotip TT dikenali sebagai:",p:["Homozigot dominan","Heterozigot","Homozigot resesif","Fenotip"],b:0,u:"Kedua-dua alel sama dan dominan."},
 {j:"pilih",t:"Genotip Tt dikenali sebagai:",p:["Heterozigot","Homozigot dominan","Homozigot resesif","Alel tunggal"],b:0,u:"Dua alel yang berbeza."},
 {j:"pilih",t:"Ciri yang dapat dilihat seperti tinggi pokok dipanggil:",p:["Fenotip","Genotip","Alel","Lokus"],b:0,u:"Fenotip dipengaruhi genotip dan persekitaran."},
 {j:"pilih",t:"Alel yang ciri fenotipnya hanya muncul dalam keadaan homozigot ialah alel:",p:["Resesif","Dominan","Kodominan","Mutan"],b:0,u:"Alel resesif dilindungi oleh alel dominan dalam heterozigot."},
 {j:"pilih",t:"Kedudukan gen pada kromosom dikenali sebagai:",p:["Lokus","Alel","Fenotip","Gamet"],b:0,u:"Setiap gen menduduki lokus tertentu."},
 {j:"pilih",t:"Gamet bagi organisma bergenotip Tt ialah:",p:["T dan t","Tt","TT dan tt","T"],b:0,u:"Alel berpisah semasa meiosis."},
 {j:"banyak",t:"Pilih DUA genotip homozigot.",p:["TT","tt","Tt","tT"],b:[0,1],u:"Homozigot mempunyai dua alel yang sama."}],
 bos:{j:"pilih",t:"Pokok tinggi (TT) dikacukkan dengan pokok rendah (tt). Semua anak F1 tinggi kerana:",p:["T dominan atas t","t dominan atas T","Persekitaran sama","Tiada alel rendah"],b:0,u:"F1 bergenotip Tt dan alel T menyembunyikan t."}},

{n:2, tempat:"Lorong Kacukan", sk:"11.1 Kacukan monohibrid · 11.4 Kumpulan darah", lampiran:"a1",
 kadNama:"Nisbah 3:1", kadEm:"\u{2797}", kadFakta:"Kacukan Tt × Tt menghasilkan nisbah fenotip 3 dominan : 1 resesif.",
 bosKadNama:"Kodominan", bosKadEm:"\u{1FA78}", bosKadFakta:"Alel Iᴬ dan Iᴮ adalah kodominan; kedua-duanya diekspresikan dalam kumpulan darah AB.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, genotip anak F1 ialah:",p:["Tt","TT","tt","Tt dan tt"],b:0,u:"Semua F1 menerima T daripada satu induk dan t daripada induk lain."},
 {j:"pilih",t:"Berdasarkan Rajah 1, nisbah fenotip F2 ialah:",p:["3 tinggi : 1 rendah","1 tinggi : 1 rendah","1 tinggi : 3 rendah","Semua tinggi"],b:0,u:"Tt × Tt → 1 TT : 2 Tt : 1 tt."},
 {j:"pilih",t:"Berdasarkan Rajah 1, nisbah genotip F2 ialah:",p:["1 : 2 : 1","3 : 1","1 : 1","9 : 3 : 3 : 1"],b:0,u:"1 TT : 2 Tt : 1 tt."},
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa bertanda ? ialah:",p:["F1 dikacuk sesama sendiri","F1 dikacuk dengan TT","Induk dikacuk semula","Gamet bercantum dengan F2"],b:0,u:"Kacukan Tt × Tt menghasilkan F2."},
 {j:"pilih",t:"Individu bergenotip IᴬIᴮ mempunyai kumpulan darah:",p:["AB","A","B","O"],b:0,u:"Kedua-dua antigen A dan B dihasilkan."},
 {j:"pilih",t:"Individu berkumpulan darah O bergenotip:",p:["IᴼIᴼ","IᴬIᴼ","IᴮIᴼ","IᴬIᴮ"],b:0,u:"Alel Iᴼ resesif."},
 {j:"pilih",t:"Ibu bapa bergenotip IᴬIᴼ dan IᴮIᴼ boleh mendapat anak berkumpulan darah:",p:["A, B, AB atau O","A dan O","AB dan O","A atau B"],b:0,u:"IᴬIᴮ, IᴬIᴼ, IᴮIᴼ dan IᴼIᴼ, setiap satu ¼."},
 {j:"banyak",t:"Pilih DUA genotip yang menghasilkan kumpulan darah A.",p:["IᴬIᴬ","IᴬIᴼ","IᴬIᴮ","IᴼIᴼ"],b:[0,1],u:"IᴬIᴮ menghasilkan AB; IᴼIᴼ menghasilkan O."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, untuk menentukan sama ada pokok tinggi F2 bergenotip TT atau Tt, ia dikacuk dengan:",p:["Pokok rendah (tt)","Pokok tinggi (TT)","Pokok tinggi (Tt)","Pokok F1 lain"],b:0,u:"Kacukan uji: jika ada anak rendah, induk ialah Tt."}},

{n:3, tempat:"Makmal Nisbah", sk:"11.1 hingga 11.2 Mengaplikasikan data kacukan", lampiran:"j1",
 kadNama:"Kacukan Dihibrid", kadEm:"\u{1F7E2}", kadFakta:"Kacukan RrYy × RrYy menghasilkan nisbah fenotip 9 : 3 : 3 : 1.",
 bosKadNama:"Hukum Mendel Kedua", bosKadEm:"\u{1F500}", bosKadFakta:"Alel bagi gen berbeza berpisah secara bebas semasa pembentukan gamet (hukum penyusunan bebas).",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah jumlah anak F2?",b:400,tol:0.5,suf:"anak",u:"300 + 100 = 400."},
 {j:"nombor",t:"Berdasarkan Jadual 1, hitung nisbah biji bulat kepada biji berkedut (bulat ÷ berkedut).",b:3,tol:0.05,suf:"",u:"300 ÷ 100 = 3, iaitu 3 : 1."},
 {j:"pilih",t:"Berdasarkan Jadual 1, genotip induk F1 ialah:",p:["Rr dan Rr","RR dan rr","Rr dan rr","RR dan RR"],b:0,u:"Nisbah 3 : 1 terhasil daripada Rr × Rr."},
 {j:"nombor",t:"Dalam kacukan Rr × rr, berapa peratus anak dijangka berkedut?",b:50,tol:0.5,suf:"%",u:"Rr dan rr masing-masing ½."},
 {j:"nombor",t:"Dalam kacukan dihibrid RrYy × RrYy, berapakah daripada 16 anak dijangka bulat dan kuning?",b:9,tol:0.05,suf:"anak",u:"Nisbah 9 : 3 : 3 : 1."},
 {j:"nombor",t:"Dalam kacukan RrYy × RrYy menghasilkan 320 biji, berapakah dijangka berkedut dan hijau (rryy)?",b:20,tol:0.5,suf:"biji",u:"1/16 × 320 = 20."},
 {j:"pilih",t:"Bilangan jenis gamet yang dihasilkan oleh induk RrYy ialah:",p:["Empat","Dua","Satu","Lapan"],b:0,u:"RY, Ry, rY dan ry."},
 {j:"pilih",t:"Berdasarkan Jadual 1, nisbah sebenar sedikit berbeza daripada 3 : 1 dalam eksperimen kecil kerana:",p:["Persenyawaan rawak","Teori Mendel tidak tepat","Alel bertukar sendiri","Biji telah dicat"],b:0,u:"Gabungan gamet bergantung pada kebarangkalian."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, jika setiap pokok bulat F2 dikacuk dengan pokok rr, kira-kira berapa pokok bulat akan menghasilkan sebahagian anak berkedut?",p:["200","100","300","400"],b:0,u:"Daripada 300 pokok bulat, ⅔ ialah Rr: 300 × ⅔ = 200."}},

{n:4, tempat:"Bilik Salasilah", sk:"11.4 Menganalisis pewarisan rangkai seks dan salasilah", lampiran:"a2",
 kadNama:"Rangkai Seks", kadEm:"\u{1F441}\u{FE0F}", kadFakta:"Gen buta warna terletak pada kromosom X; lelaki XᵇY adalah buta warna.",
 bosKadNama:"Pembawa", bosKadEm:"\u{1F469}", bosKadFakta:"Wanita XᴮXᵇ ialah pembawa yang berpenglihatan normal.",
 soalan:[
 {j:"pilih",t:"Lelaki menentukan jantina anak kerana sperma membawa kromosom:",p:["X atau Y","Kromosom X","Kromosom Y","Dua kromosom X"],b:0,u:"Ovum sentiasa membawa kromosom X."},
 {j:"pilih",t:"Kebarangkalian anak pertama sepasang suami isteri ialah perempuan:",p:["50%","25%","75%","100%"],b:0,u:"Separuh sperma membawa X."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapa peratus anak lelaki daripada ibu pembawa dan bapa normal dijangka buta warna?",b:50,tol:0.5,suf:"%",u:"XᴮXᵇ × XᴮY: anak lelaki XᴮY atau XᵇY, setiap satu ½."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapa peratus anak perempuan pasangan itu dijangka buta warna?",b:0,tol:0.5,suf:"%",u:"Anak perempuan menerima Xᴮ daripada bapa."},
 {j:"pilih",t:"Berdasarkan Rajah 2, mengapakah buta warna lebih kerap pada lelaki?",p:["Lelaki ada satu X","Lelaki ada dua X","Lelaki tiada Y","Gen terletak pada Y"],b:0,u:"Satu alel resesif pada X sudah cukup untuk ekspresi."},
 {j:"nombor",t:"Dalam satu populasi, 5% lelaki dan 0.5% wanita buta warna. Berapa kali ganda peratusan lelaki berbanding wanita?",b:10,tol:0.1,suf:"kali",u:"5% ÷ 0.5% = 10 kali."},
 {j:"pilih",t:"Bapa buta warna (XᵇY) dan ibu normal bukan pembawa (XᴮXᴮ). Anak perempuan mereka:",p:["Semua pembawa","Semua buta warna","Separuh buta warna","Tiada pembawa"],b:0,u:"Setiap anak perempuan menerima Xᵇ daripada bapa."},
 {j:"pilih",t:"Hemofilia juga penyakit rangkai seks yang menyebabkan:",p:["Darah sukar membeku","Rabun dekat sejak lahir","Kulit menjadi putih","Rambut cepat gugur"],b:0,u:"Faktor pembekuan darah tidak dihasilkan."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 2, seorang lelaki buta warna bertanya mengapa bapanya normal. Penjelasan PALING tepat:",p:["X diwarisi dari ibu","Y diwarisi dari ibu","Bapa pembawa","Persekitaran"],b:0,u:"Anak lelaki menerima kromosom Y daripada bapa dan X daripada ibu."}},

{n:5, tempat:"Klinik Genetik", sk:"11.1 hingga 11.4 Menilai aplikasi pewarisan", lampiran:null,
 kadNama:"Talasemia", kadEm:"\u{1FA78}", kadFakta:"Talasemia ialah penyakit darah resesif autosom yang lazim di Malaysia.",
 bosKadNama:"Saringan", bosKadEm:"\u{1F52C}", bosKadFakta:"Saringan talasemia Tingkatan 4 membantu mengenal pasti pembawa sebelum berkahwin.",
 soalan:[
 {j:"pilih",t:"Dua pembawa talasemia (Tt) berkahwin. Kebarangkalian anak menghidap talasemia major (tt):",p:["25%","50%","75%","0%"],b:0,u:"Tt × Tt → ¼ tt."},
 {j:"pilih",t:"Penilaian PALING tepat tentang saringan talasemia untuk murid Tingkatan 4:",p:["Membantu keputusan","Tidak berguna","Menyebabkan penyakit","Mengubah gen"],b:0,u:"Pembawa boleh merancang keluarga dengan maklumat yang tepat."},
 {j:"pilih",t:"Ujian kumpulan darah dahulu digunakan dalam kes pertikaian bapa kerana ia boleh:",p:["Menolak kemungkinan","Membuktikan sepenuhnya","Mengubah genotip","Menentukan jantina"],b:0,u:"Ia boleh menolak, tetapi tidak membuktikan; ujian DNA lebih tepat."},
 {j:"pilih",t:"Petani memilih biji daripada pokok padi homozigot berhasil tinggi kerana:",p:["Ciri stabil","Harganya lebih mahal","Biji mudah rosak","Tiada gen dalam biji"],b:0,u:"Homozigot menghasilkan anak yang seragam."},
 {j:"pilih",t:"Penderma darah kumpulan O dipanggil penderma universal kerana sel darah merahnya:",p:["Tiada antigen A dan B","Ada antigen A dan B","Ada antibodi anti-A sahaja","Tiada hemoglobin langsung"],b:0,u:"Tidak dicam oleh antibodi penerima."},
 {j:"pilih",t:"Seorang ibu kumpulan darah AB tidak mungkin mendapat anak kumpulan darah:",p:["O","A","B","AB"],b:0,u:"Ibu sentiasa memberi Iᴬ atau Iᴮ."},
 {j:"pilih",t:"Kaunseling genetik PALING bermanfaat kepada:",p:["Pasangan berisiko","Kanak-kanak kecil","Haiwan peliharaan","Tumbuhan"],b:0,u:"Mereka dapat memahami risiko kepada anak."},
 {j:"banyak",t:"Pilih DUA penyakit pewarisan.",p:["Talasemia","Hemofilia","Denggi","Selesema"],b:[0,1],u:"Denggi dan selesema disebabkan virus."}],
 bos:{j:"pilih",t:"Pasangan yang kedua-duanya pembawa talasemia ingin berkahwin. Nasihat PALING bertanggungjawab:",p:["Kaunseling genetik","Abaikan risiko itu","Yakin anak pasti sihat","Batalkan perkahwinan segera"],b:0,u:"Kaunselor menerangkan risiko 25% dan pilihan seperti saringan pranatal."}},

{n:6, tempat:"Studio Gen", sk:"11.1 hingga 11.4 Mereka cipta berasaskan pewarisan", lampiran:null,
 kadNama:"Simulasi Gamet", kadEm:"\u{1FA99}", kadFakta:"Melambung dua syiling serentak boleh mensimulasikan kacukan Tt × Tt.",
 bosKadNama:"Reka Cipta Model", bosKadEm:"\u{1F4A1}", bosKadFakta:"Model manik berwarna membantu menunjukkan pemisahan alel semasa meiosis.",
 soalan:[
 {j:"pilih",t:"Untuk mensimulasikan kacukan Tt × Tt dengan syiling, kepala mewakili:",p:["Alel T","Genotip TT","Fenotip rendah","Kromosom Y"],b:0,u:"Sisi lain mewakili alel t."},
 {j:"pilih",t:"Untuk mendapatkan nisbah hampir 3 : 1 dalam simulasi, anda perlu:",p:["Banyak lambungan","Lambung sekali","Lambung dua kali","Pilih hasil"],b:0,u:"Saiz sampel besar mengurangkan sisihan rawak."},
 {j:"pilih",t:"Untuk menunjukkan kacukan dihibrid dengan manik, anda memerlukan:",p:["Dua pasang warna","Satu warna manik","Tiga warna berbeza","Manik tanpa warna"],b:0,u:"Setiap gen diwakili sepasang warna."},
 {j:"pilih",t:"Untuk membina salasilah keluarga tentang lesung pipit, data PALING diperlukan:",p:["Fenotip ahli","Tarikh lahir ahli","Alamat rumah ahli","Pekerjaan setiap ahli"],b:0,u:"Fenotip direkod untuk meneka genotip."},
 {j:"pilih",t:"Simbol bulatan dalam rajah salasilah mewakili:",p:["Perempuan","Lelaki","Pembawa lelaki","Kembar"],b:0,u:"Petak mewakili lelaki."},
 {j:"pilih",t:"Kaedah PALING jelas untuk memaparkan hasil kacukan dihibrid ialah:",p:["Petak Punnett","Carta pai","Puisi pendek","Peta minda"],b:0,u:"Petak Punnett 4 × 4 menunjukkan 16 gabungan gamet."},
 {j:"pilih",t:"Dalam projek salasilah, maklumat genetik keluarga mesti:",p:["Dirahsiakan","Dikongsi umum","Dijual","Diubah"],b:0,u:"Privasi dan persetujuan ahli keluarga penting."},
 {j:"banyak",t:"Pilih DUA ciri manusia yang dikawal satu gen dan sesuai untuk projek salasilah.",p:["Lesung pipit","Cuping telinga bebas","Tinggi badan","Berat badan"],b:[0,1],u:"Tinggi dan berat ialah variasi selanjar yang dipengaruhi banyak gen dan persekitaran."}],
 bos:{j:"buka",
  t:"Reka satu projek atau alat pembelajaran berkaitan pewarisan untuk sekolah atau komuniti (contoh: simulasi kacukan dengan syiling atau manik, permainan kad petak Punnett, salasilah keluarga bagi ciri lesung pipit atau cuping telinga, poster kesedaran saringan talasemia).",
  arahan:"Nyatakan tujuan, konsep pewarisan yang terlibat (alel dominan dan resesif, kacukan monohibrid atau dihibrid, kumpulan darah atau rangkai seks), bahan dan cara menjalankan, SATU contoh kacukan lengkap dengan gamet dan nisbah, cara menilai keberkesanan alat atau projek, SATU pertimbangan etika atau privasi, dan SATU manfaat kepada komuniti.",
  u:"Jawapan TP6 yang kukuh menunjukkan kacukan yang betul dengan simbol alel, gamet, petak Punnett dan nisbah, menggunakan sampel yang cukup besar dalam simulasi, menjaga privasi maklumat genetik, serta mengaitkan projek dengan manfaat seperti kesedaran saringan talasemia."}}
];

module.exports = {
  id:"b5b11", tingkatan:5, kod:"11.0 Pewarisan",
  tajuk:"Warisan Gen",
  subtajuk:"Biologi Ting. 5 · Bab 11 Pewarisan",
  spi:SPI.b5b11,
  ulasan:{
   1:"{n} dapat mengingat kembali istilah gen, alel, genotip dan fenotip. Langkah seterusnya ialah melengkapkan kacukan monohibrid.",
   2:"{n} dapat menjelaskan kacukan monohibrid dan pewarisan kumpulan darah. Perlu lebih latihan mengira nisbah daripada data.",
   3:"{n} boleh mengaplikasikan nisbah kacukan monohibrid dan dihibrid. Galakkan menganalisis pewarisan rangkai seks.",
   4:"{n} mampu menganalisis pewarisan rangkai seks dan salasilah. Seterusnya latih menilai aplikasi genetik dalam kesihatan.",
   5:"{n} dapat menilai aplikasi pewarisan seperti saringan talasemia. Sudah bersedia mereka alat pembelajaran genetik.",
   6:"{n} berjaya mereka projek pewarisan yang tepat dan beretika. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pewarisan. Cadangan: ulang hentian pertama dan lukis petak Punnett bagi kacukan Tt × Tt."
  },
  lampiran:{
   a1:{jenis:"aliran", mod:"turun",
     nod:["Induk: tinggi TT × rendah tt","F1: semua tinggi","?","F2: tinggi dan rendah"],
     kapsyen:"Rajah 1 · Kacukan monohibrid pokok kacang pis",
     alt:"Rajah aliran: induk tinggi TT kali rendah tt, F1 semua tinggi, langkah bertanda soal, F2 tinggi dan rendah"},
   j1:jadual(1, "Bentuk biji kacang pis F2 daripada kacukan F1",
     ["Fenotip", "Bilangan"],
     [["Bulat","300"],["Berkedut","100"]]),
   a2:{jenis:"aliran", mod:"turun",
     nod:["Ibu pembawa XᴮXᵇ × bapa normal XᴮY","Gamet ibu: Xᴮ, Xᵇ; gamet bapa: Xᴮ, Y","Anak perempuan: XᴮXᴮ, XᴮXᵇ","Anak lelaki: XᴮY, XᵇY"],
     kapsyen:"Rajah 2 · Pewarisan buta warna (Xᴮ normal, Xᵇ buta warna)",
     alt:"Rajah aliran: ibu pembawa X besar B X kecil b kali bapa normal X besar B Y; gamet ibu X besar B dan X kecil b, gamet bapa X besar B dan Y; anak perempuan X besar B X besar B dan X besar B X kecil b; anak lelaki X besar B Y dan X kecil b Y"}
  },
  aras:ARAS
};
