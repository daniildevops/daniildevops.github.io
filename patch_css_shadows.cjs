const fs = require('fs');

const cssPath = 'src/styles/main.css';
let content = fs.readFileSync(cssPath, 'utf8');

// Replace blue shadows with a neutral shadow or remove them
content = content.replace(/box-shadow: var\(--shadow-accent\);/g, 'box-shadow: var(--shadow-sm);');
content = content.replace(/box-shadow: 0 12px 40px rgba\(0, 91, 234, 0\.30\);/g, 'box-shadow: var(--shadow-md);');

fs.writeFileSync(cssPath, content, 'utf8');
console.log('CSS shadows updated');
