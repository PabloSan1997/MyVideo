import {DataSource} from 'typeorm';
import { Usuario } from './models/Usuario';
import { variables } from '../utilities/envVariables';


export const AppDataSource = new DataSource({
	type:'mysql',
	url:variables.urlDatabase,
	synchronize:true,
	logging:true,
	entities:[Usuario]
});