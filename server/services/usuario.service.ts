import { AppDataSource } from '../db/config';
import { Usuario } from '../db/models/Usuario';
import {sign, verify} from 'jsonwebtoken';
import { variables } from '../utilities/envVariables';

const repositorio = AppDataSource.getRepository(Usuario);
export class UsuarioService{
	async addData(data:UsuarioAgregar):Promise<Usuario>{
		const nuevoUsuario = repositorio.create(data);
		await repositorio.manager.save(nuevoUsuario);
		return nuevoUsuario;
	}
	async checUser(log:UsuarioLogin){
		const ver = await  repositorio.findOne({where:log});
		if(!ver) throw 'Usuario o contra no encontradas';
		const token = await this.generarToken(ver);
		return {token};
	}
	private async generarToken(usu:UsuarioInterface){
		const generar:TokenResponse = {
			user:usu.id_usuario,
			rol:usu.rol
		};
		const ver = sign(generar, variables.key);
		return ver;
	}
	private async decodificarToken(token:string){
		const data = verify(token, variables.key) as TokenResponse;
		return data;
	}
}