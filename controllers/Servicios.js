import model from '../models';

export default {
    add: async (res , req, next) =>{
        try {    
            const reg = await model.Servicios.create(req.body);
            res.send(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(error)
        }
    },
    list: async (res, req, next) =>{
        try {
            const reg = await model.Servicios.find();
            res.send(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(error)
        }
    }
};