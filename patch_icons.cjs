const fs = require('fs');

const svgs = [
  // 1. Разработка и производство силовой электроники (zap)
  `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
  // 2. AC/DC и DC/DC (activity)
  `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
  // 3. Производство ЗВУ (battery-charging)
  `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline></svg>`,
  // 4. Модернизация систем контроля изоляции (shield)
  `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6-8 10-8 10z"></path></svg>`,
  // 5. Контроллеры (cpu)
  `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
  // 6. Системы мониторинга АКБ (bar-chart-2)
  `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
  // 7. Замена (settings)
  `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
  // 8. Ремонт (wrench)
  `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`
];

let html = fs.readFileSync('index.html', 'utf8');

let i = 0;
// We find all `<div class="service-icon">...</div>` tags that are inside a `service-card` context.
html = html.replace(/<div class="service-icon">.*?<\/div>/g, (match) => {
  if (i < svgs.length) {
    const res = `<div class="service-icon">${svgs[i]}</div>`;
    i++;
    return res;
  }
  return match;
});

fs.writeFileSync('index.html', html, 'utf8');
console.log('Icons updated successfully, replaced ' + i + ' icons.');
