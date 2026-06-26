const fs = require('fs');

let html = fs.readFileSync('reviews.html', 'utf8');

// Regex to capture the entire review-card
// We need to capture:
// 1. the opening <div class="review-card ...">
// 2. the <div style="padding: 24px;">...</div>
// 3. the <iframe ...></iframe>
// And then we swap 2 and 3.

const regex = /(<div class="review-card[^>]*>)\s*(<div style="padding: 24px;">[\s\S]*?<\/div>)\s*(<iframe[^>]*><\/iframe>)/g;

html = html.replace(regex, (match, p1, p2, p3) => {
  // modify the iframe style to have border-bottom instead of border-top
  let iframe = p3.replace('border-top: 1px solid var(--clr-border)', 'border-bottom: 1px solid var(--clr-border)');
  return `${p1}\n        ${iframe}\n        ${p2}`;
});

fs.writeFileSync('reviews.html', html, 'utf8');
console.log('Swapped iframe and text in reviews.html');
