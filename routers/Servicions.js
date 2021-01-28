import ServiciosController from '../controllers/Servicios';
import Routex from 'express-promise-router';

const router = Routex();


router.get('/list', ServiciosController.list);
router.post('/add', ServiciosController.add);
router.get('/query', ServiciosController.query);


export default router;