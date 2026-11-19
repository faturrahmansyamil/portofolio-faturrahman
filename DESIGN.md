# DESIGN.md · Portofolio Faturrahman

Pedoman visual web ini. Gaya dasarnya terinspirasi dari [FUSIONIFY UI](https://github.com/FUSIONIFY-ID/Fusionify_UI/blob/main/DESIGN.md) (gaya "stiker"), **tanpa memakai maskot maupun logo FUSIONIFY**. Identitas web ini adalah **foto pemilik dalam bingkai segel** dan **monogram inisial**.

Kalau ada perubahan tampilan, perbarui file ini di commit yang sama.

## Prinsip

1. **Pemiliknya yang jadi pemandu.** Foto dalam segel di hero bereaksi saat dicolek (bergoyang, gelembung bicara berganti).
2. **Jujur itu bagian dari desain.** Status proyek selalu terlihat sebagai chip. Tidak ada angka, klien, atau testimoni karangan. Ilustrasi diberi label "Ilustrasi".
3. **Hidup tapi ringan.** Hanya `transform` dan `opacity` yang dianimasikan. Semua animasi mati untuk `prefers-reduced-motion`.
4. **Tegas seperti stiker.** Garis tepi 2px (`--edge`), bayangan pejal ke bawah (`--edge-shadow`), sudut bulat besar.

## Warna (`css/tokens.css`)

| Token | Terang | Gelap | Pakai untuk |
| --- | --- | --- | --- |
| `--blue` | #0D6CD7 | #0D6CD7 | warna utama, tombol, seksi kontak |
| `--blue-deep` | #0261CD | — | teks tautan, hover |
| `--blue-light` | #539DE9 | #539DE9 | titik di akhir judul, kursor, aksen |
| `--ink` | #0B0F1A | #EAF3FF | teks utama |
| `--ink-2` / `--ink-3` | #3A4458 / #566175 | #C3D3EA / #93A8C7 | teks sekunder / keterangan |
| `--paper` | #F7FBFF | #071022 | latar halaman |
| `--surface` | #EAF4FF | #0C1A33 | latar seksi selang-seling |
| `--card` | #FFFFFF | #10203F | kartu |
| `--line` | #D3E4F7 | #1E3560 | garis tipis, tag |
| `--edge` / `--edge-shadow` | tinta / tinta | #2E5592 / #02060F | garis & bayangan stiker |
| `--night` | #071022 | #071022 | footer |
| `--online` | #2FBF63 | #2FBF63 | titik status online |

Chip status: `go` hijau (Live), `beta` kuning, `wip` oranye (Dikembangkan), `plan` biru (Direncanakan).

**Aturan:** jangan menulis hex baru di `style.css`. Warna baru ditambahkan dulu ke `tokens.css` lengkap dengan pasangan mode gelapnya.

## Huruf

| Huruf | Berat | Pakai untuk |
| --- | --- | --- |
| Afacad Flux | 800 | judul, `letter-spacing: -0.03em`, `line-height: 0.98` |
| Sansation | 400 / 700 | teks & UI, 17px, `line-height: 1.6` |
| Exo 2 | 500 / 700 | angka (`tabular-nums`), kicker, label kecil kapital |
| Caveat | 600 | gelembung bicara, label kursor, toast |

Semua dari Google Fonts (lisensi SIL OFL), `display=swap`.

## Elemen khas

- **Segel**: lingkaran dengan 12 lekukan, dibuat oleh `sealPath()` di `main.js`. Dipakai untuk bingkai foto, logo monogram, cincin kursor, dan hiasan seksi kontak.
- **Titik**: `<span class="dot">.</span>` biru muda di akhir setiap judul.
- **Kicker**: label kapital Exo 2 dengan titik biru muda, bernomor (`01 · Tentang saya`).
- **Gelombang**: pembatas SVG antar seksi yang warnanya berbeda.
- **Stiker**: `.btn`, `.card`, `.icon-btn`, `.ikon-stiker`, `.toast` bergaris 2px dengan bayangan pejal.

## Komponen

| Kelas | Keterangan |
| --- | --- |
| `.btn`, `.btn-ghost`, `.btn-white`, `.btn-sm` | kapsul stiker; hover naik 3px, ditekan turun dan bayangan hilang |
| `.card` | kartu stiker radius 28px, hover naik 5px |
| `.ikon-stiker` (`.blue`) | ubin ikon 56px |
| `.chip.go/.beta/.wip/.plan` | status proyek |
| `.tag` | label teknologi |
| `.kicker` | label di atas judul seksi |
| `.timeline` | linimasa; `li.now` = titik biru muda bercahaya + garis putus-putus |
| `.bubble` | gelembung bicara Caveat, tidak boleh menutupi wajah di foto |
| `.toast` | notifikasi bawah, hilang setelah 2,6 detik |

## Ikon

Sprite di `index.html`: garis 2px, ujung bulat, kisi 24×24, tanpa isi. Titik biru muda (`.d`) diletakkan di tempat yang bermakna. Tanpa emoji sebagai hiasan.

## Layout & kelas layar

- Konten maksimal 1240px (`.wrap`), gutter `clamp(16px, 4vw, 48px)`.
- **Grid tanpa kartu yatim**: 3 kolom ≥1200px, 2 kolom ≥600px (kartu terakhir yang sendirian dibuat lebar penuh), 1 kolom di HP.
- Hero dua kolom mulai 600px (1.2fr/0.8fr, lalu 1.15fr/0.85fr ≥1200px). Di bawah 600px foto di atas teks.
- Nav lengkap mulai 961px, di bawahnya tombol menu.
- Cover proyek rasio 1600:848.

| Kelas | Lebar |
| --- | --- |
| ringkas | < 600px |
| sedang | 600–839px |
| lebar | 840–1199px |
| besar | ≥ 1200px |

## Gerak

- Nav transparan → kapsul blur setelah scroll 24px, sembunyi saat scroll turun, muncul saat naik.
- `data-split`: judul naik per kata. `data-reveal`: elemen memudar naik. Kartu "dirakit" dari rotasi acak kecil. `data-count-to`: angka menghitung naik.
- Kursor titik + cincin segel, label tulisan tangan lewat `data-cursor-label`. Hanya di perangkat bermouse.
- `data-magnetic`: efek magnet pada email besar.
- Menu HP: lingkaran biru membesar dari tombol menu.
- Di layar sentuh: kursor khusus dan magnet dimatikan.

## Batas

- Jangan memakai maskot, logo, atau momen khas FUSIONIFY.
- Jangan memakai template UI generik (gradien ungu, kartu kaca, emoji hiasan).
- Semua kode ditulis sendiri.
