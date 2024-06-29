import express from 'express';
import cors from 'cors';
import routes from './controllers/routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());

// Configuración para servir archivos estáticos desde la carpeta 'uploads'
const uploadsPath = path.join(__dirname, '..', 'uploads');
app.use('/uploads', express.static(uploadsPath));

console.log('Ruta de uploads:', uploadsPath); // Para verificar la ruta

routes(app);

export default app;