import Routex from 'express-promise-router';
import UserController from '../controllers/userController';

const router = Routex();

router.get('/list', UserController.list);
router.post('/add', UserController.add);
router.get('/query', UserController.query);

export default router;