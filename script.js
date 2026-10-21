/**
 * PORTFOLIO SALMAN BAZHER - DATA ANALYST
 * Pure Vanilla JavaScript (No Frameworks)
 * Features: Mobile Nav, Smooth Scroll, Scroll Spy, Reveal Animations,
 * Filter Projects, Dark/Light Mode, Back-To-Top, Form Validation,
 * Interactive Canvas Dashboard Chart, Project Detail Modals.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. THEME TOGGLE (DARK / LIGHT MODE)
     ========================================================================== */
  const themeToggle = document.getElementById('themeToggle');
  const rootHtml = document.documentElement;

  // Retrieve saved theme or default to dark
  const savedTheme = localStorage.getItem('salman_portfolio_theme') || 'dark';
  rootHtml.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = rootHtml.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      rootHtml.setAttribute('data-theme', newTheme);
      localStorage.setItem('salman_portfolio_theme', newTheme);

      // Redraw canvas chart to adapt to theme colors
      drawActiveChart();
    });
  }

  /* ==========================================================================
     2. MOBILE NAVIGATION MENU
     ========================================================================== */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  const navLinkItems = document.querySelectorAll('.nav-link');

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburgerBtn.classList.toggle('active');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked
    navLinkItems.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !hamburgerBtn.contains(e.target) && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ==========================================================================
     3. STICKY NAVBAR & BACK TO TOP BUTTON
     ========================================================================== */
  const siteHeader = document.getElementById('header');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header shadow & height effect
    if (siteHeader) {
      if (scrollPos > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // Back to top visibility
    if (backToTopBtn) {
      if (scrollPos > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     4. SCROLL SPY (ACTIVE NAVIGATION HIGHLIGHT)
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');

  const scrollSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinkItems.forEach(link => {
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    threshold: 0.35,
    rootMargin: '-70px 0px -40% 0px'
  });

  sections.forEach(sec => scrollSpyObserver.observe(sec));

  /* ==========================================================================
     5. VIEWPORT REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // Reveal only once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ==========================================================================
     6. PROJECT FILTERING LOGIC
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  /* ==========================================================================
     7. PROJECT DETAILS MODAL
     ========================================================================== */
  const projectData = {
    sales: {
      title: 'Sales Performance & Revenue Optimization Analysis',
      category: 'Data Analysis • Sales • Time-Series',
      status: 'Sample Project (Demonstration)',
      problem: 'Sebuah perusahaan ritel multiregional mengalami stagnasi pertumbuhan margin laba di kuartal ke-3 tanpa pemahaman jelas mengenai produk mana yang menopang volume dan mana yang menggerus margin.',
      methodology: [
        'Data cleaning & deduplikasi dari 25.000+ baris transaksi transaksi penjualan regional.',
        'Exploratory Data Analysis (EDA) menggunakan Pandas & NumPy untuk menguji korelasi diskon terhadap volume pembelian.',
        'Visualisasi tren musiman dan pareto analysis (80/20 rule) untuk mengidentifikasi produk unggulan.'
      ],
      findings: [
        'Kategori perangkat elektronik dan aksesoris menghasilkan 46.2% dari total omset.',
        'Diskon lebih dari 20% tidak menghasilkan peningkatan volume yang sebanding, justru menurunkan margin bersih sebesar 7.4%.',
        'Wilayah regional barat memiliki Repeat Purchase Rate tertinggi (34.8%).'
      ],
      recommendations: 'Menghentikan promosi diskon blanket dan beralih ke strategi cross-selling terfokus pada segmen produk dengan margin di atas 25%.'
    },
    segmentation: {
      title: 'Customer Segmentation using RFM & Behavioral Clustering',
      category: 'Data Science • Customer Analytics',
      status: 'Sample Project (Demonstration)',
      problem: 'Tim pemasaran mengirimkan email promosi massal yang sama ke seluruh basis pengguna sehingga tingkat unsubscribe melonjak hingga 4.2% dan click-through rate (CTR) merosot.',
      methodology: [
        'Ekstraksi metrik Recency, Frequency, dan Monetary (RFM) dari database transaksi 5.000 pelanggan aktif.',
        'Standardisasi fitur dengan StandardScaler dan segmentasi berbasis aturan kuantil serta K-Means clustering.',
        'Validasi klaster dan pembuatan persona pelanggan untuk strategi kampanye.'
      ],
      findings: [
        'Terbentuk 4 kelompok utama: Champions (18%), Potential Loyalists (28%), At-Risk (32%), dan Inactive (22%).',
        'Kelompok Champions menghasilkan 58% dari total nilai transaksi tahunan.',
        'Kelompok At-Risk memiliki riwayat pembelian tinggi namun belum bertransaksi dalam 90 hari terakhir.'
      ],
      recommendations: 'Meluncurkan kampanye retensi khusus dengan insentif VIP untuk kelompok Champions dan program reaktivasi email otomatis berbasis trigger untuk segmen At-Risk.'
    },
    ecommerce: {
      title: 'E-Commerce Operational & Logistics BI Dashboard',
      category: 'Business Intelligence • Power BI • SQL',
      status: 'Sample Project (Demonstration)',
      problem: 'Manajemen operasional mengalami keterlambatan pengambilan keputusan karena pelaporan logistik dilakukan secara manual melalui spreadsheet terpisah yang memakan waktu 3 hari setiap minggu.',
      methodology: [
        'Merancang data model Star Schema di Power BI dengan tabel fakta pesanan dan tabel dimensi (kurir, geografi, produk, waktu).',
        'Menulis formula DAX dinamis untuk metrik SLA pengiriman, rasio return, dan Net Promoter Score (NPS).',
        'Mengimplementasikan filter interaktif berdasarkan regional, partner ekspedisi, dan kategori berat produk.'
      ],
      findings: [
        'Rata-rata lead time pengiriman antar-pulau melampaui SLA standar sebesar 1.8 hari pada salah satu ekspedisi mitra.',
        'Keterlambatan ini berkorelasi langsung dengan lonjakan komplain pelanggan dan penurunan skor NPS hingga 22%.',
        'Biaya pengembalian barang (return logistics) menurun sebesar 14% setelah visualisasi rute bermasalah dipublikasikan.'
      ],
      recommendations: 'Penerapan SLA berjenjang dengan evaluasi performa ekspedisi mingguan serta notifikasi proaktif kepada pelanggan jika estimasi rute mengalami gangguan cuaca.'
    },
    finance: {
      title: 'Financial Market Volatility & Risk Analysis',
      category: 'Financial Analytics • Time Series • Python',
      status: 'Sample Project (Demonstration)',
      problem: 'Evaluasi ketahanan strategi alokasi portofolio terhadap lonjakan volatilitas harga instrumen finansial (Forex & Komoditas) pada masa rilis berita makroekonomi utama.',
      methodology: [
        'Pengambilan data historis tick-by-tick dan agregasi timeframe harian/mingguan.',
        'Perhitungan metrik kuantitatif: Value at Risk (VaR 95%), Sharpe Ratio, Maximum Drawdown, dan Bollinger Band Squeeze.',
        'Simulasi skenario backtesting menggunakan script Python murni.'
      ],
      findings: [
        'Penerapan filter Exponential Moving Average (EMA 200) mampu menyaring sinyal palsu (whipsaw) hingga 34%.',
        'Penyesuaian ukuran posisi berbasis Average True Range (ATR) memangkas Maximum Drawdown dari 24.5% menjadi 16.8%.',
        'Likuiditas terendah terjadi 15 menit sebelum pengumuman suku bunga, di mana slippage melonjak signifikan.'
      ],
      recommendations: 'Menerapkan protokol strict stop-loss dinamis berbasis volatilitas terkini dan menonaktifkan eksekusi otomatis pada periode likuiditas abnormal.'
    }
  };

  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');
  const modalTriggers = document.querySelectorAll('.project-modal-trigger');

  function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    modalContent.innerHTML = `
      <div class="modal-project-header">
        <span class="sample-badge" style="margin-bottom: 0.6rem; display: inline-block;">${data.status}</span>
        <h3 class="modal-project-title" id="modalTitle">${data.title}</h3>
        <p style="color: var(--accent-electric); font-family: var(--font-mono); font-size: 0.85rem;">${data.category}</p>
      </div>

      <div class="modal-section">
        <h4>// 01. Latar Belakang & Masalah Bisnis</h4>
        <p>${data.problem}</p>
      </div>

      <div class="modal-section">
        <h4>// 02. Metodologi Analisis</h4>
        <ul>
          ${data.methodology.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <h4>// 03. Temuan Kunci (Key Insights)</h4>
        <ul>
          ${data.findings.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <h4>// 04. Rekomendasi Strategis</h4>
        <p style="background: rgba(56, 189, 248, 0.08); padding: 0.85rem; border-left: 3px solid var(--accent-electric); border-radius: 4px;">
          ${data.recommendations}
        </p>
      </div>

      <div style="margin-top: 1.5rem; display: flex; gap: 0.8rem; justify-content: flex-end;">
        <button class="btn btn-sm btn-outline" id="modalInnerClose">Tutup Jendela</button>
      </div>
    `;

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Hook internal close button
    const innerClose = document.getElementById('modalInnerClose');
    if (innerClose) {
      innerClose.addEventListener('click', closeModal);
    }
  }

  function closeModal() {
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  modalTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const pId = btn.getAttribute('data-project');
      openModal(pId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
      closeModal();
    }
  });

  /* ==========================================================================
     8. INTERACTIVE CANVAS ANALYTICS SIMULATOR (MINI DASHBOARD)
     ========================================================================== */
  const canvas = document.getElementById('heroAnalyticsCanvas');
  const chartTooltip = document.getElementById('chartTooltip');
  const chartTabs = document.querySelectorAll('.chart-tab');

  // KPI elements to update dynamically
  const kpiRevenueVal = document.getElementById('kpiRevenueVal');
  const kpiConversionVal = document.getElementById('kpiConversionVal');
  const kpiRetentionVal = document.getElementById('kpiRetentionVal');

  let currentChartType = 'skills';
  let animationProgress = 0;
  let animFrameId = null;

  const chartDatasets = {
    skills: {
      type: 'line',
      labels: ['Python', 'SQL', 'Power BI', 'Excel', 'EDA', 'Statistics', 'Storytelling'],
      data: [90, 88, 86, 95, 92, 85, 89],
      suffix: '% Proficiency',
      kpi: { rev: '99.4%', conv: '10+', ret: '50K+' }
    },
    projects: {
      type: 'bar',
      labels: ['Shopee Supply', 'RFM Cluster', 'Logistics SLA', 'Risk Drawdown'],
      data: [46, 58, 22, 31],
      suffix: '% Measured Impact',
      kpi: { rev: '99.4%', conv: '10+', ret: '50K+' }
    },
    certDistribution: {
      type: 'line',
      labels: ['Dicoding', 'Google AI', 'Coursera AI', 'Cyber Sec.', 'Komdigi Cyber', 'Komdigi Inter.'],
      data: [1, 3, 5, 7, 9, 10],
      suffix: ' Credentials',
      kpi: { rev: '99.4%', conv: '10+', ret: '50K+' }
    }
  };

  // High DPI screen adjustment
  function setupCanvasResolution() {
    if (!canvas) return null;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    return { ctx, width: rect.width, height: rect.height };
  }

  let hoveredPoint = null;

  function renderChart(progress = 1) {
    if (!canvas) return;
    const setup = setupCanvasResolution();
    if (!setup) return;
    const { ctx, width, height } = setup;

    ctx.clearRect(0, 0, width, height);

    const ds = chartDatasets[currentChartType];
    const isDark = rootHtml.getAttribute('data-theme') !== 'light';

    // Theme color adjustments
    const gridColor = isDark ? 'rgba(56, 189, 248, 0.08)' : 'rgba(0, 0, 0, 0.06)';
    const textColor = isDark ? '#64748b' : '#94a3b8';
    const primaryStroke = isDark ? '#38bdf8' : '#0284c7';
    const fillGradientStart = isDark ? 'rgba(56, 189, 248, 0.28)' : 'rgba(2, 132, 199, 0.25)';
    const fillGradientEnd = isDark ? 'rgba(56, 189, 248, 0.0)' : 'rgba(2, 132, 199, 0.0)';

    const padding = { top: 25, right: 25, bottom: 35, left: 40 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    // Draw horizontal grid lines
    const gridLines = 4;
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);

    for (let i = 0; i <= gridLines; i++) {
      const y = padding.top + (chartH / gridLines) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();
    }
    ctx.setLineDash([]); // Reset line dash

    const maxVal = Math.max(...ds.data) * 1.15;
    const minVal = 0;

    if (ds.type === 'line') {
      // Calculate coordinates
      const points = ds.data.map((val, idx) => {
        const x = padding.left + (chartW / (ds.data.length - 1)) * idx;
        const normalizedVal = (val - minVal) / (maxVal - minVal);
        const y = padding.top + chartH - normalizedVal * chartH * progress;
        return { x, y, val, label: ds.labels[idx] };
      });

      // Area Fill
      const grad = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
      grad.addColorStop(0, fillGradientStart);
      grad.addColorStop(1, fillGradientEnd);

      ctx.beginPath();
      ctx.moveTo(points[0].x, height - padding.bottom);
      points.forEach(pt => ctx.lineTo(pt.x, pt.y));
      ctx.lineTo(points[points.length - 1].x, height - padding.bottom);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      // Line Stroke
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 0; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
      ctx.strokeStyle = primaryStroke;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = primaryStroke;
      ctx.shadowBlur = 8;
      ctx.stroke();
      ctx.shadowBlur = 0; // reset

      // Circles for points
      points.forEach(pt => {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = primaryStroke;
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();
      });

      // X Axis Labels
      ctx.fillStyle = textColor;
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      points.forEach(pt => {
        ctx.fillText(pt.label, pt.x, height - 12);
      });

      // Highlight hovered point if any
      if (hoveredPoint && progress >= 0.95) {
        ctx.beginPath();
        ctx.arc(hoveredPoint.x, hoveredPoint.y, 7, 0, Math.PI * 2);
        ctx.fillStyle = '#00f0ff';
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

    } else if (ds.type === 'bar') {
      const barCount = ds.data.length;
      const totalSlot = chartW / barCount;
      const barWidth = Math.min(36, totalSlot * 0.55);

      ds.data.forEach((val, idx) => {
        const x = padding.left + totalSlot * idx + (totalSlot - barWidth) / 2;
        const normalizedVal = (val - minVal) / (maxVal - minVal);
        const barH = normalizedVal * chartH * progress;
        const y = padding.top + chartH - barH;

        // Bar Gradient
        const barGrad = ctx.createLinearGradient(0, y, 0, padding.top + chartH);
        barGrad.addColorStop(0, primaryStroke);
        barGrad.addColorStop(1, '#1d4ed8');

        ctx.fillStyle = barGrad;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barH, [4, 4, 0, 0]);
        ctx.fill();

        // X Labels
        ctx.fillStyle = textColor;
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(ds.labels[idx], x + barWidth / 2, height - 12);
      });
    }
  }

  function animateChart() {
    if (animFrameId) cancelAnimationFrame(animFrameId);
    let start = null;
    const duration = 650;

    function step(timestamp) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      renderChart(ease);

      if (progress < 1) {
        animFrameId = requestAnimationFrame(step);
      }
    }
    animFrameId = requestAnimationFrame(step);
  }

  function drawActiveChart() {
    animateChart();
  }

  // Switch tabs
  chartTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      chartTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      currentChartType = tab.getAttribute('data-chart');
      const ds = chartDatasets[currentChartType];

      // Update KPI figures smoothly
      if (ds && ds.kpi) {
        if (kpiRevenueVal) kpiRevenueVal.textContent = ds.kpi.rev;
        if (kpiConversionVal) kpiConversionVal.textContent = ds.kpi.conv;
        if (kpiRetentionVal) kpiRetentionVal.textContent = ds.kpi.ret;
      }

      drawActiveChart();
    });
  });

  // Canvas Mouse Move for Tooltip
  if (canvas && chartTooltip) {
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const ds = chartDatasets[currentChartType];
      const padding = { top: 25, right: 25, bottom: 35, left: 40 };
      const chartW = rect.width - padding.left - padding.right;
      const chartH = rect.height - padding.top - padding.bottom;
      const maxVal = Math.max(...ds.data) * 1.15;

      let found = null;

      if (ds.type === 'line') {
        ds.data.forEach((val, idx) => {
          const ptX = padding.left + (chartW / (ds.data.length - 1)) * idx;
          const ptY = padding.top + chartH - (val / maxVal) * chartH;
          const dist = Math.hypot(mouseX - ptX, mouseY - ptY);

          if (dist < 24) {
            found = { x: ptX, y: ptY, label: ds.labels[idx], val: val, suffix: ds.suffix };
          }
        });
      } else {
        const totalSlot = chartW / ds.data.length;
        const barWidth = Math.min(36, totalSlot * 0.55);

        ds.data.forEach((val, idx) => {
          const x = padding.left + totalSlot * idx + (totalSlot - barWidth) / 2;
          const barH = (val / maxVal) * chartH;
          const y = padding.top + chartH - barH;

          if (mouseX >= x && mouseX <= x + barWidth && mouseY >= y && mouseY <= padding.top + chartH) {
            found = { x: x + barWidth / 2, y: y, label: ds.labels[idx], val: val, suffix: ds.suffix };
          }
        });
      }

      if (found) {
        hoveredPoint = found;
        chartTooltip.style.display = 'block';
        chartTooltip.style.left = `${found.x}px`;
        chartTooltip.style.top = `${found.y}px`;
        chartTooltip.innerHTML = `<strong>${found.label}</strong>: ${found.val} ${found.suffix}`;
        renderChart(1);
      } else {
        hoveredPoint = null;
        chartTooltip.style.display = 'none';
        renderChart(1);
      }
    });

    canvas.addEventListener('mouseleave', () => {
      hoveredPoint = null;
      chartTooltip.style.display = 'none';
      renderChart(1);
    });
  }

  // Initial draw
  setTimeout(drawActiveChart, 150);
  window.addEventListener('resize', drawActiveChart);

  /* ==========================================================================
     9. CONTACT FORM VALIDATION & DIRECT EMAIL SIMULATION
     ========================================================================== */
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('userName');
  const emailInput = document.getElementById('userEmail');
  const subjectInput = document.getElementById('userSubject');
  const messageInput = document.getElementById('userMessage');
  const formStatus = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function clearErrors() {
    [nameInput, emailInput, subjectInput, messageInput].forEach(inp => inp.classList.remove('error'));
    [nameError, emailError, subjectError, messageError].forEach(err => {
      err.textContent = '';
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();

      let isValid = true;

      // Name validation
      if (!nameInput.value.trim()) {
        nameInput.classList.add('error');
        nameError.textContent = 'Mohon isi nama lengkap Anda.';
        isValid = false;
      }

      // Email validation
      if (!emailInput.value.trim()) {
        emailInput.classList.add('error');
        emailError.textContent = 'Mohon isi alamat email Anda.';
        isValid = false;
      } else if (!validateEmail(emailInput.value.trim())) {
        emailInput.classList.add('error');
        emailError.textContent = 'Format alamat email tidak valid.';
        isValid = false;
      }

      // Subject validation
      if (!subjectInput.value.trim()) {
        subjectInput.classList.add('error');
        subjectError.textContent = 'Mohon masukkan topik atau subjek pesan.';
        isValid = false;
      }

      // Message validation
      if (!messageInput.value.trim()) {
        messageInput.classList.add('error');
        messageError.textContent = 'Mohon tuliskan pesan Anda.';
        isValid = false;
      } else if (messageInput.value.trim().length < 10) {
        messageInput.classList.add('error');
        messageError.textContent = 'Pesan minimal berisi 10 karakter.';
        isValid = false;
      }

      if (isValid) {
        // Show loading state
        submitBtn.disabled = true;
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `
          <span>Mengirim Pesan...</span>
          <svg class="spin-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10"></path></svg>
        `;

        // Simulate client sending & generate mailto fallback link
        setTimeout(() => {
          const userNameVal = encodeURIComponent(nameInput.value.trim());
          const subjectVal = encodeURIComponent(subjectInput.value.trim());
          const bodyVal = encodeURIComponent(
            `Halo Salman Bazher,\n\nNama: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nPesan:\n${messageInput.value.trim()}\n\n---\nDikirim melalui Portfolio Website Salman Bazher.`
          );
          const mailtoUri = `mailto:salmanbazher10tkj@gmail.com?subject=${subjectVal}&body=${bodyVal}`;

          formStatus.className = 'form-status success';
          formStatus.innerHTML = `
            <strong>Terima Kasih, ${nameInput.value.trim()}!</strong><br>
            Pesan validasi berhasil diproses. Jika email client Anda belum terbuka otomatis, Anda dapat 
            <a href="${mailtoUri}" style="text-decoration: underline; font-weight: 700; color: #10b981;">klik di sini untuk membuka aplikasi email Anda</a>.
          `;

          // Automatically trigger mailto link
          window.location.href = mailtoUri;

          // Reset Form
          contactForm.reset();
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }, 900);
      }
    });

    // Real-time input error clearing
    [nameInput, emailInput, subjectInput, messageInput].forEach(inp => {
      inp.addEventListener('input', () => {
        inp.classList.remove('error');
      });
    });
  }

  /* ==========================================================================
     10. PHOTO GALLERY FILTERING & IMAGE LIGHTBOX MODAL
     ========================================================================== */
  const galleryFilterBtns = document.querySelectorAll('[data-gallery-filter]');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const imageLightboxModal = document.getElementById('imageLightboxModal');
  const lightboxOverlay = document.getElementById('lightboxOverlay');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');

  // Filter gallery photos
  if (galleryFilterBtns.length > 0) {
    galleryFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        galleryFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-gallery-filter');

        galleryItems.forEach(item => {
          const category = item.getAttribute('data-gallery-cat');
          if (filter === 'all' || category === filter) {
            item.style.display = 'flex';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(15px)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  }

  // Open Lightbox
  function openLightbox(imgSrc, title, desc) {
    if (!imageLightboxModal || !lightboxImage) return;
    lightboxImage.src = imgSrc;
    lightboxTitle.textContent = title || 'Dokumentasi Kegiatan';
    lightboxDesc.textContent = desc || '';

    imageLightboxModal.classList.add('active');
    imageLightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!imageLightboxModal) return;
    imageLightboxModal.classList.remove('active');
    imageLightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.getAttribute('data-img');
      const title = item.getAttribute('data-title');
      const desc = item.getAttribute('data-desc');
      openLightbox(imgSrc, title, desc);
    });
  });

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);

  // Close lightbox on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imageLightboxModal && imageLightboxModal.classList.contains('active')) {
      closeLightbox();
    }
  });

  /* ==========================================================================
     11. AUTOMATIC CURRENT YEAR UPDATE IN FOOTER
     ========================================================================== */
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
