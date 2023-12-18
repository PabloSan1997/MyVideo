import express from 'express';
import { VideosController } from '../controllers/videos.controller';

const controlador = new VideosController();
export const videosRoutes = express.Router();


videosRoutes.get('/', controlador.leerVideos);
videosRoutes.get('/:id_portada', controlador.leerUnSoloVideo);
videosRoutes.post('/', controlador.agregarVideo);
videosRoutes.delete('/:id_video', controlador.eliminarVideo);
