import express from 'express';
import cors from 'cors'
import userRoutes from './src/routes/userRoutes.js';

const app = express();
app.use(cors());
app.use(express.json())

app.use('/user',userRoutes)
app.use('/item',userRoutes)



app.listen(3000, () =>{
    console.log('Listening..');
})