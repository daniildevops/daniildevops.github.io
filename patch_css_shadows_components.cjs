const fs = require('fs');

const cssPath = 'src/styles/components.css';
let content = fs.readFileSync(cssPath, 'utf8');

// Replace blue glowing shadows with neutral ones or remove the glow
content = content.replace(/box-shadow: var\(--shadow-accent\);/g, 'box-shadow: var(--shadow-sm);');
content = content.replace(/box-shadow: 0 0 0 3px var\(--clr-accent-glow\);/g, 'outline: 2px solid var(--clr-accent); outline-offset: 2px; border-color: transparent; box-shadow: none;');

fs.writeFileSync(cssPath, content, 'utf8');
console.log('components.css shadows updated');
