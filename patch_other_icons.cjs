const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// SVG replacements for Advantages (size 40x40)
const advSvg2 = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`;
const advSvg3 = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`;
const advSvg4 = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>`;

html = html.replace(/<div style="font-size:2\.8rem;margin-bottom:12px;"><\/div>(\s*<h4[^>]*>.*?Нестандартные)/, `<div style="margin-bottom:12px;">${advSvg2}</div>$1`);
html = html.replace(/<div style="font-size:2\.8rem;margin-bottom:12px;"><\/div>(\s*<h4[^>]*>.*?AEES)/, `<div style="margin-bottom:12px;">${advSvg3}</div>$1`);
html = html.replace(/<div style="font-size:2\.8rem;margin-bottom:12px;"><\/div>(\s*<h4[^>]*>.*?Рекомендательные)/, `<div style="margin-bottom:12px;">${advSvg4}</div>$1`);


// SVG replacements for Clients (size 28x28)
const cliSvg1 = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;
const cliSvg2 = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>`;
const cliSvg3 = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>`;
const cliSvg4 = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`;

html = html.replace(/<div style="margin-bottom:10px;"><svg[^>]*>.*?<\/svg><\/div>(\s*<h4[^>]*>.*?ХарГРЭС)/, `<div style="margin-bottom:10px;">${cliSvg1}</div>$1`);
html = html.replace(/<div style="margin-bottom:10px;"><svg[^>]*>.*?<\/svg><\/div>(\s*<h4[^>]*>.*?ПЭС ДРСК)/, `<div style="margin-bottom:10px;">${cliSvg2}</div>$1`);
html = html.replace(/<div style="margin-bottom:10px;"><svg[^>]*>.*?<\/svg><\/div>(\s*<h4[^>]*>.*?Мамаканская)/, `<div style="margin-bottom:10px;">${cliSvg3}</div>$1`);
html = html.replace(/<div style="font-size:2rem;margin-bottom:10px;">.*?<\/div>(\s*<h4[^>]*>.*?АЭС ДРСК)/, `<div style="margin-bottom:10px;">${cliSvg4}</div>$1`);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed advantages and clients icons');
