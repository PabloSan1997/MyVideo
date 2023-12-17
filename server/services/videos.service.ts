import { AppDataSource } from '../db/config';
import { Portada } from '../db/models/Portada';
import { UsuarioService } from './usuario.service';


const serviciosUser = new UsuarioService();
const respositorioPortada = AppDataSource.getRepository(Portada);

export class VideosService{
	async menuVideos(token:string){
		const {rol} = await serviciosUser.procesarToken(token);
		if(rol!=='admin'&&rol!=='user') throw 'No puedes';
		const portadas = await respositorioPortada.find();
		return portadas;
	}
	async menuUnVideo(token:string, id_portada:string){
		const {rol} = await serviciosUser.procesarToken(token);
		if(rol!=='admin'&&rol!=='user') throw 'No puedes';
		const portada = await respositorioPortada.findOne({where:{id_portada}, relations:{videos:true}});
		if(!portada) throw 'No se encontro video';
		const {videos} = portada;
		return videos;
	}
}