import { AppDataSource } from '../db/config';
import { Usuario } from '../db/models/Usuario';
import { sign, verify } from 'jsonwebtoken';
import { variables } from '../utilities/envVariables';
import bcrypt, { hash } from 'bcrypt';
import Boom from '@hapi/boom';

const repositorio = AppDataSource.getRepository(Usuario);
export class UsuarioService {
	async addData(data: UsuarioAgregar): Promise<Usuario> {
		try {
			const nuevoUsuario = repositorio.create(data);
			nuevoUsuario.password = await bcrypt.hash(nuevoUsuario.password, 6);
			await repositorio.manager.save(nuevoUsuario);
			return nuevoUsuario;
		} catch (error) {
			throw Boom.badRequest('No se puede agregar usuario');
		}
	}
	async checUser(log: UsuarioLogin) {
		const ver = await repositorio.findOne({ where: { userName: log.userName } });
		if (!ver) throw Boom.badRequest('Contraseña o usuario Incorrectos');

		const checar = await bcrypt.compare(log.password, ver.password);
		if (!checar) throw Boom.badRequest('Contraseña o usuario Incorrectos');

		const password = await hash(log.password, 8);
		await repositorio.update({ id_usuario: ver.id_usuario }, { password });

		const token = await this.generarToken(ver);
		if (!token) throw Boom.badRequest('No tienes permiso');
		const modo = ver.rol === 'admin';
		return { token, name: ver.name, url_image: ver.url_image, modo };
	}
	async procesarToken(token: string) {
		const ver = await this.decodificarToken(token);
		if (typeof ver == 'string') throw Boom.badRequest(ver);
		const { rol, user } = ver;
		const buscar = await repositorio.findOneBy({ id_usuario: user });
		if (!buscar) throw 'No tienes permiso para esta accion';
		return { rol };
	}
	private async generarToken(usu: UsuarioInterface) {
		try {
			const generar: TokenResponse = {
				user: usu.id_usuario,
				rol: usu.rol
			};
			const ver = sign(generar, variables.key);
			return ver;
		} catch (error) {
			return false;
		}
	}
	private async decodificarToken(token: string) {
		try {
			const data = verify(token, variables.key) as TokenResponse;
			return data;
		} catch (error) {
			return 'No tienes permiso';
		}
	}
}