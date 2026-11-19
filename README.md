# Portofolio Faturrahman

Web portofolio pribadi bergaya **stiker**: garis tepi 2px, bayangan pejal, biru `#0D6CD7`, dan titik biru muda di akhir judul.
Dibangun tanpa framework, cukup HTML, CSS, dan JavaScript.

**Live:** https://faturrahmansyamil.github.io/portofolio-faturrahman/

## Fitur

- Hero dengan foto dalam bingkai segel interaktif (dicolek → gelembung bicara berganti)
- Seksi Tentang, Keahlian, Proyek (filter kategori + chip status), Pengalaman (linimasa), Kontak
- Mode gelap mengikuti sistem dan bisa diganti manual
- Animasi muncul saat scroll, kursor segel, efek magnet, menu HP lingkaran
- Ramah aksesibilitas: fokus keyboard, `prefers-reduced-motion`, tautan "Lewati ke konten"
- Responsif dari HP 320px sampai monitor lebar, tanpa scroll horizontal

## Struktur

```
├── index.html            kerangka halaman + Content-Security-Policy
├── css/tokens.css        warna, huruf, ukuran, mode gelap
├── css/style.css         komponen & layout
├── js/data.js            ← SEMUA ISI KONTEN DI SINI
├── js/main.js            render data + animasi
├── assets/               foto, CV, screenshot proyek
├── .well-known/security.txt
├── DESIGN.md             sistem desain
├── SECURITY.md           kebijakan keamanan
├── SKILL.md              panduan untuk AI agent / kontributor
├── PLANNING.md           rencana & langkah pembuatan
└── CHANGELOG.md          riwayat perubahan
```

## Menjalankan di komputer

Tidak perlu install apa pun. Jalankan server lokal sederhana dari folder ini:

```powershell
python -m http.server 5500
```

Lalu buka http://localhost:5500

## Mengubah isi

1. Edit `js/data.js` (nama, proyek, pengalaman, sosmed).
2. Taruh `assets/foto.jpg` (persegi) dan `assets/cv.pdf`, lalu isi `photo` dan `cv` di `data.js`.
3. Screenshot proyek ukuran 1600×848 di `assets/proyek/`.
4. Commit & push, GitHub Pages update otomatis dalam ±1 menit.

## Deploy

GitHub Pages: **Settings → Pages → Deploy from a branch → `main` / root**.

## Lisensi

Kode: [MIT](LICENSE). Konten pribadi (teks, foto, CV, screenshot proyek) © Faturrahman, tidak termasuk lisensi MIT.
