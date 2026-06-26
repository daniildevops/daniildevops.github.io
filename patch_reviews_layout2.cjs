const fs = require('fs');

let html = fs.readFileSync('reviews.html', 'utf8');

// Regex to capture:
// 1. opening div
// 2. iframe
// 3. padding div
// 4. h3
// 5. the rest (p and div>a)
const regex = /(<div class="review-card[^>]*>)\s*(<iframe[^>]*><\/iframe>)\s*<div style="padding: 24px;">\s*(<h3[^>]*>.*?<\/h3>)\s*([\s\S]*?)<\/div>\s*<\/div>/g;

html = html.replace(regex, (match, p1, p2, p3, p4) => {
  // Strip margin-bottom from h3 so it looks good inside its own container
  let h3Clean = p3.replace(/margin-bottom:8px;/, 'margin-bottom:0;');
  return `${p1}
        <div style="padding: 20px 24px; border-bottom: 1px solid var(--clr-border); background: var(--clr-bg-alt);">
          ${h3Clean}
        </div>
        ${p2}
        <div style="padding: 24px;">
          ${p4.trim()}
        </div>
      </div>`;
});

fs.writeFileSync('reviews.html', html, 'utf8');
console.log('Moved H3 above iframe in reviews.html');
