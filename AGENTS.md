# AGENTS.md · Portofolio Faturrahman

Panduan untuk semua AI agent dan developer (Claude, ChatGPT/Codex, Cursor, Copilot, Gemini, dan lainnya) yang mengubah web portofolio ini.

Struktur dan aturannya diadaptasi dari [AGENTS.md FUSIONIFY UI](https://github.com/FUSIONIFY-ID/Fusionify_UI/blob/main/AGENTS.md), disesuaikan untuk web pribadi statis. **Kit FUSIONIFY UI tidak dipasang di sini**: kit itu dikunci ke domain FUSIONIFY, dan logo, maskot, serta badge-nya milik PT FUSIONIFY DIGITAL STORE. Web ini memakai gaya visual yang serupa, ditulis sendiri.

Baca **`DESIGN.md`** sebelum mengubah tampilan, **`SECURITY.md`** sebelum menambah skrip atau sumber luar, dan **`SKILL.md`** untuk resep tugas umum.

## Isi repo

| Path | Isi |
| --- | --- |
| `index.html` | Kerangka halaman, sprite ikon, meta CSP & SEO, skrip tema inline (ber-hash di CSP) |
| `css/tokens.css` | Warna, huruf, radius, jarak, kurva gerak. Dua blok mode gelap (`@media` dan `[data-theme="dark"]`) wajib identik |
| `css/style.css` | Semua komponen & layout. Tidak boleh berisi hex baru (kecuali `#fff` untuk teks di atas biru) |
| `js/data.js` | **Satu-satunya tempat konten**: profil, angka, tentang, keahlian, proyek, pengalaman, sosmed |
| `js/main.js` | Render data (`esc()` wajib), segel `sealPath()`, reveal, nav, menu HP, kursor, magnet, tema, salin + toast |
| `assets/` | `foto.jpg`, `cv.pdf`, `proyek/*.webp` (1600×848) |
| `.well-known/security.txt` | Kontak keamanan (RFC 9116), perbarui `Expires` tiap tahun |
| `.nojekyll` | Supaya GitHub Pages menyajikan folder berawalan titik |
| `DESIGN.md`, `SECURITY.md`, `SKILL.md`, `PLANNING.md`, `CHANGELOG.md` | Dokumen repo |
| `CLAUDE.md` | Penunjuk ke file ini untuk Claude |

## Aturan desain (wajib)

- Pakai token di `css/tokens.css`. Jangan menulis warna, font, atau radius baru di `style.css`. Warna baru ditambahkan ke `tokens.css` lengkap dengan pasangan mode gelap di **kedua** blok gelap.
- **Jangan memakai logo, maskot, badge, atau aset FUSIONIFY.** Identitas web ini: foto pemilik dalam bingkai segel dan monogram inisial.
- Gaya stiker: garis 2px `--edge`, bayangan pejal ke bawah `--edge-shadow`, sudut besar.
- Judul seksi diakhiri `<span class="dot">.</span>`, diawali `.kicker` bernomor.
- Hiasan SVG yang sengaja lebih besar dari wadahnya wajib `max-width: none`.
- Jangan memakai template UI generik (gradien ungu, kartu kaca, emoji hiasan).

## Kelas ukuran layar (wajib)

- **ringkas** < 600px, **sedang** 600–839px, **lebar** 840–1199px, **besar** 1200–1599px, **sangat besar** ≥ 1600px.
- `@media` hanya memakai batas itu: `(max-width: 599px)`, `(min-width: 600px)`, `(min-width: 840px)`, `(min-width: 1200px)`, `(min-width: 1600px)`. Pengecualian: nav penuh mulai 961px.
- Grid tanpa kartu yatim (`.grid3` sudah menanganinya).

## Ikon (wajib)

- Pakai sprite di `index.html` (`#i-<nama>`): kisi 24, garis 2px bulat, tanpa isi, titik `.d` biru muda bila bermakna.
- Ikon baru digambar sendiri dengan aturan yang sama. Jangan menyalin dari Material, Lucide, Font Awesome, atau memakai emoji.
- Tombol berisi ikon saja wajib `aria-label`; ikon di samping teks `aria-hidden="true"`.
- Logo sosmed hanya untuk akun yang benar-benar ada.

## Mode gelap (wajib dijaga)

- Bawaan ikut sistem; pilihan pengguna disimpan di `localStorage["theme"]` lewat `#themeBtn`.
- Semua warna komponen lewat token tema (`--card`, `--surface`, `--edge`, `--edge-shadow`, `--ink*`, `--text-blue`). Jangan menulis `#fff` atau `var(--ink)` untuk latar, garis, atau bayangan.
- Cek tampilan dan kontras di **kedua** tema sebelum selesai.

## Aturan isi (wajib)

- **Jujur.** Status proyek apa adanya (`go`, `beta`, `wip`, `plan`). Jangan menaikkan status.
- **Tidak ada angka, testimoni, logo klien, atau partner karangan.** Angka di hero wajib angka asli pemilik.
- Cover proyek screenshot asli; ilustrasi otomatis sudah berlabel "Ilustrasi".
- Jangan menaruh data pribadi sensitif (alamat rumah, NIK, nomor HP pribadi) di web publik.
- Bahasa Indonesia natural, santai, jelas. **Tanpa em dash (—)** di teks yang dibaca pengunjung.

## Keamanan (wajib)

- Data apa pun ke `innerHTML` wajib lewat `esc()`.
- Tautan `target="_blank"` wajib `rel="noopener noreferrer"`.
- Sumber luar baru (skrip, font, gambar, iframe) wajib ditambahkan ke CSP di `index.html`, hanya dari sumber tepercaya.
- Mengubah skrip inline tema → hitung ulang hash CSP (perintah di `SKILL.md`).
- Jangan pernah commit token, password, API key, atau `.env`.

## Performa (wajib)

- Hanya animasikan `transform` dan `opacity`. Tidak boleh animasi `box-shadow`, `width`, `top`, `filter`, `clip-path`, `padding`.
- Hover tombol/kartu stiker: hanya `transform` yang ditransisikan; bayangan pejal berubah instan.
- Jangan menganimasikan elemen di dalam SVG; putar/geser seluruh elemen `<svg>`.
- Glow pakai gradien statis, bukan `filter: blur`/`drop-shadow` pada elemen bergerak.
- Animasi CSS `infinite` harus berada di dalam elemen yang dijeda saat tidak terlihat (`[data-pause]`, diatur `main.js` lewat kelas `.idle`).
- Jangan membaca ukuran elemen (`getBoundingClientRect`) di handler scroll atau loop animasi.
- Gambar WebP dengan `width`/`height` dan `loading="lazy"` di bawah lipatan.
- Target PageSpeed Insights mobile: Aksesibilitas, Praktik Terbaik, SEO = 100.

## QA (wajib sebelum selesai)

Jalankan `python -m http.server 5500` lalu buka http://localhost:5500. Cek di:
**HP** 375×667, 390×844 · **HP lipat** 344×882 · **tablet** 768×1024, 1024×768 · **desktop** 1366×768, 1440×900, 1920×1080.

- Tidak ada scroll horizontal atau elemen keluar layar.
- Tidak ada teks bertabrakan atau terpotong.
- Kontras teks minimal 4.5:1, di kedua tema.
- Konsol tanpa error, termasuk pelanggaran CSP.
- Mode "kurangi gerakan": semua konten langsung tampil.
- Tanpa JavaScript: tidak ada error fatal di HTML.
- Menu HP, filter proyek, salin email, dan tombol tema berfungsi.

## Aturan hukum dan orisinalitas

- Semua kode ditulis sendiri. Jangan menyalin kode, aset, atau musik dari situs lain. Inspirasi umum boleh; salinan tidak.
- Aset FUSIONIFY (logo, maskot, badge, font yang di-host kit, kode kit) tidak dipakai di repo ini.
- Dependensi baru wajib berlisensi bebas dipakai komersial dan dicatat di `README.md`.

## Versi, rilis, dan Git

- Versi `X.Y.Z`: Z perbaikan kecil, Y seksi/fitur baru, X kalau struktur halaman berubah besar.
- Setiap perubahan dicatat di `CHANGELOG.md`.
- Push ke `main` → GitHub Pages update otomatis dalam ±1 menit.
- Commit atas nama akun GitHub **faturrahmansyamil**. Pesan commit singkat dan jelas, boleh bahasa Indonesia. Tulis `@kata` di dalam backtick supaya GitHub tidak membacanya sebagai mention.
