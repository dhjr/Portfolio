
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectsDir = path.join(__dirname, '../public/projects');

async function convertImages() {
  try {
    const files = fs.readdirSync(projectsDir);

    for (const file of files) {
      if (path.extname(file).toLowerCase() === '.png') {
        const inputPath = path.join(projectsDir, file);
        const outputPath = path.join(projectsDir, path.basename(file, '.png') + '.webp');

        // Check if webp already exists to avoid re-doing work (optional, but good)
        // actually, let's overwrite to ensure latest version
        
        console.log(`Converting ${file} to WebP...`);
        
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        console.log(`Saved to ${path.basename(outputPath)}`);
      }
    }
    console.log('All conversions done!');
  } catch (err) {
    console.error('Error converting images:', err);
  }
}

convertImages();
