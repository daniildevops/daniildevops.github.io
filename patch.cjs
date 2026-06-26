const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

const topbar_html = `
<!-- TOPBAR -->
<div class="topbar">
  <div class="container">
    <a href="tel:+73833807614" class="topbar-item">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      +7 383 380-76-14
    </a>
    <div class="topbar-divider"></div>
    <a href="mailto:info@electricalsystem.ru" class="topbar-item">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      info@electricalsystem.ru
    </a>
  </div>
</div>
`;

const svg_moon = '<svg class="icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
const svg_phone = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>';
const svg_mail = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>';
const svg_map = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>';
const svg_clock = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>';

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  content = content.replace(/<link rel="icon" href="\.\/public\/favicon\.svg".*?>/g, '<link rel="icon" href="./public/favicon.png" type="image/png" />');

  if (!content.includes('<!-- TOPBAR -->')) {
    content = content.replace('<body>', '<body>\n' + topbar_html);
  }

  content = content.replace(/<button class="theme-toggle" id="theme-toggle"([^>]*)>🌙<\/button>/g, 
    `<button class="theme-toggle" id="theme-toggle"$1>${svg_moon}</button>`);

  content = content.replace(/<a href="tel:\+73833807614" class="nav-phone hide-mobile">[\s\S]*?<\/a>\s*/g, '');

  content = content.replace(/📞 \+7 383 380-76-14/g, `${svg_phone} +7 383 380-76-14`);
  content = content.replace(/<span class="icon">📞<\/span>/g, `<span class="icon" style="display:flex;align-items:center;">${svg_phone}</span>`);
  content = content.replace(/<span class="icon">✉️<\/span>/g, `<span class="icon" style="display:flex;align-items:center;">${svg_mail}</span>`);
  content = content.replace(/<span class="icon">📍<\/span>/g, `<span class="icon" style="display:flex;align-items:center;">${svg_map}</span>`);

  if (file === 'contacts.html') {
    content = content.replace(/<div class="contact-info-icon">📞<\/div>/g, `<div class="contact-info-icon">${svg_phone}</div>`);
    content = content.replace(/<div class="contact-info-icon">✉️<\/div>/g, `<div class="contact-info-icon">${svg_mail}</div>`);
    content = content.replace(/<div class="contact-info-icon">📍<\/div>/g, `<div class="contact-info-icon">${svg_map}</div>`);
    content = content.replace(/<div class="contact-info-icon">🕐<\/div>/g, `<div class="contact-info-icon">${svg_clock}</div>`);
  }
  
  if (file === 'reviews.html') {
    content = content.replace(/<div class="review-icon">📄<\/div>/g, `<div class="review-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></div>`);
  }

  fs.writeFileSync(file, content, 'utf8');
});
console.log('Done!');
