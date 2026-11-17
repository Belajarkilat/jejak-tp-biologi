/* Biologi KSSM Tingkatan 5, Bab 12 Variasi.
   SK 12.1 Jenis dan faktor variasi, 12.2 Variasi dalam manusia (selanjar dan tak selanjar),
   12.3 Mutasi (gen dan kromosom) (DSKP Biologi). Data disemak dengan node. */
const { jadual, SPI } = require("./_f");

const ARAS = [

{n:1, tempat:"Dewan Variasi", sk:"12.1 Jenis variasi · 12.2 Variasi dalam manusia", lampiran:null,
 kadNama:"Variasi Selanjar", kadEm:"\u{1F4CF}", kadFakta:"Variasi selanjar seperti tinggi badan menunjukkan julat nilai yang berterusan.",
 bosKadNama:"Variasi Tak Selanjar", bosKadEm:"\u{1F520}", bosKadFakta:"Variasi tak selanjar seperti kumpulan darah mempunyai kategori yang jelas.",
 soalan:[
 {j:"pilih",t:"Tinggi badan murid sekelas ialah contoh variasi:",p:["Selanjar","Tak selanjar","Mutasi","Tiada variasi"],b:0,u:"Nilainya berterusan dalam julat."},
 {j:"pilih",t:"Kumpulan darah ABO ialah contoh variasi:",p:["Tak selanjar","Selanjar","Persekitaran","Kuantitatif"],b:0,u:"Hanya empat kategori."},
 {j:"pilih",t:"Variasi selanjar biasanya dikawal oleh:",p:["Banyak gen","Satu gen","Tiada gen","Kromosom Y"],b:0,u:"Poligen dan persekitaran."},
 {j:"pilih",t:"Taburan variasi selanjar membentuk graf berbentuk:",p:["Loceng","Palang terpisah","Garis lurus","Bulatan"],b:0,u:"Taburan normal."},
 {j:"pilih",t:"Kebolehan menggulung lidah ialah variasi tak selanjar kerana:",p:["Dua kategori","Banyak nilai","Diukur cm","Ikut umur"],b:0,u:"Boleh atau tidak boleh."},
 {j:"pilih",t:"Perubahan kekal pada bahan genetik dikenali sebagai:",p:["Mutasi","Variasi selanjar","Adaptasi","Pembiakan"],b:0,u:"Mutasi boleh diwarisi jika berlaku pada sel gamet."},
 {j:"pilih",t:"Pindah silang semasa meiosis menyebabkan variasi kerana:",p:["Alel bertukar","Kromosom hilang","Sel mati","Gen berhenti"],b:0,u:"Gabungan alel baharu terbentuk."},
 {j:"banyak",t:"Pilih DUA contoh variasi tak selanjar.",p:["Kumpulan darah","Cuping telinga","Berat badan","Tinggi badan"],b:[0,1],u:"Berat dan tinggi ialah variasi selanjar."}],
 bos:{j:"pilih",t:"Kembar seiras yang dibesarkan berasingan mempunyai berat badan berbeza. Ini menunjukkan:",p:["Pengaruh persekitaran","Mutasi gen","Genotip berbeza","Kumpulan darah berbeza"],b:0,u:"Genotip sama; perbezaan datang daripada pemakanan dan gaya hidup."}},

{n:2, tempat:"Lorong Meiosis", sk:"12.1 Punca variasi", lampiran:"a1",
 kadNama:"Penyusunan Bebas", kadEm:"\u{1F500}", kadFakta:"Kromosom homolog tersusun secara rawak di satah khatulistiwa semasa meiosis I.",
 bosKadNama:"Persenyawaan Rawak", bosKadEm:"\u{1F3B2}", bosKadFakta:"Mana-mana sperma boleh bercantum dengan mana-mana ovum, menghasilkan gabungan unik.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa bertanda ? ialah:",p:["Pindah silang","Mitosis","Persenyawaan","Mutasi kromosom"],b:0,u:"Berlaku pada profasa I antara kromatid bukan beradik."},
 {j:"pilih",t:"Berdasarkan Rajah 1, penyusunan bebas berlaku pada peringkat:",p:["Metafasa I","Profasa II","Telofasa II","Interfasa"],b:0,u:"Pasangan homolog tersusun secara rawak."},
 {j:"pilih",t:"Berdasarkan Rajah 1, punca variasi yang berlaku SELEPAS meiosis ialah:",p:["Persenyawaan rawak","Pindah silang","Penyusunan bebas","Replikasi DNA"],b:0,u:"Gamet bercantum secara rawak."},
 {j:"pilih",t:"Pembiakan aseks menghasilkan anak dengan variasi rendah kerana:",p:["Hanya mitosis","Banyak meiosis","Ada persenyawaan","Pindah silang kerap"],b:0,u:"Anak ialah klon induk."},
 {j:"pilih",t:"Kiasma ialah titik di mana:",p:["Kromatid bertukar segmen","Sentromer membahagi","Nukleus hilang","Gentian gelendong putus"],b:0,u:"Tempat pindah silang berlaku."},
 {j:"pilih",t:"Manusia mempunyai 23 pasang kromosom. Bilangan gabungan penyusunan bebas dalam gamet ialah:",p:["2²³","23","46","2 × 23"],b:0,u:"Lebih 8 juta gabungan tanpa mengambil kira pindah silang."},
 {j:"pilih",t:"Kepentingan variasi kepada spesies ialah:",p:["Meningkatkan kemandirian","Mengurangkan pembiakan","Menghalang evolusi","Menyeragamkan individu"],b:0,u:"Sesetengah individu mungkin tahan perubahan persekitaran."},
 {j:"banyak",t:"Pilih DUA punca variasi genetik dalam pembiakan seks.",p:["Pindah silang","Persenyawaan rawak","Pemakanan","Cahaya matahari"],b:[0,1],u:"Pemakanan dan cahaya ialah faktor persekitaran."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, jika pindah silang tidak berlaku, adakah gamet masih berbeza?",p:["Ya, penyusunan bebas","Tidak, semua sama","Tidak, tiada meiosis","Ya, mitosis"],b:0,u:"Penyusunan bebas dan persenyawaan rawak masih menghasilkan variasi."}},

{n:3, tempat:"Makmal Ukur", sk:"12.2 Mengaplikasikan data variasi manusia", lampiran:"j1",
 kadNama:"Histogram", kadEm:"\u{1F4CA}", kadFakta:"Variasi selanjar dibentangkan sebagai histogram; variasi tak selanjar sebagai carta palang.",
 bosKadNama:"Mod", bosKadEm:"\u{1F3AF}", bosKadFakta:"Mod ialah kelas yang mempunyai kekerapan tertinggi.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah jumlah murid?",b:40,tol:0.5,suf:"murid",u:"10 + 16 + 10 + 4 = 40."},
 {j:"pilih",t:"Berdasarkan Jadual 1, kelas mod ialah:",p:["150-159 cm","140-149 cm","160-169 cm","170-179 cm"],b:0,u:"Kekerapan tertinggi, 16 murid."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapa peratus murid tingginya 160 cm atau lebih?",b:35,tol:0.5,suf:"%",u:"(10 + 4) ÷ 40 × 100 = 35%."},
 {j:"pilih",t:"Berdasarkan Jadual 1, data ini paling sesuai dibentangkan sebagai:",p:["Histogram","Carta pai","Jadual nama","Peta"],b:0,u:"Variasi selanjar dalam selang kelas."},
 {j:"pilih",t:"Berdasarkan Jadual 1, bentuk taburan data ini ialah:",p:["Hampir normal","Seragam","Menurun","Dua puncak"],b:0,u:"Kekerapan tinggi di tengah, rendah di hujung."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah bilangan murid di bawah 150 cm?",b:10,tol:0.5,suf:"murid",u:"Kelas 140-149 cm: 10 murid."},
 {j:"pilih",t:"Untuk menjadikan data lebih tepat, pengukuran tinggi dibuat dengan murid:",p:["Tanpa kasut","Memakai kasut","Duduk","Melompat"],b:0,u:"Pemboleh ubah yang tidak berkaitan dikawal."},
 {j:"nombor",t:"Berdasarkan Jadual 1, berapa peratus murid berada dalam kelas mod?",b:40,tol:0.5,suf:"%",u:"16 ÷ 40 × 100 = 40%."}],
 bos:{j:"pilih",t:"Berdasarkan Jadual 1, seorang murid berkata semua murid yang tinggi mempunyai ibu bapa yang tinggi. Kesimpulan PALING tepat:",p:["Persekitaran turut mempengaruhi","Hanya gen penentu","Data membuktikannya","Tinggi tidak diwarisi"],b:0,u:"Tinggi dipengaruhi banyak gen serta pemakanan dan kesihatan."}},

{n:4, tempat:"Bilik Mutasi", sk:"12.3 Menganalisis mutasi dan kesannya", lampiran:"g1",
 kadNama:"Mutagen", kadEm:"\u{2622}\u{FE0F}", kadFakta:"Mutagen seperti sinaran UV, sinar-X dan bahan kimia tertentu meningkatkan kadar mutasi.",
 bosKadNama:"Sindrom Down", bosKadEm:"\u{1F9EC}", bosKadFakta:"Sindrom Down disebabkan kromosom 21 tambahan (trisomi 21).",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah kadar sindrom Down per 1000 kelahiran bagi ibu berumur 40 tahun?",b:10,tol:0.2,suf:"per 1000",u:"Bacaan graf: 10 per 1000."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapa kali ganda kadar pada umur 45 berbanding umur 40?",b:3,tol:0.05,suf:"kali",u:"30 ÷ 10 = 3 kali."},
 {j:"pilih",t:"Berdasarkan Rajah 2, hubungan umur ibu dengan kadar sindrom Down:",p:["Meningkat dengan umur","Menurun dengan umur","Tiada hubungan","Malar"],b:0,u:"Risiko meningkat dengan ketara selepas 35 tahun."},
 {j:"pilih",t:"Sindrom Down ialah contoh mutasi:",p:["Kromosom","Gen titik","Persekitaran","Somatik kulit"],b:0,u:"Bilangan kromosom berubah (47)."},
 {j:"pilih",t:"Berdasarkan Rajah 2, sindrom Down biasanya berpunca daripada:",p:["Tak disjungsi","Pindah silang normal","Persenyawaan ganda","Mitosis biasa"],b:0,u:"Kromosom 21 gagal berpisah semasa meiosis."},
 {j:"pilih",t:"Anemia sel sabit disebabkan oleh mutasi:",p:["Gen","Kromosom","Bilangan kromosom","Persekitaran"],b:0,u:"Satu bes DNA berubah dalam gen hemoglobin."},
 {j:"nombor",t:"Berdasarkan Rajah 2, berapakah pertambahan kadar dari umur 40 hingga 45?",b:20,tol:0.5,suf:"per 1000",u:"30 − 10 = 20 per 1000."},
 {j:"pilih",t:"Mutasi pada sel kulit akibat UV tidak diwarisi kerana ia:",p:["Mutasi somatik","Mutasi gamet","Tidak berlaku","Dominan"],b:0,u:"Hanya mutasi dalam sel pembiakan diwarisi."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 2, nasihat PALING tepat kepada wanita hamil berumur 42 tahun:",p:["Saringan pranatal","Tiada risiko","Elak doktor","Risiko sama remaja"],b:0,u:"Risiko lebih tinggi; saringan membantu persediaan."}},

{n:5, tempat:"Dewan Etika", sk:"12.1 hingga 12.3 Menilai kepentingan variasi dan mutasi", lampiran:null,
 kadNama:"Pemilihan Semula Jadi", kadEm:"\u{1F98B}", kadFakta:"Variasi membolehkan individu yang paling sesuai terus hidup dan membiak.",
 bosKadNama:"Pembiakbakaan Mutasi", bosKadEm:"\u{1F33E}", bosKadFakta:"Sinaran digunakan secara terkawal untuk menghasilkan varieti tanaman baharu.",
 soalan:[
 {j:"pilih",t:"Bakteria rintang antibiotik muncul kerana:",p:["Variasi dan pemilihan","Antibiotik mencipta gen","Bakteria belajar","Ubat terlalu murah"],b:0,u:"Bakteria bermutasi rintang terus hidup dan membiak."},
 {j:"pilih",t:"Penilaian tentang pendedahan cahaya matahari tanpa pelindung pada tengah hari:",p:["Meningkatkan mutasi kulit","Selamat sepenuhnya","Mencegah kanser","Menambah vitamin sahaja"],b:0,u:"UV ialah mutagen."},
 {j:"pilih",t:"Klon pisang di ladang berisiko tinggi kerana:",p:["Variasi rendah","Variasi tinggi","Buah terlalu manis","Tumbuh perlahan"],b:0,u:"Satu penyakit boleh memusnahkan semua pokok."},
 {j:"pilih",t:"Pekerja radiologi memakai apron plumbum untuk:",p:["Kurangkan mutasi","Menambah sinaran","Kelihatan kemas","Menyejukkan badan"],b:0,u:"Sinar-X ialah mutagen."},
 {j:"pilih",t:"Penilaian PALING tepat tentang mutasi:",p:["Ada yang berguna","Kebanyakannya berguna","Mutasi mudah dielak","Tidak berlaku pada manusia"],b:0,u:"Kebanyakan neutral atau berbahaya; sesetengahnya memberi kelebihan."},
 {j:"pilih",t:"Kepelbagaian genetik dalam populasi harimau Malaya penting kerana:",p:["Kurang risiko pupus","Lebih banyak makanan","Hutan bertambah","Harimau lebih kecil"],b:0,u:"Populasi kecil mudah mengalami pembiakan dalam."},
 {j:"pilih",t:"Asap rokok mengandungi bahan karsinogen yang:",p:["Menyebabkan mutasi","Menguatkan DNA","Membaiki sel","Tiada kesan"],b:0,u:"Mutasi boleh menyebabkan kanser paru-paru."},
 {j:"banyak",t:"Pilih DUA mutagen.",p:["Sinar-X","Sinaran UV","Air suling","Oksigen"],b:[0,1],u:"Bahan kimia seperti benzena juga mutagen."}],
 bos:{j:"pilih",t:"Sebuah institut menggunakan sinaran gama untuk menghasilkan padi tahan banjir. Penilaian PALING tepat:",p:["Bermanfaat jika diuji","Pasti berbahaya","Melanggar hukum alam","Tiada manfaat"],b:0,u:"Pembiakbakaan mutasi sah dan berguna jika varieti diuji keselamatan dan hasilnya."}},

{n:6, tempat:"Studio Variasi", sk:"12.1 hingga 12.3 Mereka cipta berasaskan variasi", lampiran:null,
 kadNama:"Kajian Kelas", kadEm:"\u{1F4CB}", kadFakta:"Data variasi kelas boleh dikumpul dengan pembaris, pita ukur dan borang soal selidik.",
 bosKadNama:"Kempen UV", bosKadEm:"\u{1F4A1}", bosKadFakta:"Kempen pelindung matahari mengurangkan risiko mutasi kulit dalam komuniti.",
 soalan:[
 {j:"pilih",t:"Anda mengkaji variasi panjang tapak tangan murid. Alat PALING sesuai:",p:["Pembaris","Termometer","Neraca","Jam randik"],b:0,u:"Panjang diukur dalam cm."},
 {j:"pilih",t:"Saiz sampel yang PALING sesuai untuk kajian variasi tinggi:",p:["Sekurang-kurangnya 30","Seorang","Dua orang","Tiga orang"],b:0,u:"Sampel besar menghasilkan taburan yang jelas."},
 {j:"pilih",t:"Data kumpulan darah kelas paling sesuai dibentangkan sebagai:",p:["Carta palang","Histogram","Graf garis","Graf serakan"],b:0,u:"Variasi tak selanjar."},
 {j:"pilih",t:"Untuk kempen pelindung matahari di sekolah, mesej PALING berasaskan sains:",p:["UV ialah mutagen","Matahari panas","Topi bergaya","Kulit gelap cantik"],b:0,u:"Menerangkan sebab biologi."},
 {j:"pilih",t:"Untuk menunjukkan pindah silang dengan model, bahan PALING sesuai:",p:["Plastisin dua warna","Batu","Air","Kertas kosong"],b:0,u:"Warna berbeza menunjukkan pertukaran segmen."},
 {j:"pilih",t:"Dalam soal selidik ciri keluarga, anda perlu:",p:["Dapat persetujuan","Ambil gambar rahsia","Kongsi nama umum","Paksa jawab"],b:0,u:"Etika penyelidikan."},
 {j:"pilih",t:"Untuk mengurangkan ralat mengukur tinggi, anda:",p:["Ukur tiga kali","Ukur sekali","Teka","Guna tangan"],b:0,u:"Ambil purata bacaan."},
 {j:"banyak",t:"Pilih DUA ciri yang sesuai untuk kajian variasi selanjar.",p:["Panjang jengkal","Jisim badan","Kumpulan darah","Lesung pipit"],b:[0,1],u:"Kumpulan darah dan lesung pipit tak selanjar."}],
 bos:{j:"buka",
  t:"Reka satu projek atau kajian berkaitan variasi untuk sekolah atau komuniti (contoh: kajian variasi tinggi atau jengkal murid sekolah, model plastisin pindah silang, kempen kesedaran sinaran UV sebagai mutagen, kajian variasi daun pokok yang sama di tempat teduh dan terang).",
  arahan:"Nyatakan tujuan, konsep variasi yang terlibat (selanjar atau tak selanjar, faktor genetik dan persekitaran, punca variasi atau mutasi), kaedah mengumpul data, saiz sampel, cara membentangkan data (histogram atau carta palang) beserta sebab, SATU contoh pengiraan seperti mod atau peratus, SATU pertimbangan etika, dan SATU manfaat kepada komuniti.",
  u:"Jawapan TP6 yang kukuh membezakan jenis variasi dengan betul, memilih persembahan data yang sesuai, menggunakan sampel yang cukup besar dan mengurangkan ralat, menunjukkan pengiraan, menjaga etika dan privasi peserta, serta menghubungkan dapatan dengan manfaat kesihatan."}}
];

module.exports = {
  id:"b5b12", tingkatan:5, kod:"12.0 Variasi",
  tajuk:"Unik Setiap Satu",
  subtajuk:"Biologi Ting. 5 · Bab 12 Variasi",
  spi:SPI.b5b12,
  ulasan:{
   1:"{n} dapat mengingat kembali jenis variasi dan contohnya. Langkah seterusnya ialah menerangkan punca variasi.",
   2:"{n} dapat menjelaskan punca variasi semasa meiosis dan persenyawaan. Perlu lebih latihan mentafsir data variasi.",
   3:"{n} boleh mengaplikasikan data variasi seperti mod dan peratus. Galakkan menganalisis data mutasi.",
   4:"{n} mampu menganalisis mutasi dan kesannya. Seterusnya latih menilai kepentingan variasi dan mutasi.",
   5:"{n} dapat menilai kepentingan variasi dan risiko mutagen. Sudah bersedia mereka kajian variasi.",
   6:"{n} berjaya mereka kajian variasi yang sah dan beretika. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Variasi. Cadangan: ulang hentian pertama dan ukur jengkal ahli keluarga."
  },
  lampiran:{
   a1:{jenis:"aliran", mod:"turun",
     nod:["Profasa I: ?","Metafasa I: penyusunan bebas","Gamet berbeza terbentuk","Persenyawaan rawak"],
     kapsyen:"Rajah 1 · Punca variasi dalam pembiakan seks",
     alt:"Rajah aliran: profasa satu peristiwa bertanda soal, metafasa satu penyusunan bebas, gamet berbeza terbentuk, persenyawaan rawak"},
   j1:jadual(1, "Taburan tinggi 40 murid Tingkatan 5",
     ["Tinggi (cm)", "140-149", "150-159", "160-169", "170-179"],
     [["Bilangan murid","10","16","10","4"]]),
   g1:{jenis:"graf", x:[25,30,35,40,45], xLabel:"Umur ibu (tahun)", titik:true, yMin:0, yMaks:30, grid:6,
     siri:[{label:"Sindrom Down per 1000 kelahiran", y:[1,1,3,10,30], warna:"merah"}],
     kapsyen:"Rajah 2 · Kadar sindrom Down mengikut umur ibu (nilai dibundarkan)",
     alt:"Graf: kira-kira 1 per 1000 pada umur 25 dan 30, 3 pada umur 35, 10 pada umur 40 dan 30 pada umur 45"}
  },
  aras:ARAS
};
