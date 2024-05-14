import express from 'express';
import cors from 'cors';
import routes from './controllers/routes.js';


const app = express();  // Instanciamos el servidor web
app.use(express.json());// Habilitamos el parsing automático de requests en JSON, para su posterior uso
app.use(cors());		// Desactivamos las políticas CORS (para aceptar solicitudes desde cualquier dominio)
routes(app);			// Añadimos las rutas de nuestro backend al servidor web

export default app;