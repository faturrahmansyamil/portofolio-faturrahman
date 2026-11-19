# Kebijakan Keamanan

## Melaporkan celah keamanan

Kalau kamu menemukan celah keamanan di web ini, **jangan membuka issue publik**. Laporkan secara privat lewat
**[GitHub Security Advisories](https://github.com/faturrahmansyamil/portofolio-faturrahman/security/advisories/new)**.

Sertakan:
- jenis celah dan halaman/file yang terdampak,
- langkah untuk mereproduksi,
- dampak yang mungkin terjadi.

Laporan akan dibalas dalam 7 hari. Terima kasih sudah membantu menjaga web ini tetap aman.

## Versi yang didukung

| Versi | Didukung |
| --- | --- |
| `main` (yang live di GitHub Pages) | ✅ |
| commit lama | ❌ |

## Langkah keamanan yang sudah diterapkan

| Area | Penerapan |
| --- | --- |
| Content-Security-Policy | `<meta http-equiv>` di `index.html`: skrip hanya dari domain sendiri (+ hash untuk 1 skrip inline tema), font hanya dari Google Fonts, `object-src 'none'`, `base-uri 'self'`, `form-action 'none'` |
| XSS | Semua data dari `js/data.js` di-escape (`esc()`) sebelum masuk `innerHTML` |
| Tautan luar | `target="_blank"` selalu memakai `rel="noopener noreferrer"` |
| Referrer | `strict-origin-when-cross-origin` |
| HTTPS | Dipaksa oleh GitHub Pages ("Enforce HTTPS") |
| Data pengunjung | Tidak ada form, cookie, analytics, atau pelacak. `localStorage` hanya menyimpan pilihan tema |
| Dependensi | Tidak ada dependensi npm. Satu-satunya sumber luar adalah Google Fonts |
| Kontak keamanan | `/.well-known/security.txt` (RFC 9116) |

## Checklist saat mengubah web

- [ ] Jangan pernah commit token, password, API key, atau file `.env`.
- [ ] Data baru yang ditampilkan lewat `innerHTML` wajib lewat `esc()`.
- [ ] Menambah skrip/font/gambar dari domain luar? Tambahkan domainnya ke CSP di `index.html`, dan hanya dari sumber tepercaya.
- [ ] Mengubah skrip inline tema di `<head>`? Hitung ulang hash `sha256` di CSP (lihat `SKILL.md`).
- [ ] Jangan menaruh data pribadi sensitif (alamat rumah, NIK, nomor HP pribadi) di web publik.
- [ ] Perbarui tanggal `Expires` di `.well-known/security.txt` sebelum kedaluwarsa.

## Batasan GitHub Pages

GitHub Pages tidak bisa mengatur header HTTP sendiri, jadi `X-Frame-Options`/`frame-ancestors` tidak bisa dipasang lewat `<meta>`. Kalau butuh header lengkap, deploy lewat Netlify/Vercel/Cloudflare Pages dan pindahkan CSP ke file konfigurasi header.
