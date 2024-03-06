import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// Servir os arquivos estáticos
app.use(express.static(path.join(__dirname, "./")));
app.use("/src", express.static(path.join(__dirname, "src")));
app.use("/node_modules", express.static(path.join(__dirname, "node_modules"))); // Corrigido para usar "/node_modules" em vez de "./node_modules"
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist'))); // Corrigido para usar '/' antes de 'bootstrap' para indicar que é um caminho absoluto

// Configurar a porta
const PORT = process.env.PORT || 80;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});