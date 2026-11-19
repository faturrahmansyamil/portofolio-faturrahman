# Planning Web Portofolio

Gaya visual mengikuti pedoman **FUSIONIFY UI (DESIGN.md)**, gaya "stiker": garis tepi 2px, bayangan pejal ke bawah, sudut bulat besar, biru #0D6CD7, titik biru muda di akhir judul.
**Maskot FUSIONIFY dan logo FUSIONIFY tidak dipakai.** Posisinya di hero diganti **foto kamu di dalam bingkai segel** + gelembung bicara tulisan tangan, dan logonya diganti **monogram inisial kamu**.

---

## 1. Tujuan

| Tujuan | Ukuran berhasil |
| --- | --- |
| Pengunjung paham siapa kamu dalam 5 detik | Hero: nama, peran, satu kalimat nilai, 2 tombol |
| Menunjukkan bukti kerja | Minimal 3 proyek dengan status jujur (live / beta / dikembangkan / rencana) |
| Gampang dihubungi | Email bisa disalin 1 klik, tautan sosmed, tombol CV |
| Ringan & rapi di semua layar | Tanpa framework, < 100 KB kode sendiri, lulus cek HP 360px |

## 2. Peta halaman (single page)

```
[Nav kapsul]  Logo inisial · Tentang · Keahlian · Proyek · Pengalaman · Kontak · 🌙
│
├─ 01 HERO        judul 2 baris (tinta → biru) + titik i, tombol, 3 angka, foto dalam segel + gelembung
│  ~ gelombang ~
├─ 02 TENTANG     cerita singkat + kartu fakta (lokasi, fokus, status kerja)
├─ 03 KEAHLIAN    grid kartu stiker berikon (3 kolom → 2 → 1)
├─ 04 PROYEK      filter kategori + kartu proyek (cover 1600:848, chip status, stack, tautan)
│  ~ gelombang ~
├─ 05 PENGALAMAN  linimasa (selesai = biru, sekarang = biru muda bercahaya)
│  ~ gelombang ~
├─ 06 KONTAK      seksi biru: email besar ber-magnet + tombol salin, sosmed
└─ FOOTER         malam (#071022), hak cipta, kembali ke atas
```

## 3. Struktur folder

```
portofolio/
├── index.html        kerangka halaman (jarang perlu diubah)
├── css/
│   ├── tokens.css    warna, huruf, ukuran, mode gelap (sumber semua warna)
│   └── style.css     komponen & layout
├── js/
│   ├── data.js       ← ISI DIRI KAMU DI SINI (nama, proyek, pengalaman, kontak)
│   └── main.js       render data + animasi (nav, reveal, kursor, magnet, dark mode)
├── assets/
│   ├── foto.jpg      foto profil kamu (persegi, min 800×800)
│   ├── cv.pdf        CV kamu
│   └── proyek/       screenshot proyek 1600×848
└── PLANNING.md       dokumen ini
```

## 4. Sistem desain yang dipakai

| Bagian | Nilai |
| --- | --- |
| Warna utama | `--blue` #0D6CD7, `--blue-deep` #0261CD, `--blue-light` #539DE9 |
| Tinta & latar | `--ink` #0B0F1A, `--paper` #F7FBFF, `--surface` #EAF4FF, `--night` #071022 |
| Judul | Afacad Flux 800, rapat (-0.03em, line-height 0.98) |
| Teks | Sansation 400/700, 17px, line-height 1.6 |
| Angka & kicker | Exo 2, `tabular-nums`, kapital |
| Tulisan tangan | Caveat (gelembung bicara, label kursor) |
| Stiker | border 2px tinta + `box-shadow: 0 6px 0` tinta, radius 22–28px |
| Chip status | go (hijau) · beta (kuning) · wip (oranye) · plan (biru) |
| Layar | ringkas < 600 · sedang 600–839 · lebar 840–1199 · besar ≥ 1200 |

## 5. Gerak & interaksi

- Nav transparan → kapsul blur setelah scroll 24px, sembunyi saat scroll turun.
- Judul naik per kata, elemen memudar naik, angka menghitung naik.
- Kursor titik biru muda + cincin segel (hanya mouse), label tulisan tangan.
- Email kontak ber-magnet, tombol salin dengan toast.
- Menu HP: lingkaran biru membesar dari tombol menu.
- Mode gelap ikut sistem, tombol bulan/matahari menyimpan pilihan.
- Semua animasi hanya `transform`/`opacity`, mati untuk `prefers-reduced-motion`.

## 6. Langkah kerja (dari awal sampai online)

| # | Langkah | Hasil |
| --- | --- | --- |
| 1 | Riset & baca DESIGN.md | daftar token, aturan, batasan (tanpa maskot) |
| 2 | Planning (dokumen ini) | peta halaman, folder, sistem desain |
| 3 | Token CSS + mode gelap | `css/tokens.css` |
| 4 | Komponen (btn, card, chip, kicker, segel, gelombang) | `css/style.css` |
| 5 | Kerangka HTML semantik + SEO dasar | `index.html` |
| 6 | Data & render | `js/data.js`, `js/main.js` |
| 7 | Animasi & aksesibilitas | reveal, kursor, magnet, reduced-motion, fokus keyboard |
| 8 | Uji desktop, tablet, HP 360px, mode gelap | ✔ |
| 9 | **Isi data asli kamu** | edit `js/data.js`, taruh `foto.jpg`, `cv.pdf`, screenshot |
| 10 | Buat repo GitHub & push | lihat bagian 7 |
| 11 | Deploy (GitHub Pages / Vercel / Netlify) | link portofolio online |
| 12 | Cek Lighthouse, pasang domain sendiri (opsional) | skor ≥ 90 |

## 7. Repo & deploy

```powershell
cd portofolio
git init
git add .
git commit -m "Portofolio pertama"
git branch -M main
git remote add origin https://github.com/USERNAME/portofolio.git
git push -u origin main
```

**GitHub Pages:** repo → Settings → Pages → Source: `Deploy from a branch` → `main` / `root` → Save. Link: `https://USERNAME.github.io/portofolio/`.
Kalau repo diberi nama `USERNAME.github.io`, link-nya jadi `https://USERNAME.github.io/`.

**Vercel/Netlify:** import repo dari GitHub, tanpa build command, folder output `/`.

## 8. Checklist sebelum dibagikan

- [ ] Nama, peran, email, sosmed di `js/data.js` sudah asli
- [ ] Angka di hero asli (jangan dikarang, sesuai prinsip "jujur itu bagian dari desain")
- [ ] Foto & screenshot proyek terpasang (ilustrasi diberi label "Ilustrasi")
- [ ] `<title>` dan `meta description` di `index.html` sudah diganti
- [ ] Dicek di HP sungguhan dan mode gelap
