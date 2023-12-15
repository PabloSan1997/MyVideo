import express, {type Express} from 'express';
export function crearApi(app: Express): void {
	const mainRoute = express.Router();
	app.use('/api/v1', mainRoute);
}
