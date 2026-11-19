/* =========================================================
   DATA PORTOFOLIO — cukup edit file ini.
   Semua teks bertanda "GANTI" adalah contoh. Ganti dengan data asli kamu.
   Prinsip: jangan mengarang angka atau testimoni.
   ========================================================= */
window.PORTFOLIO = {
  // ---------- Profil ----------
  name: "Nama Kamu",              // GANTI: nama lengkap
  shortName: "Nama",              // GANTI: nama panggilan (logo di nav)
  initials: "NK",                 // GANTI: 2 huruf inisial
  role: "Web Developer",          // GANTI
  availability: "Terbuka untuk proyek",
  heroLine1: "Halo, saya Nama.",  // GANTI: baris 1 judul hero (warna tinta)
  heroLine2: "Saya bikin web yang hidup", // baris 2 (warna biru, titik otomatis)
  tagline: "Saya membangun website yang cepat, rapi, dan enak dipakai, dari desain sampai online.",
  photo: "",                      // GANTI: "assets/foto.jpg" (persegi). Kosong = tampil inisial
  cv: "",                         // GANTI: "assets/cv.pdf"
  email: "emailkamu@domain.com",  // GANTI

  // Kalimat gelembung saat foto dicolek (bergantian)
  bubbles: [
    "Halo! Senang kamu mampir.",
    "Eh, dicolek :)",
    "Mau lihat proyek saya?",
    "Yuk ngobrol, email ada di bawah!",
    "Oke oke, cukup colek-coleknya"
  ],

  // Angka di hero. GANTI dengan angka ASLI kamu.
  stats: [
    { value: 3,  suffix: "+", label: "Tahun belajar" },
    { value: 12, suffix: "",  label: "Proyek selesai" },
    { value: 8,  suffix: "",  label: "Teknologi" }
  ],

  // ---------- Tentang ----------
  about: [
    "Saya web developer yang suka mengubah ide jadi tampilan yang bisa dipakai orang. GANTI paragraf ini dengan cerita singkatmu.",
    "Fokus saya di frontend: HTML, CSS, JavaScript, dan framework modern. Saya peduli pada detail kecil, seperti animasi yang halus, tampilan yang tetap rapi di HP, dan web yang cepat dibuka.",
    "Di luar ngoding, saya senang belajar desain dan membuat konten tentang teknologi."
  ],
  facts: [
    { icon: "pin",    label: "Lokasi",  value: "Indonesia" },          // GANTI
    { icon: "target", label: "Fokus",   value: "Frontend & UI" },
    { icon: "fuse",   label: "Status",  value: "Mahasiswa / Freelance" } // GANTI
  ],

  // ---------- Keahlian ----------
  skills: [
    { icon: "layout", title: "Frontend",     text: "Halaman yang responsif, cepat, dan mudah diakses di semua layar.", tags: ["HTML", "CSS", "JavaScript"] },
    { icon: "pen",    title: "UI Design",    text: "Merancang tampilan yang konsisten pakai sistem desain dan token.", tags: ["Figma", "Design System"] },
    { icon: "code",   title: "Framework",    text: "Membangun aplikasi web interaktif dengan komponen yang rapi.", tags: ["React", "Tailwind"] },
    { icon: "server", title: "Backend dasar", text: "API sederhana, database, dan autentikasi untuk melengkapi frontend.", tags: ["Node.js", "MySQL"] },
    { icon: "phone",  title: "Mobile-first", text: "Mulai dari layar HP, lalu diperluas ke tablet dan desktop.", tags: ["Responsive", "PWA"] },
    { icon: "rocket", title: "Deploy",       text: "Dari repo sampai online dengan domain sendiri.", tags: ["Git", "Vercel", "GitHub Pages"] }
  ],
  stack: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind", "Node.js", "Git", "Figma"], // GANTI

  // ---------- Proyek ----------
  // status: "go" (live) | "beta" | "wip" (dikembangkan) | "plan" (direncanakan)
  // image: screenshot asli 1600x848. Kosong = ilustrasi otomatis berlabel "Ilustrasi".
  projects: [
    { title: "Toko Online UMKM", year: "2026", category: "Web App", status: "go",
      text: "Katalog produk dengan keranjang dan checkout via WhatsApp.", tags: ["React", "Tailwind"],
      image: "", demo: "#", code: "#" },
    { title: "Dashboard Absensi", year: "2026", category: "Web App", status: "beta",
      text: "Dashboard admin untuk rekap absensi dengan grafik mingguan.", tags: ["JavaScript", "Chart.js"],
      image: "", demo: "#", code: "#" },
    { title: "Landing Page Event", year: "2025", category: "Landing Page", status: "go",
      text: "Halaman acara dengan hitung mundur dan form pendaftaran.", tags: ["HTML", "CSS"],
      image: "", demo: "#", code: "#" },
    { title: "Redesign Web Sekolah", year: "2025", category: "UI Design", status: "go",
      text: "Mendesain ulang web sekolah agar lebih mudah dibaca di HP.", tags: ["Figma"],
      image: "", demo: "#", code: "" },
    { title: "Aplikasi Catatan", year: "2026", category: "Web App", status: "wip",
      text: "Catatan offline-first yang bisa dipasang sebagai PWA.", tags: ["PWA", "IndexedDB"],
      image: "", demo: "", code: "#" },
    { title: "Bot Pengingat Tugas", year: "2027", category: "Eksperimen", status: "plan",
      text: "Bot yang mengingatkan deadline tugas lewat chat.", tags: ["Node.js"],
      image: "", demo: "", code: "" }
  ],

  // ---------- Pengalaman ----------
  // now: true = sedang dijalani (titik bercahaya)
  experience: [
    { when: "2026 · Sekarang", title: "Freelance Web Developer", org: "Mandiri", now: true,
      text: "Membuat landing page dan web toko untuk UMKM." },
    { when: "2025", title: "Magang Frontend", org: "Nama Perusahaan", now: false,
      text: "Membangun komponen UI dan memperbaiki tampilan mobile." },
    { when: "2024", title: "Mulai belajar web", org: "Kursus / Kampus", now: false,
      text: "Belajar HTML, CSS, JavaScript, dan Git dari nol." }
  ],

  // ---------- Sosmed ---------- (kosongkan url untuk menyembunyikan)
  socials: [
    { icon: "github",    label: "GitHub",    url: "https://github.com/" },
    { icon: "linkedin",  label: "LinkedIn",  url: "https://linkedin.com/" },
    { icon: "instagram", label: "Instagram", url: "https://instagram.com/" }
  ]
};
