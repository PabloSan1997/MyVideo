import { Request, Response, NextFunction } from 'express';
import { UsuarioService } from '../services/usuario.service';
import { respuestaFormat } from '../utilities/responseFormat';

const servicio = new UsuarioService();

export class UsuarioController {
	async agregarNuevoUsuario(req: Request, res: Response, next: NextFunction) {
		try {
			const usuario = req.body as UsuarioAgregar;
			const nuevoUsuario = await servicio.addData(usuario);
			respuestaFormat(res, nuevoUsuario, 201, 'Accepted');
		} catch (error) {
			next(error);
		}
	}
	async login(req: Request, res: Response, next: NextFunction) {
		try {
			const data = req.body as UsuarioLogin;
			const token = await servicio.checUser(data);
			respuestaFormat(res, token);
		} catch (error) {
			next(error);
		}
	}
}