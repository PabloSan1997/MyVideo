import {DataSource} from 'typeorm';
import { Usuario } from './models/Usuario';
import { variables } from '../utilities/envVariables';
import { Videos } from './models/Videos';
import { Portada } from './models/Portada';


export const AppDataSource = new DataSource({
	type:'postgres',
	url:variables.urlDatabase,
	synchronize:true,
	logging:true,
	entities:[Usuario, Videos, Portada]
});