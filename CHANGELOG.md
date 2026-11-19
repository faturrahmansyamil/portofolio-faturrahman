# Changelog

Format mengikuti [Keep a Changelog](https://keepachangelog.com/id-ID/1.1.0/).

## [Unreleased]

### Ditambahkan
- `AGENTS.md` dan `CLAUDE.md`: aturan untuk AI agent, diadaptasi dari FUSIONIFY UI untuk web pribadi.
- Animasi tanpa henti dijeda saat seksinya di luar layar (`data-pause` + `.idle`).
- Dokumen repo: `README.md`, `DESIGN.md`, `SECURITY.md`, `SKILL.md`, `CHANGELOG.md`, `LICENSE`.
- Content-Security-Policy dan referrer policy di `index.html`.
- `/.well-known/security.txt` untuk kontak keamanan.
- `rel="noopener noreferrer"` di semua tautan luar.
- `.gitignore`.

### Diubah
- Data profil asli: nama Faturrahman Syamil, panggilan Fatur, inisial FRS, status "Menerima jasa bikin website", judul hero "Hello, Saya Fatur. / Kenalan Yuk...".
- Peran yang kosong otomatis disembunyikan dari label hero.
- Foto profil `assets/foto.webp` (800×800, 59 KB, tanpa metadata EXIF) menggantikan inisial di hero.
- Segel hero diputar sebagai elemen `<svg>` utuh, bayangannya jadi lapisan terpisah (tanpa `drop-shadow` pada elemen bergerak).
- Titik online dan titik linimasa beranimasi lewat `transform`/`opacity`, bukan `box-shadow`.
- Transisi hover hanya `transform`.

## [0.1.0] - 2026-11-19

### Ditambahkan
- Versi pertama portofolio: Hero, Tentang, Keahlian, Proyek (filter + chip status), Pengalaman, Kontak.
- Mode gelap, animasi scroll, kursor segel, menu HP.
- `PLANNING.md` berisi rencana dan langkah pembuatan.
