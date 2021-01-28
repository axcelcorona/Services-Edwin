import ServiciosRouter from './Servicions';
import UserRouter from './UserRouter';
import Routex from 'express-promise-router';

const router = Routex();

router.use('/servicios', ServiciosRouter);
router.use('/user', UserRouter);

export default router;