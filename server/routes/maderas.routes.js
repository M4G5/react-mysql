import {Router} from 'express';
import { getMaderas,getMadera,updateMaderas,deleteMaderas, createMaderas } from '../controllers/maderas.controllers.js';
const routes = Router();

routes.get('/maderas', getMaderas);

routes.post('/maderas', createMaderas);

routes.put('/maderas/:id', updateMaderas);

routes.get('/maderas/:id', getMadera);

routes.delete('/maderas/:id', deleteMaderas);

export default routes;