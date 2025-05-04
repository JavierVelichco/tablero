const fs = require('fs');
const path = require('path');

const dir = './paginas';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

for (let i = 1; i <= 384; i++) {
  const contenido = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Poema ${i}</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #fafafa;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      text-align: center;
    }
    .poema {
      max-width: 600px;
    }
  </style>
</head>
<body>
  <div class="poema">
    <h1>Poema ${i}</h1>
    <p>Este es un poema ficticio número ${i}. Aquí podrías poner un texto poético o visual.</p>
  </div>
</body>
</html>`;
  fs.writeFileSync(path.join(dir, `poema${i}.html`), contenido);
}

console.log("✅ Archivos generados en la carpeta /paginas.");
