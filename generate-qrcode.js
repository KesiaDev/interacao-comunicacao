/**
 * Script para gerar QR Code do link do Railway
 * 
 * Uso:
 * node generate-qrcode.js <url-do-railway>
 * 
 * Exemplo:
 * node generate-qrcode.js https://seu-projeto.up.railway.app
 */

const fs = require('fs');
const path = require('path');

// Verificar se a URL foi fornecida
const railwayUrl = process.argv[2];

if (!railwayUrl) {
    console.log('❌ Erro: URL do Railway não fornecida!');
    console.log('\nUso: node generate-qrcode.js <url-do-railway>');
    console.log('Exemplo: node generate-qrcode.js https://seu-projeto.up.railway.app');
    process.exit(1);
}

// Validar URL
try {
    new URL(railwayUrl);
} catch (e) {
    console.log('❌ Erro: URL inválida!');
    process.exit(1);
}

// Tentar usar qrcode (se instalado)
try {
    const QRCode = require('qrcode');
    
    // Gerar QR code como string SVG
    QRCode.toString(railwayUrl, { type: 'svg' }, function (err, string) {
        if (err) {
            console.error('❌ Erro ao gerar QR Code:', err);
            process.exit(1);
        }
        
        // Salvar SVG
        const svgPath = path.join(__dirname, 'qrcode-railway.svg');
        fs.writeFileSync(svgPath, string);
        
        console.log('✅ QR Code gerado com sucesso!');
        console.log(`📁 Arquivo salvo em: ${svgPath}`);
        console.log(`🔗 Link: ${railwayUrl}`);
        console.log('\n💡 Dica: Abra o arquivo SVG em um navegador ou visualizador de imagens.');
    });
    
    // Também gerar como PNG
    QRCode.toFile(path.join(__dirname, 'qrcode-railway.png'), railwayUrl, {
        width: 500,
        margin: 2,
        color: {
            dark: '#000000',
            light: '#FFFFFF'
        }
    }, function (err) {
        if (err) {
            console.error('⚠️  Aviso: Não foi possível gerar PNG:', err.message);
        } else {
            console.log('📸 PNG também gerado: qrcode-railway.png');
        }
    });
    
} catch (e) {
    console.log('⚠️  Biblioteca qrcode não encontrada.');
    console.log('\n📦 Para instalar, execute:');
    console.log('   npm install qrcode');
    console.log('\n💡 Alternativa: Use o arquivo qrcode-railway.html no navegador!');
    console.log(`\n🔗 Seu link do Railway: ${railwayUrl}`);
    process.exit(1);
}
