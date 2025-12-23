/**
 * Servidor simples para servir arquivos estáticos no Railway
 * GARANTE que sempre serve o index.html correto da raiz
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

// Caminho absoluto para o index.html da raiz
const INDEX_HTML = path.join(__dirname, 'index.html');

// Função para servir o index.html da raiz
function serveIndexHtml(res) {
  fs.readFile(INDEX_HTML, (error, content) => {
    if (error) {
      console.error(`❌ ERRO CRÍTICO ao ler index.html: ${error.message}`);
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end(`
        <html>
          <body>
            <h1>Erro: index.html não encontrado</h1>
            <p>${error.message}</p>
            <p>Caminho esperado: ${INDEX_HTML}</p>
          </body>
        </html>
      `);
    } else {
      console.log(`✅ index.html da raiz servido (${content.length} bytes)`);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content, 'utf-8');
    }
  });
}

const server = http.createServer((req, res) => {
  console.log(`\n📥 ${req.method} ${req.url}`);

  // Remover query string e hash
  let urlPath = req.url.split('?')[0].split('#')[0];
  
  // BLOQUEAR TOTALMENTE acesso a pastas src, pages, components, node_modules, public
  if (urlPath.startsWith('/src/') || 
      urlPath.startsWith('/pages/') || 
      urlPath.startsWith('/components/') ||
      urlPath.startsWith('/node_modules/') ||
      urlPath.startsWith('/.git/') ||
      urlPath.startsWith('/public/')) {
    console.log(`🚫 Acesso bloqueado a: ${urlPath} - servindo index.html da raiz`);
    serveIndexHtml(res);
    return;
  }
  
  // SEMPRE servir index.html da raiz quando acessar a rota principal
  if (urlPath === '/' || urlPath === '' || urlPath === '/index' || urlPath === '/index.html') {
    console.log(`✅ Rota raiz detectada - servindo index.html da raiz`);
    serveIndexHtml(res);
    return;
  }
  
  // Construir caminho do arquivo
  let filePath = path.join(__dirname, urlPath);
  
  // Normalizar o caminho
  filePath = path.normalize(filePath);
  
  // Segurança: garantir que não saia do diretório do projeto
  const rootDir = path.normalize(__dirname);
  if (!filePath.startsWith(rootDir)) {
    console.log(`⚠️  Tentativa de acesso fora do diretório - servindo index.html`);
    serveIndexHtml(res);
    return;
  }

  // Verificar se o arquivo existe
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // Arquivo não encontrado - SEMPRE servir index.html da raiz
      console.log(`❌ Arquivo não encontrado: ${filePath} - servindo index.html`);
      serveIndexHtml(res);
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
        serveIndexHtml(res);
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
  console.log(`📄 index.html localizado em: ${INDEX_HTML}`);
  
  // Verificar se index.html existe
  fs.access(INDEX_HTML, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`❌ ERRO: index.html não encontrado em ${INDEX_HTML}`);
    } else {
      console.log(`✅ index.html encontrado e pronto para servir`);
    }
  });
});
