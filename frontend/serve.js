// serve.js
import sirv from 'sirv';
import { createServer } from 'http';
import { resolve } from 'path';

const PORT = 3000;

const serve = sirv(resolve('dist'), {
  single: true, // ✅ fallback pour toutes les routes (ex: /collection/1)
  dev: true
});

createServer((req, res) => {
  serve(req, res);
}).listen(PORT, () => {
  console.log(`✅ Serveur SPA démarré sur http://localhost:${PORT}`);
});
