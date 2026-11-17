/* Pembantu untuk sumber bab Biologi. Fail berawalan _ diabaikan oleh bina.js.

   jadual(n, tajuk, kepala, baris, nota): jadual data sebagai <figure> berkapsyen
   "Jadual n". App hanya memaparkannya pada soalan yang menyebut "Jadual"
   (lampiranUntuk dalam index.html), dan bina.js gagal jika tiada soalan dalam
   hentian itu yang menyebutnya.

   SPI: Standard Prestasi KSSM Biologi Tingkatan 4 dan 5 (Bahagian Pembangunan
   Kurikulum; dskp/biologi-en.pdf, edisi Bahasa Inggeris). Setiap bidang
   pembelajaran memakai deskriptor TP1-TP6 yang sama strukturnya:
     1 Recall knowledge and scientific skills on X.
     2 Understand X, and able to comprehend the concept.
     3 Apply knowledge of X to explain the occurrences or phenomena of nature and perform simple tasks.
     4 Analyse information about X in daily life problem solving about natural phenomena.
     5 Evaluate to make judgement about X in daily life problem solving and decision making to carry out a task.
     6 Invent by applying the knowledge and skills about X ... creatively and innovatively ...
   Versi Bahasa Melayu di bawah ialah terjemahan. MESTI disemak dengan DSKP Biologi BM. */
const esc = t => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/* Sel jadual boleh membawa subskrip/superskrip ringkas: v_0 -> v<sub>0</sub>, m s^{-2} -> m s<sup>-2</sup>. */
function fHtml(t){
  return esc(t)
    .replace(/_\{([^}]+)\}/g, "<sub>$1</sub>").replace(/_(\d+)/g, "<sub>$1</sub>")
    .replace(/\^\{([^}]+)\}/g, "<sup>$1</sup>").replace(/\^([0-9]*[+\-−])/g, "<sup>$1</sup>");
}

function jadual(n, tajuk, kepala, baris, nota){
  const th = "<tr>" + kepala.map(k => "<th>" + fHtml(k) + "</th>").join("") + "</tr>";
  const tb = baris.map(r => "<tr>" + r.map(c => "<td>" + fHtml(c) + "</td>").join("") + "</tr>").join("");
  return '<figure class="figure jadual-biologi"><div class="tbl-wrap"><table class="tbl">' +
    "<thead>" + th + "</thead><tbody>" + tb + "</tbody></table></div>" +
    (nota ? '<p class="note">' + fHtml(nota) + "</p>" : "") +
    "<figcaption>Jadual " + n + " · " + esc(tajuk) + "</figcaption></figure>";
}

function tp(topik){
  /* Struktur deskriptor DSKP Biologi (setiap bab), diterjemah daripada edisi Bahasa Inggeris. */
  return [
    "Mengingat kembali pengetahuan dan kemahiran asas saintifik tentang " + topik + ".",
    "Memahami serta dapat menjelaskan " + topik + ".",
    "Mengaplikasikan pengetahuan dan kemahiran tentang " + topik + " untuk melaksanakan tugasan mudah.",
    "Menganalisis maklumat tentang " + topik + " dan mengaplikasikan kemahiran sains dalam konteks penyelesaian masalah.",
    "Menilai untuk membuat pertimbangan tentang " + topik + " dan mengaplikasikan kemahiran sains dalam konteks penyelesaian masalah dan membuat keputusan untuk melaksanakan sesuatu tugasan.",
    "Mereka cipta menggunakan pengetahuan dan kemahiran saintifik berkaitan " + topik + " dalam konteks penyelesaian masalah dan membuat keputusan atau melaksanakan tugasan dalam situasi baharu secara kreatif dan inovatif dengan mengambil kira nilai sosial/ekonomi/budaya masyarakat.",
  ];
}

const TAJUK = {
  b4b1: "Pengenalan kepada Biologi dan Peraturan Makmal",
  b4b2: "Biologi Sel dan Organisasi Sel",
  b4b3: "Pergerakan Bahan Merentasi Membran Plasma",
  b4b4: "Komposisi Kimia dalam Sel",
  b4b5: "Metabolisme dan Enzim",
  b4b6: "Pembahagian Sel",
  b4b7: "Respirasi Sel",
  b4b8: "Sistem Respirasi pada Manusia dan Haiwan",
  b4b9: "Nutrisi dan Sistem Pencernaan Manusia",
  b4b10: "Pengangkutan dalam Manusia dan Haiwan",
  b4b11: "Keimunan Manusia",
  b4b12: "Koordinasi dan Gerak Balas pada Manusia",
  b4b13: "Homeostasis dan Sistem Urinari Manusia",
  b4b14: "Sokongan dan Pergerakan pada Manusia dan Haiwan",
  b4b15: "Pembiakan Seks, Perkembangan dan Pertumbuhan pada Manusia dan Haiwan",
  b5b1: "Organisasi Tisu Tumbuhan dan Pertumbuhan",
  b5b2: "Struktur dan Fungsi Daun",
  b5b3: "Nutrisi dalam Tumbuhan",
  b5b4: "Pengangkutan dalam Tumbuhan",
  b5b5: "Gerak Balas dalam Tumbuhan",
  b5b6: "Pembiakan Seks dalam Tumbuhan Berbunga",
  b5b7: "Adaptasi Tumbuhan dalam Habitat Berbeza",
  b5b8: "Biodiversiti",
  b5b9: "Ekosistem",
  b5b10: "Kelestarian Alam Sekitar",
  b5b11: "Pewarisan",
  b5b12: "Variasi",
  b5b13: "Teknologi Genetik",
};

/* Topik dalam ayat deskriptor ditulis huruf kecil kecuali kata nama khas. */
const kecil = t => t.toLowerCase().replace(/manusia/g, "manusia");
const SPI = {};
Object.keys(TAJUK).forEach(k => { SPI[k] = tp(kecil(TAJUK[k])); });

module.exports = { jadual, SPI, TAJUK, fHtml };
