import ServiciosController from '../controllers/Servicios';
import Routex from 'express-promise-router';

const router = Routex();


router.get('/list', ServiciosController.list);
router.get('/query', ServiciosController.query);
router.post('/add', ServiciosController.add);
router.put('/update', ServiciosController.update);
router.delete('/delete', ServiciosController.delete);   


export default router;