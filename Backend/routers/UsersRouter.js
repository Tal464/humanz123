import { Router } from 'express';
import UsersController from '../controllers/UsersController.js';

const getUsersRouter = Router();
getUsersRouter.post('/fetch', UsersController.fetchData);
getUsersRouter.post('/getNumber', UsersController.getNumber);
getUsersRouter.post('/addUser', UsersController.addUser);
getUsersRouter.delete('/deleteUser', UsersController.deleteUser)
export default getUsersRouter;
