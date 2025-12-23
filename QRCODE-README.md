# 🚂 Gerador de QR Code para Railway

Ferramentas para gerar QR Code do link do seu site no Railway e compartilhar facilmente!

## 📋 Opções Disponíveis

### Opção 1: Página HTML (Recomendado) ⭐

A forma mais fácil e visual!

1. **Abra o arquivo `qrcode-railway.html` no seu navegador**
2. **Cole o link do Railway** (ex: `https://seu-projeto.up.railway.app`)
3. **Clique em "Gerar QR Code"**
4. **Compartilhe o QR Code** - tire uma foto da tela ou salve a imagem

✅ **Vantagens:**
- Funciona imediatamente, sem instalar nada
- Interface visual e fácil de usar
- Pode copiar o link facilmente
- Salva o link automaticamente para uso futuro

---

### Opção 2: Script Node.js (Linha de Comando)

Para quem prefere usar o terminal.

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Gere o QR Code:**
   ```bash
   node generate-qrcode.js https://seu-projeto.up.railway.app
   ```

   Ou use o script npm:
   ```bash
   npm run qrcode https://seu-projeto.up.railway.app
   ```

3. **Arquivos gerados:**
   - `qrcode-railway.svg` - Versão vetorial (pode aumentar sem perder qualidade)
   - `qrcode-railway.png` - Versão em imagem

---

## 🔗 Como Obter o Link do Railway

Após fazer o deploy no Railway:

1. Acesse o dashboard do Railway
2. Selecione seu projeto
3. Vá em **Settings** → **Domains**
4. Você verá um link temporário como: `https://seu-projeto.up.railway.app`
5. Use esse link para gerar o QR Code!

---

## 📱 Como Compartilhar

### Opção A: Compartilhar a Tela
- Abra `qrcode-railway.html` no navegador
- Gere o QR Code
- Tire uma captura de tela
- Compartilhe a imagem

### Opção B: Salvar a Imagem
- Use o script Node.js para gerar PNG/SVG
- Compartilhe o arquivo gerado

### Opção C: Compartilhar o Link Direto
- Copie o link do Railway
- Compartilhe diretamente (WhatsApp, email, etc.)

---

## 💡 Dicas

- O link temporário do Railway funciona mesmo sem domínio customizado
- O QR Code pode ser escaneado por qualquer leitor de QR Code
- Teste o QR Code antes de compartilhar amplamente
- O link é salvo automaticamente no navegador (Opção 1)

---

## 🎯 Exemplo de Uso

```
1. Deploy no Railway ✅
2. Link recebido: https://interacao-comunicacao.up.railway.app
3. Abrir qrcode-railway.html
4. Colar o link
5. Gerar QR Code
6. Compartilhar! 🎉
```

---

**Pronto para compartilhar seu site! 🚀**
