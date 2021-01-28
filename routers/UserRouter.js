import Routex from 'express-promise-router';
import UserController from '../controllers/userController';

const router = Routex();

router.get('/list', UserController.list);
router.post('/add', UserController.add);
router.get('/query', UserController.query);
router.put('/update', UserController.update);
router.delete('/delete', UserController.delete);

export default router;