const fs = require('fs');

// 1. Remove from all HTML files
const htmlFiles = [
  ...fs.readdirSync('.').filter(f => f.endsWith('.html')),
  ...(fs.existsSync('src/partials') ? fs.readdirSync('src/partials').filter(f => f.endsWith('.html')).map(f => 'src/partials/' + f) : [])
];

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Remove the toggle button
  content = content.replace(/<button class="theme-toggle"[\s\S]*?<\/button>\s*/, '');
  fs.writeFileSync(file, content, 'utf8');
});

// 2. Remove from main.css
let css = fs.readFileSync('src/styles/main.css', 'utf8');
// Remove data-theme="dark" block
css = css.replace(/\[data-theme="dark"\]\s*{[^}]*}/, '');
// Remove comments referencing dark theme
css = css.replace(/Light theme default, Dark theme via \[data-theme="dark"\]/, 'Light theme default');
fs.writeFileSync('src/styles/main.css', css, 'utf8');

// 3. Remove from main.ts
let ts = fs.readFileSync('src/ts/main.ts', 'utf8');
// Remove the functions
ts = ts.replace(/const THEME_KEY = 'et-theme'[\s\S]*?function toggleTheme\(\): void {[\s\S]*?}[\r\n]*/, '');
// Remove the event listener
ts = ts.replace(/\s*\/\/ Theme toggle[\s\S]*?toggleTheme\)/, '');
// Remove the init call
ts = ts.replace(/\s*initTheme\(\)/, '');
fs.writeFileSync('src/ts/main.ts', ts, 'utf8');

console.log('Dark theme logic removed successfully');
