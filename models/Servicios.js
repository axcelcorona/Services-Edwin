import mongoose, {Schema} from 'mongoose';


const serviciosSchema = new Schema({
    Servicios:{
        Pronela: {type: String, required: true},
        Solucion: {type: String, required: true},
        Observacion: {type: String, required: true},
        Fecha: {type: Date, required: true},
        HoraInicio: {type: String, required: true},
        HoraFin: {type: String, required: true}
    },
    Clientes:{
        Empresa: {type: String, required: true},
        Usuario: {type: String, required: true},
        Telefono: {type: String, required: false},
        Contacto: {type: String, required: false},
        Cargo: {type: String, required: false},
        CorreoElctronico: {type: String, required: false},
    },
    Personal:{
        Nomber:{type: String, required: true},
        Celular: {type: String, required: false},
        CorreoElctronico: {type: String, required: true}
    },
    Equipos:{
        TipoEquipo:{type: String, required: true},
        Descripcion: {type: String, required: true}
    },
    Visita:{
        TipoVisita: {type: String},
        Descripcion: {type: String, required: true}
    }
});

const Servicios = mongoose.model('Servicios', serviciosSchema);


export default Servicios;