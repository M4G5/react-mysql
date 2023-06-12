import express from 'express';
import cors from 'cors';
import { PORT } from './config.js';
import indexRoutes  from './routes/index.routes.js'
import maderasRoutes from './routes/maderas.routes.js'

const app = express();

app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(maderasRoutes);

app.listen(4000);
console.log(`Server ejecutando en el puerto ${PORT}`);