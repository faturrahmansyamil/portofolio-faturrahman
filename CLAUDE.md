# CLAUDE.md

Semua aturan ada di AGENTS.md dan DESIGN.md. Baca keduanya sebelum mengubah apa pun.

@AGENTS.md
@DESIGN.md
@SECURITY.md

## Catatan khusus Claude

- Resep tugas umum (tambah proyek, tambah seksi, hitung ulang hash CSP) ada di `SKILL.md`.
- Konten hanya diubah di `js/data.js`. Kalau data asli belum ada, tanyakan ke pemilik; jangan mengarang.
- Sebelum menyerahkan hasil visual, buka halaman di browser (`python -m http.server 5500`) dan cek ukuran layar di AGENTS.md bagian QA, di mode terang dan gelap, plus konsol tanpa error CSP.
- Saat menambah animasi, ukur frame time sebelum dan sesudah. Kalau bertambah berat, cari penyebabnya dulu.
- Catat setiap perubahan di `CHANGELOG.md`.
