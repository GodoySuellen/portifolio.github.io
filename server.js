import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs'; // Alteração: Removido o uso de { fs } e importado diretamente 'fs'
import https from 'https'; // Alteração: Importar diretamente 'https'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// Servir os arquivos estáticos
app.use(express.static(path.join(__dirname, "./")));
app.use("/src", express.static(path.join(__dirname, "src")));
app.use("/node_modules", express.static(path.join(__dirname, "node_modules"))); // Corrigido para usar "/node_modules" em vez de "./node_modules"
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist'))); // Corrigido para usar '/' antes de 'bootstrap' para indicar que é um caminho absoluto


const options = {
  key: fs.readFileSync("certificado.key"),
  cert: fs.readFileSync("certificado.cert")
};

// Configurar a porta
const PORT = process.env.PORT || 80;
if (process.env.NODE_ENV !== 'production') {
  // Iniciar o servidor apenas em ambiente de desenvolvimento
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });

  // Cria a instância do server e escuta na porta 3000
    //https.createServer(options, app).listen(PORT);

}