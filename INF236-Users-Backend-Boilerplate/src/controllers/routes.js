import UserController from './UserController.js';
import dicomRoutes from './dicomRoutes.js';
import Header from '../models/Header.js';  // Agregar la importación del modelo Header

export default (app) => {
  const userController = new UserController();

  // Rutas de usuarios
  app.get('/users', userController.getAll);
  app.post('/users', userController.create);
  app.get('/users/:userId', userController.get);
  app.put('/users/:userId', userController.update);
  app.delete('/users/:userId', userController.delete);

  // Rutas de DICOM
  app.use('/dicom', dicomRoutes);

  // Nueva ruta para obtener todos los Headers
  app.get('/dicom/headers', async (req, res) => {
    try {
      const headers = await Header.findAll();
      res.json(headers);
    } catch (error) {
      console.error('Error fetching headers:', error);
      res.status(500).send('Error fetching headers');
    }
  });
};
