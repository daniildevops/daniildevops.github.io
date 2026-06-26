const fs = require('fs');
const glob = require('fs').readdirSync('.');

const svgAward = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>';
const svgUser = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
const svgBadge = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
const svgTruck = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>';
const svgHandshake = '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>';
const svgIndustry = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--clr-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16"></path><path d="M4 22v-8l5-4v12"></path><path d="M9 14v-4l5-4v8"></path><path d="M14 10V6l5-4v8"></path></svg>';

const files = glob.filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Regex for matching emojis
  const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F200}-\u{1F251}\u{1F900}-\u{1F9FF}\u{1FA70}-\u{1FAFF}\u{2300}-\u{23FF}\u{2B50}]/gu;
  
  // Custom replacements for index.html stats/features section
  if (file === 'index.html') {
    // These are guesses of the emojis we used
    content = content.replace(/<div style="font-size:2\.8rem;margin-bottom:12px;">🏆<\/div>/g, `<div style="margin-bottom:12px;">${svgAward}</div>`);
    content = content.replace(/<div style="font-size:2\.8rem;margin-bottom:12px;">👥<\/div>/g, `<div style="margin-bottom:12px;">${svgUser}</div>`);
    content = content.replace(/<div style="font-size:2\.8rem;margin-bottom:12px;">🌟<\/div>/g, `<div style="margin-bottom:12px;">${svgBadge}</div>`);
    content = content.replace(/<div style="font-size:2\.8rem;margin-bottom:12px;">📦<\/div>/g, `<div style="margin-bottom:12px;">${svgTruck}</div>`);
    
    // Clients section icons
    content = content.replace(/<div style="font-size:2rem;margin-bottom:10px;">🏭<\/div>/g, `<div style="margin-bottom:10px;">${svgIndustry}</div>`);
    content = content.replace(/<div style="font-size:2rem;margin-bottom:10px;">⚡<\/div>/g, `<div style="margin-bottom:10px;">${svgIndustry}</div>`);
    content = content.replace(/<div style="font-size:2rem;margin-bottom:10px;">💧<\/div>/g, `<div style="margin-bottom:10px;">${svgIndustry}</div>`);
    content = content.replace(/<div style="font-size:2rem;margin-bottom:10px;">🌿<\/div>/g, `<div style="margin-bottom:10px;">${svgIndustry}</div>`);

    // Hardware icons
    content = content.replace(/<div class="service-icon">⚡<\/div>/g, `<div class="service-icon">${svgIndustry}</div>`);
    content = content.replace(/<div class="service-icon">🛡️<\/div>/g, `<div class="service-icon">${svgIndustry}</div>`);
    content = content.replace(/<div class="service-icon">🔌<\/div>/g, `<div class="service-icon">${svgIndustry}</div>`);
    content = content.replace(/<div class="service-icon">🔋<\/div>/g, `<div class="service-icon">${svgIndustry}</div>`);
  }
  
  // Replace handshake in trust sections globally
  content = content.replace(/<div style="font-size:3rem;margin-bottom:16px;">🤝<\/div>/g, `<div style="margin-bottom:16px;">${svgHandshake}</div>`);

  // Strip all other remaining emojis
  content = content.replace(emojiRegex, '');
  
  // Remove empty service-icons if any emojis were stripped directly
  content = content.replace(/<div class="service-icon"><\/div>/g, `<div class="service-icon">${svgIndustry}</div>`);

  fs.writeFileSync(file, content, 'utf8');
});
console.log('Cleaned all emojis');
