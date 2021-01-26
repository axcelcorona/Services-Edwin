import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

//settigns
app.set('port', process.env.PORT || 3000)


//Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname,'public')));


app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
})