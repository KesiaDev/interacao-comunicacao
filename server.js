/**
 * Servidor simples para servir arquivos estáticos no Railway
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;

// MIME types para diferentes extensões
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.woff2': 'application/font-woff2',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf'
};

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // Remover query string e hash
  let filePath = '.' + req.url.split('?')[0].split('#')[0];
  
  // Normalizar caminho - garantir que sempre sirva index.html da raiz para a rota principal
  if (filePath === './' || filePath === '/') {
    filePath = './index.html';
  }
  
  // Se não tiver extensão e não for uma rota conhecida, tentar index.html
  if (!path.extname(filePath) && !filePath.includes('.')) {
    const testPath = filePath + '.html';
    if (fs.existsSync(testPath)) {
      filePath = testPath;
    } else {
      filePath = './index.html';
    }
  }

  // Garantir que caminhos relativos sejam resolvidos corretamente
  filePath = path.normalize(filePath);
  
  // Segurança: não permitir acesso a arquivos fora do diretório
  if (!filePath.startsWith('.')) {
    filePath = '.' + filePath;
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // Arquivo não encontrado, SEMPRE tentar index.html da raiz
        if (filePath !== './index.html' && !filePath.endsWith('index.html')) {
          fs.readFile('./index.html', (error, content) => {
            if (error) {
              res.writeHead(404, { 'Content-Type': 'text/html' });
              res.end(`
                <html>
                  <body>
                    <h1>404 - Arquivo não encontrado</h1>
                    <p>O arquivo solicitado não foi encontrado.</p>
                    <a href="/">Voltar para a página inicial</a>
                  </body>
                </html>
              `);
            } else {
              res.writeHead(200, { 'Content-Type': 'text/html' });
              res.end(content, 'utf-8');
            }
          });
        } else {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(`
            <html>
              <body>
                <h1>404 - Página não encontrada</h1>
                <p>O index.html não foi encontrado no diretório raiz.</p>
              </body>
            </html>
          `);
        }
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📁 Servindo arquivos estáticos de: ${__dirname}`);
});
