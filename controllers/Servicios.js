import model from '../models';
// import {onUpdate} from '../data/on_update_req.body'

export default {
    add: async (req, res, next) =>{
        try {    
            const reg = await model.Servicios.create(req.body);
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(error);
        }
    },
    list: async (req,res, next) =>{
        try {
            const reg = await model.Servicios.find();
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(error);
        }
    },
    query: async(req, res, next) => {
        try {
            const reg = await model.Servicios.findOne({_id: req.query._id});
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(error); 
        }
    },
    update: async( req, res, next ) => {
        try {
            const reg = await model.Servicios.findByIdAndUpdate({_id: req.query._id}, {
                $Servicios:{
                    $Problema: req.body.Problema,
                    $Solucion: req.body.Solucion,
                    $Observacion: req.body.Observacion,
                    $Fecha: req.body.Fecha,
                    $HoraInicio: req.body.HoraInicio, 
                    $HoraFin: req.body.HoraFin,
                },
                $Clientes:{
                    $Empresa: req.body.Empresa,
                    $Usuario: req.body.Usuario,
                    $Telefono: req.body.Telefono,
                    $Contacto: req.body.Contacto,
                    $Cargo: req.body.Cargo,
                    $CorreoElctronico: req.body.CorreoElctronico
                },
                $Personal:{
                    $Nomber: req.body.Nomber,
                    $Celular: req.body.Celular,
                    $CorreoElctronico: req.body.CorreoElctronico
                },
                $Equipos:{
                    $TipoEquipo: req.body.TipoEquipo,
                    $Descripcion: req.body.Descripcion
                },
                $Visita:{
                    $TipoVisita: req.body.TipoVisita,
                    $Descripcion: req.body.Descripcion
                }
            })
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(error); 
        }
    },
    delete: async (req, res, next) =>{
        try {
            const reg = await model.Servicios.findByIdAndDelete({_id: req.body._id});
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(error); 
        }
    }
};