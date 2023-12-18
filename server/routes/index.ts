import express, { type Express } from 'express';
import { usuarioRouter } from './usuario.routes';
import { videosRoutes } from './videos.routes';
export function crearApi(app: Express): void {
	const mainRoute = express.Router();
	app.use('/api/v1', mainRoute);
	mainRoute.use('/video', videosRoutes);
	mainRoute.use('/user', usuarioRouter);
}
