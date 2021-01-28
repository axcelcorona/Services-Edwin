import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    Nombre: {type: String, required: true},
    CorreoElectronico: {type: String, required: true},
    Contraseña: {type: String, reuired: true}
});

const Usuario = mongoose.model('Usuarios', userSchema);

export default Usuario;