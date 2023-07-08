import { Router } from 'express';
import UsersController from '../controllers/UsersController.js';

const getUsersRouter = Router();
getUsersRouter.post('/fetch', UsersController.fetchData);
getUsersRouter.post('/getNumber', UsersController.getNumber);
getUsersRouter.post('/addUser', UsersController.addUser);
// const getUsersRouter = () => {
//   const router = Router();
//   router.post('/fetch', UsersController.fetchData);
// //   router.post('/create', UsersController.addUser);
// //   router.delete('/delete', UsersController.deleteUser);

//   return router;
// };

export default getUsersRouter;
