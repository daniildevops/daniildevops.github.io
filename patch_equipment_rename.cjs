const fs = require('fs');

const files = [
  ...fs.readdirSync('.').filter(f => f.endsWith('.html')),
  ...(fs.existsSync('src/partials') ? fs.readdirSync('src/partials').filter(f => f.endsWith('.html')).map(f => 'src/partials/' + f) : [])
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/>Оборудование</g, '>Оборудование и услуги<');
  fs.writeFileSync(file, content, 'utf8');
});
console.log('Renamed equipment to equipment and services');
