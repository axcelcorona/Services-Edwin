import model from '../models';


export default{
    add: async (req, res, next) => {
        try {
            const reg = await model.Usuario.create(req.body);
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(error);
        }
    },
    list: async(req, res, next) => {
        try {
            const reg = await model.Usuario.find();
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(error);
        }
    }

};