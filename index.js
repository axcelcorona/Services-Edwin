import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routers';

const app = express();

//data base connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Serviciosdb', {useNewUrlParser: true ,useCreateIndex: true,useUnifiedTopology: true }).then(mongoose => {
    console.log('Coneccion excitosa a la base de datos');
}).catch(error =>{
    console.error('Error en la coneccion a al base de datos', error);
    throw(error);
});



//settigns
app.set('port', process.env.PORT || 3000)


//Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname,'public')));
app.use('/api',router);

app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
})