const fs = require('fs');

// 1. components.css fixes
let css = fs.readFileSync('src/styles/components.css', 'utf8');
// Fix text-transform
css = css.replace(/\.footer-col h4\s*{[\s\S]*?text-transform:\s*uppercase;/, (match) => {
    return match.replace('text-transform: uppercase;', '');
});

// Fix hero glow
css = css.replace(/\.hero-bg-glow\s*{/, '.hero-bg-glow { display: none;');
fs.writeFileSync('src/styles/components.css', css, 'utf8');

// 2. index.html fixes
let html = fs.readFileSync('index.html', 'utf8');
// Fix header logo border-radius
html = html.replace(/<img src="\.\/favicon\.png" alt="ЭТ" class="nav-logo-icon" style="background:none;box-shadow:none;border-radius:0;/g, '<img src="./favicon.png" alt="ЭТ" class="nav-logo-icon" style="background:none;box-shadow:none;border-radius:6px;');

// Fix broken icons
const svg1 = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`;
html = html.replace(/<div class="service-icon">.*?<\/div>\s*<h3>Производственный контроль/g, `<div class="service-icon">${svg1}</div>\n          <h3>Производственный контроль`);

const svg2 = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`;
html = html.replace(/<div class="service-icon">.*?<\/div>\s*<h3>Ремонт и/g, `<div class="service-icon">${svg2}</div>\n          <h3>Ремонт и`);

fs.writeFileSync('index.html', html, 'utf8');

// 3. contacts.html fixes
let contactsHtml = fs.readFileSync('contacts.html', 'utf8');
contactsHtml = contactsHtml.replace(/iconImageOffset/g, 'iconOffset');
// Also add icon size
contactsHtml = contactsHtml.replace(/iconOffset: \[-18, -18\]/, 'iconSize: [36, 36],\n                  iconOffset: [-18, -18]');

// Also fix the header border radius in contacts.html just in case, and all other html files
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/border-radius:\s*0/g, 'border-radius:6px');
    fs.writeFileSync(file, content, 'utf8');
});

console.log('All fixes applied');
