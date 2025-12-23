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
  let urlPath = req.url.split('?')[0].split('#')[0];
  
  // SEMPRE servir index.html da raiz quando acessar a rota principal
  if (urlPath === '/' || urlPath === '') {
    urlPath = '/index.html';
  }
  
  // Construir caminho do arquivo
  let filePath = path.join(__dirname, urlPath);
  
  // Normalizar o caminho para evitar problemas com ../
  filePath = path.normalize(filePath);
  
  // Segurança: garantir que não saia do diretório do projeto
  if (!filePath.startsWith(__dirname)) {
    filePath = path.join(__dirname, 'index.html');
  }

  // Verificar se o arquivo existe
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // Arquivo não encontrado - SEMPRE servir index.html da raiz
      const indexPath = path.join(__dirname, 'index.html');
      fs.readFile(indexPath, (error, content) => {
        if (error) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(`
            <html>
              <body>
                <h1>404 - Página não encontrada</h1>
                <p>O index.html não foi encontrado.</p>
              </body>
            </html>
          `);
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content, 'utf-8');
        }
      });
    } else {
      // Arquivo existe, ler e servir
      const extname = String(path.extname(filePath)).toLowerCase();
      const contentType = mimeTypes[extname] || 'application/octet-stream';
      
      fs.readFile(filePath, (error, content) => {
        if (error) {
          res.writeHead(500);
          res.end(`Server Error: ${error.code}`);
        } else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content, 'utf-8');
        }
      });
    }
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📁 Servindo arquivos estáticos de: ${__dirname}`);
});
