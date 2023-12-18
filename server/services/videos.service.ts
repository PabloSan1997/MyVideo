import { AppDataSource } from '../db/config';
import { Portada } from '../db/models/Portada';
import { Videos } from '../db/models/Videos';
import { UsuarioService } from './usuario.service';
import Boom from '@hapi/boom';

const serviciosUser = new UsuarioService();
const respositorioPortada = AppDataSource.getRepository(Portada);
const respositorioVideo = AppDataSource.getRepository(Videos);

export class VideosService {
	async menuVideos(token: string) {
		const { rol } = await serviciosUser.procesarToken(token);
		if (rol !== 'admin' && rol !== 'user') throw Boom.badRequest('No tienes permiso para esta accion');
		const portadas = await respositorioPortada.find();
		return portadas;
	}
	async menuUnVideo(token: string, id_portada: string) {
		const { rol } = await serviciosUser.procesarToken(token);
		if (rol !== 'admin' && rol !== 'user') throw Boom.badRequest('No tienes permiso para esta accion');
		const portada = await respositorioPortada.findOne({ where: { id_portada }, relations: { videos: true } });
		if (!portada) throw Boom.notFound('No se encontró video');
		const { videos } = portada;
		return videos;
	}
	async agregarVideo(token: string, nuevoVideo: VideosRequest) {
		const { rol } = await serviciosUser.procesarToken(token);
		if (rol !== 'admin') throw Boom.badRequest('No tienes permiso para esto');
		const { nombre, miniDesc, url_image, descripcion, url_video } = nuevoVideo;
		const miPortada = { nombre, miniDesc, url_image };
		const miVideo = { descripcion, url_video };
		const portada = respositorioPortada.create(miPortada);
		const video = respositorioVideo.create(miVideo);
		await respositorioPortada.manager.save(portada);
		video.portada = portada;
		await respositorioVideo.manager.save(video);
		const mostrar = await respositorioPortada.findOne({
			where:{
				id_portada:portada.id_portada
			},
			relations:{
				videos:true
			}
		});
		if(!mostrar) throw Boom.badImplementation();
		return mostrar;
	}
}