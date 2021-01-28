import ServiciosRouter from './Servicions';
import Routex from 'express-promise-router';

const router = Routex();

router.use('/servicios', ServiciosRouter);

export default router;