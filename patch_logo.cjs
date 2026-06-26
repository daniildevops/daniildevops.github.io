const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Replace any <div class="nav-logo-icon">...</div> with the img tag
  content = content.replace(/<div class="nav-logo-icon">[\s\S]*?<\/div>/g, '<img src="./favicon.png" alt="ЭТ" class="nav-logo-icon" style="background:none;box-shadow:none;border-radius:0;width:40px;height:40px;object-fit:contain;" />');

  fs.writeFileSync(file, content, 'utf8');
});
console.log('Logo patched successfully in all HTML files.');
