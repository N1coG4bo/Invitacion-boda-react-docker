// prerender.js
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

async function buildStaticPages() {
  const template = fs.readFileSync(toAbsolute('dist/public/index.html'), 'utf-8');
  const { render } = await import('./dist/server/entry-server.js');

  const routesToPrerender = ['/', '/invitacion', '/404'];

  for (const url of routesToPrerender) {
    const appHtml = render(url);
    
    // TÉCNICA SENIOR: Usamos split() en lugar de replace().
    // Divide el documento exactamente en la etiqueta, inyecta el HTML, y vuelve a unir.
    // Esto evita bloqueos del IDE y vulnerabilidades del símbolo '$'.
    const parts = template.split('<div id="root">');
    const html = parts[0] + '<div id="root">' + appHtml + parts[1];
    
    const filePath = url === '/' ? 'index.html' : `${url.replace(/^\//, '')}/index.html`;
    const absoluteFilePath = toAbsolute(`dist/public/${filePath}`);
    
    fs.mkdirSync(path.dirname(absoluteFilePath), { recursive: true });
    fs.writeFileSync(absoluteFilePath, html);
    
    console.log(`[SSG] Ruta estática generada en disco: /dist/public/${filePath}`);
  }
}

buildStaticPages();