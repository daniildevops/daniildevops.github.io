const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const svg = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`;

html = html.replace(/<div class="service-icon">.*?<\/div>\s*<h3>Шефмонтажные/g, `<div class="service-icon">${svg}</div>\n          <h3>Шефмонтажные`);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed missing icon');
