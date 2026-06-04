// scripts/resize-hero.js
const sharp = require('sharp');
const path = require('path');

const input = path.resolve(__dirname, '../src/assets/tu-imagen-original.jpg'); // <- cambia el nombre
const outDir = path.resolve(__dirname, '../public/images'); // o la carpeta que uses

const variants = [
  { name: 'hero-2560', w: 2560, h: 1080, pos: 'centre' },
  { name: 'hero-1920', w: 1920, h: 1080, pos: 'centre' },
  { name: 'hero-1200', w: 1200, h: 800, pos: 'centre' },
  // mobile vertical (art direction): usamos position 'north' para subir el encuadre
  { name: 'hero-800',  w: 800,  h: 1200, pos: 'north' },
  { name: 'hero-480',  w: 480,  h: 800,  pos: 'north' }
];

(async () => {
  try {
    for (const v of variants) {
      const base = path.join(outDir, v.name);

      // WebP
      await sharp(input)
        .resize(v.w, v.h, { fit: 'cover', position: v.pos })
        .webp({ quality: 80 })
        .toFile(`${base}.webp`);

      // JPEG fallback
      await sharp(input)
        .resize(v.w, v.h, { fit: 'cover', position: v.pos })
        .jpeg({ quality: 75 })
        .toFile(`${base}.jpg`);

      console.log(`Generado: ${v.name}.webp / ${v.name}.jpg`);
    }
    console.log('Todas las variantes generadas correctamente.');
  } catch (err) {
    console.error('Error al procesar imágenes:', err);
  }
})();
