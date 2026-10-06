* {
  box-sizing: border-box;
}

:root {
  --bg: #0b1020;
  --bg-soft: #121a2c;
  --panel: rgba(18, 27, 46, 0.85);
  --panel-strong: #171f31;
  --line: rgba(163, 181, 213, 0.18);
  --text: #edf2ff;
  --muted: #b5c2dd;
  --primary: #7c9cff;
  --primary-strong: #5f7ef7;
  --accent: #44d39b;
  --warning: #ffbf69;
  --danger: #ff6b7d;
  --shadow: 0 22px 50px rgba(0, 0, 0, 0.35);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background:
    radial-gradient(circle at top, rgba(124, 156, 255, 0.18), transparent 22%),
    linear-gradient(180deg, #0a0f1b 0%, #0c1527 100%);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(16px);
  background: rgba(11, 16, 32, 0.78);
  border-bottom: 1px solid var(--line);
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.nav-shell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 18px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #08111d;
  font-weight: 900;
}

.main-nav {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
  color: var(--muted);
  font-size: 0.95rem;
}

.main-nav a:hover,
.text-link:hover {
  color: var(--text);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.primary-btn,
.secondary-btn {
  border: 0;
  border-radius: 12px;
  padding: 0.9rem 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: white;
  box-shadow: var(--shadow);
}

.primary-btn.small {
  padding: 0.7rem 1rem;
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  color: var(--text);
}

.primary-btn:hover,
.secondary-btn:hover {
  transform: translateY(-1px);
}

.hero {
  padding: 72px 0 40px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 30px;
  align-items: center;
}

.eyebrow {
  margin: 0 0 14px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.78rem;
  color: var(--accent);
  font-weight: 700;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  font-size: clamp(2.5rem, 4vw, 4.6rem);
  line-height: 1.05;
  margin-bottom: 18px;
}

.hero-copy {
  max-width: 620px;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 12px;
  margin-top: 28px;
  flex-wrap: wrap;
}

.trust-pills {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 26px 0 0;
}

.trust-pills li,
.chip,
.status-badge {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  border-radius: 999px;
  padding: 0.45rem 0.8rem;
  font-size: 0.82rem;
}

.hero-panel {
  display: grid;
  gap: 18px;
}

.mini-card {
  background: linear-gradient(180deg, rgba(24, 35, 59, 0.95), rgba(15, 21, 35, 0.95));
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 1.3rem;
  box-shadow: var(--shadow);
}

.mini-card.big {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.mini-card strong {
  display: block;
  font-size: clamp(2rem, 4vw, 3rem);
  margin: 8px 0;
}

.mini-card small,
.mini-label {
  color: var(--muted);
}

.mini-card.stack {
  border-left: 3px solid var(--primary);
}

.stats-band {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: rgba(15, 20, 32, 0.8);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  padding: 22px 0;
}

.stat-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
}

.stat-box strong {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
}

.stat-box span {
  color: var(--muted);
}

.section {
  padding: 72px 0;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
}

.text-link {
  color: var(--primary);
  font-weight: 700;
}

.trade-grid,
.info-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.trade-card,
.info-card,
.form-panel,
.chat-panel,
.site-card,
.profile-card,
.dashboard-card,
.table-card {
  border: 1px solid var(--line);
  background: rgba(18, 27, 46, 0.88);
  border-radius: 22px;
  padding: 1.2rem;
  box-shadow: var(--shadow);
}

.card-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.rating {
  color: var(--warning);
  font-weight: 700;
}

.trade-card h3 {
  margin: 18px 0 12px;
  font-size: 1.2rem;
}

.trade-card p {
  color: var(--muted);
  line-height: 1.6;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 18px;
}

.dark-section {
  background: linear-gradient(180deg, rgba(12, 15, 27, 0.9), rgba(17, 27, 43, 0.9));
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.split-panel {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;
  align-items: center;
}

.feature-list {
  list-style: none;
  margin: 20px 0 0;
  padding: 0;
  display: grid;
  gap: 14px;
}

.feature-list li {
  position: relative;
  padding-left: 26px;
  color: var(--muted);
}

.feature-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 1.4rem;
  line-height: 1;
}

.safety-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 1.4rem;
}

.inline-note {
  margin-top: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
  font-size: 0.92rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 18px rgba(68, 211, 155, 0.9);
}

.page-hero {
  padding: 56px 0 26px;
}

.page-hero h1 {
  margin-bottom: 10px;
}

.subtle {
  color: var(--muted);
}

.grid-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 22px;
}

.form-panel label,
.form-panel input,
.form-panel textarea,
.form-panel select {
  display: block;
  width: 100%;
}

.form-panel label {
  color: var(--muted);
  margin-bottom: 10px;
  font-size: 0.96rem;
}

.form-panel input,
.form-panel textarea,
.form-panel select {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 12px;
  color: var(--text);
  padding: 0.8rem 0.9rem;
  margin-bottom: 18px;
}

.form-panel textarea {
  min-height: 140px;
  resize: vertical;
}

.note-box,
.listing-box {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 18px;
  padding: 1rem 1.1rem;
  color: var(--muted);
  line-height: 1.6;
}

.chat-list,
.profile-list,
.table-list,
.mod-list {
  display: grid;
  gap: 16px;
}

.chat-row,
.profile-row,
.table-row,
.mod-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 1rem 1.1rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
}

.chat-meta,
.profile-meta,
.table-meta,
.mod-meta {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.chat-badge,
.level-badge,
.tag,
.alert-tag {
  border-radius: 999px;
  padding: 0.4rem 0.7rem;
  font-size: 0.76rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.chat-badge,
.tag {
  background: rgba(124, 156, 255, 0.12);
  color: #dfe8ff;
}

.level-badge {
  background: rgba(68, 211, 155, 0.12);
  color: #cdf8ea;
}

.alert-tag {
  background: rgba(255, 107, 125, 0.12);
  color: #ffd6dc;
}

.table-card table {
  width: 100%;
  border-collapse: collapse;
}

.table-card th,
.table-card td {
  padding: 0.9rem 0.7rem;
  text-align: left;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
}

.table-card th {
  color: var(--text);
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.row-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

@media (max-width: 980px) {
  .main-nav {
    display: none;
  }

  .hero-grid,
  .split-panel,
  .grid-layout,
  .trade-grid,
  .info-grid,
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .nav-shell {
    justify-content: space-between;
  }
}

@media (max-width: 640px) {
  .nav-actions {
    display: none;
  }

  .hero {
    padding-top: 48px;
  }

  .section {
    padding: 52px 0;
  }

  .section-heading {
    align-items: start;
    flex-direction: column;
  }
}
