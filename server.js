import express from'express'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// Servir os arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));
app.use("/src", express.static(path.join(__dirname, "src")));
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));

// Configurar a porta
const PORT = process.env.PORT || 80;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});