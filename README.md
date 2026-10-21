# Portfolio & CV Website - Salman Bazher

Website CV / Portfolio pribadi modern, profesional, interaktif, dan responsive yang dirancang khusus untuk posisi **Data Analyst | Data Visualization | Business Intelligence**. Dibangun menggunakan standar web modern murni (**Vanilla HTML5, CSS3, dan JavaScript**) tanpa dependensi framework eksternal.

---

## 📁 Struktur Berkas

```text
Project WDM/
├── index.html                  # Struktur utama halaman web (HTML5 semantik)
├── style.css                   # Styling modern, responsive CSS Grid/Flexbox & Dark/Light mode
├── script.js                   # Interaktivitas Vanilla JS (Dashboard chart, filter, validasi form, modal)
├── assets/                     # Media & dokumen pendukung
│   ├── salman-bazher.jpg       # Foto profil resmi Salman Bazher (ekstraksi dari CV)
│   └── Salman_Bazher_CV.pdf    # Berkas CV PDF resmi Salman Bazher yang siap diunduh
└── README.md                   # Dokumentasi panduan instalasi dan kustomisasi
```

---

## 🌟 Fitur Utama Website

1. **Desain Tech Modern (Dark Navy & Electric Blue)**
   - Tema gelap *data professional* dengan aksen biru elektrik (`#38bdf8`), cyan, dan navy.
   - Fitur **Dark / Light Mode Toggle** yang otomatis tersimpan di memori browser (`localStorage`).
   - Efek *glassmorphism*, kartu interaktif dengan bayangan dinamis, dan tipografi modern (*Plus Jakarta Sans* & *JetBrains Mono*).

2. **Hero Section dengan Data Analyst Portfolio Showcase**
   - Mini dashboard interaktif yang disesuaikan dengan rekam jejak portofolio asli:
     - Foto profil studio profesional tanpa latar belakang merah.
     - Metrik KPI nyata dari CV (*Data Integrity 99.4%*, *10+ Certified Tech*, *50K+ Records Analyzed*).
     - Tab **Skills Competency** (Visual skor kecakapan: Python, SQL, Power BI, Excel, EDA, Storytelling).
     - Tab **Project Impact** (Metrik kuantitatif hasil riset e-commerce & studi kasus).
     - Tab **Certifications** (Perkembangan sertifikasi terverifikasi dari Dicoding, Google AI, Coursera, Komdigi).
     - **Hover Tooltip Interaktif**: Arahkan kursor ke grafik untuk memunculkan nilai data point secara presisi.
   - Tombol cepat: **View My Projects**, **Download CV (PDF Asli)**, dan **Contact Me**.

3. **Photo Gallery & Activity Documentation (Baru)**
   - Galeri foto dokumentasi kegiatan sesuai CV dan portofolio resmi:
     - *Workshop World Class University (WCU)* di Jakarta Business School.
     - *Kick Off Forum Akademia Digital Jawa Barat (FAD Jabar)*.
     - *Supply Network Design Analysis* (E-Commerce Shopee Case Study).
     - *AI & MIS Integration for Sustainable E-Commerce Packaging*.
     - *Event Operations & Layout Optimization* (Tinus Esport & SMK Tiara Nusa).
     - *CyberGuard Strategy Framework* (IT Security & Networking System).
     - *Professional Portrait* Salman Bazher dengan latar belakang bersih.
   - Filter kategori foto: *Semua Foto*, *Akademik & Workshop*, *Riset & Analisis*, dan *Organisasi & IT*.
   - **Image Lightbox Modal**: Klik pada kartu foto untuk melihat pratinjau gambar resolusi tinggi beserta deskripsi lengkapnya.

4. **About Me & 4 Pilar Utama**
   - Ringkasan profil profesional analitis sesuai standar perusahaan teknologi.
   - 4 Pilar kompetensi inti: *Data Cleaning & Preparation*, *Exploratory Data Analysis (EDA)*, *Data Visualization*, dan *Insight Generation*.

4. **Technical Skills Toolkit**
   - Keterampilan dikelompokkan ke 5 kategori:
     1. Data Analysis
     2. Programming (Python, SQL, JavaScript)
     3. Spreadsheet (Excel, Google Sheets)
     4. Visualization & BI (Power BI, Tableau, Storytelling)
     5. Tools (Git/GitHub, Jupyter Notebook, Figma)

5. **Projects Portfolio & Interactive Modal**
   - Filter kategori instan: *All Projects*, *Data Analysis*, *Business Intelligence*, dan *Finance & Sales*.
   - 4 Sample Projects berlabel resmi:
     1. *Sales Performance Analysis*
     2. *Customer Segmentation (RFM Analysis)*
     3. *E-Commerce Executive Dashboard*
     4. *Financial Data Analysis*
   - Tombol **View Details** yang memunculkan jendela *Modal Popup* interaktif berisikan rincian latar belakang masalah, metodologi teknis, temuan kunci (*key insights*), dan rekomendasi strategis bisnis.

6. **Relevant Experience & Education Timeline**
   - Timeline pengalaman kerja nyata dari CV Salman Bazher:
     - *IT Support Intern* – Diskominfo
     - *Internal Administration Staff / Data Entry Intern* – KLHK
     - *Head of Events & Publications* – Tinus Esport
   - Riwayat pendidikan di *Jakarta Business School* (S1 Digital Business) dan *SMK Tiara Nusa* (Teknik Komputer & Jaringan), lengkap dengan penjelasan relevansinya terhadap analisis data kuantitatif.

7. **Certifications Section**
   - Daftar 10 sertifikasi terverifikasi dari *Google*, *Coursera*, *Dicoding*, dan *Komdigi (Digitalent)*.

8. **Contact & Form Validasi**
   - Tautan langsung ke Email (`salmanbazher10tkj@gmail.com`), WhatsApp/Telepon (`+62 821-1305-0859`), LinkedIn, dan GitHub.
   - Form kontak dengan validasi JavaScript: pengecekan kelengkapan data, format email, dan panjang karakter pesan.
   - Integrasi otomatis dengan *email client* pengguna (`mailto:`) tanpa memerlukan setup backend server.

9. **Navigasi & Aksesibilitas**
   - Sticky navbar dengan penanda aktif otomatis berdasarkan posisi scroll (*Scroll Spy*).
   - Menu drawer navigasi khusus smartphone (responsive *hamburger toggle*).
   - Tombol *Back to Top* dengan animasi halus.
   - Tahun hak cipta di footer diperbarui secara otomatis menggunakan JavaScript.

---

## 🚀 Cara Menjalankan Website

1. **Cara Paling Praktis (Langsung dari File Explorer)**:
   - Buka folder `Project WDM`.
   - Klik ganda (double click) pada file `index.html`.
   - Website akan langsung terbuka di browser (Google Chrome, Microsoft Edge, Mozilla Firefox, dll).

2. **Menggunakan Local Server (Opsional / Development)**:
   - Jika Anda menggunakan Visual Studio Code, Anda bisa mengklik kanan `index.html` lalu pilih **Open with Live Server**.
   - Atau melalui terminal PowerShell / Command Prompt:
     ```bash
     python -m http.server 8000
     ```
     Kemudian buka `http://localhost:8000` pada peramban Anda.
