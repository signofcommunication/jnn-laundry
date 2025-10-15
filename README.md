# 🧺 JNN Laundry Website

Website modern dan responsif untuk layanan laundry menggunakan **Blazor Web App (.NET 8)** dengan **TailwindCSS**.

## ✨ Fitur Utama

- **Single Page Application** dengan smooth scroll navigation
- **Responsive design** yang optimal di semua device (mobile, tablet, desktop)
- **Modern UI/UX** dengan TailwindCSS dan animasi halus
- **Fast loading** dengan optimasi performa
- **WhatsApp Integration** untuk kemudahan komunikasi
- **Google Maps Integration** untuk navigasi ke lokasi
- **Clean & Maintainable Code** dengan Blazor components

## 🏗️ Struktur Website

### 1. Hero Section

- Logo dan navigasi
- Judul utama dengan call-to-action
- Background gradient yang menarik

### 2. About Section

- Informasi tentang JNN Laundry
- Layout responsif dengan gambar dan teks

### 3. Services Section

- 4 layanan utama:
  - 🧺 Laundry Kiloan
  - 👕 Cuci Satuan
  - 🧴 Dry Clean
  - 🚗 Antar Jemput

### 4. Pricing Section

- 3 paket harga:
  - Basic (Rp6.000/kg)
  - Express (Rp8.000/kg)
  - Premium (Rp10.000/kg)

### 5. Contact Section

- Form kontak yang terintegrasi dengan WhatsApp
- Informasi kontak lengkap
- Jam operasional
- **Google Maps Integration** - Embed map dengan lokasi JNN Laundry

### 6. Footer

- Copyright dan social media links

## 🚀 Cara Menjalankan

### Prerequisites

- .NET 8 SDK
- Node.js (untuk TailwindCSS)

### Instalasi dan Menjalankan

1. **Clone repository**

   ```bash
   git clone <repository-url>
   cd JNN-2
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Build TailwindCSS** (opsional, file sudah ada)

   ```bash
   npm run build-css
   ```

4. **Jalankan aplikasi**

   ```bash
   dotnet run
   ```

5. **Buka browser**
   ```
   http://localhost:5262
   ```

## 🎨 Styling

### TailwindCSS Configuration

- File konfigurasi: `tailwind.config.js`
- Input CSS: `wwwroot/css/input.css`
- Output CSS: `wwwroot/css/output.css`

### Custom Colors

- Primary: `#3b82f6` (blue-500)
- Primary Light: `#60a5fa` (blue-400)
- Primary Dark: `#1d4ed8` (blue-700)

### Fonts

- Primary: Poppins
- Secondary: Inter

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: > 1024px

## 🛠️ Development

### Building TailwindCSS

```bash
# Build once
npm run build-css

# Watch for changes
npm run build-css:watch
```

### Project Structure

```
JNN-2/
├── Components/
│   ├── App.razor          # Main app component
│   ├── Routes.razor       # Routing configuration
│   ├── Layout/
│   └── Pages/
│       └── Home.razor     # Main landing page
├── wwwroot/
│   └── css/
│       ├── input.css      # TailwindCSS input
│       └── output.css     # Generated CSS
├── tailwind.config.js     # TailwindCSS config
└── package.json          # npm dependencies
```

## 🎯 Fitur Tambahan

- Smooth scroll navigation
- Hover effects pada cards
- Responsive grid layouts
- Modern gradient backgrounds
- Shadow effects
- Transition animations
- **Embedded Google Maps** dengan tombol navigasi langsung
- **Interactive contact form** yang langsung ke WhatsApp
- **Mobile-first responsive design**

## 📞 Kontak JNN Laundry

- **Alamat**: Jl. Raya Parung, Bogor
- **WhatsApp**: +62 812-3456-7890
- **Instagram**: @jnnlaundry

## 🔧 Troubleshooting

### Masalah Umum

1. **CSS tidak ter-load dengan benar**

   ```bash
   npm run build-css
   ```

2. **Port sudah digunakan**

   - Ganti port di `Properties/launchSettings.json`
   - Atau gunakan: `dotnet run --urls "http://localhost:5000"`

3. **Aplikasi tidak ter-build**
   ```bash
   dotnet clean
   dotnet restore
   dotnet build
   ```

### Performance Tips

- Gunakan `dotnet run -c Release` untuk production
- Optimize gambar sebelum deploy
- Enable compression di hosting

## 🚀 Deployment

### IIS (Windows Server)

1. Publish aplikasi: `dotnet publish -c Release`
2. Copy folder `publish` ke IIS
3. Buat application pool .NET 8
4. Set binding dan SSL

### Linux (Nginx)

1. Install .NET 8 runtime
2. Setup systemd service
3. Configure Nginx reverse proxy
4. Setup SSL dengan Let's Encrypt

## 📄 License

© 2025 JNN Laundry. All rights reserved.

---

**Dibuat dengan ❤️ menggunakan Blazor & TailwindCSS**
