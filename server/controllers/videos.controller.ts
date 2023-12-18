import { Request, Response, NextFunction } from 'express';
import { VideosService } from '../services/videos.service';
import { respuestaFormat } from '../utilities/responseFormat';

const servicios = new VideosService();

export class VideosController {
	async leerVideos(req: Request, res: Response, next: NextFunction) {
		try {
			const { autorization } = req.headers as { autorization: string };
			const videos = await servicios.menuVideos(autorization);
			respuestaFormat(res, videos);
		} catch (error) {
			next(error);
		}
	}
	async leerUnSoloVideo(req: Request, res: Response, next: NextFunction) {
		try {
			const { autorization } = req.headers as { autorization: string };
			const { id_portada } = req.params as { id_portada: string };
			const video = await servicios.menuUnVideo(autorization, id_portada);
			respuestaFormat(res, video);
		} catch (error) {
			next(error);
		}
	}
	async agregarVideo(req: Request, res: Response, next: NextFunction) {
		try {
			const { autorization } = req.headers as { autorization: string };
			const data = req.body as VideosRequest;
			const nuevoVideo = await servicios.agregarVideo(autorization, data);
			respuestaFormat(res, nuevoVideo, 201, 'Element created');
		} catch (error) {
			next(error);
		}
	}
	async eliminarVideo(req: Request, res: Response, next: NextFunction) {
		try {
			const { autorization } = req.headers as { autorization: string };
			const { id_video } = req.params as { id_video: string };
			await servicios.eliminarVideo(autorization, id_video);
			res.sendStatus(204);
		} catch (error) {
			next(error);
		}
	}
}