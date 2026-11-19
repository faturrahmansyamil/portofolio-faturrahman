---
name: portofolio-faturrahman
description: Panduan mengubah, menambah konten, dan merawat web portofolio Faturrahman (HTML/CSS/JS statis, gaya stiker, GitHub Pages). Pakai saat diminta mengedit isi portofolio, menambah proyek/seksi, mengubah tampilan, atau deploy.
---

# Skill: merawat web portofolio ini

Panduan untuk AI agent (Claude, Copilot, dll.) dan kontributor manusia.

## Aturan utama

1. **Konten hanya di `js/data.js`.** Jangan menulis nama, proyek, atau pengalaman langsung di `index.html`.
2. **Ikuti `DESIGN.md`.** Warna hanya dari token di `css/tokens.css`; setiap warna baru wajib punya pasangan mode gelap.
3. **Ikuti `SECURITY.md`.** Data ke `innerHTML` wajib lewat `esc()`; sumber luar baru wajib masuk CSP.
4. **Jujur.** Jangan mengarang angka, klien, atau testimoni. Kalau data belum ada, tanyakan ke pemilik.
5. **Tanpa framework & tanpa build.** Tetap HTML/CSS/JS biasa supaya GitHub Pages langsung jalan.

## Tugas umum

### Menambah proyek
Tambahkan objek di `PORTFOLIO.projects` (`js/data.js`):
```js
{ title: "Nama Proyek", year: "2026", category: "Web App", status: "go",
  text: "Satu kalimat manfaatnya.", tags: ["React"],
  image: "assets/proyek/nama-proyek.webp", demo: "https://...", code: "https://github.com/..." }
```
- `status`: `go` | `beta` | `wip` | `plan`.
- `image` 1600×848 (WebP/JPG, < 300 KB). Kosong = ilustrasi otomatis berlabel "Ilustrasi".
- Kategori baru otomatis muncul di filter.

### Menambah seksi baru
1. Tambah `<section class="section" id="...">` di `index.html` dengan `.kicker` bernomor dan `.h2` berakhiran `<span class="dot">.</span>`.
2. Seling latar: seksi berurutan bergantian `--paper` dan `.surface`; pakai `.wave` di antara warna yang berbeda.
3. Render isinya di `main.js` dari data di `data.js`, pakai `esc()`.
4. Tambahkan tautan di `.nav-links` dan `.mm-links`.

### Mengubah skrip inline tema di `<head>`
CSP memakai hash skrip itu. Setelah diubah, hitung ulang dan ganti nilai `sha256-...` di meta CSP:
```bash
python -c "import re,hashlib,base64;h=open('index.html',encoding='utf-8').read();s=re.search(r'<script>(.*?)</script>',h,re.S).group(1);print('sha256-'+base64.b64encode(hashlib.sha256(s.encode()).digest()).decode())"
```

## Cek sebelum commit

- [ ] Jalankan `python -m http.server 5500`, buka http://localhost:5500
- [ ] Konsol browser tanpa error (termasuk pelanggaran CSP)
- [ ] Cek lebar 375px: tidak ada scroll horizontal
- [ ] Cek mode gelap (tombol bulan) dan menu HP
- [ ] Update `CHANGELOG.md`

## Deploy

Push ke `main` → GitHub Pages update otomatis dalam ±1 menit.
