# JNN Laundry — .NET MAUI

Landing page single-page untuk JNN Laundry yang modern, cepat, dan responsif. Dibangun dengan Blazor Web App (.NET 8) dan TailwindCSS (CDN) dengan navigasi smooth scroll, animasi, form WhatsApp, Google Maps embed, daftar layanan/harga, FAQ, dan dokumentasi singkat.

## Tautan Dokumen

- User Manual: https://docs.google.com/document/d/1mESyDz8uIiSCtmWEeVzbZfiE5PQEV--8mhAxzCJbRAw/edit?usp=sharing
- Laporan: https://docs.google.com/document/d/1CjmCTH3KTNGOBlfwSryiAGSh4VXbJKPiWwTyCe72dX0/edit?usp=sharing

## Fitur Utama

- Desain single-page, responsif (mobile–desktop) dengan TailwindCSS CDN.
- Navigasi smooth scroll dan efek animasi on-scroll.
- Pemesanan via WhatsApp (CTA + form contact) dan tombol WhatsApp mengambang.
- Google Maps embed lokasi + tombol “Buka di Maps”.
- Layanan dan harga lengkap (kiloan, satuan, sepatu, karpet, dll.).
- FAQ (accordion) dengan animasi buka/tutup.
- SEO dasar: meta title/description, Google Fonts (Poppins, Inter).
- .gitignore lengkap untuk .NET/Node/OS.

## Cara Menjalankan (Developer)

Prasyarat: .NET 8 SDK dan browser modern.

Langkah cepat:

1. Buka solusi di Visual Studio/VS Code.
2. Jalankan (F5) atau perintah `dotnet run` di folder proyek.
3. Buka URL yang muncul (contoh http://localhost:5xxx).

Catatan:

- Tailwind dipakai via CDN pada `Components/App.razor`, tidak perlu proses build CSS.
- File `wwwroot/css/output.css` tidak dipakai saat CDN aktif (disimpan untuk opsi alternatif build Tailwind lokal).

## Struktur Penting

- `Components/App.razor` — head HTML, Tailwind CDN + config, script global, SEO.
- `Components/Pages/Home.razor` — seluruh konten halaman (Hero, About/Features, Services, Pricing, Testimonials, CTA, FAQ, Location/Maps, Contact, Footer).
- `Components/Layout/MainLayout.razor` — render single-page (`@Body`).
- `wwwroot/` — aset gambar dan ikon (logo, ilustrasi, favicon).
- `tailwind.config.js` — konfigurasi (referensi; saat ini CDN memuat config setara dari App.razor).

## Kustomisasi Cepat

- Nomor WhatsApp: edit fungsi `handleWhatsAppOrder()` dan `handleContactSubmit()` di `Home.razor`.
- Peta/Alamat: ganti iframe Google Maps dan tautan “Buka di Maps” di bagian Location.
- Harga/Layanan: ubah tabel pada section Pricing di `Home.razor`.
- Jam Operasional dan CTA: edit teks pada section CTA/Contact.

## Troubleshooting Ringkas

- Style tidak terapkan: pastikan skrip CDN Tailwind aktif di `App.razor` dan hard reload (Ctrl+F5).
- Ikon chevron FAQ membesar: sudah diberi kelas ukuran dan fallback width/height 24px pada `Home.razor`.
- Konflik CSS: jangan memuat Bootstrap bersamaan jika tidak diperlukan.

## Catatan Implementasi

- Aset utama tersedia di `wwwroot/` (logo `jnn-logo.svg`, ilustrasi `modern-laundry-service-illustration-with-washing-m.jpg`, avatar `placeholder-user.jpg`, dsb.).
- Semua gambar memiliki alt text, sebagian besar menggunakan lazy loading.

## Lisensi/Kepemilikan

Konten dan aset hanya untuk keperluan tugas/proyek JNN Laundry. Hak cipta gambar/logo mengikuti pemiliknya masing‑masing.
