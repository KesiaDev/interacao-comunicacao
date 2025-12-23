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
  console.log(`\n📥 ${req.method} ${req.url}`);

  // Remover query string e hash
  let urlPath = req.url.split('?')[0].split('#')[0];
  
  // BLOQUEAR acesso a pastas src, pages, components, node_modules, public
  if (urlPath.startsWith('/src/') || 
      urlPath.startsWith('/pages/') || 
      urlPath.startsWith('/components/') ||
      urlPath.startsWith('/node_modules/') ||
      urlPath.startsWith('/.git/') ||
      urlPath.startsWith('/public/')) {
    console.log(`🚫 Acesso bloqueado a: ${urlPath} - redirecionando para index.html`);
    urlPath = '/index.html';
  }
  
  // SEMPRE servir index.html da raiz quando acessar a rota principal
  if (urlPath === '/' || urlPath === '' || urlPath === '/index') {
    urlPath = '/index.html';
    console.log(`✅ Rota raiz detectada - servindo index.html`);
  }
  
  // Não fazer nada especial se já for index.html
  if (urlPath === '/index.html') {
    // Continuar normalmente
  }
  
  // Construir caminho do arquivo
  let filePath = path.join(__dirname, urlPath);
  
  // Normalizar o caminho para evitar problemas com ../
  filePath = path.normalize(filePath);
  
  // Segurança: garantir que não saia do diretório do projeto
  const rootDir = path.normalize(__dirname);
  if (!filePath.startsWith(rootDir)) {
    console.log(`⚠️  Tentativa de acesso fora do diretório - redirecionando para index.html`);
    filePath = path.join(__dirname, 'index.html');
  }

  // Verificar se o arquivo existe
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // Arquivo não encontrado - SEMPRE servir index.html da raiz
      const indexPath = path.join(__dirname, 'index.html');
      console.log(`❌ Arquivo não encontrado: ${filePath}`);
      console.log(`📄 Servindo index.html da raiz: ${indexPath}`);
      fs.readFile(indexPath, (error, content) => {
        if (error) {
          console.error(`❌ Erro ao ler index.html: ${error.message}`);
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(`
            <html>
              <body>
                <h1>404 - Página não encontrada</h1>
                <p>O index.html não foi encontrado em: ${indexPath}</p>
              </body>
            </html>
          `);
        } else {
          console.log(`✅ index.html servido com sucesso (${content.length} bytes)`);
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content, 'utf-8');
        }
      });
    } else {
      // Verificar se não está tentando acessar pastas bloqueadas
      const relativePath = path.relative(rootDir, filePath);
      if (relativePath.startsWith('src' + path.sep) || 
          relativePath.startsWith('pages' + path.sep) ||
          relativePath.startsWith('components' + path.sep) ||
          relativePath.startsWith('node_modules' + path.sep) ||
          relativePath.startsWith('public' + path.sep)) {
        // Bloquear e servir index.html
        console.log(`🚫 Tentativa de acesso a pasta bloqueada: ${relativePath}`);
        const indexPath = path.join(__dirname, 'index.html');
        fs.readFile(indexPath, (error, content) => {
          if (error) {
            res.writeHead(404);
            res.end('Not found');
          } else {
            console.log(`✅ index.html servido (bloqueio de pasta)`);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
          }
        });
        return;
      }
      
      // Arquivo existe, ler e servir
      const extname = String(path.extname(filePath)).toLowerCase();
      const contentType = mimeTypes[extname] || 'application/octet-stream';
      
      console.log(`📄 Servindo arquivo: ${filePath} (${contentType})`);
      fs.readFile(filePath, (error, content) => {
        if (error) {
          console.error(`❌ Erro ao ler arquivo: ${error.message}`);
          res.writeHead(500);
          res.end(`Server Error: ${error.code}`);
        } else {
          console.log(`✅ Arquivo servido com sucesso (${content.length} bytes)`);
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
