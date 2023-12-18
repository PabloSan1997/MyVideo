import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import { crearApi } from './routes';
import { variables } from './utilities/envVariables';
import { AppDataSource } from './db/config';
import { boomHandle } from './middlewares/boomHandle';

const app = express();

app.use(cors());
app.use(express.json());

crearApi(app);

app.use(boomHandle);

AppDataSource.initialize()
	.then(() => {
		app.listen(variables.port, () => {
			console.log(`http://localhost:${variables.port}`);
		});
	})
	.catch((e) => { console.error(e); });

