import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import mongoose from 'mongoose';

import userRoutes from './routes/auth.js';
import courseRoutes from './routes/course.js';

dotenv.config();
const PORT = process.env.PORT || 5000

const app = express();
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}))
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Base de datos conectada'))
.catch(err => console.log('Error de conexion a MongoDb', err))

app.use('/api/auth', userRoutes)
app.use('/api/course', courseRoutes)


app.listen(PORT, () => {
    console.log('El servidor se está ejecutando en el puerto: ', PORT)
})