import UserController from './UserController.js';

export default (app) => {
	const userController = new UserController();

	app.get('/users', userController.getAll);
	app.post('/users', userController.create);
	app.get('/users/:userId', userController.get);
	app.put('/users/:userId', userController.update);
	app.delete('/users/:userId', userController.delete);
};